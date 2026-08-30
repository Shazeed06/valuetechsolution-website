import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Mail } from "lucide-react";
import CTA from "@/components/CTA";
import { publishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — AI, Web Development & SEO Insights",
  description:
    "Short, opinionated essays on AI agents, automation patterns, web performance, and SEO — written by the engineers at Value Tech Solution building them.",
  alternates: { canonical: "https://valuetechsolution.com/blog" },
  openGraph: {
    title: "Blog — Value Tech Solution",
    description:
      "Field notes on AI, web development, and SEO from engineers in India.",
    url: "https://valuetechsolution.com/blog",
  },
};

export default function BlogPage() {
  const published = publishedPosts();
  const featured = published[0];
  const rest = published.slice(1);

  return (
    <>
      {/* ── Page header ─────────────────────────────────── */}
      <section className="page-header border-b border-carbon-950/[0.06] bg-white">
        <div className="container-x">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-600" />
            Blog &amp; Field Notes
          </p>
          <h1 className="heading-lg mt-6 max-w-3xl">
            Insights on AI,{" "}
            <span className="italic-accent text-carbon-400">web dev</span> &amp;
            SEO
          </h1>
          <p className="lede mt-5 max-w-2xl">
            Short, opinionated essays on AI agents, automation, web
            performance, and search — written by the engineers building them.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {[...new Set(published.map((p) => p.category))].map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-carbon-950/[0.1] bg-white px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-600"
              >
                {cat}
              </span>
            ))}
            <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400">
              {published.length} articles
            </span>
          </div>
        </div>
      </section>

      {/* ── Featured post ───────────────────────────────── */}
      {featured && (
        <section className="border-b border-carbon-950/[0.06] bg-white py-12 sm:py-16">
          <div className="container-x">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
              Featured
            </p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid items-center gap-10 lg:grid-cols-[1fr_48%]">
                {/* Text */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-orange-600 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.26em] text-white">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400">
                      <Clock size={10} />
                      {featured.readMinutes} min read
                    </span>
                  </div>

                  <h2 className="mt-6 font-display text-3xl font-black leading-[1.05] tracking-[-0.04em] text-carbon-950 transition-colors duration-300 group-hover:text-orange-700 sm:text-4xl lg:text-[2.75rem]">
                    {featured.title}
                  </h2>

                  <p className="mt-5 text-base leading-relaxed text-carbon-500 sm:text-[1.0625rem]">
                    {featured.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-carbon-400">
                      {featured.author.name} ·{" "}
                      {new Date(featured.publishedAt).toLocaleDateString(
                        "en-GB",
                        { day: "numeric", month: "short", year: "numeric" }
                      )}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 transition-all group-hover:gap-2.5">
                      Read article <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Cover */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-[16/11]">
                  <Image
                    src={featured.cover}
                    alt={featured.coverAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover grayscale contrast-110 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Post grid ───────────────────────────────────── */}
      {rest.length > 0 && (
        <section className="section bg-[rgb(250,250,250)]">
          <div className="container-x">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="heading-sm">All articles</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-carbon-950/[0.07] bg-white transition-all duration-300 hover:border-orange-600/25 hover:shadow-[0_12px_40px_-12px_rgba(234,88,12,0.14)]">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={p.cover}
                        alt={p.coverAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover grayscale contrast-110 transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/92 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.24em] text-carbon-950 backdrop-blur-sm">
                        {p.category}
                      </span>
                      {!p.published && (
                        <span className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/45 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.24em] text-white">
                          Soon
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-bold leading-snug tracking-[-0.025em] text-carbon-950 transition-colors group-hover:text-orange-700">
                        {p.title}
                      </h3>
                      <p className="mt-3 flex-1 line-clamp-3 text-sm leading-relaxed text-carbon-500">
                        {p.description}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-carbon-950/[0.06] pt-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-carbon-400">
                          {p.published && p.publishedAt
                            ? new Date(p.publishedAt).toLocaleDateString(
                                "en-GB",
                                { month: "short", day: "numeric", year: "numeric" }
                              )
                            : "Coming soon"}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.22em] text-carbon-400">
                          <Clock size={9} />
                          {p.readMinutes} min
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Newsletter ──────────────────────────────────── */}
      <section className="section border-t border-carbon-950/[0.06] bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl rounded-3xl border border-orange-600/20 bg-orange-50 px-8 py-12 text-center sm:px-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-600/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-orange-700">
              <Mail size={10} />
              Newsletter
            </span>
            <h2 className="heading-sm mt-5">
              One short essay a month.{" "}
              <span className="italic-accent text-carbon-500">No fluff.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-carbon-500">
              The same notes our team writes for itself — shared one week
              later, with templates included.
            </p>
            <form className="mx-auto mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-carbon-950/12 bg-white px-5 py-3 text-sm placeholder:text-carbon-400 focus:border-orange-600 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-orange-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
              >
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
