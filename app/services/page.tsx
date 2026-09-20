import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/Schema";
import ServicesPageContent from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: {
    absolute: "Our Services — Web Development, UI/UX Design & AI Automation | Value Tech Solution",
  },
  description:
    "Full-service digital solutions designed to help your brand launch, grow, and win. Custom Next.js web development, bespoke UI/UX design, AI automations, and technical SEO.",
  keywords: [
    "web development services",
    "Next.js agency",
    "UI UX design systems",
    "AI automation services",
    "technical SEO",
    "Value Tech Solution services",
    "high performance websites",
  ],
  alternates: { canonical: "https://valuetechsolution.com/services" },
  openGraph: {
    title: "Our Services — Value Tech Solution",
    description:
      "Full-service digital solutions designed to help your brand launch, grow, and win. Senior-led Next.js web development, UI/UX design, and AI automation.",
    url: "https://valuetechsolution.com/services",
    siteName: "Value Tech Solution",
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which service is right for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you need a primary marketing website, our Custom Web Development service is the best fit. For product launches and paid ads, a High-Converting Landing Page is ideal. For automated workflows, our AI Automation service cuts manual operations."
        }
      },
      {
        "@type": "Question",
        "name": "Can you handle both UI/UX design and development together?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 90% of our clients hire us for complete end-to-end delivery: bespoke Figma design systems followed by pixel-perfect Next.js engineering."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can you deliver our project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most marketing websites are delivered within 2 to 4 weeks, with landing pages completing in 7 to 10 days and full web applications in 4 to 6 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "What tech stack do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build exclusively on modern, industry-standard technologies: Next.js (App Router), React, TypeScript, Tailwind CSS, Vercel, PostgreSQL, and Supabase."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any hidden costs or surprise fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "None. We operate strictly on 100% fixed-price quotes with clearly itemized deliverables agreed upon before kickoff."
        }
      },
      {
        "@type": "Question",
        "name": "What post-launch support and warranty do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every project includes a 30-day post-launch warranty with zero-cost bug fixes, plus optional ongoing maintenance retainers."
        }
      }
    ]
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Services", url: "https://valuetechsolution.com/services" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicesPageContent />
    </>
  );
}
