import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { cases } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Anonymised, real-shape engagements from Value Tech Solution — AI agents, automations, web, and SEO programs.",
  alternates: { canonical: "https://valuetechsolution.com/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="(case studies)"
        title={
          <>
            Real engagements,
            <br />
            <span className="italic-accent text-carbon-500">anonymised.</span>
          </>
        }
        description="We don't paste fake logos. Below are real project shapes we've shipped — clients anonymised, metrics verified, stack disclosed. NDAs available on request."
      />

      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-2">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-white transition hover:-translate-y-1 hover:border-carbon-950/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={c.hero}
                    alt={c.heroAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover grayscale contrast-110 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-950 backdrop-blur">
                    {c.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                    {c.industry} · {c.duration}
                  </p>
                  <h2 className="mt-4 font-display text-2xl font-bold leading-[1.15] tracking-[-0.025em] text-carbon-950 sm:text-3xl">
                    {c.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-carbon-500">
                    {c.oneLiner}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-carbon-950/[0.08] pt-5">
                    {c.outcome.slice(0, 2).map((o) => (
                      <div key={o.label}>
                        <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-carbon-400">
                          {o.label}
                        </p>
                        <p className="mt-1 font-display text-base font-bold tracking-[-0.01em] text-carbon-950">
                          {o.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {c.stack.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-carbon-950/15 bg-snow-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-carbon-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-carbon-950 text-white transition group-hover:bg-carbon-700">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
