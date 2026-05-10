const logos = [
  "Northwind",
  "Lumen Health",
  "Forge AI",
  "Coastline",
  "Mosaic Labs",
  "Vertex Co.",
  "Halcyon",
  "Quanta",
];

export default function LogoCloud() {
  return (
    <section className="relative pb-8 pt-12">
      <div className="container-x">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.3em] text-carbon-300">
          Trusted by founders & teams worldwide
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {logos.map((l) => (
            <span
              key={l}
              className="text-center font-display text-lg italic text-carbon-300 transition hover:text-carbon-950"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
