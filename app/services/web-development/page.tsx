import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Web Development",
  description:
    "Production-grade Next.js, React, and headless web development. Fast, accessible, SEO-ready, deployed on the edge.",
};

export default function WebDevPage() {
  return (
    <>
      <ServiceDetail
        eyebrow="Web Development"
        title={
          <>
            Websites that load in{" "}
            <span className="italic-accent text-carbon-500">under 2 seconds</span>
            <br />
            and rank{" "}
            <span className="italic-accent text-carbon-500">on day one.</span>
          </>
        }
        intro="We build marketing sites and web apps in Next.js, React, and headless CMS stacks — engineered for speed, SEO, and a codebase your future hires will actually want to work in."
        heroImage="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=2200&q=80"
        heroAlt="Modern web development workspace"
        midImage="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=2200&q=80"
        midAlt="Code on screen, close up"
        midCaption="(field) — typed, tested, deployed"
        midHeadline={
          <>
            TypeScript everywhere.
            <br />
            <span className="italic-accent text-white/70">
              CI-budgeted Lighthouse 99.
            </span>
          </>
        }
        context={[
          {
            title: "Templates rot. Engineering compounds.",
            body: (
              <>
                A Webflow template can ship a landing page in a week. It will
                also collapse the moment you need real performance, real
                integrations, or real SEO. We write code that scales with you.
              </>
            ),
          },
          {
            title: "Performance is a budget, not an afterthought",
            body: (
              <>
                We enforce Lighthouse 95+ in CI. If a PR adds 50KB to the
                bundle, the build fails. Speed isn't something we measure —
                it's something we don't ship without.
              </>
            ),
          },
          {
            title: "Accessibility is the default, not a checkbox",
            body: (
              <>
                Every component starts with semantic HTML, keyboard
                navigation, and tested screen-reader paths. We don't bolt on
                ARIA later — we don't have to.
              </>
            ),
          },
          {
            title: "Your content team should never wait on us",
            body: (
              <>
                Sanity, Contentful, or Hygraph — content lives in a CMS your
                team owns. New blog posts and pricing pages don't need an
                engineering ticket.
              </>
            ),
          },
        ]}
        features={[
          {
            title: "Next.js + TypeScript",
            desc: "Server components, edge rendering, and a typed codebase that scales without surprise bugs.",
          },
          {
            title: "Headless CMS",
            desc: "Content team in Sanity, Contentful, or Hygraph. Devs stay in code. Everyone wins.",
          },
          {
            title: "Performance budgets",
            desc: "Lighthouse 95+ enforced in CI. Images optimised, fonts subset, bundles split.",
          },
          {
            title: "Accessibility",
            desc: "WCAG 2.1 AA from day one — semantic HTML, keyboard navigation, real screen-reader testing.",
          },
          {
            title: "Edge hosting",
            desc: "Deployed to Vercel, Cloudflare, or AWS with preview URLs for every PR.",
          },
          {
            title: "Analytics built-in",
            desc: "GA4, Plausible, or PostHog wired up with revenue events from launch.",
          },
        ]}
        deliverables={[
          "Complete Figma design system",
          "Production-ready Next.js codebase",
          "Headless CMS configured and seeded",
          "Lighthouse 95+ across all pages",
          "On-page SEO + structured data",
          "GA4 / Plausible / PostHog setup",
          "CI/CD pipeline with preview deploys",
          "Documentation + handover walkthrough",
        ]}
        pricing={[
          {
            name: "Landing",
            price: "from $599",
            bullets: [
              "Single high-converting landing page",
              "Up to 6 sections + lead form",
              "On-page SEO + analytics",
              "Delivery in 2 weeks",
            ],
          },
          {
            name: "Marketing Site",
            price: "from $2,499",
            highlight: true,
            bullets: [
              "Up to 12 pages + blog",
              "Headless CMS configured",
              "Full SEO foundation",
              "Delivery in 4–6 weeks",
            ],
          },
          {
            name: "Web Application",
            price: "from $5,999",
            bullets: [
              "Auth, dashboards, billing",
              "Database + API design",
              "Admin panel + roles",
              "Delivery in 8–14 weeks",
            ],
          },
        ]}
      />
      <CTA />
    </>
  );
}
