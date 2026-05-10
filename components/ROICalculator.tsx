"use client";

import { useState, useMemo } from "react";
import { Sparkles, TrendingUp } from "lucide-react";

export default function ROICalculator() {
  const [team, setTeam] = useState(8);
  const [hourly, setHourly] = useState(35);
  const [hoursWasted, setHoursWasted] = useState(12);

  const numbers = useMemo(() => {
    const weeklyWastedHours = team * hoursWasted;
    const weeklyCost = weeklyWastedHours * hourly;
    const monthlyCost = weeklyCost * 4.33;
    const yearlyCost = weeklyCost * 52;
    // Assume our automations recover 80% of the wasted hours
    const recoveredYearly = yearlyCost * 0.8;
    const recoveredHoursYearly = weeklyWastedHours * 52 * 0.8;
    return {
      weekly: Math.round(weeklyCost),
      monthly: Math.round(monthlyCost),
      yearly: Math.round(yearlyCost),
      recovered: Math.round(recoveredYearly),
      hoursBack: Math.round(recoveredHoursYearly),
    };
  }, [team, hourly, hoursWasted]);

  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">
              <span className="h-px w-8 bg-carbon-500" />
              ROI calculator
            </span>
            <h2 className="heading-md mt-8">
              How much is busy work{" "}
              <span className="italic-accent text-carbon-500">
                actually costing you?
              </span>
            </h2>
            <p className="mt-6 text-carbon-500">
              Move the sliders to your team's reality. We assume our
              automations recover 80% of the time wasted on repetitive
              workflows — that's the median across our engagements.
            </p>

            <div className="mt-10 space-y-6">
              <Slider
                label="Team size"
                value={team}
                min={1}
                max={50}
                onChange={setTeam}
                suffix=" people"
              />
              <Slider
                label="Hourly fully-loaded cost"
                value={hourly}
                min={10}
                max={150}
                onChange={setHourly}
                prefix="$"
                suffix=" / hr"
              />
              <Slider
                label="Hours wasted on repeat work / week / person"
                value={hoursWasted}
                min={1}
                max={30}
                onChange={setHoursWasted}
                suffix=" hrs"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-carbon-950 bg-carbon-950 p-8 text-white shadow-depth sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
              />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
                    (estimated)
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-white/75">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    live
                  </span>
                </div>

                <div className="mt-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/55">
                    annual recovery if you hire us
                  </p>
                  <p className="mt-3 font-display text-5xl font-bold leading-none tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
                    ${numbers.recovered.toLocaleString("en-US")}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-sm text-emerald-400">
                    <TrendingUp size={14} />+{numbers.hoursBack.toLocaleString("en-US")} hours / year, returned to growth
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  <Stat label="weekly leak" value={`$${numbers.weekly.toLocaleString("en-US")}`} />
                  <Stat label="monthly leak" value={`$${numbers.monthly.toLocaleString("en-US")}`} />
                  <Stat label="yearly leak" value={`$${numbers.yearly.toLocaleString("en-US")}`} />
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs text-white/55">
                  <Sparkles size={12} className="text-white" />
                  Estimate based on 80% median recovery across our agent + automation engagements.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  onChange,
  prefix = "",
  suffix = "",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-carbon-700">{label}</label>
        <span className="font-display text-2xl font-bold tracking-[-0.025em] text-carbon-950">
          {prefix}
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-carbon-950/[0.08] accent-carbon-950"
      />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/45">
        {label}
      </p>
      <p className="mt-1 font-display text-xl font-bold tracking-[-0.025em] text-white sm:text-2xl">
        {value}
      </p>
    </div>
  );
}
