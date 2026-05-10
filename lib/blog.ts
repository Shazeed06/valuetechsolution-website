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
