"use client";
// V3: Bold Black Border — brutalist design, heavy typography

export default function V3() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Inter', sans-serif", color: "#000" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", borderBottom: "3px solid #000" }}>
        <span style={{ fontWeight: 900, fontSize: 24, letterSpacing: -1 }}>KLARDATA</span>
        <div style={{ display: "flex", gap: 0 }}>
          {["Services", "Work", "About", "Blog"].map((item) => (
            <a key={item} href="#" style={{ color: "#000", textDecoration: "none", padding: "8px 20px", fontSize: 14, fontWeight: 600, borderLeft: "2px solid #000" }}>{item}</a>
          ))}
        </div>
        <button style={{ background: "#000", color: "#fff", border: "3px solid #000", padding: "10px 24px", fontSize: 14, fontWeight: 800, cursor: "pointer", letterSpacing: 0.5 }}>
          FREE AUDIT →
        </button>
      </nav>

      {/* Hero */}
      <section style={{ padding: "80px 48px", borderBottom: "3px solid #000" }}>
        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: 40, alignItems: "start" }}>
          <div>
            <h1 style={{ fontSize: 88, fontWeight: 900, lineHeight: 0.95, letterSpacing: -4, marginBottom: 32, textTransform: "uppercase" }}>
              AI &<br />DATA<br /><span style={{ WebkitTextStroke: "3px #000", color: "transparent" }}>CONSULTING</span>
            </h1>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <button style={{ background: "#000", color: "#fff", border: "3px solid #000", padding: "16px 32px", fontSize: 17, fontWeight: 800, cursor: "pointer", textTransform: "uppercase" }}>
                Get Free Audit
              </button>
              <button style={{ background: "#fff", color: "#000", border: "3px solid #000", padding: "16px 32px", fontSize: 17, fontWeight: 800, cursor: "pointer", textTransform: "uppercase" }}>
                See Our Work
              </button>
            </div>
          </div>
          <div style={{ border: "3px solid #000", padding: 28 }}>
            <p style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 500, color: "#000" }}>
              We turn your messy data into clean, actionable intelligence. AI pipelines. Live dashboards. Real decisions, faster.
            </p>
            <div style={{ borderTop: "2px solid #000", marginTop: 20, paddingTop: 20 }}>
              <div style={{ fontSize: 40, fontWeight: 900 }}>47+</div>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Projects Shipped</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee-style tag row */}
      <div style={{ borderBottom: "3px solid #000", background: "#000", padding: "14px 48px", display: "flex", gap: 40, overflowX: "hidden" }}>
        {["AI Analytics", "BI Dashboards", "Data Pipelines", "ML Models", "Tableau", "Power BI", "Snowflake", "dbt", "Python"].map((t) => (
          <span key={t} style={{ color: "#fff", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, whiteSpace: "nowrap" }}>✦ {t}</span>
        ))}
      </div>

      {/* Services */}
      <section style={{ padding: "64px 48px", borderBottom: "3px solid #000" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40, paddingBottom: 24, borderBottom: "2px solid #000" }}>
          <h2 style={{ fontSize: 44, fontWeight: 900, textTransform: "uppercase", letterSpacing: -1 }}>What We Do</h2>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#666", textTransform: "uppercase" }}>3 Core Services</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
          {[
            { num: "01", title: "AI & Predictive Analytics", desc: "Custom ML models for revenue forecasting, churn prediction, and demand planning." },
            { num: "02", title: "BI Dashboard Build", desc: "Executive and operational dashboards. Built in Tableau, Power BI, or Looker." },
            { num: "03", title: "Data Pipeline Engineering", desc: "Clean, automated ETL. One source of truth. No more spreadsheet chaos." },
          ].map((s, i) => (
            <div key={s.title} style={{ padding: "32px 28px", borderRight: i < 2 ? "3px solid #000" : "none" }}>
              <div style={{ fontSize: 48, fontWeight: 900, color: "#e5e7eb", marginBottom: 16 }}>{s.num}</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, textTransform: "uppercase", letterSpacing: -0.5 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", borderBottom: "3px solid #000" }}>
        <h2 style={{ fontSize: 52, fontWeight: 900, textTransform: "uppercase", lineHeight: 1, letterSpacing: -2 }}>
          Ready to Get Serious About Your Data?
        </h2>
        <div>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 28, color: "#444" }}>
            Book a free 30-minute data audit. We'll identify your top opportunity and show you exactly what we'd build.
          </p>
          <button style={{ background: "#000", color: "#fff", border: "3px solid #000", padding: "18px 40px", fontSize: 18, fontWeight: 900, cursor: "pointer", textTransform: "uppercase", letterSpacing: 1 }}>
            BOOK FREE AUDIT →
          </button>
        </div>
      </section>

      <footer style={{ padding: "28px 48px", display: "flex", justifyContent: "space-between", borderTop: "3px solid #000" }}>
        <span style={{ fontWeight: 900, fontSize: 18, letterSpacing: -0.5 }}>KLARDATA</span>
        <span style={{ fontSize: 13, color: "#666" }}>© 2025 KlarData. All rights reserved.</span>
        <a href="/variants" style={{ color: "#666", fontSize: 13 }}>← Back to variants</a>
      </footer>
    </div>
  );
}
