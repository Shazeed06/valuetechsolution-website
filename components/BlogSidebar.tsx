import Link from "next/link";
import { MessageCircle, ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { whatsappLinks } from "@/lib/contact-config";

export default function BlogSidebar() {
  const waNumbers = whatsappLinks(
    "Hi Value Tech Solution, I read your engineering field notes and I'd like to discuss a project."
  );

  return (
    <div className="space-y-5">
      {/* Consultation Card */}
      <div className="rounded-3xl border border-[#d8d3ce] bg-white p-6 shadow-sm">
        <span className="inline-block rounded-full bg-[#1ab9a2]/15 text-[#1ab9a2] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
          Free · 20 Min Discovery
        </span>
        <p className="mt-3 font-montserrat text-lg font-black tracking-tight text-[#141414]">
          Got a project in mind?
        </p>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#666460]">
          Book a 20-minute architecture discovery call. We&apos;ll audit your site speed, inspect conversion funnels, and quote a fixed sprint price.
        </p>

        <ul className="mt-4 space-y-2">
          {[
            "Live Core Web Vitals speed audit",
            "Technical architecture review",
            "Fixed quote in 24 hours (Zero creep)",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs font-medium text-[#141414]">
              <CheckCircle2 size={14} className="shrink-0 text-[#1ab9a2]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-2.5">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-full bg-[#141414] hover:bg-black px-4 py-3.5 text-xs font-bold text-white transition shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Book Discovery Call</span>
            <ArrowUpRight size={14} className="text-[#1ab9a2]" />
          </Link>
          {waNumbers.map((n) => (
            <a
              key={n.e164}
              href={n.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50/50 hover:bg-emerald-50 px-4 py-2.5 text-xs font-bold text-emerald-900 transition"
            >
              <MessageCircle size={14} className="text-emerald-600" />
              <span>WhatsApp Founders</span>
            </a>
          ))}
        </div>
      </div>

      {/* Trust Guarantee Box */}
      <div className="rounded-3xl border border-[#ece9e1] bg-[#f7f2ea] p-5 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#141414] mb-1">
          <ShieldCheck size={16} className="text-[#1ab9a2]" />
          <span>100% IP Sovereignty</span>
        </div>
        <p className="text-xs text-[#7d7b77] leading-relaxed">
          Full GitHub repository and Figma source code ownership transferred on every sprint.
        </p>
      </div>
    </div>
  );
}
