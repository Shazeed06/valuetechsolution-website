import type { MetadataRoute } from "next";
import { publishedPosts } from "@/lib/blog";

const BASE = "https://valuetechsolution.com";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: `${BASE}/`, changeFrequency: "weekly", priority: 1.0 },
  { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/blog`, changeFrequency: "daily", priority: 0.9 },
  { url: `${BASE}/services/web-development`, changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/services/ai-automation`, changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/services/claude-automation`, changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/services/seo`, changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/services/gohighlevel`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/services/n8n-automation`, changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes: MetadataRoute.Sitemap = publishedPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.publishedAt ? new Date(p.publishedAt) : undefined,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...blogRoutes];
}
