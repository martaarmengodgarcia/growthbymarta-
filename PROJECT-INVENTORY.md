# Project Inventory

A full accounting of what's in this project, as of the handover date. Useful for confirming nothing was lost in transfer (see `HANDOVER-CHECKLIST.md` step 6).

## Pages / Routes

| Route (ES) | Route (EN) | Component |
| --- | --- | --- |
| `/` (redirects to `/es/`) | — | `src/pages/index.astro` |
| `/es/` | `/en/` | `src/components/pages/Home.astro` |
| `/es/sobre-mi/` | `/en/about/` | `src/components/pages/About.astro` |
| `/es/trabajo/` | `/en/work/` | `src/components/pages/WorkIndex.astro` |
| `/es/trabajo/[slug]/` | `/en/work/[slug]/` | `src/components/pages/WorkDetail.astro` |
| `/es/contacto/` | `/en/contact/` | `src/components/pages/Contact.astro` |

14 statically-generated pages total (1 redirect + 2×[home, about, work index, contact] + 2×6 case study detail pages) — `npm run build` reports 21 because it also counts a couple of internal/duplicate entries; the meaningful page count is 14.

## Case studies (`src/content/work/{es,en}/*.md`)

All 6 are complete and published (`pending: false`). Current display order (the `order` frontmatter field):

| Order | Slug | Title (ES) |
| --- | --- | --- |
| 0 | `partner-gtm` | Convertir un lanzamiento de producto en una estrategia de crecimiento |
| 1 | `vertical-gtm` | De un producto horizontal a una estrategia de go-to-market por vertical |
| 2 | `sdr-sequences` | Automatización del outbound para SDRs |
| 3 | `customer-stories` | Cómo convertí customer stories en una herramienta para ventas |
| 4 | `meta-retargeting` | Cómo una campaña de retargeting destapó un problema de conversión |
| 5 | `lead-to-revenue` | Construir un sistema de reporting de lead a revenue |

Each case study exists as a matching `.md` file in both `es/` and `en/` with the same slug/filename.

## Forms

**None.** The Contact page has no `<form>` element — all three CTAs (email, LinkedIn, CV) are plain links. The "email" CTA is a `mailto:` link, not a submission handler, so there's no backend, no form service, and nothing that can break due to a missing API key.

## Internal links / navigation

- **Header** (every page): Home, About, Work, Contact nav links + language switcher + "Hablemos"/"Let's talk" button (→ `mailto:`, not the Contact page).
- **Footer** (every page): same nav links, plus Email/LinkedIn/CV links.
- **Home → Work**: hero CTA, featured project CTA, "View projects" CTA all link into `/work/` or a specific case study slug.
- **Work index → Work detail**: each card links to its own case study.
- **Work detail → Work index**: "back to work" link at both top and bottom of each case study page.

## External links (outbound, non-navigational)

- Company logos in Home's "Experience" section link out to the real companies: `medowhealth.ai`, `blip.ai`, `fossa.systems`, `gbreports.com`.
- LinkedIn profile: `linkedin.com/in/martaarmengodgarciavaldecasas` (Header is not one of the places this appears — it's in Footer and on the Contact page).

## External dependencies / integrations

- **Fontshare CDN** (`api.fontshare.com`) — loads the Satoshi font at runtime. The only external network call the live site makes. No API key involved (Fontshare's free tier is keyless).
- **No analytics, no forms backend, no CMS, no database, no environment variables.**

## Images & assets (`src/assets/`)

| Folder | Contents |
| --- | --- |
| `brand/` | Marta's photos — hero cover, About page hero/closing photo, an unused cutout experiment (`marta-about-cutout.png`), an unused earlier portrait (`marta-portrait.png`), and the logo mark. |
| `about/` | `world-map.png` — the static world map image used on the About page (see `CLAUDE.md` for why this replaced the old dynamic SVG version). |
| `logos/` | Company logos used in Home's experience section and About's results cards: Blip, Medow, FOSSA, GBR. |
| `testimonials/` | Headshot photos for the 5 testimonials: Joel, David, Jaime, Carola, Pedro. |
| `work/` | Case study cover images (one per case study, some with `-EN`/`-ES` suffixes for locale-specific covers) plus two inline visuals used inside the `lead-to-revenue` case study body, plus the Home featured-project illustration (desktop + mobile variants). |

Static, unprocessed assets in `public/`:
- `public/files/CV_Marta_Armengod_ES.pdf` and `_EN.pdf`
- `public/images/world-map.svg` — **no longer referenced by any page**; it was the base map for the old dynamic SVG map system. Safe to delete, but left in place in case that approach is ever revisited.
- `public/favicon.ico`, `public/favicon.svg`

Total image assets: 26 files. Total non-image assets in `public/`: 4 (2 PDFs, 1 SVG map, favicons).

## Data files (`src/data/`)

Two per section, one per locale: `home.ts`, `about.ts`, `contact.ts`, `nav.ts`, `site.ts`, `work.ts` × `{es, en}` = 12 files, plus the shared `types.ts` and `index.ts` accessor layer.

## Components

- **Page components** (`src/components/pages/`): `Home.astro`, `About.astro`, `Contact.astro`, `WorkIndex.astro`, `WorkDetail.astro`.
- **Shared components** (`src/components/`): `Header.astro`, `Footer.astro`, `Button.astro`, `Marquee.astro`, `TestimonialCarousel.astro`, `TestimonialCard.astro`, `GradientOrb.astro`.
- **Layout**: `src/layouts/BaseLayout.astro`.
- **Utility**: `src/lib/richText.ts` (`renderEmphasis`).

## Configuration files

- `astro.config.mjs` — site URL, i18n locales, Tailwind Vite plugin.
- `content.config.ts` — the `work` content collection schema.
- `tsconfig.json`, `package.json`, `package-lock.json`.
- `.gitignore` — excludes `node_modules/`, `dist/`, `.astro/`, `.env*`, `.DS_Store`, `.idea/`.
- `.vscode/` — editor settings (extensions recommendation, launch config), harmless to keep or delete.

## Environment variables

**None.** No `.env` file exists in the project and none is required.
