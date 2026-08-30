import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import CTA from "@/components/CTA";
import BlogTOC, { slugifyHeading } from "@/components/BlogTOC";
import BlogSidebar from "@/components/BlogSidebar";
import { getPost, posts, publishedPosts, wordCount } from "@/lib/blog";
import { ArticleSchema, BreadcrumbSchema } from "@/components/Schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return { title: "Note" };
  return {
    title: p.title,
    description: p.description,
    alternates: {
      canonical: `https://valuetechsolution.com/blog/${p.slug}`,
    },
    robots: p.published
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title: p.title,
      description: p.description,
      url: `https://valuetechsolution.com/blog/${p.slug}`,
      type: "article",
      publishedTime: p.publishedAt || undefined,
      authors: [p.author.name],
      images: p.cover ? [p.cover] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return notFound();

  const others = publishedPosts()
    .filter((x) => x.slug !== p.slug)
    .slice(0, 2);

  return (
    <>
      {p.published && (
        <ArticleSchema
          title={p.title}
          description={p.description}
          url={`https://valuetechsolution.com/blog/${p.slug}`}
          datePublished={p.publishedAt}
          authorName={p.author.name}
          authorUrl={p.author.url}
          image={p.cover}
          category={p.category}
          wordCount={wordCount(p)}
        />
      )}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Blog", url: "https://valuetechsolution.com/blog" },
          {
            name: p.title,
            url: `https://valuetechsolution.com/blog/${p.slug}`,
          },
        ]}
      />

      {/* ── Article header ──────────────────────────────── */}
      <header className="page-header border-b border-carbon-950/[0.06] bg-white">
        <div className="container-x">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400 transition hover:text-carbon-950"
          >
            ← all field notes
          </Link>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-orange-600 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.26em] text-white">
              {p.category}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400">
              <Clock size={10} /> {p.readMinutes} min read
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400">
              {p.n}
            </span>
          </div>

          <h1 className="heading-lg mt-6 max-w-4xl">{p.title}</h1>

          <p className="lede mt-5 max-w-2xl">{p.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-carbon-950/[0.08] pt-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                author
              </p>
              <Link
                href={p.author.url}
                className="mt-1 inline-block text-sm font-medium text-carbon-950 underline-offset-[5px] hover:underline"
              >
                {p.author.name}
              </Link>
            </div>
            {p.publishedAt ? (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                  published
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-carbon-700">
                  <Calendar size={11} className="text-carbon-400" />
                  {new Date(p.publishedAt).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            ) : (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                  status
                </p>
                <p className="mt-1 text-sm text-carbon-700">Coming soon</p>
              </div>
            )}
          </div>
        </div>

        {/* Cover image */}
        <div className="container-x mt-10">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-carbon-950/[0.08] sm:aspect-[21/8]">
            <Image
              src={p.cover}
              alt={p.coverAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover grayscale contrast-110"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"
            />
          </figure>
        </div>
      </header>

      {/* ── 3-column body ───────────────────────────────── */}
      <div className="section bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_260px] lg:grid-cols-[220px_1fr_260px] lg:gap-14">

            {/* TOC — desktop only ───────── */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pb-4">
                <BlogTOC sections={p.sections} />
              </div>
            </aside>

            {/* Article body ───────────────── */}
            <article className="min-w-0">
              {p.published && p.sections.length > 0 ? (
                <div className="space-y-12">
                  {p.sections.map((s, i) => (
                    <section key={i}>
                      {s.heading && (
                        <h2
                          id={slugifyHeading(s.heading)}
                          className="scroll-mt-28 font-display text-2xl font-bold tracking-[-0.03em] text-carbon-950 sm:text-3xl"
                        >
                          {s.heading}
                        </h2>
                      )}
                      <div className="mt-5 space-y-5 text-base leading-[1.8] text-carbon-700 sm:text-[1.0625rem]">
                        {s.paragraphs.map((para, j) => (
                          <p key={j}>{para}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border border-carbon-950/[0.08] bg-[rgb(250,250,250)] p-10 text-center">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-carbon-400">
                    coming soon
                  </p>
                  <p className="mt-4 font-display text-2xl font-medium leading-snug text-carbon-950 sm:text-3xl">
                    This essay is being drafted. Subscribe below to get it the
                    week it ships.
                  </p>
                </div>
              )}
            </article>

            {/* Sidebar — tablet + desktop ── */}
            <aside className="hidden md:block">
              <div className="sticky top-28">
                <BlogSidebar />
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ── More posts ──────────────────────────────────── */}
      {others.length > 0 && (
        <section className="section border-t border-carbon-950/[0.06] bg-[rgb(250,250,250)]">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="heading-sm">More field notes</h2>
              <Link href="/blog" className="btn-link">
                All notes <ArrowUpRight size={13} />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/blog/${o.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-carbon-950/[0.07] bg-white transition-all duration-300 hover:border-orange-600/25 hover:shadow-[0_12px_40px_-12px_rgba(234,88,12,0.12)]"
                >
                  <div className="relative aspect-[16/8] overflow-hidden">
                    <Image
                      src={o.cover}
                      alt={o.coverAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover grayscale contrast-110 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.24em] text-carbon-950 backdrop-blur-sm">
                      {o.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                      {o.n}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug tracking-[-0.025em] text-carbon-950 transition-colors group-hover:text-orange-700 sm:text-2xl">
                      {o.title}
                    </h3>
                    <p className="mt-3 flex-1 line-clamp-2 text-sm leading-relaxed text-carbon-500">
                      {o.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-orange-600 transition-all group-hover:gap-2.5">
                      Read it <ArrowUpRight size={13} />
                    </span>
                  </div>
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
