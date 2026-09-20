import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import CTA from "@/components/CTA";
import { publishedPosts } from "@/lib/blog";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: { absolute: "Blog & Field Notes — Web Dev & SEO | Value Tech Solution" },
  description:
    "Engineering notes on Next.js web development, UI/UX design, Core Web Vitals speed optimization, and SEO — written by senior engineers at Value Tech Solution.",
  alternates: { canonical: "https://valuetechsolution.com/blog" },
};

export default function BlogPage() {
  const published = publishedPosts();
  const featured = published[0];
  const rest = published.slice(1);
  const categories = [...new Set(published.map((p) => p.category))];

  return (
    <div className="bg-[#efebe5] text-[#141414] min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Blog", url: "https://valuetechsolution.com/blog" },
        ]}
      />

      {/* Header */}
      <section className="relative pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 border-b border-[#d8d3ce]">
        <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
              Engineering Field Notes
            </span>
          </div>

          <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-[#141414] leading-[1.02] max-w-3xl mb-6">
            Insights on{" "}
            <span className="font-sourceSerif italic font-normal text-primary">
              web performance,
            </span>
            <br />
            design &amp; SEO.
          </h1>

          <p className="text-base sm:text-lg text-[#7d7b77] font-medium leading-relaxed max-w-2xl mb-8">
            Short, opinionated essays on Next.js architectures, modern conversion funnels, Core Web Vitals, and search algorithms — written by the engineers building them.
          </p>

          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-[#d8d3ce]">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-[#d8d3ce] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#141414]"
              >
                {cat}
              </span>
            ))}
            <span className="ml-auto text-xs font-semibold text-[#7d7b77]">
              {published.length} articles
            </span>
          </div>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-12 lg:py-16">
          <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="mb-5 text-xs font-bold uppercase tracking-wider text-primary">
              ↳ Featured Article
            </p>

            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid items-stretch gap-0 overflow-hidden rounded-[36px] border border-[#ece9e1] bg-white shadow-sm hover:shadow-xl transition-all duration-500 lg:grid-cols-[55%_45%]">
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
                  <span className="absolute left-5 top-5 rounded-full bg-[#141414] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {featured.category}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                  <div>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#7d7b77] uppercase tracking-wider">
                      <Clock size={12} className="text-primary" />
                      {featured.readMinutes} min read
                    </span>
                    <h2 className="mt-4 font-montserrat font-black text-2xl sm:text-3xl text-[#141414] leading-[1.1] tracking-tight group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-[#7d7b77] font-medium leading-relaxed">
                      {featured.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#ece9e1] pt-6">
                    <span className="text-xs font-semibold text-[#7d7b77]">
                      {featured.author.name} ·{" "}
                      {new Date(featured.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-all group-hover:gap-2.5">
                      Read Article <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post grid */}
      {rest.length > 0 && (
        <section className="py-16 bg-[#f7f2ea] border-t border-[#d8d3ce]">
          <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-[#141414] tracking-tight">
                All Articles
              </h2>
              <span className="text-xs font-bold text-[#7d7b77]">
                {rest.length} more published
              </span>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col">
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#ece9e1] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={p.cover}
                        alt={p.coverAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                      <span className="absolute left-3.5 top-3.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#141414] shadow-sm">
                        {p.category}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-montserrat font-bold text-lg text-[#141414] leading-snug tracking-tight group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-2.5 flex-1 line-clamp-3 text-xs sm:text-sm text-[#7d7b77] font-medium leading-relaxed">
                        {p.description}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-[#ece9e1] pt-4 text-xs font-semibold text-[#7d7b77]">
                        <span>
                          {p.published && p.publishedAt
                            ? new Date(p.publishedAt).toLocaleDateString("en-GB", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                            : "Recent"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} className="text-primary" />
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
    </div>
  );
}
