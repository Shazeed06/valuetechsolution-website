import Link from "next/link";
import { Phone, CheckCircle, ArrowUpRight, MessageCircle } from "lucide-react";
import { CONTACT, whatsappLinks } from "@/lib/contact-config";

const whatYouGet = [
  "We audit your current site live — speed, SEO gaps, mobile issues",
  "You get a written tradeoff doc to keep, whether you hire us or not",
  "Fixed price quote in INR or USD, no hidden extras",
  "Honest answer on what you actually need vs. what you don't",
];

export default function FreeConsultation() {
  const waNumbers = whatsappLinks("Hi, I'd like to book a free 30-min consultation.");

  return (
    <section className="section bg-orange-700 text-white">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left column */}
          <div className="lg:col-span-6">
            <span className="eyebrow text-white/55">
              <span className="h-px w-8 bg-white/40" />
              Free diagnostic
            </span>
            <h2 className="heading-lg mt-8 text-white">
              Book a free{" "}
              <span className="italic-accent text-white/60">30-minute</span>{" "}
              consultation.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
              No slides, no sales script. We look at your website, understand your
              goals, and tell you exactly what to fix — before you spend a rupee.
              India · USA · UK clients welcome.
            </p>

            <ul className="mt-8 space-y-4">
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />
                  <span className="text-sm text-white/75">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
              >
                <Phone size={14} />
                Book free call
                <ArrowUpRight
                  size={14}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <a
                href={waNumbers[0].href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
              >
                <MessageCircle size={14} />
                WhatsApp us
              </a>
            </div>
          </div>

          {/* Right column — stat cards */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-6">
            {[
              { stat: "30", unit: "min", label: "Discovery call, free forever" },
              { stat: "24h", unit: "", label: "Written quote turnaround" },
              { stat: "₹0", unit: "", label: "Cost to explore options" },
              { stat: "14+", unit: "", label: "Countries served remotely" },
            ].map(({ stat, unit, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="font-display text-4xl font-bold tracking-[-0.04em] text-white">
                  {stat}
                  {unit && (
                    <span className="ml-0.5 text-2xl text-white/55">{unit}</span>
                  )}
                </p>
                <p className="mt-2 text-xs text-white/50">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
