"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Search,
  Sparkles,
  Calendar,
  X,
  BookOpen,
  Filter,
  User,
  ArrowRight,
  Zap,
} from "lucide-react";
import type { Post } from "@/lib/blog";
import CTA from "@/components/CTA";

/* ─────────────────────────────────────────────────────────────────────────────
   PROFESSIONAL FROSTED GLASS BUBBLE (Luxury Translucent Refraction)
───────────────────────────────────────────────────────────────────────────── */
type BubbleTint = "teal" | "pink" | "amber" | "purple" | "cyan";

interface GlassBubbleProps {
  size?: number;
  tint?: BubbleTint;
  className?: string;
  floatVariant?: 1 | 2 | 3;
  delay?: string;
}

function ProfessionalGlassBubble({
  size = 120,
  tint = "teal",
  className = "",
  floatVariant = 1,
  delay = "0s",
}: GlassBubbleProps) {
  const glassGradients: Record<BubbleTint, string> = {
    teal: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 18%, rgba(121,255,243,0.22) 42%, rgba(26,185,162,0.18) 70%, rgba(12,114,99,0.32) 100%)",
    pink: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 18%, rgba(255,180,232,0.22) 42%, rgba(251,114,204,0.18) 70%, rgba(196,38,145,0.32) 100%)",
    amber: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 18%, rgba(255,232,153,0.22) 42%, rgba(254,168,0,0.18) 70%, rgba(194,118,0,0.32) 100%)",
    purple: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 18%, rgba(248,202,255,0.22) 42%, rgba(186,73,245,0.18) 70%, rgba(118,20,176,0.32) 100%)",
    cyan: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 18%, rgba(181,247,255,0.22) 42%, rgba(0,180,216,0.18) 70%, rgba(0,119,182,0.32) 100%)",
  };

  const glassShadows: Record<BubbleTint, string> = {
    teal: "inset 0 4px 10px rgba(255,255,255,0.85), inset 0 -6px 14px rgba(12,114,99,0.25), inset -2px 0 6px rgba(255,255,255,0.3), 0 20px 45px -12px rgba(26,185,162,0.22)",
    pink: "inset 0 4px 10px rgba(255,255,255,0.85), inset 0 -6px 14px rgba(196,38,145,0.25), inset -2px 0 6px rgba(255,255,255,0.3), 0 20px 45px -12px rgba(251,114,204,0.22)",
    amber: "inset 0 4px 10px rgba(255,255,255,0.85), inset 0 -6px 14px rgba(194,118,0,0.25), inset -2px 0 6px rgba(255,255,255,0.3), 0 20px 45px -12px rgba(254,168,0,0.22)",
    purple: "inset 0 4px 10px rgba(255,255,255,0.85), inset 0 -6px 14px rgba(118,20,176,0.25), inset -2px 0 6px rgba(255,255,255,0.3), 0 20px 45px -12px rgba(186,73,245,0.22)",
    cyan: "inset 0 4px 10px rgba(255,255,255,0.85), inset 0 -6px 14px rgba(0,119,182,0.25), inset -2px 0 6px rgba(255,255,255,0.3), 0 20px 45px -12px rgba(0,180,216,0.22)",
  };

  const animClass =
    floatVariant === 1
      ? "animate-bubble-1"
      : floatVariant === 2
      ? "animate-bubble-2"
      : "animate-bubble-3";

  return (
    <div
      className={`rounded-full relative pointer-events-none select-none backdrop-blur-[6px] border border-white/60 transition-transform duration-700 hover:scale-105 ${animClass} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: glassGradients[tint],
        boxShadow: glassShadows[tint],
        animationDelay: delay,
      }}
      aria-hidden="true"
    >
      <div className="absolute w-[36%] h-[22%] rounded-[50%] bg-gradient-to-b from-white/95 via-white/50 to-transparent top-[10%] left-[16%] rotate-[-32deg] blur-[0.4px]" />
      <div className="absolute w-[8%] h-[8%] rounded-full bg-white/95 top-[25%] left-[30%] blur-[0.2px]" />
      <div className="absolute w-[44%] h-[16%] rounded-[50%] bg-white/40 bottom-[10%] right-[14%] blur-[2px]" />
    </div>
  );
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "AI Engineering": { bg: "bg-[#ba49f5]/15", text: "text-[#ba49f5]", border: "border-[#ba49f5]/30" },
  "Automation": { bg: "bg-[#1ab9a2]/15", text: "text-[#1ab9a2]", border: "border-[#1ab9a2]/30" },
  "n8n Automation": { bg: "bg-[#00b4d8]/15", text: "text-[#00b4d8]", border: "border-[#00b4d8]/30" },
  "GoHighLevel": { bg: "bg-[#fea800]/15", text: "text-[#c27600]", border: "border-[#fea800]/30" },
  "SEO + GEO": { bg: "bg-[#fea800]/15", text: "text-[#c27600]", border: "border-[#fea800]/30" },
  "SEO": { bg: "bg-[#fea800]/15", text: "text-[#c27600]", border: "border-[#fea800]/30" },
  "Web Engineering": { bg: "bg-[#1ab9a2]/15", text: "text-[#1ab9a2]", border: "border-[#1ab9a2]/30" },
  "Web Development": { bg: "bg-[#1ab9a2]/15", text: "text-[#1ab9a2]", border: "border-[#1ab9a2]/30" },
  "Web Performance": { bg: "bg-emerald-500/15", text: "text-emerald-700", border: "border-emerald-400/30" },
  "Studio Notes": { bg: "bg-[#fb72cc]/15", text: "text-[#c42691]", border: "border-[#fb72cc]/30" },
};

function getCategoryTheme(cat: string) {
  return categoryColors[cat] || { bg: "bg-primary/15", text: "text-primary", border: "border-primary/30" };
}

export default function BlogPageContent({ initialPosts }: { initialPosts: Post[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract all categories cleanly
  const allCategories = useMemo(() => {
    const cats = Array.from(new Set(initialPosts.map((p) => p.category)));
    return ["All", ...cats];
  }, [initialPosts]);

  // Filter posts based on Category and Search Query
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.author.name.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  // Lead featured story (first match if not actively searching, or top result)
  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="relative bg-[#efebe5] text-[#141414] overflow-hidden min-h-screen">
      
      {/* ── Ambient Background Glows ── */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#1ab9a2]/12 via-[#fb72cc]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[40%] left-[-150px] w-[600px] h-[600px] bg-gradient-to-tr from-[#fea800]/10 via-[#ba49f5]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL HERO SECTION: Elevated Studio Display
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20">
        
        {/* Floating Frosted Glass Bubbles in Negative Space */}
        <ProfessionalGlassBubble
          size={135}
          tint="teal"
          floatVariant={1}
          className="hidden lg:block absolute top-24 right-[8%] opacity-90"
        />
        <ProfessionalGlassBubble
          size={90}
          tint="pink"
          floatVariant={2}
          delay="1.4s"
          className="hidden md:block absolute top-40 left-[5%] opacity-90"
        />
        <ProfessionalGlassBubble
          size={60}
          tint="amber"
          floatVariant={3}
          delay="2.6s"
          className="hidden xl:block absolute bottom-4 right-[25%] opacity-80"
        />

        <div className="max-w-[1262px] mx-auto px-5 sm:px-8 relative z-10">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[#d8d3ce] px-4 py-1.5 rounded-full shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#141414]">
              Engineering Field Notes · 100% In-House Insights
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="font-montserrat font-black text-4xl sm:text-6xl md:text-7xl lg:text-[80px] tracking-[-0.04em] text-[#141414] leading-[0.98] max-w-4xl">
            Architecture, Web Speed &amp;{" "}
            <span className="font-sourceSerif italic font-normal text-primary underline decoration-primary/40 decoration-wavy decoration-2 underline-offset-8">
              Digital Craft.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-lg sm:text-xl text-[#666460] font-medium leading-relaxed max-w-2xl">
            Unfiltered engineering essays, architecture teardowns, and growth principles from our senior developers — covering Next.js 16, Core Web Vitals, conversion design, and AI automation.
          </p>

          {/* Stat Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <div className="inline-flex items-center gap-2 bg-white/90 border border-[#d8d3ce] px-4 py-2 rounded-full text-xs font-bold text-[#141414] shadow-xs">
              <BookOpen size={14} className="text-primary" />
              <span>{initialPosts.length} Published Field Notes</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/90 border border-[#d8d3ce] px-4 py-2 rounded-full text-xs font-bold text-[#141414] shadow-xs">
              <Zap size={14} className="text-[#fea800]" />
              <span>98+ Lighthouse Performance Standard</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/90 border border-[#d8d3ce] px-4 py-2 rounded-full text-xs font-bold text-[#141414] shadow-xs">
              <User size={14} className="text-[#fb72cc]" />
              <span>Senior Engineers Only</span>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. INTERACTIVE FILTER & SEARCH CONSOLE
      ─────────────────────────────────────────────────────────────── */}
      <section className="sticky top-20 z-30 bg-[#efebe5]/95 backdrop-blur-md border-y border-[#d8d3ce] py-4 transition-all">
        <div className="max-w-[1262px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Pills (Horizontal Scroll on Mobile) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {allCategories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all whitespace-nowrap active:scale-95 cursor-pointer ${
                      isSelected
                        ? "bg-[#141414] text-white shadow-md"
                        : "bg-white/80 hover:bg-white text-[#666460] hover:text-[#141414] border border-[#d8d3ce]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7d7b77] pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search field notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-[#d8d3ce] bg-white pl-9 pr-8 py-2 text-xs sm:text-sm text-[#141414] placeholder:text-[#8a8781] focus:border-primary focus:outline-none transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7d7b77] hover:text-[#141414]"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

          </div>

          {/* Active Filter Status */}
          {(selectedCategory !== "All" || searchQuery) && (
            <div className="mt-3 flex items-center justify-between text-xs text-[#7d7b77] pt-2 border-t border-[#e2ddd6]">
              <span>
                Found <strong className="text-[#141414]">{filteredPosts.length}</strong> {filteredPosts.length === 1 ? "article" : "articles"}
                {selectedCategory !== "All" && <> in <strong className="text-primary">{selectedCategory}</strong></>}
                {searchQuery && <> matching &quot;<strong className="text-[#141414]">{searchQuery}</strong>&quot;</>}
              </span>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-xs font-bold text-primary hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. MAIN CONTENT: Featured Post + Post Grid
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 max-w-[1262px] mx-auto px-5 sm:px-8">
        
        {filteredPosts.length === 0 ? (
          /* Empty Search State */
          <div className="bg-white rounded-3xl p-12 text-center border border-[#d8d3ce] shadow-sm my-8">
            <div className="w-14 h-14 rounded-full bg-[#f7f2ea] flex items-center justify-center mx-auto text-[#7d7b77] mb-4">
              <Search size={24} />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-[#141414]">
              No articles found
            </h3>
            <p className="mt-2 text-sm text-[#7d7b77] max-w-sm mx-auto">
              We couldn&apos;t find any articles matching your search criteria. Try a different keyword or reset filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-6 inline-flex items-center gap-2 bg-[#141414] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-black transition"
            >
              Show All Articles
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* ── FEATURED POST (EDITORIAL MAGAZINE CARD) ── */}
            {featuredPost && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-primary flex items-center gap-1.5">
                    <Sparkles size={14} />
                    <span>Lead Field Note</span>
                  </span>
                  <span className="text-xs text-[#7d7b77] font-mono">
                    {featuredPost.n}
                  </span>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group block rounded-[32px] overflow-hidden border border-[#ece9e1] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-primary/40"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    
                    {/* Cover Visual (7 cols) */}
                    <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden bg-[#141414]">
                      <Image
                        src={featuredPost.cover}
                        alt={featuredPost.coverAlt}
                        fill
                        priority
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                      
                      {/* Category Badge on Image */}
                      <div className="absolute top-5 left-5 z-10">
                        {(() => {
                          const theme = getCategoryTheme(featuredPost.category);
                          return (
                            <span className="inline-block bg-[#141414]/90 backdrop-blur-md text-white border border-white/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                              {featuredPost.category}
                            </span>
                          );
                        })()}
                      </div>
                    </div>

                    {/* Content Details (5 cols) */}
                    <div className="lg:col-span-5 p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
                      <div>
                        {/* Meta strip */}
                        <div className="flex items-center gap-3 text-xs font-bold text-[#7d7b77] mb-4">
                          <span className="flex items-center gap-1">
                            <Clock size={13} className="text-primary" />
                            {featuredPost.readMinutes} min read
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar size={13} className="text-[#fb72cc]" />
                            {new Date(featuredPost.publishedAt).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-[32px] text-[#141414] tracking-tight leading-[1.1] group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h2>

                        {/* Description */}
                        <p className="mt-4 text-sm sm:text-base text-[#666460] font-medium leading-relaxed line-clamp-4">
                          {featuredPost.description}
                        </p>
                      </div>

                      {/* Author & CTA Footer */}
                      <div className="mt-8 pt-6 border-t border-[#ece9e1] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-xs">
                            {featuredPost.author.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-montserrat font-bold text-xs text-[#141414]">
                              {featuredPost.author.name}
                            </p>
                            <p className="text-[10px] text-[#7d7b77]">Founding Engineer</p>
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                          <span>Read Essay</span>
                          <ArrowRight size={15} />
                        </span>
                      </div>

                    </div>

                  </div>
                </Link>
              </div>
            )}

            {/* ── REST OF ARTICLES (STRUCTURED 3-COLUMN BENTO GRID) ── */}
            {gridPosts.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-6 pt-6 border-t border-[#d8d3ce]">
                  <h3 className="font-montserrat font-black text-2xl text-[#141414] tracking-tight">
                    {selectedCategory === "All" ? "Recent Field Notes" : `More in ${selectedCategory}`}
                  </h3>
                  <span className="text-xs font-semibold text-[#7d7b77]">
                    {gridPosts.length} {gridPosts.length === 1 ? "article" : "articles"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {gridPosts.map((post) => {
                    const theme = getCategoryTheme(post.category);
                    return (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col rounded-3xl overflow-hidden border border-[#ece9e1] bg-white shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-primary/40"
                      >
                        {/* Image Thumbnail */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#141414]">
                          <Image
                            src={post.cover}
                            alt={post.coverAlt}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3 z-10">
                            <span
                              className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-white/95 text-[#141414] shadow-xs border ${theme.border}`}
                            >
                              {post.category}
                            </span>
                          </div>
                          <span className="absolute top-3 right-3 text-[10px] font-mono font-bold bg-[#141414]/80 text-white/90 px-2 py-0.5 rounded-full">
                            {post.n}
                          </span>
                        </div>

                        {/* Text Details */}
                        <div className="flex flex-1 flex-col p-6 sm:p-7 justify-between">
                          <div>
                            {/* Meta */}
                            <div className="flex items-center gap-2 text-[11px] font-bold text-[#7d7b77] mb-2.5">
                              <Clock size={12} className="text-primary" />
                              <span>{post.readMinutes} min read</span>
                              <span>•</span>
                              <span>
                                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </span>
                            </div>

                            {/* Title */}
                            <h4 className="font-montserrat font-bold text-lg sm:text-xl text-[#141414] leading-snug tracking-tight group-hover:text-primary transition-colors">
                              {post.title}
                            </h4>

                            {/* Excerpt */}
                            <p className="mt-3 text-xs sm:text-sm text-[#666460] font-medium leading-relaxed line-clamp-3">
                              {post.description}
                            </p>
                          </div>

                          {/* Card Footer */}
                          <div className="mt-6 pt-4 border-t border-[#ece9e1] flex items-center justify-between text-xs">
                            <span className="text-[#7d7b77] font-semibold truncate max-w-[150px]">
                              {post.author.name}
                            </span>
                            <span className="font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                              <span>Read</span>
                              <ArrowUpRight size={13} />
                            </span>
                          </div>
                        </div>

                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        )}

      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. ARCHITECTURE AUDIT CALLOUT BANNER
      ─────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1262px] mx-auto px-5 sm:px-8 pb-16">
        <div className="rounded-3xl bg-[#141414] text-white p-8 sm:p-12 md:p-14 relative overflow-hidden border border-white/10 shadow-2xl">
          {/* Subtle glow accent */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/15 px-3 py-1 rounded-full inline-block mb-4">
              Free Architectural Review
            </span>
            <h3 className="font-montserrat font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              Want our senior engineers to audit your current website speed and stack?
            </h3>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              Book a 20-minute discovery call. We&apos;ll inspect your Core Web Vitals live, analyze your conversion architecture, and propose a fixed-price Next.js sprint.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-[#159a86] text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold transition shadow-lg hover:scale-105 active:scale-95"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight size={16} />
              </Link>
              <a
                href="https://wa.me/918810650579?text=Hi%20Value%20Tech%20Solution,%20I'd%20like%20a%20website%20speed%20audit."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold transition"
              >
                <span>WhatsApp Founders</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CTA COMPONENT
      ─────────────────────────────────────────────────────────────── */}
      <CTA />

    </div>
  );
}
