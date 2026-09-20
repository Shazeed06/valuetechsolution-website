"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-page-eyebrow]", {
        opacity: 0,
        y: 12,
        duration: 0.7,
        ease: "expo.out",
      });
      gsap.from("[data-page-title]", {
        opacity: 0,
        y: 24,
        duration: 1,
        delay: 0.1,
        ease: "expo.out",
      });
      gsap.from("[data-page-desc]", {
        opacity: 0,
        y: 14,
        duration: 0.8,
        delay: 0.3,
        ease: "expo.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 bg-[#efebe5] text-[#141414]"
    >
      <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <div data-page-eyebrow className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
              {eyebrow}
            </span>
          </div>
        )}
        <h1
          data-page-title
          className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.04em] text-[#141414] leading-[1.05] max-w-4xl"
        >
          {title}
        </h1>
        {description && (
          <p
            data-page-desc
            className="mt-6 text-base sm:text-lg text-[#7d7b77] font-medium leading-relaxed max-w-2xl"
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
