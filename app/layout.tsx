import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import FloatingActions from "@/components/FloatingActions";
import CookieBanner from "@/components/CookieBanner";
import { OrganizationSchema, WebSiteSchema } from "@/components/Schema";
import { Suspense } from "react";

const GTM_ID = "GTM-W6BL4JCR";
const GA_ID = "G-2E1KGCSRBL";

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
        {/*
          Google Consent Mode v2 — must run BEFORE the GTM snippet.
          Defaults every advertising / analytics category to "denied"
          so GTM-managed tags wait for the user's choice. If the visitor
          previously opted-in (localStorage), we immediately push an
          "update" so they're not asked twice. The cookie banner pushes
          another update on click via lib/consent.ts.
        */}
        <Script id="gtag-consent-default" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  personalization_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
try {
  var raw = localStorage.getItem('vts-cookie-consent-v1');
  if (raw) {
    var v = JSON.parse(raw);
    if (v && v.value === 'all') {
      gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
        personalization_storage: 'granted'
      });
    }
  }
} catch (e) {}`}
        </Script>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* Google Analytics 4 (gtag.js). Loads after interactive paint
            and respects the Consent Mode v2 default we set in the
            beforeInteractive block above — analytics_storage starts
            denied, the cookie banner flips it to granted on opt-in. */}
        <Script
          id="gtag-loader"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </head>
      <body className="min-h-screen bg-[rgb(252,251,249)] text-carbon-950 antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <OrganizationSchema />
        <WebSiteSchema />
        <LenisProvider />
        <CustomCursor />
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <FloatingActions />
        <CookieBanner />
      </body>
    </html>
  );
}
