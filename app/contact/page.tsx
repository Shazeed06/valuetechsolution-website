import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/Schema";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Us — Book a Free Discovery Call | Value Tech Solution",
  },
  description:
    "Book a free 20-min discovery call with senior engineers. We reply within 24 hours with an itemized scope and fixed-price quote. Serving global startups and ambitious brands.",
  keywords: [
    "contact web development agency",
    "book discovery call Next.js",
    "hire web developer India",
    "Value Tech Solution contact",
    "web development studio contact",
  ],
  alternates: { canonical: "https://valuetechsolution.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Contact", url: "https://valuetechsolution.com/contact" },
        ]}
      />
      <ContactPageContent />
    </>
  );
}
