import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
  Palette,
  Search,
  Code2,
  Rocket,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  Layers
} from "lucide-react";
import CTA from "@/components/CTA";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: {
    absolute: "Web Development & Digital Services — Value Tech Solution",
  },
  description:
    "Custom Next.js web development, UI/UX design, technical SEO, and conversion optimization — fixed-scope sprints by senior engineers.",
  keywords: [
    "web development services India",
    "Next.js web agency",
    "UI UX design studio",
    "technical SEO audit",
    "Value Tech Solution services",
  ],
  alternates: { canonical: "https://valuetechsolution.com/services" },
};

const coreServices = [
  {
    n: "01",
    icon: Globe,
    title: "Web Development",
    href: "/services/web-development",
    price: "from ₹40,000 / $500",
    timeline: "2–4 weeks",
    summary:
      "Custom Next.js 16 websites engineered for peak performance, smooth animations, and top-tier search visibility.",
    bullets: [
      "Next.js 16 App Router & TypeScript",
      "98+ Google Lighthouse guaranteed",
      "Headless CMS integration (Sanity / Strapi)",
      "Edge caching & Core Web Vitals",
    ],
    badgeColor: "text-primary bg-primary/10",
    accent: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(26,185,162,0.15)]",
  },
  {
    n: "02",
    icon: Palette,
    title: "UI/UX & Design Systems",
    href: "/services/design-systems",
    price: "from ₹35,000 / $450",
    timeline: "2–3 weeks",
    summary:
      "Tailor-made Figma design systems, responsive typography, wireframes, and interactive prototypes built for conversions.",
    bullets: [
      "Bespoke Figma UI component library",
      "Interactive high-fidelity prototypes",
      "Design tokens & brand guidelines",
      "Responsive desktop, tablet & mobile",
    ],
    badgeColor: "text-secondary bg-secondary/10",
    accent: "hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(251,114,204,0.15)]",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Landing Pages & CRO",
    href: "/services/starter-website",
    price: "from ₹25,000 / $300",
    timeline: "1–2 weeks",
    summary:
      "Laser-focused landing pages engineered for paid advertising, product launches, and high conversion capture.",
    bullets: [
      "Conversion-first copywriting & layout",
      "Interactive forms & WhatsApp connect",
      "Analytics & pixel tracking setup",
      "A/B testing architecture ready",
    ],
    badgeColor: "text-tertiary bg-tertiary/10",
    accent: "hover:border-tertiary/50 hover:shadow-[0_0_30px_rgba(254,168,0,0.15)]",
  },
  {
    n: "04",
    icon: Search,
    title: "Technical SEO & Speed",
    href: "/services/seo",
    price: "from ₹30,000 / mo",
    timeline: "Ongoing",
    summary:
      "Comprehensive technical audits, structured schema.org markup, Core Web Vitals optimization, and keyword architecture.",
    bullets: [
      "Full technical crawl & site audit",
      "JSON-LD structured data implementation",
      "Page speed & performance optimization",
      "Search Console & indexing monitoring",
    ],
    badgeColor: "text-primary bg-primary/10",
    accent: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(26,185,162,0.15)]",
  },
  {
    n: "05",
    icon: Layers,
    title: "Web Applications & SaaS",
    href: "/services/web-development",
    price: "from ₹80,000 / $1,000",
    timeline: "4–8 weeks",
    summary:
      "Custom client portals, internal dashboards, and SaaS frontends built with robust state management and modern APIs.",
    bullets: [
      "Authentication & role management",
      "REST & GraphQL API integrations",
      "Database schema & backend connections",
      "Real-time state & reactive UI",
    ],
    badgeColor: "text-secondary bg-secondary/10",
    accent: "hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(251,114,204,0.15)]",
  },
  {
    n: "06",
    icon: ShieldCheck,
    title: "Ongoing Maintenance",
    href: "/contact",
    price: "from ₹15,000 / mo",
    timeline: "Retainer",
    summary:
      "Dedicated monthly engineering care: 24/7 uptime monitoring, security patches, regular speed tune-ups, and feature updates.",
    bullets: [
      "24/7 automated uptime alerts",
      "Monthly security & dependency updates",
      "Continuous Core Web Vitals checks",
      "Direct founder Slack/WhatsApp access",
    ],
    badgeColor: "text-tertiary bg-tertiary/10",
    accent: "hover:border-tertiary/50 hover:shadow-[0_0_30px_rgba(254,168,0,0.15)]",
  },
];

const guarantees = [
  "Written scope & itemized deliverables before kickoff",
  "Fixed price quotes — zero unexpected hourly surprises",
  "Senior engineers assigned from day one to launch",
  "30-day post-launch warranty & bug-fix guarantee",
  "98+ Google Lighthouse score on every web release",
  "100% code ownership handed over upon launch",
];

export default function ServicesPage() {
  return (
    <div className="bg-[#efebe5] text-[#141414] min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Services", url: "https://valuetechsolution.com/services" },
        ]}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden border-b border-[#d8d3ce]">
        <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
              What We Build
            </span>
          </div>

          <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-7xl tracking-[-0.04em] text-[#141414] leading-[0.98] max-w-4xl mb-6">
            Every service<br />
            <span className="font-sourceSerif italic font-normal text-primary">
              senior-led, fixed-price.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#7d7b77] font-medium leading-relaxed max-w-2xl mb-10">
            From your primary marketing website to custom web apps and ongoing SEO — every project is executed by senior engineers with guaranteed speed and transparent pricing.
          </p>

          <div className="flex flex-wrap gap-8 pt-8 border-t border-[#d8d3ce]">
            {[
              { n: "50+", l: "Websites Launched" },
              { n: "98+", l: "Avg. Lighthouse Speed" },
              { n: "2–4 wk", l: "Typical Delivery" },
              { n: "100%", l: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-montserrat font-black text-2xl sm:text-3xl text-[#141414]">{s.n}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-[#7d7b77] mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-3">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                  Core Offerings
                </span>
              </div>
              <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-[#141414] tracking-tight">
                Services engineered for growth
              </h2>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-black transition-colors"
            >
              <span>View Pricing Plans</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.n}
                  className={`bg-white rounded-3xl p-8 border border-[#ece9e1] flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md ${s.accent}`}
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${s.badgeColor}`}>
                        <Icon size={22} />
                      </div>
                      <span className="font-montserrat font-bold text-xs text-[#7d7b77]/50">{s.n}</span>
                    </div>

                    {/* Title + price */}
                    <h3 className="font-montserrat font-bold text-xl text-[#141414] mb-2 tracking-tight">
                      {s.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-4">
                      <span>{s.price}</span>
                      <span className="text-[#7d7b77]">· {s.timeline}</span>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-[#7d7b77] font-medium leading-relaxed mb-6">
                      {s.summary}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-6">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs font-medium text-[#141414]/80">
                          <CheckCircle size={13} className="mt-0.5 shrink-0 text-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA link */}
                  <div className="pt-4 border-t border-[#ece9e1]">
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#141414] hover:text-primary transition-colors"
                    >
                      <span>Explore service</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-[#f7f2ea] border-t border-[#d8d3ce]">
        <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                  Our Standard
                </span>
              </div>
              <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-[#141414] tracking-tight leading-tight mb-4">
                Same guarantee.{" "}
                <span className="font-sourceSerif italic font-normal text-primary">Every project.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#7d7b77] font-medium leading-relaxed mb-8 max-w-md">
                We believe in straightforward partnerships. Every engagement follows a disciplined development protocol with zero surprise invoices.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#141414] text-white hover:bg-black px-7 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md active:scale-95"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight size={14} className="text-primary" />
              </Link>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {guarantees.map((g) => (
                <li
                  key={g}
                  className="flex items-start gap-3 rounded-2xl border border-[#ece9e1] bg-white p-5 text-xs font-semibold text-[#141414] shadow-sm"
                >
                  <CheckCircle size={16} className="shrink-0 text-primary mt-0.5" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
