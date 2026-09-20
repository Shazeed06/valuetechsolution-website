"use client";

import { useState } from "react";
import Link from "next/link";
import { contactConfig } from "@/lib/contact-config";
import Logo from "@/components/Logo";
import { Linkedin, Mail, MessageCircle, Github } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#141414] bg-[url('/images/footer-bg.png')] bg-cover bg-no-repeat md:pt-[100px] md:pb-[60px] py-14 font-montserrat text-white border-t border-white/10">
      <div className="max-w-[1262px] px-5 sm:px-8 mx-auto">
        
        {/* Main Footer Content Row */}
        <div className="flex lg:flex-nowrap flex-wrap md:mb-[80px] mb-12 md:gap-8 gap-10">
          
          {/* Column 1: Logo & Studio Info (lg:w-3/12) */}
          <div className="lg:w-3/12 md:w-[45%] w-full md:text-start text-center">
            <Link href="/" className="inline-block mb-6" aria-label="Value Tech Solution Home">
              <Logo size="lg" theme="light" />
            </Link>
            <p className="text-white/70 text-sm font-medium leading-relaxed max-w-[280px] md:mx-0 mx-auto">
              A bespoke web engineering studio creating lightning-fast Next.js websites and AI workflows.
            </p>
          </div>

          {/* Column 2: Quick Links (lg:w-2/12) - Teal Accent Header */}
          <div className="lg:w-2/12 md:w-[45%] w-full">
            <h4 className="text-lg sm:text-xl font-bold text-[#1ab9a2] mb-6 capitalize tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-white font-bold text-base sm:text-lg hover:text-[#1ab9a2] transition-colors block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-white font-bold text-base sm:text-lg hover:text-[#1ab9a2] transition-colors block"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white font-bold text-base sm:text-lg hover:text-[#1ab9a2] transition-colors block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-white font-bold text-base sm:text-lg hover:text-[#1ab9a2] transition-colors block"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white font-bold text-base sm:text-lg hover:text-[#1ab9a2] transition-colors block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Policies (lg:w-3/12) - Pink Accent Header */}
          <div className="lg:w-3/12 md:w-[45%] w-full">
            <div className="w-fit lg:mx-auto">
              <h4 className="text-lg sm:text-xl font-bold text-[#fb72cc] mb-6 capitalize tracking-tight">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-white font-bold text-base sm:text-lg hover:text-[#fb72cc] transition-colors block"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-white font-bold text-base sm:text-lg hover:text-[#fb72cc] transition-colors block"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="text-white font-bold text-base sm:text-lg hover:text-[#fb72cc] transition-colors block"
                  >
                    Security Standard
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Newsletter & Direct Socials (lg:w-4/12) - Amber Accent Header */}
          <div className="lg:w-4/12 md:w-[45%] w-full">
            <div className="max-w-[380px] md:ml-auto">
              <h4 className="text-lg sm:text-xl font-bold text-[#fea800] mb-3 capitalize tracking-tight">
                Get in Touch
              </h4>
              <p className="text-white/80 text-sm font-medium leading-relaxed mb-5">
                Sign up for case studies, performance insights, and engineering updates.
              </p>

              {/* GUD Agency Style Capsule Input Form */}
              <form onSubmit={handleSubmit} className="flex items-center my-5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="text-white text-sm font-medium w-full flex-1 px-5 bg-white/10 rounded-l-full h-[48px] placeholder:text-white/50 border border-r-0 border-white/20 focus:outline-none focus:border-[#fea800] focus:ring-1 focus:ring-[#fea800]"
                />
                <button
                  type="submit"
                  className="text-black font-bold text-sm h-[48px] px-6 flex items-center justify-center bg-[#fea800] hover:bg-[#e09400] rounded-r-full transition-colors shrink-0 cursor-pointer shadow-md"
                >
                  {subscribed ? "Done!" : "Subscribe"}
                </button>
              </form>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href={contactConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1ab9a2] hover:text-white border border-white/15 flex items-center justify-center text-white/80 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${contactConfig.whatsapp.e164}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white border border-white/15 flex items-center justify-center text-white/80 transition-all hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${contactConfig.email.primary}`}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#fb72cc] hover:text-white border border-white/15 flex items-center justify-center text-white/80 transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/Shazeed06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#fea800] hover:text-black border border-white/15 flex items-center justify-center text-white/80 transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Tagline & Copyright Bar matching GUD Agency */}
        <div className="pt-8 border-t border-white/10 text-center">
          <h5 className="text-base font-bold text-white mb-1.5 tracking-tight">
            High Performance Websites · Engineered for Growth
          </h5>
          <p className="text-xs text-white/50 font-medium">
            © {new Date().getFullYear()} Value Tech Solution · All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
