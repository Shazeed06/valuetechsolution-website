import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import AutomationShowcase from "@/components/AutomationShowcase";
import AIArchitecture from "@/components/AIArchitecture";
import AIAgents from "@/components/AIAgents";
import AutomationPlatforms from "@/components/AutomationPlatforms";
import IndustriesGrid from "@/components/IndustriesGrid";
import CTA from "@/components/CTA";
import {
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/Schema";

export const metadata: Metadata = {
  title: "AI Automation Agency India · AI Agent Development",
  description:
    "AI automation agency in India — AI agent development, RAG systems, and workflow automation on n8n, GHL, Zapier, Python. Trusted by Delhi & Bangalore startups, saving 40+ hours/week.",
  keywords: [
    "AI automation agency India",
    "AI automation agency Delhi",
    "AI agent development India",
    "AI workflow automation India",
    "AI consultant India",
    "custom AI agent development",
  ],
  alternates: { canonical: "https://valuetechsolution.com/services/ai-automation" },
  openGraph: {
    title: "AI Automation — Value Tech Solution",
    description:
      "AI agents and automations on n8n, GoHighLevel, Zapier, Python. Engineered, evaluated, observable.",
    url: "https://valuetechsolution.com/services/ai-automation",
  },
};

const faqs = [
  {
    q: "What does an AI automation project look like at Value Tech Solution?",
    a: "We start with a 2-week diagnostic that maps your repeat workflows, identifies the highest-leverage automations, and quantifies expected hours saved. Then we ship one production-grade agent or workflow at a time — each with evals, guardrails, observability, and a 30-day post-launch tuning window.",
  },
  {
    q: "Which platforms do you build automations on?",
    a: "We're platform-agnostic. We build on n8n (open-source, self-hosted), Make.com (visual scenarios), Zapier (no-code, 6,000+ apps), GoHighLevel (CRM + funnels), and custom Python or Node.js when SaaS connectors fall short. We pick the right tool for the workflow.",
  },
  {
    q: "How much manual work do your AI agents typically remove?",
    a: "Across 60+ engagements, our AI workflows remove on average 80% of manual time spent on repetitive tasks — triage, drafting, reporting, and follow-up. The median team saves around 40 hours per week within the first 60 days.",
  },
  {
    q: "Do you support RAG and multi-agent systems?",
    a: "Yes. We build retrieval-augmented agents grounded in your knowledge base with citations and access controls, and we orchestrate multi-agent systems (planner → executor → evaluator) for complex pipelines like research, content production, and ops automation.",
  },
  {
    q: "How quickly can you ship a first agent to production?",
    a: "Most first-agent engagements ship in 4–6 weeks: 2 weeks scoping and integration, 2–3 weeks building and evaluating, 1 week tuning. Some scoped MVPs go live in under 3 weeks.",
  },
  {
    q: "Which industries do you have experience in?",
    a: "Healthcare and pharma (HIPAA-aware), real estate, SaaS and tech startups, retail and e-commerce (Shopify and headless), manufacturing and logistics, financial services, and marketing agencies.",
  },
];

export default function AIPage() {
  return (
    <>
      <ServiceSchema
        name="AI Automation"
        serviceType="AI Automation"
        description="Custom AI agents, RAG solutions, multi-agent systems, and workflow automations on n8n, GHL, Zapier, and Python."
        url="https://valuetechsolution.com/services/ai-automation"
        offers={[
          { name: "Diagnostic", price: "399" },
          { name: "First Agent", price: "1999" },
          { name: "Automation Retainer", price: "1499" },
        ]}
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Services", url: "https://valuetechsolution.com/services" },
          {
            name: "AI Automation",
            url: "https://valuetechsolution.com/services/ai-automation",
          },
        ]}
      />

      <ServiceDetail
        eyebrow="AI Automation · flagship"
        title={
          <>
            Cut human work by{" "}
            <span className="italic-accent text-carbon-500">80%.</span>
            <br />
            Reclaim{" "}
            <span className="italic-accent text-carbon-500">40 hours</span> a
            week.
          </>
        }
        intro="We map the repeat workflows in your business, identify where an LLM can be reliable (and where it can't), and ship agents that connect your tools — Slack, Gmail, HubSpot, GHL, your database — with guardrails, evals, and observability built in."
        heroImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2200&q=80"
        heroAlt="Abstract neural network visualisation"
        midImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2200&q=80"
        midAlt="AI workspace abstract"
        midCaption="(field) — agents in production"
        midHeadline={
          <>
            Built like software, not demos.
            <br />
            <span className="italic-accent text-white/70">
              Versioned, evaluated, observable.
            </span>
          </>
        }
        context={[
          {
            title: "Most AI agencies are marketers",
            body: (
              <>
                They wrap a chatbot, ship a demo, disappear. We&apos;re
                engineers — we ship agents that survive contact with
                production traffic, with evals to prove it.
              </>
            ),
          },
          {
            title: "Most agents fail silently",
            body: (
              <>
                We instrument every workflow with traces, accuracy
                dashboards, and human-in-the-loop checkpoints. You&apos;ll
                always know what your AI is doing.
              </>
            ),
          },
          {
            title: "Most projects stall on integration",
            body: (
              <>
                Slack, HubSpot, Notion, Linear, GHL, your CRM, your DB —
                we&apos;ve wired all of them. Integration day is week one,
                not week six.
              </>
            ),
          },
          {
            title: "Most ROI claims are vague",
            body: (
              <>
                Median engagement: 80% manual work removed, 40 hours saved
                per team per week, payback inside 90 days. We track it,
                publish it, and stand behind it.
              </>
            ),
          },
        ]}
        features={[
          {
            title: "Workflow audit",
            desc: "Two-week diagnostic to surface the highest-leverage automations and the ones to skip.",
          },
          {
            title: "Custom agents",
            desc: "Built on OpenAI, Anthropic, or open-source — picked for the task, not the hype cycle.",
          },
          {
            title: "Tool integrations",
            desc: "Slack, Gmail, HubSpot, GHL, Notion, Linear, Sheets, your CRM, your database — wired and tested.",
          },
          {
            title: "Guardrails & evals",
            desc: "Output validation, human-in-the-loop checkpoints, and an eval suite for every critical flow.",
          },
          {
            title: "Observability",
            desc: "Traces, costs, and accuracy dashboards so you actually know what your agents are doing.",
          },
          {
            title: "Team enablement",
            desc: "Documentation, runbooks, and live training so your team can extend the agents themselves.",
          },
        ]}
        deliverables={[
          "Workflow audit + automation roadmap",
          "Production agents deployed",
          "Tool integrations (5–10 systems)",
          "Eval suite for each agent",
          "Observability dashboard",
          "Runbooks + handover docs",
          "Team training session",
          "30-day post-launch tuning",
        ]}
        pricing={[
          {
            name: "Diagnostic",
            price: "from $399",
            bullets: [
              "2-week workflow audit",
              "Automation opportunity map",
              "ROI estimates per workflow",
              "Build/buy/skip recommendations",
            ],
          },
          {
            name: "First Agent",
            price: "from $1,999",
            highlight: true,
            bullets: [
              "1 production-grade agent",
              "Up to 5 tool integrations",
              "Eval suite + observability",
              "Delivery in 4–6 weeks",
            ],
          },
          {
            name: "Automation Retainer",
            price: "from $1,499 / mo",
            bullets: [
              "Continuous agent expansion",
              "Monitoring + tuning",
              "New workflow each month",
              "Dedicated AI engineer",
            ],
          },
        ]}
      />

      <AIArchitecture />
      <AIAgents />
      <AutomationPlatforms />
      <IndustriesGrid />
      <AutomationShowcase />
      <CTA />
    </>
  );
}
