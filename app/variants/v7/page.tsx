"use client";
// V7: Startup Energy — bright colors, dynamic, growth-focused

export default function V7() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Inter', sans-serif", color: "#111" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 56px", background: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#6366f1" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ec4899" }} />
          <span style={{ fontWeight: 800, fontSize: 20, marginLeft: 4 }}>KlarData</span>
        </div>
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: "#555" }}>
          {["Services", "Work", "Pricing", "Blog"].map((i) => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
        </div>
        <button style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)", color: "#fff", border: "none", borderRadius: 50, padding: "10px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          Get Started Free →
        </button>
      </nav>

      {/* Hero */}
      <section style={{ padding: "80px 56px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", gap: 8, background: "#faf5ff", border: "1px solid #e9d5ff", borderRadius: 50, padding: "6px 16px", marginBottom: 24 }}>
          <span style={{ fontSize: 13, color: "#7c3aed", fontWeight: 600 }}>🚀 New: AI Forecasting Engine v2.0</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "5fr 4fr", gap: 60, alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.05, letterSpacing: -2.5, marginBottom: 20 }}>
              Stop guessing.<br />
              <span style={{ background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Start knowing.
              </span>
            </h1>
            <p style={{ fontSize: 18, color: "#555", lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
              KlarData gives your team AI-powered analytics and live dashboards so you can make faster, smarter decisions—without hiring a data team.
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 40 }}>
              <button style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)", color: "#fff", border: "none", borderRadius: 50, padding: "15px 32px", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
                Book Free Audit →
              </button>
              <span style={{ color: "#999", fontSize: 14 }}>No credit card required</span>
            </div>
            <div style={{ display: "flex", gap: 32 }}>
              {[["47+", "Happy clients"], ["3.2×", "Avg ROI"], ["<90d", "First dashboard"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "#111" }}>{n}</div>
                  <div style={{ fontSize: 12, color: "#999" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: colorful cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              { bg: "#f5f3ff", border: "#e9d5ff", icon: "🤖", label: "AI Analytics" },
              { bg: "#fdf2f8", border: "#fbcfe8", icon: "📊", label: "BI Dashboards" },
              { bg: "#eff6ff", border: "#bfdbfe", icon: "⚡", label: "Data Pipelines" },
              { bg: "#f0fdf4", border: "#bbf7d0", icon: "📈", label: "Forecasting" },
            ].map((c) => (
              <div key={c.label} style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 20, padding: "28px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{c.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#333" }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <div style={{ background: "#fafafa", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0", padding: "20px 56px", display: "flex", alignItems: "center", gap: 48 }}>
        <span style={{ fontSize: 12, color: "#999", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, whiteSpace: "nowrap" }}>Trusted by teams at</span>
        {["Acme Corp", "Velocity SaaS", "DataFirst Co", "GrowthLabs", "PipelineAI"].map((co) => (
          <span key={co} style={{ fontSize: 14, fontWeight: 700, color: "#ccc" }}>{co}</span>
        ))}
      </div>

      {/* Services */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 56px" }}>
        <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -1, marginBottom: 8 }}>Everything you need to win with data</h2>
        <p style={{ color: "#777", fontSize: 16, marginBottom: 44 }}>Three core services. One expert team. Real results.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {[
            { color: "#6366f1", bg: "#f5f3ff", icon: "🤖", title: "AI & Predictive Analytics", desc: "ML models for churn prediction, revenue forecasting, and demand planning—deployed and maintained." },
            { color: "#ec4899", bg: "#fdf2f8", icon: "📊", title: "BI Dashboard Design", desc: "Executive and operational dashboards in Tableau, Power BI, or Looker. Used every day, not just in demos." },
            { color: "#10b981", bg: "#f0fdf4", icon: "⚡", title: "Data Engineering", desc: "Automated ETL pipelines and a clean data warehouse. One source of truth. Zero spreadsheet debates." },
          ].map((s) => (
            <div key={s.title} style={{ borderRadius: 20, border: `2px solid ${s.bg}`, padding: "32px 28px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: s.bg, borderRadius: "0 20px 0 80px" }} />
              <div style={{ fontSize: 32, marginBottom: 16, position: "relative" }}>{s.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{s.desc}</p>
              <a href="#" style={{ display: "inline-block", marginTop: 20, color: s.color, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Learn more →</a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ margin: "0 56px 80px", background: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)", borderRadius: 28, padding: "70px 60px", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: 44, fontWeight: 900, marginBottom: 14, letterSpacing: -1 }}>Ready to transform your data?</h2>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 17, marginBottom: 36 }}>Book a free 30-minute audit. We'll show you your biggest data opportunity.</p>
        <button style={{ background: "#fff", color: "#6366f1", border: "none", borderRadius: 50, padding: "16px 40px", fontSize: 17, fontWeight: 800, cursor: "pointer" }}>
          Book Free Audit — It's Free →
        </button>
      </section>

      <footer style={{ padding: "32px 56px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #f0f0f0", fontSize: 13, color: "#999" }}>
        <span style={{ fontWeight: 800, color: "#111", fontSize: 16 }}>KlarData</span>
        <span>© 2025 KlarData. All rights reserved.</span>
        <a href="/variants" style={{ color: "#999" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
