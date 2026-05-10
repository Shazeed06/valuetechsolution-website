import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import CTA from "@/components/CTA";
import {
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/Schema";

export const metadata: Metadata = {
  title: "Python Automation · Custom Pipelines & Scripts",
  description:
    "Custom Python automations, ETL pipelines, scraping, scheduled jobs, and AI-augmented scripts engineered to run reliably in production.",
  alternates: {
    canonical: "https://valuetechsolution.com/services/python-automation",
  },
};

const faqs = [
  {
    q: "When do you reach for Python over a no-code tool?",
    a: "When the workflow has heavy data transformation, complex business logic, scientific or ML steps, or when the volume makes per-task pricing untenable. Python gives us full control over performance, dependencies, and observability — and ships as a typed, tested service.",
  },
  {
    q: "Where do your Python jobs run?",
    a: "Whichever runtime fits — AWS Lambda for short jobs, Cloud Run / Render for HTTP services, Hetzner / Fly.io for long-running workers, GitHub Actions or Modal for scheduled batch jobs. We pick based on cold-start tolerance, concurrency, and cost.",
  },
  {
    q: "Do you handle scraping legally and reliably?",
    a: "We respect robots.txt, rate-limits, and Terms of Service. For sites that allow it, we use Playwright + a proxy rotation, write idempotent jobs, store raw + parsed snapshots, and ship a dashboard so you see freshness and failure rates.",
  },
  {
    q: "Can you wire AI into a Python pipeline?",
    a: "Yes. We use OpenAI and Anthropic SDKs, plus LangChain or LlamaIndex when we need orchestration. Embedding pipelines, vector stores (pgvector, Pinecone, Weaviate), evaluation suites — all standard.",
  },
];

export default function PythonAutomationPage() {
  return (
    <>
      <ServiceSchema
        name="Python Automation"
        serviceType="Custom Automation Engineering"
        description="Custom Python pipelines, ETL, scraping, scheduled jobs, and AI-augmented scripts engineered for production reliability."
        url="https://valuetechsolution.com/services/python-automation"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Services", url: "https://valuetechsolution.com/services" },
          {
            name: "Python Automation",
            url: "https://valuetechsolution.com/services/python-automation",
          },
        ]}
      />

      <ServiceDetail
        eyebrow="Python · custom automation"
        title={
          <>
            When SaaS connectors{" "}
            <span className="italic-accent text-carbon-500">
              run out of road.
            </span>
          </>
        }
        intro="Some workflows are too big, too sensitive, or too custom for a no-code tool. That's where Python comes in — typed services, scheduled jobs, ETL pipelines, scraping, AI-augmented scripts. Engineered like software, not glue."
        heroImage="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=2200&q=80"
        heroAlt="Python code on screen"
        midImage="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=2200&q=80"
        midAlt="Engineering workspace"
        midCaption="(field) — typed · tested · observable"
        midHeadline={
          <>
            Type-safe pipelines.
            <br />
            <span className="italic-accent text-white/70">
              Predictable runtime.
            </span>
          </>
        }
        context={[
          {
            title: "When data volume kills no-code economics",
            body: (
              <>
                A 1M-row daily ETL on Zapier is a $5,000/month bill. Same job
                on a Lambda + S3 runs for under $100. We migrate workflows to
                Python when the math demands it.
              </>
            ),
          },
          {
            title: "When the logic is genuinely complex",
            body: (
              <>
                Recursion, graph algorithms, state machines, fuzzy
                deduplication, scientific math — these belong in Python, not
                a node graph. We write clean code, tested, with type hints.
              </>
            ),
          },
          {
            title: "When you need true observability",
            body: (
              <>
                Structured logs, OpenTelemetry traces, Sentry error tracking,
                Prometheus metrics — Python pipelines we ship are
                instrumented from the first commit.
              </>
            ),
          },
          {
            title: "When AI is doing real work",
            body: (
              <>
                Embedding pipelines, RAG systems, agent loops, evaluation
                harnesses — building these in Python (with LangChain or
                LlamaIndex when it earns its keep) keeps you in control.
              </>
            ),
          },
        ]}
        features={[
          {
            title: "ETL + data pipelines",
            desc: "Pandas / Polars / DuckDB pipelines, scheduled batch jobs, idempotent re-runs.",
          },
          {
            title: "Scraping + ingestion",
            desc: "Playwright + proxy rotation, polite rate-limiting, raw + parsed snapshots stored.",
          },
          {
            title: "API services",
            desc: "FastAPI services with typed request/response, OpenAPI specs, deployed to Cloud Run / Render.",
          },
          {
            title: "Scheduled jobs",
            desc: "GitHub Actions, Modal, or APScheduler — picked for cold-start and concurrency profile.",
          },
          {
            title: "AI + LLM pipelines",
            desc: "OpenAI / Anthropic SDKs, LangChain when warranted, vector stores, eval harnesses.",
          },
          {
            title: "Observability",
            desc: "Structured logs, OpenTelemetry traces, Sentry, Prometheus metrics — instrumented from day one.",
          },
        ]}
        deliverables={[
          "System architecture diagram",
          "Typed Python codebase (mypy strict)",
          "CI pipeline with tests + linting",
          "Deployed runtime (Lambda / Cloud Run / Render)",
          "Observability dashboard",
          "Eval suite (if AI-involved)",
          "Runbook + on-call doc",
          "Handover walkthrough + Loom",
        ]}
        pricing={[
          {
            name: "Script sprint",
            price: "from $1,400",
            bullets: [
              "Single Python script or job",
              "Up to 3 integrations",
              "Deployed + scheduled",
              "1–2 week delivery",
            ],
          },
          {
            name: "Pipeline build",
            price: "from $7,500",
            highlight: true,
            bullets: [
              "Multi-stage data pipeline",
              "Typed FastAPI service",
              "Observability + tests",
              "4–6 week delivery",
            ],
          },
          {
            name: "Engineering retainer",
            price: "from $4,800 / mo",
            bullets: [
              "Continuous Python work",
              "New scripts each month",
              "On-call for scheduled jobs",
              "Dedicated Python engineer",
            ],
          },
        ]}
      />
      <CTA />
    </>
  );
}
