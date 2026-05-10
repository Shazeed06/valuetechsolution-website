import { X, Check } from "lucide-react";

const rows = [
  ["Pricing", "Hourly · vague scope", "Fixed price · written tradeoffs"],
  ["Team seniority", "Sold senior · built junior", "Senior-only · 6+ yrs avg"],
  ["AI agent quality", "Demo on stage · breaks in prod", "Evaluated · observable · versioned"],
  ["SEO output", "120-page audit PDF", "Fixes shipped, ranked, measured"],
  ["Project velocity", "Months of slide decks", "Weekly demo · monthly delivery"],
  ["Code ownership", "Locked into agency tools", "You own the repo, day one"],
  ["Reporting", "Vanity dashboards", "Pipeline-tied Looker boards"],
  ["After launch", "Disappear", "30-day tuning + retainer option"],
];

export default function Comparison() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="text-center">
          <span className="eyebrow">
            <span className="h-px w-8 bg-carbon-500" />
            How we differ
          </span>
          <h2 className="heading-lg gap-eyebrow-heading">
            Old-way agency.{" "}
            <span className="italic-accent text-carbon-500">vs Value Tech.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-carbon-500">
            Some of these are uncomfortable to say out loud. We say them
            anyway because we built this studio to fix them.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-carbon-950/[0.08]">
          {/* Header — desktop only */}
          <div className="hidden grid-cols-12 border-b border-carbon-950/[0.08] bg-snow-50 sm:grid">
            <div className="col-span-4 p-7 font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
              dimension
            </div>
            <div className="col-span-4 border-l border-carbon-950/[0.08] p-7 font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
              old-way agency
            </div>
            <div className="col-span-4 border-l border-carbon-950/[0.08] bg-carbon-950 p-7 font-mono text-[10px] uppercase tracking-[0.28em] text-white">
              value tech solution
            </div>
          </div>

          {rows.map(([dim, old, ours], i) => (
            <div
              key={dim}
              className={`${
                i !== rows.length - 1
                  ? "border-b border-carbon-950/[0.08]"
                  : ""
              } sm:grid sm:grid-cols-12`}
            >
              {/* Dimension */}
              <div className="border-b border-carbon-950/[0.08] bg-snow-50 p-5 sm:col-span-4 sm:border-b-0 sm:bg-transparent sm:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400 sm:hidden">
                  ({String(i + 1).padStart(2, "0")}) dimension
                </p>
                <p className="mt-1 font-display text-base font-bold tracking-[-0.01em] text-carbon-950 sm:mt-0 sm:text-base sm:font-medium">
                  {dim}
                </p>
              </div>

              {/* Old-way */}
              <div className="flex items-start gap-3 border-b border-carbon-950/[0.08] p-5 sm:col-span-4 sm:border-b-0 sm:border-l sm:p-7">
                <X size={14} className="mt-1 shrink-0 text-red-400" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400 sm:hidden">
                    old-way agency
                  </p>
                  <p className="mt-1 text-sm text-carbon-500 sm:mt-0">{old}</p>
                </div>
              </div>

              {/* Value Tech */}
              <div className="flex items-start gap-3 bg-carbon-950 p-5 text-white sm:col-span-4 sm:border-l sm:border-white/10 sm:p-7">
                <Check size={14} className="mt-1 shrink-0 text-emerald-400" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/55 sm:hidden">
                    value tech solution
                  </p>
                  <p className="mt-1 text-sm sm:mt-0">{ours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
