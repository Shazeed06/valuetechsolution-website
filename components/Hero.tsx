"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MessageCircle, Zap, Globe, Bot, TrendingUp } from "lucide-react";
import SplitReveal, { Line } from "./SplitReveal";
import HeroBackdrop from "./HeroBackdrop";
import { whatsappLinks } from "@/lib/contact-config";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── floating proof cards ─────────────────────────────────── */
const proofCards = [
  {
    icon: Zap,
    countTo: 47,
    prefix: "",
    suffix: " sec",
    label: "AI lead response time",
    sub: "was 4 hours",
    color: "border-orange-500/30 bg-orange-500/10",
    iconColor: "text-orange-400",
  },
  {
    icon: Globe,
    countTo: null,
    prefix: "₹",
    suffix: "41,500",
    label: "Website, live in 4 weeks",
    sub: "95+ Lighthouse guaranteed",
    color: "border-white/10 bg-white/[0.06]",
    iconColor: "text-white/70",
  },
  {
    icon: Bot,
    countTo: 40,
    prefix: "",
    suffix: " hrs",
    label: "Saved per team per week",
    sub: "avg across 60+ projects",
    color: "border-emerald-500/25 bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: TrendingUp,
    countTo: 80,
    prefix: "",
    suffix: "%",
    label: "Manual work eliminated",
    sub: "by AI agents we ship",
    color: "border-white/10 bg-white/[0.06]",
    iconColor: "text-white/70",
  },
];

/* ── animated counter ─────────────────────────────────────── */
function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const dur = 1200;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        setVal(Math.round((1 - Math.pow(1 - p, 3)) * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.disconnect();
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const wa = whatsappLinks();

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* sub + cta fade in */
      gsap.from(subRef.current, { opacity: 0, y: 24, duration: 1, ease: "expo.out", delay: 1.1 });
      gsap.from(ctaRef.current, { opacity: 0, y: 18, duration: 1, ease: "expo.out", delay: 1.35 });

      /* proof cards stagger in */
      gsap.from(".proof-card", {
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.12,
        delay: 1.5,
      });

      /* parallax on scroll */
      gsap.to(".hero-depth-field", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* subtle float animation on cards */
      gsap.to(".proof-card-float", {
        y: "-8px",
        duration: 2.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.5, from: "start" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-hero-dark
      className="relative isolate -mt-24 overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 30% 0%, #ea580c 0%, #9a3412 35%, #431407 65%, #1c0a02 100%)",
      }}
    >
      {/* Backdrop constellation */}
      <div className="hero-depth-field absolute inset-0 -z-10">
        <HeroBackdrop />
      </div>

      {/* Right-side warm ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 -z-[5] h-[70%] w-[45%] opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle at 80% 20%, #fb923c, transparent 65%)" }}
      />

      {/* Left dim so headline pops */}
      <div
        aria-hidden
        className="absolute inset-0 -z-[4] bg-gradient-to-r from-black/40 via-black/10 to-transparent"
      />

      {/* Bottom fade to next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-[4] h-36 bg-gradient-to-t from-black/60 to-transparent"
      />

      {/* Grid overlay — very subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[3] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Content ───────────────────────────────────────── */}
      <div className="relative min-h-[80vh] flex flex-col pt-28 pb-12 sm:min-h-[85vh] sm:pt-32 lg:min-h-[88vh] lg:pt-36">

        {/* Eyebrow */}
        <div className="container-x">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.15] bg-white/[0.07] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-400" />
            </span>
            AI Automation &amp; Web Development Agency · India
          </p>
        </div>

        {/* Main content grid */}
        <div className="container-x mt-8 flex flex-1 flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">

          {/* ── Left: headline + CTA ─────────────────────── */}
          <div className="flex-1 lg:max-w-[54%]">
            <SplitReveal trigger="load" stagger={0.11}>
              <h1
                className="font-display font-black leading-[0.95] tracking-[-0.05em] text-white text-[2.6rem] sm:text-[3.8rem] lg:text-[4.6rem] xl:text-[5.2rem]"
              >
                <Line>
                  <span className="text-orange-300">AI</span> that saves
                </Line>
                <Line>
                  40 hrs/week.
                </Line>
                <Line>
                  <span className="italic-accent text-white/60">Websites</span> that
                </Line>
                <Line>rank. Fixed price.</Line>
              </h1>
            </SplitReveal>

            <p
              ref={subRef}
              className="mt-7 max-w-lg text-base leading-[1.75] text-white/65 sm:text-[1.0625rem]"
            >
              We build production-grade{" "}
              <span className="font-semibold text-white">AI agents</span> (n8n,
              Python, Claude) and{" "}
              <span className="font-semibold text-white">Next.js websites</span>{" "}
              for Indian startups and global agencies. Senior engineers.
              Written scope. No surprises.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-sm font-bold text-orange-700 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.4)] transition hover:bg-orange-50 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.5)]"
              >
                Book a free strategy call
                <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              {wa.slice(0, 1).map((n) => (
                <a
                  key={n.e164}
                  href={n.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-emerald-500/25"
                >
                  <MessageCircle size={14} className="text-emerald-400" />
                  WhatsApp us
                </a>
              ))}

              <Link
                href="/services"
                className="text-sm font-medium text-white/55 underline-offset-[6px] transition hover:text-white hover:underline"
              >
                See how we work →
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.08] pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-white/40">
                trusted by
              </span>
              {["Delhi startups", "Mumbai agencies", "London SaaS", "Dubai PropTech"].map((tag) => (
                <span key={tag} className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/55">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: floating proof cards ──────────────── */}
          <div
            ref={cardsRef}
            className="mt-12 grid grid-cols-2 gap-3.5 lg:mt-0 lg:flex-1 lg:max-w-[42%] sm:gap-4"
          >
            {proofCards.map((card) => (
              <div
                key={card.label}
                className={`proof-card proof-card-float rounded-2xl border p-5 backdrop-blur-sm sm:p-6 ${card.color}`}
              >
                <card.icon size={18} className={card.iconColor} />
                <p className="mt-3 font-display text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                  {card.countTo !== null ? (
                    <Counter to={card.countTo} prefix={card.prefix} suffix={card.suffix} />
                  ) : (
                    <span>{card.prefix}{card.suffix}</span>
                  )}
                </p>
                <p className="mt-1.5 text-xs font-semibold leading-snug text-white/80">
                  {card.label}
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                  {card.sub}
                </p>
              </div>
            ))}

            {/* Bottom wide card: open slots */}
            <div className="proof-card col-span-2 flex items-center justify-between rounded-2xl border border-orange-500/30 bg-orange-500/10 px-5 py-4 backdrop-blur-sm sm:px-6">
              <div>
                <p className="text-xs font-semibold text-white/80">
                  Accepting new clients
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                  2 slots open this month
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-orange-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-orange-500"
              >
                Claim slot <ArrowUpRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
