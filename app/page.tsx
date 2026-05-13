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
