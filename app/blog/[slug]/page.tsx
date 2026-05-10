import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import CTA from "@/components/CTA";
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

      {/* Header */}
      <article className="pt-24 sm:pt-28 lg:pt-32">
        <div className="container-x">
          <Link
            href="/blog"
            className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-500 hover:text-carbon-950"
          >
            ← all field notes
          </Link>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
            {p.n} · {p.category} ·{" "}
            <span className="inline-flex items-center gap-1.5">
              <Clock size={10} /> {p.readMinutes} min read
            </span>
          </p>

          <h1 className="heading-lg mt-5 max-w-4xl">{p.title}</h1>

          <p className="lede mt-6 max-w-2xl">{p.description}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-carbon-950/[0.08] pt-6">
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
            {p.publishedAt && (
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
            )}
            {!p.publishedAt && (
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
        <div className="container-x mt-12">
          <figure className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-carbon-950/[0.08]">
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
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10"
            />
          </figure>
        </div>

        {/* Body */}
        <section className="section pt-12 sm:pt-16">
          <div className="container-x">
            <div className="mx-auto max-w-3xl">
              {p.published && p.sections.length > 0 ? (
                p.sections.map((s, i) => (
                  <section key={i} className="mb-12">
                    {s.heading && (
                      <h2 className="font-display text-2xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-3xl">
                        {s.heading}
                      </h2>
                    )}
                    <div className="mt-5 space-y-5 text-base leading-[1.75] text-carbon-700 sm:text-lg sm:leading-[1.8]">
                      {s.paragraphs.map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>
                  </section>
                ))
              ) : (
                <div className="rounded-3xl border border-carbon-950/[0.08] p-10 text-center">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-carbon-400">
                    coming soon
                  </p>
                  <p className="mt-4 font-display text-2xl font-medium leading-snug text-carbon-950 sm:text-3xl">
                    This essay is being drafted. Subscribe below to get it the
                    week it ships.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Other posts */}
        {others.length > 0 && (
          <section className="section pt-0">
            <div className="container-x">
              <div className="flex items-end justify-between">
                <h2 className="heading-md">More notes.</h2>
                <Link href="/blog" className="btn-link">
                  All notes <ArrowUpRight size={13} />
                </Link>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/blog/${o.slug}`}
                    data-cursor="Read"
                    className="group relative overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-white p-7 transition hover:-translate-y-1 hover:border-carbon-950/20 sm:p-9"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                      {o.n} · {o.category}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-[-0.025em] text-carbon-950 sm:text-3xl">
                      {o.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm text-carbon-500">
                      {o.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-carbon-950">
                      Read it <ArrowUpRight size={13} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <CTA />
    </>
  );
}
