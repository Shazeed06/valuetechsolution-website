import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import MediaDivider from "@/components/MediaDivider";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { BreadcrumbSchema } from "@/components/Schema";
import { CONTACT, whatsappLinks } from "@/lib/contact-config";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Us — Book a Free Discovery Call | Value Tech Solution",
  },
  description:
    "Book a free 20-min discovery call. We reply within one business day with an itemized scope and fixed price. Serving global startups and ambitious brands.",
  keywords: [
    "contact web development agency",
    "book discovery call Next.js",
    "hire web developer India",
    "Value Tech Solution contact",
  ],
  alternates: { canonical: "https://valuetechsolution.com/contact" },
};

const waLinks = whatsappLinks();

const channels = [
  {
    icon: Mail,
    label: "Direct Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Phone,
    label: "WhatsApp / Call",
    value: waLinks[0].pretty,
    href: waLinks[0].href,
  },
  { icon: MapPin, label: "Studio Location", value: "Remote-first · Delhi · London · Dubai" },
  { icon: Clock, label: "Response Window", value: "Guaranteed within 24 hours" },
];

export default function ContactPage() {
  return (
    <div className="bg-[#efebe5] text-[#141414] min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Contact", url: "https://valuetechsolution.com/contact" },
        ]}
      />

      <PageHeader
        eyebrow="Let's Talk"
        title={
          <>
            Tell us about your{" "}
            <span className="font-sourceSerif italic font-normal text-primary">project.</span>
          </>
        }
        description="A 20-minute discovery call with senior engineers — no slide decks, no hard sales. We'll give you a tight architectural scope, an honest timeline, and a fixed price."
      />

      <section className="py-12 lg:py-16">
        <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Column: Direct channels */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 bg-[#f7f2ea] border border-[#d8d3ce] px-3.5 py-1.5 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                  Direct Channels
                </span>
              </div>
              <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-[#141414] tracking-tight mb-4">
                Reach our team directly.
              </h2>
              <p className="text-sm sm:text-base text-[#7d7b77] font-medium leading-relaxed mb-8">
                Prefer email, WhatsApp, or a direct phone call? Reach out on whichever channel works best for you. Every inquiry is reviewed directly by our founding engineers.
              </p>

              <div className="space-y-4">
                {channels.map((c) => (
                  <div
                    key={c.label}
                    className="bg-white rounded-3xl p-6 border border-[#ece9e1] shadow-sm flex items-center gap-4 hover:border-primary/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#f7f2ea] border border-[#ece9e1] text-primary flex items-center justify-center flex-shrink-0">
                      <c.icon size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-[#7d7b77]">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                          className="font-montserrat font-bold text-sm sm:text-base text-[#141414] hover:text-primary transition-colors"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="font-montserrat font-bold text-sm sm:text-base text-[#141414]">
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-[#f7f2ea] rounded-3xl p-6 border border-[#d8d3ce]">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Fixed Price Promise
                </div>
                <p className="text-xs text-[#7d7b77] font-medium leading-relaxed">
                  Every proposal comes with a fixed timeline, clear written deliverables, and milestone-based payments. Zero unexpected billing overruns.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
