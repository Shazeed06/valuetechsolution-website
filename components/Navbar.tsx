"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const services = [
  {
    href: "/services/ai-automation",
    label: "AI Automation",
    desc: "Agents, evals, integrations.",
  },
  {
    href: "/services/web-development",
    label: "Web Development",
    desc: "Next.js, edge runtimes.",
  },
  {
    href: "/services/seo",
    label: "SEO Optimization",
    desc: "Technical SEO & content.",
  },
  {
    href: "/services/design-systems",
    label: "Design Systems",
    desc: "Token-driven, documented.",
  },
];

const platforms = [
  {
    href: "/services/n8n",
    label: "n8n Development",
    desc: "Self-hosted workflows.",
  },
  {
    href: "/services/gohighlevel",
    label: "GoHighLevel",
    desc: "CRM, funnels, snapshots.",
  },
  {
    href: "/services/zapier",
    label: "Zapier Solutions",
    desc: "6,000+ app connectors.",
  },
  {
    href: "/services/python-automation",
    label: "Python Automation",
    desc: "Custom pipelines + AI.",
  },
];

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasMenu: true },
  { href: "/portfolio", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const onDarkHero = pathname === "/";
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega-menu when route actually changes (e.g. user clicked a link)
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function openMenu() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMenuOpen(true);
  }

  function scheduleClose() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setMenuOpen(false), 180);
  }

  // Over the dark hero AND not scrolled = light navbar text
  const lightMode = onDarkHero && !scrolled;

  const linkColor = lightMode
    ? "text-white/80 hover:text-white"
    : "text-carbon-700 hover:text-carbon-950";
  const burgerBorder = lightMode
    ? "border-white/30 text-white"
    : "border-carbon-950/15 text-carbon-950";
  const ctaClasses = lightMode
    ? "inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-carbon-950 hover:bg-white/90"
    : "btn-primary";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-500 ${
        scrolled
          ? "border-b border-carbon-950/[0.06] bg-[rgb(252,251,249)]/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="Value Tech Solution — Home"
          className={`transition hover:opacity-80 ${
            lightMode ? "text-white" : "text-carbon-950"
          }`}
        >
          <Logo size={34} variant={lightMode ? "light" : "dark"} />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) =>
            l.hasMenu ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href={l.href}
                  className={`text-sm transition ${linkColor}`}
                >
                  {l.label}
                </Link>
                {/* Invisible bridge so cursor can travel from link to dropdown
                    without leaving any hover surface. */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-full h-3"
                />
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition ${linkColor}`}
                onMouseEnter={() => {
                  if (menuOpen) scheduleClose();
                }}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className={ctaClasses}>
            Book a call
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-full border md:hidden ${burgerBorder}`}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Desktop services mega-menu */}
      {menuOpen && (
        <div
          className="absolute inset-x-0 top-full hidden border-y border-carbon-950/[0.08] bg-[rgb(252,251,249)] md:block"
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        >
          <div className="container-x grid grid-cols-12 gap-8 py-10">
            <div className="col-span-12 lg:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
                (services)
              </p>
              <p className="mt-4 font-display text-2xl font-bold leading-tight tracking-[-0.025em] text-carbon-950">
                What we engineer.
              </p>
              <Link href="/services" className="btn-link mt-6 text-sm">
                See all <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="col-span-12 lg:col-span-9">
              <div className="mb-6">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400">
                  · core services
                </p>
                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2">
                  {services.map((s, i) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="group flex items-start justify-between bg-[rgb(252,251,249)] p-5 transition hover:bg-carbon-950 hover:text-white"
                    >
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400 group-hover:text-white/55">
                          S.{String(i + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-2 font-display text-lg font-bold tracking-[-0.02em]">
                          {s.label}
                        </p>
                        <p className="mt-1 text-sm text-carbon-500 group-hover:text-white/70">
                          {s.desc}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={14}
                        className="mt-1 shrink-0 opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-400">
                  · automation platforms
                </p>
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-4">
                  {platforms.map((p, i) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="group flex flex-col bg-[rgb(252,251,249)] p-4 transition hover:bg-carbon-950 hover:text-white"
                    >
                      <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-carbon-400 group-hover:text-white/55">
                        P.{String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 font-display text-sm font-bold tracking-[-0.02em]">
                        {p.label}
                      </p>
                      <p className="mt-1 text-[11px] text-carbon-500 group-hover:text-white/70">
                        {p.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-carbon-950/[0.08] bg-[rgb(252,251,249)] md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-carbon-700 hover:bg-carbon-950/[0.04]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-carbon-700 hover:bg-carbon-950/[0.04]"
            >
              About
            </Link>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-3 text-sm text-carbon-700 hover:bg-carbon-950/[0.04]">
                Services
                <span className="font-mono text-xs text-carbon-400 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-1 flex flex-col gap-1 pl-3">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-carbon-500 hover:bg-carbon-950/[0.04] hover:text-carbon-950"
                  >
                    {s.label}
                  </Link>
                ))}
                <p className="mt-3 px-3 font-mono text-[9px] uppercase tracking-[0.24em] text-carbon-400">
                  Automation platforms
                </p>
                {platforms.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-carbon-500 hover:bg-carbon-950/[0.04] hover:text-carbon-950"
                  >
                    {p.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-lg px-3 py-2 text-sm font-medium text-carbon-950 hover:bg-carbon-950/[0.04]"
                >
                  See all →
                </Link>
              </div>
            </details>
            <Link
              href="/portfolio"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-carbon-700 hover:bg-carbon-950/[0.04]"
            >
              Work
            </Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-carbon-700 hover:bg-carbon-950/[0.04]"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-carbon-700 hover:bg-carbon-950/[0.04]"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Book a call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
