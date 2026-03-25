"use client";
// V2: Corporate Clean — white/blue enterprise, trust-first

export default function V2() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Inter', sans-serif", color: "#1e293b" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 80px", borderBottom: "1px solid #e2e8f0" }}>
        <span style={{ fontWeight: 700, fontSize: 22 }}>
          <span style={{ color: "#0369a1" }}>Klar</span><span style={{ color: "#1e293b" }}>Data</span>
        </span>
        <div style={{ display: "flex", gap: 32, fontSize: 15, color: "#64748b" }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Case Studies</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>About</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Blog</a>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button style={{ background: "transparent", color: "#0369a1", border: "1px solid #0369a1", borderRadius: 6, padding: "9px 20px", fontSize: 14, cursor: "pointer" }}>Contact</button>
          <button style={{ background: "#0369a1", color: "#fff", border: "none", borderRadius: 6, padding: "9px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #fff 100%)", padding: "100px 80px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", background: "#e0f2fe", color: "#0369a1", borderRadius: 4, padding: "4px 12px", fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 24 }}>
              Data & AI Consulting
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1.5, marginBottom: 20, color: "#0f172a" }}>
              Enterprise-Grade Analytics.
              <br /><span style={{ color: "#0369a1" }}>Startup Speed.</span>
            </h1>
            <p style={{ fontSize: 18, color: "#475569", lineHeight: 1.7, marginBottom: 36 }}>
              KlarData helps B2B companies unlock the value in their data—with AI-powered insights, automated reporting, and executive dashboards that actually get used.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <button style={{ background: "#0369a1", color: "#fff", border: "none", borderRadius: 8, padding: "14px 28px", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>
                Schedule Free Consultation
              </button>
              <button style={{ background: "#fff", color: "#0369a1", border: "1px solid #bae6fd", borderRadius: 8, padding: "14px 28px", fontSize: 16, cursor: "pointer" }}>
                View Case Studies →
              </button>
            </div>
            <div style={{ display: "flex", gap: 24, marginTop: 36, paddingTop: 28, borderTop: "1px solid #e2e8f0" }}>
              {[["47+", "Projects"], ["$2.4M", "Client ROI"], ["4.9★", "Rating"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#0369a1" }}>{n}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Trust card stack */}
          <div style={{ position: "relative" }}>
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 32, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 8 }}>Live Dashboard Preview</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                {[["$1.24M", "Revenue YTD", "#22c55e"], ["34%", "Growth MoM", "#3b82f6"], ["8,420", "Active Users", "#8b5cf6"], ["2.1%", "Churn Rate", "#f59e0b"]].map(([v, l, c]) => (
                  <div key={l} style={{ background: "#f8fafc", borderRadius: 10, padding: "16px 20px" }}>
                    <div style={{ fontSize: 22, fontWeight: 700, color: c }}>{v}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8" }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#f0f9ff", borderRadius: 8, padding: "12px 16px", display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ color: "#0369a1", fontSize: 18 }}>✦</span>
                <span style={{ fontSize: 13, color: "#0369a1" }}>AI insight: Revenue up 34%—driven by enterprise segment.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>Our Services</h2>
          <p style={{ color: "#64748b", fontSize: 16 }}>End-to-end data & AI capabilities for growing companies</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {[
            { icon: "🤖", title: "AI & Machine Learning", desc: "Predictive models for revenue, churn, demand, and operations—deployed and maintained." },
            { icon: "📊", title: "BI & Dashboarding", desc: "Interactive dashboards in Tableau, Power BI, or Looker. Designed for action, not decoration." },
            { icon: "🔄", title: "Data Engineering", desc: "Modern data stacks. Clean pipelines. A single source of truth your whole team can trust." },
          ].map((s) => (
            <div key={s.title} style={{ borderRadius: 12, border: "1px solid #e2e8f0", padding: "32px 28px" }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0369a1", padding: "70px 80px", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 12 }}>Start with a Free Data Audit</h2>
        <p style={{ color: "#bae6fd", fontSize: 16, marginBottom: 32 }}>30 minutes. Zero pressure. Clear next steps for your data strategy.</p>
        <button style={{ background: "#fff", color: "#0369a1", border: "none", borderRadius: 8, padding: "16px 36px", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
          Book Free Audit
        </button>
      </section>

      <footer style={{ padding: "32px 80px", display: "flex", justifyContent: "space-between", background: "#0f172a", color: "#64748b", fontSize: 13 }}>
        <span style={{ color: "#fff", fontWeight: 700 }}><span style={{ color: "#38bdf8" }}>Klar</span>Data</span>
        <span>© 2025 KlarData. All rights reserved.</span>
        <a href="/variants" style={{ color: "#64748b" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
