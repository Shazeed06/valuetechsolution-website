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
          <h2 className="heading-lg mt-8">
            Old-way agency.{" "}
            <span className="italic-accent text-carbon-500">vs Value Tech.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-carbon-500">
            Some of these are uncomfortable to say out loud. We say them
            anyway because we built this studio to fix them.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-carbon-950/[0.08]">
          <div className="grid grid-cols-12 border-b border-carbon-950/[0.08] bg-snow-50">
            <div className="col-span-4 p-5 font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400 sm:p-7">
              dimension
            </div>
            <div className="col-span-4 border-l border-carbon-950/[0.08] p-5 font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400 sm:p-7">
              old-way agency
            </div>
            <div className="col-span-4 border-l border-carbon-950/[0.08] bg-carbon-950 p-5 font-mono text-[10px] uppercase tracking-[0.28em] text-white sm:p-7">
              value tech solution
            </div>
          </div>

          {rows.map(([dim, old, ours], i) => (
            <div
              key={dim}
              className={`grid grid-cols-12 ${
                i !== rows.length - 1
                  ? "border-b border-carbon-950/[0.08]"
                  : ""
              }`}
            >
              <div className="col-span-4 flex items-center p-5 text-sm font-medium text-carbon-950 sm:p-7 sm:text-base">
                {dim}
              </div>
              <div className="col-span-4 flex items-start gap-3 border-l border-carbon-950/[0.08] p-5 text-sm text-carbon-500 sm:p-7">
                <X size={14} className="mt-1 shrink-0 text-red-400" />
                <span>{old}</span>
              </div>
              <div className="col-span-4 flex items-start gap-3 border-l border-carbon-950/[0.08] bg-carbon-950 p-5 text-sm text-white sm:p-7">
                <Check size={14} className="mt-1 shrink-0 text-emerald-400" />
                <span>{ours}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
