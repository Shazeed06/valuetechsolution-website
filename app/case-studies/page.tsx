import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { cases } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: { absolute: "Case Studies — Verified Client Results | Value Tech Solution" },
  description:
    "Real project outcomes shipped by Value Tech Solution — custom Next.js web applications, headless storefronts, and performance engineering.",
  alternates: { canonical: "https://valuetechsolution.com/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#efebe5] text-[#141414] min-h-screen">
      <PageHeader
        eyebrow="Case Studies"
        title={
          <>
            Real engagements,{" "}
            <span className="font-sourceSerif italic font-normal text-primary">
              verified outcomes.
            </span>
          </>
        }
        description="We let our work speak for itself. Below are real client engagements shipped by our senior engineers — metrics verified, stacks disclosed."
      />

      <section className="py-12 lg:py-20">
        <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="group flex flex-col overflow-hidden rounded-[32px] border border-[#ece9e1] bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={c.hero}
                    alt={c.heroAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#141414] backdrop-blur shadow-sm">
                    {c.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-8 sm:p-9">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#7d7b77]">
                    {c.industry} · {c.duration}
                  </p>
                  <h2 className="mt-3 font-montserrat font-bold text-2xl text-[#141414] leading-snug tracking-tight group-hover:text-primary transition-colors">
                    {c.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-[#7d7b77] font-medium leading-relaxed">
                    {c.oneLiner}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#ece9e1] pt-5">
                    {c.outcome.slice(0, 2).map((o) => (
                      <div key={o.label}>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-[#7d7b77]">
                          {o.label}
                        </p>
                        <p className="mt-1 font-montserrat font-black text-lg text-primary">
                          {o.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#ece9e1] pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {c.stack.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-[#d8d3ce] bg-[#f7f2ea] px-2.5 py-1 text-[10px] font-semibold text-[#141414]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#141414] text-white transition group-hover:bg-primary group-hover:text-black">
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
    </div>
  );
}
