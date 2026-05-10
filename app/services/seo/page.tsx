import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "SEO Optimization",
  description:
    "Technical SEO, content systems, and link strategy that compound over months — not one-off audits that gather dust.",
};

export default function SeoPage() {
  return (
    <>
      <ServiceDetail
        eyebrow="SEO Optimization"
        title={
          <>
            SEO that compounds for{" "}
            <span className="italic-accent text-carbon-500">years,</span>
            <br />
            not weeks.
          </>
        }
        intro="We don't sell 100-page audit PDFs. We fix the technical foundation, build a content engine, and earn links the way Google actually rewards — then track every metric that touches revenue."
        heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2200&q=80"
        heroAlt="Analytics dashboard"
        midImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2200&q=80"
        midAlt="Data visualisation"
        midCaption="(field) — measured against revenue"
        midHeadline={
          <>
            Rankings are the byproduct.
            <br />
            <span className="italic-accent text-white/70">
              Pipeline is the point.
            </span>
          </>
        }
        context={[
          {
            title: "Audits without execution are wallpaper",
            body: (
              <>
                Most agencies hand you a 120-page PDF and disappear. We do the
                fixes. Schema, redirects, internal linking, page-speed
                budgets — all merged, all in CI.
              </>
            ),
          },
          {
            title: "Keywords are the easy part",
            body: (
              <>
                Anyone can run Ahrefs. The work is mapping cluster intent to
                funnel stage, building an editorial calendar your team can
                run, and shipping content that earns links — not just words.
              </>
            ),
          },
          {
            title: "Backlinks aren't a list, they're a strategy",
            body: (
              <>
                Digital PR, HARO, broken-link, resource-page, and original
                research outreach. No PBNs. No directory spam. Links that
                still rank you in two years.
              </>
            ),
          },
          {
            title: "If you can't tie SEO to revenue, you're guessing",
            body: (
              <>
                Looker Studio dashboards tracking organic-attributed pipeline,
                not vanity rankings. We review them with you monthly.
              </>
            ),
          },
        ]}
        features={[
          {
            title: "Technical SEO audit",
            desc: "Crawlability, Core Web Vitals, schema, indexation, internal linking, log-file analysis.",
          },
          {
            title: "Keyword strategy",
            desc: "Cluster mapping by intent and funnel stage. Rank where your customers actually search.",
          },
          {
            title: "Content engine",
            desc: "Editorial calendar, briefs, and writers (or your team) producing 4–12 ranked posts a month.",
          },
          {
            title: "On-page optimization",
            desc: "Titles, metas, H-structure, schema, and entity coverage — done at scale across the site.",
          },
          {
            title: "Link building",
            desc: "Digital PR, HARO, broken-link, and resource-page outreach. No PBNs, no shortcuts.",
          },
          {
            title: "Reporting that matters",
            desc: "Looker Studio dashboard tracking pipeline, not just rankings. Reviewed monthly.",
          },
        ]}
        deliverables={[
          "Full technical SEO audit + fixes",
          "Keyword cluster map (300–600 terms)",
          "12-month content roadmap",
          "Schema markup across templates",
          "Internal linking strategy",
          "Monthly link acquisition",
          "Looker Studio reporting dashboard",
          "Quarterly strategy review",
        ]}
        pricing={[
          {
            name: "Audit & Fix",
            price: "from $499",
            bullets: [
              "Technical audit + roadmap",
              "Top-15 critical fixes implemented",
              "Schema + on-page baseline",
              "One-time, 3-week sprint",
            ],
          },
          {
            name: "Growth Retainer",
            price: "from $799 / mo",
            highlight: true,
            bullets: [
              "Ongoing content + outreach",
              "8–12 published posts / month",
              "5–10 quality backlinks / month",
              "Monthly review + dashboard",
            ],
          },
          {
            name: "Enterprise",
            price: "custom",
            bullets: [
              "Multi-region, multi-language",
              "Dedicated SEO lead",
              "Programmatic SEO at scale",
              "Quarterly executive review",
            ],
          },
        ]}
      />
      <CTA />
    </>
  );
}
