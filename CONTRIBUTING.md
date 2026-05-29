# Contributing

Thanks for helping grow this directory of Star Citizen tools! There are two ways to contribute — pick whichever suits you.

## 🟢 The easy way — suggest a tool (no coding)

Open a pre-filled form, fill in a few fields, submit. That's it.

- [**Suggest a tool**](https://github.com/quelquun667/awesome-star-citizen/issues/new?template=suggest-a-tool.yml)
- [**Report a dead or broken link**](https://github.com/quelquun667/awesome-star-citizen/issues/new?template=report-dead-link.yml)

A maintainer will review and add it. Done.

## 🔵 The dev way — open a Pull Request

If you're comfortable with Git, add the entry yourself.

1. Fork the repository.
2. Add your tool **in both** [`data.json`](data.json) and [`README.md`](README.md) (and, if you can, the translated READMEs).
3. Open a Pull Request with a short justification.

### `data.json` entry format

```json
{
  "id": "unique-kebab-case-id",
  "name": "Tool Name",
  "url": "https://full-url/",
  "category": "ships-gear",
  "description": "One-sentence description.",
  "flags": ["website"]
}
```

**Valid `category` values:** `ships-gear`, `trade-logistics`, `databases`, `wikis-lore`, `maps-navigation`, `org-fleet`, `community-news`.

**Valid `flags` values:** `website` 🌐, `account-required` 🔒, `extension` 🧩, `paid` 💰, `community` ⚠️.

### `README.md` entry format

```
- **Tool Name** — [domain.tld](https://full-url/) — One-sentence description. <icons>
```

## Rules

- **One tool = one entry.** No duplicates across categories — pick the best fit.
- **Keep descriptions to one sentence**, neutral tone.
- **It must be genuinely useful** to Star Citizen players and currently maintained.
- Dead links and abandoned tools are removed during periodic reviews (an automated checker runs weekly).

## Local development (website)

```bash
cd site
npm install
npm run dev
```

See [`site/README.md`](site/README.md) for details.
