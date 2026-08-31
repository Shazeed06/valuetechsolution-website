import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Phone, Globe, MapPin } from "lucide-react";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: {
    absolute:
      "Website Development $300–$1000 | India · USA · UK | Value Tech Solution",
  },
  description:
    "Professional websites from $300 (₹25,000) for businesses in India, USA, and UK. Next.js, SEO-ready, Lighthouse 95+, 2–4 week delivery. Fixed price.",
  keywords: [
    "website development USA",
    "website development UK",
    "website development India",
    "affordable website development",
    "$500 website development",
    "$300 website",
    "$1000 website",
    "cheap website development India",
    "website development agency $500",
    "budget website development",
    "starter website package India",
    "professional website India ₹25000",
    "Next.js website affordable",
    "small business website USA UK India",
  ],
  alternates: {
    canonical: "https://valuetechsolution.com/services/starter-website",
  },
  openGraph: {
    title: "Affordable Website Development $300–$1000 | India · USA · UK",
    description:
      "Professional websites from $300 for businesses in India, USA, and UK. Fast, SEO-ready, mobile-first. Fixed price, 2–4 week delivery.",
    url: "https://valuetechsolution.com/services/starter-website",
    siteName: "Value Tech Solution",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development $300–$1000 | India · USA · UK",
    description:
      "Professional websites from $300 (₹25,000). Next.js, SEO-ready, Lighthouse 95+, 2–4 weeks.",
  },
};

const faqs = [
  {
    q: "How much does website development cost in India?",
    a: "Value Tech Solution builds professional Next.js websites in India starting at ₹25,000 ($300). The Starter plan covers 3 pages; the Pro plan at ₹41,500 ($499) covers 5 pages with full SEO setup; the Business plan at ₹83,000 ($999) covers up to 10 pages with blog, custom animations, and priority support. All plans include mobile-first design, Lighthouse 95+ performance, and GST-compliant invoicing.",
  },
  {
    q: "How much does website development cost in the USA?",
    a: "Our website development packages for US clients start at $300 for a 3-page starter site, $499 for a 5-page professional site, and $999 for a 10-page business site. All packages include Next.js development, Core Web Vitals optimisation, SEO fundamentals, and US-timezone-compatible async communication. Payment via Stripe or wire transfer.",
  },
  {
    q: "How much does website development cost in the UK?",
    a: "UK clients can access the same packages as US clients — Starter from $300, Pro $499, Business $999 — with payments accepted in GBP via Stripe. Value Tech Solution has delivered websites for UK businesses including London-based marketing agencies and SaaS startups. All sites are built for Core Web Vitals compliance as required by Google UK rankings.",
  },
  {
    q: "How long does it take to build a website?",
    a: "The Starter (3-page) package delivers in 2 weeks. The Pro (5-page) package delivers in 3 weeks. The Business (10-page) package delivers in 4–5 weeks. Timeline starts from the day we receive your content (copy and images). We send a day-by-day project timeline before you pay anything.",
  },
  {
    q: "What technology do you use to build websites?",
    a: "All our websites are built on Next.js (React), deployed on Vercel's global edge network. This means sub-2-second load times, automatic mobile optimisation, built-in image compression, and free SSL. We do not use WordPress, Wix, or page builders — only clean, maintainable code you own completely.",
  },
  {
    q: "Is the website SEO-ready?",
    a: "Yes. Every package includes technical SEO fundamentals: correct meta titles and descriptions, Open Graph tags, JSON-LD schema (Organization, BreadcrumbList, FAQPage), Google Search Console setup, XML sitemap submission, robots.txt with AI crawler allowlisting, and /llms.txt for AI search visibility. The Pro and Business plans additionally include keyword-optimised page headings and on-page copy structure.",
  },
  {
    q: "Do you offer Indian pricing with INR payment?",
    a: "Yes. Indian clients pay in INR via UPI, RTGS, or Razorpay. Starter: ₹25,000 · Pro: ₹41,500 · Business: ₹83,000. All payments come with a GST-compliant invoice. We are based in Delhi and serve clients across Delhi, Bangalore, Mumbai, Pune, Hyderabad, and Chennai.",
  },
  {
    q: "What if I need more than 10 pages?",
    a: "The Business plan covers up to 10 pages. Beyond that, we quote custom engagements starting at $1,200 / ₹1,00,000. Larger sites typically include a headless CMS (Sanity or Contentlayer) so your team can add pages without developer involvement. Book a free 30-minute call to scope your specific needs.",
  },
];

const tiers = [
  {
    name: "Starter",
    priceUSD: "$300",
    priceINR: "₹25,000",
    tagline: "For solo founders and early-stage startups",
    pages: "3 pages",
    delivery: "2 weeks",
    highlight: false,
    features: [
      "Home · About · Contact",
      "Mobile-first, Lighthouse 90+",
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
    priceUSD: "$499",
    priceINR: "₹41,500",
    tagline: "Most popular for small businesses",
    pages: "5 pages",
    delivery: "3 weeks",
    highlight: true,
    features: [
      "5 pages of your choice",
      "Mobile-first, Lighthouse 95+",
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
    priceUSD: "$999",
    priceINR: "₹83,000",
    tagline: "For growing businesses needing more",
    pages: "Up to 10 pages",
    delivery: "4–5 weeks",
    highlight: false,
    features: [
      "Up to 10 pages",
      "Blog / CMS integration",
      "Mobile-first, Lighthouse 95+",
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
    priceFrom: "₹25,000",
  },
  {
    icon: Globe,
    region: "USA",
    cities: "New York · San Francisco · Chicago · Austin · Seattle",
    currency: "USD — Stripe · Wire transfer",
    note: "ET / PT timezone overlap. Async Loom updates. Contracts in USD.",
    priceFrom: "$300",
  },
  {
    icon: Globe,
    region: "UK",
    cities: "London · Manchester · Birmingham · Edinburgh",
    currency: "GBP — Stripe · Wire transfer",
    note: "GMT timezone. Async-first. GBP billing available on request.",
    priceFrom: "$300",
  },
];

export default function StarterWebsitePage() {
  return (
    <>
      <ServiceSchema
        name="Starter Website Development"
        serviceType="Web Development"
        description="Professional website development from $300 to $999 for businesses in India, USA, and UK. Next.js, SEO-ready, Lighthouse 95+, 2–4 week delivery."
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
                Website development · $300 – $1,000
              </span>
              <h1 className="heading-xl mt-8">
                Professional websites.{" "}
                <span className="italic-accent text-carbon-500">
                  Fixed price.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="lede max-w-md">
                We build fast, SEO-ready Next.js websites for businesses in
                India, USA, and UK — from $300. No templates. No WordPress.
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
            {["India · from ₹25,000", "USA · from $300", "UK · from $300", "Delivered in 2–4 weeks", "Lighthouse 95+ guaranteed"].map((t) => (
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
                Transparent pricing
              </span>
              <h2 className="heading-lg mt-8">
                Three tiers.
                <br />
                <span className="italic-accent text-carbon-500">No hidden fees.</span>
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
                  <p className={`mt-3 font-display text-5xl font-bold tracking-[-0.04em] ${tier.highlight ? "text-white" : "text-carbon-950"}`}>
                    {tier.priceUSD}
                  </p>
                  <p className={`mt-1 font-mono text-sm ${tier.highlight ? "text-emerald-400" : "text-carbon-500"}`}>
                    {tier.priceINR} for India
                  </p>
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
                  Get started <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-carbon-400">
            All prices are fixed — what you see is what you pay. INR invoices include GST. USD invoices are exclusive of local taxes.
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
                <p className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-carbon-950">
                  From {m.priceFrom}
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
              Website development pricing —{" "}
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
