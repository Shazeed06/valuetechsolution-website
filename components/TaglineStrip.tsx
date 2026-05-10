import Marquee from "./Marquee";
import { Asterisk } from "lucide-react";

const items = [
  "Engineer the work",
  "Automate the rest",
  "Ship the future",
  "Built by engineers",
  "Quiet AI · Loud results",
  "80% less manual work",
];

export default function TaglineStrip({
  invert = true,
}: {
  invert?: boolean;
}) {
  return (
    <div
      className={`relative border-y ${
        invert
          ? "border-carbon-950 bg-carbon-950 text-white"
          : "border-carbon-950/[0.08] bg-[rgb(252,251,249)] text-carbon-950"
      }`}
    >
      <Marquee speed={60} invert={invert} className="py-7 sm:py-10">
        {items.map((it) => (
          <span
            key={it}
            className="flex items-center gap-12 font-display text-3xl font-bold uppercase tracking-[-0.02em] sm:text-4xl lg:text-5xl"
          >
            {it}
            <Asterisk
              size={20}
              className={invert ? "text-white/60" : "text-carbon-400"}
            />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
