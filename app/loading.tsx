/**
 * Renders instantly while a route streams in. Replaces the blank-page gap
 * that used to appear during client-side navigation.
 */
export default function Loading() {
  return (
    <div className="min-h-[60vh] pt-32 pb-20 sm:pt-40">
      <div className="container-x">
        {/* Eyebrow skeleton */}
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-carbon-950/15" />
          <span className="h-3 w-32 animate-pulse rounded-full bg-carbon-950/10" />
        </div>

        {/* Heading skeleton */}
        <div className="mt-8 space-y-4">
          <span className="block h-12 w-3/4 max-w-2xl animate-pulse rounded-lg bg-carbon-950/10 sm:h-16" />
          <span className="block h-12 w-1/2 max-w-xl animate-pulse rounded-lg bg-carbon-950/[0.07] sm:h-16" />
        </div>

        {/* Lede skeleton */}
        <div className="mt-10 space-y-3">
          <span className="block h-4 w-full max-w-xl animate-pulse rounded bg-carbon-950/[0.07]" />
          <span className="block h-4 w-5/6 max-w-xl animate-pulse rounded bg-carbon-950/[0.07]" />
          <span className="block h-4 w-2/3 max-w-xl animate-pulse rounded bg-carbon-950/[0.07]" />
        </div>

        {/* Centered live label */}
        <div className="mt-16 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-carbon-950 opacity-50" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-carbon-950" />
          </span>
          loading
        </div>
      </div>
    </div>
  );
}
