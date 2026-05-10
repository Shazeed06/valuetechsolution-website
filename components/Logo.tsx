import Image from "next/image";

type Props = {
  size?: number;
  withWordmark?: boolean;
  variant?: "dark" | "light";
  /**
   * If true, renders only the mark (no inner padding tweaks). Useful in
   * tight chrome like the navbar where the wordmark sits beside it.
   */
  compact?: boolean;
};

/**
 * Value Tech Solution mark — uses the brand JPEG at /logo-main.png.
 * The wordmark next to it is text-based so it auto-flips colour
 * (black on light bg, white on dark hero) via the variant prop.
 */
export default function Logo({
  size = 36,
  withWordmark = true,
  variant = "dark",
  compact = false,
}: Props) {
  const wordmarkColor = variant === "dark" ? "text-carbon-950" : "text-white";
  return (
    <span className="inline-flex items-center gap-3">
      <LogoMark size={size} />
      {withWordmark && !compact && (
        <span className={`flex flex-col leading-none ${wordmarkColor}`}>
          <span className="font-display text-[15px] font-bold tracking-[0.02em]">
            VALUE TECH
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
    <Image
      src="/logo-main.png"
      alt="Value Tech Solution"
      width={size}
      height={size}
      priority
      className="shrink-0 select-none"
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}
