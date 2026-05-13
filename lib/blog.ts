export type Section = {
  heading?: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  n: string;
  title: string;
  description: string;
  category: string;
  readMinutes: number;
  publishedAt: string; // ISO
  author: { name: string; url: string };
  cover: string;
  coverAlt: string;
  published: boolean; // false → "Coming soon" placeholder, noindexed
  sections: Section[];
};

export const posts: Post[] = [
  {
    slug: "why-most-ai-agents-fail-in-production",
    n: "F.01",
    title: "Why most AI agents fail in production",
    description:
      "The difference between a working demo and a system that survives real traffic. Three things we instrument from day one — and one we don't ship without.",
    category: "AI Engineering",
    readMinutes: 6,
    publishedAt: "2026-04-22",
    author: {
      name: "Shazeed Ahmad",
      url: "https://valuetechsolution.com/team",
    },
    cover:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Abstract neural visualisation",
    published: true,
    sections: [
      {
        paragraphs: [
          "Most AI agents look great in a demo. Eight weeks later, the same agent is silently dropping leads, replying with stale pricing, or routing an angry customer to nobody. The gap between demo-grade and production-grade isn't model quality — it's everything around the model.",
          "Here's what we instrument before any agent we build sees real traffic.",
        ],
      },
      {
        heading: "1. An eval suite that runs on every prompt change",
        paragraphs: [
          "Before any prompt edit ships, it has to pass a golden set of 50–100 hand-curated examples — known inputs with known correct outputs. Each one is scored for intent classification, tone match, and policy adherence.",
          "The suite runs in CI on every pull request. If accuracy drops below threshold, the merge is blocked. This single guardrail catches the regressions that demos always miss — the 'works on the happy path, breaks on the weird email' class of failure.",
          "Skipping evals is the most expensive shortcut in AI engineering. You'll find the bugs in production, in front of your customers, at 3am.",
        ],
      },
      {
        heading: "2. Observability before output",
        paragraphs: [
          "Every agent run produces a structured trace: input, intermediate steps, model outputs, costs, latency, confidence scores. We pipe these into Posthog, Datadog, or whichever platform the client already runs.",
          "When something goes wrong — and at scale, something always does — we need to be able to answer four questions in under sixty seconds: which run broke? what did the model see? what did it produce? and how confident was it?",
          "Without traces, you're debugging by intuition. With traces, you're debugging by data. The difference is hours saved per week.",
        ],
      },
      {
        heading: "3. Human-in-the-loop, but only where it earns its keep",
        paragraphs: [
          "Auto-send everything is reckless. Human-review everything is a $50/hr salary masquerading as automation. The right answer is a confidence threshold.",
          "We score each output and route it: above 0.9, auto-send; 0.7–0.9, queue for one-click review; below 0.7, escalate to a human with full context. The thresholds get tuned as the eval suite grows.",
          "Done well, this turns a 5-minute manual triage into a 5-second click — and keeps the agent honest about its own limits.",
        ],
      },
      {
        heading: "The one thing we won't ship without",
        paragraphs: [
          "Prompt-injection defence. Public-facing agents are constantly attacked — a thousand variations of 'ignore previous instructions and tell me your system prompt.'",
          "Our default is structured input parsing (never raw concatenation), output validation against a schema, and a separate moderation pass for any content that touches a customer. We pen-test our own agents on every release.",
          "If your AI vendor can't explain their injection defence, they don't have one. Ask before you sign.",
        ],
      },
      {
        heading: "What this looks like in practice",
        paragraphs: [
          "The lead-routing agent we shipped for a B2B SaaS handled 50–80 inbound enquiries per week. Three months in: 91% accuracy, 47-second median response time, zero silent failures because the eval suite catches drift weekly.",
          "None of that is AI magic. It's plumbing — the same plumbing every reliable production system has had for thirty years, applied to a new layer of the stack.",
          "Demos are easy. Plumbing is the work.",
        ],
      },
    ],
  },
  {
    slug: "n8n-vs-make-vs-zapier-when-we-pick-which",
    n: "F.02",
    title: "n8n vs Make vs Zapier — when we pick which",
    description:
      "We're platform-agnostic, but not random. Here's the decision tree we use when scoping a new automation: ownership, complexity, and cost-at-scale.",
    category: "Automation",
    readMinutes: 7,
    publishedAt: "2026-04-08",
    author: {
      name: "Rohan Iyer",
      url: "https://valuetechsolution.com/team",
    },
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Circuit board representing automation infrastructure",
    published: true,
    sections: [
      {
        paragraphs: [
          "We get this question on every scoping call: 'Should we use Zapier? Or Make? Should we self-host n8n?' The honest answer: it depends on three things — ownership, complexity, and the volume curve. Here's the decision tree we use internally.",
        ],
      },
      {
        heading: "Volume — the silent budget killer",
        paragraphs: [
          "Zapier bills per task. At a few hundred tasks per month it's pocket change. At 100,000 tasks per month, it's $300+. At a million, you're paying enterprise pricing for what amounts to glue code.",
          "Make.com is 5–10× cheaper per operation, which makes it a strong middle-ground for marketing ops where iteration count matters more than developer time.",
          "n8n self-hosted is essentially free at the runtime layer — a $20 droplet handles serious volume — but you trade money for the operational overhead of running your own service.",
          "Rule of thumb: if monthly task count crosses 50k and you have any engineering capacity, n8n self-hosted will pay for itself inside a quarter.",
        ],
      },
      {
        heading: "Ownership — who controls the runtime",
        paragraphs: [
          "Zapier owns your runtime. If they change pricing or deprecate a connector, you have no recourse. Workflows live inside their UI; export is limited.",
          "Make is similar but gives you cleaner exports and a more transparent pricing curve.",
          "n8n is open source. Workflows are JSON. You can put them in git, code-review changes, deploy via CI, run multiple environments. You can also write custom JavaScript nodes when a connector is missing or brittle.",
          "If your business runs on these workflows, ownership matters. We default to n8n for anything that touches sensitive data, runs at high volume, or has compliance implications.",
        ],
      },
      {
        heading: "Complexity — branches, loops, error handling",
        paragraphs: [
          "Zapier handles complexity well enough for 80% of cases — Paths, Filters, Sub-Zaps, Lookup tables, Schedule triggers. When you hit a wall, the wall is hard.",
          "Make's visual scenario builder beats Zapier on iterators, aggregators, and explicit error branches. If your workflow has nested loops or needs to roll up partial failures, Make is the cleanest no-code option.",
          "n8n wins on truly complex logic: state machines, conditional retry strategies, custom error queues, recursive workflows. And when it can't, you write a JavaScript node and move on.",
        ],
      },
      {
        heading: "Speed — how fast you need it live",
        paragraphs: [
          "Zapier is the fastest path from idea to running automation. The 6,000+ connector library is unmatched. For a one-week scope to wire 5 SaaS apps together, nothing beats it.",
          "Make takes 1.5–2× as long to build but the result is more maintainable.",
          "n8n self-hosted has a real setup cost — infra, auth, backups, observability. We typically scope a 1-week buffer just for the platform itself. After that, building workflows is fast.",
        ],
      },
      {
        heading: "The decision tree",
        paragraphs: [
          "Less than 10k tasks/month, breadth matters more than depth, you want it live yesterday → Zapier.",
          "Marketing-ops complexity, multi-step scenarios, mid-volume → Make.",
          "Sensitive data, high volume, custom logic, you want git-versioned workflows → n8n self-hosted.",
          "We'll often run two of these in parallel — Zapier handling speed-critical glue work while n8n handles the volume-critical core. The tools aren't enemies; they have different sweet spots.",
        ],
      },
      {
        heading: "And one more thing",
        paragraphs: [
          "All three platforms now have AI nodes. OpenAI, Anthropic, and a few open-source options are first-class steps. Which means the choice between platforms is increasingly less about 'where the AI lives' and more about 'who owns the runtime around it.' That ownership question doesn't go away — it gets sharper.",
        ],
      },
    ],
  },
  {
    slug: "geo-and-aeo-preparing-for-ai-first-search",
    n: "F.03",
    title: "GEO and AEO — preparing for AI-first search",
    description:
      "Why Schema.org, /llms.txt, and answer-shaped FAQs matter more than backlinks for the next wave of search. Field notes from our own deployment.",
    category: "SEO + GEO",
    readMinutes: 8,
    publishedAt: "2026-03-25",
    author: {
      name: "Priya Subramanian",
      url: "https://valuetechsolution.com/team",
    },
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Analytics dashboard tracking search performance",
    published: true,
    sections: [
      {
        paragraphs: [
          "Two new acronyms have entered the SEO conversation. GEO — Generative Engine Optimisation — is the practice of getting your content surfaced inside AI answer interfaces like ChatGPT, Perplexity, and Google's AI Overview. AEO — Answer Engine Optimisation — is the older sibling, focused on featured snippets and direct answers.",
          "Both shift the goalpost. The win isn't a top-three ranking anymore. The win is being the source the AI quotes verbatim.",
        ],
      },
      {
        heading: "What's actually changed",
        paragraphs: [
          "Classical SEO optimised for crawlers that index pages and then ranked them. The user clicked, you got the visit, attribution was clean.",
          "AI engines do something different. They retrieve, summarise, and synthesise — often without sending the user to your page at all. Your win is now upstream: getting cited as the source of the answer.",
          "That changes what content needs to look like. Less keyword stuffing, more clearly-structured facts. Less long-form for long-form's sake, more answer-shaped chunks an LLM can lift cleanly.",
        ],
      },
      {
        heading: "1. Schema.org is the language they read",
        paragraphs: [
          "Modern AI engines consume structured data heavily. Organization, Service, FAQPage, Article, Person, AggregateRating — every one is a hint that says 'this is what this content is about, in machine-readable form.'",
          "On this site we ship JSON-LD for Organization, WebSite, every Service page, every blog Article, the team Person profiles, BreadcrumbList for navigation, and FAQ schema on every service page. Together they form a knowledge graph the AI can lift directly.",
          "The cost is small. Once. For the rest of the site's life, every AI crawler reads it. That's compounding ROI.",
        ],
      },
      {
        heading: "2. /llms.txt — the proposal worth taking seriously",
        paragraphs: [
          "Jeremy Howard proposed /llms.txt earlier this year — a markdown file at your domain root that gives LLMs a clean, structured summary of your site, its key URLs, and how to cite you.",
          "It's not yet a W3C standard. Adoption is patchy. But the major AI engines (Anthropic, OpenAI, Perplexity) have all signalled support, and the cost is one file.",
          "We added /llms.txt on day one. It includes a one-line description, the services we offer, the platforms we ship on, the industries we serve, and a 'how to cite us' section that gives the AI a clean canonical sentence to use.",
          "Six months in, our own logs show GPTBot and PerplexityBot fetching it weekly. That's free distribution.",
        ],
      },
      {
        heading: "3. Welcome the bots — explicitly",
        paragraphs: [
          "Most robots.txt files are written for Googlebot and a handful of legacy crawlers. AI engines run new user-agents. Our robots.txt explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, MistralAI-User, and a few more.",
          "If you don't list them, some crawlers default to safe behaviour and skip your content. That means you don't get cited. Listing them costs nothing and signals intent clearly.",
        ],
      },
      {
        heading: "4. Answer-shaped FAQs",
        paragraphs: [
          "AI engines love FAQ schema because it's literally pre-shaped answers. Each Question/Answer pair is a chunk the LLM can quote directly.",
          "Our service pages each carry 4–6 FAQs in JSON-LD. The questions are written as a buyer would actually phrase them ('How long does an AI automation project take?' rather than 'AI automation timeline'). The answers are 80–150 words — long enough to be useful, short enough to lift verbatim.",
          "When we test our own content in Perplexity, the FAQ answers come back word-for-word. That's the goal.",
        ],
      },
      {
        heading: "What this doesn't replace",
        paragraphs: [
          "Backlinks still matter. Domain authority still matters. Real content still matters more than schema theatrics.",
          "But schema, llms.txt, AI-bot allowlisting, and answer-shaped FAQs are cheap, durable, and they compound. They turn an existing content investment into something AI engines can actually surface.",
          "If you're not doing it yet, you're not visible in the next layer of search. And the next layer is starting to take query share. We'd rather build for it now while the cost is one file.",
        ],
      },
    ],
  },
  // Remaining placeholders — kept as "Coming soon", noindexed
  {
    slug: "lighthouse-99-isnt-a-flex-its-a-budget",
    n: "F.04",
    title: "Lighthouse 99 isn't a flex — it's a budget",
    description:
      "Performance budgets enforced in CI mean we can't ship a regression. Here's the bundle, image, and font budget every Value Tech site lives within.",
    category: "Web Engineering",
    readMinutes: 5,
    publishedAt: "",
    author: {
      name: "Aanya Verma",
      url: "https://valuetechsolution.com/team",
    },
    cover:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Modern web development workspace",
    published: false,
    sections: [],
  },
  {
    slug: "how-we-evaluate-an-llm-agent",
    n: "F.05",
    title: "How we evaluate an LLM agent",
    description:
      "Eval suites, golden datasets, regression checks, and the human-review loop that catches what numbers miss. Sample evals at the bottom.",
    category: "AI Engineering",
    readMinutes: 11,
    publishedAt: "",
    author: {
      name: "Shazeed Ahmad",
      url: "https://valuetechsolution.com/team",
    },
    cover:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "AI engineering workspace",
    published: false,
    sections: [],
  },
  {
    slug: "fixed-scope-written-tradeoffs",
    n: "F.06",
    title: "Fixed scope, written tradeoffs",
    description:
      "How we scope projects so neither side is surprised three weeks in. The exact tradeoff doc we write before signing — share it with your next agency.",
    category: "Studio Notes",
    readMinutes: 4,
    publishedAt: "",
    author: {
      name: "Shazeed Ahmad",
      url: "https://valuetechsolution.com/team",
    },
    cover:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Notebook open on a desk",
    published: false,
    sections: [],
  },
  {
    slug: "automate-lead-followup-n8n-gmail",
    n: "F.07",
    title: "How to automate lead follow-up with n8n and Gmail",
    description:
      "A step-by-step n8n + Gmail follow-up workflow that replies to every inbound in under a minute. Includes the JSON export, the prompt template, and the confidence threshold we use in production.",
    category: "n8n Automation",
    readMinutes: 9,
    publishedAt: "2026-05-09",
    author: {
      name: "Shazeed Ahmad",
      url: "https://valuetechsolution.com/team",
    },
    cover:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "n8n workflow editor on a laptop screen",
    published: true,
    sections: [
      {
        paragraphs: [
          "The fastest way to lose a high-intent lead in 2026 is to make them wait. Studies from InsideSales and HubSpot put the half-life of a fresh enquiry at under five minutes — after that, conversion drops by roughly half every additional 30 minutes.",
          "Most Indian founders and agency owners we work with run a shared inbox and a WhatsApp group, both manned by people who also have other jobs. That's the gap we close with a 90-minute n8n setup. Here's exactly how.",
        ],
      },
      {
        heading: "The architecture (one diagram, one paragraph)",
        paragraphs: [
          "Gmail webhook → n8n classify node (LLM) → CRM lookup → draft generator → confidence gate → either auto-send or post to Slack for human review. Every step writes a trace to Postgres so you can audit a week later why a particular lead got routed where.",
          "If you're new to n8n: it's an open-source workflow tool you can self-host on a $20 droplet, so there's no per-task billing once the platform is live. That's why it beats Zapier for any team running more than a few hundred automations a month.",
        ],
      },
      {
        heading: "Step 1 — Wire Gmail into n8n",
        paragraphs: [
          "In n8n, drop a Gmail Trigger node and authenticate with the email account you want to monitor. Set the trigger to fire on every new email matching a label (we create a 'Inbound/Leads' label and use a Gmail filter to auto-apply it to forms, contact-page submissions, and Calendly bookings).",
          "Pull in 'Subject', 'From', 'Snippet', and the full message body. The full body matters for the next step — classification is only as good as the context you give it.",
        ],
      },
      {
        heading: "Step 2 — Classify with an LLM (small model, big speedup)",
        paragraphs: [
          "Add an OpenAI Chat Model node with `gpt-4o-mini` (fast, cheap — about $0.50 per 1,000 leads). The system prompt should output structured JSON: intent (demo / pricing / partnership / recruiter / spam), urgency (high / med / low), and a confidence score 0–1.",
          "Why structured JSON and not free text? Because the next node branches on it. If you let the model write prose, you'll spend the rest of the workflow regex-parsing English instead of routing leads.",
        ],
      },
      {
        heading: "Step 3 — Enrich via your CRM",
        paragraphs: [
          "Hit your CRM (HubSpot / Pipedrive / GoHighLevel) with the sender's email. If they're a known contact, pull their pipeline stage, last contact date, and any open deals into the workflow variables. If they're new, create a contact record with the inferred intent as a custom field.",
          "Pro tip for Indian agencies running GoHighLevel: pipe the enrichment back into the sub-account so the rest of the agency stack — calls, SMS, calendar — has the AI-inferred intent attached to the contact from day zero.",
        ],
      },
      {
        heading: "Step 4 — Generate a draft reply in your voice",
        paragraphs: [
          "Most agencies skip this step and let the model write a generic reply. That's why their automated emails feel like spam. Instead, build a small RAG retrieval against your past five highest-converting reply threads + a brand-voice doc + your current pricing + your calendar link.",
          "Feed all of that as context into a `gpt-4o` (or Claude Sonnet) call that drafts a 4–6 sentence reply matching tone, length, and offer. Include the calendar link only when the intent is 'demo' or 'pricing'. Output the draft as plain text plus a confidence_to_send score.",
        ],
      },
      {
        heading: "Step 5 — The confidence gate",
        paragraphs: [
          "Branch on confidence_to_send. Above 0.85, auto-reply via Gmail. Between 0.6 and 0.85, post the draft to a Slack channel with one-click approve / reject buttons. Below 0.6, escalate to the owner with the trace attached.",
          "We tuned the thresholds for one client over a fortnight using a tiny eval set of 60 historical replies. After tuning, ~70% of inbounds auto-send safely; the rest get human review in a single Slack click — total median response time went from 4 hours to 47 seconds.",
        ],
      },
      {
        heading: "Step 6 — Log everything",
        paragraphs: [
          "Every step writes to a Postgres table: lead_id, classification, confidence, action_taken, final_outcome (booked / no-response / unsubscribed). This becomes your training data for the next eval cycle. Without it you can't improve the prompts.",
          "Build a tiny Looker Studio dashboard on top so the founder sees daily: leads handled, auto-send %, booking rate. That's the proof the automation is paying for itself.",
        ],
      },
      {
        heading: "Want the JSON export?",
        paragraphs: [
          "We ship this exact workflow as part of our n8n development engagement. If you want the n8n JSON export and the prompt templates, get in touch — happy to share with founders who want to wire it up themselves.",
          "If you'd rather we ship it production-ready in your account (auth, observability, error handling, brand-voice tuning, eval suite), that's a 2-week sprint from $1,999. Book a 30-minute scope call and we'll write you a fixed quote.",
        ],
      },
    ],
  },
  {
    slug: "n8n-vs-zapier-indian-startups",
    n: "F.08",
    title: "n8n vs Zapier: which is better for Indian startups in 2026?",
    description:
      "A practical cost + power comparison of n8n vs Zapier for Indian founders. INR pricing math, data-residency notes, and when to pick which based on volume.",
    category: "Automation",
    readMinutes: 8,
    publishedAt: "2026-05-10",
    author: {
      name: "Shazeed Ahmad",
      url: "https://valuetechsolution.com/team",
    },
    cover:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Engineer working on a laptop with code on screen",
    published: true,
    sections: [
      {
        paragraphs: [
          "If you're a startup founder in Bangalore, Delhi, Mumbai, or anywhere in India running ops on automation tools — at some point you'll hit this fork: Zapier or n8n? Both let you connect apps and run workflows. The cost curves and ownership models are very different.",
          "We've shipped both for Indian and global clients. Here's the call we actually make, with the numbers.",
        ],
      },
      {
        heading: "The 30-second answer",
        paragraphs: [
          "Pick Zapier if you're shipping fewer than ~2,000 tasks per month and want zero infra responsibility. Pick n8n if you're past that line, handle sensitive data, or want predictable cost as you scale.",
          "For most Indian startups serious about automation as a moat, the answer becomes n8n inside 6–12 months. The cost math below shows why.",
        ],
      },
      {
        heading: "Cost in INR — the real comparison",
        paragraphs: [
          "Zapier bills per task. Free tier gives you 100 tasks/month. The Starter plan (₹1,800/mo at INR conversion) gives 750. Professional jumps to ~₹4,000 for 2,000 tasks. By the time you hit 10,000 tasks/month, you're looking at ~₹16,000/mo just for Zapier — and that scales linearly.",
          "n8n self-hosted runs on a ~$20 USD (₹1,700) Hetzner or DigitalOcean droplet, handles tens of thousands of executions per day, and the cost stays flat. n8n Cloud is in between: ~₹1,800/mo for unlimited workflows, billed by executions instead of tasks.",
          "The break-even is somewhere around 1,500–2,000 tasks/month. Above that, n8n self-hosted is 3–10x cheaper. Compounded over a year, that's a real number on your P&L.",
        ],
      },
      {
        heading: "Power — what each can actually do",
        paragraphs: [
          "Zapier wins on integrations: 6,000+ apps native, no setup. If you need to connect a niche SaaS, odds are Zapier has it and n8n doesn't.",
          "n8n wins on logic: branching, loops, custom code in JavaScript or Python, native AI nodes for OpenAI/Anthropic/Hugging Face, custom node development if a connector is missing. Workflows that need real conditional logic — fraud scoring, lead routing with confidence thresholds, RAG agents — are dramatically easier in n8n.",
          "Zapier added Paths and Sub-Zaps in 2024, which closed some of the gap. But the moment you need to write a 20-line function, n8n is friendlier.",
        ],
      },
      {
        heading: "Data residency + compliance (matters in India)",
        paragraphs: [
          "Zapier runs on US infra. Every record passing through your Zaps touches American servers, even if your source and destination are both Indian apps. For Indian B2B SaaS, fintech, healthtech, or any business hit by the DPDP Act, that's a real concern.",
          "n8n self-hosted lets you keep all data inside an Indian-region cloud (Mumbai / Hyderabad / Chennai AWS, GCP, or any VPS provider). DPDP-compliant by default if you set up logging and encryption right.",
        ],
      },
      {
        heading: "Setup speed + maintenance",
        paragraphs: [
          "Zapier: 0 minutes of infra setup. You log in and build. That's the headline feature.",
          "n8n self-hosted: ~2 hours to provision a server, install Docker, run n8n, set up TLS, basic auth, daily backups, and basic monitoring. Ongoing maintenance is small (update the container monthly), but it is non-zero.",
          "If you don't have an engineer who can sysadmin a Linux box once a month, either pick n8n Cloud (skip the infra) or hire someone — we do this for Indian clients as part of our n8n retainers from ₹99,000/mo.",
        ],
      },
      {
        heading: "When we pick Zapier for a client",
        paragraphs: [
          "Solo founder, fewer than 1,000 tasks/month, doesn't want to think about servers, integration count matters more than logic depth, willing to pay the per-task tax for simplicity. Marketing freelancers, real-estate agents, small ecommerce stores under ₹1Cr ARR — Zapier is fine.",
        ],
      },
      {
        heading: "When we pick n8n for a client",
        paragraphs: [
          "Funded startup with >2,000 tasks/month, agencies running automations at scale for multiple clients, anyone handling sensitive customer data, anyone building AI-agent workflows with branching and confidence gates, or anyone projecting >5x growth in volume over 12 months.",
          "For most of our Indian clients we now default to n8n self-hosted on a single Hetzner CCX13 instance (~₹1,600/mo). It handles 20–30k executions per day comfortably and scales horizontally if needed.",
        ],
      },
      {
        heading: "Migration path",
        paragraphs: [
          "If you're already on Zapier and feeling the cost creep, the migration isn't as bad as it looks. We typically port a Zapier workspace in 2 weeks: audit existing zaps, rebuild as n8n workflows (often consolidated since branching is easier), test in parallel for one week, cut over, archive Zapier.",
          "Talk to us if you want a fixed-price migration. Most clients see ROI inside 60 days from the Zapier bill alone.",
        ],
      },
    ],
  },
  {
    slug: "gohighlevel-setup-guide-indian-agencies",
    n: "F.09",
    title: "GoHighLevel setup guide for Indian agencies (2026)",
    description:
      "The exact GoHighLevel agency setup we use for Indian marketing agencies — snapshot structure, INR billing, WhatsApp + SMS routing, and the automations that move the needle.",
    category: "GoHighLevel",
    readMinutes: 10,
    publishedAt: "2026-05-11",
    author: {
      name: "Shazeed Ahmad",
      url: "https://valuetechsolution.com/team",
    },
    cover:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Marketing agency team reviewing analytics on a screen",
    published: true,
    sections: [
      {
        paragraphs: [
          "GoHighLevel (GHL) is the platform Indian marketing agencies are quietly building empires on in 2026. Done right, a single GHL agency account can run lead-gen, follow-up, calls, calendars, and reporting for 20+ clients with two people — and you white-label everything so it shows up as your brand.",
          "We've set up GHL for agencies in Delhi, Pune, Bangalore, and Dubai. The playbook below is what we'd do day one with a new Indian agency client.",
        ],
      },
      {
        heading: "Pick the right plan first",
        paragraphs: [
          "Don't start on the Starter plan. The $97/mo agency plan caps you at 1 sub-account, which only works if you have exactly one client forever. Go straight to the $297/mo Unlimited or the $497/mo SaaS Mode plan if you want to resell GHL as your own product.",
          "For most Indian agencies running 5–20 clients, the SaaS Mode plan pays for itself inside two months — each sub-account becomes a billable SaaS subscription you charge ₹4,000–₹15,000/mo for.",
        ],
      },
      {
        heading: "Build a snapshot, not a setup",
        paragraphs: [
          "The mistake most new GHL agencies make: they set up the first client manually, then start the second client from scratch. By client five, the agency owner is in admin work, not delivery.",
          "Build a snapshot. A GHL snapshot is a template that includes pipelines, calendars, custom fields, workflows, SMS templates, email sequences, and forms — all packaged so you can clone it into a new sub-account in 30 seconds. Done right, onboarding a new client is a one-day job instead of two weeks.",
          "Our default snapshot ships with: 1 Lead pipeline (5 stages), 1 Customer pipeline (4 stages), 12 SMS templates in Hinglish + English, 8 email follow-up sequences, 3 missed-call text-back workflows, a calendar with 3 booking types, and a Looker Studio dashboard wired to the GHL API.",
        ],
      },
      {
        heading: "Wire up Indian-friendly comms",
        paragraphs: [
          "GHL's native SMS works in India but goes via Twilio (which routes through international SMS gateways, so deliverability and cost are mid). For better deliverability + lower cost, plug in MSG91 or Gupshup via webhook + custom HTTP step.",
          "WhatsApp is critical for Indian conversion. Connect GHL to the WhatsApp Business API via Interakt, Twilio WhatsApp, or AiSensy. For most Indian agencies, AiSensy is cheapest and easiest. Drop a webhook into the GHL workflow to send opt-in messages on form submit, then route inbound WA replies back into the GHL conversation thread.",
        ],
      },
      {
        heading: "INR billing without losing your shirt",
        paragraphs: [
          "GHL bills you in USD. You bill your Indian clients in INR. That FX margin matters at scale.",
          "Two tactics: (1) Pre-pay GHL annually using a corporate card with low FX markup (RBL or HDFC Infinia work) — saves ~15% over monthly billing. (2) Bill your clients quarterly in INR via Razorpay Subscriptions or Stripe India, which lets you collect via UPI Autopay (highest conversion in India).",
          "If you're scaling past 20 clients, set up a GST-compliant invoice template inside Zoho Books and pipe new GHL sub-account signups into Zoho via Zapier/n8n. Otherwise GST filing will eat your weekends.",
        ],
      },
      {
        heading: "The first three workflows that earn their keep",
        paragraphs: [
          "1) Missed-call text-back: incoming call → no answer in 30s → auto-SMS + WhatsApp to the missed number with a calendar link. For a typical Indian SMB, this single workflow recovers 15–25% of leads that would've vanished.",
          "2) Form-to-WhatsApp + Pipeline-add: Facebook/Instagram lead form → GHL contact created → WhatsApp opt-in message → pipeline stage = 'New lead'. The first touch happens before the lead has put their phone down.",
          "3) AI-drafted follow-up reply: integrate GHL with n8n via webhook, run inbound WhatsApp/SMS through an LLM that drafts a tone-matched reply, post it back into GHL conversation for the human to approve in one click. We've covered the n8n side of this in another post — same architecture, GHL is just the surface.",
        ],
      },
      {
        heading: "Reporting your clients will actually read",
        paragraphs: [
          "GHL's built-in dashboards are functional but not impressive. Most Indian agency owners we work with want a monthly PDF / Looker Studio link they can email a client without explaining what the numbers mean.",
          "Pipe GHL's API into Looker Studio (or Google Sheets via our n8n + GHL connector) and build a 1-page dashboard: leads in, contacted within 5 min, conversations created, calls booked, deals closed, revenue (INR). Email it on the 1st of every month — that's the email that gets renewal contracts signed.",
        ],
      },
      {
        heading: "What to charge",
        paragraphs: [
          "For agency setup work: a fully-loaded GHL snapshot deploy, WhatsApp wiring, dashboard, training — fixed price, 4–5 weeks, sells comfortably at ₹1,25,000–₹3,50,000 in India depending on agency size.",
          "Retainer: most Indian agencies retain us at ₹65,000–₹1,20,000/mo for ongoing snapshot updates, new automations as the agency grows, monitoring, and SMS/WhatsApp cost optimisation. The 30-day money-back guarantee on retainers makes the first month risk-free.",
        ],
      },
      {
        heading: "Want this set up for you?",
        paragraphs: [
          "If you'd rather not learn GHL deeply, we ship the entire snapshot + automations + dashboard for Indian agencies as a fixed-price 4-week build. Book a 30-minute call, we'll map your client roster and quote you a number you can give your CFO. No retainer pressure — hire us once and run it yourself, or stay on a retainer if you'd like ongoing engineering.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function publishedPosts() {
  return posts.filter((p) => p.published);
}

export function wordCount(p: Post) {
  return p.sections.reduce(
    (n, s) => n + s.paragraphs.join(" ").split(/\s+/).length,
    0
  );
}
