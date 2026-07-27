# CLAUDE.md — Growth by Marta

This file is the project brief for Claude Code (or any future AI assistant) working on this repo. Read this before making changes. `AGENTS.md` has the short, tool-agnostic dev-server commands; this file has everything else.

## What this is

Marta Armengod's personal portfolio site (B2B SaaS growth marketer). Bilingual ES/EN. Built to replace a CV: real projects, how she approached each one, and how she thinks about marketing/growth. Not a generic "SaaS landing page" — the whole site was deliberately steered *away* from that template, several times, over the course of development (see "Design history" below).

## Page structure

- **Home** (`/es/`, `/en/`) — hero with stats, expertise marquee, "where I add value" cards, dark "experience" section with company logos, featured project (Partner GTM case study, condensed), testimonials, "how I work" cards, "one last thing" closing, final CTA.
- **About** (`/es/sobre-mi/`, `/en/about/`) — intro + CTAs, collapsible career timeline (5 milestones), world map (static image, see below), results cards, closing quote with emoji row + handwritten accent line.
- **Work** (`/es/trabajo/`, `/en/work/`) — index of 6 case studies as cards, plus individual detail pages rendering the Markdown body.
- **Contact** (`/es/contacto/`, `/en/contact/`) — minimal: intro, location line, three CTAs (email, LinkedIn, CV).

## Design system

- **Colors** (`src/styles/global.css` `@theme`): `ivory` (#F8F5F1, page background), `sand`, `clay`, `charcoal` (#2D2926, text) as neutrals; `coral` (#FF6468), `hotpink`, `sunset`, `peach`, `lavender`, `sage` as accents. The brand gradient (used in `.text-gradient`, `.gradient-orb`, `.brand-gradient`) runs hotpink → coral → sunset → peach.
- **Fonts**: Fraunces (serif, headlines — stand-in for the licensed Canela, swap if a license is ever bought), Satoshi (sans, body — loaded from Fontshare CDN), Caveat (handwritten accent — **used sparingly**, currently only the About page closing quote and Home's "one last thing" swash).
- **`.eyebrow`** class — small caps label style, used above section headings throughout.
- **`GradientOrb.astro`** — the soft blurred gradient blob used behind hero copy and section breaks. It's the site's one recurring "signature" decorative element — don't introduce a second competing decorative motif.
- **Cards**: `rounded-3xl` or `rounded-[2rem]`, `border border-charcoal/10`, `bg-white`, `shadow-sm`, hover lifts (`hover:-translate-y-1 hover:shadow-lg`). This pattern repeats across value cards, results cards, work index cards, how-I-work cards — keep new cards consistent with it rather than inventing a new card style.
- **Spacing**: sections generally use `py-20 lg:py-28` (or `py-16 lg:py-20` for tighter ones like the About map). Content maxes out at `max-w-4xl`–`max-w-6xl` depending on section.
- **Buttons** (`Button.astro`): variants `primary`, `secondary`, `primaryOnDark`, `secondaryOnDark`. **Do not add a gradient back to buttons or otherwise restyle Button.astro without being asked** — Marta explicitly rejected a gradient CTA redesign and said not to touch it again ("los ctas dejalos asi en verdad no los cambies").

## Writing tone

First person, direct, concrete. Real numbers only — **never invent metrics**. Where exact figures are confidential, case studies carry an explicit note ("Some figures have been adjusted to protect confidentiality..."). Bold (`**text**`, rendered via `renderEmphasis()` in data strings, or real Markdown in case study `.md` files) is used to mark the one or two scannable phrases per paragraph — not whole sentences, not every paragraph.

## Bilingual content rules

- Spanish is the default locale (`prefixDefaultLocale: true` in `astro.config.mjs`, so both locales get a `/es/`/`/en/` prefix).
- Content between locales is **not** always a literal translation — some sections were deliberately shortened/reworded in one language only, at Marta's request (e.g. Home's "Experience" paragraph is worded slightly differently in EN than ES). Don't "fix" a discrepancy between languages by making them match unless asked — check with her first, since it may be intentional.
- Company/context strings (case study frontmatter `context:` field) should read identically in tone between the ES and EN version of the *same* case study — that was an actual bug fixed once (see "Known issues fixed" below) and is worth double-checking whenever a case study is added or edited.

## Sections that are settled — don't change without being asked

- **Button.astro styling** (see above).
- **The About page's overall structure** (hero → timeline → map → results → closing) went through three full redesign rounds before landing on the current "editorial restraint" version — cards/icons/gradients were explicitly tried and rejected as making it "feel like a landing page, not a personal story." Don't reintroduce decorative cards/icons/illustrations into the timeline or closing sections.
- **The world map**: uses a static PNG (`src/assets/about/world-map.png`, a pre-rendered line-art map with country borders and dots already baked in, supplied by Marta) — not the old dynamic SVG+hover-tooltip system. That older system (public/images/world-map.svg + hand-calibrated lat/lon coordinates) is **dead code as far as the About page is concerned** — the file is still in `public/images/` but nothing imports it anymore. Don't resurrect the dynamic version without being asked; the static image is the current, approved direction.
- **Testimonial carousel on mobile**: arrows are intentionally hidden below `sm:` — mobile relies on native touch-scroll. Don't re-add mobile arrows without checking it doesn't overflow (this caused a real visual bug once — see below).

## Component notes

- **`Marquee.astro`** takes a `copies` prop (how many times the content repeats) and a `durationSeconds` prop (time per single copy-width) — it computes the translate percentage and total animation duration from those so visual scroll speed stays constant regardless of `copies`. If a marquee ever shows a visible gap at the loop point, the fix is to increase `copies`, not to hand-tune the animation.
- **`TestimonialCarousel.astro`** takes a `variant` prop (`"dark"` | `"light"`) that controls the prev/next button colors, because it's used on both a dark section (Home's old layout) and a light one (current Home layout, and potentially elsewhere) — check which background it's sitting on before reusing it.
- **`renderEmphasis()`** (`src/lib/richText.ts`) is only for parsing `**bold**` inside plain TypeScript content strings (`src/data/*.ts`). Case study Markdown files in `src/content/work/` don't need it — Astro's Markdown renderer already turns `**bold**` into `<strong>` there.
- **Content collection images**: case study cover images (frontmatter `image:` field) go through Astro's image pipeline automatically via the `image()` schema helper in `content.config.ts`. Images referenced directly in a case study's Markdown *body* (e.g. the two inline visuals in `lead-to-revenue.md`) are also auto-optimized — Astro's content-collection Markdown pipeline processes local relative image paths in the body too, no extra config needed.

## Known issues fixed (don't reintroduce)

- **`overflow-visible` on an SVG breaks clipping** — was briefly added to the (now-removed) dynamic world map SVG to stop hover-tooltip text from clipping, but it also un-clipped the underlying map image, causing Antarctica/Arctic mess to bleed into neighboring sections. If any SVG in this project ever needs clipping (viewBox-based crop), don't add `overflow-visible` to work around a labeling issue — solve the label overflow a different way.
- **Mobile testimonial carousel overflow** — with visible arrow buttons, the card + two 44px arrow buttons didn't fit inside the mobile content width, causing horizontal clipping. Fixed by hiding the arrows below `sm:`.
- **White-on-white testimonial name text** — a testimonial name inherited white text color from a dark parent section despite sitting inside a white card. Any new component nested inside a differently-colored section should set its own text color explicitly rather than relying on inheritance.

## Unfinished / open items

- **Partner GTM case study cover image** exists in two variants for different asset names historically (`partner-gtm-EN.png`, `partner-gtm-ES.png` in content frontmatter vs. `partner-gtm-illustration.png`/`partner-gtm-illustration-mobile-v2.png` used directly in Home.astro's featured-project section) — these are two *different* images for two different purposes (case study cover vs. Home's featured-project teaser image) and that's intentional, not a duplicate to clean up.
- **No automated tests** — verification has always been manual (dev server + browser check + `npm run build`). If test coverage is ever wanted, there's nothing to preserve/migrate — it'd be starting from zero.
- **No Open Graph image** — see README "Known limitations."
- Marta mentioned wanting to eventually deploy this (GitHub → Vercel) — `astro.config.mjs` already has `site: 'https://growthbymarta.com'` set, but as of this handover the site is not yet actually deployed anywhere public.

## Recommendations for future work

- Before changing shared components (`Button.astro`, `Marquee.astro`, `TestimonialCarousel.astro`, `GradientOrb.astro`), check every page that uses them (`grep -rn "ComponentName" src/components/pages`) — several of them are reused across Home/About/Work with different variants/props.
- When adding a new case study: match the existing frontmatter shape exactly (`title`, `role`, `tools`, `team`, `context`, `pending`, `order`, `image`), give it both an ES and EN Markdown file, and add its cover image to `src/assets/work/`. Set `order` to slot it into the existing sequence (currently 0–5, see `PROJECT-INVENTORY.md` for the current order).
- Verify with `npm run build` after content or component changes, not just `npm run dev` — the dev server can mask certain build-only errors (e.g. content collection schema mismatches).
- Screenshot-based visual verification in this environment has occasionally been unreliable (blank/stale screenshots right after scroll or navigation) — cross-check with a DOM/JS assertion (element existence, text content, `getBoundingClientRect()`) before concluding something is visually broken, and retry the screenshot once before trusting a "blank" result.
