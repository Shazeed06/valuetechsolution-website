"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Calendar, X, Mail } from "lucide-react";
import Link from "next/link";
import { CONTACT, whatsappLinks, mailtoLink } from "@/lib/contact-config";

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "/contact";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const waNumbers = whatsappLinks();
  const mail = mailtoLink(`Project enquiry · ${CONTACT.brand}`);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Action panel */}
      {open && (
        <div className="pointer-events-auto flex flex-col items-end gap-2">
          {waNumbers.map((n) => (
            <a
              key={n.e164}
              href={n.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-[#ece9e1] bg-white px-4 py-3 shadow-xl transition hover:border-emerald-500"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-white">
                <MessageCircle size={16} />
              </span>
              <span className="text-sm font-semibold text-[#141414]">
                WhatsApp · {n.pretty}
              </span>
            </a>
          ))}

          <a
            href={mail}
            className="group inline-flex items-center gap-3 rounded-full border border-[#ece9e1] bg-white px-4 py-3 shadow-xl transition hover:border-primary"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#141414] text-white">
              <Mail size={15} />
            </span>
            <span className="text-sm font-semibold text-[#141414]">
              Email us
            </span>
          </a>

          <Link
            href={CAL_LINK.startsWith("http") ? CAL_LINK : "/contact"}
            target={CAL_LINK.startsWith("http") ? "_blank" : undefined}
            rel={CAL_LINK.startsWith("http") ? "noreferrer" : undefined}
            className="group inline-flex items-center gap-3 rounded-full border border-[#ece9e1] bg-white px-4 py-3 shadow-xl transition hover:border-primary"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-white">
              <Calendar size={15} />
            </span>
            <span className="text-sm font-semibold text-[#141414]">
              Book a call
            </span>
          </Link>
        </div>
      )}

      <button
        type="button"
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto grid h-14 w-14 place-items-center rounded-full bg-[#141414] hover:bg-black text-white shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-primary"
      >
        {open ? <X size={18} /> : <MessageCircle size={22} className="text-primary" />}
      </button>
    </div>
  );
}
