"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const items = [
  ["A.01", "Lead triage", "Reads inbound, classifies by intent, assigns owner."],
  ["A.02", "Proposal drafts", "Pulls past wins, drafts in your voice, ready to review."],
  ["A.03", "Ops reporting", "Weekly digests delivered every Monday, automatic."],
  ["A.04", "Support flow", "Handles tier-1, escalates the tricky ones to a human."],
];

export default function AutomationShowcase() {
  const big = useRef<HTMLSpanElement>(null);
  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        big.current,
        { yPercent: 30, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: big.current, start: "top 85%", once: true },
        }
      );
      gsap.fromTo(
        list.current?.querySelectorAll("li") ?? [],
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: { trigger: list.current, start: "top 80%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              The work, automated
            </span>
            <h2 className="heading-lg mt-8">
              Quiet agents.
              <br />
              <span className="italic-accent text-carbon-500">Loud results.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-carbon-500">
              We map the repeat workflows in your business, ship agents that
              run them end-to-end, and put guardrails where they matter. No
              chatbots. No theatre.
            </p>
            <Link
              href="/services/ai-automation"
              className="btn-link mt-10"
            >
              Read the playbook <ArrowUpRight size={14} />
            </Link>

            <div className="mt-16">
              <span
                ref={big}
                className="block font-display text-[7rem] font-bold leading-[0.78] tracking-[-0.05em] text-carbon-950 sm:text-[10rem] lg:text-[14rem]"
              >
                −80
                <span className="italic-accent text-carbon-300">%</span>
              </span>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                (figure 02) — manual hours, removed
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul ref={list} className="divide-y divide-carbon-950/[0.08]">
              {items.map(([n, t, d]) => (
                <li
                  key={n}
                  className="grid grid-cols-12 items-baseline gap-6 py-8"
                >
                  <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.24em] text-carbon-400">
                    {n}
                  </span>
                  <div className="col-span-10">
                    <p className="font-display text-2xl font-bold tracking-tight text-carbon-950 sm:text-3xl">
                      {t}
                    </p>
                    <p className="mt-2 text-sm text-carbon-500">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
