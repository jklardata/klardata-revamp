"use client";
// V4: Glassmorphism — frosted glass cards, vibrant gradient

export default function V4() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a0533 0%, #0c1445 35%, #062a5a 60%, #0a1628 100%)",
      fontFamily: "'Inter', sans-serif",
      color: "#fff",
    }}>
      {/* Background orbs */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: -200, left: -200, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: 100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -100, left: 200, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)" }} />
      </div>

      {/* Nav */}
      <nav style={{
        position: "relative",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "24px 60px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}>
        <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: -0.5 }}>
          <span style={{ background: "linear-gradient(90deg, #818cf8, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Klar</span>Data
        </span>
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
          {["Services", "Work", "About", "Blog"].map((i) => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
        </div>
        <button style={{
          background: "rgba(129,140,248,0.2)",
          color: "#818cf8",
          border: "1px solid rgba(129,140,248,0.4)",
          borderRadius: 10,
          padding: "10px 22px",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          backdropFilter: "blur(10px)",
        }}>
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "100px 60px" }}>
        <div style={{
          display: "inline-flex",
          gap: 8,
          alignItems: "center",
          background: "rgba(129,140,248,0.15)",
          border: "1px solid rgba(129,140,248,0.3)",
          borderRadius: 20,
          padding: "6px 18px",
          marginBottom: 32,
          backdropFilter: "blur(10px)",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#818cf8", display: "block" }} />
          <span style={{ fontSize: 13, color: "#a5b4fc" }}>AI + BI Consulting for Data-Driven Teams</span>
        </div>

        <h1 style={{ fontSize: 76, fontWeight: 900, lineHeight: 1, letterSpacing: -3, marginBottom: 24 }}>
          Clarity Through<br />
          <span style={{ background: "linear-gradient(90deg, #818cf8 0%, #34d399 50%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Intelligent Data
          </span>
        </h1>

        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.6)", maxWidth: 520, lineHeight: 1.7, marginBottom: 44 }}>
          We build AI-powered analytics systems that turn your raw data into revenue-driving decisions. Faster reporting. Better forecasting. Zero spreadsheet chaos.
        </p>

        <div style={{ display: "flex", gap: 16 }}>
          <button style={{
            background: "linear-gradient(135deg, #818cf8, #6366f1)",
            color: "#fff",
            border: "none",
            borderRadius: 12,
            padding: "16px 32px",
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 8px 32px rgba(129,140,248,0.4)",
          }}>
            Book Free Audit →
          </button>
          <button style={{
            background: "rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.8)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 12,
            padding: "16px 32px",
            fontSize: 16,
            cursor: "pointer",
            backdropFilter: "blur(10px)",
          }}>
            View Case Studies
          </button>
        </div>

        {/* Glass cards row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 80 }}>
          {[
            { value: "47+", label: "Projects", color: "#818cf8" },
            { value: "3.2x", label: "Avg. ROI", color: "#34d399" },
            { value: "90d", label: "Time to Value", color: "#38bdf8" },
            { value: "100%", label: "Retention", color: "#f59e0b" },
          ].map((s) => (
            <div key={s.label} style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: "24px 20px",
              backdropFilter: "blur(20px)",
            }}>
              <div style={{ fontSize: 34, fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services glass cards */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 60px 80px" }}>
        <h2 style={{ fontSize: 38, fontWeight: 800, marginBottom: 36 }}>Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {[
            { gradient: "rgba(129,140,248,0.15)", border: "rgba(129,140,248,0.25)", icon: "✦", title: "AI Analytics", desc: "ML models for churn, revenue forecasting, and demand planning." },
            { gradient: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.2)", icon: "◈", title: "BI Dashboards", desc: "Executive dashboards in Tableau, Power BI, or Looker." },
            { gradient: "rgba(56,189,248,0.12)", border: "rgba(56,189,248,0.2)", icon: "⟳", title: "Data Pipelines", desc: "Automated ETL and a single source of truth for your team." },
          ].map((s) => (
            <div key={s.title} style={{
              background: s.gradient,
              border: `1px solid ${s.border}`,
              borderRadius: 16,
              padding: "28px 24px",
              backdropFilter: "blur(20px)",
            }}>
              <div style={{ fontSize: 26, marginBottom: 12 }}>{s.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px", textAlign: "center" }}>
        <div style={{
          maxWidth: 700,
          margin: "0 auto",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 24,
          padding: "60px 48px",
          backdropFilter: "blur(20px)",
        }}>
          <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 14 }}>Ready to Get Started?</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>Free 30-min audit. Discover your biggest data opportunity.</p>
          <button style={{
            background: "linear-gradient(135deg, #818cf8, #34d399)",
            color: "#fff",
            border: "none",
            borderRadius: 12,
            padding: "16px 40px",
            fontSize: 17,
            fontWeight: 700,
            cursor: "pointer",
          }}>
            Book Your Free Audit →
          </button>
        </div>
      </section>

      <footer style={{ position: "relative", padding: "32px 60px", display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
        <span style={{ fontWeight: 800, color: "rgba(255,255,255,0.8)" }}>KlarData</span>
        <span>© 2025 KlarData</span>
        <a href="/variants" style={{ color: "rgba(255,255,255,0.3)" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
