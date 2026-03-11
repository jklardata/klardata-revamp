import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Business Intelligence & Analytics Consulting";
  const category = searchParams.get("category") || "Insights";

  // Category accent color map
  const accentMap: Record<string, string> = {
    "Strategy": "#10b981",       // emerald
    "Data Infrastructure": "#06b6d4", // cyan
    "BI Tools": "#818cf8",       // indigo
  };
  const accent = accentMap[category] || "#3b82f6"; // default blue

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          background: "#0d1b2e",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glow blob */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`,
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "48px 64px 0",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: 20, height: 20, background: "white", borderRadius: 3 }} />
            </div>
            <span style={{ color: "white", fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
              Klardata
            </span>
          </div>

          {/* Category badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              borderRadius: 100,
              border: `1px solid ${accent}55`,
              background: `${accent}18`,
              color: accent,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            {category}
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: title.length > 50 ? 52 : 60,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1,
              maxWidth: 900,
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom author bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 64px 48px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${accent}, #1e3a5f)`,
                border: `2px solid ${accent}55`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              JL
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ color: "white", fontSize: 18, fontWeight: 600 }}>Justin Leu</span>
              <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 15 }}>
                BI & Data Consultant · 17+ years
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: accent }} />
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 16 }}>klardata.com</span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
