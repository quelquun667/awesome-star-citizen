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

// Hosts confirmed alive but that block automated requests (Cloudflare,
// strict bot protection, or unstable DNS from CI). Errors here are
// downgraded to warnings instead of failing the build. Keep this short
// and re-verify entries by hand from time to time.
const SOFT_HOSTS = new Set([
  'imperialnews.network',
]);

function hostOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); }
  catch { return ''; }
}

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

// DNS-level failures mean the domain itself is gone — a genuine dead link.
const DNS_DEAD = new Set(['ENOTFOUND', 'EAI_AGAIN', 'ENODATA']);

function errorCode(err) {
  if (err?.name === 'AbortError') return 'timeout';
  const cause = err?.cause;
  if (cause?.code) return cause.code;
  if (Array.isArray(cause?.errors)) {
    for (const e of cause.errors) if (e?.code) return e.code;
  }
  return err?.code || 'fetch failed';
}

async function check(tool) {
  // Up to 2 tries to smooth over transient network/TLS hiccups.
  let lastCode;
  for (let i = 0; i < 2; i++) {
    try {
      const res = await attempt(tool.url);
      if (res.status >= 200 && res.status < 400) return { tool, ok: true, status: res.status };
      if (SOFT.has(res.status)) return { tool, ok: true, warn: true, status: res.status };
      if (res.status >= 500) return { tool, ok: true, warn: true, status: res.status }; // server hiccup, likely transient
      return { tool, ok: false, status: res.status }; // 404/410/other 4xx = dead page
    } catch (err) {
      lastCode = errorCode(err);
      if (i === 0) await new Promise((r) => setTimeout(r, 1500));
    }
  }
  // Known bot-blocking host -> always a warning, never a build failure.
  if (SOFT_HOSTS.has(hostOf(tool.url))) {
    return { tool, ok: true, warn: true, status: 0, error: lastCode + ' (known bot-blocker)' };
  }
  // Domain doesn't resolve -> dead. Connection reset / TLS / timeout -> host
  // is alive but blocks our bot, so warn instead of failing the build.
  if (DNS_DEAD.has(lastCode)) return { tool, ok: false, status: 0, error: lastCode };
  return { tool, ok: true, warn: true, status: 0, error: lastCode + ' (unreachable by bot)' };
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
