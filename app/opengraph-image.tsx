import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Value Tech Solution — AI Automation, Web & Growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 75% 25%, rgba(110,225,200,0.18), transparent 35%), radial-gradient(circle at 22% 78%, rgba(255,255,255,0.08), transparent 38%), #0a0a0a",
          color: "white",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width={64} height={64} viewBox="0 0 100 100">
              {/* V — left thick stroke */}
              <path d="M14 18 L30 18 L52 78 L42 78 Z" fill="white" />
              {/* V — right stroke */}
              <path d="M46 78 L56 78 L72 36 L62 36 Z" fill="white" />
              {/* Inner motion line */}
              <path
                d="M28 70 L48 24 L42 24 L24 64 Z"
                fill="white"
                opacity={0.55}
              />
              {/* Arrow shaft */}
              <line
                x1="40"
                y1="62"
                x2="86"
                y2="14"
                stroke="white"
                strokeWidth={9}
                strokeLinecap="square"
              />
              {/* Arrowhead */}
              <polygon points="86,14 70,16 84,30" fill="white" />
              <polygon points="86,14 78,30 92,18" fill="white" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: 0.5 }}>
                VALUE TECH
              </span>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: 5,
                  marginTop: 8,
                  opacity: 0.7,
                  fontFamily: "ui-monospace, monospace",
                }}
              >
                SOLUTION
              </span>
            </div>
          </div>

          <span
            style={{
              fontSize: 13,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "ui-monospace, monospace",
            }}
          >
            AI · Automation · Web · SEO
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              fontFamily: "ui-monospace, monospace",
              marginBottom: 32,
            }}
          >
            — engineer the work · automate the rest
          </span>
          <h1
            style={{
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 0.95,
              margin: 0,
              maxWidth: 1000,
            }}
          >
            We delete <span style={{ fontStyle: "italic", fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>boring work.</span>
          </h1>
          <h1
            style={{
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 0.95,
              margin: 0,
              marginTop: 8,
            }}
          >
            We ship the rest.
          </h1>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 24,
            fontSize: 14,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          <span>n8n · ghl · zapier · python · next.js</span>
          <span>valuetechsolution.com</span>
        </div>
      </div>
    ),
    size
  );
}
