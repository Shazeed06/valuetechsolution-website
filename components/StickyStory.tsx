"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Bot, FileText, Send, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    n: "01",
    icon: Mail,
    title: "Inbound arrives",
    body: "A new lead lands in your inbox or chat. Our agent listens to the channels you point it at — Gmail, Slack, GHL, your form endpoint.",
    detail: "Webhook + auth wired. Zero polling. Sub-second pickup.",
  },
  {
    n: "02",
    icon: Bot,
    title: "AI triages",
    body: "The agent reads, classifies intent, looks up history in your CRM, and decides: route, draft, or escalate. Logged with a trace.",
    detail: "Eval suite running on every classification. Confidence scored.",
  },
  {
    n: "03",
    icon: FileText,
    title: "Draft is generated",
    body: "If a reply is needed, a draft is written in your voice — referencing past wins, pricing, calendar links — ready for human review.",
    detail: "Tone-matched. Grounded in your brand voice document.",
  },
  {
    n: "04",
    icon: Send,
    title: "Sent or escalated",
    body: "Auto-send for confident replies, route to a human for tricky ones. Slack thread + CRM note logged. Calendar invite sent if booked.",
    detail: "Human-in-the-loop checkpoint configurable per workflow.",
  },
  {
    n: "05",
    icon: CheckCircle2,
    title: "Tracked",
    body: "Outcome lands in your dashboard — response rate, booking rate, revenue attributed. The agent learns from human edits.",
    detail: "Looker Studio · Posthog · or your data warehouse of choice.",
  },
];

export default function StickyStory() {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!wrap.current) return;
      const triggers: ScrollTrigger[] = [];
      steps.forEach((_, i) => {
        const t = ScrollTrigger.create({
          trigger: wrap.current!,
          start: `top+=${i * 60}% top+=12%`,
          end: `top+=${(i + 1) * 60}% top+=12%`,
          onToggle: ({ isActive }) => {
            if (isActive) setActive(i);
          },
        });
        triggers.push(t);
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrap}
      className="relative bg-carbon-950 text-white"
      style={{ height: `${steps.length * 60 + 60}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/3 h-[36rem] w-[36rem] rounded-full bg-white/[0.04] blur-3xl"
        />

        <div className="container-x relative grid w-full gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
              <span className="h-px w-8 bg-white/40" />
              Anatomy of one workflow
            </span>
            <h2 className="mt-8 font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              How a Value Tech{" "}
              <span className="italic-accent text-white/55">agent</span> works.
            </h2>
            <p className="mt-6 max-w-md text-white/60">
              Scroll through the five steps every production agent we ship goes
              through — from raw inbound to a tracked, attributable outcome.
            </p>

            <div className="mt-10 hidden gap-2 lg:flex">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                    i <= active ? "bg-white" : "bg-white/15"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative h-[420px] sm:h-[480px]">
              {steps.map((s, i) => {
                const isActive = i === active;
                const Icon = s.icon;
                return (
                  <div
                    key={s.n}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : i < active
                          ? "-translate-y-8 opacity-0"
                          : "translate-y-8 opacity-0"
                    }`}
                  >
                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur sm:p-12">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/55">
                          step · {s.n}
                        </span>
                        <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-carbon-950">
                          <Icon size={18} />
                        </span>
                      </div>
                      <h3 className="mt-10 font-display text-3xl font-bold tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                        {s.title}
                      </h3>
                      <p className="mt-5 max-w-md text-white/70">{s.body}</p>
                      <p className="mt-8 border-t border-white/10 pt-5 font-mono text-[11px] uppercase tracking-[0.24em] text-white/55">
                        ↳ {s.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
