"use client";

import { useEffect, useState } from "react";
import type { Section } from "@/lib/blog";

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function BlogTOC({ sections }: { sections: Section[] }) {
  const headings = sections
    .filter((s) => s.heading)
    .map((s) => s.heading as string);

  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;
    const observers: IntersectionObserver[] = [];
    headings.forEach((h) => {
      const el = document.getElementById(slugifyHeading(h));
      if (!el) return;
      const ob = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(h);
        },
        { rootMargin: "-10% 0% -75% 0%" }
      );
      ob.observe(el);
      observers.push(ob);
    });
    return () => observers.forEach((ob) => ob.disconnect());
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents">
      <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
        Contents
      </p>
      <ol className="space-y-3 border-l border-carbon-950/[0.08] pl-4">
        {headings.map((h, i) => (
          <li key={h}>
            <a
              href={`#${slugifyHeading(h)}`}
              className={`block text-sm leading-snug transition-colors duration-200 ${
                active === h
                  ? "font-semibold text-orange-600"
                  : "text-carbon-500 hover:text-carbon-950"
              }`}
            >
              <span className="font-mono text-[9px] text-carbon-300 mr-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              {h}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
