import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/Schema";
import ProcessPageContent from "@/components/ProcessPageContent";

export const metadata: Metadata = {
  title: {
    absolute: "Our Engineering Process — 2 to 4 Week Website Sprints | Value Tech Solution",
  },
  description:
    "Explore our battle-tested 4-week web development sprint process: from technical scoping and Figma systems to Next.js engineering, 98+ Lighthouse audits, and full code handover.",
  keywords: [
    "web development process",
    "Next.js agency workflow",
    "2-4 week website sprint",
    "website development lifecycle",
    "Value Tech Solution process",
  ],
  alternates: { canonical: "https://valuetechsolution.com/process" },
};

export default function ProcessPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Process", url: "https://valuetechsolution.com/process" },
        ]}
      />
      <ProcessPageContent />
    </>
  );
}
