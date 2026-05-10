"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bot,
  MessageSquare,
  Network,
  Database,
  Sparkles,
  Plug,
  LineChart,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const agents = [
  {
    n: "A.01",
    icon: Bot,
    title: "Custom AI Agent Development",
    desc: "Bespoke agents shaped to one specific workflow in your business — scoped, evaluated, and shipped to production with rollback in place.",
    use: "Lead routing · ticket triage · proposal drafts",
  },
  {
    n: "A.02",
    icon: MessageSquare,
    title: "Conversational AI Agents",
    desc: "Chat-first agents that handle support, sales discovery, or internal Q&A — grounded in your knowledge base, with escalation paths.",
    use: "Help desk · website chat · Slack copilots",
  },
  {
    n: "A.03",
    icon: Network,
    title: "Multi-Agent Systems",
    desc: "Orchestrated agents passing context to each other — researcher → writer → reviewer, or planner → executor → evaluator.",
    use: "Content pipelines · ops automation · research",
  },
  {
    n: "A.04",
    icon: Database,
    title: "RAG Solutions",
    desc: "Retrieval-augmented agents that read your docs, tickets, or transcripts before answering — with citations, freshness, and access control.",
    use: "Internal wiki Q&A · legal docs · onboarding",
  },
  {
    n: "A.05",
    icon: Sparkles,
    title: "Custom AI Assistants",
    desc: "Internal copilots for content, finance, ops, or HR — fine-tuned on your voice and policies, accessible in Slack or your existing tools.",
    use: "Drafting · expense review · policy lookup",
  },
  {
    n: "A.06",
    icon: Plug,
    title: "LLM Integration Services",
    desc: "Wiring OpenAI, Anthropic, or open-source models directly into your product or backend — with caching, observability, and cost guardrails.",
    use: "Product features · API endpoints · embeddings",
  },
  {
    n: "A.07",
    icon: LineChart,
    title: "Data Analysis & Decision Support",
    desc: "Analytical agents that read dashboards, ingest spreadsheets, and surface decisions — not just charts. Weekly digests on autopilot.",
    use: "Exec briefings · variance reports · forecasts",
  },
];

export default function AIAgents() {
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = grid.current?.querySelectorAll("[data-agent]") ?? [];
      gsap.fromTo(
        cards,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: { trigger: grid.current, start: "top 80%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              AI Agents · seven shapes
            </span>
            <h2 className="heading-lg mt-8">
              Seven kinds of agents.{" "}
              <span className="italic-accent text-carbon-500">
                One engineering bench.
              </span>
            </h2>
          </div>
          <p className="lede max-w-md lg:col-span-7 lg:mt-32 lg:max-w-lg">
            Most teams need one or two of these. We build all seven, so we
            recommend the right shape for the job — instead of forcing every
            problem into the same template.
          </p>
        </div>

        <div
          ref={grid}
          className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2 lg:grid-cols-3"
        >
          {agents.map((a) => (
            <article
              key={a.n}
              data-agent
              className="flex flex-col bg-[rgb(252,251,249)] p-7 transition-colors duration-500 hover:bg-white sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                  {a.n}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-carbon-950 text-white">
                  <a.icon size={16} />
                </span>
              </div>

              <h3 className="mt-7 font-display text-xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-2xl">
                {a.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-carbon-500">{a.desc}</p>

              <p className="mt-6 border-t border-carbon-950/[0.08] pt-4 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-500">
                Use cases — <span className="text-carbon-950">{a.use}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
