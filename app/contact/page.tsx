import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import MediaDivider from "@/components/MediaDivider";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. We reply within one business day with a tight scope, an honest timeline, and a fixed price.",
};

import { CONTACT, whatsappLink } from "@/lib/contact-config";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: CONTACT.phone,
    href: whatsappLink(),
  },
  { icon: MapPin, label: "HQ", value: "Remote-first · India · UAE · UK" },
  { icon: Clock, label: "Response", value: "Within 1 business day" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="(let's talk)"
        title={
          <>
            Tell us about your{" "}
            <span className="italic-accent text-carbon-500">project.</span>
          </>
        }
        description="A 30-minute call, no slides, no sales pressure. We'll give you a tight scope, an honest timeline, and a fixed price — whether you hire us or not."
      />

      <MediaDivider
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2200&q=80"
        alt="Open studio space"
        caption="(the studio · async first)"
        headline={
          <>
            Loom over meetings.{" "}
            <span className="italic-accent text-white/70">
              Async over status calls.
            </span>
          </>
        }
        meta={
          <>
            replies within
            <br />
            one business day
          </>
        }
        aspect="cine"
      />

      <section className="section pt-0">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="heading-md">Reach us directly.</h2>
            <p className="mt-4 text-carbon-400">
              Prefer email, WhatsApp, or a quick call? Pick whichever you
              like — we answer all channels personally.
            </p>

            <div className="mt-8 space-y-4">
              {channels.map((c) => (
                <div key={c.label} className="card flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-snow-100 text-carbon-950">
                    <c.icon size={20} />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-carbon-300">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                        className="font-medium text-carbon-950 hover:text-carbon-700"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="font-medium text-carbon-950">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
