"use client";
// V18 — Deep Navy + Lime Green + White
// Layout: High-contrast, modern authority. Left sidebar nav, large metrics, bold section breaks

const C = { navy: "#020c1b", lime: "#84cc16", white: "#ffffff", navyMid: "#0a1628", limeFaint: "#f7fee7", limeLight: "#d9f99d", navyLight: "#0f2240" };

export default function V18() {
  return (
    <div style={{ minHeight: "100vh", background: C.white, fontFamily: "'Inter', sans-serif", color: C.navy }}>
      {/* Nav — with colored left accent */}
      <nav style={{ borderTop: `4px solid ${C.lime}`, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 72px", background: C.navy }}>
        <span style={{ fontWeight: 900, fontSize: 22, color: C.white, letterSpacing: -0.5 }}>
          Klar<span style={{ color: C.lime }}>Data</span>
        </span>
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: "#4a6a8a" }}>
          {["Services", "Work", "About", "Blog"].map(i => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
        </div>
        <button style={{ background: C.lime, color: C.navy, border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
          Free Audit →
        </button>
      </nav>

      {/* Hero — dark with large type */}
      <section style={{ background: C.navy, padding: "90px 72px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid #1a3457`, borderRadius: 20, padding: "5px 16px", marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.lime }} />
              <span style={{ fontSize: 12, color: "#4a6a8a", letterSpacing: 1 }}>AI + BI Consulting · Trusted by 47+ Teams</span>
            </div>
            <h1 style={{ fontSize: 62, fontWeight: 900, lineHeight: 1.06, letterSpacing: -2.5, color: C.white, marginBottom: 24 }}>
              Data you can<br />trust. Insights<br />that <span style={{ color: C.lime }}>grow revenue.</span>
            </h1>
            <p style={{ fontSize: 18, color: "#4a6a8a", lineHeight: 1.75, marginBottom: 40, maxWidth: 460 }}>
              We build AI-powered analytics and BI dashboards that give B2B companies the clarity to act fast and grow with confidence.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <button style={{ background: C.lime, color: C.navy, border: "none", borderRadius: 10, padding: "15px 30px", fontSize: 16, fontWeight: 800, cursor: "pointer" }}>
                Book Free Audit
              </button>
              <button style={{ background: "transparent", color: C.white, border: "1.5px solid #1a3457", borderRadius: 10, padding: "15px 30px", fontSize: 16, cursor: "pointer" }}>
                See Case Studies
              </button>
            </div>
          </div>
          {/* Right: metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {[
              { val: "47+", lbl: "Projects", border: `1px solid ${C.navyLight}` },
              { val: "3.2×", lbl: "Avg ROI", border: `1px solid ${C.navyLight}` },
              { val: "90d", lbl: "Time to Value", border: `1px solid ${C.navyLight}` },
              { val: "100%", lbl: "Retention", border: `1px solid ${C.navyLight}` },
            ].map((s, i) => (
              <div key={s.lbl} style={{ background: i === 0 ? C.lime : C.navyLight, border: s.border, padding: "32px 28px" }}>
                <div style={{ fontSize: 44, fontWeight: 900, color: i === 0 ? C.navy : C.white }}>{s.val}</div>
                <div style={{ fontSize: 13, color: i === 0 ? "#2a4a0a" : "#4a6a8a", marginTop: 6, textTransform: "uppercase", letterSpacing: 1 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lime divider */}
      <div style={{ height: 4, background: C.lime }} />

      {/* Services — clean white */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 72px" }}>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: C.navy, marginBottom: 48 }}>What we deliver</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {[
            { icon: "◈", title: "AI & Predictive Analytics", desc: "Custom ML models for churn, revenue forecasting, and demand planning—deployed and maintained end to end." },
            { icon: "▦", title: "BI Dashboard Design", desc: "Executive and operational dashboards in Tableau, Power BI, or Looker. Designed for real decisions, not just presentations." },
            { icon: "⟳", title: "Data Engineering", desc: "Automated ETL pipelines, clean warehouses, and one trusted source of truth across every team." },
          ].map(s => (
            <div key={s.title} style={{ border: `2px solid #f1f5f9`, borderRadius: 14, padding: "30px 26px" }}>
              <div style={{ fontSize: 26, color: C.lime, background: C.limeFaint, width: 48, height: 48, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>{s.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process — horizontal, numbered */}
      <section style={{ background: C.limeFaint, borderTop: "1px solid #d9f99d", borderBottom: "1px solid #d9f99d", padding: "56px 72px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 36, color: C.navy }}>How it works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {["Free Audit — 30 min call to find your top opportunity", "Strategy — we map your ideal data stack and roadmap", "Build — we build, test, and deploy everything", "Grow — ongoing support and improvements as you scale"].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 14 }}>
                <span style={{ fontWeight: 900, fontSize: 28, color: C.lime, lineHeight: 1, minWidth: 32 }}>{i + 1}</span>
                <p style={{ fontSize: 14, color: "#3a5a1a", lineHeight: 1.7 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.navy, padding: "80px 72px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <h2 style={{ color: C.white, fontSize: 42, fontWeight: 800, lineHeight: 1.2 }}>
          Start with a free data audit. See the opportunity in 30 minutes.
        </h2>
        <div>
          <p style={{ color: "#4a6a8a", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            No sales pitch. We'll identify your top data opportunity and show you exactly what we'd build to unlock it.
          </p>
          <button style={{ background: C.lime, color: C.navy, border: "none", borderRadius: 10, padding: "16px 40px", fontSize: 17, fontWeight: 800, cursor: "pointer" }}>
            Book Free Audit →
          </button>
        </div>
      </section>

      <footer style={{ background: C.navy, padding: "28px 72px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #0f2240", fontSize: 13, color: "#4a6a8a" }}>
        <span style={{ fontWeight: 900, color: C.white }}>Klar<span style={{ color: C.lime }}>Data</span></span>
        <span>© 2025 KlarData.</span>
        <a href="/variants" style={{ color: "#4a6a8a" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
