# Growth by Marta

Marta Armengod's personal portfolio site. Bilingual (Spanish/English), built with Astro, Tailwind CSS v4, and TypeScript. Statically generated — no backend, no database, no environment variables.

## Tech stack

- **[Astro](https://docs.astro.build) v7** — static site generator, content collections, i18n routing.
- **Tailwind CSS v4** — via `@tailwindcss/vite`, theme tokens defined in `src/styles/global.css`.
- **TypeScript** — used for all data files and component props.
- **Fraunces** (self-hosted via `@fontsource-variable/fraunces`) — serif headline font, standing in for the licensed Canela.
- **Caveat** (self-hosted via `@fontsource/caveat`) — handwritten accent font, used sparingly.
- **Satoshi** — body/UI sans-serif, loaded from Fontshare's CDN (`api.fontshare.com`) — the one external network dependency the site has at runtime.

No React/Vue/Svelte — everything is plain `.astro` components.

## Requirements

- **Node.js ≥ 22.12** (the project was built and tested on Node v22.14). Install from [nodejs.org](https://nodejs.org) or via `nvm`.
- No database, no API keys, no `.env` file — the site has zero environment variables.

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start local dev server at http://localhost:4321
```

Other commands:

```bash
npm run build     # production build → ./dist/
npm run preview   # serve the production build locally, to sanity-check before deploying
npm run astro check   # type-check the whole project (Astro + TypeScript)
```

The dev server defaults to `/es/` (Spanish is the default locale — see `astro.config.mjs`).

## Project structure

```text
src/
├── pages/                 # file-based routing (see "Routing" below)
├── components/
│   ├── pages/              # one component per page: Home.astro, About.astro, Contact.astro, WorkIndex.astro, WorkDetail.astro
│   └── *.astro              # shared components: Header, Footer, Button, Marquee, TestimonialCarousel, TestimonialCard, GradientOrb
├── layouts/
│   └── BaseLayout.astro    # <head>, fonts, Header/Footer wrapper — every page renders through this
├── data/
│   ├── es/, en/            # per-locale content: home.ts, about.ts, contact.ts, nav.ts, site.ts, work.ts
│   ├── types.ts            # TypeScript interfaces for all the content shapes above
│   └── index.ts            # getHome(lang), getAbout(lang), etc. accessor functions + the `paths` URL map
├── content/
│   └── work/es/, work/en/  # the 6 case studies, as Markdown files with frontmatter (title, role, tools, team, context, order, image, pending)
├── content.config.ts       # defines the `work` content collection schema
├── lib/
│   └── richText.ts         # renderEmphasis() — parses **bold** markers in content strings into styled chunks
├── styles/
│   └── global.css          # Tailwind v4 @theme tokens: colors, fonts, the .text-gradient / .gradient-orb / .eyebrow utility classes
└── assets/                 # all images, organized by purpose (brand/, logos/, testimonials/, work/, about/) — imported directly into components so Astro can optimize them

public/
├── files/                  # the two CV PDFs (ES/EN)
└── images/world-map.svg    # the only asset served unprocessed (referenced by an old, now-unused code path — see CLAUDE.md)
```

### Routing

Astro's file-based routing plus manual i18n (not the built-in i18n router — routes are hand-written per locale):

| Page | Spanish | English |
| --- | --- | --- |
| Home | `/es/` | `/en/` |
| About | `/es/sobre-mi/` | `/en/about/` |
| Work index | `/es/trabajo/` | `/en/work/` |
| Work detail | `/es/trabajo/[slug]/` | `/en/work/[slug]/` |
| Contact | `/es/contacto/` | `/en/contact/` |

`/` itself 302-redirects to `/es/`. The `[slug]` pages pull their content from the `work` Astro content collection (Markdown + frontmatter), not from `src/data/`.

## How content is organized

- **UI strings & page copy** (hero text, testimonials, nav labels, etc.) live in `src/data/{es,en}/*.ts` — plain TypeScript objects typed against `src/data/types.ts`.
- **Case studies** live in `src/content/work/{es,en}/*.md` — Markdown body + YAML frontmatter. The `order` field controls display order on the Work index; `pending: true` shows a "coming soon" placeholder instead of the body.
- Bold emphasis inside plain data strings (e.g. hero paragraphs) uses a custom `**text**` marker parsed by `renderEmphasis()` — not real Markdown, since those strings aren't run through a Markdown renderer. Case study `.md` files use real Markdown, so `**bold**` there is standard.

## Deploying

### Push to GitHub

```bash
git init                       # only if not already a repo
git add -A
git commit -m "Initial commit"
git remote add origin git@github.com:<your-username>/<repo-name>.git
git push -u origin main
```

(If you don't have an SSH key set up with GitHub yet, either generate one with `ssh-keygen` and add the public key at github.com/settings/keys, or use a Personal Access Token over HTTPS instead of SSH.)

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the GitHub repo.
2. Vercel auto-detects Astro — no config needed. Build command `npm run build`, output directory `dist`.
3. No environment variables to set.
4. Every push to `main` auto-deploys.

### Publishing future updates

Once connected to GitHub + Vercel, the workflow is simply:

```bash
git add -A
git commit -m "Describe what changed"
git push
```

Vercel picks up the push and redeploys automatically — no manual build/upload step.

## Known limitations

- **No Open Graph image** — social share previews will show no image (`og:title`/`og:description` are set, `og:image` is not). Worth adding if the site gets shared on social/Slack.
- **Fontshare dependency** — if `api.fontshare.com` is ever unreachable or the free Satoshi license changes, body text falls back to system sans-serif. Not a broken state, just a visual downgrade.
- **`astro check` intermittently times out** in some shell environments (was seen occasionally during development) — `npm run build` is unaffected and is the reliable way to verify the project compiles.
- One CV per locale (`public/files/CV_Marta_Armengod_{ES,EN}.pdf`) is linked from four places (Header is not one of them — only Home, About, Contact, and the Footer). If the CV is updated again, replace both PDFs and keep the exact filenames, or update the `cvUrl` field in `src/data/{es,en}/contact.ts`.

See `CLAUDE.md` for the full design system, content/tone rules, and project history — read that before making further changes with Claude Code.
