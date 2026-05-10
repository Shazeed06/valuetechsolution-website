# Value Tech Solution

Production website for **Value Tech Solution** — an AI automation studio shipping agents, websites, and SEO programs.

🌐 **Live**: [valuetechsolution.com](https://valuetechsolution.com)
📧 **Contact**: admin@valuetechsolution.com

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + Cabinet Grotesk + JetBrains Mono |
| Motion | GSAP + ScrollTrigger, Framer Motion, Lenis smooth-scroll |
| 3D | three.js (lazy-loaded HeroScene3D) |
| Email | Resend |
| Analytics | Posthog (optional) |
| Hosting | Vercel |
| Schema | JSON-LD (Organization, WebSite, Service, FAQPage, Article, Person, BreadcrumbList) |

---

## Quick start

```bash
git clone https://github.com/Shazeed06/valuetechsolution-website
cd valuetechsolution-website
cp .env.example .env.local   # fill the keys
npm install
npm run dev                   # http://localhost:3000
```

Build:

```bash
npm run build
npm start
```

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Required? | What |
|---|---|---|
| `RESEND_API_KEY` | optional | Sends contact-form emails to `admin@valuetechsolution.com`. Get one free at [resend.com](https://resend.com) |
| `RESEND_FROM` | optional | From address. Default: `Value Tech Solution <onboarding@resend.dev>` |
| `CONTACT_WEBHOOK_URL` | optional | Slack incoming webhook / n8n / Zapier / Make endpoint that also receives the form payload |
| `NEXT_PUBLIC_POSTHOG_KEY` | optional | Posthog project key (analytics + session replay) |
| `NEXT_PUBLIC_POSTHOG_HOST` | optional | Posthog host (default `https://us.i.posthog.com`) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | optional | E.164 without `+`. Default: `918287245032` |
| `NEXT_PUBLIC_CAL_LINK` | optional | Cal.com URL for the floating widget |

All variables are validated with **zod** at boot — see `lib/env.ts`. Missing critical envs fail loudly so you don't lose leads silently.

---

## Project structure

```
app/
  layout.tsx                  Root layout · schemas · cursor · analytics
  page.tsx                    Home (Hero → ROI → Guarantee → Testimonials → CTA)
  about/                      About + manifesto + 3 image dividers
  blog/                       Field notes (MDX-ready)
  case-studies/               Anonymised real-shape engagements
    [slug]/                   Dynamic case study pages
  contact/                    Contact form (Resend + WhatsApp deep-link)
  pricing/                    Three-tier pricing
  privacy/  terms/  security/ Legal + compliance pages
  services/                   Services hub
    ai-automation/            Flagship — AI Agents + Platforms + Industries
    web-development/
    seo/
    design-systems/
    n8n/  gohighlevel/  zapier/  python-automation/  Sub-services
  team/                       Engineering team profiles + Person schema
  actions/contact.ts          Server action — Resend + webhook + honeypot
  sitemap.ts robots.ts        SEO infra
  opengraph-image.tsx         Edge-rendered OG card
  icon.svg                    Favicon

components/
  Hero.tsx HeroScene3D.tsx    Above-the-fold (3D lazy-loaded)
  Navbar.tsx Footer.tsx       Layout chrome
  CustomCursor.tsx            Two-layer premium cursor (auto-disabled on touch)
  LenisProvider.tsx           Smooth scroll
  AnalyticsProvider.tsx       Posthog SDK (env-gated)
  FloatingActions.tsx         WhatsApp + Email + Cal.com pills
  CookieBanner.tsx            GDPR/DPDP-aware consent
  Schema.tsx                  All JSON-LD schemas
  Stats.tsx Principles.tsx Services.tsx ...  Section components

lib/
  env.ts                      Zod-validated environment schema
  contact-config.ts           Single source of truth for email/phone/socials
  case-studies.ts             Case-study data (typed)
  blog.ts                     Blog post data + frontmatter

public/
  llms.txt                    LLM-readable site summary (GEO/AEO)
  logo.svg
```

---

## Lead delivery

Form submissions hit three channels in parallel:

1. **Email** — Resend → `admin@valuetechsolution.com`
2. **Webhook** — `CONTACT_WEBHOOK_URL` (Slack / n8n / Zapier / Make / your CRM)
3. **WhatsApp deep-link** — alternative path; opens `wa.me/918287245032` with the form contents pre-filled

Server-side hardening:
- ✅ Honeypot field (silent reject for bots)
- ✅ In-memory rate limit (10 requests / IP / hour in dev — replace with Upstash KV in prod)
- ✅ Email format validation
- ✅ Min 10-char message validation
- ✅ Zod env validation at boot

---

## SEO / GEO / AEO posture

| Asset | Path | Purpose |
|---|---|---|
| Sitemap | `/sitemap.xml` | 26 routes with semantic priorities |
| Robots | `/robots.txt` | Allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended explicitly |
| LLM index | `/llms.txt` | Structured site summary for AI engines |
| OG image | `/opengraph-image` | Edge-rendered social card |
| JSON-LD | layout + per page | Org · WebSite · Service · FAQPage · Article · Person · Breadcrumb · AggregateRating |

---

## Deployment

Auto-deploys to Vercel on every push to `main`.

```bash
git push origin main   # → Vercel deploys to https://valuetechsolution.com
```

Add env vars in Vercel → Project Settings → Environment Variables. They're picked up on next build.

---

## License

© Value Tech Solution. All rights reserved.
