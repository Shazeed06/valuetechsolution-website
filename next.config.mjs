/** @type {import('next').NextConfig} */

// ── Content-Security-Policy ──────────────────────────────────────────
// Allow-list of third-party origins this site actually loads from.
// Locked tight on script/style/font/frame; img + connect are slightly
// looser because of Unsplash hotlinks + analytics beacons.
//
// If you add a new third-party (Cal.com, Calendly, Crisp, etc.), add
// its origin to the matching directive below or it will silently fail
// in browser console with a CSP violation.
const csp = [
  "default-src 'self'",
  // Inline scripts are required by Next.js for hydration; GTM and
  // Consent Mode default also use inline. 'unsafe-eval' is needed
  // by some animation libraries in dev — kept conservative here.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
    "https://www.googletagmanager.com " +
    "https://*.googletagmanager.com " +
    "https://www.google-analytics.com " +
    "https://*.google-analytics.com " +
    "https://us.i.posthog.com " +
    "https://*.posthog.com " +
    "https://googleads.g.doubleclick.net " +
    "https://www.googleadservices.com",
  // Tailwind ships utility classes; we also use plenty of style={{}}
  // for one-off positioning, so 'unsafe-inline' stays. Fontshare CDN
  // hosts the Cabinet Grotesk + JetBrains Mono CSS.
  "style-src 'self' 'unsafe-inline' https://api.fontshare.com",
  "font-src 'self' data: https://cdn.fontshare.com",
  // Marketing site, lots of image sources — keep `https:` permissive.
  "img-src 'self' data: blob: https:",
  // Analytics + Apps Script webhook ping back from the client when
  // you wire up custom events. PostHog wildcards cover regional hosts.
  "connect-src 'self' " +
    "https://*.posthog.com " +
    "https://www.google-analytics.com " +
    "https://*.google-analytics.com " +
    "https://www.googletagmanager.com " +
    "https://stats.g.doubleclick.net " +
    "https://script.google.com " +
    "https://script.googleusercontent.com",
  // Allow only the GTM iframe (noscript fallback uses it).
  "frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net",
  // Disallow this page being framed anywhere — clickjacking guard.
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  // Auto-upgrade any accidental http:// asset to https:// in browsers.
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Force HTTPS for 2 years incl. subdomains; preload-ready.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Block this page being embedded anywhere — clickjacking defence.
  { key: "X-Frame-Options", value: "DENY" },
  // Browsers must respect declared content-type (no sniffing).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Don't leak the full URL when users click off-site.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable powerful features by default — opt-in per-use later if needed.
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=(), midi=()",
  },
  // Cross-origin policy — keep the resource same-site by default.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // The actual CSP, last so it's easy to find in dev tools.
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig = {
  reactStrictMode: true,
  // Hide "X-Powered-By: Next.js" — small information-leak guard.
  poweredByHeader: false,
  // Modern compression at the edge.
  compress: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
  async headers() {
    return [
      {
        // Apply security headers to every route.
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Long-cache for hashed static assets.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
