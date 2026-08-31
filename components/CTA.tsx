"use client";

import Link from "next/link";
import { ArrowUpRight, MessageCircle, Mail, Clock, Shield, Zap, Users } from "lucide-react";
import { CONTACT, whatsappLinks } from "@/lib/contact-config";

const promises = [
  { icon: Clock, label: "4-week delivery", sub: "Fixed timeline, no drift" },
  { icon: Shield, label: "Fixed price", sub: "Quoted upfront. No surprises." },
  { icon: Zap, label: "Senior engineers", sub: "No juniors, no handoffs" },
  { icon: Users, label: "30-day guarantee", sub: "We fix it. No questions." },
];

export default function CTA() {
  const waLinks = whatsappLinks();

  return (
    <section className="section bg-carbon-950">
      <div className="container-x">

        {/* Top row */}
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-white/40">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
              Start a project
            </p>
            <h2 className="mt-6 font-display text-4xl font-black leading-[1.0] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="italic text-white/40">that works.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55">
              30-minute strategy call — we scope your project, map the
              automation opportunities, and quote a fixed price. Whether you
              hire us or not.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold text-carbon-950 transition hover:bg-orange-50"
          >
            Book a free call
            <ArrowUpRight
              size={15}
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/[0.08]" />

        {/* Bottom row — promises + contact channels */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* 4 promise cards */}
          {promises.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-start gap-3.5">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/[0.10] bg-white/[0.05]">
                <Icon size={15} className="text-orange-400" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{label}</p>
                <p className="mt-0.5 text-xs text-white/40">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-10">
          {waLinks.map((n) => (
            <a
              key={n.e164}
              href={n.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-300 transition hover:border-emerald-400/50 hover:bg-emerald-500/20"
            >
              <MessageCircle size={13} />
              WhatsApp · {n.pretty}
            </a>
          ))}
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] px-5 py-2.5 text-sm font-medium text-white/50 transition hover:border-white/25 hover:text-white/80"
          >
            <Mail size={13} />
            {CONTACT.email}
          </a>
        </div>

      </div>
    </section>
  );
}
