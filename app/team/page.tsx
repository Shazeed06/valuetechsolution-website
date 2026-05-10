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
    "Senior engineers and operators behind Value Tech Solution — AI, web, automation, search. Owned end-to-end. No juniors.",
  alternates: { canonical: "https://valuetechsolution.com/team" },
};

export type Member = {
  n: string;
  name: string;
  role: string;
  bio: string;
  stack: string[];
  expertise: string[];
  img: string;
  links: { linkedin?: string; github?: string };
};

export const team: Member[] = [
  {
    n: "T.01",
    name: "Shazeed Ahmad",
    role: "Founder · AI engineering lead",
    bio: "Builds the agents that survive contact with production traffic. Eight years across distributed systems, applied LLMs, and product engineering. Leads diagnostics, scoping, and technical review on every engagement.",
    stack: ["Python", "TypeScript", "OpenAI", "Anthropic", "n8n", "Postgres", "AWS"],
    expertise: [
      "RAG architectures",
      "Agent eval suites",
      "Multi-step orchestration",
      "Prompt-injection defence",
    ],
    img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=900&q=80",
    links: {
      linkedin: CONTACT.linkedin,
      github: CONTACT.github,
    },
  },
  {
    n: "T.02",
    name: "Aanya Verma",
    role: "Senior web engineer",
    bio: "Ten years shipping production frontends — from early Backbone era to today's edge-rendered React. Owns the bar for performance, accessibility, and code that ages well past the launch sprint.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Sanity", "Vercel", "GSAP"],
    expertise: [
      "Lighthouse 95+ enforced in CI",
      "Server components + RSC patterns",
      "Headless CMS architecture",
      "WCAG 2.1 AA workflows",
    ],
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
    links: {
      linkedin: CONTACT.linkedin,
    },
  },
  {
    n: "T.03",
    name: "Rohan Iyer",
    role: "Automation engineer",
    bio: "Wires the systems no SaaS connector handles cleanly. Specialist in n8n, GHL, and bespoke Python services with proper observability — retries, idempotency, dead-letter queues, traces.",
    stack: ["n8n", "GoHighLevel", "Zapier", "Python", "Node.js", "Redis"],
    expertise: [
      "Custom n8n nodes",
      "GHL agency snapshots",
      "Marketing + sales ops automation",
      "Stripe + finance pipelines",
    ],
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    links: {
      linkedin: CONTACT.linkedin,
      github: CONTACT.github,
    },
  },
  {
    n: "T.04",
    name: "Priya Subramanian",
    role: "Growth engineer · SEO + analytics",
    bio: "Twelve years in technical SEO. Tied search rankings to revenue dashboards before it was cool. Owns content systems, schema, internal linking, and the Looker boards your CFO will actually read.",
    stack: ["Ahrefs", "GSC", "Looker Studio", "GA4", "Webflow", "Posthog"],
    expertise: [
      "Technical SEO audits",
      "Editorial content systems",
      "Schema + GEO + AEO",
      "Pipeline-tied analytics",
    ],
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    links: {
      linkedin: CONTACT.linkedin,
    },
  },
];

export default function TeamPage() {
  // Person JSON-LD for E-E-A-T
  const personSchemas = team.map((m) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: m.name,
    jobTitle: m.role,
    worksFor: {
      "@type": "Organization",
      name: "Value Tech Solution",
      url: "https://valuetechsolution.com",
    },
    knowsAbout: m.expertise,
    image: m.img,
    sameAs: [m.links.linkedin, m.links.github].filter(Boolean),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchemas),
        }}
      />

      <PageHeader
        eyebrow="(the team)"
        title={
          <>
            Four senior engineers.
            <br />
            <span className="italic-accent text-carbon-500">No juniors.</span>
          </>
        }
        description="Every line of code, every agent, every brief at Value Tech Solution is owned by an engineer with 6+ years in production. We hire small. We pair often. We ship in public."
      />

      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-8 sm:grid-cols-2">
            {team.map((m) => (
              <article
                key={m.n}
                className="group flex flex-col overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-white transition hover:-translate-y-1 hover:border-carbon-950/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-carbon-950/[0.08]">
                  <Image
                    src={m.img}
                    alt={`${m.name} — ${m.role}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale contrast-110 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-950 backdrop-blur">
                    {m.n}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <h3 className="font-display text-2xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-3xl">
                    {m.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.24em] text-carbon-500">
                    {m.role}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-carbon-500">
                    {m.bio}
                  </p>

                  <div className="mt-7">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400">
                      core expertise
                    </p>
                    <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                      {m.expertise.map((e) => (
                        <li
                          key={e}
                          className="flex items-start gap-2 text-sm text-carbon-700"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-carbon-950" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 border-t border-carbon-950/[0.08] pt-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400">
                      stack
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {m.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-carbon-950/15 bg-white px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-carbon-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex items-center gap-3 pt-7">
                    {m.links.linkedin && (
                      <a
                        href={m.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${m.name} on LinkedIn`}
                        className="grid h-9 w-9 place-items-center rounded-full border border-carbon-950/15 text-carbon-700 transition hover:border-carbon-950 hover:bg-carbon-950 hover:text-white"
                      >
                        <Linkedin size={14} />
                      </a>
                    )}
                    {m.links.github && (
                      <a
                        href={m.links.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${m.name} on GitHub`}
                        className="grid h-9 w-9 place-items-center rounded-full border border-carbon-950/15 text-carbon-700 transition hover:border-carbon-950 hover:bg-carbon-950 hover:text-white"
                      >
                        <Github size={14} />
                      </a>
                    )}
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
              <span className="italic-accent text-carbon-500">Maybe you.</span>
            </h3>
            <Link
              href="/contact"
              data-cursor="Apply"
              className="btn-link mt-8 text-base"
            >
              Tell us what you&apos;ve shipped <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
