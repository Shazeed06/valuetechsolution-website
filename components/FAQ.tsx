"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What does an 'AI automation' project actually look like?",
    a: "We map your repeat workflows, identify the ones an LLM can do reliably, and ship agents that connect your tools. Typical wins: lead qualification, content drafting, support triage, and ops reporting. Most clients see 30–50 hours/week saved within 6 weeks.",
  },
  {
    q: "How long does a typical website project take?",
    a: "Most marketing sites ship in 4–6 weeks. Web apps take 8–14 weeks depending on scope. We send a fixed timeline with the proposal so there are no surprises.",
  },
  {
    q: "Do you offer fixed pricing or hourly billing?",
    a: "Both, but we default to fixed-scope, fixed-price engagements. It forces us to be precise about scope and removes the incentive to drag work out.",
  },
  {
    q: "Can you take over an existing website?",
    a: "Yes. We do a free 1-hour audit of the current codebase, infrastructure, and SEO health, then propose either incremental fixes or a clean rebuild — whichever serves you better.",
  },
  {
    q: "Do you handle hosting and ongoing maintenance?",
    a: "We deploy to Vercel, Netlify, or your cloud of choice and offer monthly retainers covering uptime, security patches, content updates, and SEO performance.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">FAQ</span>
            <h2 className="heading-lg mt-3">Common questions, answered.</h2>
            <p className="mt-4 text-carbon-400">
              Don't see yours? Drop us a line — we reply within a business day.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-carbon-950/[0.08] bg-white shadow-ring">
              {faqs.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`w-full p-6 text-left transition ${
                    i !== 0 ? "border-t border-carbon-950/[0.08]" : ""
                  } ${open === i ? "bg-snow-50" : "hover:bg-snow-50/60"}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-lg text-carbon-950 sm:text-xl">
                      {f.q}
                    </h3>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-carbon-950/15 bg-white text-carbon-950">
                      {open === i ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </div>
                  {open === i && (
                    <p className="mt-3 text-sm leading-relaxed text-carbon-500">
                      {f.a}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
