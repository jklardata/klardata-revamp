"use client";

export default function VariantsOverview() {
  const groups = [
    {
      label: "Batch 1 — Style-forward designs",
      variants: [
        { id: 1, name: "Dark Minimal", desc: "Sleek dark theme, blue accents, technical credibility" },
        { id: 2, name: "Corporate Clean", desc: "White/blue enterprise look, trust-first messaging" },
        { id: 3, name: "Bold Black Border", desc: "Brutalist design, bold uppercase typography" },
        { id: 4, name: "Glassmorphism", desc: "Frosted glass cards, purple/teal/blue gradient" },
        { id: 5, name: "Editorial Magazine", desc: "Serif typography, editorial columns, sophisticated" },
        { id: 6, name: "Dashboard Hero", desc: "Full BI dashboard mockup in the hero section" },
        { id: 7, name: "Startup Energy", desc: "Gradient, pill buttons, colorful cards, fast-paced" },
        { id: 8, name: "Monochrome Premium", desc: "Quiet luxury, minimal, light letterSpacing" },
        { id: 9, name: "Split Screen", desc: "Left: copy, Right: live data visualization panel" },
        { id: 10, name: "Cinematic Dark", desc: "100px headline, yellow accents, dramatic presence" },
      ],
    },
    {
      label: "Batch 2 — Trustworthy · Smart · 3-color themes",
      variants: [
        { id: 11, name: "Navy + Emerald + White", desc: "Centered hero, emerald accents on deep navy authority" },
        { id: 12, name: "Slate + Gold + Cream", desc: "Asymmetric hero, warm gold on slate, premium warmth" },
        { id: 13, name: "Deep Teal + Sky Blue + White", desc: "Teal hero, sky CTA buttons, trust + capability" },
        { id: 14, name: "Midnight + Sage + Off-White", desc: "Minimal breathing room, sage accents, quiet expertise" },
        { id: 15, name: "Charcoal + Indigo + Warm White", desc: "Process steps, left-border nav, structured smart" },
        { id: 16, name: "Forest Green + Amber + White", desc: "Warm testimony block, forest authority, amber CTAs" },
        { id: 17, name: "Royal Blue + Coral + White", desc: "Pill nav, alternating metric cards, energetic trust" },
        { id: 18, name: "Deep Navy + Lime + White", desc: "Lime top bar accent, high-contrast authority" },
        { id: 19, name: "Steel Blue + Turquoise + White", desc: "Alternating service sections, turquoise chip tags" },
        { id: 20, name: "Sapphire + Bronze + Ivory", desc: "Premium consulting, bronze dividers, sophisticated" },
      ],
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", padding: "60px 48px", fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ marginBottom: 10 }}>
          <span style={{ color: "#666", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>KlarData.com</span>
        </div>
        <h1 style={{ color: "#fff", fontSize: 38, fontWeight: 800, marginBottom: 6 }}>Landing Page Variants</h1>
        <p style={{ color: "#555", fontSize: 15, marginBottom: 60 }}>20 designs across 2 batches. Click any to open full page.</p>

        {groups.map((group) => (
          <div key={group.label} style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 11, color: "#555", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #1a1a1a" }}>
              {group.label}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 14 }}>
              {group.variants.map((v) => (
                <a
                  key={v.id}
                  href={`/variants/v${v.id}`}
                  style={{
                    display: "block",
                    background: "#111",
                    border: "1px solid #1e1e1e",
                    borderRadius: 10,
                    padding: "20px 24px",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#444")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#1e1e1e")}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ background: "#1a1a1a", color: "#666", borderRadius: 5, padding: "2px 8px", fontSize: 11, fontWeight: 600, border: "1px solid #2a2a2a" }}>
                      V{v.id}
                    </span>
                    <span style={{ color: "#e0e0e0", fontSize: 14, fontWeight: 700 }}>{v.name}</span>
                  </div>
                  <p style={{ color: "#555", fontSize: 12, margin: 0, lineHeight: 1.5 }}>{v.desc}</p>
                  <div style={{ marginTop: 12, color: "#333", fontSize: 11 }}>→ Open design</div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
