# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # local dev server (http://localhost:3000)
npm run build    # production build — run this to verify TypeScript and output before committing
npm run lint     # ESLint
```

There is no test suite. Use `npm run build` to catch TypeScript errors.

## Environment variables

Two variables are required — copy `.env.local.example` to `.env.local`:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_APP_URL` | Base URL of the TableFlow app (`https://app.table-flow.de`) — used for all CTA/login/register buttons |
| `RESEND_API_KEY` | Resend API key for the contact form (`/api/contact`) |

`NEXT_PUBLIC_APP_URL` must also be set as an environment variable in Vercel. Without it the hardcoded fallback in each component is used.

## Architecture

**Next.js 16 App Router** (`src/app/`), React 19, Tailwind CSS v4, deployed on Vercel.

### Homepage composition

`src/app/page.tsx` composes the single-page marketing site from independent section components rendered in order:

```
HeroSection → StatsSection → FeaturesSection → ProductTabsSection
→ PricingSection → FaqSection → CtaBanner
```

Each section lives in `src/components/sections/`. Adding or reordering sections means editing only `page.tsx`.

### Shared layout

`src/app/layout.tsx` wraps every page with `<Nav>` and `<Footer>`. Global metadata (OG tags, `metadataBase`) is defined here. The marketing domain is `https://www.tableflow.de` (no hyphen) — only the **app** URL uses `https://app.table-flow.de` (with hyphen).

### App URL pattern

Every component that links to the app declares its own constant at the top:

```ts
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.table-flow.de";
```

Affected files: `Nav.tsx`, `HeroSection.tsx`, `CtaBanner.tsx`, `PricingSection.tsx`.

### Animation system

`src/components/animations/ScrollReveal.tsx` exports three primitives used throughout:

- `<ScrollReveal>` — fade-in-up on scroll, `once: true`
- `<StaggerContainer>` + `<StaggerItem>` — staggered children (0.08s between items)

All animations respect `useReducedMotion()` and are disabled when the user prefers reduced motion.

### Contact form

`src/components/ContactForm.tsx` → POST `src/app/api/contact/route.ts`

The API route uses **Resend** to send mail. Rate-limited to 5 requests/IP/10 min (in-memory). The `FROM` sender is `kontakt@tableflow.de`; the `RECIPIENT` is `info@table-flow.de`.

### Legal pages

`/impressum`, `/datenschutz`, `/agb` are static pages in `src/app/`. Each has a corresponding `.md` source document in `src/app/` (e.g. `IMPRESSUM.md`) kept in sync with the rendered TSX. Robots indexing is disabled for these pages via `metadata.robots`.

### Logos

Final logo set lives in `public/`:

| File | Use |
|---|---|
| `logo-full.svg` | Nav + Footer (light background) |
| `logo-full-white.svg` | Dark backgrounds |
| `logo-icon.svg` | Small surfaces |
| `logo-icon-white.svg` | Small surfaces on dark backgrounds |

`src/app/icon.svg` and `src/app/apple-icon.png` serve as browser tab / Apple device icons via Next.js App Router conventions.

### Pricing plans

Defined as a typed `Plan[]` array in `PricingSection.tsx`. Three plans: Basic (9,95 €), Pro (19,95 €, `highlighted`), Business (49,95 €, `premium`). When pricing changes in the app, update this file and `FaqSection.tsx` (FAQ answer about plan differences) and `agb/page.tsx` (§ 2 plan list).
