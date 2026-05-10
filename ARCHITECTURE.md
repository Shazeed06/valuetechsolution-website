# Architecture

A plain-English map of how this Next.js codebase is organised — read this first if you're new to the project.

---

## 1. Tech in one paragraph

It's a **Next.js 16 (App Router) + TypeScript** site, styled with **Tailwind**, animated with **GSAP + Framer Motion + Lenis**, with a single **three.js** scene in the hero. Forms send mail through **Resend**, optional analytics via **Posthog**. Structured data (JSON-LD) is generated as React components. Everything ships to **Vercel** on `git push`.

```
git push → Vercel → valuetechsolution.com
```

---

## 2. Folder map

```
.
├── app/                  ← Next.js App Router — every URL is a folder here
├── components/           ← Reusable React components (sections, UI, motion)
├── lib/                  ← Pure data + helpers (no JSX)
├── public/               ← Static files served as-is (logo.svg, llms.txt)
├── README.md             ← Setup, env vars, deployment
├── ARCHITECTURE.md       ← This file
├── tailwind.config.ts    ← Theme tokens (colors, fonts, animations)
├── tsconfig.json         ← TypeScript paths (@/* points to project root)
├── next.config.mjs       ← Next.js config (image domains, etc.)
└── package.json
```

That's it. No micro-services, no monorepo, no fancy build pipeline. One Next.js app.

---

## 3. The `app/` folder — every URL is a folder

Next.js App Router rule: each `page.tsx` becomes a URL.

```
app/
├── page.tsx                          → /
├── layout.tsx                        → wraps every page (Navbar, Footer, providers)
├── globals.css                       → site-wide styles + Tailwind directives
├── icon.svg                          → /favicon
├── opengraph-image.tsx               → social-share image
├── robots.ts                         → /robots.txt
├── sitemap.ts                        → /sitemap.xml
├── not-found.tsx                     → 404 page
│
├── about/page.tsx                    → /about
├── blog/
│   ├── page.tsx                      → /blog                (post index)
│   └── [slug]/page.tsx               → /blog/why-most-…     (one post)
├── case-studies/
│   ├── page.tsx                      → /case-studies        (index)
│   └── [slug]/page.tsx               → /case-studies/…      (one case)
├── contact/page.tsx                  → /contact
├── pricing/page.tsx                  → /pricing
├── portfolio/page.tsx                → /portfolio
├── privacy/page.tsx                  → /privacy
├── security/page.tsx                 → /security
├── team/page.tsx                     → /team
├── terms/page.tsx                    → /terms
│
├── services/
│   ├── page.tsx                      → /services            (hub)
│   ├── ai-automation/page.tsx        → /services/ai-automation
│   ├── design-systems/page.tsx       → /services/design-systems
│   ├── gohighlevel/page.tsx          → /services/gohighlevel
│   ├── n8n/page.tsx                  → /services/n8n
│   ├── python-automation/page.tsx    → /services/python-automation
│   ├── seo/page.tsx                  → /services/seo
│   ├── web-development/page.tsx      → /services/web-development
│   └── zapier/page.tsx               → /services/zapier
│
└── actions/
    └── contact.ts                    → server action (form handler)
```

**Mental model**: open `app/` like a sitemap. Folder = URL. `page.tsx` = the page. Done.

---

## 4. The `components/` folder

There are ~40 components. Loosely grouped by what they do:

### Layout chrome (rendered in every page)
| File | Purpose |
|---|---|
| `Navbar.tsx` | Sticky header. Mega-menu for Services. Mobile drawer. |
| `Footer.tsx` | 4-col footer with email, WhatsApp, social, legal links |
| `PageHeader.tsx` | Inner-page hero (title + eyebrow + description) |
| `Logo.tsx` | Hexagonal SVG logo |

### Global motion / providers (mounted in `app/layout.tsx`)
| File | Purpose |
|---|---|
| `LenisProvider.tsx` | Smooth scroll, syncs with GSAP ScrollTrigger |
| `CustomCursor.tsx` | Black two-layer cursor on hover devices |
| `PageTransition.tsx` | Framer Motion fade between routes |
| `AnalyticsProvider.tsx` | Posthog SDK (env-gated) |
| `CookieBanner.tsx` | First-visit consent banner |
| `FloatingActions.tsx` | Bottom-right WhatsApp / email / Cal pill stack |

### Animation primitives
| File | Purpose |
|---|---|
| `SplitReveal.tsx` | Word/line stagger reveal — `<SplitReveal><Line>...</Line></SplitReveal>` |
| `Reveal.tsx` | Generic fade/slide-in on scroll |
| `Marquee.tsx` | Infinite horizontal scroller |
| `MagneticButton.tsx` | Cursor-pulled button |
| `MediaDivider.tsx` | Cinematic full-bleed image with overlay caption |

### Home-page sections (rendered in order in `app/page.tsx`)
1. `Hero.tsx` — headline + 3D scene + CTAs
2. `Principles.tsx` — six studio principles
3. `Stats.tsx` — animated count-up numbers
4. `Services.tsx` — 4-row editorial service list
5. `AutomationShowcase.tsx` — `−80%` editorial block
6. `StickyStory.tsx` — auto-cycling 5-step agent walkthrough
7. `Capabilities.tsx` — 3 categories of work
8. `StackMarquee.tsx` — scrolling tools strip
9. `IndustriesGrid.tsx` — 7 verticals
10. `Comparison.tsx` — old way vs Value Tech (responsive)
11. `ROICalculator.tsx` — interactive sliders
12. `Guarantee.tsx` — money-back promise + animated stamp
13. `VerticalTimeline.tsx` — 5-phase project timeline
14. `Testimonials.tsx` — 4-quote grid + AggregateRating schema
15. `CTA.tsx` — final "Let's give your team 40 hours back" block

### Service-page-specific
| File | Used on |
|---|---|
| `ServiceDetail.tsx` | Reusable layout for every `/services/{slug}` page |
| `AIAgents.tsx` | 7 AI agent shapes (on AI Automation page) |
| `AutomationPlatforms.tsx` | 8 platforms (n8n, GHL, Zapier...) |
| `AIArchitecture.tsx` | 7-stage pipeline diagram + eval suite + stack |

### 3D scene
| File | Purpose |
|---|---|
| `HeroScene3D.tsx` | three.js node-graph scene. Lazy-loaded via `dynamic({ ssr: false })` so it doesn't block first paint. Pauses when offscreen. |

### Forms
| File | Purpose |
|---|---|
| `ContactForm.tsx` | Client form with honeypot, dual submit (email + WhatsApp deep-link) |

### Schema (JSON-LD generators)
| File | Purpose |
|---|---|
| `Schema.tsx` | Exports `OrganizationSchema`, `WebSiteSchema`, `ServiceSchema`, `FAQSchema`, `BreadcrumbSchema`, `ArticleSchema`, `AggregateRatingSchema`. Each renders a `<script type="application/ld+json">` tag. |

---

## 5. The `lib/` folder — data + helpers (no JSX)

| File | Purpose |
|---|---|
| `env.ts` | Zod-validated environment variables. Single source of truth — fails loud on misconfig. |
| `contact-config.ts` | Email, phone, social URLs as constants. Helpers `whatsappLink()` and `mailtoLink()`. |
| `case-studies.ts` | Array of case-study objects. Used by `/case-studies` index + `[slug]` route. |
| `blog.ts` | Array of blog post objects (with full body content). Used by `/blog` index + `[slug]` route. |

---

## 6. Data flow — how a contact form lands in your inbox

```
User fills /contact form
        │
        ▼
ContactForm.tsx (client component)
   • collects fields
   • runs `sendContact()` server action
        │
        ▼
app/actions/contact.ts  ← runs on server
   1. honeypot check (silent reject if filled)
   2. rate-limit by IP (10/hr)
   3. zod-style validation
   4. parallel delivery:
        • Resend → admin@valuetechsolution.com
        • Webhook → Slack / n8n / Zapier
   5. returns { ok } | { ok: false, error }
        │
        ▼
On success → show success card with WhatsApp follow-up button
```

The form ALSO has a "Send via WhatsApp" button that bypasses the server entirely and opens `wa.me/918287245032` with the message pre-filled. That's a fallback — even if Resend fails, the lead still reaches you.

---

## 7. Adding a new page

```bash
# Example: add /case-studies/our-newest
1. Edit lib/case-studies.ts
   add a new object to the `cases` array
2. That's it. The dynamic route already picks it up.
3. Run npm run build to confirm.
```

For a brand-new top-level page (e.g. `/careers`):

```bash
1. Create app/careers/page.tsx
2. Add it to app/sitemap.ts
3. Optionally add to Navbar.tsx + Footer.tsx
```

---

## 8. Adding a new home-page section

```tsx
// 1. Create components/MySection.tsx
"use client"; // only if you need state / refs / event handlers

export default function MySection() {
  return (
    <section className="section">
      <div className="container-x">
        <span className="eyebrow">
          <span className="h-px w-8 bg-carbon-500" />
          Eyebrow
        </span>
        <h2 className="heading-lg gap-eyebrow-heading">
          Heading.{" "}
          <span className="italic-accent text-carbon-500">Italic accent.</span>
        </h2>
        ...
      </div>
    </section>
  );
}

// 2. Import and place in app/page.tsx
import MySection from "@/components/MySection";

export default function Home() {
  return (
    <>
      <Hero />
      <MySection />   {/* ← here */}
      ...
    </>
  );
}
```

Use the existing utility classes — `section`, `container-x`, `eyebrow`, `heading-lg`, `italic-accent`, `card`, `gap-eyebrow-heading` — defined in `app/globals.css`.

---

## 9. Design tokens

All in `tailwind.config.ts`:

| Token | What |
|---|---|
| `bg-carbon-950` | Near-black `#0a0a0a` (primary text + dark backgrounds) |
| `bg-snow-50/100` | Off-white surfaces |
| `text-carbon-500/700` | Muted secondary text |
| `font-display` | Cabinet Grotesk (headings) |
| `font-mono` | JetBrains Mono (labels, traces) |
| `italic-accent` | Italic display variant for emphasis |

---

## 10. SEO / GEO / AEO infrastructure

| Surface | What |
|---|---|
| `app/sitemap.ts` | 26 routes + dynamic blog/case-study slugs |
| `app/robots.ts` | Welcomes GPTBot, ClaudeBot, PerplexityBot, Google-Extended explicitly |
| `public/llms.txt` | LLM-readable site summary |
| `app/opengraph-image.tsx` | Edge-rendered social card (1200×630) |
| `components/Schema.tsx` | All JSON-LD schemas wired into pages where they matter |

Don't touch unless you know what you're doing — SEO drift is silent and slow.

---

## 11. When something goes wrong

| Problem | Where to look |
|---|---|
| Form not delivering | `RESEND_API_KEY` set in Vercel? Check `app/actions/contact.ts` console logs. |
| Cursor invisible / clicks broken | `components/CustomCursor.tsx` + `globals.css` `vts-cursor-on` rules |
| Three.js scene heavy | It's lazy-loaded, but reduce `nodeCount` in `HeroScene3D.tsx` |
| Image 404 | Unsplash hotlink broken — pick another stable photo ID |
| Page slow to load | `npm run build` and check `.next/static/chunks/` size. Heavy = lazy-load via `next/dynamic`. |
| TypeScript error | Run `npx tsc --noEmit` to see all errors. Likely an unused import. |

---

## 12. Deploy

```bash
git push origin main          # → Vercel auto-deploys
```

That's the entire deploy pipeline. Vercel watches `main`, runs `npm run build`, and ships the new version to `valuetechsolution.com` if domain is connected (otherwise to the auto-generated `*.vercel.app` URL).

Env vars are set per-environment in **Vercel → Project Settings → Environment Variables**. They're picked up on the next build.

---

## 13. The shape of a typical request

```
Browser → Vercel CDN edge
        ├─ static asset (image, JS chunk)?    return cached
        └─ HTML page?
            └─ Vercel runs Next.js Server Component
                ├─ reads lib/* data
                ├─ renders <Schema /> JSON-LD
                ├─ streams HTML to browser
                └─ client components hydrate (Hero scene, GSAP animations)
```

Server Components don't ship JS. Only `"use client"` components do. Keep client components small to keep bundles lean — that's the only architectural rule that really matters.

---

## 14. Where to start reading the code

If you want to understand the site in 30 minutes:

1. `app/layout.tsx` — what wraps every page
2. `app/page.tsx` — what the home page is
3. `components/Hero.tsx` — flagship section
4. `components/Schema.tsx` — how SEO works
5. `app/actions/contact.ts` — how the form actually works
6. `lib/contact-config.ts` — single source of truth for contact details

That's the whole spine. Everything else is a section on a page or a UI helper.
