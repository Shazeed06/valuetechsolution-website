"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-0 bg-bodyBg text-darkBg overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Abstract Shape Background */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] animate-blob-1"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-blob-2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-20 flex-grow flex flex-col justify-center items-center text-center">
        <h1 className="font-montserrat font-black text-6xl md:text-8xl lg:text-[120px] leading-[0.9] tracking-tighter mb-8 max-w-5xl">
          We Build Websites<br />
          That <span className="font-sourceSerif italic font-normal text-primary">Convert.</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
          Value Tech Solution is a web development studio crafting high-performance websites for startups and growing businesses — beautifully designed, fast, and built to rank.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link href="/contact" className="bg-darkBg text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-all">
            Start a Project
          </Link>
          <Link href="/work" className="border border-darkBg text-darkBg px-8 py-4 rounded-full font-medium hover:bg-darkBg hover:text-white transition-all">
            View Our Work &rarr;
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm font-semibold uppercase tracking-wider mb-20">
          <div>50+ Projects</div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-primary"></div>
          <div>95+ Lighthouse Score</div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-primary"></div>
          <div>4 Weeks Avg. Delivery</div>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-darkBg w-full py-4 overflow-hidden border-t border-primary/20">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center text-primary font-bold text-lg mx-4">
              <span className="mx-4">✦</span> WEB DEVELOPMENT
              <span className="mx-4">✦</span> UI/UX DESIGN
              <span className="mx-4">✦</span> NEXT.JS
              <span className="mx-4">✦</span> SEO
              <span className="mx-4">✦</span> PERFORMANCE
              <span className="mx-4">✦</span> BRANDING
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
