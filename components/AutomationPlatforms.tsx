"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const platforms = [
  {
    n: "P.01",
    name: "n8n Development",
    blurb:
      "Self-hosted, open-source workflow engine. Ideal when you want ownership of the runtime and complex branching logic without per-task pricing.",
    badge: "Open-source · self-hosted",
  },
  {
    n: "P.02",
    name: "Make.com Workflows",
    blurb:
      "Visual scenario builder that handles error branches, iterators, and aggregators cleanly. Great for ops teams that want to extend automations themselves.",
    badge: "Visual · low-code",
  },
  {
    n: "P.03",
    name: "Zapier Solutions",
    blurb:
      "Fastest path from idea to running automation across 6,000+ apps. We use Zapier when speed-to-value beats every other tradeoff.",
    badge: "No-code · 6,000+ apps",
  },
  {
    n: "P.04",
    name: "Custom API Integration",
    blurb:
      "When a SaaS connector is missing, brittle, or rate-limited, we ship a typed API service in Node or Python — versioned, observable, retried.",
    badge: "Bespoke · production-grade",
  },
  {
    n: "P.05",
    name: "Marketing Automation",
    blurb:
      "Drip campaigns, lead scoring, attribution, and lifecycle journeys built in HubSpot, GHL, Customer.io, or directly on your CDP.",
    badge: "Lifecycle · attribution",
  },
  {
    n: "P.06",
    name: "Sales Operations",
    blurb:
      "CRM hygiene, pipeline reports, automated follow-up sequences, and meeting-note enrichment — so your reps spend time selling, not admin.",
    badge: "CRM · pipeline · enablement",
  },
  {
    n: "P.07",
    name: "E-Commerce Automation",
    blurb:
      "Order routing, inventory sync, returns handling, and review aggregation across Shopify, WooCommerce, and headless storefronts.",
    badge: "Shopify · headless",
  },
  {
    n: "P.08",
    name: "Finance & Accounting",
    blurb:
      "Invoice ingestion, ledger sync, AR/AP reminders, and month-end reporting — wired into Xero, QuickBooks, or your ERP.",
    badge: "AR · AP · reporting",
  },
];

export default function AutomationPlatforms() {
  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = list.current?.querySelectorAll("li") ?? [];
      gsap.fromTo(
        items,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.06,
          scrollTrigger: { trigger: list.current, start: "top 80%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              Automation platforms
            </span>
            <h2 className="heading-lg mt-8">
              Eight ways
              <br />
              to <span className="italic-accent text-carbon-500">automate.</span>
            </h2>
            <p className="lede mt-8 max-w-md">
              We're platform-agnostic. We pick the tool that fits the
              workflow — not the tool we sell licenses for.
            </p>
          </div>

          <ul ref={list} className="lg:col-span-8 lg:mt-3">
            {platforms.map((p, i) => (
              <li
                key={p.n}
                className={`grid grid-cols-12 items-start gap-6 py-8 ${
                  i !== 0 ? "border-t border-carbon-950/[0.08]" : ""
                }`}
              >
                <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.24em] text-carbon-400">
                  {p.n}
                </span>
                <div className="col-span-10 grid grid-cols-12 items-baseline gap-4">
                  <h3 className="col-span-12 font-display text-2xl font-bold tracking-[-0.025em] text-carbon-950 sm:col-span-5 sm:text-3xl">
                    {p.name}
                  </h3>
                  <p className="col-span-12 text-sm leading-relaxed text-carbon-500 sm:col-span-7 sm:max-w-md">
                    {p.blurb}
                  </p>
                  <span className="col-span-12 sm:col-start-6 sm:col-span-7">
                    <span className="inline-flex rounded-full border border-carbon-950/15 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-carbon-700">
                      {p.badge}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
