"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { contactConfig } from "@/lib/contact-config";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Process", href: "#process" },
  { name: "FAQs", href: "#faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#efebe5]/90 backdrop-blur-md border-b border-[#d8d3ce]/50 py-3.5 shadow-sm"
          : "bg-[#efebe5] py-5"
      }`}
    >
      <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-[#141414] text-white flex items-center justify-center font-montserrat font-black text-sm group-hover:bg-primary transition-colors">
              V
            </span>
            <span className="font-montserrat font-bold text-lg sm:text-xl text-[#141414] tracking-tight">
              Value Tech<span className="text-primary font-serif italic text-xl ml-0.5">.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-7 text-[15px] font-medium text-[#141414]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors tracking-tight relative group py-1"
              >
                {link.name}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#141414] text-white hover:bg-black px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-95"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#141414] hover:text-primary focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#efebe5] border-b border-[#d8d3ce] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-[#141414] hover:text-primary rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 bg-[#141414] text-white py-3 rounded-full font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
