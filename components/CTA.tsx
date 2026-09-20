"use client";
import Link from "next/link";
import { CONTACT } from "@/lib/contact-config";

export default function CTA() {
  return (
    <section className="py-32 bg-darkBg text-white overflow-hidden relative">
      {/* Subtle Teal Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-montserrat font-bold text-5xl md:text-7xl tracking-tight mb-8">
          Ready to Build <br /> Something Great?
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Book a free 30-minute call. We'll scope your project and quote a fixed price.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link href="/contact" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all text-lg">
            Book a Free Call
          </Link>
          <a href={`mailto:${CONTACT.email}`} className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-darkBg transition-all text-lg">
            {CONTACT.email}
          </a>
        </div>
        
        <div className="text-gray-400 font-medium">
          {CONTACT.phone} &middot; WhatsApp available
        </div>
      </div>
    </section>
  );
}
