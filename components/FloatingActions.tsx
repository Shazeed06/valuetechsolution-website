"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Calendar, X, Mail } from "lucide-react";
import Link from "next/link";
import { CONTACT, whatsappLink, mailtoLink } from "@/lib/contact-config";

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "/contact";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const wa = whatsappLink();
  const mail = mailtoLink(`Project enquiry · ${CONTACT.brand}`);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto group inline-flex items-center gap-3 rounded-full border border-carbon-950/15 bg-white px-4 py-3 shadow-depth transition hover:border-carbon-950"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-white">
            <MessageCircle size={16} />
          </span>
          <span className="text-sm font-medium text-carbon-950">
            WhatsApp · {CONTACT.phone}
          </span>
        </a>

        <a
          href={mail}
          className="pointer-events-auto group inline-flex items-center gap-3 rounded-full border border-carbon-950/15 bg-white px-4 py-3 shadow-depth transition hover:border-carbon-950"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-carbon-950 text-white">
            <Mail size={15} />
          </span>
          <span className="text-sm font-medium text-carbon-950">
            Email us
          </span>
        </a>

        <Link
          href={CAL_LINK.startsWith("http") ? CAL_LINK : "/contact"}
          target={CAL_LINK.startsWith("http") ? "_blank" : undefined}
          rel={CAL_LINK.startsWith("http") ? "noreferrer" : undefined}
          className="pointer-events-auto group inline-flex items-center gap-3 rounded-full border border-carbon-950/15 bg-white px-4 py-3 shadow-depth transition hover:border-carbon-950"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-carbon-950 text-white">
            <Calendar size={15} />
          </span>
          <span className="text-sm font-medium text-carbon-950">
            Book a call
          </span>
        </Link>
      </div>

      <button
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto grid h-14 w-14 place-items-center rounded-full bg-carbon-950 text-white shadow-depth transition hover:bg-carbon-700"
      >
        {open ? <X size={18} /> : <MessageCircle size={20} />}
      </button>
    </div>
  );
}
