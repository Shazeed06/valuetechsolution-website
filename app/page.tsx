import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import EngagementProcess from "@/components/EngagementProcess";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: {
    absolute:
      "Value Tech Solution | Web Development that Converts",
  },
  description:
    "Value Tech Solution is a web development studio crafting high-performance websites for startups and growing businesses.",
  keywords: [
    "web development agency",
    "Next.js agency",
    "SEO services",
    "UI/UX design",
    "Value Tech Solution",
  ],
  alternates: { canonical: "https://valuetechsolution.com" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <EngagementProcess />
      <Portfolio />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
