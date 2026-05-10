import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import CTA from "@/components/CTA";
import {
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/Schema";

export const metadata: Metadata = {
  title: "Zapier Solutions · Fast App-to-App Automations",
  description:
    "Engineer-built Zapier automations across 6,000+ apps. Path branching, error handling, schedule logic, and AI-step integrations.",
  alternates: { canonical: "https://valuetechsolution.com/services/zapier" },
};

const faqs = [
  {
    q: "When does Zapier make sense over n8n or Make?",
    a: "Zapier wins on speed-to-value and breadth. If you need to wire 5–10 SaaS apps quickly, the connector library (6,000+) is unmatched. We default to Zapier for marketing and ops automations, lean on n8n for high-volume or sensitive-data flows, and use Make for visual scenario complexity.",
  },
  {
    q: "Can Zapier handle complex logic?",
    a: "Yes — Paths (branching), Filters (conditional run), Lookup tables, Schedule triggers, and Sub-Zaps cover most 'complex' workflows. When we hit a limit, we drop a Webhooks-by-Zapier node into a small Lambda or Cloudflare Worker for the heavy lifting.",
  },
  {
    q: "How do you control Zapier costs?",
    a: "We measure tasks per Zap on test data, then choose the right plan. We deduplicate triggers, add Filters early to avoid wasted tasks, and route high-volume flows to n8n self-hosted when ROI calls for it. Monthly Zapier-cost reports included on retainers.",
  },
  {
    q: "Do you write custom Zapier apps?",
    a: "When a connector is missing or broken, yes — we build private Zapier integrations using the Zapier Platform CLI. Triggers, actions, dynamic dropdowns, OAuth — typed, tested, versioned.",
  },
];

export default function ZapierPage() {
  return (
    <>
      <ServiceSchema
        name="Zapier Solutions"
        serviceType="No-code Automation"
        description="Production-grade Zapier automations across 6,000+ apps with path branching, error handling, and AI-step integrations."
        url="https://valuetechsolution.com/services/zapier"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Services", url: "https://valuetechsolution.com/services" },
          { name: "Zapier Solutions", url: "https://valuetechsolution.com/services/zapier" },
        ]}
      />

      <ServiceDetail
        eyebrow="Zapier · no-code automation"
        title={
          <>
            6,000 apps.{" "}
            <span className="italic-accent text-carbon-500">
              One thread.
            </span>
          </>
        }
        intro="Zapier is the fastest way to wire SaaS tools together — when you set it up like a senior engineer would. We build Zaps with proper Paths, Filters, error routing, and cost-aware triggers. No tag soup."
        heroImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2200&q=80"
        heroAlt="Engineer wiring app integrations"
        midImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2200&q=80"
        midAlt="Workstation in soft light"
        midCaption="(field) — fastest path to value"
        midHeadline={
          <>
            Triggers. Paths. Filters.
            <br />
            <span className="italic-accent text-white/70">All measured.</span>
          </>
        }
        context={[
          {
            title: "Zapier breaks when scoped lazily",
            body: (
              <>
                A Zap with no Filter triggers on every event. A Zap with no
                error handling silently drops your data. We scope Filters
                first, log every failure, and alert on threshold breaches.
              </>
            ),
          },
          {
            title: "Tasks are billable — design for that",
            body: (
              <>
                Filters before steps. Lookup tables instead of API hits. We
                cut typical task usage 30–50% on Zaps we inherit, just by
                ordering the steps correctly.
              </>
            ),
          },
          {
            title: "AI inside Zapier",
            body: (
              <>
                The OpenAI and Anthropic Zapier apps let us drop classification,
                summarisation, or draft-generation directly into a Zap. Useful
                for inbound triage, content extraction, or qualification.
              </>
            ),
          },
          {
            title: "Custom Zapier apps when needed",
            body: (
              <>
                Missing connector? Brittle one? We ship private Zapier apps
                via the Platform CLI — typed, tested, with OAuth — into your
                Zapier workspace.
              </>
            ),
          },
        ]}
        features={[
          {
            title: "Zap design + scoping",
            desc: "Diagrammed flows, Filter logic, error branches, cost estimates before we wire.",
          },
          {
            title: "Paths + Sub-Zaps",
            desc: "Branching logic and reusable Sub-Zaps to keep the workspace maintainable.",
          },
          {
            title: "AI steps",
            desc: "OpenAI and Anthropic steps for classification, drafting, and summarisation.",
          },
          {
            title: "Custom Zapier apps",
            desc: "Private integrations via the Zapier Platform CLI when no connector exists.",
          },
          {
            title: "Error routing",
            desc: "Failed runs route to Slack with payload, retry rules, and dead-letter handling.",
          },
          {
            title: "Cost optimisation",
            desc: "Filters first, lookup tables, and consolidated Zaps to keep task usage lean.",
          },
        ]}
        deliverables={[
          "Zapier audit (if existing workspace)",
          "Zap library — designed and built",
          "Paths + Sub-Zaps for shared logic",
          "Custom Zapier apps (where needed)",
          "Error alerting in Slack",
          "Monthly task-cost report",
          "Zap documentation in Notion",
          "Handover walkthrough",
        ]}
        pricing={[
          {
            name: "Zap sprint",
            price: "from $299",
            bullets: [
              "Up to 5 production Zaps",
              "Filters + error routing",
              "Documented in Notion",
              "1-week delivery",
            ],
          },
          {
            name: "Workspace build",
            price: "from $1,299",
            highlight: true,
            bullets: [
              "Up to 20 Zaps + Sub-Zaps",
              "Custom Zapier app (1 incl.)",
              "Cost optimisation pass",
              "3–4 week delivery",
            ],
          },
          {
            name: "Zapier retainer",
            price: "from $599 / mo",
            bullets: [
              "New Zaps every month",
              "Monitoring + cost reports",
              "Audit + tuning",
              "Dedicated automation engineer",
            ],
          },
        ]}
      />
      <CTA />
    </>
  );
}
