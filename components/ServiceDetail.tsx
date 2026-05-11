import Link from "next/link";
import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  heroImage: string;
  heroAlt: string;
  midImage?: string;
  midAlt?: string;
  midCaption?: string;
  midHeadline?: React.ReactNode;
  features: { title: string; desc: string }[];
  deliverables: string[];
  pricing: {
    name: string;
    price: string;
    bullets: string[];
    highlight?: boolean;
  }[];
  context?: { title: string; body: React.ReactNode }[];
};

export default function ServiceDetail({
  eyebrow,
  title,
  intro,
  heroImage,
  heroAlt,
  midImage,
  midAlt,
  midCaption,
  midHeadline,
  features,
  deliverables,
  pricing,
  context,
}: Props) {
  return (
    <>
      {/* Hero header */}
      <section className="pt-32 pb-12 sm:pt-40 lg:pt-48">
        <div className="container-x">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="eyebrow">
                <span className="h-px w-8 bg-carbon-500" />
                {eyebrow}
              </span>
              <h1 className="heading-xl mt-8">{title}</h1>
            </div>
            <div className="lg:col-span-5">
              <p className="lede max-w-md">{intro}</p>
              <div className="mt-8 flex items-center gap-6">
                <Link href="/contact" className="btn-primary">
                  Start a project <ArrowUpRight size={15} />
                </Link>
                <Link href="/portfolio" className="btn-link">
                  Case studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="relative">
        <div className="container-x">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-carbon-950/[0.08] sm:aspect-[16/8]">
            <Image
              src={heroImage}
              alt={heroAlt}
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

      {/* Context blocks (optional) */}
      {context && context.length > 0 && (
        <section className="section">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">
                <span className="h-px w-8 bg-carbon-500" />
                Context
              </span>
              <h2 className="heading-md mt-8">
                Why teams hire us for{" "}
                <span className="italic-accent text-carbon-500">this.</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {context.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-3xl border border-carbon-950/[0.08] p-7"
                  >
                    <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-carbon-950">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-carbon-500">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <h2 className="heading-md">What's included.</h2>
            <p className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400 sm:block">
              (scope) — fixed, written
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-[rgb(252,251,249)] p-8 transition-colors hover:bg-white"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                  F.{String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold tracking-[-0.02em] text-carbon-950">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-carbon-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid divider image */}
      {midImage && (
        <section className="relative">
          <div className="container-x">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-carbon-950/[0.08] sm:aspect-[16/8]">
              <Image
                src={midImage}
                alt={midAlt ?? ""}
                fill
                sizes="100vw"
                className="object-cover grayscale contrast-110"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10"
              />
              {(midCaption || midHeadline) && (
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-10">
                  {midCaption && (
                    <p className="font-mono text-[9px] uppercase tracking-[0.24em] sm:text-[10px] sm:tracking-[0.28em]">
                      {midCaption}
                    </p>
                  )}
                  {midHeadline && (
                    <p className="mt-2 max-w-xl font-display text-base font-bold leading-tight tracking-[-0.02em] sm:mt-3 sm:text-3xl lg:text-4xl">
                      {midHeadline}
                    </p>
                  )}
                </figcaption>
              )}
            </figure>
          </div>
        </section>
      )}

      {/* Deliverables */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              Deliverables
            </span>
            <h2 className="heading-md mt-8">
              Everything you{" "}
              <span className="italic-accent text-carbon-500">walk away with.</span>
            </h2>
            <p className="mt-6 max-w-md text-carbon-500">
              No vague handoffs. Each engagement ends with a clean, documented
              system your team can run with.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:mt-3">
            {deliverables.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 rounded-2xl border border-carbon-950/[0.08] p-4"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-carbon-950 text-white">
                  <Check size={12} />
                </span>
                <span className="text-sm text-carbon-700">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container-x">
          <div className="text-center">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              Engagement options
            </span>
            <h2 className="heading-lg mt-8">
              Pick a sprint{" "}
              <span className="italic-accent text-carbon-500">that fits.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-carbon-500">
              Fixed price, fixed scope, fixed timeline. No surprises on the
              invoice.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] md:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col p-8 sm:p-10 ${
                  p.highlight
                    ? "bg-carbon-950 text-white"
                    : "bg-[rgb(252,251,249)]"
                }`}
              >
                {p.highlight && (
                  <span className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-white/80">
                    most popular
                  </span>
                )}
                <p
                  className={`text-xs uppercase tracking-widest ${
                    p.highlight ? "text-white/55" : "text-carbon-300"
                  }`}
                >
                  {p.name}
                </p>
                <p
                  className={`mt-3 font-display text-4xl font-bold tracking-[-0.04em] ${
                    p.highlight ? "text-white" : "text-carbon-950"
                  }`}
                >
                  {p.price}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className={`flex items-start gap-2 text-sm ${
                        p.highlight ? "text-white/80" : "text-carbon-700"
                      }`}
                    >
                      <Check
                        size={14}
                        className={`mt-1 shrink-0 ${
                          p.highlight ? "text-white" : "text-carbon-950"
                        }`}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                    p.highlight
                      ? "bg-white text-carbon-950 hover:bg-snow-100"
                      : "bg-carbon-950 text-white hover:bg-carbon-700"
                  }`}
                >
                  Start this engagement
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
