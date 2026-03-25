"use client";
// V10: Cinematic Dark — full-bleed dark, dramatic large type, strong presence

export default function V10() {
  return (
    <div style={{ minHeight: "100vh", background: "#000", fontFamily: "'Inter', sans-serif", color: "#fff" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 64px", position: "relative" }}>
        <span style={{ fontWeight: 900, fontSize: 22, letterSpacing: -0.5 }}>
          <span style={{ color: "#facc15" }}>Klar</span>Data
        </span>
        <div style={{ display: "flex", gap: 36, fontSize: 13, color: "#555", letterSpacing: 0.5 }}>
          {["Services", "Case Studies", "About", "Blog"].map((i) => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
        </div>
        <button style={{ background: "transparent", color: "#facc15", border: "1px solid #facc15", borderRadius: 6, padding: "10px 22px", fontSize: 13, fontWeight: 700, cursor: "pointer", letterSpacing: 0.5 }}>
          Free Audit →
        </button>
      </nav>

      {/* Hero — cinematic, full impact */}
      <section style={{ padding: "80px 64px 100px", maxWidth: 1300, margin: "0 auto" }}>
        {/* Large decorative text */}
        <div style={{ fontSize: 11, color: "#444", letterSpacing: 4, textTransform: "uppercase", marginBottom: 40, display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ display: "inline-block", width: 40, height: 1, background: "#444" }} />
          AI + Business Intelligence Consulting
        </div>
        <h1 style={{ fontSize: 100, fontWeight: 900, lineHeight: 0.92, letterSpacing: -5, marginBottom: 48, maxWidth: 900 }}>
          DATA<br />
          <span style={{ WebkitTextStroke: "2px #333", color: "transparent" }}>THAT</span><br />
          <span style={{ color: "#facc15" }}>DECIDES.</span>
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <p style={{ fontSize: 20, color: "#666", lineHeight: 1.7, maxWidth: 480 }}>
            KlarData engineers AI-powered analytics systems and executive dashboards that turn your company's data into its sharpest competitive weapon.
          </p>
          <div>
            <div style={{ display: "flex", gap: 16, marginBottom: 48 }}>
              <button style={{ background: "#facc15", color: "#000", border: "none", borderRadius: 8, padding: "16px 32px", fontSize: 16, fontWeight: 800, cursor: "pointer" }}>
                Book Free Audit
              </button>
              <button style={{ background: "transparent", color: "#666", border: "1px solid #222", borderRadius: 8, padding: "16px 32px", fontSize: 16, cursor: "pointer" }}>
                View Work
              </button>
            </div>
            <div style={{ display: "flex", gap: 48 }}>
              {[["47+", "Projects"], ["3.2×", "ROI"], ["<90d", "Go-live"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: "#fff" }}>{n}</div>
                  <div style={{ fontSize: 11, color: "#444", textTransform: "uppercase", letterSpacing: 1.5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width accent line */}
      <div style={{ background: "#facc15", height: 2, margin: "0 64px" }} />

      {/* Services */}
      <section style={{ padding: "80px 64px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, borderBottom: "1px solid #111" }}>
        {[
          { num: "01", title: "AI &\nPredictive\nAnalytics", desc: "ML models for revenue, churn, and demand. Built to improve over time." },
          { num: "02", title: "BI\nDashboard\nDesign", desc: "Executive and operational dashboards in Tableau, Power BI, or Looker." },
          { num: "03", title: "Data\nEngineering", desc: "Automated pipelines, clean warehouses, one source of truth." },
        ].map((s, i) => (
          <div key={s.title} style={{ padding: "40px 48px", borderRight: i < 2 ? "1px solid #111" : "none", borderLeft: i > 0 ? "none" : "none" }}>
            <div style={{ fontSize: 11, color: "#444", letterSpacing: 3, marginBottom: 28 }}>{s.num}</div>
            <h3 style={{ fontSize: 28, fontWeight: 900, lineHeight: 1.1, marginBottom: 20, whiteSpace: "pre-line", letterSpacing: -0.5 }}>{s.title}</h3>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8 }}>{s.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonial */}
      <section style={{ padding: "80px 64px", borderBottom: "1px solid #111" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ width: 48, height: 48, background: "#facc15", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 900, color: "#000", marginBottom: 16 }}>K</div>
            <div style={{ fontSize: 11, color: "#444", letterSpacing: 2, textTransform: "uppercase" }}>Client Testimonial</div>
          </div>
          <blockquote>
            <p style={{ fontSize: 28, fontWeight: 300, lineHeight: 1.4, color: "#ccc", marginBottom: 24, fontStyle: "italic" }}>
              "They didn't just deliver dashboards—they changed the way we make decisions. Revenue up 34% in the first year."
            </p>
            <footer style={{ fontSize: 12, color: "#444", letterSpacing: 1.5, textTransform: "uppercase" }}>
              — VP Revenue, Enterprise SaaS Company
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <h2 style={{ fontSize: 64, fontWeight: 900, lineHeight: 1, letterSpacing: -2 }}>
            Let's build<br />
            <span style={{ color: "#facc15" }}>something</span><br />
            extraordinary.
          </h2>
          <div>
            <p style={{ fontSize: 17, color: "#555", lineHeight: 1.8, marginBottom: 40 }}>
              Start with a free 30-minute data audit. We'll identify your biggest untapped data opportunity and show you exactly what we'd build.
            </p>
            <button style={{ background: "#facc15", color: "#000", border: "none", borderRadius: 8, padding: "18px 44px", fontSize: 18, fontWeight: 900, cursor: "pointer", display: "block", marginBottom: 16 }}>
              Book Free Audit →
            </button>
            <p style={{ fontSize: 13, color: "#333" }}>No pressure. No commitment. Just clarity.</p>
          </div>
        </div>
      </section>

      <footer style={{ padding: "32px 64px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #111", fontSize: 12, color: "#333" }}>
        <span style={{ fontWeight: 900, color: "#fff", fontSize: 16 }}><span style={{ color: "#facc15" }}>Klar</span>Data</span>
        <span style={{ letterSpacing: 1 }}>© 2025 KLARDATA. ALL RIGHTS RESERVED.</span>
        <a href="/variants" style={{ color: "#333" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
