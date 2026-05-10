import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import MediaDivider from "@/components/MediaDivider";
import CTA from "@/components/CTA";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Field notes",
  description:
    "Engineering field notes from Value Tech Solution — AI agents, automation patterns, web performance, and SEO that compounds.",
  alternates: { canonical: "https://valuetechsolution.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="(field notes)"
        title={
          <>
            Field notes from
            <br />
            <span className="italic-accent text-carbon-500">
              the engineer&apos;s bench.
            </span>
          </>
        }
        description="Short, opinionated essays on AI agents, automation patterns, web performance, and search systems. Written by the people building them."
      />

      <MediaDivider
        src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2200&q=80"
        alt="Notebook open on a desk"
        caption="(field notes · in progress)"
        headline={
          <>
            Written by engineers,{" "}
            <span className="italic-accent text-white/70">
              for the next engineer.
            </span>
          </>
        }
        meta={
          <>
            one essay
            <br />
            a month
          </>
        }
        aspect="cine"
      />

      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2">
            {posts.map((p, i) => {
              const isFeatured = i === 0;
              const Card = (
                <article
                  className={`group relative flex h-full flex-col bg-[rgb(252,251,249)] transition-colors duration-500 hover:bg-white ${
                    isFeatured ? "sm:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      isFeatured ? "aspect-[16/7]" : "aspect-[16/9]"
                    }`}
                  >
                    <Image
                      src={p.cover}
                      alt={p.coverAlt}
                      fill
                      sizes={isFeatured ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
                      className="object-cover grayscale contrast-110 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-950 backdrop-blur">
                      {p.category}
                    </span>
                    {!p.published && (
                      <span className="absolute right-5 top-5 rounded-full border border-white/40 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-white backdrop-blur">
                        coming soon
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-7 sm:p-10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                        {p.n}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400">
                        <Clock size={10} />
                        {p.readMinutes} min
                      </span>
                    </div>

                    <h2
                      className={`mt-6 font-display font-bold leading-[1.05] tracking-[-0.03em] text-carbon-950 ${
                        isFeatured
                          ? "text-3xl sm:text-4xl lg:text-5xl"
                          : "text-2xl sm:text-3xl"
                      }`}
                    >
                      {p.title}
                    </h2>
                    <p
                      className={`mt-4 flex-1 text-carbon-500 ${
                        isFeatured ? "max-w-2xl text-base" : "text-sm"
                      }`}
                    >
                      {p.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between border-t border-carbon-950/[0.08] pt-5">
                      <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-carbon-400">
                        {p.published && p.publishedAt
                          ? new Date(p.publishedAt).toLocaleDateString("en-GB", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })
                          : "Coming soon"}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-carbon-950">
                        {p.published ? "Read note" : "Get notified"}{" "}
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              );

              return (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  data-cursor={p.published ? "Read" : "Soon"}
                  className={isFeatured ? "sm:col-span-2" : ""}
                >
                  {Card}
                </Link>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col items-center gap-6 rounded-3xl border border-carbon-950/[0.08] p-10 text-center sm:p-14">
            <BookOpen size={20} className="text-carbon-950" />
            <h3 className="font-display text-3xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-4xl">
              One short essay a month.{" "}
              <span className="italic-accent text-carbon-500">No fluff.</span>
            </h3>
            <p className="max-w-md text-sm text-carbon-500">
              The same notes our team writes for itself — shared with you a
              week later, plus the templates we used.
            </p>
            <form className="mt-2 flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-carbon-950/15 bg-white px-5 py-3 text-sm placeholder:text-carbon-400 focus:border-carbon-950 focus:outline-none"
              />
              <button className="rounded-full bg-carbon-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-carbon-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
