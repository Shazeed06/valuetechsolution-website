import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import CaseStudyPreview from "@/components/CaseStudyPreview";
import StickyStory from "@/components/StickyStory";
import StackMarquee from "@/components/StackMarquee";
import IndustriesGrid from "@/components/IndustriesGrid";
import Comparison from "@/components/Comparison";
import EngagementProcess from "@/components/EngagementProcess";
import ROICalculator from "@/components/ROICalculator";
import Guarantee from "@/components/Guarantee";
import CTA from "@/components/CTA";
import MediaDivider from "@/components/MediaDivider";

// Homepage gets its own keyword-led title + description so SERPs
// don't fall back to the root layout's generic copy. `title.absolute`
// disables the "%s · Value Tech Solution" template — we already
// include the brand in the title manually here.
export const metadata: Metadata = {
  title: {
    absolute: "AI Automation & Web Development Agency | Value Tech Solution",
  },
  description:
    "Value Tech Solution provides AI automation, AI agents, SaaS development, SEO, and modern business websites for startups and businesses.",
  alternates: { canonical: "https://valuetechsolution.com" },
  openGraph: {
    title: "AI Automation & Web Development Agency | Value Tech Solution",
    description:
      "Value Tech Solution provides AI automation, AI agents, SaaS development, SEO, and modern business websites for startups and businesses.",
    url: "https://valuetechsolution.com",
    siteName: "Value Tech Solution",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & Web Development Agency | Value Tech Solution",
    description:
      "Value Tech Solution provides AI automation, AI agents, SaaS development, SEO, and modern business websites for startups and businesses.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Principles />
      <Stats />
      <Services />
      <CaseStudyPreview />
      <StickyStory />
      <StackMarquee />
      <Comparison />
      <IndustriesGrid />
      <EngagementProcess />
      <ROICalculator />
      <Guarantee />

      {/* Single breathing image between the trust block and the closer */}
      <MediaDivider
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2200&q=80"
        alt="Engineer at workstation"
        caption="the craft"
        headline={
          <>
            Long deep-work blocks.{" "}
            <span className="italic-accent text-white/70">
              Senior eyes only.
            </span>
          </>
        }
        meta={
          <>
            est. 2024
            <br />
            remote-first · IN · UAE · UK
          </>
        }
        aspect="wide"
      />

      <CTA />
    </>
  );
}
