"use client";
// V9: Split Screen — left headline, right animated data visual

export default function V9() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Inter', sans-serif", color: "#000", display: "flex", flexDirection: "column" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", borderBottom: "1px solid #f0f0f0", zIndex: 10, position: "relative", background: "#fff" }}>
        <div style={{ paddingLeft: "50%", display: "flex", justifyContent: "space-between", width: "100%" }}>
          <span style={{ fontWeight: 800, fontSize: 20, paddingLeft: 40 }}>KlarData</span>
          <div style={{ display: "flex", gap: 32, alignItems: "center", paddingRight: 48 }}>
            <div style={{ display: "flex", gap: 28, fontSize: 14, color: "#888" }}>
              {["Services", "Work", "About"].map((i) => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
            </div>
            <button style={{ background: "#000", color: "#fff", border: "none", borderRadius: 8, padding: "9px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              Free Audit
            </button>
          </div>
        </div>
      </nav>

      {/* Split hero */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 61px)" }}>
        {/* Left — headline + CTA */}
        <div style={{ padding: "80px 60px 80px 72px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "inline-block", background: "#f5f3ff", color: "#7c3aed", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 28, alignSelf: "flex-start" }}>
            AI + BI Consulting
          </div>
          <h1 style={{ fontSize: 58, fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 22 }}>
            Your data,<br />finally clear.
          </h1>
          <p style={{ fontSize: 17, color: "#555", lineHeight: 1.75, marginBottom: 40, maxWidth: 400 }}>
            KlarData builds AI-powered analytics systems and live dashboards that transform messy data into the clarity your team needs to grow faster.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
            <button style={{ background: "#000", color: "#fff", border: "none", borderRadius: 10, padding: "15px 32px", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
              Book Free 30-Min Audit →
            </button>
            <a href="#" style={{ color: "#888", fontSize: 14, textDecoration: "none", textUnderlineOffset: 4 }}>Or see our case studies</a>
          </div>

          <div style={{ display: "flex", gap: 40, marginTop: 60, paddingTop: 40, borderTop: "1px solid #f0f0f0" }}>
            {[["47+", "Projects"], ["3.2×", "ROI"], ["90d", "First value"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: 28, fontWeight: 800 }}>{n}</div>
                <div style={{ fontSize: 12, color: "#aaa" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — data visualization panel */}
        <div style={{ background: "#0a0e1a", padding: "60px 60px 60px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ color: "#888", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", marginBottom: 28 }}>Live Analytics Preview</div>

          {/* Main metric */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 56, fontWeight: 800, color: "#fff", lineHeight: 1 }}>$1.24M</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
              <span style={{ background: "#14532d", color: "#4ade80", borderRadius: 4, padding: "2px 8px", fontSize: 12, fontWeight: 600 }}>+34% MoM</span>
              <span style={{ color: "#555", fontSize: 12 }}>Revenue MTD</span>
            </div>
          </div>

          {/* Mini chart */}
          <div style={{ background: "#0f1829", borderRadius: 12, padding: "16px 20px", marginBottom: 20 }}>
            <div style={{ fontSize: 11, color: "#4a6080", marginBottom: 10 }}>Revenue trend (12m)</div>
            <svg width="100%" height="60" viewBox="0 0 400 60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,50 C40,46 80,42 120,35 C160,28 200,32 240,22 C280,12 320,16 360,8 L400,4 L400,60 L0,60Z" fill="url(#sg)" />
              <path d="M0,50 C40,46 80,42 120,35 C160,28 200,32 240,22 C280,12 320,16 360,8 L400,4" fill="none" stroke="#818cf8" strokeWidth="2" />
            </svg>
          </div>

          {/* KPI grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
            {[
              { label: "Active Users", value: "8,420", delta: "+7%", up: true },
              { label: "Churn Rate", value: "2.1%", delta: "-0.4%", up: false },
              { label: "NRR", value: "118%", delta: "+3%", up: true },
              { label: "CAC", value: "$1,240", delta: "-12%", up: false },
            ].map((k) => (
              <div key={k.label} style={{ background: "#0f1829", borderRadius: 10, padding: "14px 16px" }}>
                <div style={{ fontSize: 11, color: "#4a6080", marginBottom: 4 }}>{k.label}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>{k.value}</div>
                <div style={{ fontSize: 11, color: k.up ? "#4ade80" : "#f87171", marginTop: 2 }}>{k.delta}</div>
              </div>
            ))}
          </div>

          {/* AI insight */}
          <div style={{ background: "#1a2744", border: "1px solid #2a3f6e", borderRadius: 10, padding: "14px 16px", display: "flex", gap: 10 }}>
            <span style={{ color: "#818cf8", fontSize: 14 }}>✦</span>
            <span style={{ fontSize: 12, color: "#8899bb", lineHeight: 1.5 }}>
              AI: Enterprise segment accounts for 68% of new ARR. Recommend shifting 40% of outbound to enterprise tier.
            </span>
          </div>
        </div>
      </div>

      {/* Services below fold */}
      <section style={{ padding: "64px 72px", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
          {[
            { n: "01", title: "AI & Machine Learning", desc: "Revenue forecasting, churn prediction, demand planning—built and maintained." },
            { n: "02", title: "BI Dashboards", desc: "Executive and operational dashboards in Tableau, Power BI, or Looker." },
            { n: "03", title: "Data Engineering", desc: "Clean pipelines, automated ETL, one source of truth." },
          ].map((s) => (
            <div key={s.title}>
              <div style={{ fontSize: 12, color: "#ccc", fontWeight: 700, marginBottom: 12 }}>{s.n}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#777", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: "28px 72px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #f0f0f0", fontSize: 13, color: "#aaa" }}>
        <span style={{ fontWeight: 800, color: "#000" }}>KlarData</span>
        <span>© 2025 KlarData.</span>
        <a href="/variants" style={{ color: "#aaa" }}>← Back to variants</a>
      </footer>
    </div>
  );
}
