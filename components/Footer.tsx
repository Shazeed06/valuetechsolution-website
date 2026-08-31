import Link from "next/link";
import { Linkedin, Mail, MessageCircle, MapPin } from "lucide-react";
import Logo from "./Logo";
import { CONTACT, whatsappLinks } from "@/lib/contact-config";

const cols = [
  {
    title: "Studio",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/team", label: "The team" },
      { href: "/case-studies", label: "Case studies" },
      { href: "/portfolio", label: "What we engineer" },
      { href: "/pricing", label: "Pricing" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/ai-automation", label: "AI Automation" },
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/starter-website", label: "Starter Website $300" },
      { href: "/services/seo", label: "SEO" },
      { href: "/services/design-systems", label: "Design Systems" },
      { href: "/services", label: "All services" },
    ],
  },
  {
    title: "Platforms",
    links: [
      { href: "/services/claude-automation", label: "Claude AI" },
      { href: "/services/n8n", label: "n8n" },
      { href: "/services/gohighlevel", label: "GoHighLevel" },
      { href: "/services/zapier", label: "Zapier" },
      { href: "/services/python-automation", label: "Python" },
    ],
  },
  {
    title: "Locations",
    links: [
      { href: "/locations/delhi", label: "Delhi" },
      { href: "/locations/bangalore", label: "Bangalore" },
      { href: "/locations/mumbai", label: "Mumbai" },
      { href: "/locations/new-york", label: "New York" },
      { href: "/locations/london", label: "London" },
      { href: "/locations/dubai", label: "Dubai" },
      { href: "/locations", label: "All locations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/security", label: "Security" },
      { href: "/sitemap.xml", label: "Sitemap" },
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
  const waLinks = whatsappLinks();

  return (
    <footer className="bg-carbon-950">

      {/* ── Link columns ─────────────────────────────── */}
      <div className="container-x py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <Logo size={160} variant="light" />
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-white/40">
              Senior engineers building AI automations, Next.js websites, and
              SEO systems for startups across India, UAE, and the UK.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/50 transition hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400"
              >
                <Linkedin size={14} />
              </a>
              {waLinks.map((n) => (
                <a
                  key={n.e164}
                  href={n.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`WhatsApp ${n.pretty}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/50 transition hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  <MessageCircle size={14} />
                </a>
              ))}
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label={`Email ${CONTACT.email}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/50 transition hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400"
              >
                <Mail size={14} />
              </a>
            </div>
            <p className="mt-6 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/25">
              <MapPin size={10} />
              India · UAE · UK · Remote-first
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-5 lg:col-span-8">
            {cols.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-orange-500/70">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/40 transition hover:text-white"
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

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Value Tech Solution. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/25 transition hover:text-white/60"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
