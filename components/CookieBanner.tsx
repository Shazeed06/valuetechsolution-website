"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const KEY = "vts-cookie-consent-v1";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (!v) setShow(true);
    } catch {
      // ignore
    }
  }, []);

  function decide(value: "all" | "essential") {
    try {
      localStorage.setItem(
        KEY,
        JSON.stringify({ value, ts: Date.now() })
      );
    } catch {
      // ignore
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md">
      <div className="rounded-2xl border border-carbon-950/15 bg-white p-5 shadow-depth">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-carbon-950 text-white">
            <Cookie size={15} />
          </span>
          <div className="flex-1">
            <p className="font-display text-base font-bold tracking-[-0.01em] text-carbon-950">
              Cookies — the boring kind.
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-carbon-500">
              We use a small number of cookies to understand which pages get
              read and to keep the site fast. Pick what you're comfortable
              with.{" "}
              <Link href="/privacy" className="underline underline-offset-2">
                Privacy policy
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button
                onClick={() => decide("all")}
                className="rounded-full bg-carbon-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-carbon-700"
              >
                Allow all
              </button>
              <button
                onClick={() => decide("essential")}
                className="rounded-full border border-carbon-950/15 bg-white px-4 py-2 text-xs font-semibold text-carbon-700 transition hover:border-carbon-950 hover:text-carbon-950"
              >
                Essential only
              </button>
            </div>
          </div>
          <button
            aria-label="Dismiss"
            onClick={() => decide("essential")}
            className="-mr-1 -mt-1 grid h-8 w-8 place-items-center rounded-full text-carbon-400 hover:bg-carbon-950/[0.04] hover:text-carbon-950"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
