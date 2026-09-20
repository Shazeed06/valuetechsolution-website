import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowUpRight, Sparkles, HelpCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { FAQSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: {
    absolute: "Transparent Pricing — Web Development & SEO | Value Tech Solution",
  },
  description:
    "Transparent, fixed-price packages for Next.js web development, UI/UX design, and technical SEO. Zero surprise bills. 100% senior engineers.",
  keywords: [
    "web development pricing India",
    "Next.js website cost",
    "fixed price web agency",
    "Value Tech Solution pricing",
  ],
  alternates: { canonical: "https://valuetechsolution.com/pricing" },
};

const tiers = [
  {
    name: "Starter Website",
    audience: "Early-stage startups & local businesses needing a fast, polished web presence",
    price: "$399 / ₹32,000",
    cadence: "Fixed · 1–2 weeks",
    headline: "Fast launch. Clean code.",
    bullets: [
      "Custom responsive Next.js design (up to 5 pages)",
      "98+ Google Lighthouse performance",
      "Interactive contact form & WhatsApp widget",
      "On-page SEO setup & metadata",
      "14-day post-launch support",
    ],
    cta: "Choose Starter",
    href: "/contact?plan=starter",
    highlight: false,
  },
  {
    name: "Growth Web Sprint",
    audience: "High-growth startups & modern brands requiring a conversion-optimized experience",
    price: "from $899 / ₹72,000",
    cadence: "Fixed · 3–4 weeks",
    headline: "Bespoke design. Peak conversions.",
    bullets: [
      "Full custom Figma design system",
      "Next.js 16 App Router & micro-interactions",
      "Headless CMS integration (Sanity / Strapi)",
      "Technical SEO & JSON-LD schema markup",
      "Analytics & conversion tracking integration",
      "30-day post-launch warranty",
    ],
    cta: "Start a Sprint",
    href: "/contact?plan=sprint",
    highlight: true,
  },
  {
    name: "Custom Web App / Portal",
    audience: "Companies needing full-stack dashboards, client portals, or SaaS products",
    price: "from $1,899 / ₹1,50,000",
    cadence: "Milestone-based · 4–8 weeks",
    headline: "Scalable architecture. Enterprise ready.",
    bullets: [
      "Full-stack Next.js, TypeScript & PostgreSQL",
      "User authentication & role-based access",
      "Third-party REST / GraphQL API integrations",
      "Stripe / Razorpay payment gateway setup",
      "Dedicated staging & CI/CD deployment pipelines",
      "60-day post-launch tuning & maintenance",
    ],
    cta: "Discuss Web App",
    href: "/contact?plan=webapp",
    highlight: false,
  },
];

const faqs = [
  ["Why fixed-scope, not hourly billing?", "Hourly billing incentivizes agencies to drag projects out. Fixed scope forces precision on deliverables, gives you budgetary certainty, and eliminates surprise invoices."],
  ["What if I need a change mid-project?", "Change requests are quoted transparently in writing as an addendum before work begins. You always maintain complete control over scope and budget."],
  ["Do you accept payments in INR and USD?", "Yes — clients in India can pay via UPI, NEFT, or corporate cards in INR. International clients can pay in USD, GBP, or EUR via Stripe or international wire transfer."],
  ["What happens after the website goes live?", "Every build includes a dedicated post-launch warranty covering any bugs or adjustments. We also offer monthly care retainers for continuous speed and SEO monitoring."],
];

export default function PricingPage() {
  return (
    <div className="bg-[#efebe5] text-[#141414] min-h-screen">
      <FAQSchema items={faqs.map(([q, a]) => ({ q, a }))} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Pricing", url: "https://valuetechsolution.com/pricing" },
        ]}
      />

      <PageHeader
        eyebrow="Transparent Pricing"
        title={
          <>
            Predictable pricing.{" "}
            <span className="font-sourceSerif italic font-normal text-primary">
              Guaranteed delivery.
            </span>
          </>
        }
        description="Every project comes with an itemized statement of work, a fixed turnaround timeline, and guaranteed 98+ Google Lighthouse performance. Zero surprise invoices."
      />

      {/* 3 Pricing Cards */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3 items-stretch">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  t.highlight
                    ? "bg-[#141414] text-white shadow-2xl border-2 border-primary"
                    : "bg-white text-[#141414] border border-[#ece9e1] shadow-sm hover:shadow-md"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-xs font-bold uppercase tracking-widest ${t.highlight ? "text-primary" : "text-[#7d7b77]"}`}>
                      {t.cadence}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-black text-2xl sm:text-3xl tracking-tight mb-2">
                    {t.name}
                  </h3>
                  <p className={`text-xs leading-relaxed mb-6 font-medium ${t.highlight ? "text-white/60" : "text-[#7d7b77]"}`}>
                    {t.audience}
                  </p>

                  <div className="pb-6 mb-6 border-b border-white/10">
                    <div className="font-montserrat font-black text-3xl sm:text-4xl">
                      {t.price}
                    </div>
                    <div className={`text-xs mt-1 font-medium ${t.highlight ? "text-primary" : "text-primary font-semibold"}`}>
                      {t.headline}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-xs font-medium">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className={t.highlight ? "text-white/85" : "text-[#141414]/85"}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    href={t.href}
                    className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-semibold text-sm transition-all duration-300 ${
                      t.highlight
                        ? "bg-primary hover:bg-opacity-90 text-white shadow-md active:scale-95"
                        : "bg-[#141414] hover:bg-black text-white active:scale-95"
                    }`}
                  >
                    <span>{t.cta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-20 bg-[#f7f2ea] border-t border-[#d8d3ce]">
        <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-white border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                Pricing Questions
              </span>
            </div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-[#141414] tracking-tight">
              Common pricing queries
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {faqs.map(([q, a]) => (
              <div key={q} className="bg-white rounded-3xl p-7 border border-[#ece9e1] shadow-sm">
                <h3 className="font-montserrat font-bold text-base text-[#141414] mb-2 tracking-tight">
                  {q}
                </h3>
                <p className="text-sm text-[#7d7b77] font-medium leading-relaxed">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
