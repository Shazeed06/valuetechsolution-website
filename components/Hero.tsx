"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Play,
  Zap,
  Globe,
  Bot,
  TrendingUp,
  CheckCircle2,
  Code2,
  Link2,
  BarChart2,
  Users,
  Settings,
} from "lucide-react";
import { whatsappLinks } from "@/lib/contact-config";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Bottom stats strip ───────────────────────────────────── */
const stats = [
  { icon: Zap, value: "47 sec", label: "AI lead response time" },
  { icon: Users, value: "95+", label: "Websites delivered" },
  { icon: Settings, value: "40 hrs", label: "Saved per team / week" },
  { icon: Globe, value: "80%", label: "Manual work eliminated" },
];

/* ── Floating feature cards around laptop ─────────────────── */
const featureCards = [
  {
    id: "agents",
    icon: Bot,
    title: "AI Agents",
    sub: "Automate workflows",
    pos: "top-[12%] left-[-2%]",
    delay: "hero-fc-1",
  },
  {
    id: "webdev",
    icon: Code2,
    title: "Web Development",
    sub: "Fast. Modern. Scalable.",
    pos: "top-[6%] right-[-4%]",
    delay: "hero-fc-2",
  },
  {
    id: "integrations",
    icon: Link2,
    title: "Integrations",
    sub: "Connect your tools.",
    pos: "top-[46%] right-[-6%]",
    delay: "hero-fc-3",
  },
  {
    id: "results",
    icon: TrendingUp,
    title: "Real Results",
    sub: "Save time & money",
    pos: "bottom-[22%] right-[-2%]",
    delay: "hero-fc-4",
  },
];

/* ── Trusted-by logos ─────────────────────────────────────── */
const logos = [
  "Razorpay",
  "TATA AIA",
  "CRED",
  "Uber",
  "Unacademy",
  "Flipkart",
  "OLA",
];

/* ── Dashboard sidebar nav items ─────────────────────────── */
const sidebarItems = [
  "Dashboard",
  "AI Agents",
  "Web Apps",
  "Automations",
  "Analytics",
  "Settings",
];

/* ── Dashboard stat tiles ─────────────────────────────────── */
const dashStats = [
  { icon: Zap, label: "40 hrs", sub: "Saved this week", color: "text-orange-400" },
  { icon: BarChart2, label: "₹41,500", sub: "Value generated", color: "text-emerald-400" },
  { icon: Bot, label: "12", sub: "Active agents", color: "text-blue-400" },
  { icon: TrendingUp, label: "+80%", sub: "Efficiency", color: "text-purple-400" },
];

/* ── Chart bar heights ────────────────────────────────────── */
const chartBars = [28, 42, 35, 58, 48, 72, 62, 80, 68, 88, 76, 95];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Left column: staggered entrance */
      gsap.from(".hero-eyebrow", {
        opacity: 0, y: 20, duration: 0.7, ease: "expo.out", delay: 0.1,
      });
      gsap.from(".hero-tagline", {
        opacity: 0, y: 16, duration: 0.7, ease: "expo.out", delay: 0.18,
      });
      gsap.from(".hero-heading", {
        opacity: 0, y: 32, duration: 0.85, ease: "expo.out", delay: 0.25,
      });
      gsap.from(".hero-sub", {
        opacity: 0, y: 24, duration: 0.8, ease: "expo.out", delay: 0.38,
      });
      gsap.from(".hero-ctas", {
        opacity: 0, y: 18, duration: 0.7, ease: "expo.out", delay: 0.48,
      });
      gsap.from(".hero-trust", {
        opacity: 0, y: 12, duration: 0.6, ease: "expo.out", delay: 0.55,
      });
      gsap.from(".hero-stat", {
        opacity: 0, y: 20, duration: 0.6, ease: "expo.out", stagger: 0.08, delay: 0.6,
      });

      /* Right column */
      gsap.from(".hero-laptop", {
        opacity: 0, y: 48, scale: 0.94, duration: 1.1, ease: "expo.out", delay: 0.3,
      });
      gsap.from(".hero-fc", {
        opacity: 0, y: 22, duration: 0.65, ease: "expo.out", stagger: 0.12, delay: 0.75,
      });
      gsap.from(".hero-annotation", {
        opacity: 0, x: 12, duration: 0.8, ease: "expo.out", delay: 1.1,
      });

      /* Subtle floating animations */
      gsap.to(".hero-laptop", {
        y: "-10px", duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1,
      });
      gsap.to(".hero-fc-1", {
        y: "-7px", duration: 2.6, ease: "sine.inOut", yoyo: true, repeat: -1,
      });
      gsap.to(".hero-fc-2", {
        y: "-9px", duration: 3.1, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.4,
      });
      gsap.to(".hero-fc-3", {
        y: "-6px", duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.8,
      });
      gsap.to(".hero-fc-4", {
        y: "-8px", duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.2,
      });

      /* Logos bar */
      gsap.from(".hero-logos", {
        opacity: 0, y: 20, duration: 0.8, ease: "expo.out", delay: 0.9,
      });

      /* Parallax on scroll */
      gsap.to(".hero-depth", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
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
          "radial-gradient(ellipse 80% 90% at 68% 45%, #b83b0a 0%, #6b1904 28%, #250c02 58%, #0a0402 100%)",
      }}
    >
      {/* Depth field — parallax target */}
      <div className="hero-depth absolute inset-0 -z-10" />

      {/* Subtle dot-grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[3] opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Left dark vignette so headline pops */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[2] bg-gradient-to-r from-black/60 via-black/20 to-transparent"
      />

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-[2] h-32 bg-gradient-to-t from-black/50 to-transparent"
      />

      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative flex min-h-[100dvh] flex-col">

        {/* Hero body */}
        <div className="container-x flex flex-1 flex-col lg:flex-row lg:items-center gap-10 xl:gap-16 pt-36 pb-6 lg:pt-44 lg:pb-10">

          {/* ════════ LEFT column ════════ */}
          <div className="flex flex-1 flex-col justify-center lg:max-w-[48%]">

            {/* Agency eyebrow */}
            <div className="hero-eyebrow">
              <p className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.15] bg-white/[0.07] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-400" />
                </span>
                AI Automation &amp; Web Development Agency · India
              </p>
            </div>

            {/* "IDEAS × AI × REAL IMPACT" tagline */}
            <div className="hero-tagline mt-6 flex items-center gap-2.5">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-orange-400">
                Ideas × AI × Real Impact
              </span>
              <span className="h-px w-14 bg-orange-500/60" />
            </div>

            {/* Main headline */}
            <h1 className="hero-heading mt-4 font-display font-black leading-[1.0] tracking-[-0.04em] text-[2.7rem] sm:text-[3.8rem] lg:text-[4.2rem] xl:text-[4.8rem]">
              Build Smarter
              <br />
              with{" "}
              <span className="text-orange-400">AI.</span>
            </h1>

            {/* Sub-headline */}
            <p className="hero-sub mt-6 max-w-[480px] text-base leading-[1.78] text-white/58 sm:text-[1.0625rem]">
              We build production-grade AI agents and high-performing websites
              for Indian startups and global agencies — so you save time, cut
              costs, and grow faster.
            </p>

            {/* CTA buttons */}
            <div className="hero-ctas mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary — orange filled */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-[0_8px_32px_-4px_rgba(234,88,12,0.55)] transition hover:bg-orange-500 hover:shadow-[0_12px_40px_-4px_rgba(234,88,12,0.65)]"
              >
                Book a free consultation
                <ArrowUpRight
                  size={15}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              {/* Secondary — dark outlined with play icon */}
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 transition group-hover:bg-white/25">
                  <Play size={10} className="ml-0.5 fill-white text-white" />
                </span>
                View our work
              </Link>
            </div>

            {/* Trust badges */}
            <div className="hero-trust mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              {[
                "Fast delivery",
                "Senior engineers",
                "Results, not promises",
              ].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-xs text-white/50"
                >
                  <CheckCircle2 size={12} className="text-orange-400/80 shrink-0" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Stats strip */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/[0.08] pt-8 sm:grid-cols-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="hero-stat flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 text-orange-400">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="font-display text-xl font-black tracking-[-0.03em] text-white">
                      {value}
                    </p>
                    <p className="mt-0.5 text-[10px] leading-snug text-white/38">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ════════ RIGHT column — Laptop mockup ════════ */}
          <div className="relative flex flex-1 items-center justify-center lg:max-w-[54%] mt-4 lg:mt-0">

            {/* Orange glow ring — large */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%] h-[520px] w-[520px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(234,88,12,0.22) 0%, rgba(234,88,12,0.08) 50%, transparent 72%)",
                boxShadow: "0 0 160px 60px rgba(180,60,6,0.3)",
              }}
            />

            {/* Inner ring (outline) */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%] h-[420px] w-[420px] rounded-full border border-orange-500/20"
            />

            {/* ── Floating feature cards ── */}
            {featureCards.map(({ id, icon: Icon, title, sub, pos, delay }) => (
              <div
                key={id}
                className={`hero-fc ${delay} absolute z-20 flex items-center gap-3 rounded-2xl border border-white/[0.12] bg-[#1c0d05]/90 px-4 py-3 shadow-xl backdrop-blur-md ${pos}`}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-orange-500/20 text-orange-400">
                  <Icon size={15} />
                </span>
                <div>
                  <p className="text-xs font-bold text-white">{title}</p>
                  <p className="text-[10px] text-white/40">{sub}</p>
                </div>
              </div>
            ))}

            {/* "From idea to impact" handwritten annotation */}
            <div className="hero-annotation absolute bottom-[8%] right-[2%] z-20 flex flex-col items-end select-none">
              <p
                className="font-display text-sm italic text-orange-300/65 leading-snug"
                style={{ fontStyle: "italic" }}
              >
                From idea
              </p>
              <p
                className="font-display text-sm italic text-orange-300/65 leading-snug"
                style={{ fontStyle: "italic" }}
              >
                to impact
              </p>
              <ArrowUpRight size={16} className="mt-0.5 text-orange-400/50" />
            </div>

            {/* ── Laptop shell ── */}
            <div className="hero-laptop relative z-10 w-full max-w-[480px] lg:max-w-[540px] xl:max-w-[580px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]">

              {/* Screen bezel */}
              <div className="overflow-hidden rounded-xl border border-white/[0.12] bg-[#0d0604]">

                {/* Browser chrome bar */}
                <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-[#180c05] px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/55" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/55" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/55" />
                  <span className="mx-auto rounded-md border border-white/[0.07] bg-white/[0.04] px-3 py-0.5 font-mono text-[9px] text-white/22">
                    app.valuetechsolution.com
                  </span>
                </div>

                {/* Dashboard UI */}
                <div className="flex h-[260px] sm:h-[300px] lg:h-[320px]">

                  {/* Sidebar */}
                  <div className="flex w-[108px] shrink-0 flex-col gap-0.5 border-r border-white/[0.06] bg-[#130905] p-3">
                    {/* Brand mark */}
                    <div className="mb-3 flex items-center gap-2 px-1">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-orange-600 text-[10px] font-black text-white">
                        V
                      </span>
                      <span className="text-[9px] font-semibold text-white/50 truncate">
                        ValueTech
                      </span>
                    </div>

                    {/* Nav items */}
                    {sidebarItems.map((item, i) => (
                      <div
                        key={item}
                        className={`flex items-center gap-1.5 rounded-md px-2 py-[5px] text-[9px] transition ${
                          i === 0
                            ? "bg-orange-600/20 text-orange-400 font-semibold"
                            : "text-white/28 hover:text-white/50"
                        }`}
                      >
                        <span
                          className={`h-[5px] w-[5px] rounded-full shrink-0 ${
                            i === 0 ? "bg-orange-400" : "bg-white/20"
                          }`}
                        />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="flex flex-1 flex-col overflow-hidden p-4">

                    {/* Dashboard header */}
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-bold text-white">
                          Good to see you 👋
                        </p>
                        <p className="text-[9px] text-white/30">
                          Your AI systems are running smoothly
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 px-2 py-0.5 text-[8px] text-white/25">
                        Last 30 days ▾
                      </span>
                    </div>

                    {/* Stat tiles */}
                    <div className="mb-3 grid grid-cols-4 gap-1.5">
                      {dashStats.map(({ icon: Icon, label, sub, color }) => (
                        <div
                          key={label}
                          className="rounded-lg border border-white/[0.05] bg-white/[0.04] p-2"
                        >
                          <Icon size={9} className={color} />
                          <p className="mt-1 text-[10px] font-bold text-white">
                            {label}
                          </p>
                          <p className="text-[7px] leading-tight text-white/28">
                            {sub}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Bar chart */}
                    <div className="flex flex-1 items-end gap-0.5 overflow-hidden rounded-lg border border-white/[0.04] bg-white/[0.02] px-3 pt-2 pb-0">
                      {chartBars.map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: `${h}%`,
                            background:
                              i >= chartBars.length - 3
                                ? "linear-gradient(to top, #ea580c, #fb923c)"
                                : "linear-gradient(to top, #7c2d12, #c2410c60)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop hinge + base */}
              <div className="relative mx-3">
                <div className="h-2 bg-gradient-to-b from-[#1a0d06] to-[#100805]" />
                <div
                  className="mx-4 h-2 rounded-b-2xl bg-[#0e0704]"
                  style={{
                    boxShadow: "0 12px 48px -4px rgba(0,0,0,0.95)",
                  }}
                />
              </div>

              {/* Rock/surface shadow below laptop */}
              <div
                aria-hidden
                className="mx-auto mt-1 h-4 w-[80%] rounded-full blur-xl"
                style={{ background: "rgba(0,0,0,0.7)" }}
              />
            </div>
          </div>
        </div>

        {/* ════════ Trusted-by logos bar ════════ */}
        <div className="hero-logos border-t border-white/[0.06] bg-black/25 backdrop-blur-sm">
          <div className="container-x py-5">
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              {/* Label */}
              <div className="shrink-0">
                <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/22 leading-relaxed">
                  Trusted by
                  <br />
                  startups &amp; agencies
                </p>
              </div>

              {/* Logo names */}
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
                {logos.map((logo) => (
                  <span
                    key={logo}
                    className="font-display text-sm font-black tracking-tight text-white/22 transition hover:text-white/40"
                  >
                    {logo}
                  </span>
                ))}
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/18">
                  And many more →
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
