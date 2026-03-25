import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights — Data, BI, and Analytics",
  description: "Practical guides on data strategy, business intelligence, data warehousing, and making better decisions with your data. Written by Justin Leu, BI consultant with 17+ years experience.",
  keywords: ["data analytics blog", "business intelligence articles", "data strategy guides", "BI consulting insights", "tableau dbt analytics", "data warehouse guides", "analytics engineering"],
  alternates: { canonical: "https://klardata.com/blog" },
  openGraph: {
    title: "Blog & Insights — Data, BI, and Analytics | Klardata",
    description: "Practical guides on data strategy, business intelligence, and analytics. Written by Justin Leu, BI consultant with 17+ years experience.",
    url: "https://klardata.com/blog",
    type: "website",
  },
  twitter: {
    title: "Blog & Insights — Data, BI, and Analytics | Klardata",
    description: "Practical guides on data strategy, business intelligence, and analytics.",
  },
};

const articles = [
  {
    title: "I Tested 4 AI Models on Tableau Calculated Fields. Here's What I Found.",
    excerpt: "A structured benchmark of GPT-4o, Gemini 2.5 Flash, Claude Sonnet 4, and Claude Haiku 4.5 across 14 Tableau calculated field tasks. The scores are close. The failure modes are revealing.",
    date: "Apr 1, 2026",
    category: "AI & Analytics",
    readTime: "10 min read",
    slug: "tableau-ai-benchmark",
    gradient: "from-amber-900 via-orange-900 to-slate-950",
    accentColor: "text-amber-300",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "What Does It Mean to Formally Define a Metric? (And Why It Matters for AI Agents)",
    excerpt: "Most teams think they have defined metrics. They don't. Here's what formal metric definition actually requires — grain, filters, aggregation logic, ownership, and versioning — and why agents will expose every gap.",
    date: "Mar 24, 2026",
    category: "Semantic Layer",
    readTime: "9 min read",
    slug: "semantic-layer-metric-definitions",
    gradient: "from-blue-900 via-indigo-900 to-slate-950",
    accentColor: "text-blue-300",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Why Table-Level Permissions Aren't Enough for AI Agents",
    excerpt: "Granting agents table-level access is like giving someone your house key when they only need to read your mail. Here's what fine-grained access control looks like for agentic semantic layer access.",
    date: "Mar 24, 2026",
    category: "Semantic Layer",
    readTime: "8 min read",
    slug: "semantic-layer-access-control",
    gradient: "from-red-900 via-rose-900 to-slate-950",
    accentColor: "text-red-300",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Data Lineage for AI Agents: Why Provenance Is Now a Governance Requirement",
    excerpt: "When a human analyst gets a number wrong, you can ask them how they calculated it. When an agent gets a number wrong, you need lineage. Here's what end-to-end traceability requires.",
    date: "Mar 24, 2026",
    category: "Semantic Layer",
    readTime: "9 min read",
    slug: "semantic-layer-lineage-traceability",
    gradient: "from-emerald-900 via-teal-900 to-slate-950",
    accentColor: "text-emerald-300",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Is Your Data Stack Built for 500 Queries in 10 Minutes? Designing for Agentic Query Patterns",
    excerpt: "Human analysts run 5-10 queries per session. Agents run hundreds. Your warehouse cost governance, schema stability, and query observability were not designed for this. Here's what needs to change.",
    date: "Mar 24, 2026",
    category: "Semantic Layer",
    readTime: "8 min read",
    slug: "semantic-layer-agent-query-tolerance",
    gradient: "from-violet-900 via-purple-900 to-slate-950",
    accentColor: "text-violet-300",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "The Organizational Side of Semantic Layer Governance: Policies, Owners, and Audit Trails",
    excerpt: "Technical infrastructure isn't enough. Agentic semantic layer governance requires policies, designated owners, approval workflows, and audit trails. Here's what governance maturity actually looks like.",
    date: "Mar 24, 2026",
    category: "Semantic Layer",
    readTime: "10 min read",
    slug: "semantic-layer-governance-maturity",
    gradient: "from-amber-900 via-orange-900 to-slate-950",
    accentColor: "text-amber-300",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "How to Document a Tableau Workbook (Without Doing It Manually)",
    excerpt: "Tableau ships with zero documentation tooling. Here's what a properly documented workbook looks like, how to read a .twb file without Tableau Desktop, and how to generate full docs automatically in your browser.",
    date: "Mar 19, 2026",
    category: "Data Infrastructure",
    readTime: "7 min read",
    slug: "tableau-workbook-documentation",
    gradient: "from-blue-900 via-indigo-900 to-slate-950",
    accentColor: "text-blue-300",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Tableau Workbook Health Check: What to Audit Before You Migrate",
    excerpt: "Unused calculated fields, circular dependencies, and nested LOD expressions discovered mid-migration will cost you double the time. Here's what a proper workbook audit checks and how to score overall health.",
    date: "Mar 19, 2026",
    category: "Data Quality",
    readTime: "8 min read",
    slug: "tableau-workbook-audit",
    gradient: "from-orange-900 via-amber-900 to-slate-950",
    accentColor: "text-amber-300",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "How to Compare Two Tableau Workbooks (And Actually See What Changed)",
    excerpt: "Tableau has no native version comparison. Here's how to diff two .twb files and see every added, removed, and modified calculated field, parameter, and sheet with line-level formula changes.",
    date: "Mar 19, 2026",
    category: "Data Infrastructure",
    readTime: "6 min read",
    slug: "tableau-workbook-diff",
    gradient: "from-violet-900 via-purple-900 to-slate-950",
    accentColor: "text-violet-300",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    title: "Migrating Tableau Calculated Fields to dbt: What Nobody Tells You",
    excerpt: "The real pain of inheriting a Tableau workbook with 100+ calculated fields — LOD expressions, internal ID mappings, mixed aggregates — and a tool I built to make the migration actually manageable.",
    date: "Mar 12, 2026",
    category: "Data Infrastructure",
    readTime: "8 min read",
    slug: "tableau-to-dbt-migration",
    gradient: "from-emerald-900 via-teal-900 to-blue-950",
    accentColor: "text-emerald-300",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "AI Is Driving a 30% Surge in Data Budgets—What That Means for Your Team",
    excerpt: "dbt Labs' 2025 report found data budgets grew 30% year-over-year, with AI tooling as the #1 investment priority. Here's what's driving the surge and what to do if you haven't caught up yet.",
    date: "Mar 10, 2026",
    category: "Strategy",
    readTime: "7 min read",
    slug: "ai-data-budget-surge",
    gradient: "from-emerald-900 via-teal-900 to-blue-950",
    accentColor: "text-emerald-300",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "AI and the Semantic Layer: The Missing Link in Modern Data Infrastructure",
    excerpt: "How the semantic layer is evolving with AI, why legacy OLAP systems fall short, and which modern tools are redefining how organizations make sense of their data.",
    date: "Mar 4, 2026",
    category: "Data Infrastructure",
    readTime: "9 min read",
    slug: "ai-semantic-layer",
    gradient: "from-cyan-900 via-blue-900 to-indigo-950",
    accentColor: "text-cyan-300",
    icon: (
      <svg className="w-24 h-24 opacity-20 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
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
