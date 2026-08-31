import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Globe,
  BarChart3,
  Palette,
  Zap,
  GitBranch,
  MessageSquare,
  Code2,
  LayoutGrid,
  CheckCircle,
} from "lucide-react";
import CTA from "@/components/CTA";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: {
    absolute: "AI Automation & Web Dev Services — Value Tech Solution",
  },
  description:
    "AI automation, web development, SEO, and design systems — fixed-scope sprints by senior engineers. Serving Delhi, Bangalore, Mumbai, Dubai, and beyond.",
  keywords: [
    "AI automation services India",
    "web development agency India",
    "SEO services India",
    "n8n automation India",
    "GoHighLevel agency India",
    "Value Tech Solution services",
  ],
  alternates: { canonical: "https://valuetechsolution.com/services" },
  openGraph: {
    title: "AI Automation & Web Dev Services — Value Tech Solution",
    description:
      "Fixed-scope AI automation, web development, and SEO sprints. Senior engineers. No juniors.",
    url: "https://valuetechsolution.com/services",
    siteName: "Value Tech Solution",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & Web Dev Services — Value Tech Solution",
    description:
      "Fixed-scope AI automation, web development, and SEO sprints. Senior engineers only.",
  },
};

const coreServices = [
  {
    n: "S.01",
    icon: Bot,
    title: "AI Automation",
    href: "/services/ai-automation",
    price: "from ₹10,000",
    timeline: "4–6 weeks",
    summary:
      "Production-grade AI agents with evals, observability, and human-in-the-loop gates. Built on Claude, GPT-4, or Gemini — whichever fits.",
    bullets: ["Custom AI agents + RAG systems", "Multi-agent orchestration", "Eval suites + monitoring", "Lead capture, ops, support bots"],
    accent: "bg-orange-600/10 border-orange-500/20",
    iconBg: "bg-orange-600/15",
    iconColor: "text-orange-500",
  },
  {
    n: "S.02",
    icon: Globe,
    title: "Web Development",
    href: "/services/web-development",
    price: "from ₹41,500",
    timeline: "4–6 weeks",
    summary:
      "Next.js websites engineered for speed, SEO, and conversions. 95+ Lighthouse score guaranteed and enforced in CI.",
    bullets: ["Next.js 15+, App Router, TypeScript", "95+ Lighthouse guaranteed", "Headless CMS integration", "Edge runtime + Core Web Vitals"],
    accent: "bg-blue-600/10 border-blue-500/20",
    iconBg: "bg-blue-600/15",
    iconColor: "text-blue-400",
  },
  {
    n: "S.03",
    icon: LayoutGrid,
    title: "Starter Website",
    href: "/services/starter-website",
    price: "from ₹25,000 / $300",
    timeline: "2–3 weeks",
    summary:
      "Professional websites for small businesses and founders. SEO-ready, mobile-first, and delivered fast — not a template.",
    bullets: ["Up to 8 pages, fully responsive", "SEO + schema markup included", "Contact form + WhatsApp integration", "Delivered in 2–3 weeks"],
    accent: "bg-emerald-600/10 border-emerald-500/20",
    iconBg: "bg-emerald-600/15",
    iconColor: "text-emerald-400",
  },
  {
    n: "S.04",
    icon: BarChart3,
    title: "SEO Optimization",
    href: "/services/seo",
    price: "from ₹63,900 / mo",
    timeline: "Ongoing",
    summary:
      "Technical SEO, schema markup, AEO for AI search (Perplexity, ChatGPT), and content that compounds over time.",
    bullets: ["Technical audit + Core Web Vitals", "Schema.org markup", "AI search (AEO) optimisation", "Content calendar + editorial"],
    accent: "bg-violet-600/10 border-violet-500/20",
    iconBg: "bg-violet-600/15",
    iconColor: "text-violet-400",
  },
  {
    n: "S.05",
    icon: Palette,
    title: "Design Systems",
    href: "/services/design-systems",
    price: "from ₹1,04,000",
    timeline: "4–6 weeks",
    summary:
      "Token-driven design systems that scale across launches. Figma, code tokens, component docs — the full stack.",
    bullets: ["Figma component library", "Design tokens + theming", "Storybook documentation", "Brand + typography system"],
    accent: "bg-pink-600/10 border-pink-500/20",
    iconBg: "bg-pink-600/15",
    iconColor: "text-pink-400",
  },
];

const platforms = [
  {
    icon: GitBranch,
    title: "n8n Development",
    href: "/services/n8n",
    desc: "Complex logic, self-hosted, privacy-first workflows. Our preferred automation tool for sensitive data.",
    badge: "Self-hosted",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  {
    icon: LayoutGrid,
    title: "GoHighLevel",
    href: "/services/gohighlevel",
    desc: "Agency snapshots, CRM pipelines, WhatsApp automations, sub-account onboarding and dashboards.",
    badge: "CRM + Funnels",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    icon: Zap,
    title: "Zapier",
    href: "/services/zapier",
    desc: "6,000+ app integrations with no-code logic. Best for teams that need speed over customisation.",
    badge: "6k+ Integrations",
    badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  {
    icon: Code2,
    title: "Python Automation",
    href: "/services/python-automation",
    desc: "Custom data pipelines, scraping, API bridges, and AI integrations for teams with complex requirements.",
    badge: "Custom pipelines",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    icon: MessageSquare,
    title: "Claude AI Integration",
    href: "/services/claude-automation",
    desc: "Anthropic Claude API integration into your product — RAG systems, agents, prompt engineering, guardrails.",
    badge: "Anthropic",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
];

const guarantees = [
  "Written scope before any work starts",
  "Fixed price — no billing surprises",
  "Senior engineers from kickoff to launch",
  "30-day post-launch tuning window",
  "95+ Lighthouse score on every web build",
  "Eval suite on every AI agent shipped",
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Services", url: "https://valuetechsolution.com/services" },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-carbon-950 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-25 blur-[120px]"
          style={{ background: "radial-gradient(circle, #c2410c, transparent 65%)" }}
        />
        <div className="container-x relative">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-500">
            · What we build
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-black leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Every service
            <br />
            <span className="text-white/30 italic">senior-led, fixed-price.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
            Five disciplines, one studio. From the first AI agent to the last SEO sprint — every engagement gets a written scope, a fixed price, and a dedicated senior engineer.
          </p>
          <div className="mt-10 flex flex-wrap gap-8 border-t border-white/[0.08] pt-10">
            {[
              { n: "60+", l: "projects shipped" },
              { n: "₹10k", l: "AI agent starting price" },
              { n: "4 wk", l: "average delivery" },
              { n: "95+", l: "Lighthouse score" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-2xl font-black text-white sm:text-3xl">{s.n}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core services ────────────────────────────────── */}
      <section className="section bg-[rgb(250,250,250)]">
        <div className="container-x">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-600" />
                Core services
              </p>
              <h2 className="heading-md mt-5">What we ship</h2>
            </div>
            <Link href="/pricing" className="btn-link hidden text-sm sm:inline-flex">
              See pricing <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((s) => (
              <Link
                key={s.n}
                href={s.href}
                className={`group flex flex-col rounded-2xl border p-7 transition-all hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 ${s.accent} bg-white`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl ${s.iconBg}`}>
                    <s.icon size={20} className={s.iconColor} />
                  </span>
                  <span className="font-mono text-[10px] text-carbon-400">{s.n}</span>
                </div>

                {/* Title + price */}
                <div className="mt-5">
                  <h3 className="font-display text-xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-2xl">
                    {s.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="font-display text-sm font-bold text-carbon-950">{s.price}</span>
                    <span className="font-mono text-[10px] text-carbon-400">· {s.timeline}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-sm leading-relaxed text-carbon-500">{s.summary}</p>

                {/* Bullets */}
                <ul className="mt-5 flex-1 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-carbon-600">
                      <CheckCircle size={12} className="mt-0.5 shrink-0 text-carbon-400" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA row */}
                <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-carbon-950 transition group-hover:gap-2.5">
                  View service
                  <ArrowUpRight size={13} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Automation platforms ──────────────────────────── */}
      <section className="section bg-white">
        <div className="container-x">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-600" />
            Automation platforms
          </p>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="heading-md max-w-lg">
              We pick the right tool.{" "}
              <span className="italic-accent text-carbon-400">You just get the outcome.</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-carbon-500">
              Every platform has a sweet spot. We map your workflow to the best fit — not the one we happen to know.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group flex flex-col rounded-2xl border border-carbon-950/[0.07] bg-[rgb(250,250,250)] p-7 transition-all hover:border-orange-600/25 hover:bg-white hover:shadow-[0_8px_32px_-8px_rgba(234,88,12,0.12)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-600/10">
                    <p.icon size={18} className="text-orange-600" />
                  </span>
                  <span className={`rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold tracking-[-0.02em] text-carbon-950">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-carbon-500">{p.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-carbon-950 transition group-hover:gap-2.5">
                  Learn more
                  <ArrowUpRight size={13} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guarantees strip ─────────────────────────────── */}
      <section className="section border-y border-carbon-950/[0.06] bg-[rgb(250,250,250)]">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-600" />
                Our standard
              </p>
              <h2 className="heading-md mt-5">
                Same guarantee.{" "}
                <span className="italic-accent text-carbon-400">Every engagement.</span>
              </h2>
              <p className="lede mt-5 max-w-md">
                We don&apos;t do retainers that grow forever or invoices that surprise you. Every project runs the same way.
              </p>
              <Link href="/pricing" className="btn-primary mt-8 inline-flex">
                See pricing <ArrowUpRight size={14} />
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {guarantees.map((g) => (
                <li
                  key={g}
                  className="flex items-center gap-3 rounded-xl border border-carbon-950/[0.07] bg-white px-5 py-4 text-sm text-carbon-700"
                >
                  <CheckCircle size={14} className="shrink-0 text-orange-600" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
