"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Asterisk } from "lucide-react";
import { CONTACT, whatsappLink } from "@/lib/contact-config";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

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
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      );

      // Number scale-in
      if (numberRef.current) {
        gsap.from(numberRef.current, {
          scale: 1.5,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
      }

      // Floating decoration parallax
      gsap.to(".cta-deco-1", {
        y: -40,
        rotate: 24,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.to(".cta-deco-2", {
        y: 40,
        rotate: -18,
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

  return (
    <section ref={sectionRef} className="section relative">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-carbon-950 bg-carbon-950 px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          {/* Animated mesh background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 25% 20%, rgba(110,225,200,0.18), transparent 35%), radial-gradient(circle at 75% 80%, rgba(255,255,255,0.10), transparent 45%), radial-gradient(circle at 50% 50%, rgba(120,140,255,0.10), transparent 55%)",
            }}
          />
          {/* Grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          {/* Floating decorations */}
          <Asterisk
            className="cta-deco-1 absolute right-[8%] top-[12%] hidden text-white/20 sm:block"
            size={80}
          />
          <Asterisk
            className="cta-deco-2 absolute left-[6%] bottom-[14%] hidden text-white/15 sm:block"
            size={56}
          />

          {/* Animated dot pulse top-right */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="absolute right-8 top-8 hidden items-center gap-2 sm:flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
              now booking · Q3
            </span>
          </motion.div>

          {/* Content */}
          <div className="relative text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-white/70 backdrop-blur">
              (let&apos;s talk)
            </span>

            <h2
              ref={headingRef}
              className="mx-auto mt-6 max-w-4xl font-display font-bold leading-[0.95] tracking-[-0.045em] text-4xl sm:text-5xl lg:text-[5.5rem] lg:leading-[0.92]"
            >
              <span className="block overflow-hidden">
                <span data-line className="block">
                  Let&apos;s give
                </span>
              </span>
              <span className="block overflow-hidden">
                <span data-line className="block">
                  your team
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  data-line
                  className="block italic-accent text-white/55"
                >
                  <span ref={numberRef} className="inline-block">
                    40 hours
                  </span>{" "}
                  back.
                </span>
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/65">
              30-minute strategy call. We&apos;ll map the highest-leverage
              automations in your business, scope a website if you need one,
              and quote a fixed price — whether you hire us or not.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-semibold text-carbon-950 transition hover:bg-white"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-emerald-300/0 via-emerald-300/40 to-emerald-300/0 transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Book a strategy call</span>
                <ArrowUpRight
                  size={15}
                  className="relative transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-6 py-4 text-sm font-semibold text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-400/20"
              >
                <MessageCircle
                  size={14}
                  className="transition group-hover:rotate-12"
                />
                WhatsApp · {CONTACT.phone}
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm text-white/70 underline-offset-[6px] hover:text-white hover:underline"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Footer status row */}
            <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-7 sm:gap-10">
              <Stat label="response" value="< 24h" />
              <span className="hidden h-4 w-px bg-white/15 sm:block" />
              <Stat label="scope" value="fixed" />
              <span className="hidden h-4 w-px bg-white/15 sm:block" />
              <Stat label="diagnostic" value="from $1,200" />
              <span className="hidden h-4 w-px bg-white/15 sm:block" />
              <Stat label="written tradeoffs" value="always" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-base font-bold tracking-[-0.01em] text-white sm:text-lg">
        {value}
      </p>
      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.28em] text-white/45">
        {label}
      </p>
    </div>
  );
}
