type Props = {
  /** Display height in px. Width auto-scales to preserve aspect ratio. */
  size?: number;
  /**
   * Visual tone the logo sits on.
   *  - "dark" (default): use the asset's natural dark wordmark.
   *  - "light": force the PNG to render in pure white via CSS filter
   *    (brightness-0 collapses every colour to black, then invert flips
   *    it to white). Lets us use the same PNG on the dark hero / footer
   *    without needing a second asset file.
   */
  variant?: "dark" | "light";
  withWordmark?: boolean;
};

/**
 * Renders the user's brand logo (public/logo-main.png) at a fixed height
 * with auto width so the wordmark inside the image stays legible.
 *
 * Uses a plain <img> tag because:
 *  • next/image requires explicit width AND height props (it locks the
 *    aspect ratio to those numbers, which crops/squishes a wide logo).
 *  • The PNG is only 49KB — optimisation gain is marginal.
 *  • Renders synchronously on first paint without layout shift.
 */
export default function Logo({ size = 44, variant = "dark" }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-main.png"
      alt="Value Tech Solution"
      style={{ height: size, width: "auto" }}
      className={`shrink-0 select-none transition-[filter] duration-300 ${
        variant === "light" ? "brightness-0 invert" : ""
      }`}
    />
  );
}

export function LogoMark({ size = 44 }: { size?: number }) {
  return <Logo size={size} />;
}
