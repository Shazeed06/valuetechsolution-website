"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { readConsent, writeConsent, type ConsentValue } from "@/lib/consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!readConsent()) setShow(true);
  }, []);

  function decide(value: ConsentValue) {
    writeConsent(value);
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md">
      <div className="rounded-3xl border border-[#ece9e1] bg-white p-5 shadow-2xl">
        <div className="flex items-start gap-3.5">
          <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
            <Cookie size={18} />
          </span>
          <div className="flex-1">
            <p className="font-montserrat text-sm font-bold tracking-tight text-[#141414]">
              Cookie Preferences
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#7d7b77]">
              We use minimal cookies for site performance and speed telemetry.{" "}
              <Link href="/privacy" className="underline hover:text-black">
                Privacy policy
              </Link>
              .
            </p>
            <div className="mt-3.5 flex flex-wrap items-center gap-2">
              <button
                onClick={() => decide("all")}
                className="rounded-full bg-[#141414] hover:bg-black px-4 py-1.5 text-xs font-semibold text-white transition-all active:scale-95"
              >
                Allow all
              </button>
              <button
                onClick={() => decide("essential")}
                className="rounded-full border border-[#d8d3ce] bg-[#f7f2ea] hover:bg-[#ece9e1] px-4 py-1.5 text-xs font-semibold text-[#141414] transition-all"
              >
                Essential only
              </button>
            </div>
          </div>
          <button
            aria-label="Dismiss"
            onClick={() => decide("essential")}
            className="-mr-1 -mt-1 grid h-7 w-7 place-items-center rounded-full text-[#7d7b77] hover:bg-[#ece9e1]"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
