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
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: record }));
}

export function hasAnalyticsConsent(): boolean {
  return readConsent()?.value === "all";
}
