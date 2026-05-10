import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import MediaDivider from "@/components/MediaDivider";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Field notes",
  description:
    "Engineering field notes from Value Tech Solution — AI agents, automation patterns, web performance, and SEO that compounds.",
};

const posts = [
  {
    n: "F.01",
    title: "Why most AI agents fail in production",
    body: "A short note on the difference between a working demo and a system that survives real traffic. Three things we instrument from day one — and one we don't ship without.",
    cat: "AI Engineering",
    read: "6 min",
    date: "Coming soon",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "F.02",
    title: "n8n vs Make vs Zapier — when we pick which",
    body: "We're platform-agnostic, but not random. Here's the decision tree we use when scoping a new automation: ownership, complexity, and cost-at-scale.",
    cat: "Automation",
    read: "8 min",
    date: "Coming soon",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "F.03",
    title: "Lighthouse 99 isn't a flex — it's a budget",
    body: "Performance budgets enforced in CI mean we can't ship a regression. Here's the bundle, image, and font budget every Value Tech site lives within.",
    cat: "Web Engineering",
    read: "5 min",
    date: "Coming soon",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "F.04",
    title: "GEO and AEO — preparing for AI-first search",
    body: "Why Schema.org, /llms.txt, and answer-shaped FAQs matter more than backlinks for the next wave of search. Field notes from our own deployment.",
    cat: "SEO + GEO",
    read: "9 min",
    date: "Coming soon",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "F.05",
    title: "How we evaluate an LLM agent",
    body: "Eval suites, golden datasets, regression checks, and the human-review loop that catches what numbers miss. Sample evals at the bottom.",
    cat: "AI Engineering",
    read: "11 min",
    date: "Coming soon",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "F.06",
    title: "Fixed scope, written tradeoffs",
    body: "How we scope projects so neither side is surprised three weeks in. The exact tradeoff doc we write before signing — share it with your next agency.",
    cat: "Studio Notes",
    read: "4 min",
    date: "Coming soon",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="(field notes)"
        title={
          <>
            Field notes from
            <br />
            <span className="italic-accent text-carbon-500">
              the engineer&apos;s bench.
            </span>
          </>
        }
        description="Short, opinionated essays on AI agents, automation patterns, web performance, and search systems. Written by the people building them, for the people using them."
      />

      <MediaDivider
        src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2200&q=80"
        alt="Notebook open on a desk"
        caption="(field notes · in progress)"
        headline={
          <>
            Written by engineers,{" "}
            <span className="italic-accent text-white/70">
              for the next engineer.
            </span>
          </>
        }
        meta={
          <>
            one essay
            <br />
            a month
          </>
        }
        aspect="cine"
      />

      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2">
            {posts.map((p, i) => (
              <article
                key={p.n}
                className={`group flex flex-col bg-[rgb(252,251,249)] transition-colors duration-500 hover:bg-white ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    i === 0 ? "aspect-[16/7]" : "aspect-[16/9]"
                  }`}
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes={i === 0 ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
                    className="object-cover grayscale contrast-110 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-950 backdrop-blur">
                    {p.cat}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                      {p.n}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400">
                      <Clock size={10} />
                      {p.read}
                    </span>
                  </div>

                  <h2
                    className={`mt-6 font-display font-bold leading-[1.05] tracking-[-0.03em] text-carbon-950 ${
                      i === 0
                        ? "text-3xl sm:text-4xl lg:text-5xl"
                        : "text-2xl sm:text-3xl"
                    }`}
                  >
                    {p.title}
                  </h2>
                  <p
                    className={`mt-4 flex-1 text-carbon-500 ${
                      i === 0 ? "max-w-2xl text-base" : "text-sm"
                    }`}
                  >
                    {p.body}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-carbon-950/[0.08] pt-5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-carbon-400">
                      {p.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-carbon-950 opacity-50">
                      Read note <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-6 rounded-3xl border border-carbon-950/[0.08] p-10 text-center sm:p-14">
            <BookOpen size={20} className="text-carbon-950" />
            <h3 className="font-display text-3xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-4xl">
              One short essay a month.{" "}
              <span className="italic-accent text-carbon-500">No fluff.</span>
            </h3>
            <p className="max-w-md text-sm text-carbon-500">
              The same notes our team writes for itself — shared with you a
              week later, plus the templates we used.
            </p>
            <form className="mt-2 flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-carbon-950/15 bg-white px-5 py-3 text-sm placeholder:text-carbon-400 focus:border-carbon-950 focus:outline-none"
              />
              <button className="rounded-full bg-carbon-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-carbon-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
