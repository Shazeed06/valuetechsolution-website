import type { MetadataRoute } from "next";
import { cases } from "@/lib/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://valuetechsolution.com";
  const routes: { path: string; priority: number; freq: "monthly" | "weekly" | "daily" }[] = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/services", priority: 0.9, freq: "weekly" },
    { path: "/services/ai-automation", priority: 0.95, freq: "weekly" },
    { path: "/services/web-development", priority: 0.85, freq: "weekly" },
    { path: "/services/seo", priority: 0.85, freq: "weekly" },
    { path: "/services/design-systems", priority: 0.8, freq: "weekly" },
    { path: "/services/n8n", priority: 0.85, freq: "weekly" },
    { path: "/services/gohighlevel", priority: 0.85, freq: "weekly" },
    { path: "/services/zapier", priority: 0.85, freq: "weekly" },
    { path: "/services/python-automation", priority: 0.85, freq: "weekly" },
    { path: "/pricing", priority: 0.85, freq: "weekly" },
    { path: "/case-studies", priority: 0.8, freq: "weekly" },
    { path: "/portfolio", priority: 0.7, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/contact", priority: 0.6, freq: "monthly" },
    { path: "/privacy", priority: 0.3, freq: "monthly" },
    { path: "/terms", priority: 0.3, freq: "monthly" },
    { path: "/security", priority: 0.5, freq: "monthly" },
  ];

  const base_routes: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const case_routes: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...base_routes, ...case_routes];
}
