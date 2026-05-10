import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import CTA from "@/components/CTA";
import {
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/Schema";

export const metadata: Metadata = {
  title: "GoHighLevel Setup · CRM, Funnels & Automations",
  description:
    "End-to-end GoHighLevel setups by engineers — pipelines, funnels, calendars, snapshot deployments, and AI-enhanced follow-up sequences.",
  alternates: { canonical: "https://valuetechsolution.com/services/gohighlevel" },
};

const faqs = [
  {
    q: "Do you only set up GHL or also operate it?",
    a: "Both. We deliver clean GHL builds — pipelines, funnels, calendars, snapshots — and we offer a monthly retainer where we keep the system tuned, add new automations, and produce monthly reports.",
  },
  {
    q: "Can you migrate us into GHL from another CRM?",
    a: "Yes. We migrate from HubSpot, Pipedrive, ActiveCampaign, Mailchimp, and most CRMs. Contacts, custom fields, tag hierarchies, and email sequence equivalents are mapped, deduplicated, and tested before cutover.",
  },
  {
    q: "Do you build white-label snapshots for agencies?",
    a: "Yes. If you run a marketing agency, we build reusable GHL snapshots tailored to your offers — onboarding sequences, review-request workflows, missed-call text-back, content calendars — that you can clone into client sub-accounts.",
  },
  {
    q: "How does AI fit into a GHL setup?",
    a: "We layer LLM-driven steps on top of GHL workflows: intent classification on inbound, AI-drafted email replies inside the conversation panel, and qualification questions answered by a custom agent before a human is paged.",
  },
];

export default function GHLPage() {
  return (
    <>
      <ServiceSchema
        name="GoHighLevel Setup"
        serviceType="CRM and Marketing Automation"
        description="GoHighLevel CRM, funnel, calendar, snapshot, and AI-enhanced workflow setups by engineers."
        url="https://valuetechsolution.com/services/gohighlevel"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Services", url: "https://valuetechsolution.com/services" },
          {
            name: "GoHighLevel Setup",
            url: "https://valuetechsolution.com/services/gohighlevel",
          },
        ]}
      />

      <ServiceDetail
        eyebrow="GoHighLevel · GHL setup"
        title={
          <>
            One platform.{" "}
            <span className="italic-accent text-carbon-500">
              Pipelines that close.
            </span>
          </>
        }
        intro="GoHighLevel can replace 6 tools — CRM, email, SMS, funnels, calendars, reputation. But only if it's set up like a system, not a sandbox. We build clean, snapshot-able GHL accounts ready to scale to 1, 10, or 1,000 sub-accounts."
        heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2200&q=80"
        heroAlt="Marketing dashboard"
        midImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2200&q=80"
        midAlt="Data + funnel visualisation"
        midCaption="(field) — pipeline-ready in days, not weeks"
        midHeadline={
          <>
            Snapshots. Funnels. Follow-up.
            <br />
            <span className="italic-accent text-white/70">All in one stack.</span>
          </>
        }
        context={[
          {
            title: "GHL sold by marketers, set up like toys",
            body: (
              <>
                Most GHL builds are tag soup with broken automations and no
                naming convention. We build it the way an engineer would: tag
                ontology, pipeline standards, snapshot reuse, version notes.
              </>
            ),
          },
          {
            title: "Snapshots that actually scale",
            body: (
              <>
                If you're an agency, your snapshot is your product. We build
                yours so it deploys cleanly into sub-accounts, with custom
                fields, calendars, and workflows wired correctly the first time.
              </>
            ),
          },
          {
            title: "Conversations across channels",
            body: (
              <>
                Email, SMS, missed-call text-back, WhatsApp, Instagram DMs — one
                inbox, one timeline, one source of truth per contact. We wire
                the routing rules and on-call rotation.
              </>
            ),
          },
          {
            title: "AI inside GHL",
            body: (
              <>
                We add LLM-powered intent classification, draft replies, and
                qualification agents into your GHL conversation panel — your
                team only sees the questions worth their time.
              </>
            ),
          },
        ]}
        features={[
          {
            title: "Pipelines + opportunities",
            desc: "Stage definitions, automations, deal velocity reports, and clean handoffs.",
          },
          {
            title: "Funnels + landing pages",
            desc: "On-brand, fast, conversion-optimised funnels with split-test infrastructure.",
          },
          {
            title: "Calendars + booking flows",
            desc: "Round-robin, team, class-based, and group calendars with confirmations.",
          },
          {
            title: "Email + SMS automations",
            desc: "Lifecycle journeys, abandoned-cart, review request, missed-call text-back.",
          },
          {
            title: "Reputation + reviews",
            desc: "Auto-request, monitor, and respond — wired to Google Business + Yelp.",
          },
          {
            title: "Snapshot delivery",
            desc: "Reusable, version-controlled snapshots with documented onboarding flow.",
          },
        ]}
        deliverables={[
          "GHL account audit + architecture",
          "Tag and field ontology",
          "Pipelines + opportunity stages",
          "Funnels + landing pages",
          "Email + SMS workflow library",
          "Calendar + booking flows",
          "Reusable snapshot (agencies)",
          "Onboarding doc + Loom walkthrough",
        ]}
        pricing={[
          {
            name: "GHL kickstart",
            price: "from $1,500",
            bullets: [
              "Single-account setup",
              "1 pipeline + 3 funnels",
              "5 core automations",
              "2-week delivery",
            ],
          },
          {
            name: "Agency snapshot",
            price: "from $4,800",
            highlight: true,
            bullets: [
              "Reusable agency snapshot",
              "Pipelines, funnels, calendars",
              "10+ workflows + SMS library",
              "4–5 week delivery",
            ],
          },
          {
            name: "GHL retainer",
            price: "from $2,400 / mo",
            bullets: [
              "Ongoing system tuning",
              "New automations monthly",
              "Reporting + reviews",
              "Dedicated GHL engineer",
            ],
          },
        ]}
      />
      <CTA />
    </>
  );
}
