"use client";
// V1: Dark Minimal — sleek dark, data-forward, technical credibility

export default function V1() {
  return (
    <div style={{ minHeight: "100vh", background: "#050a14", fontFamily: "'Inter', sans-serif", color: "#fff" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 60px", borderBottom: "1px solid #0d1f35" }}>
        <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: -0.5 }}>
          <span style={{ color: "#3b82f6" }}>Klar</span>Data
        </span>
        <div style={{ display: "flex", gap: 36, fontSize: 14, color: "#8899aa" }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Case Studies</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>About</a>
        </div>
        <button style={{ background: "#1d4ed8", color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
          Get a Free Audit
        </button>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 60px 80px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#0d1f35", border: "1px solid #1d4ed8", borderRadius: 20, padding: "6px 16px", marginBottom: 32 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b82f6", display: "inline-block" }}></span>
          <span style={{ fontSize: 12, color: "#60a5fa", letterSpacing: 1, textTransform: "uppercase" }}>AI + BI Consulting</span>
        </div>
        <h1 style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, marginBottom: 24, maxWidth: 800 }}>
          Turn Your Data Into
          <br /><span style={{ color: "#3b82f6" }}>Competitive Advantage</span>
        </h1>
        <p style={{ fontSize: 20, color: "#8899aa", maxWidth: 560, lineHeight: 1.7, marginBottom: 48 }}>
          KlarData combines AI and business intelligence to automate reporting, surface insights, and accelerate decisions—without adding headcount.
        </p>
        <div style={{ display: "flex", gap: 16 }}>
          <button style={{ background: "#1d4ed8", color: "#fff", border: "none", borderRadius: 10, padding: "16px 32px", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>
            Schedule a Free Audit →
          </button>
          <button style={{ background: "transparent", color: "#8899aa", border: "1px solid #1d3557", borderRadius: 10, padding: "16px 32px", fontSize: 16, cursor: "pointer" }}>
            See Case Studies
          </button>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 60, marginTop: 80, paddingTop: 60, borderTop: "1px solid #0d1f35" }}>
          {[["47+", "Data projects delivered"], ["3.2x", "Avg. ROI in year one"], ["90 days", "To first dashboard"], ["100%", "Client retention"]].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#fff" }}>{num}</div>
              <div style={{ fontSize: 13, color: "#4a6080", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 60px" }}>
        <p style={{ fontSize: 12, color: "#3b82f6", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>What We Do</p>
        <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 48 }}>Data Solutions That Move Fast</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {[
            { icon: "◈", title: "AI-Powered Analytics", desc: "Machine learning models that predict churn, revenue, and demand—integrated into your existing stack." },
            { icon: "▦", title: "BI Dashboard Design", desc: "Executive and operational dashboards in Tableau, Power BI, or Looker. Built to be used, not ignored." },
            { icon: "⟳", title: "Data Pipeline Automation", desc: "ETL pipelines that eliminate manual reporting and ensure every team works from the same source of truth." },
          ].map((s) => (
            <div key={s.title} style={{ background: "#080f1c", border: "1px solid #0d1f35", borderRadius: 16, padding: "32px 28px" }}>
              <div style={{ fontSize: 28, marginBottom: 16, color: "#3b82f6" }}>{s.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#8899aa", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#080f1c", borderTop: "1px solid #0d1f35", borderBottom: "1px solid #0d1f35", padding: "80px 60px", textAlign: "center" }}>
        <h2 style={{ fontSize: 44, fontWeight: 800, marginBottom: 16 }}>Ready to See Your Data Work Harder?</h2>
        <p style={{ fontSize: 18, color: "#8899aa", marginBottom: 40 }}>Book a free 30-minute data audit. No sales pitch—just clarity on your biggest opportunity.</p>
        <button style={{ background: "#1d4ed8", color: "#fff", border: "none", borderRadius: 10, padding: "18px 44px", fontSize: 18, fontWeight: 700, cursor: "pointer" }}>
          Book Free Audit →
        </button>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px 60px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 800, fontSize: 18 }}><span style={{ color: "#3b82f6" }}>Klar</span>Data</span>
        <span style={{ color: "#4a6080", fontSize: 13 }}>© 2025 KlarData. All rights reserved.</span>
        <a href="/variants" style={{ color: "#4a6080", fontSize: 13 }}>← Back to variants</a>
      </footer>
    </div>
  );
}
