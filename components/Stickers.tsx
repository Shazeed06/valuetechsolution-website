import { Asterisk } from "lucide-react";

const stickers = [
  { text: "AI · FIRST", rotate: -8 },
  { text: "ENGINEER · OWNED", rotate: 6 },
  { text: "FIXED · PRICE", rotate: -4 },
  { text: "REMOTE · FIRST", rotate: 10 },
  { text: "SHIPPED · WEEKLY", rotate: -6 },
  { text: "SENIOR · ONLY", rotate: 4 },
];

export default function Stickers() {
  return (
    <section className="section-tight overflow-hidden border-y border-carbon-950/[0.08] bg-[rgb(252,251,249)]">
      <div className="container-x mb-10 flex items-center justify-between">
        <span className="eyebrow">
          <span className="h-px w-8 bg-carbon-500" />
          (the studio · in stickers)
        </span>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-carbon-400 sm:inline">
          peel and stick
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {stickers.map((s, i) => (
          <div
            key={s.text}
            className="group relative"
            style={{ transform: `rotate(${s.rotate}deg)` }}
          >
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-carbon-950 bg-[rgb(252,251,249)] sm:h-40 sm:w-40">
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]"
              >
                <defs>
                  <path
                    id={`circle-${i}`}
                    d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                  />
                </defs>
                <text
                  fontSize="14"
                  fontWeight="700"
                  letterSpacing="3"
                  fill="rgb(10,10,10)"
                  fontFamily="'Cabinet Grotesk', sans-serif"
                >
                  <textPath href={`#circle-${i}`} startOffset="0">
                    {`${s.text}  ✺  ${s.text}  ✺  `}
                  </textPath>
                </text>
              </svg>
              <Asterisk
                size={28}
                className="text-carbon-950 transition group-hover:rotate-180"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
