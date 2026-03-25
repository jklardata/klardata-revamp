"use client";
// V16 — Forest Green + Amber + White
// Layout: Warm and trustworthy. Two-column hero, horizontal case study strip, warm CTA

const C = { forest: "#14532d", amber: "#d97706", white: "#ffffff", forestMid: "#166534", forestFaint: "#f0fdf4", amberFaint: "#fffbeb", amberLight: "#fde68a" };

export default function V16() {
  return (
    <div style={{ minHeight: "100vh", background: C.white, fontFamily: "'Inter', sans-serif", color: C.forest }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 72px", borderBottom: "1px solid #d1fae5" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, background: C.forest, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: C.white, fontWeight: 900, fontSize: 16 }}>K</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: 20, color: C.forest }}>KlarData</span>
        </div>
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: "#4a7a5a" }}>
          {["Services", "Case Studies", "About", "Blog"].map(i => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
        </div>
        <button style={{ background: C.amber, color: C.white, border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          Free Audit →
        </button>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 72px 70px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.amber }} />
            <span style={{ fontSize: 13, color: C.amber, fontWeight: 700, letterSpacing: 0.5 }}>AI + Business Intelligence Consulting</span>
          </div>
          <h1 style={{ fontSize: 58, fontWeight: 900, lineHeight: 1.07, letterSpacing: -2, marginBottom: 22, color: C.forest }}>
            Data you can trust.<br />Insights that <span style={{ color: C.amber }}>actually</span><br />move the needle.
          </h1>
          <p style={{ fontSize: 18, color: "#4a7a5a", lineHeight: 1.75, marginBottom: 40, maxWidth: 460 }}>
            We combine AI and business intelligence to build analytics systems that give your leadership team real clarity—every week, not just in board meetings.
          </p>
          <div style={{ display: "flex", gap: 14 }}>
            <button style={{ background: C.forest, color: C.white, border: "none", borderRadius: 10, padding: "15px 30px", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
              Book Free Audit
            </button>
            <button style={{ background: "transparent", color: C.forest, border: `1.5px solid #bbf7d0`, borderRadius: 10, padding: "15px 30px", fontSize: 16, cursor: "pointer" }}>
              See Our Work →
            </button>
          </div>
        </div>
        {/* Right: stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { val: "47+", lbl: "Projects Delivered", bg: C.forestFaint, border: "#bbf7d0" },
            { val: "3.2×", lbl: "Average ROI", bg: C.amberFaint, border: "#fde68a" },
            { val: "90d", lbl: "Time to First Dashboard", bg: C.forestFaint, border: "#bbf7d0" },
            { val: "100%", lbl: "Client Retention", bg: C.amberFaint, border: "#fde68a" },
          ].map(s => (
            <div key={s.lbl} style={{ background: s.bg, border: `1.5px solid ${s.border}`, borderRadius: 16, padding: "28px 22px" }}>
              <div style={{ fontSize: 38, fontWeight: 900, color: C.forest }}>{s.val}</div>
              <div style={{ fontSize: 13, color: "#4a7a5a", marginTop: 6, lineHeight: 1.4 }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ background: C.forestFaint, borderTop: "1px solid #bbf7d0", borderBottom: "1px solid #bbf7d0", padding: "64px 72px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: C.forest, marginBottom: 40 }}>What we build</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {[
              { icon: "🤖", title: "AI & Predictive Models", desc: "Custom ML for churn, revenue, and demand. Deployed and continuously improved." },
              { icon: "📊", title: "BI & Dashboards", desc: "Tableau, Power BI, or Looker dashboards built for decisions, not just reports." },
              { icon: "⚡", title: "Data Engineering", desc: "Clean pipelines and data warehouses. One trusted source of truth." },
            ].map(s => (
              <div key={s.title} style={{ background: C.white, border: `1.5px solid #d1fae5`, borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: C.forest, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#4a7a5a", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: "72px 72px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ background: C.amberFaint, border: `1.5px solid ${C.amberLight}`, borderRadius: 20, padding: "52px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <blockquote>
            <p style={{ fontSize: 22, lineHeight: 1.6, color: C.forest, fontStyle: "italic", marginBottom: 20 }}>
              "We went from drowning in spreadsheets to having a single dashboard that runs our Monday meetings. KlarData delivered in 60 days."
            </p>
            <footer style={{ fontSize: 13, color: "#7a6a3a", fontWeight: 600 }}>
              — Head of Operations, D2C Brand
            </footer>
          </blockquote>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {["60-day delivery", "Tableau + Snowflake stack", "Daily active dashboard usage"].map(pt => (
              <div key={pt} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: C.forest, fontSize: 14, fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: 14, color: "#4a7a5a" }}>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.forest, padding: "80px 72px", textAlign: "center" }}>
        <h2 style={{ color: C.white, fontSize: 40, fontWeight: 800, marginBottom: 14 }}>See what your data is hiding.</h2>
        <p style={{ color: "#6fb88a", fontSize: 17, marginBottom: 36 }}>Free 30-min audit. We'll show you exactly what we'd build and why.</p>
        <button style={{ background: C.amber, color: C.white, border: "none", borderRadius: 10, padding: "16px 40px", fontSize: 17, fontWeight: 700, cursor: "pointer" }}>
          Book Free Audit →
        </button>
      </section>

      <footer style={{ background: C.forest, padding: "28px 72px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #166534", fontSize: 13, color: "#4a7a5a" }}>
        <span style={{ color: C.white, fontWeight: 800 }}>KlarData</span>
        <span>© 2025 KlarData.</span>
        <a href="/variants" style={{ color: "#4a7a5a" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
