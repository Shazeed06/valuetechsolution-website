"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { name: "About", href: "/about", accent: "hover:text-[#1ab9a2]" },
  { name: "Services", href: "/services", accent: "hover:text-[#fb72cc]", badge: "Hot" },
  { name: "Work", href: "/work", accent: "hover:text-[#fea800]" },
  { name: "Process", href: "/process", accent: "hover:text-[#1ab9a2]" },
  { name: "Contact", href: "/contact", accent: "hover:text-[#fea800]" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-3 sm:top-5 left-0 w-full z-50 px-3 sm:px-6 flex flex-col items-center pointer-events-none font-montserrat">
      
      {/* Floating Island Capsule Container */}
      <div
        className={`pointer-events-auto max-w-[1240px] w-full transition-all duration-300 rounded-full border ${
          scrolled
            ? "bg-[#141414]/95 backdrop-blur-2xl border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.45)] py-2 sm:py-2.5 px-4 sm:px-6"
            : "bg-[#141414]/90 backdrop-blur-xl border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.35)] py-2.5 sm:py-3 px-5 sm:px-7"
        } flex items-center justify-between`}
      >
        
        {/* Left: Brand Logo (Always in Light theme matching the epic footer) */}
        <Link
          href="/"
          aria-label="Value Tech Solution Home"
          className="transition-transform hover:scale-105 shrink-0 flex items-center"
        >
          <Logo size="sm" theme="light" />
        </Link>

        {/* Center: Desktop Nav Links with Cute Pill Hover & Color Accents */}
        <nav
          className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-bold text-white/90"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-white/15 text-white shadow-inner"
                    : `text-white/80 ${link.accent} hover:bg-white/10 hover:text-white`
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[9px] font-black uppercase tracking-wider bg-[#fb72cc] text-black px-1.5 py-0.2 rounded-full leading-tight">
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1ab9a2] animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Signature GUD Agency Teal CTA Pill Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Teal Pill CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-primary hover:bg-[#159a86] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-tight transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 group shrink-0"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex sm:hidden items-center gap-1 bg-primary text-white px-3.5 py-1.5 rounded-full font-bold text-xs"
          >
            <span>Call</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-white/90 hover:text-white bg-white/10 hover:bg-white/15 rounded-full transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay Floating Card */}
      {isOpen && (
        <div className="pointer-events-auto md:hidden mt-2.5 w-full max-w-[1240px] bg-[#141414]/95 backdrop-blur-2xl border border-white/15 rounded-[28px] p-6 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-bold text-white/60 uppercase tracking-widest">
            <span>Navigation</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Q4
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-sm font-bold text-white/90 bg-white/5 hover:bg-white/10 hover:text-white rounded-2xl flex items-center justify-between transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[9px] font-black uppercase tracking-wider bg-[#fb72cc] text-black px-1.5 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-[#159a86] text-white py-3.5 rounded-full font-bold text-sm shadow-md transition-all active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              <span>Book a Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}
