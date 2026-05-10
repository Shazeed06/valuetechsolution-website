type Props = {
  /** Display height in px. Width auto-scales to preserve aspect ratio. */
  size?: number;
  /**
   * Kept for backwards compatibility — has no effect since the wordmark
   * is baked into the logo image itself.
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
export default function Logo({ size = 44 }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-main.png"
      alt="Value Tech Solution"
      style={{ height: size, width: "auto" }}
      className="shrink-0 select-none"
    />
  );
}

export function LogoMark({ size = 44 }: { size?: number }) {
  return <Logo size={size} />;
}
