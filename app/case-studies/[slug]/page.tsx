import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import CTA from "@/components/CTA";
import { cases, getCase } from "@/lib/case-studies";
import { BreadcrumbSchema } from "@/components/Schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return { title: "Case study" };
  return {
    title: c.title,
    description: c.oneLiner,
    alternates: {
      canonical: `https://valuetechsolution.com/case-studies/${c.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return notFound();

  const others = cases.filter((x) => x.slug !== c.slug);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Case studies", url: "https://valuetechsolution.com/case-studies" },
          { name: c.title, url: `https://valuetechsolution.com/case-studies/${c.slug}` },
        ]}
      />

      {/* Header */}
      <section className="page-header">
        <div className="container-x">
          <Link
            href="/case-studies"
            className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-500 hover:text-carbon-950"
          >
            ← all case studies
          </Link>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
            {c.category} · {c.industry} · {c.duration}
          </p>
          <h1 className="heading-lg mt-5 max-w-5xl">{c.title}</h1>
          <p className="lede mt-6 max-w-2xl">{c.oneLiner}</p>

          <div className="mt-10 flex flex-wrap gap-2">
            {c.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-carbon-950/15 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-carbon-700"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="relative">
        <div className="container-x">
          <figure className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-carbon-950/[0.08]">
            <Image
              src={c.hero}
              alt={c.heroAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover grayscale contrast-110"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10"
            />
          </figure>
        </div>
      </section>

      {/* Outcome strip */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-8 sm:gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {c.outcome.map((o, i) => (
              <div
                key={o.label}
                className={`pt-6 sm:pt-0 ${
                  i > 0 ? "sm:border-l sm:border-carbon-950/[0.08] sm:pl-8" : ""
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                  ({String(i + 1).padStart(2, "0")})
                </p>
                <p className="mt-5 font-display text-3xl font-bold tracking-[-0.04em] text-carbon-950 sm:text-4xl lg:text-5xl">
                  {o.value}
                </p>
                <p className="mt-3 text-sm font-medium text-carbon-700">
                  {o.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="section pt-0">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-32 space-y-3 text-sm">
              <a href="#challenge" className="block text-carbon-500 hover:text-carbon-950">
                The challenge
              </a>
              <a href="#approach" className="block text-carbon-500 hover:text-carbon-950">
                Our approach
              </a>
              <a href="#delivery" className="block text-carbon-500 hover:text-carbon-950">
                What we delivered
              </a>
              <a href="#reflection" className="block text-carbon-500 hover:text-carbon-950">
                Reflection
              </a>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <section id="challenge" className="scroll-mt-32">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                01 · the challenge
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-4xl">
                The challenge
              </h2>
              <p className="mt-6 text-base leading-relaxed text-carbon-700 sm:text-lg">
                {c.challenge}
              </p>
            </section>

            <section id="approach" className="mt-16 scroll-mt-32">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                02 · our approach
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-4xl">
                Our approach
              </h2>
              <ol className="mt-6 space-y-4">
                {c.approach.map((step, i) => (
                  <li
                    key={i}
                    className="flex gap-4 rounded-2xl border border-carbon-950/[0.08] p-5"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-carbon-400">
                      0{i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-carbon-700">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section id="delivery" className="mt-16 scroll-mt-32">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                03 · what we delivered
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-4xl">
                What we delivered
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {c.delivery.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 rounded-2xl border border-carbon-950/[0.08] p-4"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-carbon-950 text-white">
                      <Check size={11} />
                    </span>
                    <span className="text-sm text-carbon-700">{d}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="reflection" className="mt-16 scroll-mt-32">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                04 · reflection
              </p>
              <blockquote className="mt-3 rounded-3xl border border-carbon-950 bg-carbon-950 p-8 text-white sm:p-12">
                <p className="font-display text-2xl font-medium leading-[1.25] tracking-[-0.02em] sm:text-3xl">
                  <span className="italic-accent text-white/55">&ldquo;</span>
                  {c.pull}
                  <span className="italic-accent text-white/55">&rdquo;</span>
                </p>
                <p className="mt-6 border-t border-white/10 pt-5 text-base leading-relaxed text-white/70">
                  {c.reflection}
                </p>
              </blockquote>
            </section>
          </div>
        </div>
      </article>

      {/* Other case studies */}
      {others.length > 0 && (
        <section className="section">
          <div className="container-x">
            <div className="flex items-end justify-between">
              <h2 className="heading-md">More case studies.</h2>
              <Link href="/case-studies" className="btn-link">
                See all <ArrowUpRight size={13} />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/case-studies/${o.slug}`}
                  className="group relative overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-white p-7 transition hover:-translate-y-1 hover:border-carbon-950/20 sm:p-9"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                    {o.category} · {o.industry}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-[-0.025em] text-carbon-950 sm:text-3xl">
                    {o.title}
                  </h3>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-carbon-950">
                    Read it <ArrowUpRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
