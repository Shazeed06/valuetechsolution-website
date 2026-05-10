type Props = {
  size?: number;
  withWordmark?: boolean;
  variant?: "dark" | "light";
  compact?: boolean;
};

export default function Logo({
  size = 36,
  withWordmark = true,
  variant = "dark",
  compact = false,
}: Props) {
  const color = variant === "dark" ? "text-carbon-950" : "text-white";
  return (
    <span className={`inline-flex items-center gap-2.5 ${color}`}>
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        role="img"
        aria-label="Value Tech Solution"
        className="shrink-0"
      >
        <path
          d="M50 2 L91 26 L91 74 L50 98 L9 74 L9 26 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <text
          x="50"
          y="63"
          textAnchor="middle"
          fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
          fontWeight={900}
          fontSize={28}
          letterSpacing={-1}
          fill="currentColor"
        >
          VTS
        </text>
      </svg>
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
