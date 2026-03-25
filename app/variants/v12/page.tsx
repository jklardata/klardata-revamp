"use client";
// V12 — Slate + Gold + Cream
// Layout: Asymmetric hero, horizontal service strips, testimonial block

const C = { slate: "#1e293b", gold: "#d97706", cream: "#fffbf0", slateLight: "#334155", goldLight: "#fef3c7", goldFaint: "#fffbeb" };

export default function V12() {
  return (
    <div style={{ minHeight: "100vh", background: C.cream, fontFamily: "'Inter', sans-serif", color: C.slate }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 64px", background: C.cream, borderBottom: "1px solid #e8dfc8" }}>
        <span style={{ fontWeight: 900, fontSize: 21, letterSpacing: -0.5 }}>
          Klar<span style={{ color: C.gold }}>Data</span>
        </span>
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: "#64748b" }}>
          {["Services", "Work", "About", "Blog"].map(i => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
        </div>
        <button style={{ background: C.gold, color: C.cream, border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          Free Audit →
        </button>
      </nav>

      {/* Hero — asymmetric */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 64px", display: "grid", gridTemplateColumns: "3fr 2fr", gap: 80, alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-block", background: C.goldLight, color: C.gold, border: `1px solid #fde68a`, borderRadius: 6, padding: "4px 14px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 24 }}>
            AI + BI Consulting
          </div>
          <h1 style={{ fontSize: 66, fontWeight: 900, lineHeight: 1.05, letterSpacing: -2.5, marginBottom: 24, color: C.slate }}>
            Intelligent decisions<br />start with <span style={{ color: C.gold }}>clear data.</span>
          </h1>
          <p style={{ fontSize: 18, color: "#64748b", lineHeight: 1.75, marginBottom: 40, maxWidth: 500 }}>
            We build AI-powered analytics and dashboards that give your leadership team the clarity to act fast and grow confidently.
          </p>
          <div style={{ display: "flex", gap: 14 }}>
            <button style={{ background: C.slate, color: C.cream, border: "none", borderRadius: 8, padding: "14px 30px", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
              Book Free Audit
            </button>
            <button style={{ background: "transparent", color: C.slate, border: `1.5px solid #cbd5e1`, borderRadius: 8, padding: "14px 30px", fontSize: 16, cursor: "pointer" }}>
              See Our Work →
            </button>
          </div>
        </div>
        {/* Right: credentials card */}
        <div style={{ background: C.slate, borderRadius: 20, padding: "36px 32px" }}>
          <div style={{ fontSize: 11, color: "#64748b", letterSpacing: 2, textTransform: "uppercase", marginBottom: 28 }}>Why teams choose us</div>
          {[
            ["47+", "Projects delivered across industries"],
            ["3.2×", "Average ROI in first 12 months"],
            ["90d", "Average time to first live dashboard"],
            ["100%", "Client retention since founding"],
          ].map(([n, l]) => (
            <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 20, marginBottom: 20, borderBottom: "1px solid #2d3f55" }}>
              <span style={{ fontSize: 30, fontWeight: 900, color: C.gold }}>{n}</span>
              <span style={{ fontSize: 13, color: "#94a3b8", maxWidth: 160, textAlign: "right", lineHeight: 1.4 }}>{l}</span>
            </div>
          )).slice(0, 3)}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontSize: 30, fontWeight: 900, color: C.gold }}>100%</span>
            <span style={{ fontSize: 13, color: "#94a3b8", maxWidth: 160, textAlign: "right", lineHeight: 1.4 }}>Client retention since founding</span>
          </div>
        </div>
      </section>

      {/* Service strips */}
      <section style={{ borderTop: "1px solid #e8dfc8", borderBottom: "1px solid #e8dfc8" }}>
        {[
          { num: "01", title: "AI & Predictive Analytics", desc: "Custom ML models for revenue forecasting, churn prediction, and demand planning. Deployed, monitored, and improved." },
          { num: "02", title: "BI Dashboard Design", desc: "Executive and operational dashboards in Tableau, Power BI, or Looker. Built for decisions, not just reporting." },
          { num: "03", title: "Data Engineering", desc: "Automated ETL pipelines. Clean data warehouses. One reliable source of truth your whole team can trust." },
        ].map((s, i) => (
          <div key={s.title} style={{ display: "flex", alignItems: "center", gap: 60, padding: "36px 64px", borderBottom: i < 2 ? "1px solid #e8dfc8" : "none", maxWidth: 1200, margin: "0 auto" }}>
            <span style={{ fontSize: 11, color: C.gold, letterSpacing: 3, fontWeight: 700, minWidth: 28 }}>{s.num}</span>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: C.slate, minWidth: 280 }}>{s.title}</h3>
            <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.7, flex: 1 }}>{s.desc}</p>
            <a href="#" style={{ color: C.gold, fontSize: 14, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>Learn more →</a>
          </div>
        ))}
      </section>

      {/* Testimonial */}
      <section style={{ background: C.goldFaint, padding: "70px 64px", textAlign: "center" }}>
        <blockquote style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontSize: 24, lineHeight: 1.6, color: C.slate, fontStyle: "italic", marginBottom: 24 }}>
            "KlarData gave us visibility we never had before. Within 90 days we had a dashboard our entire leadership team checks every morning."
          </p>
          <footer style={{ fontSize: 13, color: "#64748b", letterSpacing: 1, textTransform: "uppercase" }}>
            — Chief Revenue Officer, B2B SaaS Company
          </footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section style={{ background: C.slate, padding: "80px 64px", textAlign: "center" }}>
        <h2 style={{ color: C.cream, fontSize: 42, fontWeight: 800, marginBottom: 14 }}>Start with a free data audit</h2>
        <p style={{ color: "#94a3b8", fontSize: 17, marginBottom: 36 }}>30 minutes. No sales pitch. Just clarity on your biggest data opportunity.</p>
        <button style={{ background: C.gold, color: C.cream, border: "none", borderRadius: 10, padding: "16px 40px", fontSize: 17, fontWeight: 700, cursor: "pointer" }}>
          Book Free Audit →
        </button>
      </section>

      <footer style={{ background: C.slate, padding: "28px 64px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #2d3f55", fontSize: 13, color: "#64748b" }}>
        <span style={{ color: C.cream, fontWeight: 800 }}>KlarData</span>
        <span>© 2025 KlarData.</span>
        <a href="/variants" style={{ color: "#64748b" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
