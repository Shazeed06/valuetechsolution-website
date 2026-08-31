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
    starterPrice: "₹41,500",
    agentPrice: "₹10,000",
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
        a: "Our starter website package is ₹41,500 (fixed scope, 4 weeks, 95+ Lighthouse guaranteed). For funded startups needing custom features, SEO content, or a design system, quotes start at ₹1,20,000. All projects include GST-compliant invoicing.",
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
    starterPrice: "₹41,500",
    agentPrice: "₹10,000",
    market: "India's tech capital — AI-native teams move fast here",
    context:
      "Bangalore is the epicentre of India's engineering talent and the city where AI-native startups are being born. Our clients here range from Series A SaaS companies integrating Claude or GPT-4o into their core product, to growth-stage agencies automating their entire delivery stack on n8n.",
    industries: ["SaaS", "Deep Tech", "E-commerce", "HealthTech", "Gaming"],
    keyServices: ["Claude AI Integration", "RAG Systems", "AI Agent Development", "Next.js Web Dev", "n8n Automation"],
    faqs: [
      {
        q: "Can you integrate Claude or GPT-4o into our Bangalore-based SaaS product?",
        a: "Absolutely. LLM integration into SaaS products is one of our core specialties. We handle the full stack — prompt engineering, RAG retrieval, evals, guardrails, observability, and cost control. Engagements start at ₹10,000 for a scoped integration sprint.",
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
    starterPrice: "₹41,500",
    agentPrice: "₹10,000",
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
        a: "Starter site (₹41,500, 4 weeks, 5 pages, 95+ Lighthouse), growth site (from ₹1,20,000, custom design + CMS), and enterprise builds priced on scope. All sites include schema, Core Web Vitals CI, sitemap, robots.txt, and GA4 from day one.",
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
    starterPrice: "₹41,500",
    agentPrice: "₹10,000",
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
        a: "Our starter website is ₹41,500 for 5 pages, built on Next.js, deployed on Vercel, with 95+ Lighthouse guaranteed, full SEO setup, and a 4-week timeline. GST invoice included.",
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
    starterPrice: "₹41,500",
    agentPrice: "₹10,000",
    market: "Oxford of the East — engineering talent + manufacturing scale",
    context:
      "Pune punches above its weight: a massive IT sector, auto manufacturing, and one of India's highest densities of engineering colleges. Our Pune clients are typically mid-market IT companies or manufacturing exporters who need modern web presence and process automation — not both outsourced to the cheapest vendor.",
    industries: ["IT Services", "Automotive", "Manufacturing", "Education", "Fintech"],
    keyServices: ["Web Development", "AI Automation", "n8n", "SEO", "GoHighLevel"],
    faqs: [
      {
        q: "Do you build websites for Pune IT companies?",
        a: "Yes — and we understand what IT services buyers look for: case studies, certifications, clear service scope, fast load time, and structured schema that surfaces in AI search. Our IT services template covers all of that with a 4-week build.",
      },
      {
        q: "Can you automate procurement or ERP workflows for Pune manufacturers?",
        a: "We build n8n and Python automation that connects ERP systems, supplier portals, and internal dashboards. Common workflows: purchase order approvals, supplier QA reporting, and inventory alert systems. We integrate with SAP, Zoho, and custom ERPs via API or DB direct access.",
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
    starterPrice: "₹41,500",
    agentPrice: "₹10,000",
    market: "South India's industrial and IT backbone",
    context:
      "Chennai is a hub for automotive manufacturing, IT exports, and healthcare. Its business culture values reliability and long-term relationships — which matches our fixed-scope, written-tradeoffs engagement model. Chennai clients get the same senior engineers, same performance standards, no compromises.",
    industries: ["Automotive", "IT Exports", "Healthcare", "Shipping", "Retail"],
    keyServices: ["Web Development", "AI Automation", "SEO", "n8n", "GoHighLevel"],
    faqs: [
      {
        q: "Do you work with Chennai-based IT export companies?",
        a: "Yes. We frequently work with Chennai IT service companies that need a modern website and SEO presence to win global clients — particularly in the US and UK. Our sites include AEO-optimized content, schema markup, and llms.txt so you appear in AI search interfaces internationally.",
      },
      {
        q: "Can you build a website in Tamil or multilingual for Chennai businesses?",
        a: "Yes. We support multilingual Next.js sites with i18n routing. Tamil, Hindi, and English variants can be served from the same codebase with proper hreflang tags for Google. Most Chennai clients request English-primary with a Tamil contact page.",
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
    starterPrice: "₹41,500",
    agentPrice: "₹10,000",
    market: "East India's commerce and culture capital — going digital fast",
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
        a: "4 weeks from kick-off to launch for our ₹41,500 starter. Week 1: content collection and design. Weeks 2–3: build. Week 4: review and go live. We handle domain configuration, SSL, and Google Analytics setup.",
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
    starterPrice: "₹41,500",
    agentPrice: "₹10,000",
    market: "Gujarat's business capital — commerce runs on relationships and speed",
    context:
      "Ahmedabad is one of India's fastest-growing business cities, driven by chemicals, textiles, pharmaceuticals, and a new wave of SaaS startups. Gujarati business culture values speed and ROI — which maps perfectly to our fixed-price, no-retainer engagement model.",
    industries: ["Chemicals", "Textiles", "Pharma", "SaaS", "FMCG"],
    keyServices: ["Web Development", "AI Automation", "GoHighLevel", "n8n", "SEO"],
    faqs: [
      {
        q: "Do you offer website packages for Ahmedabad SMEs?",
        a: "Yes. Our ₹41,500 starter is designed for SMEs — 5 pages, fixed scope, 4 weeks, no hidden costs. Larger businesses with product catalogues or multiple service lines get a custom quote after a free 30-minute discovery call.",
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
    starterPrice: "₹41,500",
    agentPrice: "₹10,000",
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
    starterPrice: "₹41,500",
    agentPrice: "₹10,000",
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
        q: "What's the cheapest way to get a professional website in Chandigarh?",
        a: "Our ₹41,500 starter package is our entry point — 5 pages, Next.js, 95+ Lighthouse, full SEO setup, 4 weeks. If your budget is lower, we'll tell you honestly on the first call what's possible and what isn't.",
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
    starterPrice: "$499",
    agentPrice: "$100",
    market: "World's financial capital — built for ambition",
    context:
      "New York businesses demand agency-quality work at startup speed. Our India-based senior engineering team delivers exactly that — $499 starter websites and $1,999 AI agent sprints at a quality that would cost $5,000–$15,000 from a Manhattan agency, with EST-overlap communication and zero compromise on standards.",
    industries: ["Finance", "Media", "Legal", "Fashion", "Real Estate"],
    keyServices: ["AI Agent Development", "Claude Integration", "Web Development", "n8n Automation", "SEO"],
    faqs: [
      {
        q: "How does working with an India-based agency across US time zones work?",
        a: "We schedule all sync calls during EST morning overlap (9–11 AM EST = 7–9 PM IST). Async communication via Slack and Loom covers the rest. Most New York clients find the model works better than expected — we push work while you sleep and you wake up to progress.",
      },
      {
        q: "What does a $499 website from Value Tech Solution include?",
        a: "Five pages on Next.js — Home, About, Services, Contact, and one additional page. 95+ Lighthouse mobile score guaranteed. SEO setup including schema, sitemap, robots.txt, and GA4. Contact form, SSL, domain configuration, and a 30-minute handover call. All for a flat $499.",
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
    starterPrice: "£399",
    agentPrice: "£85",
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
        q: "What's the cost of a business website for a London company?",
        a: "Our starter package is £399 (5 pages, Next.js, 95+ Lighthouse, full SEO, 4 weeks). Custom builds from £999. All prices are fixed-scope — no billing surprises. We provide UK-format invoices with the relevant business details.",
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
    starterPrice: "AED 1,850",
    agentPrice: "AED 370",
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
    starterPrice: "CAD 675",
    agentPrice: "CAD 135",
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
        q: "What does a CAD 675 website include?",
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
    starterPrice: "SGD 675",
    agentPrice: "SGD 135",
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
    starterPrice: "AUD 775",
    agentPrice: "AUD 150",
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
