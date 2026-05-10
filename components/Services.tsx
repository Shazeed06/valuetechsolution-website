import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "S.01",
    title: "AI Automation",
    href: "/services/ai-automation",
    desc: "Agents that quietly handle 80% of repetitive ops — built on OpenAI, Anthropic, and the stack you already use.",
  },
  {
    n: "S.02",
    title: "Web Development",
    href: "/services/web-development",
    desc: "Next.js, React, and headless stacks engineered for sub-2s loads, accessibility, and zero-downtime deploys.",
  },
  {
    n: "S.03",
    title: "SEO Optimization",
    href: "/services/seo",
    desc: "Technical SEO, content systems, and link strategy that compound — never one-off audits gathering dust.",
  },
  {
    n: "S.04",
    title: "Design Systems",
    href: "/services/design-systems",
    desc: "Token-driven brand systems and product flows that turn first-time visitors into repeat customers.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              What we engineer
            </span>
            <h2 className="heading-lg mt-8">
              Four disciplines.
              <br />
              <span className="italic-accent text-carbon-500">One studio.</span>
            </h2>
          </div>
          <p className="lede max-w-md lg:col-span-7 lg:mt-32 lg:max-w-lg">
            We lead with AI automation — the highest-leverage work most teams
            ignore — then wrap it in the website, search, and design layers
            that make it visible to the world.
          </p>
        </div>

        <ul className="mt-20 divide-y divide-carbon-950/[0.08] border-y border-carbon-950/[0.08]">
          {services.map((s) => (
            <li key={s.title}>
              <Link
                href={s.href}
                className="group grid grid-cols-12 items-center gap-6 py-10 transition-colors duration-500 hover:bg-carbon-950 hover:text-white sm:py-14"
              >
                <span className="col-span-2 pl-2 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400 group-hover:text-white/60 sm:pl-6">
                  {s.n}
                </span>
                <h3 className="col-span-12 font-display text-4xl font-bold tracking-[-0.035em] sm:col-span-5 sm:text-5xl lg:text-6xl">
                  {s.title}
                </h3>
                <p className="col-span-10 col-start-3 max-w-md text-sm text-carbon-500 group-hover:text-white/70 sm:col-span-4 sm:col-start-7">
                  {s.desc}
                </p>
                <span className="col-span-2 hidden justify-end pr-2 sm:flex sm:pr-6">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-carbon-950/15 transition group-hover:border-white group-hover:bg-white group-hover:text-carbon-950">
                    <ArrowUpRight size={16} />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
