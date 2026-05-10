import AnimatedNumber from "./AnimatedNumber";

const stats = [
  { value: 80, suffix: "%", label: "Manual work removed", caption: "across 60+ engagements" },
  { value: 40, suffix: "hr", label: "Saved per week", caption: "median per team" },
  { value: 99, suffix: "", label: "Lighthouse score", caption: "enforced in CI" },
  { value: 14, suffix: "", label: "Countries served", caption: "remote-first" },
];

export default function Stats() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-8 sm:gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative pt-8 sm:pt-0 ${
                i > 0 ? "sm:border-l sm:border-carbon-950/[0.08] sm:pl-8" : ""
              }`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                ({String(i + 1).padStart(2, "0")})
              </p>
              <p className="mt-6 font-display text-7xl font-bold tracking-[-0.05em] text-carbon-950 lg:text-8xl">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-6 text-sm font-medium text-carbon-950">
                {s.label}
              </p>
              <p className="mt-1 text-xs text-carbon-400">{s.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
