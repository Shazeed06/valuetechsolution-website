"use client";

import Link from "next/link";
import { contactConfig } from "@/lib/contact-config";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-[#141414] bg-[url('/images/footer-bg.png')] bg-cover bg-no-repeat text-white pt-16 sm:pt-20 pb-12 border-t border-white/10 font-montserrat">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-5" aria-label="Value Tech Solution Home">
              <Logo size="md" theme="light" />
            </Link>

            <p className="text-sm text-white/70 font-medium leading-relaxed max-w-sm mb-6">
              A bespoke web engineering studio creating lightning-fast, high-converting Next.js websites and AI automated workflows for ambitious brands.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={contactConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-white border border-white/10 flex items-center justify-center text-white transition-all text-xs font-bold"
                aria-label="LinkedIn"
              >
                In
              </a>
              <a
                href={`https://wa.me/${contactConfig.whatsapp.e164}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-white border border-white/10 flex items-center justify-center text-white transition-all text-xs font-bold"
                aria-label="WhatsApp"
              >
                Wa
              </a>
              <a
                href={`mailto:${contactConfig.email.primary}`}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#fb72cc] hover:text-white border border-white/10 flex items-center justify-center text-white transition-all text-xs font-bold"
                aria-label="Email"
              >
                @
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 col-span-6">
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-[#1ab9a2] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3 col-span-6">
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-[#1ab9a2] mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              <li>
                <Link href="/services/web-development" className="hover:text-white transition-colors">Website Development</Link>
              </li>
              <li>
                <Link href="/services/design-systems" className="hover:text-white transition-colors">UI/UX & Branding</Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-white transition-colors">AI Automation & Workflows</Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-white transition-colors">Technical SEO & AEO</Link>
              </li>
              <li>
                <Link href="/services/starter-website" className="hover:text-white transition-colors">Landing Pages & CRO</Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="md:col-span-3">
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-[#1ab9a2] mb-5">
              Get in Touch
            </h4>
            <p className="text-sm text-white/70 mb-4 font-normal">
              Have a project in mind? We'd love to scope your goals and quote a fixed price.
            </p>
            <div className="space-y-2 text-sm font-semibold text-white">
              <div>
                <a href={`mailto:${contactConfig.email.primary}`} className="hover:text-[#1ab9a2] transition-colors">
                  {contactConfig.email.primary}
                </a>
              </div>
              <div>
                <a href={`tel:${contactConfig.phone.e164}`} className="hover:text-[#1ab9a2] transition-colors">
                  {contactConfig.phone.display}
                </a>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1ab9a2] hover:text-white transition-colors"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/60">
          <p>© {new Date().getFullYear()} Value Tech Solution. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
