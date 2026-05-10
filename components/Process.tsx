const steps = [
  ["P.01", "Discovery", "Goal, audience, success metric. Mapped before a single pixel is drawn."],
  ["P.02", "Design", "Wireframes → high-fidelity → a clickable prototype you can test."],
  ["P.03", "Build", "Production-grade Next.js, accessibility-checked, performance-budgeted."],
  ["P.04", "Launch", "Analytics, SEO, AI agents wired in. A 30-day post-launch sprint."],
];

export default function Process() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              How we work
            </span>
            <h2 className="heading-lg mt-8">
              Four stages,
              <br />
              <span className="italic-accent text-carbon-500">every project.</span>
            </h2>
          </div>

          <ul className="lg:col-span-8 lg:mt-3">
            {steps.map(([n, t, d], i) => (
              <li
                key={n}
                className={`grid grid-cols-12 items-baseline gap-6 py-8 ${
                  i !== 0 ? "border-t border-carbon-950/[0.08]" : ""
                }`}
              >
                <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.24em] text-carbon-400">
                  {n}
                </span>
                <p className="col-span-10 font-display text-2xl font-bold tracking-[-0.025em] sm:text-3xl">
                  {t}
                </p>
                <p className="col-span-10 col-start-3 max-w-md text-sm text-carbon-500">
                  {d}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
