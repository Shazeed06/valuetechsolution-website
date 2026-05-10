"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Zap, Clock } from "lucide-react";
import SplitReveal, { Line } from "./SplitReveal";

// Three.js scene is heavy (~150KB) — load it after first paint
const HeroScene3D = dynamic(() => import("./HeroScene3D"), {
  ssr: false,
  loading: () => null,
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(subRef.current, {
        opacity: 0,
        y: 28,
        duration: 1.1,
        ease: "expo.out",
        delay: 1.1,
      });
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "expo.out",
        delay: 1.4,
      });
      gsap.from(statusRef.current, {
        opacity: 0,
        y: 18,
        duration: 1,
        ease: "expo.out",
        delay: 1.65,
      });

      gsap.to(".hero-depth-field", {
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
      className="relative isolate overflow-hidden bg-carbon-950 text-white"
    >
      <div className="hero-depth-field absolute inset-0 -z-10">
        <HeroScene3D />
      </div>
      {/* Gradient overlays for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_34%,rgba(66,232,198,0.18),transparent_25%),linear-gradient(to_bottom,rgba(0,0,0,0.56),rgba(0,0,0,0.58)_48%,#000)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-carbon-950 via-carbon-950/72 to-carbon-950/18"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-carbon-950 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.095]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative flex min-h-[88vh] flex-col pt-20 pb-10 sm:min-h-[86vh] sm:pt-20 lg:min-h-[84vh] lg:pt-20 lg:pb-12">
        {/* Top eyebrow row */}
        <div className="container-x flex flex-wrap items-center justify-between gap-4 pt-2">
          <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white/65">
            <span className="h-px w-8 bg-white/45" />
            <span className="sm:hidden">VTS · AI Startup</span>
            <span className="hidden sm:inline">
              Value Tech Solution · AI Startup · est. 2024
            </span>
          </span>
          <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/55 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            67 agents · running live
          </span>
        </div>

        {/* Mega headline block */}
        <div className="container-x flex flex-1 flex-col justify-center pt-8 sm:pt-10">
          <SplitReveal trigger="load" stagger={0.13}>
            <h1 className="font-display text-[2.7rem] font-bold leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl lg:text-[6.5rem] lg:leading-[0.9]">
              <Line>We delete</Line>
              <Line>
                <span className="italic-accent text-white/65">boring work.</span>
              </Line>
              <Line>We ship the rest.</Line>
            </h1>
          </SplitReveal>

          <div ref={subRef} className="mt-6 max-w-2xl sm:mt-8">
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              Value Tech Solution is an AI automation studio of engineers
              shipping production-grade agents on{" "}
              <span className="font-medium text-white">
                n8n, GHL, Zapier, Python
              </span>{" "}
              — paired with{" "}
              <span className="font-medium text-white">Next.js websites</span>{" "}
              and SEO that actually rank.
            </p>
          </div>

          <div
            ref={ctaRef}
            className="mt-8 flex flex-wrap items-center gap-5 sm:mt-10"
          >
            <Link
              href="/contact"
              data-cursor="Book"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-carbon-950 transition hover:bg-white/90"
            >
              Book a strategy call
              <ArrowUpRight
                size={15}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="/services"
              data-cursor="View"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/85 underline-offset-[6px] transition hover:text-white hover:underline"
            >
              See how we work
            </Link>

            <span className="hidden h-8 w-px bg-white/20 sm:block" />
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-white/55 sm:inline">
              fixed scope · fixed price · written tradeoffs
            </span>
          </div>
        </div>

        {/* Bottom status bar */}
        <div
          ref={statusRef}
          className="container-x mt-10 flex flex-col gap-5 border-t border-white/[0.08] pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="grid w-full grid-cols-1 gap-4 sm:flex sm:items-center sm:gap-8">
            <span className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/65">
              <Sparkles size={12} className="text-white" />
              80% manual work — eliminated
            </span>
            <span className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/65">
              <Clock size={12} className="text-white" />
              40 hrs / team / week saved
            </span>
            <span className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/65">
              <Zap size={12} className="text-white" />
              avg agent response · 0.8s
            </span>
          </div>

          <Link
            href="#stats"
            className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/55 transition hover:text-white sm:flex"
          >
            scroll
            <span className="inline-block h-px w-8 bg-white/30" />
          </Link>
        </div>
      </div>

      {/* Floating live chip (decorative) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-6 top-32 hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 backdrop-blur lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">
          agent_workflow.run
        </span>
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
      </motion.div>
    </section>
  );
}
