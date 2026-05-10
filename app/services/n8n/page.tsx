import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import CTA from "@/components/CTA";
import {
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/Schema";

export const metadata: Metadata = {
  title: "n8n Development · Workflow Automation",
  description:
    "Production-grade n8n workflows built by engineers — self-hosted, observable, version-controlled. Custom nodes, retries, and AI-step integrations included.",
  alternates: { canonical: "https://valuetechsolution.com/services/n8n" },
};

const faqs = [
  {
    q: "Why n8n over Zapier or Make?",
    a: "n8n is open-source and self-hostable, which means you own the runtime, the data, and the cost curve. There's no per-task pricing, no vendor lock-in, and you can write custom nodes in JavaScript when a connector is missing. We default to n8n for workflows that handle sensitive data or run at high volume.",
  },
  {
    q: "Do you host n8n for us?",
    a: "Both options. We can deploy n8n to your cloud (AWS, GCP, Hetzner, Render) with hardened defaults — TLS, basic auth, daily backups, observability — or use n8n Cloud if you'd rather not run infrastructure. We pick based on data sensitivity and team comfort.",
  },
  {
    q: "Can n8n integrate with AI agents?",
    a: "Yes — n8n's AI nodes connect directly to OpenAI, Anthropic, and Hugging Face. We build agent-style workflows where an LLM step decides routing, drafts content, or summarises an inbound message before downstream nodes execute. RAG patterns are supported via vector-store nodes.",
  },
  {
    q: "How do you handle errors and retries?",
    a: "Every production workflow ships with explicit error branches, exponential backoff retries, and idempotency keys for external API calls. Failures route to a Slack channel + log. We don't ship workflows that silently swallow errors.",
  },
];

export default function N8nPage() {
  return (
    <>
      <ServiceSchema
        name="n8n Development"
        serviceType="Workflow Automation"
        description="Production-grade n8n workflow automation, self-hosted, version-controlled, with custom nodes and AI-step integrations."
        url="https://valuetechsolution.com/services/n8n"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Services", url: "https://valuetechsolution.com/services" },
          { name: "n8n Development", url: "https://valuetechsolution.com/services/n8n" },
        ]}
      />

      <ServiceDetail
        eyebrow="n8n Development"
        title={
          <>
            Workflows you{" "}
            <span className="italic-accent text-carbon-500">own.</span>
            <br />
            Costs you can predict.
          </>
        }
        intro="n8n is an open-source workflow runtime — and the right choice when you want ownership, no per-task pricing, and the freedom to write custom nodes. We design, host, and operate n8n for teams that have outgrown Zapier."
        heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=80"
        heroAlt="Circuit board representing infrastructure"
        midImage="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=2200&q=80"
        midAlt="Code on screen"
        midCaption="(field) — workflows in production"
        midHeadline={
          <>
            Self-hosted. Observable.
            <br />
            <span className="italic-accent text-white/70">Version-controlled.</span>
          </>
        }
        context={[
          {
            title: "No per-task pricing surprises",
            body: (
              <>
                Zapier bills per task. At 100,000 tasks / month that's
                expensive. n8n self-hosted runs the same volume on a $20
                droplet. Your finance team will thank you.
              </>
            ),
          },
          {
            title: "Custom nodes for your weird systems",
            body: (
              <>
                When the connector you need doesn't exist — or rate-limits
                badly — we write a JavaScript custom node. Typed, tested,
                committed to the workflow repo.
              </>
            ),
          },
          {
            title: "Built-in AI nodes",
            body: (
              <>
                Connect OpenAI or Anthropic in one node. Build retrieval-
                augmented workflows with vector stores. Use LLM steps for
                routing, drafting, or summarisation inside any workflow.
              </>
            ),
          },
          {
            title: "Workflows live in git",
            body: (
              <>
                Every workflow exported to JSON, committed to git, code-
                reviewed, deployed via CI. Rollback is one revert away.
                That's the bar we hold ourselves to.
              </>
            ),
          },
        ]}
        features={[
          {
            title: "Workflow design",
            desc: "Diagrammed, scoped, and reviewed with your team before a single node is wired.",
          },
          {
            title: "Self-host or cloud",
            desc: "We deploy n8n to your AWS, GCP, Hetzner, or Render — or use n8n Cloud if you prefer.",
          },
          {
            title: "Custom nodes",
            desc: "JavaScript nodes for missing connectors, brittle APIs, or domain-specific logic.",
          },
          {
            title: "AI integrations",
            desc: "OpenAI, Anthropic, vector stores, and agent-style branching wired in.",
          },
          {
            title: "Error handling + retries",
            desc: "Explicit error branches, exponential backoff, idempotency, dead-letter queues.",
          },
          {
            title: "Observability",
            desc: "Logs, traces, run metrics piped to your Looker / Datadog / Grafana stack.",
          },
        ]}
        deliverables={[
          "Workflow audit + architecture diagram",
          "Production n8n instance (self-hosted or cloud)",
          "Workflows exported to git",
          "Custom nodes (where needed)",
          "Error routing + alerting in Slack",
          "Observability dashboard",
          "Runbook + handover walkthrough",
          "30-day post-launch tuning",
        ]}
        pricing={[
          {
            name: "Single workflow",
            price: "from $499",
            bullets: [
              "1 production workflow",
              "Up to 5 integrations",
              "Hosted on n8n Cloud",
              "2-week delivery",
            ],
          },
          {
            name: "Workflow suite",
            price: "from $1,999",
            highlight: true,
            bullets: [
              "5–8 connected workflows",
              "Self-hosted n8n on your cloud",
              "Custom nodes if needed",
              "4–6 week delivery",
            ],
          },
          {
            name: "n8n retainer",
            price: "from $1,199 / mo",
            bullets: [
              "Continuous workflow expansion",
              "Monitoring + tuning",
              "New workflow each month",
              "Dedicated automation engineer",
            ],
          },
        ]}
      />
      <CTA />
    </>
  );
}
