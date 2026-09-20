import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: { absolute: "Our Work — Web Development Case Studies | Value Tech Solution" },
  description:
    "Explore websites, web applications, and digital platforms shipped by Value Tech Solution's senior engineering team. Real metrics, sub-second speeds, and high conversions.",
  keywords: [
    "web development portfolio India",
    "Next.js case studies",
    "custom website examples",
    "Value Tech Solution work",
  ],
  alternates: { canonical: "https://valuetechsolution.com/portfolio" },
};

const caseStudies = [
  {
    id: "01",
    title: "Verve FinTech Portal & Marketing",
    category: "Full-Stack Web App",
    timeline: "3 Weeks",
    metrics: "+210% User Signups · 0.4s LCP",
    description: "End-to-end rebuild of legacy marketing site and customer dashboard. Deployed on Next.js 16 with edge API routing and real-time investment metrics.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "REST API", "Vercel"],
    gradient: "from-[#1ab9a2]/30 via-[#191919] to-[#141414]",
    accent: "text-primary",
  },
  {
    id: "02",
    title: "Aura Luxury Headless Storefront",
    category: "E-Commerce",
    timeline: "4 Weeks",
    metrics: "99 Mobile Lighthouse · 3.4x Faster",
    description: "Bespoke Shopify Storefront with seamless page transitions, multi-currency support, and optimized Core Web Vitals resulting in an immediate 38% conversion surge.",
    tags: ["Next.js", "Shopify API", "Stripe", "Framer Motion"],
    gradient: "from-[#fb72cc]/25 via-[#191919] to-[#141414]",
    accent: "text-secondary",
  },
  {
    id: "03",
    title: "Nova AI Studio Agency Platform",
    category: "Brand & Web Experience",
    timeline: "2 Weeks",
    metrics: "100/100 Desktop Score · Top 3 Ranking",
    description: "High-impact portfolio and editorial blog for an AI design studio, featuring interactive WebGL hero canvas and automated CMS publishing pipelines.",
    tags: ["React", "WebGL", "Sanity CMS", "Technical SEO"],
    gradient: "from-[#fea800]/25 via-[#191919] to-[#141414]",
    accent: "text-tertiary",
  },
  {
    id: "04",
    title: "PropTech Scale Investor Dashboard",
    category: "SaaS & Client Portal",
    timeline: "5 Weeks",
    metrics: "+140% Daily Active Users",
    description: "Secure, role-based real estate investor portal handling property analytics, document vaults, and automated deal pipeline tracking.",
    tags: ["Next.js", "PostgreSQL", "Tailwind", "Auth.js"],
    gradient: "from-[#1ab9a2]/25 via-[#191919] to-[#141414]",
    accent: "text-primary",
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-[#efebe5] text-[#141414] min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Work", url: "https://valuetechsolution.com/portfolio" },
        ]}
      />

      <PageHeader
        eyebrow="Case Studies"
        title={
          <>
            Crafted for speed,{" "}
            <span className="font-sourceSerif italic font-normal text-primary">
              built for conversion.
            </span>
          </>
        }
        description="A selection of high-performance websites and web applications shipped by our senior engineers. Real code, real speed metrics, and measurable business growth."
      />

      {/* Case Studies Grid */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white rounded-3xl p-8 border border-[#ece9e1] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Browser Mockup Header */}
                  <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden relative mb-6 border border-white/10 bg-[#0d0d0d] flex flex-col justify-between p-4">
                    <div className="flex items-center justify-between w-full border-b border-white/10 pb-2.5 z-10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/70" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                        <span className="w-2 h-2 rounded-full bg-green-500/70" />
                      </div>
                      <span className="text-[10px] text-white/40 font-mono">case-0{cs.id}.valuetech</span>
                      <ExternalLink className="w-3 h-3 text-white/40" />
                    </div>

                    <div className={`absolute inset-0 bg-gradient-to-br ${cs.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative z-10 my-auto text-left">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${cs.accent}`}>
                        {cs.category}
                      </span>
                      <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white mt-1 group-hover:text-primary transition-colors">
                        {cs.title}
                      </h3>
                    </div>

                    <div className="relative z-10 flex justify-between items-center pt-2">
                      <span className="text-[11px] font-bold text-white bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {cs.metrics}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#7d7b77] font-medium leading-relaxed mb-6">
                    {cs.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ece9e1] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold text-[#141414] bg-[#f7f2ea] px-2.5 py-1 rounded-full border border-[#d8d3ce]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-black transition-colors"
                  >
                    <span>Discuss Similar Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <CTA />
    </div>
  );
}
