"use client";
// V13 — Deep Teal + Sky Blue + White
// Layout: Bold header stripe, feature icons in grid, clean proof section

const C = { teal: "#0d4f4f", sky: "#38bdf8", white: "#ffffff", tealMid: "#0f6b6b", tealFaint: "#f0fafa", skyFaint: "#f0f9ff", skyLight: "#bae6fd" };

export default function V13() {
  return (
    <div style={{ minHeight: "100vh", background: C.white, fontFamily: "'Inter', sans-serif", color: C.teal }}>
      {/* Header stripe */}
      <div style={{ background: C.teal, padding: "10px 72px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: C.skyLight, fontSize: 12, letterSpacing: 1 }}>AI + Business Intelligence Consulting</span>
        <span style={{ color: C.skyLight, fontSize: 12 }}>hello@klardata.com · Schedule a call</span>
      </div>

      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 72px", borderBottom: "1px solid #e0f2f2" }}>
        <span style={{ fontWeight: 900, fontSize: 22, color: C.teal, letterSpacing: -0.5 }}>KlarData</span>
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: "#5a8a8a" }}>
          {["Services", "Work", "About", "Blog"].map(i => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
        </div>
        <button style={{ background: C.sky, color: C.teal, border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
          Free Audit →
        </button>
      </nav>

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${C.teal} 0%, ${C.tealMid} 100%)`, padding: "100px 72px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: 60, fontWeight: 900, lineHeight: 1.07, letterSpacing: -2, color: C.white, marginBottom: 22 }}>
              The data partner<br />your team can<br /><span style={{ color: C.sky }}>actually trust.</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 40, maxWidth: 440 }}>
              We combine AI and business intelligence to give your team clean data, accurate forecasts, and dashboards that get opened every morning.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <button style={{ background: C.sky, color: C.teal, border: "none", borderRadius: 10, padding: "14px 30px", fontSize: 16, fontWeight: 800, cursor: "pointer" }}>
                Book Free Audit
              </button>
              <button style={{ background: "transparent", color: C.white, border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: 10, padding: "14px 30px", fontSize: 16, cursor: "pointer" }}>
                See Case Studies
              </button>
            </div>
          </div>
          {/* Right: quick facts */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { val: "47+", lbl: "Projects", icon: "◈" },
              { val: "3.2×", lbl: "Avg ROI", icon: "↑" },
              { val: "90d", lbl: "Time to Value", icon: "⚡" },
              { val: "100%", lbl: "Retention", icon: "✓" },
            ].map(s => (
              <div key={s.lbl} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: "24px 20px" }}>
                <div style={{ fontSize: 22, color: C.sky, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontSize: 30, fontWeight: 800, color: C.white }}>{s.val}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services icon grid */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 72px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 52 }}>
          <div>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: C.teal, marginBottom: 8 }}>What we build for you</h2>
            <p style={{ color: "#5a8a8a", fontSize: 16 }}>End-to-end data & AI capabilities</p>
          </div>
          <a href="#" style={{ color: C.sky, fontWeight: 700, fontSize: 14, textDecoration: "none", border: `1.5px solid ${C.sky}`, borderRadius: 8, padding: "10px 20px" }}>
            All services →
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { icon: "🤖", title: "AI & Machine Learning", desc: "Revenue forecasting, churn prediction, demand models—deployed and maintained." },
            { icon: "📊", title: "BI & Dashboarding", desc: "Tableau, Power BI, or Looker dashboards designed for daily decision-making." },
            { icon: "🔄", title: "Data Engineering", desc: "Clean ETL pipelines and a unified data warehouse your whole team trusts." },
            { icon: "📈", title: "Revenue Analytics", desc: "ARR, NRR, CAC, LTV—modeled and visualized for your leadership team." },
            { icon: "🎯", title: "Churn Intelligence", desc: "Identify at-risk customers before they churn with ML-powered early warnings." },
            { icon: "💬", title: "Strategic Advisory", desc: "Data strategy, tool selection, and roadmap planning from senior practitioners." },
          ].map(s => (
            <div key={s.title} style={{ background: C.tealFaint, border: `1.5px solid #c0e0e0`, borderRadius: 14, padding: "24px 22px" }}>
              <div style={{ fontSize: 26, marginBottom: 12 }}>{s.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: C.teal, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: "#4a7a7a", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ background: C.skyFaint, borderTop: "1px solid #bae6fd", borderBottom: "1px solid #bae6fd", padding: "40px 72px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 16, fontWeight: 600, color: C.teal, maxWidth: 400 }}>
            "We finally have a single source of truth. KlarData changed how we run our business."
          </p>
          <div style={{ display: "flex", gap: 60 }}>
            {[["Tableau", "Partner"], ["Power BI", "Certified"], ["dbt", "Expert"]].map(([a, b]) => (
              <div key={a} style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 800, color: C.teal, fontSize: 15 }}>{a}</div>
                <div style={{ fontSize: 11, color: "#5a8a8a", textTransform: "uppercase", letterSpacing: 1 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.teal, padding: "80px 72px", textAlign: "center" }}>
        <h2 style={{ color: C.white, fontSize: 40, fontWeight: 800, marginBottom: 14 }}>Ready to see your data clearly?</h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, marginBottom: 36 }}>Free 30-min audit. No sales pitch. Just your biggest data opportunity, laid out clearly.</p>
        <button style={{ background: C.sky, color: C.teal, border: "none", borderRadius: 10, padding: "16px 40px", fontSize: 17, fontWeight: 800, cursor: "pointer" }}>
          Book Free Audit →
        </button>
      </section>

      <footer style={{ background: C.teal, padding: "28px 72px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #1a6060", fontSize: 13, color: "#5a8a8a" }}>
        <span style={{ color: C.white, fontWeight: 800 }}>KlarData</span>
        <span>© 2025 KlarData.</span>
        <a href="/variants" style={{ color: "#5a8a8a" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
