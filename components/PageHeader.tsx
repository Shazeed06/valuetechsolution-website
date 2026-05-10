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
      className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-16"
    >
      <div className="container-x">
        {eyebrow && (
          <span data-page-eyebrow className="eyebrow">
            <span className="h-px w-8 bg-carbon-500" />
            {eyebrow}
          </span>
        )}
        <h1 data-page-title className="heading-xl mt-5 max-w-5xl sm:mt-7">
          {title}
        </h1>
        {description && (
          <p
            data-page-desc
            className="lede mt-5 max-w-2xl sm:mt-7"
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
