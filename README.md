# Daleel corporate website

Corporate site for DaleelStore (company.daleelstore.com): products, traction, leadership, investors, newsroom, careers and contact. Built as a static Next.js export so it can be hosted on Cloudflare Pages, Vercel, Netlify or any static host.

## Stack

- Next.js 16 (App Router, `output: "export"`), React 19, TypeScript
- Tailwind CSS 4 with brand tokens in `app/globals.css`
- `motion` for scroll reveals, counters and the interactive product explorer
- `lucide-react` icons; Google Fonts (Manrope + IBM Plex Sans Arabic) loaded at build time via `next/font`

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
npx serve out    # preview the export
```

## Structure

| Path | What it is |
|---|---|
| `lib/content.ts` | Single source of truth for all copy, numbers, products, people, news. Edit this first. |
| `app/globals.css` | Design tokens (`--color-navy`, `--color-lavender`, type scale, buttons, cards). |
| `app/page.tsx` | Home: hero, trust marquee, product explorer, ecosystem, audience switcher, traction chart, timeline, fundraising, leadership, news, FAQ, CTA. |
| `app/products/[slug]/` | One page per product (7), generated from `products` in `lib/content.ts`. |
| `app/company/`, `app/investors/`, `app/newsroom/`, `app/careers/`, `app/contact/` | Secondary pages. |
| `components/ProductDemos.tsx` | Pure CSS/SVG interactive mockups for each product (no image assets needed). |
| `components/LeadForm.tsx` | Contact form (client-side only; wire to a CRM or form backend). |
| `docs/CONTENT-AUDIT.md` | Every number and claim on the site with its source and status (verified / placeholder). |
| `docs/RESEARCH.md` | Benchmark of best-in-class corporate sites and the patterns adopted. |

## Brand

The logo in `components/Logo.tsx` and `public/brand/` is the official mark and wordmark, vectorised from the brand file and set in the corporate black/gray colourway (`#0B0B0F` to `#3A3A44`, Arabic in `#6B6F7B`). The brand name is **Daleel**; DaleelStore remains the name of the consumer marketplace. Navy `#090F30` and lavender `#DDE0FF` were sampled from the July 2026 LinkedIn banner; indigo/violet accents and Manrope for body text are stand-ins until the Figma tokens arrive. All tokens live in one place (`@theme` block in `app/globals.css`).

## Before launch

1. Replace every item marked `[placeholder]` in `lib/content.ts` (see `docs/CONTENT-AUDIT.md`).
2. Confirm funding-round facts in `funding` and flip `announced: true` on announcement day.
3. Add partner logo SVGs (currently rendered as text badges pending logo rights).
4. Connect `LeadForm` to a backend (HubSpot, Formspree, or an API route on a non-static deploy).
5. Add Arabic locale if required (content model is ready for a second dictionary; RTL styles not yet added).
6. Replace `favicon.svg` and `Logo.tsx` with brand-kit assets; add an OG image at `public/og.png`.
