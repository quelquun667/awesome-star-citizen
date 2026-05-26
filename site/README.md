# sc-tools — Web Site

Interactive front-end for the [sc-tools](../README.md) directory.
Built with [Astro](https://astro.build/) + [Three.js](https://threejs.org/).
Deployed automatically to GitHub Pages on every push to `main`.

## Stack

- **Astro 4** — static site generator, multi-page routing, native i18n.
- **Three.js** — subtle 3D starfield + nebula background.
- **Vanilla TS/CSS** — no UI framework needed. The directory is server-rendered, filters run client-side on plain DOM.
- **Data source** — reads [`../data.json`](../data.json) at build time.

## Local development

```bash
cd site
npm install
npm run dev
```

Then open http://localhost:4321/.

(On GitHub Pages, the workflow injects the repo name as base path via the `ASTRO_BASE` env var — e.g. `/awesome-star-citizen`. Locally the site runs at the root.)

## Build

```bash
npm run build      # outputs static site to ./dist
npm run preview    # serves the built site
```

The base path is controlled by the `ASTRO_BASE` env var (defaults to `/sc-tools`). The deploy workflow sets it to `/<repo-name>` automatically.

## Structure

```
site/
├── src/
│   ├── pages/
│   │   ├── index.astro       # English (default at /)
│   │   ├── fr/index.astro    # French at /fr/
│   │   └── es/index.astro    # Spanish at /es/
│   ├── components/
│   │   ├── Starfield.astro   # Three.js background
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── LanguageSwitcher.astro
│   │   └── Directory.astro   # search + filters + grid + cards
│   ├── layouts/
│   │   └── Layout.astro
│   ├── i18n/
│   │   ├── en.json
│   │   ├── fr.json
│   │   └── es.json
│   ├── utils/
│   │   ├── i18n.ts
│   │   └── tools.ts          # typed wrapper around data.json
│   └── styles/
│       └── global.css        # MobiGlas-inspired dark theme
└── astro.config.mjs
```

## Adding a tool

Edit [`../data.json`](../data.json) **and** the corresponding section in [`../README.md`](../README.md). The site picks up changes at the next build.

## Theme tokens

Defined as CSS custom properties in [`src/styles/global.css`](src/styles/global.css):

- `--accent` `#3ab0ff` — neon blue (Aegis / MobiGlas)
- `--orange` `#ff8c42` — industrial orange (CIG UI accent)
- `--bg-deep` `#05070d` — deep space background

Tweak these to reskin the whole site.
