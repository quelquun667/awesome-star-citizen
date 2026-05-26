import { defineConfig } from 'astro/config';

// Local dev runs at '/'. On GitHub Pages, the workflow sets ASTRO_BASE
// to /<repo-name> automatically (e.g. /awesome-star-citizen).
const base = process.env.ASTRO_BASE ?? '/';
const site = process.env.ASTRO_SITE ?? 'https://quelquun667.github.io';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
