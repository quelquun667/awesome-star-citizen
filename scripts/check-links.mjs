// Checks every tool URL in data.json is still reachable.
// Run: node scripts/check-links.mjs
// Exits 1 if any hard failures (DNS error, 404/410, 5xx) are found.

import { readFile } from 'node:fs/promises';

const dataUrl = new URL('../data.json', import.meta.url);
const data = JSON.parse(await readFile(dataUrl, 'utf8'));
const tools = data.tools ?? [];

const TIMEOUT_MS = 15000;
const CONCURRENCY = 6;

// Statuses that mean "host is alive but blocks bots" — warn, don't fail.
const SOFT = new Set([401, 403, 405, 406, 429]);

const UA =
  'Mozilla/5.0 (compatible; awesome-star-citizen-linkcheck/1.0; +https://github.com/quelquun667/awesome-star-citizen)';

function attempt(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  return fetch(url, {
    method: 'GET',
    redirect: 'follow',
    signal: controller.signal,
    headers: { 'User-Agent': UA, Accept: '*/*' },
  }).finally(() => clearTimeout(timer));
}

async function check(tool) {
  // Up to 2 tries to smooth over transient network/TLS hiccups.
  let lastErr;
  for (let i = 0; i < 2; i++) {
    try {
      const res = await attempt(tool.url);
      if (res.status >= 200 && res.status < 400) return { tool, ok: true, status: res.status };
      if (SOFT.has(res.status)) return { tool, ok: true, warn: true, status: res.status };
      return { tool, ok: false, status: res.status };
    } catch (err) {
      lastErr = err.name === 'AbortError' ? 'timeout' : err.code || err.message || 'fetch failed';
      if (i === 0) await new Promise((r) => setTimeout(r, 1500));
    }
  }
  return { tool, ok: false, status: 0, error: lastErr };
}

async function run() {
  const results = [];
  const queue = [...tools];
  async function worker() {
    while (queue.length) {
      const tool = queue.shift();
      results.push(await check(tool));
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  const failures = results.filter((r) => !r.ok);
  const warnings = results.filter((r) => r.ok && r.warn);
  const ok = results.filter((r) => r.ok && !r.warn);

  console.log(`\nChecked ${results.length} links: ${ok.length} OK, ${warnings.length} warnings, ${failures.length} failed.\n`);

  for (const w of warnings) {
    console.log(`  ⚠️  ${w.status}  ${w.tool.name}  →  ${w.tool.url}`);
  }
  for (const f of failures) {
    console.log(`  ❌  ${f.status || f.error}  ${f.tool.name}  →  ${f.tool.url}`);
  }

  if (failures.length) {
    console.error(`\n${failures.length} dead link(s) found.`);
    process.exit(1);
  }
  console.log('\nAll links reachable. ✅');
}

run();
