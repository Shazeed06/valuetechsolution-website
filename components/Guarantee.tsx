"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ShieldCheck, Check, ArrowUpRight, Sparkles } from "lucide-react";
import { whatsappLink } from "@/lib/contact-config";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const promises = [
  "30-day refund window from final delivery",
  "Full refund if scope is missed — no clawback fights",
  "No fine-print exclusions, no kill-fee penalties",
  "Simple email request — no escalation needed",
];

export default function Guarantee() {
  const ref = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.querySelectorAll("[data-line]") ?? [], {
        yPercent: 110,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
      });

      if (stampRef.current) {
        gsap.fromTo(
          stampRef.current,
          { rotate: -32, scale: 0.6, opacity: 0 },
          {
            rotate: -8,
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "backOut",
            scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
          }
        );
        gsap.to(stampRef.current, {
          rotate: -2,
          duration: 2.5,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section">
      <div className="container-x">
        <div className="relative grid gap-px overflow-hidden rounded-[2rem] border border-carbon-950/[0.08] bg-carbon-950/[0.08] lg:grid-cols-12">
          {/* LEFT — image with stamp overlay */}
          <div className="relative aspect-[4/5] overflow-hidden bg-[rgb(252,251,249)] lg:col-span-5 lg:aspect-auto">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
              alt="Handshake — agreement"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover grayscale contrast-110"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/65 via-transparent to-black/15"
            />
            {/* Caption */}
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 backdrop-blur sm:left-7 sm:top-7">
              <ShieldCheck size={13} className="text-carbon-950" />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-950">
                no-risk guarantee
              </span>
            </div>

            {/* Rubber-stamp seal */}
            <div
              ref={stampRef}
              className="absolute right-5 bottom-5 origin-center sm:right-8 sm:bottom-8"
              style={{ transform: "rotate(-8deg)" }}
            >
              <div className="relative grid h-32 w-32 place-items-center rounded-full border-[3px] border-emerald-400/95 bg-emerald-400/15 backdrop-blur sm:h-40 sm:w-40">
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 h-full w-full"
                >
                  <defs>
                    <path
                      id="seal-circle"
                      d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                    />
                  </defs>
                  <text
                    fontSize="13"
                    fontWeight="700"
                    letterSpacing="3"
                    fill="rgb(16,185,129)"
                    fontFamily="'JetBrains Mono', ui-monospace, monospace"
                  >
                    <textPath href="#seal-circle" startOffset="0">
                      MONEY-BACK · 30 DAYS · NO QUESTIONS · MONEY-BACK · 30 DAYS · NO QUESTIONS ·{" "}
                    </textPath>
                  </text>
                </svg>
                <div className="z-10 text-center text-emerald-300">
                  <p className="font-display text-3xl font-bold leading-none tracking-[-0.02em] sm:text-4xl">
                    100%
                  </p>
                  <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.24em] text-emerald-200/80 sm:text-[9px]">
                    refund
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="relative bg-[rgb(252,251,249)] p-7 sm:p-12 lg:col-span-7 lg:p-16">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              (our guarantee)
            </span>

            <h2
              ref={headingRef}
              className="mt-7 font-display font-bold leading-[0.96] tracking-[-0.04em] text-4xl text-carbon-950 sm:text-5xl lg:text-[4.25rem] lg:leading-[1]"
            >
              <span className="block overflow-hidden">
                <span data-line className="block">
                  Don&apos;t love the work?
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  data-line
                  className="block italic-accent text-carbon-500"
                >
                  Full refund.
                </span>
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-carbon-500 sm:text-lg">
              We&apos;re so confident in the work that if the deliverable
              doesn&apos;t meet the SOW within 30 days of final delivery,
              you get a <strong className="font-semibold text-carbon-950">
                full refund
              </strong>{" "}
              — every rupee, every dollar, no haggling, no clawback fights.
            </p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {promises.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-3 rounded-xl border border-carbon-950/[0.08] bg-white p-4"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span className="text-sm text-carbon-700">{p}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-carbon-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-carbon-700"
              >
                <Sparkles size={14} className="text-emerald-300" />
                Book risk-free
                <ArrowUpRight
                  size={14}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href={whatsappLink(
                  "Hi Value Tech Solution — I'd like to start a project, with the money-back guarantee in writing."
                )}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-carbon-700 underline-offset-[6px] hover:text-carbon-950 hover:underline"
              >
                WhatsApp instead →
              </a>
            </div>

            <p className="mt-8 border-t border-carbon-950/[0.08] pt-5 font-mono text-[11px] uppercase tracking-[0.24em] text-carbon-400">
              ↳ guarantee terms written into every SOW we sign
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
