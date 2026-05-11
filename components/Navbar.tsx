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
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const onDarkHero = pathname === "/";
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll tracking — drives the colour-change AND the progress bar
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
      setScrolled(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close mega-menu when route actually changes
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

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  const lightMode = onDarkHero && !scrolled;

  const linkColor = lightMode
    ? "text-white/80 hover:text-white"
    : "text-carbon-700 hover:text-carbon-950";
  const underlineColor = lightMode ? "bg-white" : "bg-carbon-950";
  const burgerBorder = lightMode
    ? "border-white/60 bg-white/10 text-white backdrop-blur"
    : "border-carbon-950/20 bg-white text-carbon-950";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-500 ${
        scrolled
          ? "border-b border-carbon-950/[0.06] bg-[rgb(252,251,249)]/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-24 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Value Tech Solution — Home"
          className={`group relative inline-flex items-center transition ${
            lightMode ? "text-white" : "text-carbon-950"
          }`}
        >
          <span className="block transition-transform duration-500 group-hover:scale-[1.04] md:hidden">
            <Logo size={80} variant={lightMode ? "light" : "dark"} />
          </span>
          <span className="hidden transition-transform duration-500 group-hover:scale-[1.04] md:block">
            <Logo size={88} variant={lightMode ? "light" : "dark"} />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:gap-9 md:flex">
          {links.map((l) => {
            const active = isActive(l.href);
            const Underline = (
              <span
                aria-hidden
                className={`pointer-events-none absolute -bottom-1.5 left-0 right-0 h-px origin-left transform transition-transform duration-300 ease-out ${underlineColor} ${
                  active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            );

            if (l.hasMenu) {
              return (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={openMenu}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={l.href}
                    className={`group relative text-sm transition ${linkColor}`}
                  >
                    {l.label}
                    {Underline}
                  </Link>
                  {/* Invisible bridge so cursor can travel from link to dropdown */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-full h-3"
                  />
                </div>
              );
            }

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`group relative text-sm transition ${linkColor}`}
                onMouseEnter={() => {
                  if (menuOpen) scheduleClose();
                }}
              >
                {l.label}
                {Underline}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          {/* CTA with shimmer */}
          <Link
            href="/contact"
            className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition ${
              lightMode
                ? "bg-white text-carbon-950 hover:bg-white/90"
                : "bg-carbon-950 text-white hover:bg-carbon-700"
            }`}
          >
            <span
              aria-hidden
              className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full ${
                lightMode ? "opacity-50" : "opacity-30"
              }`}
            />
            <span className="relative">Book a call</span>
            <ArrowUpRight
              size={14}
              className="relative transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
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

      {/* Scroll progress bar — fills left-to-right as the user reads the page */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left transform transition-[transform,background-color] duration-150 ${
          lightMode ? "bg-white/70" : "bg-carbon-950"
        }`}
        style={{ transform: `scaleX(${progress})` }}
      />

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
