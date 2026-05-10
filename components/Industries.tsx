import {
  ShoppingBag,
  HeartPulse,
  Rocket,
  Building2,
  Globe2,
  Store,
} from "lucide-react";
import Reveal, { StaggerGroup, StaggerItem } from "./Reveal";

const items = [
  { icon: Rocket, label: "Tech Startups", note: "MVP → Series A" },
  { icon: ShoppingBag, label: "E-Commerce", note: "Shopify · Custom" },
  { icon: Globe2, label: "Export Houses", note: "Multi-region" },
  { icon: HeartPulse, label: "Healthcare", note: "HIPAA-aware" },
  { icon: Store, label: "Local Business", note: "Local SEO" },
  { icon: Building2, label: "Enterprise", note: "Internal tools" },
];

export default function Industries() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Industries we serve</span>
              <h2 className="heading-lg mt-3">Built for teams that ship.</h2>
            </div>
            <p className="max-w-md text-carbon-400">
              We work across categories — but we go deep on the patterns each
              one actually needs, instead of selling the same template to
              everyone.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {items.map((it) => (
            <StaggerItem key={it.label}>
              <div className="card group h-full text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-snow-100 text-carbon-950 transition group-hover:bg-carbon-950 group-hover:text-white">
                  <it.icon size={20} />
                </div>
                <p className="mt-3 text-sm font-semibold text-carbon-950">
                  {it.label}
                </p>
                <p className="text-xs text-carbon-300">{it.note}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
