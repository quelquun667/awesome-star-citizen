# sc-tools — Web Site

Interactive front-end for the [sc-tools](../README.md) directory.
Built with [Astro](https://astro.build/) + [Three.js](https://threejs.org/).
Deployed automatically to GitHub Pages on every push to `main`.

## Stack

- **Astro 4** — static site generator, multi-page routing, native i18n.
- **Three.js** — full-screen GLSL space background (domain-warped fbm nebula, twinkling parallax stars, diffraction-spike accent stars).
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
│   │   ├── index.astro            # English home (category hub) at /
│   │   ├── category/[id].astro    # per-category pages
│   │   ├── prison.astro           # Klescher prison time calculator
│   │   ├── contribute.astro       # how to contribute
│   │   ├── fr/…                   # same pages under /fr/
│   │   └── es/…                   # same pages under /es/
│   ├── components/
│   │   ├── Starfield.astro        # full-screen GLSL nebula + stars background
│   │   ├── Header.astro / Footer.astro / LanguageSwitcher.astro
│   │   ├── CategoryHub.astro      # home: category cards + global search
│   │   ├── CategoryView.astro     # category page: search + flag filters
│   │   ├── ToolCard.astro         # shared tool card (favorite/copy/report)
│   │   ├── PrisonCalculator.astro
│   │   └── ContributeGuide.astro
│   ├── layouts/
│   │   └── Layout.astro           # meta/OG tags, favorites + shortcuts JS
│   ├── i18n/                      # en.json / fr.json / es.json (UI strings)
│   ├── utils/
│   │   ├── i18n.ts
│   │   ├── tools.ts               # typed wrapper around data.json
│   │   ├── categoryMeta.ts        # inline SVG icons per category
│   │   └── prison.ts              # ore → merit rates for the calculator
│   └── styles/
│       └── global.css             # dark space theme (CSS custom properties)
├── public/                        # favicon.svg, og-image.svg
└── astro.config.mjs
```

## Adding a tool

Edit [`../data.json`](../data.json) **and** the corresponding section in [`../README.md`](../README.md). The site picks up changes at the next build.

## Theme tokens

Defined as CSS custom properties in [`src/styles/global.css`](src/styles/global.css):

- `--accent` `#7aa6d8` — powder blue
- `--orange` `#d8966a` — muted industrial orange
- `--bg-deep` `#0a0d18` — deep space background

Tweak these to reskin the whole site.
