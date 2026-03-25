"use client";
// V11 — Navy + Emerald + White
// Layout: Centered hero, full-width proof section, 3-card services

const C = { navy: "#0f2d52", emerald: "#10b981", white: "#ffffff", navyLight: "#1a3d6e", navyFaint: "#f0f6ff", emeraldFaint: "#ecfdf5" };

export default function V11() {
  return (
    <div style={{ minHeight: "100vh", background: C.white, fontFamily: "'Inter', sans-serif", color: C.navy }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 72px", borderBottom: `1px solid #e6edf7` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 28, background: C.emerald, borderRadius: 2 }} />
          <span style={{ fontWeight: 800, fontSize: 20, color: C.navy, letterSpacing: -0.5 }}>KlarData</span>
        </div>
        <div style={{ display: "flex", gap: 36, fontSize: 14, color: "#7a93b4" }}>
          {["Services", "Case Studies", "About", "Blog"].map(i => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
        </div>
        <button style={{ background: C.emerald, color: C.white, border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          Free Audit
        </button>
      </nav>

      {/* Hero — centered */}
      <section style={{ textAlign: "center", padding: "100px 72px 80px", background: `linear-gradient(180deg, ${C.navyFaint} 0%, ${C.white} 100%)` }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.emeraldFaint, border: `1px solid #a7f3d0`, borderRadius: 20, padding: "6px 18px", marginBottom: 28 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.emerald }} />
          <span style={{ fontSize: 13, color: "#065f46", fontWeight: 600 }}>Trusted by 47+ data-driven companies</span>
        </div>
        <h1 style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.05, letterSpacing: -2.5, marginBottom: 22, color: C.navy }}>
          The smartest thing you can do<br />with your data
        </h1>
        <p style={{ fontSize: 19, color: "#4a6a8a", maxWidth: 580, margin: "0 auto 44px", lineHeight: 1.7 }}>
          KlarData builds AI-powered analytics and live dashboards that turn complex data into clear decisions—faster than any internal team could.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
          <button style={{ background: C.navy, color: C.white, border: "none", borderRadius: 10, padding: "15px 32px", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
            Book Free Data Audit →
          </button>
          <button style={{ background: C.white, color: C.navy, border: `1.5px solid #c5d5e8`, borderRadius: 10, padding: "15px 32px", fontSize: 16, cursor: "pointer" }}>
            View Case Studies
          </button>
        </div>

        {/* Stats bar */}
        <div style={{ display: "flex", justifyContent: "center", gap: 72, marginTop: 64, paddingTop: 48, borderTop: `1px solid #dce9f5` }}>
          {[["47+", "Projects delivered"], ["3.2×", "Average client ROI"], ["90 days", "To first live dashboard"], ["100%", "Retention rate"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontSize: 32, fontWeight: 800, color: C.navy }}>{n}</div>
              <div style={{ fontSize: 13, color: "#7a93b4", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 72px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: C.navy, marginBottom: 12 }}>How we help you win</h2>
          <p style={{ color: "#7a93b4", fontSize: 16 }}>Three focused services. Deep expertise. Measurable results.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {[
            { icon: "◈", label: "AI & Predictive Analytics", desc: "Custom ML models for churn, revenue forecasting, and demand planning—built, deployed, and maintained." },
            { icon: "▦", label: "BI Dashboard Design", desc: "Executive and operational dashboards in Tableau, Power BI, or Looker. Designed to drive weekly decisions." },
            { icon: "⟳", label: "Data Engineering", desc: "Automated ETL pipelines and clean data warehouses. One source of truth for every team." },
          ].map((s) => (
            <div key={s.label} style={{ border: `1.5px solid #dce9f5`, borderRadius: 16, padding: "32px 28px", background: C.white }}>
              <div style={{ fontSize: 28, color: C.emerald, marginBottom: 16 }}>{s.icon}</div>
              <div style={{ width: 32, height: 3, background: C.emerald, borderRadius: 2, marginBottom: 16 }} />
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 12 }}>{s.label}</h3>
              <p style={{ fontSize: 14, color: "#6a87a8", lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.navy, padding: "80px 72px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <h2 style={{ color: C.white, fontSize: 42, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
            Start with a free 30-minute data audit
          </h2>
          <p style={{ color: "#7a93b4", fontSize: 16, lineHeight: 1.7 }}>
            We'll identify your biggest data opportunity and show you exactly what we'd build. No sales pitch—just clarity.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
          <button style={{ background: C.emerald, color: C.white, border: "none", borderRadius: 10, padding: "16px 36px", fontSize: 17, fontWeight: 700, cursor: "pointer" }}>
            Book Free Audit →
          </button>
          <span style={{ color: "#4a6a8a", fontSize: 13 }}>No commitment. No pressure.</span>
        </div>
      </section>

      <footer style={{ background: C.navy, padding: "28px 72px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #1a3d6e", fontSize: 13, color: "#4a6a8a" }}>
        <span style={{ color: C.white, fontWeight: 800 }}>KlarData</span>
        <span>© 2025 KlarData. All rights reserved.</span>
        <a href="/variants" style={{ color: "#4a6a8a" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
