import Marquee from "./Marquee";

const tools = [
  { name: "n8n", note: "workflow automation" },
  { name: "GoHighLevel", note: "CRM + funnels" },
  { name: "Zapier", note: "no-code glue" },
  { name: "Python", note: "custom pipelines" },
  { name: "OpenAI", note: "GPT-4o · o1" },
  { name: "Anthropic", note: "Claude 4.x" },
  { name: "Next.js", note: "edge-rendered web" },
  { name: "TypeScript", note: "typed everywhere" },
  { name: "PostgreSQL", note: "primary store" },
  { name: "Vercel", note: "edge hosting" },
  { name: "Figma", note: "design source" },
  { name: "Tailwind", note: "design tokens" },
];

export default function StackMarquee({
  invert = false,
}: {
  invert?: boolean;
}) {
  return (
    <section className="section-tight">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              Stack we ship on
            </span>
            <h2 className="heading-md mt-6 max-w-xl">
              Boring tooling.{" "}
              <span className="italic-accent text-carbon-500">
                Sharp execution.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-carbon-500">
            We pick proven tools so your stack ages well — and your next
            engineer ramps up in a day, not a month.
          </p>
        </div>
      </div>

      <Marquee
        speed={45}
        invert={invert}
        className={`mt-10 border-y ${
          invert
            ? "border-carbon-950"
            : "border-carbon-950/[0.08]"
        }`}
      >
        {tools.map((t) => (
          <span
            key={t.name}
            className="flex items-baseline gap-3 py-6 sm:py-8"
          >
            <span className="font-display text-3xl font-bold tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              {t.name}
            </span>
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.28em] ${
                invert ? "text-white/55" : "text-carbon-400"
              }`}
            >
              {t.note}
            </span>
            <span
              className={`mx-6 text-2xl sm:mx-10 ${
                invert ? "text-white/30" : "text-carbon-300"
              }`}
            >
              ✺
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
