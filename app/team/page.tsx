import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { CONTACT } from "@/lib/contact-config";

export const metadata: Metadata = {
  title: "The team",
  description:
    "Senior-only engineers and operators behind Value Tech Solution. AI, web, SEO, design — owned end-to-end.",
};

const team = [
  {
    n: "T.01",
    name: "Engineering Lead",
    role: "AI agents · evals · backend",
    bio: "Builds the agents that survive contact with production. Eval suites, observability, integrations.",
    stack: ["Python", "TypeScript", "OpenAI", "n8n", "Postgres"],
    img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "T.02",
    name: "Web Engineer",
    role: "Next.js · headless · perf",
    bio: "Lighthouse 99 by default. Edge runtimes, content systems, accessibility-checked components.",
    stack: ["Next.js", "TypeScript", "Sanity", "Tailwind", "Vercel"],
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "T.03",
    name: "Automation Engineer",
    role: "n8n · GHL · Zapier · APIs",
    bio: "Wires the systems no SaaS connector handles. Custom integrations, retries, idempotency, observability.",
    stack: ["n8n", "GHL", "Zapier", "Node.js", "Python"],
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "T.04",
    name: "Growth Engineer",
    role: "Technical SEO · content · analytics",
    bio: "Tied SEO to revenue, not vanity rankings. Audits, schema, content systems, dashboards.",
    stack: ["Ahrefs", "GSC", "Looker", "Webflow", "GA4"],
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "T.05",
    name: "Design Engineer",
    role: "Figma · React · motion",
    bio: "Tokens to ship: brand systems, motion guidelines, production components in lock-step.",
    stack: ["Figma", "React", "Framer Motion", "GSAP", "Lottie"],
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "T.06",
    name: "Founder · Studio Director",
    role: "Ops · sales · the buck stops",
    bio: "Sells the project, runs the studio, owns the timeline. Engineer first, agency-tired second.",
    stack: ["Notion", "Linear", "Slack", "Looker", "Coffee"],
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="(the team)"
        title={
          <>
            Six engineers.
            <br />
            <span className="italic-accent text-carbon-500">No juniors.</span>
          </>
        }
        description="Every line of code, every agent, every brief at Value Tech Solution is owned by a senior engineer. We hire small. We pair often. We ship in public."
      />

      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article
                key={m.n}
                className="group flex flex-col bg-[rgb(252,251,249)] p-6 transition-colors duration-500 hover:bg-white sm:p-8"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-carbon-950/[0.08]">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover grayscale contrast-110 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-950 backdrop-blur">
                    {m.n}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="font-display text-2xl font-bold tracking-[-0.025em] text-carbon-950">
                    {m.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.24em] text-carbon-500">
                    {m.role}
                  </p>
                  <p className="mt-4 text-sm text-carbon-500">{m.bio}</p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {m.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-carbon-950/15 bg-white px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-carbon-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={CONTACT.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="grid h-8 w-8 place-items-center rounded-full border border-carbon-950/15 text-carbon-700 transition hover:border-carbon-950 hover:text-carbon-950"
                    >
                      <Linkedin size={13} />
                    </a>
                    <a
                      href={CONTACT.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="grid h-8 w-8 place-items-center rounded-full border border-carbon-950/15 text-carbon-700 transition hover:border-carbon-950 hover:text-carbon-950"
                    >
                      <Github size={13} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-carbon-950/[0.08] p-8 text-center sm:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-carbon-400">
              hiring
            </p>
            <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-4xl">
              We hire one senior engineer a quarter.{" "}
              <span className="italic-accent text-carbon-500">
                Maybe you.
              </span>
            </h3>
            <Link href="/contact" className="btn-link mt-8 text-base">
              Tell us what you've shipped <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
