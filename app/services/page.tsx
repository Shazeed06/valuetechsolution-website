import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation, web development, SEO, and design systems — delivered as fixed-scope sprints by a senior engineering team.",
};

const services = [
  {
    n: "S.01",
    title: "AI Automation",
    href: "/services/ai-automation",
    summary:
      "Agents that quietly handle 80% of repetitive ops — built on OpenAI, Anthropic, and the stack you already use.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80",
  },
  {
    n: "S.02",
    title: "Web Development",
    href: "/services/web-development",
    summary:
      "Next.js, React, and headless stacks engineered for sub-2s loads, accessibility, and zero-downtime deploys.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1400&q=80",
  },
  {
    n: "S.03",
    title: "SEO Optimization",
    href: "/services/seo",
    summary:
      "Technical SEO, content systems, and link strategy that compound — never one-off audits gathering dust.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  },
  {
    n: "S.04",
    title: "Design Systems",
    href: "/services/design-systems",
    summary:
      "Token-driven, documented brand and product systems that compound across launches and team changes.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="(services)"
        title={
          <>
            Four disciplines.
            <br />
            <span className="italic-accent text-carbon-500">One studio.</span>
          </>
        }
        description="From the first wireframe to the last AI agent, we cover every layer your business needs to ship and grow online — and we lead with the most leveraged work first."
      />

      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.n}
                href={s.href}
                className="group relative flex flex-col bg-[rgb(252,251,249)] p-8 transition-colors hover:bg-white sm:p-12"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-carbon-950/[0.08]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale contrast-110 transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                  />
                </div>

                <div className="mt-8 flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                      {s.n}
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.03em] text-carbon-950 sm:text-4xl lg:text-5xl">
                      {s.title}
                    </h2>
                    <p className="mt-4 max-w-md text-sm text-carbon-500 sm:text-base">
                      {s.summary}
                    </p>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-carbon-950/15 transition group-hover:border-carbon-950 group-hover:bg-carbon-950 group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CTA />
    </>
  );
}
