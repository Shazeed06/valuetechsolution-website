import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Phone, Globe, MapPin } from "lucide-react";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: {
    absolute:
      "Bespoke Starter Website Sprints | India · USA · UK | Value Tech Solution",
  },
  description:
    "Professional, custom Next.js websites for startups and modern businesses in India, USA, and UK. SEO-ready, Lighthouse 98+, 2–4 week delivery. Fixed-price quotes.",
  keywords: [
    "website development USA",
    "website development UK",
    "website development India",
    "custom website development",
    "Next.js agency India",
    "modern web design studio",
    "starter website sprint India",
    "Next.js website studio",
    "small business website USA UK India",
  ],
  alternates: {
    canonical: "https://valuetechsolution.com/services/starter-website",
  },
  openGraph: {
    title: "Bespoke Starter Website Sprints | India · USA · UK",
    description:
      "Professional websites for ambitious businesses in India, USA, and UK. Fast, SEO-ready, mobile-first. Guaranteed fixed-price sprint quote.",
    url: "https://valuetechsolution.com/services/starter-website",
    siteName: "Value Tech Solution",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Starter Website Sprints | India · USA · UK",
    description:
      "Professional websites for modern businesses. Next.js, SEO-ready, Lighthouse 98+, 2–4 weeks. Guaranteed fixed quote.",
  },
};

const faqs = [
  {
    q: "How does project scoping and quoting work?",
    a: "We hop on a free 20-minute discovery call to review your target audience, required pages, design preferences, and technical integrations. Within 24 hours, we deliver a comprehensive scoping document with an exact fixed-price quote and milestone calendar.",
  },
  {
    q: "How fast can you deliver a custom website?",
    a: "Our standard sprint delivers in 2 to 4 weeks depending on scope. Early-stage 3-page sites take 2 weeks, full 5-page conversion sites take 3 weeks, and multi-page portals with CMS integration take 4 weeks. Timeline starts from the day we receive brand assets.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Indian clients can pay in INR via UPI, RTGS, or Razorpay with GST-compliant tax invoices. International clients in the US, UK, and Europe can pay via Stripe, ACH, or international bank wire.",
  },
  {
    q: "What technology do you use to build websites?",
    a: "All our websites are built on Next.js (React), deployed on Vercel's global edge network. This means sub-2-second load times, automatic mobile optimisation, built-in image compression, and free SSL. We do not use WordPress, Wix, or page builders — only clean, maintainable code you own completely.",
  },
  {
    q: "Is the website SEO-ready?",
    a: "Yes. Every project includes technical SEO fundamentals: correct meta titles and descriptions, Open Graph tags, JSON-LD schema (Organization, BreadcrumbList, FAQPage), Google Search Console setup, XML sitemap submission, robots.txt with AI crawler allowlisting, and /llms.txt for AI search visibility.",
  },
  {
    q: "What if I need more complex features or dynamic CMS?",
    a: "We specialize in custom web applications with headless CMS (Sanity, Strapi, or Contentlayer), database integrations (PostgreSQL, Supabase), and client portals. Book a free 30-minute call to scope your specific requirements.",
  },
];

const tiers = [
  {
    name: "Starter",
    tagline: "For solo founders and early-stage startups",
    pages: "3 pages",
    delivery: "2 weeks",
    highlight: false,
    features: [
      "Home · About · Contact",
      "Mobile-first, Lighthouse 98+",
      "Contact form with email delivery",
      "Meta tags + Open Graph",
      "Basic JSON-LD schema",
      "SSL + Vercel hosting setup",
      "Google Analytics 4",
      "1 round of revisions",
    ],
  },
  {
    name: "Pro",
    tagline: "Most popular for small businesses",
    pages: "5 pages",
    delivery: "3 weeks",
    highlight: true,
    features: [
      "5 pages of your choice",
      "Mobile-first, Lighthouse 98+",
      "Contact form with email delivery",
      "Full SEO meta setup + OG",
      "JSON-LD: Org · Breadcrumb · FAQ",
      "Google Search Console + sitemap",
      "AI crawler setup (GPTBot, ClaudeBot…)",
      "/llms.txt for AI search visibility",
      "Google Analytics 4",
      "30-min handover call",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Business",
    tagline: "For growing businesses needing more",
    pages: "Up to 10 pages",
    delivery: "4–5 weeks",
    highlight: false,
    features: [
      "Up to 10 pages",
      "Blog / CMS integration",
      "Mobile-first, Lighthouse 98+",
      "Custom animations (GPU-safe)",
      "Full schema suite (Service + Article)",
      "Complete SEO foundation",
      "AI search optimisation",
      "Priority support (WhatsApp)",
      "Looker Studio analytics dashboard",
      "30-min handover + 30-day post-launch",
      "3 rounds of revisions",
    ],
  },
];

const markets = [
  {
    icon: MapPin,
    region: "India",
    cities: "Delhi · Bangalore · Mumbai · Pune · Hyderabad",
    currency: "INR — UPI · RTGS · Razorpay",
    note: "GST-compliant invoices. IST timezone. Hindi + English communication.",
  },
  {
    icon: Globe,
    region: "USA",
    cities: "New York · San Francisco · Chicago · Austin · Seattle",
    currency: "USD — Stripe · Wire transfer",
    note: "ET / PT timezone overlap. Async Loom updates. Contracts in USD.",
  },
  {
    icon: Globe,
    region: "UK",
    cities: "London · Manchester · Birmingham · Edinburgh",
    currency: "GBP — Stripe · Wire transfer",
    note: "GMT timezone. Async-first. GBP billing available on request.",
  },
];

export default function StarterWebsitePage() {
  return (
    <>
      <ServiceSchema
        name="Starter Website Development"
        serviceType="Web Development"
        description="Professional website sprints for businesses in India, USA, and UK. Next.js, SEO-ready, Lighthouse 98+, 2–4 week delivery."
        url="https://valuetechsolution.com/services/starter-website"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Services", url: "https://valuetechsolution.com/services" },
          { name: "Starter Website", url: "https://valuetechsolution.com/services/starter-website" },
        ]}
      />

      {/* Hero */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-14 lg:pt-20 lg:pb-16">
        <div className="container-x">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="eyebrow">
                <span className="h-px w-8 bg-carbon-500" />
                Starter Website Sprints · Custom Scoped
              </span>
              <h1 className="heading-xl mt-8">
                Professional websites.{" "}
                <span className="italic-accent text-carbon-500">
                  Fixed quotes.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="lede max-w-md">
                We build fast, SEO-ready Next.js websites for ambitious businesses in
                India, USA, and UK. No templates. No WordPress.
                No surprises on invoice day.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Book free 30-min call <ArrowUpRight size={15} />
                </Link>
                <Link href="/portfolio" className="btn-link">
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market trust bar */}
      <section className="border-y border-carbon-950/[0.08] bg-carbon-950/[0.02] py-6">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            {["India · Custom Sprints", "USA · Fixed Quotes", "UK · Tailored Scope", "Delivered in 2–4 weeks", "Lighthouse 98+ guaranteed"].map((t) => (
              <span key={t} className="font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-500">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="section">
        <div className="container-x">
          <div className="mb-14 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">
                <span className="h-px w-8 bg-carbon-500" />
                Engagement options
              </span>
              <h2 className="heading-lg mt-8">
                Three sprint models.
                <br />
                <span className="italic-accent text-carbon-500">Guaranteed fixed quotes.</span>
              </h2>
            </div>
            <p className="lede max-w-md lg:col-span-7 lg:mt-28">
              Every price shown is the final price. No "from" tricks, no
              discovery call where the quote triples. Indian clients pay in INR;
              US and UK clients pay in USD via Stripe or wire.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  tier.highlight
                    ? "border-carbon-950 bg-carbon-950 text-white"
                    : "border-carbon-950/[0.08] bg-white"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-4 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-950">
                    Most popular
                  </span>
                )}

                <div className="mb-6">
                  <p className={`font-mono text-[10px] uppercase tracking-[0.28em] ${tier.highlight ? "text-white/55" : "text-carbon-400"}`}>
                    {tier.name}
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                      tier.highlight ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                    }`}>
                      Custom Scope · Fixed Quote
                    </span>
                  </div>
                  <p className={`mt-3 text-sm ${tier.highlight ? "text-white/65" : "text-carbon-500"}`}>
                    {tier.tagline}
                  </p>
                  <div className={`mt-4 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.2em] ${tier.highlight ? "text-white/55" : "text-carbon-400"}`}>
                    <span>{tier.pages}</span>
                    <span>·</span>
                    <span>{tier.delivery} delivery</span>
                  </div>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${tier.highlight ? "text-emerald-400" : "text-carbon-950"}`}
                      />
                      <span className={`text-sm ${tier.highlight ? "text-white/80" : "text-carbon-700"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                    tier.highlight
                      ? "bg-white text-carbon-950 hover:bg-white/90"
                      : "bg-carbon-950 text-white hover:bg-carbon-700"
                  }`}
                >
                  Book a Discovery Call <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-carbon-400">
            Every engagement has a guaranteed fixed quote and delivery timeline agreed upon during your discovery call.
          </p>
        </div>
      </section>

      {/* Market cards */}
      <section className="section bg-carbon-950/[0.02]">
        <div className="container-x">
          <div className="mb-14 text-center">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-carbon-500" />
              Where we work
              <span className="h-px w-8 bg-carbon-500" />
            </span>
            <h2 className="heading-lg mx-auto mt-8 max-w-2xl">
              Website development in{" "}
              <span className="italic-accent text-carbon-500">India, USA & UK.</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {markets.map((m) => (
              <div
                key={m.region}
                className="rounded-3xl border border-carbon-950/[0.08] bg-white p-8"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                  {m.region}
                </p>
                <p className="mt-4 font-display text-2xl font-bold tracking-tight text-carbon-950">
                  Tailored Sprint
                </p>
                <p className="mt-2 text-sm text-carbon-500">{m.cities}</p>
                <div className="mt-6 space-y-2 border-t border-carbon-950/[0.06] pt-6">
                  <p className="text-xs text-carbon-500">{m.currency}</p>
                  <p className="text-xs text-carbon-500">{m.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free consultation */}
      <section className="section bg-carbon-950 text-white">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow text-white/55">
                <span className="h-px w-8 bg-white/40" />
                Zero cost, zero commitment
              </span>
              <h2 className="heading-lg mt-8 text-white">
                Free 30-minute{" "}
                <span className="italic-accent text-white/60">consultation.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
                Tell us about your business. We&apos;ll audit your current
                online presence live on the call, recommend the right package,
                and give you a written quote — no pressure, no follow-up
                emails if you say no.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-carbon-950 transition hover:bg-white/90"
                >
                  <Phone size={14} />
                  Book your free call
                  <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
            <ul className="space-y-5">
              {[
                "We audit your site speed and SEO live on the call",
                "You get a written scope before paying anything",
                "Fixed-price quote — no surprises mid-project",
                "Works for businesses in India, USA, and UK",
                "Reply within one business day guaranteed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                  <Check size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                  <span className="text-sm text-white/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ — AEO/GEO optimised */}
      <section className="section">
        <div className="container-x">
          <div className="mb-12">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              Common questions
            </span>
            <h2 className="heading-lg mt-8 max-w-2xl">
              Website development & sprints —{" "}
              <span className="italic-accent text-carbon-500">answered plainly.</span>
            </h2>
          </div>

          <div className="divide-y divide-carbon-950/[0.08] border-y border-carbon-950/[0.08]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-7">
                <summary className="flex cursor-pointer items-start justify-between gap-6 text-base font-semibold text-carbon-950 marker:hidden list-none">
                  {faq.q}
                  <span className="mt-0.5 shrink-0 font-mono text-carbon-400 transition group-open:rotate-180">
                    ↓
                  </span>
                </summary>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-carbon-500">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
