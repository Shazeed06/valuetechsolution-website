"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Check if current page has dark background (like /services)
  const isDarkPage = pathname === "/services" || pathname?.startsWith("/services");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-montserrat ${
        isDarkPage
          ? scrolled
            ? "bg-[#141414]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg text-white"
            : "bg-transparent py-5 text-white"
          : scrolled
          ? "bg-[#efebe5]/90 backdrop-blur-md border-b border-[#d8d3ce]/60 py-3.5 shadow-sm text-[#141414]"
          : "bg-transparent py-5 text-[#141414]"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Brand Logo */}
          <Link href="/" aria-label="Value Tech Solution Home" className="transition-transform hover:scale-105">
            <Logo size="md" theme={isDarkPage ? "light" : "dark"} />
          </Link>

          {/* Desktop Nav Links */}
          <div className={`hidden md:flex items-center space-x-8 text-[15px] font-bold tracking-tight ${isDarkPage ? "text-white/90" : "text-[#141414]"}`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Action: Signature GUD Agency Teal CTA Pill Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-[#159a86] text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-tight transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 focus:outline-none ${isDarkPage ? "text-white" : "text-[#141414]"}`}
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className={`md:hidden px-6 pt-4 pb-8 space-y-4 shadow-xl border-b ${isDarkPage ? "bg-[#141414] border-white/10 text-white" : "bg-[#efebe5] border-[#d8d3ce] text-[#141414]"}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 text-base font-bold rounded-lg ${isDarkPage ? "hover:text-primary hover:bg-white/5" : "hover:text-primary hover:bg-black/5"}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3.5 rounded-full font-bold text-sm shadow-md"
              onClick={() => setIsOpen(false)}
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
