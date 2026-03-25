"use client";
// V15 — Charcoal + Indigo + Warm White
// Layout: Bold left-accent nav, stepped proof process, feature comparison

const C = { charcoal: "#1c1c2e", indigo: "#4f46e5", warmwhite: "#fefefe", indigoLight: "#eef2ff", indigoMid: "#6366f1", charcoalMid: "#2d2d45", indigoFaint: "#f5f3ff" };

export default function V15() {
  return (
    <div style={{ minHeight: "100vh", background: C.warmwhite, fontFamily: "'Inter', sans-serif", color: C.charcoal }}>
      {/* Nav with left accent bar */}
      <nav style={{ display: "flex", borderLeft: `4px solid ${C.indigo}`, margin: "0 0 0 0" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 68px 20px 64px", borderBottom: "1px solid #e8e8f4" }}>
          <span style={{ fontWeight: 900, fontSize: 22, color: C.charcoal, letterSpacing: -0.5 }}>
            Klar<span style={{ color: C.indigo }}>Data</span>
          </span>
          <div style={{ display: "flex", gap: 32, fontSize: 14, color: "#6b6b9a" }}>
            {["Services", "Work", "About", "Blog"].map(i => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
          </div>
          <button style={{ background: C.indigo, color: C.warmwhite, border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Free Audit
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 68px 70px", display: "grid", gridTemplateColumns: "3fr 2fr", gap: 80 }}>
        <div>
          <div style={{ background: C.indigoFaint, color: C.indigo, display: "inline-block", borderRadius: 6, padding: "4px 14px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 28 }}>
            AI + BI Consulting · Trusted by 47+ Teams
          </div>
          <h1 style={{ fontSize: 62, fontWeight: 900, lineHeight: 1.06, letterSpacing: -2.5, marginBottom: 24, color: C.charcoal }}>
            Smart analytics.<br />Trustworthy data.<br /><span style={{ color: C.indigo }}>Faster growth.</span>
          </h1>
          <p style={{ fontSize: 18, color: "#5a5a7a", lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
            We build AI-powered analytics systems and executive dashboards that give B2B companies the clarity to act on their data—with confidence.
          </p>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <button style={{ background: C.charcoal, color: C.warmwhite, border: "none", borderRadius: 10, padding: "15px 32px", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
              Book Free Audit →
            </button>
            <button style={{ background: C.indigoFaint, color: C.indigo, border: `1.5px solid #c7d2fe`, borderRadius: 10, padding: "15px 32px", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>
              See Case Studies
            </button>
          </div>
        </div>
        {/* Right: mini proof list */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 0 }}>
          {[
            { n: "47+", d: "Projects delivered across SaaS, ecommerce, and enterprise" },
            { n: "3.2×", d: "Average client ROI measured in year one" },
            { n: "90d", d: "Average time from kickoff to first live dashboard" },
            { n: "100%", d: "Client retention since the day we opened" },
          ].map((s, i) => (
            <div key={s.n} style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "20px 0", borderBottom: i < 3 ? "1px solid #e8e8f4" : "none" }}>
              <span style={{ fontSize: 28, fontWeight: 900, color: C.indigo, minWidth: 60 }}>{s.n}</span>
              <span style={{ fontSize: 13, color: "#6b6b9a", lineHeight: 1.6, paddingTop: 4 }}>{s.d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process steps */}
      <section style={{ background: C.indigoFaint, borderTop: "1px solid #c7d2fe", borderBottom: "1px solid #c7d2fe", padding: "64px 68px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 44, color: C.charcoal }}>How it works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {[
              { step: "01", title: "Free Audit", desc: "30-min call to identify your biggest data opportunity." },
              { step: "02", title: "Strategy", desc: "We map out the exact stack, tools, and dashboards you need." },
              { step: "03", title: "Build", desc: "Our team builds, tests, and deploys your analytics system." },
              { step: "04", title: "Ongoing", desc: "We monitor, maintain, and improve as your business grows." },
            ].map((s, i) => (
              <div key={s.title} style={{ position: "relative" }}>
                {i < 3 && <div style={{ position: "absolute", top: 20, left: "100%", width: "100%", height: 1, background: "#c7d2fe", zIndex: 0 }} />}
                <div style={{ width: 40, height: 40, background: C.indigo, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: C.warmwhite, marginBottom: 16, position: "relative", zIndex: 1 }}>
                  {s.step}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: C.charcoal }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#6b6b9a", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 68px" }}>
        <h2 style={{ fontSize: 34, fontWeight: 800, marginBottom: 40, color: C.charcoal }}>Our services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {[
            { icon: "🤖", title: "AI & Predictive Analytics", desc: "ML models for revenue, churn, and demand. Built and maintained." },
            { icon: "📊", title: "BI Dashboard Design", desc: "Tableau, Power BI, or Looker. Designed for action." },
            { icon: "⚡", title: "Data Engineering", desc: "Automated ETL. Clean warehouses. One source of truth." },
          ].map(s => (
            <div key={s.title} style={{ border: `1.5px solid #e8e8f4`, borderRadius: 14, padding: "28px 24px", background: C.warmwhite }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
              <div style={{ width: 28, height: 3, background: C.indigo, borderRadius: 2, marginBottom: 14 }} />
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#6b6b9a", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.charcoal, padding: "80px 68px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <h2 style={{ color: C.warmwhite, fontSize: 40, fontWeight: 800, lineHeight: 1.2 }}>
          Start with a free data audit. No strings attached.
        </h2>
        <div>
          <p style={{ color: "#8a8aaa", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            30 minutes. We'll identify your top data opportunity and show you exactly what we'd build. No pitch, no pressure.
          </p>
          <button style={{ background: C.indigo, color: C.warmwhite, border: "none", borderRadius: 10, padding: "16px 36px", fontSize: 17, fontWeight: 700, cursor: "pointer" }}>
            Book Free Audit →
          </button>
        </div>
      </section>

      <footer style={{ background: C.charcoal, padding: "28px 68px", display: "flex", justifyContent: "space-between", borderTop: `1px solid ${C.charcoalMid}`, fontSize: 13, color: "#5a5a7a" }}>
        <span style={{ color: C.warmwhite, fontWeight: 800 }}>KlarData</span>
        <span>© 2025 KlarData.</span>
        <a href="/variants" style={{ color: "#5a5a7a" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
