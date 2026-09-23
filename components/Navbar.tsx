"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles, Layers, Cpu, Search, Zap, Code } from "lucide-react";
import Logo from "@/components/Logo";

const servicesList = [
  {
    title: "Web Engineering",
    desc: "Next.js 16, React 19, Turbopack & headless CMS",
    href: "/services/web-development",
    icon: Code,
    color: "text-[#1ab9a2]",
  },
  {
    title: "Design Systems & UI/UX",
    desc: "Bespoke Figma design tokens & conversion funnels",
    href: "/services/design-systems",
    icon: Layers,
    color: "text-[#fb72cc]",
  },
  {
    title: "AI Automation & Agents",
    desc: "Autonomous workflow agents, n8n & API orchestration",
    href: "/services/ai-automation",
    icon: Cpu,
    color: "text-[#ba49f5]",
  },
  {
    title: "SEO & Performance (GEO)",
    desc: "Sub-second LCP, Core Web Vitals & AI search readiness",
    href: "/services/seo",
    icon: Zap,
    color: "text-[#fea800]",
  },
];

const navLinks = [
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Work", href: "/work" },
  { name: "Process", href: "/process" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Click outside to close services dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-montserrat ${
        scrolled
          ? "bg-[#efebe5]/95 backdrop-blur-md border-b border-[#d8d3ce]/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] py-3 sm:py-3.5"
          : "bg-[#efebe5] py-4 sm:py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left: Brand Logo (Clean Dark Studio Identity matching The Gud Agency) */}
        <Link
          href="/"
          aria-label="Value Tech Solution Home"
          className="transition-transform hover:scale-105 shrink-0 flex items-center"
        >
          <Logo size="sm" theme="dark" />
        </Link>

        {/* Center / Right: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[15px] font-semibold text-[#141414]/90 tracking-[-0.02em]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/services"
                ? pathname.startsWith("/services")
                : pathname === link.href;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  ref={dropdownRef}
                  className="relative group py-2"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 transition-colors duration-200 hover:text-primary ${
                      isActive ? "text-[#141414] font-bold" : "text-[#141414]/80"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 text-[#7d7b77] group-hover:text-primary ${
                        servicesOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </Link>

                  {/* Services Dropdown Panel */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 transition-all duration-200 ${
                      servicesOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-[#efebe5]/98 backdrop-blur-2xl border border-[#d8d3ce] rounded-2xl p-3 shadow-xl">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#7d7b77] px-3 py-1.5 border-b border-[#d8d3ce]/60 mb-1 flex items-center justify-between">
                        <span>Core Disciplines</span>
                        <Link
                          href="/services"
                          className="text-primary hover:underline font-bold"
                          onClick={() => setServicesOpen(false)}
                        >
                          View All →
                        </Link>
                      </div>

                      <div className="space-y-1">
                        {servicesList.map((svc) => {
                          const Icon = svc.icon;
                          return (
                            <Link
                              key={svc.title}
                              href={svc.href}
                              onClick={() => setServicesOpen(false)}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/80 transition-colors group/item"
                            >
                              <div className={`p-1.5 rounded-lg bg-white border border-[#d8d3ce] ${svc.color} shrink-0 mt-0.5 shadow-2xs`}>
                                <Icon size={14} />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-[#141414] group-hover/item:text-primary transition-colors">
                                  {svc.title}
                                </p>
                                <p className="text-[11px] text-[#7d7b77] line-clamp-1 leading-snug">
                                  {svc.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 hover:text-primary ${
                  isActive ? "text-[#141414] font-bold" : "text-[#141414]/80"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Sleek Black "Let's Talk" Pill Button (Exact GUD Agency style) */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#141414] hover:bg-black text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-tight transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 group shrink-0"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2.5">
          <Link
            href="/contact"
            className="inline-flex sm:hidden items-center gap-1 bg-[#141414] text-white px-3.5 py-1.5 rounded-full font-bold text-xs shadow-xs"
          >
            <span>Let&apos;s Talk</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#141414] hover:bg-black/5 rounded-full transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-[#d8d3ce] bg-[#efebe5]/98 backdrop-blur-2xl px-5 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-[1360px] mx-auto space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#d8d3ce] text-xs font-bold text-[#7d7b77] uppercase tracking-wider">
              <span>Navigation</span>
              <span className="flex items-center gap-1.5 text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Projects
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-sm font-bold text-[#141414] bg-white/70 hover:bg-white border border-[#d8d3ce] rounded-xl flex items-center justify-between transition-colors shadow-2xs"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={13} className="text-[#7d7b77]" />
                </Link>
              ))}
            </div>

            {/* Quick Services Links for Mobile */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7d7b77] block mb-2">
                Services
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {servicesList.map((svc) => (
                  <Link
                    key={svc.title}
                    href={svc.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-2.5 bg-white/50 hover:bg-white rounded-lg text-xs font-semibold text-[#141414] border border-[#d8d3ce]/60"
                  >
                    <span>{svc.title}</span>
                    <span className="text-[10px] text-[#7d7b77]">Explore →</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[#d8d3ce]">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-[#141414] hover:bg-black text-white py-3.5 rounded-full font-bold text-sm shadow-md transition-all active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
