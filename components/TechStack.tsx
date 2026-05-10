"use client";

const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Tailwind",
  "Vercel",
  "AWS",
  "Docker",
  "OpenAI",
  "LangChain",
  "Anthropic",
  "Stripe",
  "Shopify",
  "Webflow",
  "Figma",
];

export default function TechStack() {
  const row = [...tech, ...tech];
  return (
    <section className="section">
      <div className="container-x">
        <div className="text-center">
          <span className="eyebrow">Tech we wield</span>
          <h2 className="heading-lg mt-3">A modern, boring-on-purpose stack.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-carbon-400">
            We pick proven tooling so your codebase ages well — and onboarding
            the next engineer takes a day, not a month.
          </p>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent"
        />
        <div className="flex w-max gap-3 animate-marquee">
          {row.map((t, i) => (
            <span
              key={i}
              className="rounded-full border border-carbon-950/[0.08] bg-white px-5 py-2.5 text-sm font-medium text-carbon-700 shadow-ring"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
