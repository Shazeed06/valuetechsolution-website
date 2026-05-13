import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import CTA from "@/components/CTA";
import {
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/Schema";

export const metadata: Metadata = {
  title: "Design System Agency India · Brand & Product Design",
  description:
    "Design system agency in India — token-driven design systems, Figma libraries, React component libraries, and brand identity for SaaS startups.",
  keywords: [
    "design system agency India",
    "brand identity for SaaS India",
    "Figma design system service",
    "React component library development",
    "product design agency India",
    "design tokens consulting",
  ],
  alternates: { canonical: "https://valuetechsolution.com/services/design-systems" },
};

const faqs = [
  {
    q: "What's the difference between a brand sprint and a full design system?",
    a: "A brand sprint locks in logo, type, color, and the rules for using them — 2–3 weeks, fixed price. A full design system extends that into a working Figma library plus a React/TypeScript component library, Storybook documentation, and motion spec. Pick brand sprint if you need identity; full system if you're shipping a product.",
  },
  {
    q: "Do you work in Figma or another tool?",
    a: "Figma. Every design token, component, and motion spec lands in a shared Figma workspace your team owns from day one. We handover with a Loom walkthrough and stay on call for 30 days post-launch.",
  },
  {
    q: "Can you migrate our existing design system?",
    a: "Yes. We audit the current state, deprecate inconsistencies, formalise tokens, rebuild the component library, and ship a migration guide your engineering team can follow without breaking production.",
  },
];

export default function DesignSystemsPage() {
  return (
    <>
      <ServiceSchema
        name="Design Systems"
        serviceType="Design"
        description="Token-driven, fully documented design systems, brand sprints, and product design for SaaS startups in India and globally."
        url="https://valuetechsolution.com/services/design-systems"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Services", url: "https://valuetechsolution.com/services" },
          { name: "Design Systems", url: "https://valuetechsolution.com/services/design-systems" },
        ]}
      />
      <ServiceDetail
        eyebrow="Design Systems"
        title={
          <>
            Brand systems and{" "}
            <span className="italic-accent text-carbon-500">product flows</span>
            <br />
            that compound.
          </>
        }
        intro="A Figma file isn't a design system. We build token-driven libraries, documented patterns, and motion guidelines your engineers will actually use — and your next designer can extend without rewriting from scratch."
        heroImage="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=2200&q=80"
        heroAlt="Design system sketches and components"
        midImage="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=2200&q=80"
        midAlt="Designer at work"
        midCaption="(field) — designed to be extended"
        midHeadline={
          <>
            Tokens. Patterns. Motion.
            <br />
            <span className="italic-accent text-white/70">
              Documented, not decorated.
            </span>
          </>
        }
        context={[
          {
            title: "Most design systems die after launch",
            body: (
              <>
                Without governance, tokens drift, components fork, and the
                Figma library becomes a graveyard. We hand you a system
                designed for the second year, not just the first launch.
              </>
            ),
          },
          {
            title: "Brand identity is the floor, not the ceiling",
            body: (
              <>
                Logo, palette, typography — that's table stakes. The hard
                part is the flow, the rhythm, the small interactions that
                make a brand feel premium instead of generic.
              </>
            ),
          },
          {
            title: "Engineers don't want a redesign — they want tokens",
            body: (
              <>
                Color, spacing, type-scale, radius, motion: shipped as JSON
                tokens that drop into Tailwind, CSS variables, or any design
                tool. One source, every surface.
              </>
            ),
          },
          {
            title: "Motion is part of the brand now",
            body: (
              <>
                Easing curves, page transitions, hover micro-interactions —
                we define them once, you reuse them everywhere.
              </>
            ),
          },
        ]}
        features={[
          {
            title: "Brand identity",
            desc: "Logo, palette, type system, voice — defined and documented in one place.",
          },
          {
            title: "Design tokens",
            desc: "Color, spacing, type, radius, motion as JSON. Single source of truth across Figma + code.",
          },
          {
            title: "Component library",
            desc: "Production-grade React + Tailwind components, fully accessible, fully documented.",
          },
          {
            title: "Pattern library",
            desc: "Page-level patterns (heroes, lists, grids, forms) with usage rules so the team doesn't reinvent.",
          },
          {
            title: "Motion guidelines",
            desc: "Easing curves, durations, transitions — defined as variables your engineers can apply uniformly.",
          },
          {
            title: "Governance",
            desc: "Contribution guide, review checklist, and a quarterly health audit so the system stays alive.",
          },
        ]}
        deliverables={[
          "Brand identity guidelines (PDF + Figma)",
          "Token JSON + Tailwind preset",
          "Figma component + pattern library",
          "React + TypeScript component package",
          "Storybook documentation",
          "Motion specification doc",
          "Contribution + review guidelines",
          "Onboarding workshop for your team",
        ]}
        pricing={[
          {
            name: "Brand sprint",
            price: "from $1,299",
            bullets: [
              "Logo + identity refresh",
              "Type, color, spacing tokens",
              "Brand guidelines PDF",
              "Delivery in 3 weeks",
            ],
          },
          {
            name: "Full system",
            price: "from $4,499",
            highlight: true,
            bullets: [
              "Brand + product design system",
              "Figma + React component library",
              "Storybook + motion spec",
              "Delivery in 6–10 weeks",
            ],
          },
          {
            name: "Design retainer",
            price: "from $1,499 / mo",
            bullets: [
              "Ongoing system extension",
              "New patterns each month",
              "Design QA across releases",
              "Dedicated senior designer",
            ],
          },
        ]}
      />
      <CTA />
    </>
  );
}
