import type { Metadata } from "next";
import { publishedPosts } from "@/lib/blog";
import { BreadcrumbSchema } from "@/components/Schema";
import BlogPageContent from "@/components/BlogPageContent";

export const metadata: Metadata = {
  title: { absolute: "Blog & Field Notes — Web Dev & SEO | Value Tech Solution" },
  description:
    "Engineering notes on Next.js web development, UI/UX design, Core Web Vitals speed optimization, and SEO — written by senior engineers at Value Tech Solution.",
  alternates: { canonical: "https://valuetechsolution.com/blog" },
};

export default function BlogPage() {
  const published = publishedPosts();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://valuetechsolution.com/" },
          { name: "Blog", url: "https://valuetechsolution.com/blog" },
        ]}
      />
      <BlogPageContent initialPosts={published} />
    </>
  );
}
