"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight, Zap, Code2, Sprout } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const groups = [
  {
    n: "G.01",
    icon: Zap,
    tag: "Automation",
    title: "Workflows that quietly run themselves.",
    items: [
      "AI agents on OpenAI · Anthropic",
      "n8n workflow automation",
      "GoHighLevel CRM + funnels",
      "Zapier multi-app glue",
      "Python custom pipelines",
      "Slack · Gmail · HubSpot bots",
    ],
  },
  {
    n: "G.02",
    icon: Code2,
    tag: "Engineering",
    title: "Websites and apps engineered to last.",
    items: [
      "Next.js marketing sites",
      "React web apps + dashboards",
      "Headless CMS (Sanity, Contentful)",
      "Custom API integrations",
      "Edge runtimes on Vercel · CF",
      "Mobile-first, fully accessible",
    ],
  },
  {
    n: "G.03",
    icon: Sprout,
    tag: "Growth",
    title: "Search, content, and analytics that compound.",
    items: [
      "Technical SEO audits + fixes",
      "Keyword cluster mapping",
      "Editorial content systems",
      "Backlink + outreach programs",
      "Looker Studio dashboards",
      "Conversion experiments",
    ],
  },
];

export default function Capabilities() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll("[data-cap-card]") ?? [];
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              What we engineer
            </span>
            <h2 className="heading-lg mt-8">
              No fake case studies.
              <br />
              <span className="italic-accent text-carbon-500">
                Just the work we ship.
              </span>
            </h2>
          </div>
          <Link href="/portfolio" className="btn-link">
            See full capabilities <ArrowUpRight size={14} />
          </Link>
        </div>

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-carbon-500">
          We're a young AI startup, so we won't paste fabricated client logos
          or invented metrics on this page. Here's what we actually do
          across automation, engineering, and growth — in the open.
        </p>

        <div
          ref={cardsRef}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {groups.map((g) => (
            <div
              key={g.n}
              data-cap-card
              className="relative flex flex-col rounded-3xl border border-carbon-950/[0.08] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-carbon-950/20 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                  {g.n}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-carbon-950 text-white">
                  <g.icon size={16} />
                </span>
              </div>

              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-carbon-500">
                ({g.tag})
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-3xl">
                {g.title}
              </h3>

              <ul className="mt-7 space-y-2.5 border-t border-carbon-950/[0.08] pt-5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-sm text-carbon-700"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-carbon-950" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
