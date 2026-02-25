import Link from "next/link";

const articles = [
  {
    title: "5 Signs Your Business Is Ready for a BI Implementation",
    excerpt: "Most businesses know they need better data. But not every business is ready to implement BI. Here are the five signals that tell you the timing is right.",
    date: "Feb 25, 2026",
    category: "Strategy",
    readTime: "6 min read",
    slug: "bi-implementation-ready",
    gradient: "from-violet-900 via-purple-900 to-blue-900",
    accentColor: "text-violet-300",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "5 Signs Your Business Needs a Data Warehouse",
    excerpt: "Spreadsheets worked when you started, but now they're holding you back. Here's how to know when it's time to upgrade your data infrastructure.",
    date: "Feb 5, 2026",
    category: "Data Infrastructure",
    readTime: "5 min read",
    slug: "5-signs-business-needs-data-warehouse",
    gradient: "from-blue-900 via-blue-800 to-cyan-900",
    accentColor: "text-cyan-400",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    title: "Tableau vs. Power BI: Which BI Tool is Right for You?",
    excerpt: "An honest comparison of the two leading business intelligence platforms, including costs, capabilities, and ideal use cases.",
    date: "Jan 28, 2026",
    category: "BI Tools",
    readTime: "8 min read",
    slug: "tableau-vs-power-bi",
    gradient: "from-indigo-900 via-blue-900 to-violet-900",
    accentColor: "text-indigo-300",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "How to Calculate ROI on Business Intelligence Investment",
    excerpt: "BI projects often struggle to show value. This framework helps you quantify the impact and justify the investment to stakeholders.",
    date: "Jan 15, 2026",
    category: "Strategy",
    readTime: "6 min read",
    slug: "roi-business-intelligence",
    gradient: "from-slate-900 via-blue-950 to-emerald-950",
    accentColor: "text-emerald-400",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0d1b2e]">
      {/* Nav */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl tracking-tight">
            Klardata
          </Link>
          <Link href="/" className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-b from-blue-950/60 to-transparent py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full border border-blue-400/20 mb-6">
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Insights & Resources</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Blog & Insights</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Practical guides on data analytics, business intelligence, and making better decisions with data
          </p>
        </div>
      </div>

      {/* Articles grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/30"
            >
              {/* Thumbnail */}
              <div className={`relative h-56 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  {post.icon}
                </div>
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm ${post.accentColor}`}>
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-xs text-white/50">{post.readTime}</div>
              </div>

              {/* Content */}
              <div className="p-6 bg-slate-800/80">
                <h2 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{post.date}</span>
                  <span className="text-blue-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Author footer */}
      <footer className="border-t border-white/10 bg-slate-900/50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/40 flex-shrink-0">
            <img src="/photos/sevillapic hs.jpg" alt="Justin Leu" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-white font-bold text-lg mb-1">Justin Leu</p>
            <p className="text-blue-400 text-sm font-medium mb-3">Data & BI Consultant · San Francisco</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              17+ years helping companies like Google, Pinterest, Salesforce, and United Healthgroup turn raw data into actionable business intelligence. I write about BI strategy, data infrastructure, and the practical side of analytics.
            </p>
            <Link href="/#contact" className="inline-block mt-4 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors">
              Work with me →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
