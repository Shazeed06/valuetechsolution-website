import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import CTA from "@/components/CTA";
import { publishedPosts } from "@/lib/blog";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: { absolute: "Blog — AI, Web & SEO Insights | Value Tech Solution" },
  description:
    "Field notes on AI agents, n8n automation, web development, and SEO — written by senior engineers at Value Tech Solution, India's AI automation agency.",
  alternates: { canonical: "https://valuetechsolution.com/blog" },
  openGraph: {
    title: "Blog — AI, Web & SEO Insights | Value Tech Solution",
    description:
      "Field notes on AI agents, n8n automation, web development, and SEO from engineers building them.",
    url: "https://valuetechsolution.com/blog",
    siteName: "Value Tech Solution",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — AI, Web & SEO Insights | Value Tech Solution",
    description:
      "Short, opinionated essays on AI agents, n8n, web performance, and search — from India's AI automation engineers.",
  },
};

export default function BlogPage() {
  const published = publishedPosts();
  const featured = published[0];
  const rest = published.slice(1);
  const categories = [...new Set(published.map((p) => p.category))];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Blog", url: "https://valuetechsolution.com/blog" },
        ]}
      />

      {/* ── Header ──────────────────────────────────────── */}
      <section className="border-b border-carbon-950/[0.07] bg-carbon-950 pt-10 pb-10 sm:pt-14 sm:pb-12 lg:pt-16 lg:pb-14">
        <div className="container-x">
          <p className="eyebrow text-white/50">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
            Blog &amp; Field Notes
          </p>
          <h1 className="mt-5 font-display text-4xl font-black leading-[1.0] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Insights on{" "}
            <span className="italic text-orange-400">AI,</span>
            <br className="hidden sm:block" /> web dev &amp; SEO
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
            Short, opinionated essays on AI agents, automation, web performance,
            and search — written by the engineers building them.
          </p>

          {/* Category pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-white/[0.12] bg-white/[0.07] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/60"
              >
                {cat}
              </span>
            ))}
            <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
              {published.length} articles
            </span>
          </div>
        </div>
      </section>

      {/* ── Featured post ───────────────────────────────── */}
      {featured && (
        <section className="border-b border-carbon-950/[0.06] bg-white py-10 sm:py-14 lg:py-16">
          <div className="container-x">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-orange-600">
              ↳ Featured Article
            </p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-carbon-950/[0.08] lg:grid-cols-[55%_45%]">
                {/* Cover image */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
                  <Image
                    src={featured.cover}
                    alt={featured.coverAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-orange-600 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.26em] text-white">
                    {featured.category}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between bg-[rgb(252,251,249)] p-8 sm:p-10 lg:p-12">
                  <div>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400">
                      <Clock size={10} />
                      {featured.readMinutes} min read
                    </span>
                    <h2 className="mt-4 font-display text-2xl font-black leading-[1.08] tracking-[-0.03em] text-carbon-950 transition-colors duration-300 group-hover:text-orange-700 sm:text-3xl lg:text-[2rem]">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-carbon-500">
                      {featured.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-carbon-950/[0.08] pt-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-carbon-400">
                      {featured.author.name} ·{" "}
                      {new Date(featured.publishedAt).toLocaleDateString(
                        "en-GB",
                        { day: "numeric", month: "short", year: "numeric" }
                      )}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 transition-all group-hover:gap-2.5">
                      Read <ArrowUpRight size={14} />
                    </span>
                  </div>
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
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-3xl">
                All articles
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400">
                {rest.length} more
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-carbon-950/[0.07] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/25 hover:shadow-[0_20px_50px_-15px_rgba(234,88,12,0.15)]">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={p.cover}
                        alt={p.coverAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"
                      />
                      <span className="absolute left-3.5 top-3.5 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-carbon-950 backdrop-blur-sm">
                        {p.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="font-display text-lg font-bold leading-snug tracking-[-0.02em] text-carbon-950 transition-colors group-hover:text-orange-700 sm:text-xl">
                        {p.title}
                      </h3>
                      <p className="mt-2.5 flex-1 line-clamp-3 text-sm leading-relaxed text-carbon-500">
                        {p.description}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-carbon-950/[0.06] pt-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-carbon-400">
                          {p.published && p.publishedAt
                            ? new Date(p.publishedAt).toLocaleDateString(
                                "en-GB",
                                { month: "short", day: "numeric", year: "numeric" }
                              )
                            : "Coming soon"}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-carbon-400">
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

      <CTA />
    </>
  );
}
