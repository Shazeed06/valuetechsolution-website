import Hero from "@/components/Hero";
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
import Guarantee from "@/components/Guarantee";
import VerticalTimeline from "@/components/VerticalTimeline";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import MediaDivider from "@/components/MediaDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <Principles />
      <Stats />

      {/* IMG 01 — analytics dashboard */}
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

      {/* IMG 02 — code/keyboard moody */}
      <MediaDivider
        src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=2200&q=80"
        alt="Engineer's keyboard, low light"
        caption="(field 02) — built like software"
        headline={
          <>
            Versioned. Reviewed.{" "}
            <span className="italic-accent text-white/70">Observable.</span>
          </>
        }
        meta={
          <>
            CI-budgeted
            <br />
            preview deploys
          </>
        }
        aspect="cine"
      />

      <Capabilities />
      <StackMarquee />
      <IndustriesGrid />
      <Comparison />
      <ROICalculator />

      <Guarantee />

      {/* IMG 03 — workstation deep-work */}
      <MediaDivider
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2200&q=80"
        alt="Engineer at workstation"
        caption="(field 03) — the craft"
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
