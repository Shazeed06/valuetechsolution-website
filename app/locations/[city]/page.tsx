import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  CheckCircle,
  MessageCircle,
  Globe,
  Zap,
  BarChart3,
  Code2,
  Bot,
} from "lucide-react";
import CTA from "@/components/CTA";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { cities, getCity } from "@/lib/cities";
import { whatsappLinks } from "@/lib/contact-config";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const c = getCity(slug);
  if (!c) return { title: "Not found" };

  const title = `Web Development & AI Automation Agency in ${c.name} | Value Tech Solution`;
  const description = `Fixed-price web development and AI automation in ${c.name}. Websites from ${c.starterPrice}, AI agents from ${c.agentPrice}. Senior engineers, fast delivery, written scope.`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `https://valuetechsolution.com/locations/${c.slug}`,
    },
    openGraph: {
      title: `Web Development & AI Agency — ${c.name}`,
      description,
      url: `https://valuetechsolution.com/locations/${c.slug}`,
      siteName: "Value Tech Solution",
      type: "website",
      locale: c.country === "India" ? "en_IN" : "en_US",
    },
  };
}

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Next.js sites that load fast, rank high, and convert. 95+ Lighthouse guaranteed.",
  },
  {
    icon: Bot,
    title: "AI Agent Development",
    desc: "Production-grade AI agents with evals, observability, and human-in-the-loop gates.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    desc: "n8n, Make, Zapier, or custom Python — we pick what fits and ship it properly.",
  },
  {
    icon: BarChart3,
    title: "SEO & AEO",
    desc: "Schema, Core Web Vitals, llms.txt, and answer-shaped content for AI search.",
  },
  {
    icon: Code2,
    title: "GoHighLevel",
    desc: "Agency snapshots, WhatsApp automations, CRM pipelines, and client dashboards.",
  },
  {
    icon: MessageCircle,
    title: "Claude AI Integration",
    desc: "Anthropic Claude agents, RAG systems, and prompt engineering for your product.",
  },
];

const guarantees = [
  "Fixed scope — no billing surprises",
  "Written tradeoffs before we start",
  "Senior engineers only — no juniors handed off",
  "95+ Lighthouse score guaranteed on web builds",
  "Eval suite on every AI agent shipped",
  "30-day post-launch tuning window",
];

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const c = getCity(slug);
  if (!c) return notFound();

  const wa = whatsappLinks(
    `Hi, I'm in ${c.name} and I'd like to discuss a project with Value Tech Solution.`
  );

  const BASE = "https://valuetechsolution.com";

  return (
    <>
      <ServiceSchema
        name={`Web Development & AI Automation Agency — ${c.name}`}
        description={`Fixed-price web development and AI automation for ${c.name} businesses. Websites from ${c.starterPrice}, AI agents from ${c.agentPrice}.`}
        url={`${BASE}/locations/${c.slug}`}
        serviceType="Web Development and AI Automation"
        offers={[
          { name: "Starter Website", price: c.starterPrice },
          { name: "AI Agent Sprint", price: c.agentPrice },
        ]}
      />
      <FAQSchema items={c.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${BASE}/` },
          { name: "Locations", url: `${BASE}/locations` },
          { name: c.name, url: `${BASE}/locations/${c.slug}` },
        ]}
      />

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#180800] pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        {/* Large centre glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/3 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full opacity-50 blur-[100px]"
          style={{ background: "radial-gradient(circle, #c2410c 0%, transparent 65%)" }}
        />
        {/* Right accent glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full opacity-20 blur-[60px]"
          style={{ background: "radial-gradient(circle, #ea580c 0%, transparent 70%)" }}
        />
        {/* Large faded city initial — decorative */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-display text-[clamp(200px,30vw,420px)] font-black leading-none text-white/[0.03]"
        >
          {c.name.charAt(0)}
        </span>

        <div className="container-x relative">
          <div className="grid gap-14 lg:grid-cols-[1fr_300px] lg:items-center">

            {/* Left: content */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  {c.country}
                </span>
                <span className="rounded-full border border-orange-500/30 bg-orange-600/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-orange-300/90">
                  {c.market}
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-8 font-display font-black leading-[0.92] tracking-[-0.05em] text-white text-5xl sm:text-6xl lg:text-[5.5rem]">
                Web Dev &amp; AI
                <br />
                Automation in
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  {c.name}.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                {c.context}
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-orange-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-500"
                >
                  Book a free call
                  <ArrowUpRight size={14} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                {wa.map((n) => (
                  <a
                    key={n.e164}
                    href={n.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-500/20"
                  >
                    <MessageCircle size={14} className="text-emerald-400" />
                    WhatsApp · {n.pretty}
                  </a>
                ))}
              </div>

              {/* Stats strip */}
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/[0.08] pt-10 sm:grid-cols-3">
                {[
                  { n: "60+", label: "projects shipped" },
                  { n: "95+", label: "Lighthouse score" },
                  { n: "4 wk", label: "avg. delivery" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-2xl font-black text-white sm:text-3xl">{s.n}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: pricing cards */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {/* Starter */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-6 backdrop-blur-sm">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                    Starter website
                  </p>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/50">
                    Popular
                  </span>
                </div>
                <p className="mt-3 font-display text-3xl font-black text-white">
                  {c.starterPrice}
                </p>
                <p className="mt-1 text-xs text-white/40">Fixed scope · 4 weeks</p>
                <div className="mt-4 flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-400/70">Available now</span>
                </div>
              </div>

              {/* AI Agent */}
              <div className="relative overflow-hidden rounded-2xl border border-orange-500/25 bg-gradient-to-br from-orange-600/20 to-orange-900/20 px-6 py-6 backdrop-blur-sm">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{ background: "radial-gradient(circle at top left, #ea580c20, transparent 60%)" }}
                />
                <p className="relative font-mono text-[10px] uppercase tracking-[0.24em] text-orange-300/60">
                  AI agent
                </p>
                <p className="relative mt-3 font-display text-3xl font-black text-white">
                  {c.agentPrice}
                </p>
                <p className="relative mt-1 text-xs text-orange-300/40">Starting · 4–6 weeks</p>
                <div className="relative mt-4 flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-400" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-orange-400/60">Accepting projects</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom separator */}
        <div className="container-x mt-16">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </section>

      {/* ── Industries ────────────────────────────────── */}
      <section className="border-b border-carbon-950/[0.06] bg-white py-5">
        <div className="container-x flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
            Key industries in {c.name}
          </span>
          {c.industries.map((ind) => (
            <span
              key={ind}
              className="rounded-full border border-carbon-950/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-carbon-600"
            >
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section className="section bg-[rgb(250,250,250)]">
        <div className="container-x">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-600" />
            What we build
          </p>
          <h2 className="heading-md mt-6 max-w-2xl">
            Services for{" "}
            <span className="italic-accent text-carbon-400">{c.name}</span>{" "}
            businesses
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-carbon-950/[0.07] bg-white p-7 transition-all hover:border-orange-600/20 hover:shadow-[0_8px_32px_-8px_rgba(234,88,12,0.10)]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600/10">
                  <s.icon size={18} className="text-orange-600" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-[-0.02em] text-carbon-950">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-carbon-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-600" />
                Why Value Tech Solution
              </p>
              <h2 className="heading-md mt-6">
                Senior engineers.
                <br />
                <span className="italic-accent text-carbon-400">
                  Fixed price. No BS.
                </span>
              </h2>
              <p className="lede mt-5 max-w-lg">
                Every {c.name} engagement gets the same thing: a written scope,
                a fixed price, and senior engineers from start to finish — not
                handed to a junior after the sales call.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book free 30-min call <ArrowUpRight size={14} />
                </Link>
                <Link href="/blog" className="btn-ghost">
                  Read our field notes
                </Link>
              </div>
            </div>

            <ul className="space-y-3">
              {guarantees.map((g) => (
                <li
                  key={g}
                  className="flex items-center gap-3 rounded-xl border border-carbon-950/[0.07] bg-[rgb(250,250,250)] px-5 py-4 text-sm text-carbon-700"
                >
                  <CheckCircle
                    size={15}
                    className="shrink-0 text-orange-600"
                  />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────── */}
      <section className="border-y border-carbon-950/[0.06] bg-orange-950 py-10">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {[
              { n: "60+", label: "projects shipped" },
              { n: "40h", label: "saved per week avg." },
              { n: "95+", label: "Lighthouse score, guaranteed" },
              { n: "4wk", label: "website delivery" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-black text-orange-400 sm:text-5xl">
                  {s.n}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.24em] text-white/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-600" />
              FAQ — {c.name}
            </p>
            <h2 className="heading-sm mt-5">
              Questions from {c.name} clients
            </h2>

            <div className="mt-10 space-y-5">
              {c.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-carbon-950/[0.07] bg-[rgb(250,250,250)] p-7"
                >
                  <h3 className="font-display text-base font-bold leading-snug tracking-[-0.02em] text-carbon-950 sm:text-lg">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-carbon-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Other locations ───────────────────────────── */}
      <section className="section border-t border-carbon-950/[0.06] bg-[rgb(250,250,250)]">
        <div className="container-x">
          <h2 className="heading-sm text-center">Also serving</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {cities
              .filter((x) => x.slug !== c.slug)
              .map((x) => (
                <Link
                  key={x.slug}
                  href={`/locations/${x.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-carbon-950/10 bg-white px-4 py-2 text-sm text-carbon-700 transition hover:border-orange-600/30 hover:text-orange-700"
                >
                  <span>{x.flag}</span>
                  {x.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
