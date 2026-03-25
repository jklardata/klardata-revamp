"use client";
// V8: Monochrome Premium — black & white only, luxury consulting feel

export default function V8() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Inter', sans-serif", color: "#000" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 72px" }}>
        <span style={{ fontWeight: 300, fontSize: 18, letterSpacing: 6, textTransform: "uppercase" }}>KlarData</span>
        <div style={{ display: "flex", gap: 40, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "#888" }}>
          {["Services", "Work", "About", "Contact"].map((i) => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
        </div>
        <button style={{ background: "#000", color: "#fff", border: "none", padding: "11px 28px", fontSize: 11, fontWeight: 600, cursor: "pointer", letterSpacing: 2, textTransform: "uppercase" }}>
          Start Now
        </button>
      </nav>

      {/* Hero — full width, quiet luxury */}
      <section style={{ padding: "120px 72px 100px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 120, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: 4, color: "#999", textTransform: "uppercase", marginBottom: 36 }}>
              Data & AI Consulting
            </p>
            <h1 style={{ fontSize: 68, fontWeight: 200, lineHeight: 1.15, letterSpacing: -1, marginBottom: 40 }}>
              Where intelligence<br />meets <strong style={{ fontWeight: 800 }}>clarity.</strong>
            </h1>
            <p style={{ fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 48, maxWidth: 400 }}>
              We help discerning B2B companies transform their data into a permanent competitive advantage. No noise. No fluff. Just results.
            </p>
            <div style={{ display: "flex", gap: 20 }}>
              <button style={{ background: "#000", color: "#fff", border: "none", padding: "15px 32px", fontSize: 13, fontWeight: 600, cursor: "pointer", letterSpacing: 1, textTransform: "uppercase" }}>
                Request a Consultation
              </button>
              <button style={{ background: "transparent", color: "#000", border: "1px solid #ccc", padding: "15px 32px", fontSize: 13, cursor: "pointer", letterSpacing: 1, textTransform: "uppercase" }}>
                Our Work
              </button>
            </div>
          </div>
          <div style={{ paddingTop: 60 }}>
            {[["47+", "Engagements completed"], ["3.2×", "Average client ROI"], ["90", "Days to first insight"], ["100%", "Client retention rate"]].map(([n, l], i) => (
              <div key={l} style={{ paddingBottom: 32, borderBottom: i < 3 ? "1px solid #e5e5e5" : "none", marginBottom: i < 3 ? 32 : 0 }}>
                <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>{n}</div>
                <div style={{ fontSize: 11, color: "#999", letterSpacing: 2, textTransform: "uppercase", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ border: "none", borderTop: "1px solid #e5e5e5", margin: "0 72px" }} />

      {/* Services — minimal */}
      <section style={{ padding: "80px 72px", maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 10, letterSpacing: 4, color: "#999", textTransform: "uppercase", marginBottom: 60 }}>Our Practice</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
          {[
            { title: "Artificial Intelligence", desc: "Custom ML models for revenue forecasting, churn prediction, and demand optimization. Deployed, monitored, and improved over time." },
            { title: "Business Intelligence", desc: "Executive and operational dashboards in Tableau, Power BI, or Looker. Designed for decisions, not presentations." },
            { title: "Data Engineering", desc: "Modern data stacks and automated pipelines. A single source of truth that the entire organization can trust." },
          ].map((s, i) => (
            <div key={s.title} style={{ paddingRight: i < 2 ? 60 : 0, borderRight: i < 2 ? "1px solid #e5e5e5" : "none", paddingLeft: i > 0 ? 60 : 0 }}>
              <div style={{ width: 24, height: 1, background: "#000", marginBottom: 32 }} />
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, letterSpacing: -0.3 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.8 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ border: "none", borderTop: "1px solid #e5e5e5", margin: "0 72px" }} />

      {/* Testimonial */}
      <section style={{ padding: "80px 72px", maxWidth: 1200, margin: "0 auto" }}>
        <blockquote style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 26, fontWeight: 300, lineHeight: 1.6, letterSpacing: -0.5, marginBottom: 32, fontStyle: "italic", color: "#333" }}>
            "KlarData didn't just build us dashboards. They changed how we think about our business. Worth every dollar."
          </p>
          <footer style={{ fontSize: 12, color: "#999", letterSpacing: 2, textTransform: "uppercase" }}>
            — VP of Revenue, Enterprise SaaS Co.
          </footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section style={{ background: "#000", padding: "80px 72px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <p style={{ fontSize: 10, letterSpacing: 4, color: "#555", textTransform: "uppercase", marginBottom: 20 }}>Get Started</p>
          <h2 style={{ color: "#fff", fontSize: 44, fontWeight: 200, lineHeight: 1.2, letterSpacing: -1 }}>
            Ready for <strong style={{ fontWeight: 800 }}>data that works?</strong>
          </h2>
        </div>
        <div>
          <p style={{ color: "#666", fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
            We offer a complimentary 30-minute data audit to qualified companies. No obligation. No sales pitch. Just a clear view of your biggest data opportunity.
          </p>
          <button style={{ background: "#fff", color: "#000", border: "none", padding: "16px 36px", fontSize: 13, fontWeight: 700, cursor: "pointer", letterSpacing: 1, textTransform: "uppercase" }}>
            Request Free Audit
          </button>
        </div>
      </section>

      <footer style={{ background: "#000", padding: "28px 72px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #222", fontSize: 11, color: "#444", letterSpacing: 1 }}>
        <span style={{ color: "#fff", fontWeight: 300, letterSpacing: 4, textTransform: "uppercase" }}>KlarData</span>
        <span style={{ textTransform: "uppercase" }}>© 2025 KlarData</span>
        <a href="/variants" style={{ color: "#444", textTransform: "uppercase" }}>← Variants</a>
      </footer>
    </div>
  );
}
