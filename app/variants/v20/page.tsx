"use client";
// V20 — Sapphire + Bronze + Ivory
// Layout: Sophisticated, premium consulting. Serif accents, generous padding, authority presence

const C = { sapphire: "#1b2d7a", bronze: "#92622a", ivory: "#faf8f4", sapphireMid: "#243494", sapphireFaint: "#f0f2fb", bronzeFaint: "#fdf5ec", bronzeLight: "#e8c89a", bronzeMid: "#7a5020" };

export default function V20() {
  return (
    <div style={{ minHeight: "100vh", background: C.ivory, fontFamily: "'Inter', sans-serif", color: C.sapphire }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 80px", borderBottom: "1px solid #e2ddd4" }}>
        <span style={{ fontWeight: 300, fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: C.sapphire }}>
          KlarData
        </span>
        <div style={{ display: "flex", gap: 36, fontSize: 13, color: "#7a7a9a", letterSpacing: 0.5 }}>
          {["Services", "Case Studies", "Insights", "Contact"].map(i => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
        </div>
        <button style={{ background: "transparent", color: C.bronze, border: `1.5px solid ${C.bronze}`, borderRadius: 4, padding: "10px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer", letterSpacing: 0.5 }}>
          Book Consultation
        </button>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 80px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 100, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
              <div style={{ width: 48, height: 2, background: C.bronze }} />
              <span style={{ fontSize: 11, color: C.bronze, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600 }}>AI + Business Intelligence</span>
            </div>
            <h1 style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.07, letterSpacing: -2, marginBottom: 32, color: C.sapphire }}>
              The intelligence<br />your business has<br />been missing.
            </h1>
            <p style={{ fontSize: 18, color: "#5a5a7a", lineHeight: 1.85, marginBottom: 44, maxWidth: 480 }}>
              KlarData combines AI and business intelligence to build analytics systems that give leadership teams the clarity to act with confidence—every single week.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <button style={{ background: C.sapphire, color: C.ivory, border: "none", borderRadius: 6, padding: "14px 32px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                Book Free Audit →
              </button>
              <button style={{ background: "transparent", color: C.sapphire, border: `1.5px solid #c5c5d8`, borderRadius: 6, padding: "14px 32px", fontSize: 15, cursor: "pointer" }}>
                Our Case Studies
              </button>
            </div>
          </div>
          {/* Right: credential stack */}
          <div>
            <div style={{ background: C.bronzeFaint, border: `1.5px solid ${C.bronzeLight}`, borderRadius: 16, padding: "32px 28px", marginBottom: 14 }}>
              <p style={{ fontSize: 13, color: C.bronzeMid, fontStyle: "italic", lineHeight: 1.7, marginBottom: 16 }}>
                "KlarData gave us visibility we've never had. The ROI was clear within 90 days."
              </p>
              <div style={{ fontSize: 11, color: "#9a7a5a", letterSpacing: 1.5, textTransform: "uppercase" }}>— VP Operations, Enterprise SaaS</div>
            </div>
            <div style={{ background: C.sapphireFaint, border: `1.5px solid #c5c5d8`, borderRadius: 16, padding: "28px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[["47+", "Projects"], ["3.2×", "Avg ROI"], ["90d", "First value"], ["100%", "Retention"]].map(([n, l]) => (
                  <div key={l} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 30, fontWeight: 900, color: C.sapphire }}>{n}</div>
                    <div style={{ fontSize: 11, color: "#7a7a9a", textTransform: "uppercase", letterSpacing: 1, marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bronze divider */}
      <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${C.bronze}, transparent)`, margin: "0 80px" }} />

      {/* Services — refined */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 52 }}>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: C.sapphire }}>Areas of expertise</h2>
          <span style={{ fontSize: 12, color: "#7a7a9a", letterSpacing: 2, textTransform: "uppercase" }}>Three services</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {[
            { n: "I", title: "AI & Predictive Analytics", desc: "Custom ML models for revenue forecasting, churn prediction, and demand planning. Deployed and maintained end to end." },
            { n: "II", title: "Business Intelligence", desc: "Executive and operational dashboards in Tableau, Power BI, or Looker. Designed for the decisions that matter each week." },
            { n: "III", title: "Data Engineering", desc: "Clean data pipelines, modern warehouses, and a single source of truth your entire organization can trust." },
          ].map(s => (
            <div key={s.title} style={{ border: `1px solid #e2ddd4`, borderRadius: 12, padding: "32px 26px", background: C.ivory }}>
              <div style={{ display: "inline-block", background: C.sapphire, color: C.ivory, width: 32, height: 32, borderRadius: 6, textAlign: "center", lineHeight: "32px", fontSize: 13, fontWeight: 700, marginBottom: 18 }}>{s.n}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.sapphire, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#6a6a8a", lineHeight: 1.8 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process — horizontal elegant */}
      <section style={{ background: C.sapphire, padding: "72px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 44 }}>
            <div style={{ width: 36, height: 2, background: C.bronze }} />
            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.ivory }}>Our engagement process</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 32 }}>
            {[
              { step: "01", title: "Discovery", desc: "Free 30-min audit to surface your biggest data opportunity." },
              { step: "02", title: "Strategy", desc: "We design your ideal analytics stack and delivery roadmap." },
              { step: "03", title: "Delivery", desc: "We build, test, and deploy your complete analytics system." },
              { step: "04", title: "Partnership", desc: "Ongoing improvement, support, and strategic guidance." },
            ].map(s => (
              <div key={s.title}>
                <div style={{ fontSize: 11, color: C.bronze, letterSpacing: 2.5, fontWeight: 600, marginBottom: 16 }}>{s.step}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: C.ivory, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#5a6a9a", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 80px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: C.bronze }} />
          <span style={{ fontSize: 11, color: C.bronze, letterSpacing: 3, textTransform: "uppercase" }}>Get Started</span>
          <div style={{ width: 40, height: 1, background: C.bronze }} />
        </div>
        <h2 style={{ fontSize: 46, fontWeight: 800, color: C.sapphire, marginBottom: 16, letterSpacing: -1 }}>
          Let's find your data advantage.
        </h2>
        <p style={{ fontSize: 17, color: "#6a6a8a", marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
          Book a complimentary 30-minute data audit. We'll identify your biggest untapped data opportunity—no obligation required.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button style={{ background: C.sapphire, color: C.ivory, border: "none", borderRadius: 6, padding: "16px 40px", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
            Book Free Audit →
          </button>
          <button style={{ background: C.bronze, color: C.ivory, border: "none", borderRadius: 6, padding: "16px 40px", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
            View Case Studies
          </button>
        </div>
      </section>

      <footer style={{ padding: "28px 80px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #e2ddd4", fontSize: 12, color: "#9a9aaa" }}>
        <span style={{ fontWeight: 300, letterSpacing: 4, textTransform: "uppercase", color: C.sapphire }}>KlarData</span>
        <span>© 2025 KlarData. All rights reserved.</span>
        <a href="/variants" style={{ color: "#9a9aaa" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
