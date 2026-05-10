import Link from "next/link";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { CONTACT, whatsappLink } from "@/lib/contact-config";

const cols = [
  {
    title: "Studio",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/team", label: "The team" },
      { href: "/case-studies", label: "Case studies" },
      { href: "/portfolio", label: "What we engineer" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/ai-automation", label: "AI Automation" },
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/seo", label: "SEO" },
      { href: "/services/design-systems", label: "Design Systems" },
      { href: "/services", label: "All services" },
    ],
  },
  {
    title: "Platforms",
    links: [
      { href: "/services/n8n", label: "n8n" },
      { href: "/services/gohighlevel", label: "GoHighLevel" },
      { href: "/services/zapier", label: "Zapier" },
      { href: "/services/python-automation", label: "Python automation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/pricing", label: "Pricing" },
      { href: "/security", label: "Security" },
    ],
  },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/security", label: "Security" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

export default function Footer() {
  return (
    <footer className="border-t border-carbon-950/[0.08] bg-[rgb(252,251,249)]">
      <div className="container-x py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Logo size={88} />
            <p className="mt-8 max-w-md text-base leading-relaxed text-carbon-500">
              An AI startup of engineers building automations on n8n, GHL,
              Zapier, and Python — paired with Next.js websites and SEO that
              compounds.
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="btn-link mt-7 text-base"
            >
              {CONTACT.email} →
            </a>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-carbon-950/15 bg-white text-carbon-700 transition hover:border-carbon-950 hover:bg-carbon-950 hover:text-white"
              >
                <Linkedin size={14} />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                aria-label={`WhatsApp ${CONTACT.phone}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-carbon-950/15 bg-white text-carbon-700 transition hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
              >
                <MessageCircle size={14} />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label={`Email ${CONTACT.email}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-carbon-950/15 bg-white text-carbon-700 transition hover:border-carbon-950 hover:bg-carbon-950 hover:text-white"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                  {c.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-carbon-700 transition hover:text-carbon-950"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-carbon-950/[0.08] pt-8 text-xs text-carbon-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Value Tech Solution. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono uppercase tracking-[0.24em] text-carbon-400 hover:text-carbon-950"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p className="font-mono uppercase tracking-[0.24em]">
            Remote-first · India · UAE · UK
          </p>
        </div>
      </div>
    </footer>
  );
}
