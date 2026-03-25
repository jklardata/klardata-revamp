"use client";
// V17 — Royal Blue + Coral + White
// Layout: Energetic yet trustworthy. Pill badge nav, large proof numbers, alternating section rhythm

const C = { royal: "#1e40af", coral: "#ef4444", white: "#ffffff", royalFaint: "#eff6ff", royalLight: "#bfdbfe", coralFaint: "#fff5f5", coralLight: "#fecaca", royalMid: "#1d4ed8" };

export default function V17() {
  return (
    <div style={{ minHeight: "100vh", background: C.white, fontFamily: "'Inter', sans-serif", color: "#0f172a" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 68px" }}>
        <span style={{ fontWeight: 900, fontSize: 22, color: C.royal, letterSpacing: -0.5 }}>KlarData</span>
        <div style={{ display: "flex", gap: 6 }}>
          {["Services", "Work", "About", "Blog"].map(i => (
            <a key={i} href="#" style={{ color: "#64748b", textDecoration: "none", padding: "7px 16px", fontSize: 14, borderRadius: 20, display: "inline-block" }}>{i}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button style={{ background: C.royalFaint, color: C.royal, border: `1.5px solid ${C.royalLight}`, borderRadius: 20, padding: "9px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
            Sign in
          </button>
          <button style={{ background: C.royal, color: C.white, border: "none", borderRadius: 20, padding: "9px 22px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Free Audit →
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 68px 70px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "5fr 4fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.coralFaint, border: `1px solid ${C.coralLight}`, borderRadius: 20, padding: "6px 16px", marginBottom: 26 }}>
              <span style={{ color: C.coral, fontSize: 13, fontWeight: 700 }}>47+ companies trust KlarData with their data</span>
            </div>
            <h1 style={{ fontSize: 60, fontWeight: 900, lineHeight: 1.07, letterSpacing: -2.5, marginBottom: 22, color: "#0f172a" }}>
              The analytics partner<br />built for <span style={{ color: C.royal }}>confident</span><br /><span style={{ color: C.coral }}>decisions.</span>
            </h1>
            <p style={{ fontSize: 18, color: "#475569", lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
              We combine AI and business intelligence to give your team clean data, accurate forecasts, and dashboards that make every Monday meeting sharper.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <button style={{ background: C.royal, color: C.white, border: "none", borderRadius: 10, padding: "15px 30px", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
                Book Free Audit →
              </button>
              <button style={{ background: C.white, color: "#0f172a", border: "1.5px solid #e2e8f0", borderRadius: 10, padding: "15px 30px", fontSize: 16, cursor: "pointer" }}>
                See Case Studies
              </button>
            </div>
          </div>
          {/* Right: alternating coral/blue cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { val: "3.2×", lbl: "Average ROI delivered to clients in year one", bg: C.royal, text: C.white },
              { val: "90d", lbl: "Average time from kickoff to first live dashboard", bg: C.coralFaint, text: "#0f172a", border: C.coralLight },
              { val: "100%", lbl: "Client retention — every client, every year", bg: C.royalFaint, text: "#0f172a", border: C.royalLight },
            ].map(s => (
              <div key={s.val} style={{ background: s.bg, border: s.border ? `1.5px solid ${s.border}` : "none", borderRadius: 14, padding: "22px 24px", display: "flex", gap: 20, alignItems: "center" }}>
                <span style={{ fontSize: 36, fontWeight: 900, color: s.text === C.white ? C.white : C.royal, minWidth: 72 }}>{s.val}</span>
                <span style={{ fontSize: 14, color: s.text === C.white ? "rgba(255,255,255,0.75)" : "#64748b", lineHeight: 1.5 }}>{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue services strip */}
      <section style={{ background: C.royalFaint, borderTop: "1px solid #bfdbfe", borderBottom: "1px solid #bfdbfe", padding: "56px 68px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: C.royal }}>Our services</h2>
            <a href="#" style={{ color: C.royal, fontSize: 14, fontWeight: 600 }}>View all →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
            {[
              { icon: "🤖", title: "AI Analytics", desc: "Revenue forecasting, churn prediction, demand models. Built, deployed, and maintained." },
              { icon: "📊", title: "BI Dashboards", desc: "Tableau, Power BI, or Looker dashboards. Built for action, not just reporting." },
              { icon: "⚡", title: "Data Engineering", desc: "Clean pipelines, automated ETL, and one reliable source of truth for every team." },
            ].map(s => (
              <div key={s.title} style={{ background: C.white, border: "1.5px solid #dbeafe", borderRadius: 14, padding: "26px 22px" }}>
                <div style={{ fontSize: 26, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coral testimonial */}
      <section style={{ background: C.coral, padding: "64px 68px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 26, color: C.white, fontStyle: "italic", lineHeight: 1.6, marginBottom: 20 }}>
            "KlarData didn't just deliver dashboards—they changed the way our team makes decisions. Revenue up 34% in year one."
          </p>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, letterSpacing: 1, textTransform: "uppercase" }}>VP Revenue, Enterprise SaaS</span>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 68px", textAlign: "center" }}>
        <h2 style={{ fontSize: 42, fontWeight: 800, color: "#0f172a", marginBottom: 14 }}>Start your free data audit today.</h2>
        <p style={{ fontSize: 17, color: "#64748b", marginBottom: 36 }}>30 minutes. Clear next steps. No pressure.</p>
        <button style={{ background: C.royal, color: C.white, border: "none", borderRadius: 20, padding: "16px 40px", fontSize: 17, fontWeight: 700, cursor: "pointer" }}>
          Book Free Audit →
        </button>
      </section>

      <footer style={{ padding: "28px 68px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #f1f5f9", fontSize: 13, color: "#94a3b8" }}>
        <span style={{ fontWeight: 900, color: C.royal, fontSize: 16 }}>KlarData</span>
        <span>© 2025 KlarData.</span>
        <a href="/variants" style={{ color: "#94a3b8" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
