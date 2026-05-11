"use client";

import { useEffect, useState } from "react";
import posthog from "posthog-js";
import { usePathname, useSearchParams } from "next/navigation";
import { CONSENT_EVENT, hasAnalyticsConsent } from "@/lib/consent";

export default function AnalyticsProvider() {
  const pathname = usePathname();
  const search = useSearchParams();
  const [enabled, setEnabled] = useState(false);

  // Read consent on mount + listen for live changes from the cookie banner.
  useEffect(() => {
    const sync = () => setEnabled(hasAnalyticsConsent());
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CONSENT_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  // Init PostHog only after the user opted into analytics.
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host =
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";
    if (!key) return;
    if (!enabled) return;
    if (typeof window === "undefined") return;
    if (posthog.__loaded) return;
    posthog.init(key, {
      api_host: host,
      capture_pageview: false,
      capture_pageleave: true,
      person_profiles: "identified_only",
      autocapture: true,
      session_recording: { maskAllInputs: true },
    });
  }, [enabled]);

  // Page-view tracking — skipped until consent is granted AND PostHog loaded.
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
    if (!enabled) return;
    if (!posthog.__loaded) return;
    const url = pathname + (search?.toString() ? `?${search}` : "");
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, search, enabled]);

  return null;
}
