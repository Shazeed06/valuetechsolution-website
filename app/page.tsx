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
