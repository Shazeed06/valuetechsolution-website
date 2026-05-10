import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import FloatingActions from "@/components/FloatingActions";
import CookieBanner from "@/components/CookieBanner";
import { OrganizationSchema, WebSiteSchema } from "@/components/Schema";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://valuetechsolution.com"),
  title: {
    default: "Value Tech Solution — AI Automation, Web & Growth",
    template: "%s · Value Tech Solution",
  },
  description:
    "Value Tech Solution is an AI startup of engineers shipping n8n, GHL, Zapier, and Python automations alongside Next.js websites and SEO programs that compound.",
  keywords: [
    "AI automation",
    "n8n agency",
    "GoHighLevel agency",
    "Zapier automation",
    "Python automation",
    "web development",
    "SEO services",
    "Value Tech Solution",
  ],
  authors: [{ name: "Value Tech Solution" }],
  openGraph: {
    title: "Value Tech Solution — AI Automation, Web & Growth",
    description:
      "Engineers shipping automations on n8n, GHL, Zapier, Python — plus websites and SEO that actually rank.",
    url: "https://valuetechsolution.com",
    siteName: "Value Tech Solution",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Value Tech Solution — AI Automation, Web & Growth",
    description:
      "n8n · GHL · Zapier · Python · Next.js · SEO. Built by engineers, not marketers.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
      </head>
      <body className="min-h-screen bg-[rgb(252,251,249)] text-carbon-950 antialiased">
        <OrganizationSchema />
        <WebSiteSchema />
        <LenisProvider />
        <CustomCursor />
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
        <Navbar />
        <main className="relative">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingActions />
        <CookieBanner />
      </body>
    </html>
  );
}
