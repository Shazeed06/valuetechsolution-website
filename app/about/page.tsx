import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/Schema";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: {
    absolute: "About Us — Web Development Studio | Value Tech Solution",
  },
  description:
    "Learn about Value Tech Solution: an engineering-led web development studio crafting high-performance Next.js websites, design systems, and conversion funnels for ambitious startups.",
  keywords: [
    "about web development studio",
    "Value Tech Solution team",
    "Next.js agency founders",
    "web development studio India",
  ],
  alternates: { canonical: "https://valuetechsolution.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "About", url: "https://valuetechsolution.com/about" },
        ]}
      />
      <AboutPageContent />
    </>
  );
}
