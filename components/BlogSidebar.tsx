import Link from "next/link";
import { MessageCircle, Phone, CheckCircle } from "lucide-react";
import { whatsappLinks } from "@/lib/contact-config";

export default function BlogSidebar() {
  const waNumbers = whatsappLinks(
    "Hi, I read your blog and I'd like to discuss a project."
  );

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-orange-600/20 bg-orange-50 p-6">
        <span className="inline-block rounded-full bg-orange-600 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.28em] text-white">
          Free · 30 min
        </span>
        <p className="mt-4 font-display text-lg font-bold leading-snug tracking-[-0.025em] text-carbon-950">
          Got a project in mind?
        </p>
        <p className="mt-2 text-sm leading-relaxed text-carbon-500">
          Book a free consultation. We&apos;ll audit your site, map automations,
          and give you a fixed quote — no obligation.
        </p>

        <ul className="mt-5 space-y-2.5">
          {[
            "Site audit & speed check",
            "AI automation scoping",
            "Fixed price in 24 hours",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs text-carbon-700">
              <CheckCircle size={12} className="shrink-0 text-orange-600" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-2.5">
          {waNumbers.map((n) => (
            <a
              key={n.e164}
              href={n.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-xl border border-emerald-500/25 bg-white px-4 py-3 text-sm font-medium text-carbon-950 transition hover:border-emerald-500 hover:bg-emerald-50"
            >
              <MessageCircle size={13} className="shrink-0 text-emerald-500" />
              <span className="truncate">{n.pretty}</span>
            </a>
          ))}
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
          >
            <Phone size={13} />
            Book free call
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-carbon-950/[0.07] bg-white p-5 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
          India · USA · UK
        </p>
        <p className="mt-2 text-sm text-carbon-500">
          Remote-first. Async-friendly. Fast turnaround.
        </p>
      </div>
    </div>
  );
}
