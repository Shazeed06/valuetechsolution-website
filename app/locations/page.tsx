import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CTA from "@/components/CTA";
import { indianCities, internationalCities } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Locations — Web Development & AI Automation Agency",
  description:
    "Value Tech Solution serves clients across India (Delhi, Mumbai, Bangalore, Hyderabad, Pune) and internationally (USA, UK, UAE, Canada, Singapore, Australia). Fixed-price builds, senior engineers.",
  alternates: { canonical: "https://valuetechsolution.com/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <section className="page-header border-b border-carbon-950/[0.06] bg-white">
        <div className="container-x">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-600" />
            Where we work
          </p>
          <h1 className="heading-lg mt-6 max-w-3xl">
            India-based engineers.{" "}
            <span className="italic-accent text-carbon-400">Global clients.</span>
          </h1>
          <p className="lede mt-5 max-w-2xl">
            Remote-first, async-friendly. We serve clients across India and
            internationally — same senior engineers, same quality standards,
            everywhere.
          </p>
        </div>
      </section>

      {/* India */}
      <section className="section bg-white">
        <div className="container-x">
          <p className="eyebrow mb-8">
            <span className="text-lg">🇮🇳</span> India
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {indianCities.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-carbon-950/[0.07] bg-[rgb(250,250,250)] p-6 transition-all hover:border-orange-600/25 hover:bg-white hover:shadow-[0_8px_32px_-8px_rgba(234,88,12,0.12)]"
              >
                <div>
                  <p className="font-display text-xl font-bold tracking-[-0.025em] text-carbon-950 group-hover:text-orange-700">
                    {c.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-carbon-500">
                    {c.market}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-carbon-950/[0.06] pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-carbon-400">
                    from {c.starterPrice}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-carbon-300 transition group-hover:text-orange-600"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* International */}
      <section className="section border-t border-carbon-950/[0.06] bg-[rgb(250,250,250)]">
        <div className="container-x">
          <p className="eyebrow mb-8">🌍 International</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {internationalCities.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-carbon-950/[0.07] bg-white p-6 transition-all hover:border-orange-600/25 hover:shadow-[0_8px_32px_-8px_rgba(234,88,12,0.12)]"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{c.flag}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400">
                      {c.country}
                    </span>
                  </div>
                  <p className="mt-3 font-display text-xl font-bold tracking-[-0.025em] text-carbon-950 group-hover:text-orange-700">
                    {c.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-carbon-500">
                    {c.market}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-carbon-950/[0.06] pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-carbon-400">
                    from {c.starterPrice}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-carbon-300 transition group-hover:text-orange-600"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
