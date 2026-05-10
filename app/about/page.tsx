import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu, Code2, Search, Cloud, PenTool, Bot } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Value Tech Solution is a studio of computer science engineers and AI automation engineers building the systems modern teams need to grow.",
};

const capabilities = [
  {
    n: "C.01",
    icon: Cpu,
    title: "Computer Science Engineering",
    desc: "Senior engineers from distributed systems, compilers, and applied product backgrounds — hired for taste and judgment, not ticket throughput.",
  },
  {
    n: "C.02",
    icon: Bot,
    title: "AI Automation Engineering",
    desc: "We design LLM agents, evals, guardrails, and tool integrations that hold up in production — not demos. Six-figure cost budgets, single-digit hallucination rates.",
  },
  {
    n: "C.03",
    icon: Code2,
    title: "Web & Product Engineering",
    desc: "Next.js, TypeScript, headless CMS, edge runtimes. Lighthouse 99, CI-budgeted, accessible by default — the kind of code that ages well.",
  },
  {
    n: "C.04",
    icon: Search,
    title: "Search & Growth",
    desc: "Technical SEO, content systems, and link strategy that earn rankings the algorithms still reward in 2026.",
  },
  {
    n: "C.05",
    icon: Cloud,
    title: "Cloud & Infrastructure",
    desc: "AWS, GCP, Vercel — infrastructure that scales with the business and bills you don't have to babysit at 3am.",
  },
  {
    n: "C.06",
    icon: PenTool,
    title: "Design Systems",
    desc: "Figma-first, token-driven, fully documented. The kind of handoff that doesn't quietly rot three months after launch.",
  },
];

const values = [
  {
    title: "Engineers first.",
    desc: "Every project is led by an engineer with 6+ years in production systems. Strategists assist; they don't decide.",
  },
  {
    title: "Outcomes, not artefacts.",
    desc: "We're paid for revenue, hours saved, and rankings earned — not the number of slides or features delivered.",
  },
  {
    title: "Boring stack, sharp ideas.",
    desc: "Mature tooling, opinionated architecture. The next engineer ramps up in days, not months.",
  },
  {
    title: "Honest scope.",
    desc: "Fixed price, fixed timeline, written tradeoffs. If a thing can't ship in time, we'll say so before you sign.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="(studio note)"
        title={
          <>
            Engineers first.
            <br />
            <span className="italic-accent text-carbon-500">
              Studio second.
            </span>
          </>
        }
        description="Value Tech Solution is an AI startup of engineers shipping automations on n8n, GHL, Zapier, and Python — alongside Next.js websites and SEO programs. Built for founders who'd rather ship than negotiate scope."
      />

      {/* Manifesto + portrait image */}
      <section className="section pt-0">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-carbon-950/[0.08]">
              <Image
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80"
                alt="Engineer working on code"
                fill
                priority
                className="object-cover grayscale contrast-110"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em]">
                  (img 01) — the work
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em]">
                  bengaluru · 2026
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5 lg:order-1">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              Manifesto
            </span>
            <h2 className="heading-md mt-8">
              We are{" "}
              <span className="italic-accent text-carbon-500">
                computer science engineers
              </span>{" "}
              and{" "}
              <span className="italic-accent text-carbon-500">
                AI automation engineers
              </span>
              .
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-carbon-500">
              <p>
                That distinction matters. Most "AI agencies" are marketers
                who learned to call OpenAI. We're engineers who've shipped
                production systems for a decade — and who've spent the last
                three years putting LLMs into the workflows that actually run
                businesses.
              </p>
              <p>
                We started Value Tech Solution because we got tired of agencies that
                sell process and ship slide decks. We hired senior-only,
                kept the team small, and made one promise: every line of
                code, every agent, every brief — owned by an engineer with
                judgment, not delegated to juniors learning on your dime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities — editorial divided list */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">
                <span className="h-px w-8 bg-carbon-500" />
                What we engineer
              </span>
              <h2 className="heading-lg mt-8">
                Six disciplines.
                <br />
                <span className="italic-accent text-carbon-500">
                  One team.
                </span>
              </h2>
              <p className="lede mt-8 max-w-md">
                We don't outsource the hard parts. Every capability below is
                handled in-house by senior engineers who've built it before.
              </p>
            </div>

            <ul className="lg:col-span-8 lg:mt-3">
              {capabilities.map((c, i) => (
                <li
                  key={c.n}
                  className={`grid grid-cols-12 items-baseline gap-6 py-10 ${
                    i !== 0 ? "border-t border-carbon-950/[0.08]" : ""
                  }`}
                >
                  <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.24em] text-carbon-400">
                    {c.n}
                  </span>
                  <div className="col-span-10 grid grid-cols-12 items-baseline gap-4">
                    <div className="col-span-12 flex items-baseline gap-4 sm:col-span-6">
                      <c.icon
                        size={18}
                        className="shrink-0 translate-y-0.5 text-carbon-950"
                      />
                      <h3 className="font-display text-2xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-3xl">
                        {c.title}
                      </h3>
                    </div>
                    <p className="col-span-12 text-sm text-carbon-500 sm:col-span-6 sm:max-w-md sm:pl-6">
                      {c.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Wide image divider */}
      <section className="relative">
        <div className="container-x">
          <figure className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-carbon-950/[0.08] sm:aspect-[16/7]">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
              alt="Modern engineering workspace"
              fill
              className="object-cover grayscale contrast-105"
              sizes="100vw"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white sm:p-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em]">
                  (img 02) — the studio
                </p>
                <p className="mt-3 max-w-md font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
                  A small room. Senior people. Long deep work blocks.
                </p>
              </div>
              <p className="hidden font-mono text-[10px] uppercase tracking-[0.28em] sm:block">
                remote-first
                <br />
                IN · UAE · UK
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Engineer credentials strip */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">
                <span className="h-px w-8 bg-carbon-500" />
                Engineering DNA
              </span>
              <h2 className="heading-md mt-8">
                Computer science meets{" "}
                <span className="italic-accent text-carbon-500">applied AI</span>.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-10 lg:col-span-7">
              {[
                ["6+", "yrs avg. tenure", "of every engineer on the team"],
                ["100%", "in-house", "no offshore subcontracting, ever"],
                ["12", "AI agents shipped", "in the last 18 months alone"],
                ["B.Tech / M.S.", "computer science", "from accredited programmes"],
              ].map(([v, k, s]) => (
                <div
                  key={k}
                  className="border-t border-carbon-950/[0.08] pt-6"
                >
                  <p className="font-display text-4xl font-bold tracking-[-0.04em] text-carbon-950 sm:text-5xl">
                    {v}
                  </p>
                  <p className="mt-3 text-sm font-medium text-carbon-950">
                    {k}
                  </p>
                  <p className="mt-1 text-xs text-carbon-400">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Values */}
      <section className="section">
        <div className="container-x">
          <div className="text-center">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              What we believe
            </span>
            <h2 className="heading-lg mt-8">
              Four principles.{" "}
              <span className="italic-accent text-carbon-500">Every project.</span>
            </h2>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-[rgb(252,251,249)] p-10 sm:p-14"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                  ({String(i + 1).padStart(2, "0")})
                </p>
                <h3 className="mt-6 font-display text-3xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-4xl">
                  {v.title}
                </h3>
                <p className="mt-4 max-w-md text-base text-carbon-500">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final image with closing word */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <figure className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-carbon-950/[0.08]">
                <Image
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80"
                  alt="Hands at a laptop, building"
                  fill
                  className="object-cover grayscale contrast-110"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                <span>(img 03) — building, daily</span>
                <span>est. 2024</span>
              </figcaption>
            </figure>

            <div className="flex flex-col justify-center lg:col-span-5">
              <span className="eyebrow">
                <span className="h-px w-8 bg-carbon-500" />
                A closing note
              </span>
              <p className="mt-8 font-display text-3xl font-medium leading-[1.18] tracking-[-0.025em] text-carbon-950 sm:text-4xl">
                <span className="italic-accent text-carbon-500">"</span>
                If you're hiring an agency to write copy and pick a template,
                we're the wrong studio. If you want engineers who'll build
                the actual system behind your business — and stand behind
                it — say hello.
                <span className="italic-accent text-carbon-500">"</span>
              </p>

              <Link href="/contact" className="btn-link mt-10 text-base">
                Start a conversation <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
