import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudyPreview from "@/components/CaseStudyPreview";
import StickyStory from "@/components/StickyStory";
import StackMarquee from "@/components/StackMarquee";
import EngagementProcess from "@/components/EngagementProcess";
import CTA from "@/components/CTA";

// Homepage gets its own keyword-led title + description so SERPs
// don't fall back to the root layout's generic copy. `title.absolute`
// disables the "%s · Value Tech Solution" template — we already
// include the brand in the title manually here.
export const metadata: Metadata = {
  title: {
    absolute:
      "AI Automation & Web Development Agency India | Value Tech Solution",
  },
  description:
    "Value Tech Solution is an AI automation and web development agency in India — building AI agents, n8n / GoHighLevel / Zapier / Python automations, Next.js websites and SEO for startups in Delhi, Bangalore, Mumbai, Dubai, and beyond.",
  keywords: [
    "AI automation agency India",
    "AI automation agency Delhi",
    "n8n automation agency India",
    "GoHighLevel agency India",
    "AI agent development India",
    "Next.js development agency India",
    "Zapier consultant India",
    "Python automation services India",
    "Value Tech Solution",
  ],
  alternates: { canonical: "https://valuetechsolution.com" },
  openGraph: {
    title:
      "AI Automation & Web Development Agency India | Value Tech Solution",
    description:
      "AI automation and web development agency in India — AI agents, n8n / GHL / Zapier / Python automations, Next.js websites and SEO for startups in Delhi, Bangalore, Mumbai, and the GCC.",
    url: "https://valuetechsolution.com",
    siteName: "Value Tech Solution",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Automation & Web Development Agency India | Value Tech Solution",
    description:
      "AI automation and web development agency in India — AI agents, n8n / GHL / Zapier / Python automations, Next.js websites and SEO for startups in Delhi, Bangalore, Mumbai, and the GCC.",
  },
};

/**
 * Homepage — minimal, dense, one job per section.
 *
 * Seven sections, each with a clear conversion purpose:
 *   1. Hero          — value prop + primary CTA
 *   2. StackMarquee  — tech credibility (one thin row)
 *   3. Services      — what we offer (the four core)
 *   4. CaseStudies   — proof we ship
 *   5. StickyStory   — how an agent works (visual showcase)
 *   6. Engagement    — how to start (3 steps, removes friction)
 *   7. CTA           — close, with guarantee + WhatsApp inline
 *
 * Cuts vs. the previous 13-section build (all components still exist
 * for inner pages — only the home composition is leaner):
 *   - Principles      → folded into /about
 *   - Stats           → folded into Hero's bottom strip
 *   - Comparison      → folded into /services
 *   - IndustriesGrid  → folded into /about
 *   - ROICalculator   → moved to /pricing (heavy, belongs there)
 *   - Guarantee       → merged into CTA section's status row
 *   - MediaDivider    → removed (was decorative; rhythm now comes
 *                       from section spacing alone)
 */
export default function Home() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <Services />
      <CaseStudyPreview />
      <StickyStory />
      <EngagementProcess />
      <CTA />
    </>
  );
}
