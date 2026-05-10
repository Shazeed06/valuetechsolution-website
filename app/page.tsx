import Hero from "@/components/Hero";
import TaglineStrip from "@/components/TaglineStrip";
import Principles from "@/components/Principles";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import AutomationShowcase from "@/components/AutomationShowcase";
import StickyStory from "@/components/StickyStory";
import Capabilities from "@/components/Capabilities";
import StackMarquee from "@/components/StackMarquee";
import IndustriesGrid from "@/components/IndustriesGrid";
import Comparison from "@/components/Comparison";
import ROICalculator from "@/components/ROICalculator";
import VerticalTimeline from "@/components/VerticalTimeline";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import MediaDivider from "@/components/MediaDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <TaglineStrip invert />
      <Principles />
      <Stats />

      <MediaDivider
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2200&q=80"
        alt="Analytics dashboard, close-up"
        caption="(field 01) — the work, measured"
        headline={
          <>
            Outputs you can measure.{" "}
            <span className="italic-accent text-white/70">Not vibes.</span>
          </>
        }
        meta={
          <>
            real engagements
            <br />
            no demo theatre
          </>
        }
        aspect="cine"
      />

      <Services />
      <AutomationShowcase />
      <StickyStory />
      <Capabilities />
      <StackMarquee />
      <IndustriesGrid />
      <Comparison />
      <ROICalculator />

      <MediaDivider
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2200&q=80"
        alt="Engineer at workstation"
        caption="(field 02) — the craft"
        headline={
          <>
            Long deep-work blocks.{" "}
            <span className="italic-accent text-white/70">Senior eyes only.</span>
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

      <VerticalTimeline />
      <Testimonials />
      <CTA />
    </>
  );
}
