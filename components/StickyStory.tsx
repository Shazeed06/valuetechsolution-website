"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Bot,
  FileText,
  Send,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Pause,
  Play,
} from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Mail,
    badge: "trigger",
    title: "Inbound arrives",
    body: "A new lead lands in your inbox or chat. Our agent listens to the channels you point it at — Gmail, Slack, GHL, your form endpoint.",
    detail: "Webhook + auth wired. Zero polling. Sub-second pickup.",
    metrics: [
      ["channels", "5"],
      ["latency", "0.4s"],
      ["status", "ready"],
    ],
    log: [
      "→ POST /webhook · 200 OK",
      "  channel=gmail thread=t/AbcDe123",
      "  payload=874 bytes",
    ],
    accent: "from-emerald-400/30 to-emerald-400/0",
  },
  {
    n: "02",
    icon: Bot,
    badge: "agent",
    title: "AI triages",
    body: "The agent reads, classifies intent, looks up history in your CRM, and decides: route, draft, or escalate. Logged with a trace.",
    detail: "Eval suite running on every classification. Confidence scored.",
    metrics: [
      ["model", "gpt-4o"],
      ["confidence", "0.92"],
      ["intent", "demo"],
    ],
    log: [
      "→ classify(intent, urgency, lifecycle)",
      "  → enrich(crm.contacts.find_by_email)",
      "  → route(owner=ankit, queue=demo)",
    ],
    accent: "from-sky-400/30 to-sky-400/0",
  },
  {
    n: "03",
    icon: FileText,
    badge: "draft",
    title: "Draft is generated",
    body: "If a reply is needed, a draft is written in your voice — referencing past wins, pricing, calendar links — ready for human review.",
    detail: "Tone-matched. Grounded in your brand voice document.",
    metrics: [
      ["tokens", "1.2k"],
      ["voice match", "94%"],
      ["citations", "3"],
    ],
    log: [
      "→ retrieve(brand_voice.md, 4 chunks)",
      "  → generate(draft.md, 312 words)",
      "  → attach(cal.com/admin/intro)",
    ],
    accent: "from-violet-400/30 to-violet-400/0",
  },
  {
    n: "04",
    icon: Send,
    badge: "delivery",
    title: "Sent or escalated",
    body: "Auto-send for confident replies, route to a human for tricky ones. Slack thread + CRM note logged. Calendar invite sent if booked.",
    detail: "Human-in-the-loop checkpoint configurable per workflow.",
    metrics: [
      ["confidence", "high"],
      ["action", "auto-send"],
      ["sla", "47s"],
    ],
    log: [
      "→ gmail.threads.reply()",
      "  → slack.threads.notify(#sales)",
      "  → hubspot.deals.update(stage=qualified)",
    ],
    accent: "from-amber-400/30 to-amber-400/0",
  },
  {
    n: "05",
    icon: CheckCircle2,
    badge: "tracked",
    title: "Tracked",
    body: "Outcome lands in your dashboard — response rate, booking rate, revenue attributed. The agent learns from human edits.",
    detail: "Looker Studio · Posthog · or your data warehouse of choice.",
    metrics: [
      ["response", "47s"],
      ["booking", "+1"],
      ["learning", "ingested"],
    ],
    log: [
      "→ posthog.capture(event=lead.replied)",
      "  → looker.refresh(dashboard.gtm)",
      "  → eval.append(golden_set)",
    ],
    accent: "from-rose-400/30 to-rose-400/0",
  },
];

const ADVANCE_MS = 5000;

export default function StickyStory() {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);

  // Detect viewport visibility
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setInView(e.isIntersecting));
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance when visible + playing
  useEffect(() => {
    if (!inView || !playing) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [inView, playing]);

  return (
    <section
      ref={wrap}
      className="relative overflow-hidden bg-carbon-950 py-20 text-white sm:py-28 lg:py-32"
    >
      {/* Ambient mesh + grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(110,225,200,0.10), transparent 35%), radial-gradient(circle at 80% 70%, rgba(120,140,255,0.08), transparent 40%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-[36rem] w-[36rem] rounded-full bg-white/[0.04] blur-3xl"
      />

      <div className="container-x relative grid w-full gap-12 lg:grid-cols-12 lg:gap-16">
        {/* LEFT — narrative + interactive list */}
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
            Five steps every production agent we ship goes through — from raw
            inbound to a tracked, attributable outcome. Auto-cycling every 5
            seconds; click any step to jump.
          </p>

          {/* Step list (clickable) */}
          <ul className="mt-10 space-y-2 lg:space-y-3">
            {steps.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.n}>
                  <button
                    onClick={() => {
                      setActive(i);
                      setPlaying(false);
                    }}
                    className={`flex w-full items-center gap-4 rounded-xl px-3 py-2 text-left transition-all duration-500 hover:bg-white/[0.04] ${
                      isActive ? "opacity-100" : "opacity-45 hover:opacity-80"
                    }`}
                  >
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-[10px] transition ${
                        isActive
                          ? "bg-white text-carbon-950"
                          : "border border-white/20 text-white/60"
                      }`}
                    >
                      {s.n}
                    </span>
                    <span
                      className={`text-sm font-medium transition ${
                        isActive ? "text-white" : "text-white/55"
                      }`}
                    >
                      {s.title}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="storyActiveBar"
                        className="ml-auto h-px w-12 bg-white/60"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Play / pause + progress */}
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => setPlaying((p) => !p)}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/75 transition hover:border-white/40 hover:bg-white/10"
              aria-label={playing ? "Pause auto-cycle" : "Play auto-cycle"}
            >
              {playing ? (
                <>
                  <Pause size={11} /> auto
                </>
              ) : (
                <>
                  <Play size={11} /> manual
                </>
              )}
            </button>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">
              {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* RIGHT — active card */}
        <div className="lg:col-span-7">
          <div className="relative h-[480px] sm:h-[520px]">
            <AnimatePresence mode="wait">
              {steps.map((s, i) => {
                if (i !== active) return null;
                const Icon = s.icon;
                return (
                  <motion.article
                    key={s.n}
                    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                    transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
                    className="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl"
                  >
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${s.accent} blur-3xl`}
                    />

                    <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sm:px-8">
                      <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
                          agent_workflow.run
                        </span>
                      </div>
                      <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.24em] text-white/65">
                        step · {s.n}
                      </span>
                    </div>

                    <div className="p-6 sm:p-10">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                            ({s.badge})
                          </span>
                          <motion.h3
                            key={s.n + "title"}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mt-3 font-display text-3xl font-bold tracking-[-0.025em] sm:text-4xl lg:text-5xl"
                          >
                            {s.title}
                          </motion.h3>
                        </div>
                        <motion.span
                          initial={{ scale: 0.6, rotate: -18, opacity: 0 }}
                          animate={{ scale: 1, rotate: 0, opacity: 1 }}
                          transition={{
                            delay: 0.05,
                            duration: 0.6,
                            ease: "backOut",
                          }}
                          className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-carbon-950 shadow-depth"
                        >
                          <Icon size={20} />
                        </motion.span>
                      </div>

                      <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
                        {s.body}
                      </p>

                      <div className="mt-7 grid grid-cols-3 gap-3">
                        {s.metrics.map(([k, v], j) => (
                          <motion.div
                            key={k}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 + j * 0.06 }}
                            className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
                          >
                            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/40">
                              {k}
                            </p>
                            <p className="mt-1 font-display text-base font-bold text-white sm:text-lg">
                              {v}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black/40"
                      >
                        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                          <span className="h-2 w-2 rounded-full bg-white/15" />
                          <span className="h-2 w-2 rounded-full bg-white/15" />
                          <span className="h-2 w-2 rounded-full bg-white/15" />
                          <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.24em] text-white/40">
                            trace · live
                          </span>
                        </div>
                        <pre className="overflow-x-auto px-4 py-3 font-mono text-[10.5px] leading-relaxed text-emerald-300/85 sm:text-[11px]">
                          {s.log.map((ln) => (
                            <span key={ln} className="block">
                              {ln}
                            </span>
                          ))}
                        </pre>
                      </motion.div>

                      <p className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-white/55">
                        <Sparkles size={11} />
                        {s.detail}
                      </p>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/10 bg-black/30 px-6 py-3 sm:px-8">
                      <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/40">
                        {String(active + 1).padStart(2, "0")} /{" "}
                        {String(steps.length).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {steps.map((_, j) => (
                          <button
                            key={j}
                            onClick={() => {
                              setActive(j);
                              setPlaying(false);
                            }}
                            aria-label={`Go to step ${j + 1}`}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              j === active ? "w-6 bg-white" : "w-3 bg-white/20 hover:bg-white/40"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.28em] text-white/55">
                        {playing ? "auto" : "paused"}
                        {playing && (
                          <ArrowRight
                            size={11}
                            className="animate-pulse"
                          />
                        )}
                      </span>
                    </div>

                    {/* Auto-progress bar at very top of card */}
                    {playing && (
                      <motion.div
                        key={`progress-${s.n}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: ADVANCE_MS / 1000, ease: "linear" }}
                        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-white/40"
                      />
                    )}
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
