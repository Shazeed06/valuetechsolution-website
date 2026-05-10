export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  stack: string[];
  hero: string;
  heroAlt: string;
  oneLiner: string;
  outcome: { label: string; value: string }[];
  challenge: string;
  approach: string[];
  delivery: string[];
  reflection: string;
  pull: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "ai-lead-routing-for-a-b2b-saas",
    category: "AI Automation",
    title:
      "How an AI triage agent cut a B2B SaaS team's lead-response time from hours to under a minute.",
    client: "Anonymised · early-stage B2B SaaS",
    industry: "SaaS",
    duration: "5 weeks",
    stack: ["n8n", "OpenAI", "HubSpot", "Slack", "Postgres"],
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Pipeline analytics on a dashboard",
    oneLiner:
      "Inbound forms were piling into a shared inbox. The team replied when they could, and lost deals when they couldn't. We replaced the inbox with an agent.",
    outcome: [
      { label: "Median response time", value: "from 4h to 47s" },
      { label: "Reply quality (human-rated)", value: "4.6 / 5" },
      { label: "Manual triage hours saved", value: "26 / week" },
      { label: "Booking rate on triaged leads", value: "+38%" },
    ],
    challenge:
      "A small founder-led GTM team was getting 50–80 inbound enquiries a week through three forms and a shared inbox. Replies often took hours. High-intent prospects sometimes waited two days. The team wanted speed without losing the human voice that converted.",
    approach: [
      "Mapped intents — pricing, demo, integration question, partnership, recruiter — and what a great human reply looked like for each.",
      "Wired n8n to read the form webhook, classify intent with a small OpenAI call, and look up enrichment via Clearbit + the team's HubSpot.",
      "Built a draft generator grounded in the company's voice doc, past wins, pricing, and calendar links. Each draft posted to Slack with one-click approve.",
      "Added a confidence threshold — high-confidence replies auto-send; ambiguous ones wait for the human.",
    ],
    delivery: [
      "Production n8n workflow, version-controlled in git",
      "OpenAI eval suite — 60 golden examples, run on every prompt change",
      "Slack approval inbox + history",
      "HubSpot CRM enrichment + opportunity creation",
      "Looker Studio dashboard tracking response time and booking rate",
      "Runbook + Loom walkthrough for the GTM team",
    ],
    reflection:
      "The hardest part wasn't the agent. It was getting the voice doc tight enough that drafts felt like the founder, not a chatbot. Six iterations and a Friday afternoon of pair-writing later — the team trusts the auto-send.",
    pull: "We didn't replace the founder's voice. We taught it to scale.",
  },
  {
    slug: "ecommerce-ops-automation-on-ghl-and-zapier",
    category: "Automation",
    title:
      "Stitching Shopify, GoHighLevel, and a finance sheet into one ops loop.",
    client: "Anonymised · DTC food brand",
    industry: "E-Commerce",
    duration: "3 weeks",
    stack: ["GoHighLevel", "Zapier", "Shopify", "Google Sheets", "Slack"],
    hero: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Operations workspace",
    oneLiner:
      "Three tools, four spreadsheets, and one founder doing 12 hours a week of copy-paste. We collapsed it into one loop.",
    outcome: [
      { label: "Manual ops time", value: "from 12h to 1h / week" },
      { label: "Order-to-fulfilment SLA", value: "from 38h to 9h" },
      { label: "Review-request open rate", value: "+82%" },
      { label: "Founder hours returned", value: "44 / month" },
    ],
    challenge:
      "An emerging DTC food brand was running orders through Shopify, customer journeys through GoHighLevel, and finances through a personal Google Sheet. Every Friday the founder spent 4 hours reconciling. Returns were slow, review requests were inconsistent, and missed-call text-back was set up but never wired.",
    approach: [
      "Audited every existing automation in GHL and Zapier — kept what worked, rewrote what was duct-taped.",
      "Wired Shopify order events through Zapier into GHL contacts, with cohort tagging by product line.",
      "Set up post-purchase review-request flows on the right SKU-level cadence.",
      "Built a Python micro-service to push daily Stripe + Shopify summary into the founder's finance sheet.",
      "Wired missed-call text-back to a real GHL workflow that books a callback automatically.",
    ],
    delivery: [
      "Cleaned-up GHL account with documented tag ontology",
      "8 production Zaps with error routing into Slack",
      "Daily finance digest job (Python on Cloud Run)",
      "Review-request workflow tied to fulfilment events",
      "Looker Studio reconciling Shopify revenue with finance sheet",
      "Runbook + 30-min Loom",
    ],
    reflection:
      "The brand didn't need new tools — they needed the ones they had to actually talk to each other. The wins were boring, predictable, and worth their weight in founder-hours.",
    pull: "Automation isn't always sexy. Sometimes it's just clean plumbing.",
  },
];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
