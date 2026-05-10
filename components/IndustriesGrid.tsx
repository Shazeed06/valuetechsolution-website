import {
  HeartPulse,
  Building2,
  Rocket,
  ShoppingBag,
  Truck,
  Banknote,
  Megaphone,
} from "lucide-react";

const items = [
  {
    n: "I.01",
    icon: HeartPulse,
    name: "Healthcare & Pharma",
    note: "HIPAA-aware patient ops, clinical document workflows, regulatory drafting assistants.",
  },
  {
    n: "I.02",
    icon: Building2,
    name: "Real Estate",
    note: "Listing intake, lead qualification, document chase, and 24/7 chat across portfolios.",
  },
  {
    n: "I.03",
    icon: Rocket,
    name: "SaaS & Tech Startups",
    note: "Onboarding sequences, support deflection, in-product copilots, churn-signal agents.",
  },
  {
    n: "I.04",
    icon: ShoppingBag,
    name: "Retail & E-Commerce",
    note: "Order ops, returns triage, review aggregation, AI personal-shopper agents.",
  },
  {
    n: "I.05",
    icon: Truck,
    name: "Manufacturing & Logistics",
    note: "Quote desk automation, EDI parsing, freight tracking, supplier reconciliation.",
  },
  {
    n: "I.06",
    icon: Banknote,
    name: "Financial Services",
    note: "Compliance summarisation, KYC workflows, reporting agents, internal Q&A on policy.",
  },
  {
    n: "I.07",
    icon: Megaphone,
    name: "Marketing Agencies",
    note: "White-label automations, reporting copilots, content production pipelines.",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              Industries we serve
            </span>
            <h2 className="heading-lg mt-8">
              Seven verticals.{" "}
              <span className="italic-accent text-carbon-500">
                One playbook each.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-carbon-500">
            We've shipped enough engagements in each of these to know the
            patterns that work — and the ones that quietly waste budget.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.n}
              className={`flex flex-col bg-[rgb(252,251,249)] p-7 transition-colors duration-500 hover:bg-white sm:p-8 ${
                i === items.length - 1 ? "lg:col-span-3" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                  {it.n}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-carbon-950/15 bg-white text-carbon-950">
                  <it.icon size={16} />
                </span>
              </div>
              <h3 className="mt-7 font-display text-2xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-3xl">
                {it.name}
              </h3>
              <p className="mt-3 max-w-md text-sm text-carbon-500">{it.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
