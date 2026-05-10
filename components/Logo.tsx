type Props = {
  size?: number;
  withWordmark?: boolean;
  variant?: "dark" | "light";
  compact?: boolean;
};

/**
 * Value Tech Solution mark — bold V with an upward-rising arrow.
 * Renders inline SVG so it inherits currentColor (works on light + dark).
 */
export default function Logo({
  size = 36,
  withWordmark = true,
  variant = "dark",
  compact = false,
}: Props) {
  const color = variant === "dark" ? "text-carbon-950" : "text-white";
  return (
    <span className={`inline-flex items-center gap-3 ${color}`}>
      <LogoMark size={size} />
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-bold tracking-[0.02em]">
            {compact ? "VALUE TECH" : "VALUE TECH"}
          </span>
          <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.34em] opacity-70">
            solution
          </span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label="Value Tech Solution"
      className="shrink-0"
    >
      <g fill="currentColor">
        {/* V — left thick stroke */}
        <path d="M14 18 L30 18 L52 78 L42 78 Z" />
        {/* V — right stroke */}
        <path d="M46 78 L56 78 L72 36 L62 36 Z" />
        {/* Inner motion line — lifting energy */}
        <path d="M28 70 L48 24 L42 24 L24 64 Z" opacity={0.55} />
      </g>
      {/* Arrow shaft — pierces from inside the V up to the top-right */}
      <line
        x1="40"
        y1="62"
        x2="86"
        y2="14"
        stroke="currentColor"
        strokeWidth={9}
        strokeLinecap="square"
      />
      {/* Arrowhead — open chevron */}
      <polygon points="86,14 70,16 84,30" fill="currentColor" />
      <polygon points="86,14 78,30 92,18" fill="currentColor" />
    </svg>
  );
}
