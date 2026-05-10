import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Design Systems",
  description:
    "Token-driven, fully documented design systems and product flows that turn first-time visitors into repeat customers.",
};

export default function DesignSystemsPage() {
  return (
    <>
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
