import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import MediaDivider from "@/components/MediaDivider";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent fixed-scope pricing for AI automation, web development, SEO, and design system engagements at Value Tech Solution.",
  alternates: { canonical: "https://valuetechsolution.com/pricing" },
};

const tiers = [
  {
    name: "Diagnostic",
    audience: "Founders scoping their first agent or website",
    price: "$1,200",
    cadence: "fixed · 2 weeks",
    headline: "We map. You decide.",
    bullets: [
      "Workflow audit + opportunity map",
      "ROI estimate per workflow",
      "Build / buy / skip recommendations",
      "Fixed scope, fixed price",
    ],
    cta: "Start a diagnostic",
    href: "/contact?plan=diagnostic",
    note: "Often credited toward the build engagement that follows.",
  },
  {
    name: "Build sprint",
    audience: "One agent, site, or platform setup — shipped",
    price: "from $6,500",
    cadence: "fixed · 4–6 weeks",
    headline: "We ship. You operate.",
    bullets: [
      "1 production-grade deliverable",
      "Up to 5 tool integrations",
      "Eval suite + observability",
      "30-day post-launch tuning",
    ],
    cta: "Start a sprint",
    href: "/contact?plan=sprint",
    highlight: true,
  },
  {
    name: "Studio retainer",
    audience: "Teams who need an embedded engineering bench",
    price: "from $4,500 / mo",
    cadence: "rolling · 3-month minimum",
    headline: "We extend. You compound.",
    bullets: [
      "Continuous expansion of agents/sites/SEO",
      "Monitoring + tuning included",
      "New workflow each month",
      "Dedicated senior engineer",
    ],
    cta: "Talk retainer",
    href: "/contact?plan=retainer",
  },
];

const services = [
  {
    cat: "AI Automation",
    href: "/services/ai-automation",
    items: [
      ["Diagnostic", "from $1,200"],
      ["First agent (production)", "from $6,500"],
      ["Automation retainer", "from $4,500 / mo"],
    ],
  },
  {
    cat: "Web Development",
    href: "/services/web-development",
    items: [
      ["Landing page sprint", "from $2,400"],
      ["Marketing site (12 pages)", "from $7,800"],
      ["Web application", "from $18,000"],
    ],
  },
  {
    cat: "SEO Optimization",
    href: "/services/seo",
    items: [
      ["Audit + critical fixes", "from $1,800"],
      ["Growth retainer", "from $2,400 / mo"],
      ["Enterprise programs", "custom"],
    ],
  },
  {
    cat: "Design Systems",
    href: "/services/design-systems",
    items: [
      ["Brand sprint", "from $4,800"],
      ["Full design system", "from $14,500"],
      ["Design retainer", "from $5,500 / mo"],
    ],
  },
  {
    cat: "Automation Platforms",
    href: "/services",
    items: [
      ["n8n workflow suite", "from $6,500"],
      ["GoHighLevel agency snapshot", "from $4,800"],
      ["Zapier workspace build", "from $4,200"],
      ["Python pipeline build", "from $7,500"],
    ],
  },
];

const faqs = [
  ["Why fixed-scope, not hourly?", "Hourly bills incentivise dragging projects out. Fixed scope forces us to be precise about what's in and what's not — and removes the surprise on your invoice."],
  ["What if I need a change mid-project?", "Change requests are quoted in writing as a delta to the SOW before any work happens. You decide whether the new scope is worth the new price."],
  ["Do you bill in INR?", "Yes — clients in India can be billed in INR via UPI / RTGS. International clients in USD via wire / Stripe."],
  ["Can the diagnostic credit roll into a build?", "Yes — if you start a Build sprint within 60 days of the diagnostic, the diagnostic fee is credited 100% toward the build."],
  ["Are retainers cancellable?", "After the 3-month minimum, retainers are month-to-month with 30 days notice. We don't believe in lock-in."],
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="(pricing)"
        title={
          <>
            Three engagements.{" "}
            <span className="italic-accent text-carbon-500">No surprises.</span>
          </>
        }
        description="We sell three kinds of engagements — a diagnostic, a build sprint, or a studio retainer. Every project lives inside one of these. Scopes, timelines, and prices are written before you sign."
      />

      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative flex flex-col p-8 sm:p-10 ${
                  t.highlight
                    ? "bg-carbon-950 text-white"
                    : "bg-[rgb(252,251,249)]"
                }`}
              >
                {t.highlight && (
                  <span className="mb-5 inline-flex w-fit rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-white/80">
                    most chosen
                  </span>
                )}
                <p
                  className={`font-mono text-[10px] uppercase tracking-[0.28em] ${
                    t.highlight ? "text-white/55" : "text-carbon-400"
                  }`}
                >
                  {t.cadence}
                </p>
                <h2
                  className={`mt-3 font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl ${
                    t.highlight ? "text-white" : "text-carbon-950"
                  }`}
                >
                  {t.name}
                </h2>
                <p
                  className={`mt-2 text-sm ${
                    t.highlight ? "text-white/65" : "text-carbon-500"
                  }`}
                >
                  {t.audience}
                </p>

                <p
                  className={`mt-8 font-display text-5xl font-bold tracking-[-0.04em] ${
                    t.highlight ? "text-white" : "text-carbon-950"
                  }`}
                >
                  {t.price}
                </p>
                <p
                  className={`mt-2 italic-accent text-base ${
                    t.highlight ? "text-white/70" : "text-carbon-500"
                  }`}
                >
                  {t.headline}
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {t.bullets.map((b) => (
                    <li
                      key={b}
                      className={`flex items-start gap-2 text-sm ${
                        t.highlight ? "text-white/85" : "text-carbon-700"
                      }`}
                    >
                      <Check
                        size={14}
                        className={`mt-1 shrink-0 ${
                          t.highlight ? "text-white" : "text-carbon-950"
                        }`}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {t.note && (
                  <p
                    className={`mt-6 border-t pt-4 text-xs ${
                      t.highlight
                        ? "border-white/10 text-white/55"
                        : "border-carbon-950/[0.08] text-carbon-400"
                    }`}
                  >
                    ↳ {t.note}
                  </p>
                )}

                <Link
                  href={t.href}
                  className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                    t.highlight
                      ? "bg-white text-carbon-950 hover:bg-snow-100"
                      : "bg-carbon-950 text-white hover:bg-carbon-700"
                  }`}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MediaDivider
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=2200&q=80"
        alt="Code on a dark monitor"
        caption="(scope · written)"
        headline={
          <>
            Fixed scope.{" "}
            <span className="italic-accent text-white/70">
              Written tradeoffs.
            </span>
          </>
        }
        meta={
          <>
            no surprises
            <br />
            on the invoice
          </>
        }
        aspect="cine"
      />

      <section className="section">
        <div className="container-x">
          <div className="text-center">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              By service
            </span>
            <h2 className="heading-lg gap-eyebrow-heading">
              Pricing by{" "}
              <span className="italic-accent text-carbon-500">discipline.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.cat}
                className="flex flex-col bg-[rgb(252,251,249)] p-7 transition-colors hover:bg-white sm:p-9"
              >
                <h3 className="font-display text-xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-2xl">
                  {s.cat}
                </h3>
                <ul className="mt-5 flex-1 divide-y divide-carbon-950/[0.08]">
                  {s.items.map(([name, price]) => (
                    <li
                      key={name}
                      className="flex items-baseline justify-between gap-3 py-3 text-sm"
                    >
                      <span className="text-carbon-700">{name}</span>
                      <span className="font-display font-bold tracking-[-0.02em] text-carbon-950">
                        {price}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="btn-link mt-5 text-sm">
                  Service detail <ArrowUpRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">
                <span className="h-px w-8 bg-carbon-500" />
                FAQ
              </span>
              <h2 className="heading-md gap-eyebrow-heading">
                Pricing,{" "}
                <span className="italic-accent text-carbon-500">explained.</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-carbon-950/[0.08]">
                {faqs.map(([q, a], i) => (
                  <details
                    key={q}
                    className={`group ${i !== 0 ? "border-t border-carbon-950/[0.08]" : ""}`}
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-6 transition hover:bg-snow-50">
                      <span className="font-display text-lg font-bold tracking-[-0.02em] text-carbon-950">
                        {q}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400 group-open:rotate-180">
                        ↓
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-sm leading-relaxed text-carbon-500">
                      {a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
