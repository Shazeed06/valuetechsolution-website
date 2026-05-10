"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  Hammer,
  Lock,
  Globe2,
  Calendar,
  ShieldCheck,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const principles = [
  {
    n: "P.01",
    icon: Sparkles,
    title: "AI-first",
    body: "Every workflow we touch starts with one question — can a model do this part reliably? If yes, we ship the agent. If no, we say so.",
  },
  {
    n: "P.02",
    icon: Hammer,
    title: "Engineer-owned",
    body: "Code, agents, and briefs are owned by the engineer who built them. No project-managers translating between you and the work.",
  },
  {
    n: "P.03",
    icon: Lock,
    title: "Fixed price",
    body: "Scope written down, tradeoffs written down, price written down. We don't bill discovery.",
  },
  {
    n: "P.04",
    icon: Globe2,
    title: "Remote-first",
    body: "Async by default, deep-work by design. Loom over meetings. Six time zones, one bench.",
  },
  {
    n: "P.05",
    icon: Calendar,
    title: "Shipped weekly",
    body: "A demo every Friday. A merged PR every day. Slide decks only when you ask for one.",
  },
  {
    n: "P.06",
    icon: ShieldCheck,
    title: "Senior-only",
    body: "Six-plus years average tenure across the team. No one is learning Next.js or n8n on your dime.",
  },
];

export default function Principles() {
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = grid.current?.querySelectorAll("[data-principle]") ?? [];
      gsap.fromTo(
        cards,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: grid.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="section-tight border-y border-carbon-950/[0.08] bg-[rgb(252,251,249)]">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              (the studio · in six lines)
            </span>
            <h2 className="heading-md gap-eyebrow-heading max-w-2xl">
              Six principles.{" "}
              <span className="italic-accent text-carbon-500">
                Every project.
              </span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
            ↳ written, not whispered
          </p>
        </div>

        <div
          ref={grid}
          className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2 lg:grid-cols-3"
        >
          {principles.map((p) => (
            <article
              key={p.n}
              data-principle
              className="group relative flex flex-col bg-[rgb(252,251,249)] p-7 transition-colors duration-500 hover:bg-white sm:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                  {p.n}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-carbon-950/15 bg-white text-carbon-950 transition group-hover:border-carbon-950 group-hover:bg-carbon-950 group-hover:text-white">
                  <p.icon size={14} />
                </span>
              </div>

              <h3 className="mt-12 font-display text-3xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-4xl">
                {p.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-carbon-500">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
