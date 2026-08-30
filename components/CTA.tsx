"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MessageCircle, Asterisk } from "lucide-react";
import { CONTACT, whatsappLinks } from "@/lib/contact-config";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ticker = [
  "fixed scope",
  "written tradeoffs",
  "24h reply",
  "30-day money-back",
  "no retainers required",
  "senior engineers only",
  "async-first",
  "production-grade from day one",
];

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  // Animate "40" counting up when the section enters view.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          let n = 0;
          const target = 40;
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 4);
            n = Math.round(eased * target);
            setCount(n);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // GSAP heading line reveal + parallax decorations.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current?.querySelectorAll("[data-line]") ?? [],
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      if (numberRef.current) {
        gsap.from(numberRef.current, {
          scale: 1.6,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        });
      }

      gsap.to(".cta-deco-1", {
        y: -60,
        rotate: 36,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.to(".cta-deco-2", {
        y: 50,
        rotate: -24,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.to(".cta-deco-3", {
        y: -30,
        rotate: 14,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  // Magnetic CTA — button drifts ~10px toward cursor while hovered.
  useEffect(() => {
    const btn = ctaRef.current;
    if (!btn) return;
    const STR = 0.22;
    const onMove = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${x * STR}px, ${y * STR}px)`;
    };
    const reset = () => {
      btn.style.transform = "translate(0, 0)";
    };
    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", reset);
    return () => {
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", reset);
    };
  }, []);

  // Cursor-following glow orb on desktop (skips touch / coarse pointer).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    const orb = glowRef.current;
    const root = sectionRef.current;
    if (!orb || !root) return;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = root.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
    };
    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      orb.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    root.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      root.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="section relative">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-[2.5rem] px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16 lg:py-24"
          style={{
            background:
              "radial-gradient(ellipse at 55% -10%, #f97316 0%, #ea580c 22%, #9a3412 55%, #431407 100%)",
          }}
        >
          {/* Cursor-following glow orb */}
          <div
            ref={glowRef}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 hidden h-[32rem] w-[32rem] rounded-full opacity-50 mix-blend-screen blur-3xl md:block"
            style={{
              background:
                "radial-gradient(circle, rgba(253,186,74,0.55), rgba(249,115,22,0) 65%)",
            }}
          />

          {/* Big ambient blobs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full blur-3xl"
            style={{ background: "rgba(249,115,22,0.25)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl"
            style={{ background: "rgba(194,65,12,0.30)" }}
          />

          {/* Grid overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.09]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          {/* Floating decorations */}
          <Asterisk
            className="cta-deco-1 absolute right-[7%] top-[10%] hidden text-orange-300/40 sm:block"
            size={100}
          />
          <Asterisk
            className="cta-deco-2 absolute left-[4%] bottom-[14%] hidden text-white/20 sm:block"
            size={70}
          />
          <Asterisk
            className="cta-deco-3 absolute right-[13%] bottom-[8%] hidden text-orange-200/20 lg:block"
            size={44}
          />

          {/* Content */}
          <div className="relative text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-white/90 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              accepting 2 builds this month
            </span>

            <h2
              ref={headingRef}
              className="mx-auto mt-7 max-w-5xl font-display font-black leading-[0.93] tracking-[-0.05em] text-[2.6rem] sm:text-6xl lg:text-[7.5rem] lg:leading-[0.9]"
            >
              <span className="block overflow-hidden pb-[0.18em]">
                <span data-line className="block text-white">
                  Get your team
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.18em]">
                <span data-line className="block italic-accent text-white/60">
                  <span
                    ref={numberRef}
                    className="relative mr-3 inline-block not-italic font-black"
                    style={{
                      WebkitTextStroke: "2px rgba(255,255,255,0.90)",
                      color: "transparent",
                      textShadow: "0 0 60px rgba(253,186,74,0.55)",
                    }}
                    suppressHydrationWarning
                  >
                    {count}
                  </span>
                  hours
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.18em]">
                <span data-line className="block text-white">
                  every{" "}
                  <span className="italic-accent text-white/60">week.</span>
                </span>
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              30-minute strategy call. We&apos;ll map the highest-leverage
              automations in your business, scope a website if you need one,
              and quote a fixed price — whether you hire us or not.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                ref={ctaRef}
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-white px-9 py-4 text-base font-bold text-orange-700 shadow-[0_12px_48px_-8px_rgba(0,0,0,0.35)] transition-transform duration-200 ease-out will-change-transform hover:shadow-[0_16px_60px_-8px_rgba(0,0,0,0.45)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-orange-100/0 via-orange-100/60 to-orange-100/0 transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Book a strategy call</span>
                <ArrowUpRight
                  size={17}
                  className="relative transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              {whatsappLinks().map((n) => (
                <a
                  key={n.e164}
                  href={n.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-emerald-400/50 bg-emerald-500/20 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-emerald-500/35 hover:border-emerald-300"
                >
                  <MessageCircle
                    size={14}
                    className="text-emerald-300 transition group-hover:rotate-12"
                  />
                  WhatsApp · {n.pretty}
                </a>
              ))}

              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm text-white/60 underline-offset-[6px] hover:text-white hover:underline"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          {/* Infinite marquee */}
          <div className="relative mt-14 sm:mt-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#431407] to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#431407] to-transparent"
            />
            <div className="overflow-hidden border-y border-white/[0.12] py-4">
              <div className="flex w-max animate-marquee gap-10 font-mono text-[11px] uppercase tracking-[0.32em] text-white/65">
                {[...ticker, ...ticker].map((item, i) => (
                  <span key={i} className="flex items-center gap-10">
                    <Asterisk
                      size={11}
                      className="text-orange-300/80"
                      aria-hidden
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
