"use client";
// V6: Dashboard Hero — product-led, live dashboard mockup in hero

export default function V6() {
  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9", fontFamily: "'Inter', sans-serif", color: "#0f172a" }}>
      {/* Nav */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "16px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 800 }}>K</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 18 }}>KlarData</span>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 14, color: "#64748b" }}>
          {["Services", "Solutions", "Case Studies", "Pricing"].map((i) => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
        </div>
        <button style={{ background: "#3b82f6", color: "#fff", border: "none", borderRadius: 8, padding: "9px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
          Get Free Audit
        </button>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ display: "inline-block", background: "#dbeafe", color: "#1d4ed8", borderRadius: 20, padding: "5px 16px", fontSize: 13, fontWeight: 600, marginBottom: 20 }}>
            Trusted by 47+ data-driven teams
          </span>
          <h1 style={{ fontSize: 58, fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 16 }}>
            Your data, finally<br /><span style={{ color: "#3b82f6" }}>working for you.</span>
          </h1>
          <p style={{ fontSize: 18, color: "#64748b", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6 }}>
            AI-powered analytics and BI dashboards that turn your messy data into decisions your team actually acts on.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button style={{ background: "#3b82f6", color: "#fff", border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>
              Book Free Audit →
            </button>
            <button style={{ background: "#fff", color: "#0f172a", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 28px", fontSize: 16, cursor: "pointer" }}>
              See How It Works
            </button>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #e2e8f0", boxShadow: "0 40px 100px rgba(0,0,0,0.10)", overflow: "hidden" }}>
          {/* Dashboard chrome */}
          <div style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", padding: "12px 20px", display: "flex", gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
            <div style={{ flex: 1, background: "#e2e8f0", borderRadius: 4, height: 12, marginLeft: 16 }} />
          </div>
          {/* Dashboard sidebar + content */}
          <div style={{ display: "flex" }}>
            <div style={{ width: 180, background: "#fff", borderRight: "1px solid #f1f5f9", padding: "20px 0" }}>
              {["Overview", "Revenue", "Customers", "Churn Risk", "Forecast", "Reports"].map((item, i) => (
                <div key={item} style={{ padding: "10px 20px", fontSize: 13, color: i === 0 ? "#3b82f6" : "#94a3b8", background: i === 0 ? "#eff6ff" : "transparent", fontWeight: i === 0 ? 600 : 400, cursor: "pointer" }}>
                  {item}
                </div>
              ))}
            </div>
            <div style={{ flex: 1, padding: "24px" }}>
              {/* KPI cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 20 }}>
                {[
                  { label: "Revenue MTD", value: "$284K", change: "+18%", up: true },
                  { label: "Active Users", value: "8,420", change: "+7%", up: true },
                  { label: "Churn Rate", value: "2.1%", change: "-0.4%", up: false },
                  { label: "NRR", value: "118%", change: "+3%", up: true },
                ].map((k) => (
                  <div key={k.label} style={{ background: "#f8fafc", borderRadius: 12, padding: "16px" }}>
                    <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>{k.label}</div>
                    <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>{k.value}</div>
                    <div style={{ fontSize: 12, color: k.up ? "#22c55e" : "#ef4444", fontWeight: 600 }}>{k.change}</div>
                  </div>
                ))}
              </div>
              {/* Chart area */}
              <div style={{ background: "#f8fafc", borderRadius: 12, padding: "20px", marginBottom: 14, height: 120, position: "relative", overflow: "hidden" }}>
                <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 12 }}>Revenue Trend (12 months)</div>
                <svg width="100%" height="70" viewBox="0 0 800 70" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="rg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,60 C60,55 120,50 180,42 C240,34 300,38 360,28 C420,18 480,22 540,15 C600,8 660,10 720,5 L800,2 L800,70 L0,70Z" fill="url(#rg)" />
                  <path d="M0,60 C60,55 120,50 180,42 C240,34 300,38 360,28 C420,18 480,22 540,15 C600,8 660,10 720,5 L800,2" fill="none" stroke="#3b82f6" strokeWidth="2" />
                </svg>
              </div>
              {/* AI insight chip */}
              <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ fontSize: 16 }}>✦</span>
                <span style={{ fontSize: 13, color: "#1d4ed8", fontWeight: 500 }}>AI Insight: Enterprise segment driving 68% of growth — recommend doubling down on enterprise outbound.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {[
            { icon: "🤖", title: "AI & ML Models", desc: "Revenue forecasting, churn prediction, demand planning. Deployed and maintained." },
            { icon: "📊", title: "BI Dashboards", desc: "Tableau, Power BI, or Looker. Designed for action, not just reporting." },
            { icon: "⚡", title: "Data Engineering", desc: "Clean ETL pipelines. One source of truth. Bye-bye spreadsheet chaos." },
          ].map((s) => (
            <div key={s.title} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "28px" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0f172a", padding: "70px 48px", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: 38, fontWeight: 800, marginBottom: 12 }}>See What KlarData Can Build For You</h2>
        <p style={{ color: "#64748b", fontSize: 16, marginBottom: 32 }}>Free 30-min audit. No pitch. Just clarity on your biggest data opportunity.</p>
        <button style={{ background: "#3b82f6", color: "#fff", border: "none", borderRadius: 10, padding: "16px 36px", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
          Book Free Audit →
        </button>
      </section>

      <footer style={{ background: "#0f172a", padding: "28px 48px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #1e293b", fontSize: 13, color: "#475569" }}>
        <span style={{ color: "#fff", fontWeight: 700 }}>KlarData</span>
        <span>© 2025 KlarData.</span>
        <a href="/variants" style={{ color: "#475569" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
