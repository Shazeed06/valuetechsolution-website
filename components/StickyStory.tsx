"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Bot,
  FileText,
  Send,
  CheckCircle2,
  Sparkles,
  Pause,
  Play,
  ChevronRight,
  Activity,
  Zap,
  Target,
} from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Mail,
    badge: "trigger",
    title: "Inbound arrives",
    body: "A new lead lands in your inbox or chat. The agent listens to the channels you point it at — Gmail, Slack, GHL, your form endpoint.",
    detail: "Webhook + auth wired. Zero polling. Sub-second pickup.",
    metrics: [
      ["channels", "5"],
      ["latency", "0.4s"],
      ["status", "ready"],
    ] as const,
    log: [
      "→ POST /webhook · 200 OK",
      "  channel=gmail thread=t/AbcDe123",
      "  payload=874 bytes",
    ],
    color: "emerald",
  },
  {
    n: "02",
    icon: Bot,
    badge: "agent",
    title: "AI triages",
    body: "The agent reads, classifies intent, looks up history in your CRM, and decides: route, draft, or escalate. Every classification logged with a trace.",
    detail: "Eval suite running on every classification. Confidence scored.",
    metrics: [
      ["model", "gpt-4o"],
      ["confidence", "0.92"],
      ["intent", "demo"],
    ] as const,
    log: [
      "→ classify(intent, urgency, lifecycle)",
      "  → enrich(crm.contacts.find_by_email)",
      "  → route(owner=ankit, queue=demo)",
    ],
    color: "sky",
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
    ] as const,
    log: [
      "→ retrieve(brand_voice.md, 4 chunks)",
      "  → generate(draft.md, 312 words)",
      "  → attach(cal.com/admin/intro)",
    ],
    color: "violet",
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
    ] as const,
    log: [
      "→ gmail.threads.reply()",
      "  → slack.threads.notify(#sales)",
      "  → hubspot.deals.update(stage=qualified)",
    ],
    color: "amber",
  },
  {
    n: "05",
    icon: CheckCircle2,
    badge: "tracked",
    title: "Tracked",
    body: "Outcome lands in your dashboard — response rate, booking rate, revenue attributed. The agent learns from every human edit.",
    detail: "Looker Studio · Posthog · or your data warehouse of choice.",
    metrics: [
      ["response", "47s"],
      ["booking", "+1"],
      ["learning", "ingested"],
    ] as const,
    log: [
      "→ posthog.capture(event=lead.replied)",
      "  → looker.refresh(dashboard.gtm)",
      "  → eval.append(golden_set)",
    ],
    color: "rose",
  },
] as const;

const ADVANCE_MS = 5200;

// Tailwind needs literal class names so the JIT picks them up.
const dotByColor: Record<string, string> = {
  emerald: "bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.7)]",
  sky: "bg-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.7)]",
  violet: "bg-violet-400 shadow-[0_0_24px_rgba(167,139,250,0.7)]",
  amber: "bg-amber-400 shadow-[0_0_24px_rgba(251,191,36,0.7)]",
  rose: "bg-rose-400 shadow-[0_0_24px_rgba(251,113,133,0.7)]",
};

const haloByColor: Record<string, string> = {
  emerald: "from-emerald-400/35 via-emerald-400/0 to-emerald-400/0",
  sky: "from-sky-400/35 via-sky-400/0 to-sky-400/0",
  violet: "from-violet-400/35 via-violet-400/0 to-violet-400/0",
  amber: "from-amber-400/35 via-amber-400/0 to-amber-400/0",
  rose: "from-rose-400/35 via-rose-400/0 to-rose-400/0",
};

const accentTextByColor: Record<string, string> = {
  emerald: "text-emerald-300",
  sky: "text-sky-300",
  violet: "text-violet-300",
  amber: "text-amber-300",
  rose: "text-rose-300",
};

/**
 * Smooth animated digit using rAF interpolation — no library cost.
 */
function AnimatedNumber({
  value,
  duration = 1200,
  format = (n: number) => n.toLocaleString("en-US"),
}: {
  value: number;
  duration?: number;
  format?: (n: number) => string;
}) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    fromRef.current = display;
    startRef.current = null;
    const target = value;
    const start = fromRef.current;
    const step = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const p = Math.min(1, (t - startRef.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(start + (target - start) * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return <span suppressHydrationWarning>{format(display)}</span>;
}

export default function StickyStory() {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);

  // Visibility — pause when offscreen
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance
  useEffect(() => {
    if (!inView || !playing) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [inView, playing]);

  // "Live system" odometer values — drift slowly while in view so the
  // section feels alive. Deterministic seed so SSR matches first paint.
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => setPulse((p) => p + 1), 2400);
    return () => window.clearInterval(id);
  }, [inView]);

  const live = useMemo(() => {
    const wave = Math.sin(pulse * 0.7);
    return {
      agents: 67 + ((pulse % 5) - 2),
      runs: 1247 + (pulse * 3) % 90,
      latencyMs: 820 + Math.round(wave * 40),
      success: 96 + (Math.abs(wave) > 0.85 ? 1 : 0),
    };
  }, [pulse]);

  const current = steps[active];

  return (
    <section
      ref={wrap}
      className="relative overflow-hidden bg-carbon-950 py-10 text-white sm:py-12 lg:py-14"
    >
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 0%, rgba(110,225,200,0.08), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(120,140,255,0.08), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-x relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
            <span className="h-px w-8 bg-white/40" />
            Anatomy of one workflow
            <span className="h-px w-8 bg-white/40" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            How a Value Tech{" "}
            <span className="italic-accent text-white/55">agent</span> works.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/55 sm:mt-4 sm:text-base">
            Watch one production run, from raw inbound to a tracked outcome.
            Auto-cycles — tap a stage to jump.
          </p>
        </div>

        {/* Live system strip */}
        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-4 sm:gap-3">
          <LiveStat icon={Activity} label="agents running" value={live.agents} suffix="" />
          <LiveStat
            icon={Zap}
            label="avg response"
            value={live.latencyMs}
            suffix="ms"
            format={(n) => n.toString()}
          />
          <LiveStat icon={Sparkles} label="today's runs" value={live.runs} suffix="" />
          <LiveStat icon={Target} label="success" value={live.success} suffix="%" />
        </div>

        {/* Metro-style pipeline */}
        <div className="mt-8 sm:mt-10">
          <Pipeline
            active={active}
            onJump={(i) => {
              setActive(i);
              setPlaying(false);
            }}
            playing={playing}
          />
        </div>

        {/* Execution panel */}
        <div className="relative mt-6 sm:mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.n}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              {/* Halo */}
              <div
                aria-hidden
                className={`pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br ${haloByColor[current.color]} blur-3xl`}
              />

              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 sm:px-8">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span
                      className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${dotByColor[current.color]}`}
                    />
                    <span
                      className={`relative inline-flex h-2 w-2 rounded-full ${dotByColor[current.color]}`}
                    />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
                    agent_workflow.run
                  </span>
                </div>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.24em] text-white/65">
                  {current.n} · {current.badge}
                </span>
              </div>

              {/* Body */}
              <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-12 lg:gap-8">
                {/* Left — title + body + metrics */}
                <div className="lg:col-span-7">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      {/* Big background number */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -left-1 -top-1 select-none font-display text-5xl font-bold leading-none tracking-[-0.05em] text-white/[0.04] sm:-top-2 sm:text-7xl"
                      >
                        {current.n}
                      </span>
                      <span className="relative font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                        ({current.badge})
                      </span>
                      <motion.h3
                        key={current.n + "title"}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05, duration: 0.5 }}
                        className="relative mt-2 font-display text-xl font-bold tracking-[-0.025em] sm:text-3xl lg:text-4xl"
                      >
                        {current.title}
                      </motion.h3>
                    </div>
                  </div>

                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/65">
                    {current.body}
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                    {current.metrics.map(([k, v], j) => (
                      <motion.div
                        key={k}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 + j * 0.07 }}
                        className="rounded-xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-white/25 hover:bg-white/[0.06]"
                      >
                        <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/40">
                          {k}
                        </p>
                        <p
                          className={`mt-1 font-display text-base font-bold sm:text-lg ${accentTextByColor[current.color]}`}
                        >
                          {v}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <p className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-white/55">
                    <Sparkles size={11} />
                    {current.detail}
                  </p>
                </div>

                {/* Right — terminal log */}
                <div className="lg:col-span-5">
                  <TerminalLog stepKey={current.n} lines={[...current.log]} />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-black/30 px-5 py-3 sm:px-8">
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
                <span className="hidden font-mono text-[9px] uppercase tracking-[0.28em] text-white/45 sm:inline">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(steps.length).padStart(2, "0")}
                </span>
                <button
                  onClick={() => {
                    setActive((i) => (i + 1) % steps.length);
                    setPlaying(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/75 transition hover:border-white/40 hover:bg-white/10"
                >
                  next
                  <ChevronRight size={12} />
                </button>
              </div>

              {/* Auto-progress bar */}
              {playing && (
                <motion.div
                  key={`progress-${current.n}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: ADVANCE_MS / 1000, ease: "linear" }}
                  className={`absolute inset-x-0 top-0 h-0.5 origin-left ${dotByColor[current.color].split(" ")[0]} opacity-80`}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ---------- subcomponents ---------- */

function LiveStat({
  icon: Icon,
  label,
  value,
  suffix,
  format,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: number;
  suffix: string;
  format?: (n: number) => string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
      <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.24em] text-white/40">
        <Icon size={10} />
        {label}
      </div>
      <p className="mt-1 font-display text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
        <AnimatedNumber value={value} format={format} />
        <span className="font-mono text-xs font-medium text-white/55">
          {suffix}
        </span>
      </p>
    </div>
  );
}

/**
 * Horizontal metro-style pipeline. Each step is a node; the line between
 * them fills as the active index moves forward. Active node has a live
 * pulsing glow in its assigned colour. On mobile the pipeline becomes a
 * horizontally-scrollable strip so all five stay tappable.
 */
function Pipeline({
  active,
  onJump,
  playing,
}: {
  active: number;
  onJump: (i: number) => void;
  playing: boolean;
}) {
  const progress = active / (steps.length - 1);
  return (
    <div className="relative">
      {/* Background line */}
      <div
        aria-hidden
        className="absolute left-4 right-4 top-4 h-px bg-white/10 sm:left-6 sm:right-6"
      />
      {/* Filled progress line */}
      <motion.div
        aria-hidden
        className="absolute left-4 top-4 h-px bg-white/70 sm:left-6"
        style={{
          right: `calc(${(1 - progress) * 100}% + 1rem)`,
        }}
        animate={{
          right: `calc(${(1 - progress) * 100}% + 1rem)`,
        }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      />

      <ol className="relative flex items-start justify-between gap-1 overflow-x-auto pb-1 sm:gap-2">
        {steps.map((s, i) => {
          const state =
            i < active ? "done" : i === active ? "active" : "queued";
          return (
            <li
              key={s.n}
              className="flex min-w-[68px] flex-1 flex-col items-center sm:min-w-0"
            >
              <button
                onClick={() => onJump(i)}
                aria-label={`Jump to ${s.title}`}
                className="group relative grid h-8 w-8 place-items-center"
              >
                {/* Halo for active */}
                {state === "active" && (
                  <motion.span
                    layoutId="pipelineHalo"
                    className={`absolute inset-0 -m-2 rounded-full ${dotByColor[s.color]} opacity-30 blur-md`}
                    transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
                  />
                )}
                <span
                  className={`relative grid h-8 w-8 place-items-center rounded-full border font-mono text-[10px] transition ${
                    state === "active"
                      ? `border-transparent ${dotByColor[s.color]} text-carbon-950`
                      : state === "done"
                        ? "border-white/70 bg-white text-carbon-950"
                        : "border-white/20 bg-carbon-950 text-white/55 group-hover:border-white/40 group-hover:text-white/80"
                  }`}
                >
                  {state === "done" ? "✓" : s.n}
                </span>
                {state === "active" && playing && (
                  <motion.span
                    aria-hidden
                    className={`absolute inset-0 -m-1 rounded-full ring-2 ${
                      s.color === "emerald"
                        ? "ring-emerald-400/40"
                        : s.color === "sky"
                          ? "ring-sky-400/40"
                          : s.color === "violet"
                            ? "ring-violet-400/40"
                            : s.color === "amber"
                              ? "ring-amber-400/40"
                              : "ring-rose-400/40"
                    }`}
                    initial={{ scale: 0.9, opacity: 0.8 }}
                    animate={{ scale: 1.45, opacity: 0 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.6,
                      ease: "easeOut",
                    }}
                  />
                )}
              </button>
              <span
                className={`mt-3 text-center font-mono text-[9px] uppercase tracking-[0.22em] transition sm:text-[10px] sm:tracking-[0.24em] ${
                  state === "active"
                    ? "text-white"
                    : state === "done"
                      ? "text-white/55"
                      : "text-white/35"
                }`}
              >
                {s.title}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/**
 * Terminal log with typewriter reveal — each line fades + slides in
 * sequentially when the active step changes. The CSS animation key is
 * tied to `stepKey` so it restarts cleanly on every step transition.
 */
function TerminalLog({ stepKey, lines }: { stepKey: string; lines: string[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/50">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.24em] text-white/40">
          trace · live
        </span>
        <span className="ml-auto flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.24em] text-emerald-300/70">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          rec
        </span>
      </div>
      <div className="space-y-1 px-4 py-3 font-mono text-[10.5px] leading-relaxed text-emerald-300/90 sm:text-[11px]">
        {lines.map((ln, i) => (
          <motion.div
            key={stepKey + i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.18, duration: 0.4 }}
          >
            {ln}
            {i === lines.length - 1 && (
              <motion.span
                className="ml-1 inline-block h-3 w-1.5 align-middle bg-emerald-300"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
