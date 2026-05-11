/**
 * Shared cookie-consent state. The banner writes to localStorage and
 * dispatches a "vts:consent-change" CustomEvent so any listener
 * (AnalyticsProvider, etc.) can react without a full reload.
 */

export const CONSENT_KEY = "vts-cookie-consent-v1";
export const CONSENT_EVENT = "vts:consent-change";

export type ConsentValue = "all" | "essential";

export type ConsentRecord = { value: ConsentValue; ts: number };

export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed?.value === "all" || parsed?.value === "essential") return parsed;
    return null;
  } catch {
    return null;
  }
}

export function writeConsent(value: ConsentValue) {
  if (typeof window === "undefined") return;
  const record: ConsentRecord = { value, ts: Date.now() };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch {
    // ignore
  }
  pushGtagConsent(value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: record }));
}

/**
 * Notify Google Consent Mode v2 (and any GTM-managed tag listening on
 * the consent state) that the user just made a choice. The default
 * state was set to "denied" inline in app/layout.tsx before GTM
 * loaded, so this is always an "update" call.
 */
function pushGtagConsent(value: ConsentValue) {
  const w = window as unknown as {
    dataLayer?: IArguments[] | unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  if (!Array.isArray(w.dataLayer)) w.dataLayer = [];
  const state = value === "all" ? "granted" : "denied";
  // Mirrors the categories declared in the default consent block.
  const update = {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
    personalization_storage: state,
  };
  // Prefer the gtag function defined inline in app/layout.tsx — that's
  // what GTM Consent Mode listens to. Fall back to a direct dataLayer
  // event so the choice is still observable in GTM debug.
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", update);
  } else {
    (w.dataLayer as unknown[]).push({ event: "consent_update", ...update });
  }
}

export function hasAnalyticsConsent(): boolean {
  return readConsent()?.value === "all";
}
