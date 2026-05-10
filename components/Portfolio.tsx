import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "Mosaic Labs",
    tag: "AI Automation",
    metric: "42 hrs / week saved",
  },
  {
    n: "02",
    title: "Northwind Foods",
    tag: "E-Commerce",
    metric: "+218% organic",
  },
  {
    n: "03",
    title: "Lumen Health",
    tag: "Patient Portal",
    metric: "−62% support load",
  },
  {
    n: "04",
    title: "Forge AI",
    tag: "SaaS marketing site",
    metric: "Lighthouse 99",
  },
];

export default function Portfolio() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              Selected work
            </span>
            <h2 className="heading-lg mt-8">
              Real businesses.
              <br />
              <span className="italic-accent text-carbon-500">Real outcomes.</span>
            </h2>
          </div>
          <Link href="/portfolio" className="btn-link">
            View all projects <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.title}
              href="/portfolio"
              className="group relative flex flex-col bg-[rgb(252,251,249)] p-10 transition-colors duration-500 hover:bg-carbon-950 hover:text-white sm:p-14"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400 group-hover:text-white/60">
                  ({p.n}) {p.tag}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-carbon-950/15 transition group-hover:border-white group-hover:bg-white group-hover:text-carbon-950">
                  <ArrowUpRight size={14} />
                </span>
              </div>

              <h3 className="mt-16 font-display text-4xl font-bold tracking-[-0.04em] sm:mt-24 sm:text-5xl lg:text-6xl">
                {p.title}
              </h3>

              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-carbon-500 group-hover:text-white/60">
                Outcome — <span className="text-carbon-950 group-hover:text-white">{p.metric}</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
