import Image from "next/image";
import { ReactNode } from "react";

// Mobile gets a taller crop so headlines have room to breathe;
// desktop keeps the editorial wide ratio.
const aspects = {
  cine: "aspect-[4/3] sm:aspect-[21/9]",
  wide: "aspect-[4/3] sm:aspect-[16/8]",
  square: "aspect-square",
} as const;

type Props = {
  src: string;
  alt: string;
  caption?: string;
  headline?: ReactNode;
  meta?: ReactNode;
  aspect?: keyof typeof aspects;
  priority?: boolean;
};

export default function MediaDivider({
  src,
  alt,
  caption,
  headline,
  meta,
  aspect = "cine",
  priority = false,
}: Props) {
  return (
    <section className="section-tight">
      <div className="container-x">
        <figure
          className={`relative overflow-hidden rounded-3xl border border-carbon-950/[0.08] ${aspects[aspect]}`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover grayscale contrast-110"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"
          />
          {(caption || headline || meta) && (
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-white sm:p-10">
              <div>
                {caption && (
                  <p className="font-mono text-[9px] uppercase tracking-[0.24em] sm:text-[10px] sm:tracking-[0.28em]">
                    {caption}
                  </p>
                )}
                {headline && (
                  <p className="mt-2 max-w-xl font-display text-base font-bold leading-tight tracking-[-0.02em] sm:mt-3 sm:text-3xl lg:text-4xl">
                    {headline}
                  </p>
                )}
              </div>
              {meta && (
                <div className="hidden text-right font-mono text-[10px] uppercase tracking-[0.28em] sm:block">
                  {meta}
                </div>
              )}
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  );
}
