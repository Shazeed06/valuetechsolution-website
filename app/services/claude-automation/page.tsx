import type { Metadata } from "next";
import CTA from "@/components/CTA";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { MessageSquare, Zap, Brain, Shield, Code2, Globe } from "lucide-react";
import { whatsappLink } from "@/lib/contact-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Claude AI Agency India | Value Tech Solution" },
  description:
    "Hire Claude AI developers in India — Claude API integrations, agent development, RAG pipelines, and Claude-powered automation for startups globally.",
  keywords: [
    "Claude AI automation",
    "Claude AI automation India",
    "Anthropic Claude API integration",
    "Claude agent development",
    "Claude AI developer India",
    "hire Claude AI developer",
    "Claude automation agency",
    "Claude API developer",
    "Claude AI assistant development",
    "Claude AI workflow automation",
    "Anthropic Claude India",
    "Claude RAG pipeline India",
  ],
  alternates: { canonical: "https://valuetechsolution.com/services/claude-automation" },
  openGraph: {
    title: "Claude AI Agency India | Value Tech Solution",
    description:
      "Claude API integrations, Claude agents, and Claude-powered automation workflows — built by engineers in India for startups worldwide.",
    url: "https://valuetechsolution.com/services/claude-automation",
    siteName: "Value Tech Solution",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude AI Automation Agency India | Value Tech Solution",
    description:
      "Claude API integrations, agents, and automation — engineered by AI specialists in India.",
  },
};

const capabilities = [
  {
    icon: Brain,
    title: "Claude API Integration",
    body: "Connect Claude to your product, CRM, or internal tools via the Anthropic API. We handle auth, prompt versioning, token budgets, and model selection (Haiku → Sonnet → Opus) so you pay only for the intelligence you need.",
  },
  {
    icon: MessageSquare,
    title: "Custom Claude Assistants",
    body: "Branded chatbots and support agents powered by Claude — with your knowledge base, guardrails, persona, and escalation rules. We deploy on web, WhatsApp, Slack, or any channel your customers already use.",
  },
  {
    icon: Zap,
    title: "Claude-Powered Workflows",
    body: "Plug Claude into n8n, Make.com, or Zapier as a reasoning engine. Classify emails, draft replies, extract entities, summarise documents, and triage support tickets — all hands-free.",
  },
  {
    icon: Code2,
    title: "Claude Agent & Tool Use",
    body: "Multi-step agentic pipelines using Claude's tool-use capability — web search, database queries, code execution, and API calls orchestrated by Claude reasoning in a loop until the job is done.",
  },
  {
    icon: Globe,
    title: "RAG with Claude",
    body: "Retrieval-augmented generation grounded in your docs, policies, and product data. Claude answers with citations, respects access controls, and never fabricates out-of-context facts.",
  },
  {
    icon: Shield,
    title: "Prompt Engineering & Evals",
    body: "Production-grade prompts with a full evaluation harness — we benchmark accuracy, hallucination rate, and latency before go-live and maintain a tuning window post-launch.",
  },
];

const useCases = [
  {
    sector: "SaaS & Tech",
    examples: [
      "In-app Claude assistant for onboarding and support",
      "Code review and documentation generation",
      "Automated triage of support tickets with suggested replies",
    ],
  },
  {
    sector: "Real Estate",
    examples: [
      "Lead qualification agent that asks, scores, and books a call",
      "Automated listing descriptions from raw property data",
      "Contract clause extraction and red-flag detection",
    ],
  },
  {
    sector: "Marketing Agencies",
    examples: [
      "Claude-powered content brief and copy generation pipeline",
      "Multi-market localisation from a single source draft",
      "Competitive intel agent that reads new articles and summarises daily",
    ],
  },
  {
    sector: "Healthcare & Legal",
    examples: [
      "Intake form to structured clinical summary (HIPAA-aware deployment)",
      "Document Q&A over contracts, SOPs, and policy manuals",
      "Automated referral letters and patient communication drafts",
    ],
  },
];

const pricing = [
  {
    tier: "Starter Integration",
    usd: "$999",
    inr: "₹83,000",
    timeline: "2 weeks",
    features: [
      "Claude API integration into one product surface",
      "Prompt design + system prompt engineering",
      "Basic evaluation suite (20 test cases)",
      "Token cost optimisation (model routing)",
      "1 revision round post-launch",
    ],
  },
  {
    tier: "Claude Agent",
    usd: "$2,499",
    inr: "₹2,08,000",
    timeline: "4–5 weeks",
    highlighted: true,
    features: [
      "Multi-step Claude agent with tool use",
      "Custom knowledge base (RAG) — up to 500 docs",
      "Evaluation harness (100+ test cases)",
      "Guardrails, fallbacks, and escalation logic",
      "n8n / Zapier / Make integration if needed",
      "30-day post-launch tuning window",
    ],
  },
  {
    tier: "Claude Platform",
    usd: "$4,999+",
    inr: "₹4,15,000+",
    timeline: "6–10 weeks",
    features: [
      "Multi-agent architecture (planner + executor + evaluator)",
      "Full RAG pipeline with access controls and citations",
      "Admin dashboard for prompt versioning and cost tracking",
      "Custom evals + regression tests in CI",
      "Ongoing retainer for prompt tuning and new capabilities",
    ],
  },
];

const faqs = [
  {
    q: "What is Claude AI automation?",
    a: "Claude is Anthropic's family of AI models (Haiku, Sonnet, Opus). Claude automation means using the Claude API to build AI agents, chatbots, document processors, and reasoning pipelines that automate tasks previously done by humans — answering emails, extracting data, classifying content, and making decisions inside your software.",
  },
  {
    q: "How do you integrate Claude into an existing product?",
    a: "We connect to the Anthropic API from your backend (Node.js, Python, or serverless), design a system prompt and conversation structure, add tool definitions if the agent needs to call external APIs, set up prompt versioning, and add observability so you can monitor quality and cost. Most integrations go live in 2–3 weeks.",
  },
  {
    q: "What is the difference between Claude Haiku, Sonnet, and Opus?",
    a: "Haiku is fast and cheap — ideal for classification, short replies, and high-volume tasks. Sonnet balances intelligence and cost — most production agents run on Sonnet. Opus is the most capable, best for complex reasoning, long documents, and tasks where quality matters more than speed. We route traffic intelligently across models to keep your costs low.",
  },
  {
    q: "Can you build a Claude agent with tool use?",
    a: "Yes. Claude's native tool-use (function calling) lets the model invoke your APIs, query your database, run code, or search the web as part of a reasoning loop. We design the tool definitions, handle retries and errors, and add guardrails to keep the agent within scope.",
  },
  {
    q: "What is RAG and do you build it with Claude?",
    a: "RAG (retrieval-augmented generation) grounds Claude in your own documents — product manuals, contracts, SOPs, knowledge bases. Claude answers using retrieved passages with citations instead of its training data, which eliminates hallucinations on domain-specific questions. We build RAG pipelines with vector databases (Pinecone, Supabase pgvector, Weaviate) and chunk + embed your documents.",
  },
  {
    q: "Do you serve clients outside India?",
    a: "Yes. We work with clients in the USA, UK, UAE, and across Europe. We bill in USD (Stripe / wire) for international clients and INR for Indian clients. Meetings happen over Google Meet or Zoom across IST, GMT, and ET time zones.",
  },
  {
    q: "How much does Claude API usage cost per month?",
    a: "Anthropic charges per million tokens. A typical customer-support agent handling 1,000 conversations/day on Claude Sonnet costs roughly $30–80/month in model fees. We size the architecture and add model routing so your API bill stays predictable. Claude costs are separate from our development fee.",
  },
  {
    q: "How do I get started?",
    a: "Book a free 30-minute consultation on WhatsApp or email. We'll ask about your use case, current stack, and expected volume — then send a scoping doc and fixed-price quote within 24 hours.",
  },
];

export default function ClaudeAutomationPage() {
  return (
    <>
      <ServiceSchema
        name="Claude AI Automation"
        serviceType="AI Automation"
        description="Claude API integrations, Claude agent development, custom Claude assistants, RAG pipelines, and Claude-powered automation workflows for businesses worldwide."
        url="https://valuetechsolution.com/services/claude-automation"
        offers={[
          { name: "Starter Integration", price: "999" },
          { name: "Claude Agent", price: "2499" },
          { name: "Claude Platform", price: "4999" },
        ]}
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Services", url: "https://valuetechsolution.com/services" },
          {
            name: "Claude Automation",
            url: "https://valuetechsolution.com/services/claude-automation",
          },
        ]}
      />

      {/* Hero */}
      <section className="page-header bg-carbon-950 text-white">
        <div className="container-x">
          <p className="eyebrow text-carbon-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Anthropic Claude · API · Agents · RAG
          </p>
          <h1 className="heading-xl mt-6 text-white">
            Claude AI{" "}
            <span className="italic-accent text-carbon-300">Automation</span>
          </h1>
          <p className="lede mt-6 max-w-2xl text-carbon-300">
            We build production-grade Claude integrations — custom assistants,
            multi-step agents with tool use, and RAG pipelines grounded in your
            knowledge base. Engineered by AI specialists in India, deployed for
            clients worldwide.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-primary">
              Get a free quote
            </a>
            <Link href="/contact" className="btn border border-white/20 bg-transparent text-white hover:bg-white hover:text-carbon-950">
              Book a call
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { stat: "48h", label: "Quote turnaround" },
              { stat: "3 models", label: "Haiku · Sonnet · Opus" },
              { stat: "14+", label: "Countries served" },
              { stat: "₹0", label: "Consultation cost" },
            ].map((s) => (
              <div key={s.stat} className="border-l border-white/15 pl-5">
                <p className="text-2xl font-black text-white">{s.stat}</p>
                <p className="mt-1 text-xs text-carbon-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-white">
        <div className="container-x">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-carbon-950" />
            What we build
          </p>
          <h2 className="heading-md mt-6 max-w-xl">
            Every Claude use-case,{" "}
            <span className="italic-accent">production-ready</span>
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="card">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-carbon-950 text-white">
                  <c.icon size={20} />
                </div>
                <h3 className="heading-sm">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-carbon-500">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-[rgb(252,251,249)]">
        <div className="container-x">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-carbon-950" />
            By industry
          </p>
          <h2 className="heading-md mt-6 max-w-xl">
            Claude automation{" "}
            <span className="italic-accent">by sector</span>
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {useCases.map((u) => (
              <div key={u.sector} className="card-flat rounded-3xl border border-carbon-950/[0.07] bg-white p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                  {u.sector}
                </p>
                <ul className="mt-5 space-y-3">
                  {u.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-3 text-sm text-carbon-700">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-carbon-950" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-white">
        <div className="container-x">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-carbon-950" />
            Pricing
          </p>
          <h2 className="heading-md mt-6 max-w-xl">
            Fixed-price{" "}
            <span className="italic-accent">Claude packages</span>
          </h2>
          <p className="lede mt-4 max-w-2xl">
            Indian clients billed in INR via UPI / RTGS / Razorpay with GST
            invoice. USA & UK clients billed in USD via Stripe or wire.
          </p>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.tier}
                className={`relative rounded-3xl border p-8 ${
                  p.highlighted
                    ? "border-carbon-950 bg-carbon-950 text-white"
                    : "border-carbon-950/[0.07] bg-white"
                }`}
              >
                {p.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-white px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-carbon-950">
                    Most popular
                  </span>
                )}
                <p className={`font-mono text-[10px] uppercase tracking-[0.28em] ${p.highlighted ? "text-carbon-300" : "text-carbon-400"}`}>
                  {p.tier}
                </p>
                <div className="mt-4">
                  <span className={`text-4xl font-black ${p.highlighted ? "text-white" : "text-carbon-950"}`}>
                    {p.usd}
                  </span>
                  <span className={`ml-3 text-lg ${p.highlighted ? "text-carbon-300" : "text-carbon-400"}`}>
                    / {p.inr}
                  </span>
                </div>
                <p className={`mt-1 text-xs ${p.highlighted ? "text-carbon-400" : "text-carbon-400"}`}>
                  Timeline: {p.timeline}
                </p>
                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${p.highlighted ? "text-carbon-200" : "text-carbon-700"}`}>
                      <span className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${p.highlighted ? "bg-white" : "bg-carbon-950"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Hi, I'm interested in the ${p.tier} Claude automation package.`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn mt-10 w-full justify-center ${
                    p.highlighted
                      ? "bg-white text-carbon-950 hover:bg-carbon-100"
                      : "bg-carbon-950 text-white hover:bg-carbon-700"
                  }`}
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[rgb(252,251,249)]">
        <div className="container-x">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-carbon-950" />
            FAQ
          </p>
          <h2 className="heading-md mt-6 max-w-xl">
            Common questions about{" "}
            <span className="italic-accent">Claude automation</span>
          </h2>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border border-carbon-950/[0.07] bg-white p-7">
                <p className="font-semibold leading-snug text-carbon-950">
                  {f.q}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-carbon-500">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
