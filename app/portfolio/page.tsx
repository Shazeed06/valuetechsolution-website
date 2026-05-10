import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StackMarquee from "@/components/StackMarquee";
import Capabilities from "@/components/Capabilities";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "What we engineer",
  description:
    "Value Tech Solution is a young AI startup. We don't show fake case studies — we show the actual stack, capabilities, and work we ship.",
};

const examples = [
  {
    n: "W.01",
    type: "AI Automation",
    title: "Lead-to-onboarding pipeline",
    body: "Inbound emails routed by an AI triage agent → CRM enrichment → personalised proposal draft → onboarding sequence. Built on n8n + GHL + OpenAI.",
    stack: ["n8n", "GHL", "OpenAI", "Slack"],
  },
  {
    n: "W.02",
    type: "Web Development",
    title: "High-conversion marketing site",
    body: "Next.js + Sanity site with sub-2s LCP, on-page SEO, and CMS-driven blog. Lighthouse 99 on every commit, deployed to the edge.",
    stack: ["Next.js", "Sanity", "Vercel", "Tailwind"],
  },
  {
    n: "W.03",
    type: "Automation",
    title: "Internal ops automation",
    body: "Zapier + Python pipeline syncing Stripe, HubSpot, and a finance sheet. Weekly digest agent posts a Monday summary in Slack.",
    stack: ["Zapier", "Python", "Stripe", "Slack"],
  },
  {
    n: "W.04",
    type: "SEO Program",
    title: "12-month organic engine",
    body: "Technical audit + fixes, keyword clustering, content brief system, and digital PR outreach — wired into a Looker Studio dashboard.",
    stack: ["Ahrefs", "GSC", "Looker", "Webflow"],
  },
];

const numbers = [
  { v: "30+", k: "automations shipped", c: "across n8n, GHL, Zapier, Python" },
  { v: "12+", k: "websites built", c: "Next.js, React, Webflow, Shopify" },
  { v: "8+", k: "AI agents in production", c: "OpenAI, Anthropic, open-source" },
  { v: "20+", k: "SEO programs run", c: "audits, content systems, outreach" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="(what we engineer)"
        title={
          <>
            We don't paste fake logos.
            <br />
            <span className="italic-accent text-carbon-500">
              We tell you the truth.
            </span>
          </>
        }
        description="Value Tech Solution is a young AI startup. Below is what we actually build, the tools we ship on, and a few honest examples of project shapes we've delivered — without fabricated client names or invented metrics."
      />

      {/* Honest numbers */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-0 lg:grid-cols-4">
            {numbers.map((n, i) => (
              <div
                key={n.k}
                className={`pt-8 sm:pt-0 ${
                  i > 0 ? "sm:border-l sm:border-carbon-950/[0.08] sm:pl-8" : ""
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                  ({String(i + 1).padStart(2, "0")})
                </p>
                <p className="mt-5 font-display text-6xl font-bold tracking-[-0.05em] text-carbon-950 sm:text-7xl">
                  {n.v}
                </p>
                <p className="mt-4 text-sm font-medium text-carbon-950">
                  {n.k}
                </p>
                <p className="mt-1 text-xs text-carbon-400">{n.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic image */}
      <section className="relative">
        <div className="container-x">
          <figure className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-carbon-950/[0.08]">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=80"
              alt="Engineering close-up"
              fill
              priority
              sizes="100vw"
              className="object-cover grayscale contrast-110"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 text-white sm:flex-row sm:items-end sm:justify-between sm:p-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em]">
                  (manifesto)
                </p>
                <p className="mt-3 max-w-xl font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl lg:text-4xl">
                  Built by engineers.
                  <span className="italic-accent text-white/70">
                    {" "}
                    No marketing theatre.
                  </span>
                </p>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em]">
                est. 2024
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <Capabilities />
      <StackMarquee />

      {/* Project shapes (honest, type-of-work, no fake clients) */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">
                <span className="h-px w-8 bg-carbon-500" />
                Project shapes
              </span>
              <h2 className="heading-lg mt-8">
                A taste of{" "}
                <span className="italic-accent text-carbon-500">
                  what we ship.
                </span>
              </h2>
              <p className="mt-6 max-w-md text-carbon-500">
                These are real project archetypes we deliver — described
                without naming clients or inventing metrics. If one looks
                like the kind of thing you need, we'll talk specifics on a
                call.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2 lg:col-span-8">
              {examples.map((e) => (
                <div
                  key={e.n}
                  className="flex flex-col bg-[rgb(252,251,249)] p-7 transition-colors hover:bg-white sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                      {e.n} · {e.type}
                    </span>
                    <Check size={14} className="text-carbon-950" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-2xl">
                    {e.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-carbon-500">
                    {e.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {e.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-carbon-950/15 bg-white px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-carbon-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Honest CTA */}
      <section className="section">
        <div className="container-x">
          <div className="rounded-3xl border border-carbon-950 bg-carbon-950 p-8 text-white sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/60">
                  (honest pitch)
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                  Want a real conversation about what we'd build for you?
                </h2>
                <p className="mt-5 max-w-2xl text-base text-white/65">
                  We won't show off other people's logos. We'll show you a
                  Loom of code we've actually shipped, walk you through a
                  workflow we've actually deployed, and tell you exactly
                  what we'd do for your team.
                </p>
              </div>
              <div className="flex items-center gap-4 lg:col-span-4 lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-carbon-950"
                >
                  Book a call <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
