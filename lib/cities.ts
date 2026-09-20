export type CityFAQ = { q: string; a: string };

export type City = {
  slug: string;
  name: string;
  country: string;
  flag: string;
  region: "India" | "USA" | "UK" | "UAE" | "Canada" | "Singapore" | "Australia";
  currencySymbol: string;
  starterPrice: string;   // website starter
  agentPrice: string;    // AI agent starter
  context: string;        // 2-3 sentences: local market colour
  market: string;         // one punchy line for the hero sub-heading
  industries: string[];
  keyServices: string[];
  faqs: CityFAQ[];
};

export const cities: City[] = [
  // ── INDIA ───────────────────────────────────────────────────────────
  {
    slug: "delhi",
    name: "Delhi",
    country: "India",
    flag: "🇮🇳",
    region: "India",
    currencySymbol: "₹",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "NCR's startup & enterprise hub",
    context:
      "Delhi NCR is India's second-largest startup ecosystem, home to unicorns in fintech, edtech, and logistics. Businesses here operate at high velocity and demand automation that can keep pace — from CRM pipelines handling thousands of leads a month to AI agents managing enterprise workflows.",
    industries: ["Fintech", "Edtech", "Logistics", "Real Estate", "Manufacturing"],
    keyServices: ["AI Agent Development", "n8n Automation", "Web Development", "GoHighLevel", "SEO"],
    faqs: [
      {
        q: "Do you work with Delhi / NCR-based clients on-site?",
        a: "We're remote-first but travel to Delhi NCR for quarterly strategy sessions on larger retainers. Most of our Delhi clients onboard entirely remotely — kickoff call, Loom walkthroughs, and Slack — with no loss of speed or quality.",
      },
      {
        q: "What's the cost of a website for a Delhi startup?",
        a: "We offer fixed-scope website sprints with guaranteed 95+ Lighthouse performance, complete SEO, and delivery in 3–4 weeks. Every quote is custom-tailored following a 15-minute discovery call. All projects include GST-compliant invoicing.",
      },
      {
        q: "Can you build AI automation for my Delhi-based real estate business?",
        a: "Yes — real estate is one of our most common verticals in Delhi NCR. We build lead-triage agents, WhatsApp follow-up automations on GoHighLevel, and CRM pipelines that route PropTech leads by budget, locality, and intent. Typical ROI is visible inside 30 days.",
      },
      {
        q: "Do you handle GST invoicing for Indian clients?",
        a: "Yes. All engagements with Indian clients come with GST-compliant invoices via Razorpay/UPI for easy reconciliation. We are registered under GST and can provide a tax invoice for your accounts department.",
      },
    ],
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    country: "India",
    flag: "🇮🇳",
    region: "India",
    currencySymbol: "₹",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "India's tech capital — AI-native teams move fast here",
    context:
      "Bangalore is the epicentre of India's engineering talent and the city where AI-native startups are being born. Our clients here range from Series A SaaS companies integrating Claude or GPT-4o into their core product, to growth-stage agencies automating their entire delivery stack on n8n.",
    industries: ["SaaS", "Deep Tech", "E-commerce", "HealthTech", "Gaming"],
    keyServices: ["Claude AI Integration", "RAG Systems", "AI Agent Development", "Next.js Web Dev", "n8n Automation"],
    faqs: [
      {
        q: "Can you integrate Claude or GPT-4o into our Bangalore-based SaaS product?",
        a: "Absolutely. LLM integration into SaaS products is one of our core specialties. We handle the full stack — prompt engineering, RAG retrieval, evals, guardrails, observability, and cost control on fixed sprint engagements.",
      },
      {
        q: "How do you work with Bangalore engineering teams?",
        a: "We embed as external senior engineers — async by default, synced via daily Slack standups. We open a shared GitHub repo, push to a branch, and your team reviews before merge. Most Bangalore SaaS clients keep us on retainer after the first sprint because the model works.",
      },
      {
        q: "Do you build RAG systems for Bangalore startups?",
        a: "Yes. We build production-grade RAG pipelines with pgvector or Pinecone, citation-aware responses, access-control layering, and weekly eval runs to catch drift. For most Bangalore SaaS clients, RAG is what turns a generic chatbot into a defensible product feature.",
      },
      {
        q: "What's typical timeline for an AI agent project in Bangalore?",
        a: "First production-ready agent: 4–6 weeks. That includes 2 weeks of discovery and integration mapping, 2–3 weeks of build and eval, and 1 week of tuning against real traffic. We don't ship without an eval suite.",
      },
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    country: "India",
    flag: "🇮🇳",
    region: "India",
    currencySymbol: "₹",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "India's financial capital — where scale meets urgency",
    context:
      "Mumbai's businesses operate under pressure: financial services with compliance requirements, media companies churning content daily, and retail brands managing thousands of SKUs. We serve Mumbai clients who need automation that's production-grade from day one — not a proof of concept that breaks under load.",
    industries: ["BFSI", "Media", "Retail", "Pharma", "Hospitality"],
    keyServices: ["AI Automation", "Compliance-Aware Agents", "Web Development", "GoHighLevel", "SEO"],
    faqs: [
      {
        q: "Can you build AI automation for a Mumbai-based financial services firm?",
        a: "Yes — with the right guardrails. We build BFSI automation with structured outputs, audit trails, human-in-the-loop review at every sensitive step, and prompt-injection defences. We do not ship agents that touch regulated outputs without a confidence gate and a human review layer.",
      },
      {
        q: "Do you work with Mumbai media and content companies?",
        a: "Frequently. Content pipeline automation — brief-to-draft, SEO keyword extraction, social media scheduling, and performance reporting — is a common engagement. We've automated content operations for teams producing 100+ pieces a month, cutting production time by 60%.",
      },
      {
        q: "What web development packages do you offer for Mumbai businesses?",
        a: "Bespoke high-performance web sprints (3–4 weeks, 95+ Lighthouse guaranteed), custom web applications with CMS, and full enterprise builds. All sites include schema, Core Web Vitals CI, sitemap, robots.txt, and GA4 from day one.",
      },
      {
        q: "How do payments work for Mumbai clients?",
        a: "50% on kick-off, 50% on delivery. We accept UPI, RTGS, NEFT, and Razorpay. GST-compliant invoice provided within 24 hours. For retainers, we set up a Razorpay Subscription so billing is automatic.",
      },
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    country: "India",
    flag: "🇮🇳",
    region: "India",
    currencySymbol: "₹",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "HITEC City's fastest-growing tech corridor",
    context:
      "Hyderabad's HITEC City corridor hosts global IT giants alongside a vibrant startup ecosystem in pharma, agritech, and government tech. We work with Hyderabad businesses that want the quality of a global agency at India-competitive pricing — with senior engineers, not offshore staffing.",
    industries: ["IT Services", "Pharma", "Agritech", "GovTech", "Manufacturing"],
    keyServices: ["AI Automation", "n8n", "Web Development", "SEO", "GoHighLevel"],
    faqs: [
      {
        q: "Do you serve Hyderabad / HITEC City technology companies?",
        a: "Yes. Several of our ongoing clients are Hyderabad-based IT companies and ISVs. We handle AI integration, n8n automation, and web development — either as a standalone build or as extension of an existing engineering team.",
      },
      {
        q: "Can you build automation for Hyderabad pharmaceutical companies?",
        a: "Yes, with an awareness of compliance requirements. We build document-processing agents, structured-output pipelines, and audit-trail logging suitable for regulated industries. Every sensitive step has a human-review gate.",
      },
      {
        q: "What's the starting price for a business website in Hyderabad?",
        a: "We build on Next.js, deployed on Vercel, with 95+ Lighthouse guaranteed, full SEO setup, and a 3–4 week sprint timeline. Quotes are provided following a discovery call. GST invoice included.",
      },
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    country: "India",
    flag: "🇮🇳",
    region: "India",
    currencySymbol: "₹",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "Oxford of the East — engineering talent + manufacturing scale",
    context:
      "Pune punches above its weight: a massive IT sector, auto manufacturing, and one of India's highest densities of engineering colleges. Our Pune clients are typically mid-market IT companies or manufacturing exporters who need modern web presence and process automation — not both outsourced to the cheapest vendor.",
    industries: ["IT Services", "Auto & Engineering", "Manufacturing", "EdTech", "Biotech"],
    keyServices: ["Web Development", "AI Automation", "n8n", "GoHighLevel", "SEO"],
    faqs: [
      {
        q: "Do you work with Pune manufacturing and auto companies?",
        a: "Yes. We build supplier-facing portals, order-tracking workflows, and WhatsApp alert systems for manufacturing teams. Pune's engineering and manufacturing businesses often have manual data entry between legacy ERPs — n8n bridges those gaps cleanly without replacing the ERP.",
      },
      {
        q: "Can you upgrade our legacy website to Next.js in Pune?",
        a: "Yes. We run full legacy-to-Next.js migrations with 301 redirect mapping to preserve existing SEO equity, 95+ Lighthouse score guaranteed, and zero downtime. We've migrated sites from WordPress, Drupal, and custom PHP stacks.",
      },
    ],
  },
  {
    slug: "chennai",
    name: "Chennai",
    country: "India",
    flag: "🇮🇳",
    region: "India",
    currencySymbol: "₹",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "Detroit of South Asia — SaaS giants and deep tech roots",
    context:
      "Chennai is India's SaaS capital (home to Zoho, Freshworks) and the automobile hub of South Asia. Companies here care about architecture, reliability, and code quality. We match that mindset: typed TypeScript, automated CI, and documented codebases.",
    industries: ["SaaS", "Automotive", "Healthcare", "Fintech", "Logistics"],
    keyServices: ["Web Development", "AI Agent Development", "n8n Automation", "SEO", "Claude Integration"],
    faqs: [
      {
        q: "Do you work with Chennai-based SaaS companies?",
        a: "Yes. Chennai's SaaS density means we frequently build marketing sites with product-led SEO, interactive product demo pages, and AI agent add-ons. We understand the B2B SaaS buyer journey and design sites specifically to drive demo bookings.",
      },
      {
        q: "Can you build HIPAA/healthcare-compliant automation for Chennai health tech?",
        a: "We build with data privacy in mind — encrypted data transfer, access logging, and self-hosted n8n instances within Indian AWS/GCP regions for data residency. We don't touch PHI without appropriate Business Associate Agreements and security architecture in place.",
      },
    ],
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    country: "India",
    flag: "🇮🇳",
    region: "India",
    currencySymbol: "₹",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "India's corporate millennium city — where enterprises automate",
    context:
      "Gurgaon is corporate India: Fortune 500 headquarters, rapid-growth consumer brands, and venture-funded unicorns along Cyber City and Golf Course Road. Gurgaon businesses move fast and expect agency partners to deliver at executive-ready quality without hand-holding.",
    industries: ["Fintech", "Consumer Internet", "Real Estate", "Professional Services", "Retail"],
    keyServices: ["AI Agent Development", "n8n Automation", "Web Development", "GoHighLevel", "Design Systems"],
    faqs: [
      {
        q: "Do you do in-person meetings for Gurgaon-based enterprise clients?",
        a: "Yes. We're based in the NCR region and attend in-person kick-off workshops and quarterly review sessions for Gurgaon retainers. Day-to-day sprint delivery remains async on Slack and GitHub to maintain maximum development velocity.",
      },
      {
        q: "Can you build a design system for a Gurgaon startup?",
        a: "Yes. We build tokenised design systems in Figma and code (Tailwind CSS, React component libraries, Storybook). If your engineering team is building inconsistently across multiple products, a design system sprint standardises everything in 6–8 weeks.",
      },
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    country: "India",
    flag: "🇮🇳",
    region: "India",
    currencySymbol: "₹",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "NCR's electronics and software delivery corridor",
    context:
      "Noida has evolved from an IT back-office hub into a tech powerhouse with major electronics manufacturing, media cities, and SaaS startups along the Expressway. We serve Noida companies that want to build modern digital infrastructure at high velocity.",
    industries: ["IT Services", "Electronics", "Media", "E-commerce", "Real Estate"],
    keyServices: ["Web Development", "AI Automation", "GoHighLevel", "n8n", "SEO"],
    faqs: [
      {
        q: "Can you build a lead generation funnel for a Noida real estate developer?",
        a: "Yes. We build high-converting landing pages with instant WhatsApp booking, virtual tour integration, and CRM sync to GoHighLevel. For NCR real estate, our automated speed-to-lead workflows typically double qualified site visits.",
      },
    ],
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    country: "India",
    flag: "🇮🇳",
    region: "India",
    currencySymbol: "₹",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "Eastern India's commercial gateway — traditional businesses modernising",
    context:
      "Kolkata's traditional trading and manufacturing businesses are modernising quickly, with second-generation owners investing in digital infrastructure and automation. We serve Kolkata businesses that want to compete nationally without relocating — a professional web presence and AI automation that works while the team sleeps.",
    industries: ["Trading", "Manufacturing", "Jute & Textiles", "IT Services", "Retail"],
    keyServices: ["Web Development", "AI Automation", "SEO", "GoHighLevel", "n8n"],
    faqs: [
      {
        q: "Can Value Tech Solution help a Kolkata trading company go digital?",
        a: "Yes. We've helped traditional trading businesses build catalogue websites, lead-capture systems, and WhatsApp automation that routes enquiries to the right salesperson. Most Kolkata trading clients see their first digital lead within 30 days of launch.",
      },
      {
        q: "What's the timeline for a basic Kolkata business website?",
        a: "3–4 weeks from kick-off to launch. Week 1: content architecture and design. Weeks 2–3: build. Week 4: review and go live. We handle domain configuration, SSL, and Google Analytics setup.",
      },
    ],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    country: "India",
    flag: "🇮🇳",
    region: "India",
    currencySymbol: "₹",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "Gujarat's business capital — commerce runs on relationships and speed",
    context:
      "Ahmedabad is one of India's fastest-growing business cities, driven by chemicals, textiles, pharmaceuticals, and a new wave of SaaS startups. Gujarati business culture values speed and ROI — which maps perfectly to our fixed-price, no-retainer engagement model.",
    industries: ["Chemicals", "Textiles", "Pharma", "SaaS", "FMCG"],
    keyServices: ["Web Development", "AI Automation", "GoHighLevel", "n8n", "SEO"],
    faqs: [
      {
        q: "Do you offer website packages for Ahmedabad SMEs?",
        a: "Yes. Our web sprints are designed for growing businesses — fixed scope, 3–4 weeks, no hidden costs. Tailored quotes are provided following a 15-minute discovery call.",
      },
      {
        q: "Can you automate WhatsApp follow-up for an Ahmedabad B2B business?",
        a: "Yes. We build WhatsApp Business API automations via GHL, AiSensy, or Interakt that trigger on form submissions, missed calls, or CRM stage changes. For Ahmedabad B2B, the missed-call text-back workflow alone typically recovers 15–25% of lost leads.",
      },
    ],
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    country: "India",
    flag: "🇮🇳",
    region: "India",
    currencySymbol: "₹",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "Rajasthan's pink-city startup scene rising fast",
    context:
      "Jaipur's economy blends traditional exports (gems, textiles, handicrafts) with a growing startup and IT services sector. Businesses here are digitising rapidly and need web and automation partners who understand both the local market and global digital standards.",
    industries: ["Gems & Jewellery", "Textiles", "IT Services", "Tourism", "Education"],
    keyServices: ["Web Development", "SEO", "AI Automation", "n8n", "GoHighLevel"],
    faqs: [
      {
        q: "Can you build an e-commerce site for a Jaipur jewellery or textile exporter?",
        a: "Yes. We build Shopify and custom Next.js e-commerce sites with international payment gateways (Stripe, PayPal), GST invoicing, and multi-currency support. Jewellery and textile exporters in Jaipur often need strong visual design and fast global load times — both are built into our default stack.",
      },
      {
        q: "How can AI automation help a Jaipur handicraft business?",
        a: "Common wins: automated WhatsApp catalogues, enquiry-to-quote pipelines, inventory alerts, and international lead follow-up in the buyer's time zone. An n8n workflow can handle international enquiries overnight so your Jaipur team walks in to booked meetings.",
      },
    ],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    country: "India",
    flag: "🇮🇳",
    region: "India",
    currencySymbol: "₹",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "North India's planned city with a growing startup base",
    context:
      "Chandigarh and the tricity area (Mohali, Panchkula) house a quietly growing IT and services sector alongside agriculture, hospitality, and education businesses. For our Chandigarh clients, we're often the first professional web development or automation partner they've worked with — and we're built to make that onboarding smooth.",
    industries: ["IT Services", "Agriculture", "Hospitality", "Education", "Real Estate"],
    keyServices: ["Web Development", "SEO", "AI Automation", "GoHighLevel", "n8n"],
    faqs: [
      {
        q: "Do you serve businesses in Chandigarh, Mohali, and Panchkula?",
        a: "Yes — the entire tricity area. All our work is remote-first so geography doesn't change the quality or timeline. Chandigarh businesses get the same senior engineers as our Delhi and Bangalore clients.",
      },
      {
        q: "How do I get started with a website sprint in Chandigarh?",
        a: "We begin with a quick discovery call to map your business goals, target audience, and required pages. We provide a transparent fixed quote and deliver within 3–4 weeks with 95+ Lighthouse guaranteed.",
      },
    ],
  },

  // ── INTERNATIONAL ────────────────────────────────────────────────────
  {
    slug: "new-york",
    name: "New York",
    country: "USA",
    flag: "🇺🇸",
    region: "USA",
    currencySymbol: "$",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "World's financial capital — built for ambition",
    context:
      "New York businesses demand agency-quality work at startup speed. Our India-based senior engineering team delivers exactly that — high-ticket Next.js web applications and production-grade AI agent sprints at world-class standards, with EST-overlap communication and zero compromise on quality.",
    industries: ["Finance", "Media", "Legal", "Fashion", "Real Estate"],
    keyServices: ["AI Agent Development", "Claude Integration", "Web Development", "n8n Automation", "SEO"],
    faqs: [
      {
        q: "How does working with an India-based agency across US time zones work?",
        a: "We schedule all sync calls during EST morning overlap (9–11 AM EST = 7–9 PM IST). Async communication via Slack and Loom covers the rest. Most New York clients find the model works better than expected — we push work while you sleep and you wake up to progress.",
      },
      {
        q: "What does a bespoke website sprint include?",
        a: "Five or more custom pages on Next.js — Home, About, Services, Case Studies, Contact, and custom workflows. 95+ Lighthouse mobile score guaranteed. Complete SEO architecture including schema, sitemap, robots.txt, and GA4. Contact form, SSL, domain configuration, and handover.",
      },
      {
        q: "Can you build AI agents for New York fintech or legal startups?",
        a: "Yes. We build with audit trails, structured outputs, human-in-the-loop review, and prompt-injection defences suitable for regulated industries. For legal and fintech clients we don't ship any agent that produces regulated output without a confidence gate and human review step.",
      },
      {
        q: "How do you handle payments from US clients?",
        a: "Stripe (card or ACH) or wire transfer. 50% on kick-off, 50% on delivery. USD invoicing with W-8BEN available for US tax purposes.",
      },
    ],
  },
  {
    slug: "london",
    name: "London",
    country: "UK",
    flag: "🇬🇧",
    region: "UK",
    currencySymbol: "£",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "Europe's tech and finance hub — moving at City pace",
    context:
      "London businesses get senior engineering from India's deep talent pool, at a fraction of UK agency rates, with GMT+1 communication overlap and British-style project management: written scope, written tradeoffs, fixed price, no surprises.",
    industries: ["Finance", "Legal", "PropTech", "Retail", "Consulting"],
    keyServices: ["AI Agent Development", "Web Development", "n8n Automation", "SEO", "GoHighLevel"],
    faqs: [
      {
        q: "How does working with a UK client across time zones look in practice?",
        a: "We schedule sync calls between 9–11 AM GMT (2:30–4:30 PM IST). That's comfortable on both ends. Slack and Loom cover the rest. London clients often find the async model means less time in meetings and more progress between calls.",
      },
      {
        q: "What is the engagement model for a London company?",
        a: "We operate on fixed-scope sprints (Next.js, 95+ Lighthouse guaranteed, full SEO architecture, 3–4 weeks delivery). All quotes are transparent fixed-price with clear deliverables and British-format invoicing.",
      },
      {
        q: "Do you build AI automation for UK financial services firms?",
        a: "Yes, with GDPR awareness. All data processing for UK clients can be kept within EU/EEA infrastructure. We document all AI tool calls, maintain audit logs, and build human-review gates at every sensitive output step.",
      },
      {
        q: "Can you help a London PropTech company with AI lead automation?",
        a: "PropTech is a strong vertical for us. We build lead-triage agents, AI-drafted follow-ups, CRM routing based on buyer intent, and WhatsApp/email follow-up sequences. UK property buyers are active evenings — automation handles the response while your team is offline.",
      },
    ],
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    flag: "🇦🇪",
    region: "UAE",
    currencySymbol: "AED",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "Middle East's fastest-growing tech and commerce hub",
    context:
      "Dubai businesses operate in one of the world's most competitive markets: high expectations, international buyers, and a zero-tolerance culture for slow websites and missed enquiries. We build for that standard — fast, multilingual-ready, and automated to respond to leads before your competitor does.",
    industries: ["Real Estate", "Hospitality", "Retail", "Finance", "Logistics"],
    keyServices: ["Web Development", "AI Automation", "GoHighLevel", "WhatsApp Automation", "SEO"],
    faqs: [
      {
        q: "Do you build websites for Dubai real estate agencies?",
        a: "Yes — real estate is our most common Dubai vertical. We build property listing sites, lead-capture pages, and WhatsApp automation that handles enquiries in the buyer's language (Arabic/English). CRM integration with GoHighLevel or HubSpot is standard.",
      },
      {
        q: "Can you build Arabic/bilingual websites for UAE clients?",
        a: "Yes. We build RTL-aware Next.js sites with English and Arabic variants, proper hreflang tags, and RTL CSS using logical properties. Arabic content can be provided by your team or sourced via a professional translation partner we recommend.",
      },
      {
        q: "How do UAE clients pay for projects?",
        a: "Wire transfer (AED or USD) or Stripe card. 50% on kick-off, 50% on delivery. We issue invoices in AED or USD as required.",
      },
      {
        q: "Can you automate WhatsApp follow-up for a Dubai hospitality business?",
        a: "Absolutely. We connect the WhatsApp Business API to your CRM (GoHighLevel, HubSpot, or custom) and build automated sequences for enquiries, booking confirmations, and post-stay review requests. For Dubai hospitality, WhatsApp automation typically reduces follow-up time from hours to under 2 minutes.",
      },
    ],
  },
  {
    slug: "toronto",
    name: "Toronto",
    country: "Canada",
    flag: "🇨🇦",
    region: "Canada",
    currencySymbol: "CAD",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "Canada's innovation hub — AI-forward and globally connected",
    context:
      "Toronto's tech ecosystem rivals any North American city: strong AI research (Vector Institute, Mila), a deep talent pool, and businesses that understand the value of engineering done properly. We serve Toronto clients who want execution-quality work from India's top engineers at Canadian-budget pricing.",
    industries: ["FinTech", "HealthTech", "AI/ML", "Legal", "Real Estate"],
    keyServices: ["AI Agent Development", "Claude Integration", "Web Development", "n8n Automation", "SEO"],
    faqs: [
      {
        q: "How do you work with Toronto clients across time zones?",
        a: "We overlap with EST. Sync calls at 9–11 AM EST work well for both ends. Async progress via Slack and Loom. Most Toronto clients find they get more throughput than a local agency because we ship overnight and they review in the morning.",
      },
      {
        q: "Do you work with Toronto AI startups building on Claude or GPT-4o?",
        a: "Frequently. We do LLM integration, RAG system builds, eval suites, and production hardening for Toronto AI startups. If your team has the product vision but needs senior engineers to ship the AI layer reliably, that's exactly what we do.",
      },
      {
        q: "What does a website sprint include?",
        a: "Five pages on Next.js, 95+ Lighthouse guaranteed, full SEO setup (schema, sitemap, GA4), mobile-first design, contact form, and SSL. Flat fixed price — no scope creep unless you add scope.",
      },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    region: "Singapore",
    currencySymbol: "SGD",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "Southeast Asia's digital finance and startup gateway",
    context:
      "Singapore's businesses sit at the intersection of Southeast Asian growth and global capital. Compliance matters, speed matters, and the bar for digital quality is high. We serve Singapore clients who expect a global standard of engineering and communication — delivered at India's cost efficiency.",
    industries: ["FinTech", "Logistics", "Legal", "HealthTech", "EdTech"],
    keyServices: ["AI Automation", "Web Development", "n8n", "SEO", "Claude Integration"],
    faqs: [
      {
        q: "Do you build PDPA-compliant automation for Singapore businesses?",
        a: "Yes. For Singapore clients, we can keep all data processing within Singapore or APAC AWS infrastructure (ap-southeast-1). We build with data minimisation, explicit consent flows, and documented audit trails appropriate for PDPA compliance.",
      },
      {
        q: "Can you build AI automation for a Singapore logistics company?",
        a: "Yes. Common workflows: shipment tracking agents, document extraction (AWBs, invoices), supplier communication drafting, and exception alerting. n8n self-hosted on Singapore infra handles the volume without per-task billing at scale.",
      },
      {
        q: "How do Singapore clients pay?",
        a: "Stripe (SGD or USD card), PayNow, or wire transfer. 50% on kick-off, 50% on delivery. SGD or USD invoicing available.",
      },
    ],
  },
  {
    slug: "sydney",
    name: "Sydney",
    country: "Australia",
    flag: "🇦🇺",
    region: "Australia",
    currencySymbol: "AUD",
    starterPrice: "Custom Scope",
    agentPrice: "Tailored Architecture",
    market: "APAC's digital economy hub — direct India overlap",
    context:
      "Sydney is the closest major English-speaking market to India in terms of time zone overlap — AEDT sits just 4.5–5.5 hours ahead of IST. That makes collaboration unusually smooth. Sydney clients get senior India-based engineering with same-day turnaround on most deliverables.",
    industries: ["FinTech", "Property", "Retail", "Healthcare", "Mining & Resources"],
    keyServices: ["Web Development", "AI Automation", "n8n", "SEO", "GoHighLevel"],
    faqs: [
      {
        q: "Why choose an India-based agency over a Sydney web development studio?",
        a: "The time zone overlap is tight (Sydney is 4.5–5.5 hours ahead of IST), so same-day response is normal. Our cost is 40–60% less than comparable Sydney studios. And our stack — Next.js, n8n, Claude API — is the same one Sydney's best tech agencies use.",
      },
      {
        q: "Do you build websites for Sydney property and real estate businesses?",
        a: "Yes. Property is a strong vertical for us globally. We build suburb-landing pages, agent profile sites, lead-capture systems, and GoHighLevel follow-up automations. Australian real estate leads are high-value — automation that responds within 2 minutes versus 4 hours is a material revenue difference.",
      },
      {
        q: "How do Australian clients pay?",
        a: "Stripe (AUD card) or wire transfer. 50% on kick-off, 50% on delivery. AUD or USD invoicing.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export const indianCities = cities.filter((c) => c.region === "India");
export const internationalCities = cities.filter((c) => c.region !== "India");
