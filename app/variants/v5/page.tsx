"use client";
// V5: Editorial Magazine — typography-forward, sophisticated

export default function V5() {
  return (
    <div style={{ minHeight: "100vh", background: "#fafaf8", fontFamily: "Georgia, 'Times New Roman', serif", color: "#111" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #111", padding: "0 60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1200, margin: "0 auto", height: 64 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: 20, letterSpacing: 2, textTransform: "uppercase" }}>KlarData</span>
          <div style={{ display: "flex", gap: 36, fontSize: 13, fontFamily: "'Inter', sans-serif", letterSpacing: 1 }}>
            {["Services", "Work", "Insights", "Contact"].map((i) => (
              <a key={i} href="#" style={{ color: "#111", textDecoration: "none", textTransform: "uppercase" }}>{i}</a>
            ))}
          </div>
          <button style={{ fontFamily: "'Inter', sans-serif", background: "#111", color: "#fff", border: "none", padding: "9px 22px", fontSize: 12, fontWeight: 600, cursor: "pointer", letterSpacing: 1, textTransform: "uppercase" }}>
            Free Audit
          </button>
        </div>
      </nav>

      {/* Hero — editorial layout */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 60px", borderBottom: "1px solid #ddd" }}>
        <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 80 }}>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#888", marginBottom: 28 }}>
              AI + Business Intelligence Consulting
            </p>
            <h1 style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700, letterSpacing: -2, marginBottom: 32 }}>
              The Data Firm<br />Built for the<br /><em style={{ color: "#555" }}>AI Era.</em>
            </h1>
            <p style={{ fontSize: 20, lineHeight: 1.75, color: "#444", maxWidth: 520, marginBottom: 40, fontStyle: "italic" }}>
              We help B2B companies move from gut-feel decisions to data-driven clarity—with AI-powered analytics, automated reporting, and dashboards that actually get used.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <button style={{ fontFamily: "'Inter', sans-serif", background: "#111", color: "#fff", border: "none", padding: "14px 30px", fontSize: 14, fontWeight: 600, cursor: "pointer", letterSpacing: 0.5 }}>
                Book Free Consultation
              </button>
              <a href="#" style={{ fontFamily: "'Inter', sans-serif", color: "#111", fontSize: 14, textDecoration: "underline", textUnderlineOffset: 4 }}>View Our Work →</a>
            </div>
          </div>
          <div style={{ paddingTop: 16 }}>
            <div style={{ borderTop: "3px double #111", paddingTop: 24, marginBottom: 40 }}>
              <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>47+</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "#888" }}>Data Projects Delivered</div>
            </div>
            <div style={{ borderTop: "1px solid #ddd", paddingTop: 24, marginBottom: 40 }}>
              <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>3.2×</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "#888" }}>Average Client ROI</div>
            </div>
            <div style={{ borderTop: "1px solid #ddd", paddingTop: 24 }}>
              <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>90d</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "#888" }}>To First Live Dashboard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services editorial */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid #111", paddingBottom: 20, marginBottom: 48 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700 }}>Our Practice Areas</h2>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "#888" }}>Three core services</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
          {[
            { num: "I", title: "AI & Predictive Modeling", desc: "We build and deploy custom machine learning models—revenue forecasting, churn prediction, demand planning—that integrate with your existing stack and get better over time." },
            { num: "II", title: "Business Intelligence", desc: "Executive and operational dashboards built in Tableau, Power BI, or Looker. Designed not just to look good, but to actually drive decisions every week." },
            { num: "III", title: "Data Engineering", desc: "Modern, maintainable data pipelines that give your team a single source of truth. No more CSV exports, no more data arguments, no more wasted Monday mornings." },
          ].map((s, i) => (
            <div key={s.title} style={{ padding: "0 40px 0 0", marginRight: i < 2 ? 40 : 0, borderRight: i < 2 ? "1px solid #ddd" : "none" }}>
              <div style={{ fontSize: 13, color: "#888", fontFamily: "'Inter', sans-serif", letterSpacing: 2, marginBottom: 16 }}>{s.num}</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>{s.title}</h3>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pull quote CTA */}
      <section style={{ background: "#111", padding: "80px 60px", textAlign: "center" }}>
        <p style={{ fontSize: 13, color: "#888", fontFamily: "'Inter', sans-serif", letterSpacing: 3, textTransform: "uppercase", marginBottom: 28 }}>Get Started</p>
        <h2 style={{ fontSize: 52, color: "#fff", fontWeight: 700, lineHeight: 1.15, maxWidth: 700, margin: "0 auto 40px" }}>
          "The best time to fix your data was yesterday. The second best is now."
        </h2>
        <button style={{ fontFamily: "'Inter', sans-serif", background: "#fff", color: "#111", border: "none", padding: "16px 40px", fontSize: 15, fontWeight: 700, cursor: "pointer", letterSpacing: 0.5 }}>
          Book a Free Data Audit →
        </button>
      </section>

      <footer style={{ padding: "32px 60px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #ddd", fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#888" }}>
        <span style={{ fontWeight: 900, color: "#111", letterSpacing: 2, textTransform: "uppercase" }}>KlarData</span>
        <span>© 2025 KlarData. All rights reserved.</span>
        <a href="/variants" style={{ color: "#888" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
