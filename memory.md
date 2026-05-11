# Project Memory — Value Tech Solution

This file is the single source of truth for anyone (human or AI) picking up
the project cold. It captures decisions, conventions, and gotchas that
aren't obvious from reading the code.

Last updated: 2026-05-11

---

## 1. What this is

A Next.js 16 (App Router) marketing site for **Value Tech Solution** — an
AI automation studio offering n8n / GoHighLevel / Zapier / Python
automations alongside Next.js websites and SEO programs. Production URL:
`https://valuetechsolution.com`. Repo:
`https://github.com/Shazeed06/valuetechsolution-website`. Hosted on
Vercel with auto-deploy on push to `main`.

Brand voice: "engineers, not marketers." Premium B&W design, cream
(`rgb(252,251,249)`) base with carbon-950 (`#0a0a0a`) ink and selective
emerald-400 accents for live / status dots.

---

## 2. Contact + brand details (single source of truth)

Centralised in `lib/contact-config.ts`:

- **Email**: `admin@valuetechsolution.com`
- **Phone / WhatsApp**: `+91 82872 45032` (E.164: `918287245032`)
- **LinkedIn**: `https://www.linkedin.com/in/valuetech-solution-624528409/`
- **Brand name**: "Value Tech Solution"

Never hard-code these values anywhere else. Always import from
`@/lib/contact-config`. Old stale refs to remove on sight: `b29`, `B29`,
`hello@valuetech.io`, `valuetech.io`.

Logo is `public/logo-main.png`. Rendered via `components/Logo.tsx` using
a plain `<img>` with `height` fixed and `width: auto` (next/image would
crop the wide aspect). Sizes in use:
- Navbar mobile: **80px**
- Navbar desktop: **88px** (header is `h-24` = 96px)
- Footer: **180px**

---

## 3. Tech stack

- **Next.js 16** App Router + TypeScript + Tailwind CSS
- **Fonts**: Cabinet Grotesk + JetBrains Mono (via Fontshare CDN)
- **Animation**: GSAP + ScrollTrigger; Framer Motion sparingly
- **Smooth scroll**: Lenis (`components/LenisProvider.tsx`)
- **3D hero**: Three.js, dynamic-imported (`ssr:false`), lazy-loaded
- **Email**: Resend (`app/actions/contact.ts`)
- **Analytics**: GTM (`GTM-W6BL4JCR`) + PostHog (consent-gated)
- **Forms**: Server Actions + honeypot + in-memory rate limiter (10/hr/IP)
- **Env validation**: zod (`lib/env.ts`)

---

## 4. Pricing (current, post-reduction)

Lowered ~60–70% from the original American-market pricing for
Indian-market / young-startup accessibility. Sources of truth:

- `app/pricing/page.tsx` — main tiers + by-discipline grid
- `app/services/<slug>/page.tsx` — per-service tiers
- `public/llms.txt` — pricing anchors for AI search engines
- `components/CTA.tsx` — "diagnostic from $399" stat

Main tiers:

| Tier | Price |
|---|---|
| Diagnostic | $399 (2-week workflow audit) |
| Build sprint | from $1,999 (4–6 weeks) |
| Studio retainer | from $1,499 / mo (3-month minimum) |

Per-service:

| Service | Entry | Build | Retainer |
|---|---|---|---|
| AI Automation | $399 | $1,999 | $1,499/mo |
| Web Development | $599 | $2,499 | $5,999 (web app) |
| SEO | $499 | — | $799/mo |
| Design Systems | $1,299 | $4,499 | $1,499/mo |
| n8n | $499 | $1,999 | $1,199/mo |
| GoHighLevel | $499 | $1,499 | $799/mo |
| Zapier | $299 | $1,299 | $599/mo |
| Python | $399 | $2,499 | $1,499/mo |

Contact form budget bands: `< $1k / $1k–$3k / $3k–$8k / $8k+`.

---

## 5. Routes (App Router)

```
app/
  layout.tsx              # root layout (GTM, Consent Mode default, providers)
  page.tsx                # home (Hero, Stats, Capabilities, etc.)
  about/page.tsx
  blog/
    page.tsx              # index
    [slug]/page.tsx       # post detail (data in lib/blog.ts)
  case-studies/page.tsx
  contact/page.tsx
  portfolio/page.tsx
  pricing/page.tsx
  privacy/page.tsx
  security/page.tsx
  services/
    page.tsx              # index
    ai-automation/page.tsx
    web-development/page.tsx
    seo/page.tsx
    design-systems/page.tsx
    n8n/page.tsx
    gohighlevel/page.tsx
    zapier/page.tsx
    python-automation/page.tsx
  team/page.tsx
  terms/page.tsx
  actions/
    contact.ts            # "use server" — Resend + webhook delivery
```

---

## 6. Key components

| File | Purpose |
|---|---|
| `Navbar.tsx` | Sticky header. Sliding underlines on nav links (hover + active), live IST clock (md+), scroll-progress bar at bottom, shimmer CTA, hover-intent dropdown (180ms close delay + invisible bridge), responsive logo |
| `Footer.tsx` | 5-column site map + legal row + socials |
| `Hero.tsx` | Home dark hero. Has `-mt-24` so it overlays under the transparent header — critical for the mobile fix described in §10 |
| `HeroScene3D.tsx` | Three.js scene, dynamic + lazy + IntersectionObserver pause |
| `CustomCursor.tsx` | Black two-layer cursor. Auto-disabled on touch / coarse pointer. Hides native cursor via `html.vts-cursor-on` class + media query in `globals.css` |
| `FloatingActions.tsx` | Bottom-right WhatsApp/Email/Book panel. **Action items only render when open** (see §10 — was the mobile tap-hijack bug) |
| `CookieBanner.tsx` | Consent banner, writes via `lib/consent.ts` |
| `AnalyticsProvider.tsx` | PostHog init — **gated on `hasAnalyticsConsent()`** (listens for `vts:consent-change` event) |
| `Schema.tsx` | JSON-LD exports: Organization, WebSite, Service, FAQPage, Article, Breadcrumb (AggregateRating removed — see §10) |
| `ContactForm.tsx` | Client form with server-action submit + WhatsApp fallback link |
| `ROICalculator.tsx` | Uses `toLocaleString("en-US")` — explicit locale to avoid hydration mismatch |

---

## 7. Environment variables

Validated by zod in `lib/env.ts`. All optional — the site degrades
gracefully without them, but contact form will fail loud if no delivery
channel is configured.

| Var | Required? | Notes |
|---|---|---|
| `RESEND_API_KEY` | for lead delivery | Set in Vercel env vars. Free Resend tier works with `onboarding@resend.dev` sender |
| `RESEND_FROM` | optional | Defaults to `"Value Tech Solution <onboarding@resend.dev>"`. Set to a verified-domain address once DNS for `valuetechsolution.com` is added to Resend |
| `CONTACT_WEBHOOK_URL` | optional | Slack-style webhook, posted in parallel with email |
| `NEXT_PUBLIC_POSTHOG_KEY` | optional | Only inits after "Allow all" consent |
| `NEXT_PUBLIC_POSTHOG_HOST` | optional | Defaults to `https://us.i.posthog.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | optional | Overrides phone in WhatsApp deep links |
| `NEXT_PUBLIC_CAL_LINK` | optional | If set + starts with http, FloatingActions "Book a call" opens it in new tab; else links to `/contact` |

If neither `RESEND_API_KEY` nor `CONTACT_WEBHOOK_URL` is set, the contact
action logs the full lead payload to Vercel console and returns a clear
error pointing the user to email directly (no silent success).

---

## 8. Analytics + consent setup

### GTM
- Container: `GTM-W6BL4JCR`
- Init in `app/layout.tsx`, two scripts:
  1. `gtag-consent-default` (`strategy="beforeInteractive"`) — sets all
     advertising + analytics categories to `denied`, applies an `update`
     to `granted` if a previous `"all"` decision is in localStorage
  2. `gtm-init` (`strategy="afterInteractive"`) — standard GTM snippet
- Noscript iframe at top of `<body>`

### PostHog
- Inited in `components/AnalyticsProvider.tsx`
- **Will not load until** `lib/consent.ts::hasAnalyticsConsent()` returns true
  (i.e. user clicked "Allow all" in the banner)
- Listens for `vts:consent-change` CustomEvent + `storage` event so it
  reacts live without a reload

### Cookie banner
- Component: `components/CookieBanner.tsx`
- Reads/writes via `lib/consent.ts`
- `writeConsent(value)`:
  - Persists to `localStorage` key `vts-cookie-consent-v1`
  - Pushes `gtag('consent', 'update', {...})` for Consent Mode v2
  - Dispatches `vts:consent-change` event for in-app listeners

To wire individual GTM tags (GA4, Ads, etc.) to Consent Mode: in the
GTM container, open each tag → Advanced Settings → Consent Settings →
require the relevant built-in categories. Then publish.

---

## 9. SEO / GEO / AEO

- `app/sitemap.ts` and `app/robots.ts` generate the standard files
- `public/llms.txt` is the AI-search engine cheat sheet (pricing
  anchors, services, important pages)
- `robots.txt` explicitly allows: GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended
- JSON-LD shipped sitewide via `components/Schema.tsx`:
  Organization, WebSite. Per-route schemas (Service, Article, FAQPage,
  Breadcrumb) on the relevant pages
- **AggregateRating JSON-LD was removed** in audit — testimonials are
  illustrative personas, so shipping fake review markup risked a Google
  manual action. Restore only when real attributed reviews exist

---

## 10. Bugs fixed (with root causes — so they don't recur)

### Mobile tap-hijack (HIGH)
Symptom: scrolling on mobile randomly opened WhatsApp / mail clients.
Root cause: `FloatingActions.tsx` panel used `opacity-0 +
pointer-events-none` on the wrapper while children had
`pointer-events-auto`. CSS spec: a child's `pointer-events: auto`
overrides the parent's `none`, so invisible links sat in the
bottom-right and grabbed thumb taps.
Fix: **conditionally render** the panel (`{open && ...}`) instead of
hiding it via opacity.

### Mobile header — hamburger invisible at home top
Symptom: on home page at scrollY=0 the hamburger icon disappeared.
Root cause: header is `sticky`, so it takes up flow space — the
"transparent over dark hero" illusion never worked, and `lightMode`
applied `text-white bg-white/10` to the hamburger sitting on a cream
body bg.
Fix: `Hero.tsx` section now has `-mt-24` (header height) and inner
content was bumped `pt-20 → pt-32`. The transparent header genuinely
floats over the dark hero, so light-mode styling is correct.

### Contact form silent success
Symptom: form said "Message received" but no email arrived.
Root cause: if neither `RESEND_API_KEY` nor `CONTACT_WEBHOOK_URL` was
configured, the action returned `{ok: true}` without sending anything.
Fix: now logs the full payload AND returns a loud error in that case.
Real production fix: set `RESEND_API_KEY` in Vercel env vars.

### Cookie banner cosmetic (HIGH from audit)
Symptom: banner stored consent but PostHog inited regardless.
Fix: introduced `lib/consent.ts` as single source of truth.
AnalyticsProvider gated on `hasAnalyticsConsent()`. CustomEvent
plumbing so the banner click takes effect immediately.

### Hydration mismatch in ROICalculator
Symptom: server rendered Indian number format, client rendered US.
Fix: pass explicit locale: `toLocaleString("en-US")`.

### Header tabs not clickable + cursor invisible
Root cause: CustomCursor injected a `<style>` element via
`document.head.appendChild` — stale stylesheet between hot reloads
broke React reconciliation.
Fix: cursor-hide CSS moved to static `globals.css` under
`@media (hover: hover) and (pointer: fine)`, scoped to
`html.vts-cursor-on` class.

### Services dropdown closing mid-hover
Root cause: cursor crossing dead zone between Services link and
dropdown panel.
Fix: 180ms `closeTimerRef` debounce + invisible 12px hover bridge
under the Services link.

### Blank-page-on-navigation (5–7 second white screen)
Root cause: `PageTransition` wrapper with `AnimatePresence
mode="wait"` was forcing exit animations before the new page rendered.
Fix: removed `PageTransition` wrapper. Added `app/loading.tsx`
skeleton for the brief gap.

### Logo squished
Root cause: `next/image` with explicit width AND height crops
wide-aspect images.
Fix: plain `<img>` with `height: size, width: "auto"`.

---

## 11. Performance choices

- Three.js hero `dynamic({ ssr: false })` — keeps it out of first paint
- Node count and line count in `HeroScene3D` scale by viewport:
  36/64 nodes, 360/700 lines, 2/3 rings (mobile/desktop)
- IntersectionObserver pauses the scene when offscreen
- `next/script` strategies: `beforeInteractive` for Consent Mode
  default only; everything else `afterInteractive`
- Fontshare preconnect + dns-prefetch for unsplash in `<head>`

---

## 12. Outstanding / known soft issues

- Home page (`app/page.tsx`) has no explicit canonical metadata
  (falls back to root layout default — works, but not explicit)
- Service pages hotlink unsplash images — risk of breakage if Unsplash
  removes a photo. Self-hosting is the long-term fix
- Hardcoded "2026" / "Q3 2026" copy in `app/about/page.tsx` and
  `app/security/page.tsx` — will look stale on 2027-01-01
- `AggregateRating` JSON-LD has been removed sitewide. Re-add only
  when real attributed reviews land on the page

---

## 13. Conventions / house style

- **TypeScript everywhere.** No `any` unless interfacing with an
  untyped global (e.g. `window.dataLayer`).
- **Server actions** for any mutation (`"use server"` files in
  `app/actions/`).
- **Client components** marked with `"use client"` at the top.
- **Imports**: prefer `@/lib/...`, `@/components/...` aliases.
- **Tailwind**: arbitrary values OK for one-off cases. Custom palette
  in `tailwind.config.ts` (`carbon-*`, `snow-*`).
- **No emojis** in code or copy unless the user explicitly asks.
- **Never amend** commits — always create a new commit so history
  stays linear and auditable.
- **Pricing changes**: update all 13 places at once
  (`app/pricing/page.tsx`, 8 service pages, `public/llms.txt`,
  `components/CTA.tsx`, `components/ContactForm.tsx`, plus any
  `ServiceSchema offers` blocks).

---

## 14. Quick setup checklist (new machine)

```bash
git clone https://github.com/Shazeed06/valuetechsolution-website.git
cd valuetechsolution-website
npm install
cp .env.example .env.local        # fill in RESEND_API_KEY etc.
npm run dev                        # http://localhost:3000
```

For production-grade lead delivery: set `RESEND_API_KEY` in Vercel env
vars and redeploy. See README's "Resend setup" section for the
5-minute walkthrough.

---

End of memory.
