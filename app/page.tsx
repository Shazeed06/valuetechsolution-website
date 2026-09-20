import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import EngagementProcess from "@/components/EngagementProcess";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: {
    absolute:
      "Value Tech Solution | High-Performance Website Development Studio",
  },
  description:
    "Value Tech Solution crafts custom, lightning-fast Next.js websites and web applications engineered for peak conversions and SEO dominance.",
  keywords: [
    "web development agency",
    "Next.js studio",
    "custom web design",
    "high converting landing pages",
    "technical SEO",
    "Value Tech Solution",
  ],
  alternates: { canonical: "https://valuetechsolution.com" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <EngagementProcess />
      <Comparison />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
