"use client";

import Link from "next/link";
import { contactConfig } from "@/lib/contact-config";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#efebe5] text-[#141414] border-t border-[#d8d3ce] pt-16 pb-12">
      <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#d8d3ce]">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-4" aria-label="Value Tech Solution Home">
              <Logo size="md" />
            </Link>

            <p className="text-sm text-[#7d7b77] font-medium leading-relaxed max-w-sm mb-6">
              A bespoke web engineering studio creating lightning-fast, high-converting websites and modern digital products for ambitious brands.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              <a
                href={contactConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#d8d3ce] flex items-center justify-center text-[#141414] hover:bg-[#141414] hover:text-white transition-all text-xs font-bold"
                aria-label="LinkedIn"
              >
                In
              </a>
              <a
                href={`https://wa.me/${contactConfig.whatsapp.e164}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#d8d3ce] flex items-center justify-center text-[#141414] hover:bg-[#141414] hover:text-white transition-all text-xs font-bold"
                aria-label="WhatsApp"
              >
                Wa
              </a>
              <a
                href={`mailto:${contactConfig.email.primary}`}
                className="w-9 h-9 rounded-full bg-white border border-[#d8d3ce] flex items-center justify-center text-[#141414] hover:bg-[#141414] hover:text-white transition-all text-xs font-bold"
                aria-label="Email"
              >
                @
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 col-span-6">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-[0.1em] text-[#141414] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium text-[#7d7b77]">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-primary transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-2 col-span-6">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-[0.1em] text-[#141414] mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm font-medium text-[#7d7b77]">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">Web Development</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">E-Commerce</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">Technical SEO</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">Speed Audit</Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="md:col-span-3">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-[0.1em] text-[#141414] mb-5">
              Get in Touch
            </h4>
            <p className="text-sm text-[#7d7b77] mb-3">
              Have a project in mind? We&apos;d love to hear from you.
            </p>
            <div className="space-y-1.5 text-sm font-semibold text-[#141414]">
              <div>
                <a href={`mailto:${contactConfig.email.primary}`} className="hover:text-primary transition-colors">
                  {contactConfig.email.primary}
                </a>
              </div>
              <div>
                <a href={`tel:${contactConfig.phone.e164}`} className="hover:text-primary transition-colors">
                  {contactConfig.phone.display}
                </a>
              </div>
            </div>

            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-black transition-colors"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#7d7b77]">
          <p>© {new Date().getFullYear()} Value Tech Solution. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
