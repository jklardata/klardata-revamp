"use client";
// V19 — Steel Blue + Turquoise + White
// Layout: Clean tech-consulting feel. Bold hero with inline metric chips, full-bleed section alternation

const C = { steel: "#1e3a5f", turquoise: "#06b6d4", white: "#ffffff", steelFaint: "#f0f4fa", steelLight: "#c5d5e8", turquoiseFaint: "#ecfeff", turquoiseLight: "#a5f3fc", steelMid: "#2d527a" };

export default function V19() {
  return (
    <div style={{ minHeight: "100vh", background: C.white, fontFamily: "'Inter', sans-serif", color: C.steel }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 72px", borderBottom: "1px solid #e2ecf6" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", border: `2.5px solid ${C.turquoise}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontWeight: 900, fontSize: 13, color: C.steel }}>KD</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: 20, color: C.steel }}>KlarData</span>
        </div>
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: "#5a7a9a" }}>
          {["Services", "Case Studies", "About", "Blog"].map(i => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
        </div>
        <button style={{ background: C.turquoise, color: C.white, border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          Free Audit →
        </button>
      </nav>

      {/* Hero */}
      <section style={{ background: `linear-gradient(160deg, ${C.steel} 0%, ${C.steelMid} 100%)`, padding: "96px 72px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
            {["AI Analytics", "BI Dashboards", "Data Engineering", "Trusted by 47+ Companies"].map(tag => (
              <span key={tag} style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 600, border: "1px solid rgba(255,255,255,0.15)" }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontSize: 66, fontWeight: 900, lineHeight: 1.06, letterSpacing: -2.5, color: C.white, marginBottom: 24, maxWidth: 800 }}>
            The data partner that makes<br />your team look <span style={{ color: C.turquoise }}>brilliant.</span>
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 72, alignItems: "center" }}>
            <p style={{ fontSize: 19, color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>
              KlarData builds AI-powered analytics and live dashboards that transform complex data into confident decisions—trusted by leadership teams at 47+ B2B companies.
            </p>
            <div>
              <div style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                <button style={{ background: C.turquoise, color: C.white, border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
                  Book Free Audit
                </button>
                <button style={{ background: "transparent", color: "rgba(255,255,255,0.7)", border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "14px 28px", fontSize: 16, cursor: "pointer" }}>
                  Our Work
                </button>
              </div>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>No commitment required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section style={{ background: C.turquoiseFaint, borderTop: "1px solid #a5f3fc", borderBottom: "1px solid #a5f3fc", padding: "40px 72px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-around" }}>
          {[["47+", "Projects Delivered"], ["3.2×", "Average Client ROI"], ["90 Days", "To First Dashboard"], ["100%", "Client Retention"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 36, fontWeight: 900, color: C.steel }}>{n}</div>
              <div style={{ fontSize: 13, color: "#0e7490", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services — alternating */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 72px" }}>
        <h2 style={{ fontSize: 34, fontWeight: 800, color: C.steel, marginBottom: 48 }}>Core services</h2>
        {[
          { icon: "🤖", title: "AI & Predictive Analytics", desc: "Custom machine learning models for revenue forecasting, churn prediction, and demand planning. Deployed, monitored, and continuously improved as your business evolves.", reverse: false },
          { icon: "📊", title: "BI Dashboard Design", desc: "Executive and operational dashboards in Tableau, Power BI, or Looker. We design for the decisions your team needs to make weekly, not just for board presentations.", reverse: true },
          { icon: "⚡", title: "Data Engineering", desc: "Modern data stacks with clean ETL pipelines and a reliable data warehouse. One source of truth—no more data arguments, no more manual spreadsheet exports.", reverse: false },
        ].map((s) => (
          <div key={s.title} style={{ display: "grid", gridTemplateColumns: s.reverse ? "1fr 1fr" : "1fr 1fr", gap: 72, alignItems: "center", marginBottom: 60, paddingBottom: 60, borderBottom: "1px solid #e2ecf6" }}>
            {s.reverse ? (
              <>
                <div style={{ background: C.turquoiseFaint, border: `1.5px solid ${C.turquoiseLight}`, borderRadius: 20, padding: "48px", textAlign: "center", fontSize: 64 }}>{s.icon}</div>
                <div>
                  <h3 style={{ fontSize: 26, fontWeight: 800, color: C.steel, marginBottom: 16 }}>{s.title}</h3>
                  <p style={{ fontSize: 16, color: "#5a7a9a", lineHeight: 1.8 }}>{s.desc}</p>
                  <a href="#" style={{ display: "inline-block", marginTop: 24, color: C.turquoise, fontWeight: 700, textDecoration: "none", fontSize: 15 }}>Learn more →</a>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 style={{ fontSize: 26, fontWeight: 800, color: C.steel, marginBottom: 16 }}>{s.title}</h3>
                  <p style={{ fontSize: 16, color: "#5a7a9a", lineHeight: 1.8 }}>{s.desc}</p>
                  <a href="#" style={{ display: "inline-block", marginTop: 24, color: C.turquoise, fontWeight: 700, textDecoration: "none", fontSize: 15 }}>Learn more →</a>
                </div>
                <div style={{ background: C.steelFaint, border: `1.5px solid ${C.steelLight}`, borderRadius: 20, padding: "48px", textAlign: "center", fontSize: 64 }}>{s.icon}</div>
              </>
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: C.steel, padding: "80px 72px", textAlign: "center" }}>
        <h2 style={{ color: C.white, fontSize: 42, fontWeight: 800, marginBottom: 14 }}>Start with a free data audit.</h2>
        <p style={{ color: "#5a7a9a", fontSize: 17, marginBottom: 36 }}>30 minutes. Your biggest data opportunity, mapped out clearly.</p>
        <button style={{ background: C.turquoise, color: C.white, border: "none", borderRadius: 10, padding: "16px 44px", fontSize: 17, fontWeight: 700, cursor: "pointer" }}>
          Book Free Audit →
        </button>
      </section>

      <footer style={{ background: C.steel, padding: "28px 72px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #2d527a", fontSize: 13, color: "#4a6a8a" }}>
        <span style={{ color: C.white, fontWeight: 800 }}>KlarData</span>
        <span>© 2025 KlarData.</span>
        <a href="/variants" style={{ color: "#4a6a8a" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
