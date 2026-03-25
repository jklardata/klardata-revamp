"use client";
// V14 — Midnight Blue + Sage Green + Off-White
// Layout: Minimal, breathable, quiet expertise. Large headline, generous whitespace.

const C = { midnight: "#0a1628", sage: "#6b9e7a", offwhite: "#f8f6f2", sageFaint: "#f0f5f1", sageMid: "#4a8a5a", midnightMid: "#1a2d4a" };

export default function V14() {
  return (
    <div style={{ minHeight: "100vh", background: C.offwhite, fontFamily: "'Inter', sans-serif", color: C.midnight }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 80px" }}>
        <span style={{ fontWeight: 300, fontSize: 20, letterSpacing: 3, textTransform: "uppercase", color: C.midnight }}>
          KlarData
        </span>
        <div style={{ display: "flex", gap: 36, fontSize: 13, color: "#8a9a8a", letterSpacing: 0.5 }}>
          {["Services", "Work", "About", "Contact"].map(i => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
        </div>
        <button style={{ background: "transparent", color: C.midnight, border: `1.5px solid ${C.midnight}`, borderRadius: 6, padding: "10px 22px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
          Free Audit
        </button>
      </nav>

      {/* Hero — expansive, quiet */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 80px 100px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <div style={{ width: 40, height: 2, background: C.sage }} />
          <span style={{ fontSize: 12, color: C.sage, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 600 }}>AI + BI Consulting</span>
        </div>
        <h1 style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.06, letterSpacing: -2.5, marginBottom: 36, color: C.midnight }}>
          Data that earns<br />your team's trust<br />every single day.
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          <p style={{ fontSize: 18, color: "#5a6e6a", lineHeight: 1.8, margin: 0 }}>
            KlarData builds AI-powered analytics systems and BI dashboards that give leadership teams the clarity to make confident decisions—without guesswork.
          </p>
          <div>
            <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <button style={{ background: C.midnight, color: C.offwhite, border: "none", borderRadius: 8, padding: "14px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                Book Free Audit →
              </button>
              <button style={{ background: "transparent", color: C.midnight, border: `1.5px solid #c8cec8`, borderRadius: 8, padding: "14px 28px", fontSize: 15, cursor: "pointer" }}>
                Our Work
              </button>
            </div>
            <p style={{ fontSize: 13, color: "#8a9a8a" }}>47+ projects · 3.2× avg ROI · 100% retention</p>
          </div>
        </div>
      </section>

      {/* Sage divider with stats */}
      <section style={{ background: C.sageFaint, borderTop: "1px solid #d4e4d8", borderBottom: "1px solid #d4e4d8", padding: "56px 80px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
          {[["47+", "Projects"], ["3.2×", "ROI"], ["90 days", "First insight"], ["100%", "Retention"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 44, fontWeight: 800, color: C.sage, letterSpacing: -1 }}>{n}</div>
              <div style={{ fontSize: 12, color: "#7a9a7a", marginTop: 6, textTransform: "uppercase", letterSpacing: 1.5 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services — large, airy */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 80px" }}>
        {[
          { n: "01", title: "AI & Predictive Analytics", desc: "We build and deploy custom machine learning models—revenue forecasting, churn prediction, demand planning—integrated with your stack and improved over time." },
          { n: "02", title: "Business Intelligence & Dashboards", desc: "Executive and operational dashboards in Tableau, Power BI, or Looker. Built not just to look good, but to drive decisions your team makes every week." },
          { n: "03", title: "Data Engineering", desc: "Automated pipelines and clean data warehouses. A single, reliable source of truth that eliminates data arguments and manual spreadsheet work forever." },
        ].map((s, i) => (
          <div key={s.title} style={{ display: "grid", gridTemplateColumns: "80px 1fr 60px", gap: 32, alignItems: "start", paddingBottom: i < 2 ? 52 : 0, marginBottom: i < 2 ? 52 : 0, borderBottom: i < 2 ? `1px solid #dde8de` : "none" }}>
            <span style={{ fontSize: 12, color: C.sage, letterSpacing: 2, fontWeight: 600, paddingTop: 6 }}>{s.n}</span>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: C.midnight, marginBottom: 14 }}>{s.title}</h3>
              <p style={{ fontSize: 15, color: "#5a6e6a", lineHeight: 1.8 }}>{s.desc}</p>
            </div>
            <a href="#" style={{ color: C.sage, fontSize: 18, paddingTop: 6, textDecoration: "none" }}>→</a>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: C.midnight, padding: "80px 80px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 28, height: 2, background: C.sage }} />
              <span style={{ fontSize: 11, color: C.sage, letterSpacing: 2.5, textTransform: "uppercase" }}>Get Started</span>
            </div>
            <h2 style={{ color: C.offwhite, fontSize: 44, fontWeight: 800, lineHeight: 1.15 }}>
              Let's find your biggest data opportunity.
            </h2>
          </div>
          <div>
            <p style={{ color: "#6a8a7a", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              Book a free 30-minute data audit. We'll identify where data is costing you time or money, and show you exactly what we'd build to fix it.
            </p>
            <button style={{ background: C.sage, color: C.offwhite, border: "none", borderRadius: 8, padding: "16px 36px", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
              Book Free Audit →
            </button>
          </div>
        </div>
      </section>

      <footer style={{ background: C.midnight, padding: "28px 80px", display: "flex", justifyContent: "space-between", borderTop: `1px solid ${C.midnightMid}`, fontSize: 13, color: "#4a6060" }}>
        <span style={{ color: C.offwhite, fontWeight: 300, letterSpacing: 2.5, textTransform: "uppercase" }}>KlarData</span>
        <span>© 2025 KlarData.</span>
        <a href="/variants" style={{ color: "#4a6060" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
