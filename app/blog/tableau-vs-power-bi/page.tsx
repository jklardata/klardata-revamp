import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tableau vs. Power BI: Which BI Tool is Right for You? | Klardata",
  description: "An honest comparison of the two leading business intelligence platforms, including costs, capabilities, and ideal use cases.",
};

const relatedArticles = [
  { title: "5 Signs Your Business Needs a Data Warehouse", slug: "5-signs-business-needs-data-warehouse", category: "Data Infrastructure" },
  { title: "How to Calculate ROI on Business Intelligence Investment", slug: "roi-business-intelligence", category: "Strategy" },
];

export default function Article() {
  return (
    <div className="min-h-screen bg-[#0d1b2e]">
      {/* Nav */}
      <header className="border-b border-white/10 px-6 py-4 sticky top-0 bg-[#0d1b2e]/90 backdrop-blur z-10">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl tracking-tight">Klardata</Link>
          <Link href="/blog" className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-violet-900 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10">
          <svg className="w-64 h-64 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-400/20 text-indigo-300 border border-indigo-400/30">
              BI Tools
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">8 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">Jan 28, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
            Tableau vs. Power BI: Which BI Tool is Right for You?
          </h1>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-screen-2xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Main article */}
          <article className="lg:col-span-2 space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              This is the question I get asked most often. Both are excellent tools. Both have passionate advocates. And both will frustrate you in different ways. Here's an honest breakdown after 17+ years of working with both.
            </p>

            {/* Short answer callout */}
            <div className="rounded-2xl bg-indigo-900/30 border border-indigo-400/20 p-8">
              <p className="text-indigo-300 font-bold text-sm uppercase tracking-widest mb-3">The Short Answer</p>
              <p className="text-white text-lg leading-relaxed">
                If your organization is already in the Microsoft ecosystem—Office 365, Azure, Teams—Power BI is almost certainly the right choice. If you need best-in-class data visualization and your team includes analysts who'll build complex, custom views, Tableau is worth the premium.
              </p>
            </div>

            {/* Comparison grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-blue-900/30 border border-blue-400/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <p className="text-white font-bold">Power BI</p>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">✓</span> ~$10/user/month</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">✓</span> Deep Microsoft integration</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">✓</span> Excel-like familiarity</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">✓</span> Natural language Q&A</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-violet-900/30 border border-violet-400/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <p className="text-white font-bold">Tableau</p>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">✓</span> ~$70/user/month</li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">✓</span> Best-in-class visualizations</li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">✓</span> Broader data connectivity</li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">✓</span> Maximum analyst flexibility</li>
                </ul>
              </div>
            </div>

            {/* Detailed sections */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Cost</h2>
              <p className="text-slate-300 leading-relaxed">
                Power BI wins on price. Power BI Pro runs ~$10/user/month and is included in many Microsoft 365 plans. Tableau Creator licenses start at ~$70/user/month. For a 50-person team, that's the difference between $6,000/year and $42,000/year. That gap matters—especially if most users are consumers, not builders.
              </p>
            </div>

            {/* Visual break */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-800 to-indigo-900/50 border border-white/10 p-8 flex items-center gap-6">
              <svg className="w-16 h-16 text-indigo-400/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <div>
                <p className="text-indigo-300 font-semibold text-lg mb-1">Visualization Quality</p>
                <p className="text-slate-300">Tableau has a well-deserved reputation for producing more polished, flexible visualizations. Power BI has closed the gap significantly in recent years, but Tableau still leads for complex, custom, or publication-quality dashboards.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Ease of Use</h2>
              <p className="text-slate-300 leading-relaxed">
                For non-technical users, Power BI has the edge. Its Excel-like interface feels familiar to business users, and the natural language Q&A feature lets people ask questions in plain English. Tableau has a steeper learning curve but rewards that investment with more analytical power.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Connectivity</h2>
              <p className="text-slate-300 leading-relaxed">
                Both tools connect to hundreds of data sources. Power BI has deeper native integration with Microsoft products (SQL Server, Azure, SharePoint, Teams). Tableau connects seamlessly to a broader range of databases out of the box and tends to handle large datasets more gracefully.
              </p>
            </div>

            {/* Decision framework */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-blue-900/20 border border-blue-400/20 p-6">
                <p className="text-blue-300 font-bold mb-4">Choose Power BI if…</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• You're a Microsoft shop (Azure, Office 365)</li>
                  <li>• Budget is a primary constraint</li>
                  <li>• Your primary users are business users, not analysts</li>
                  <li>• You want embedded analytics within Microsoft apps</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-violet-900/20 border border-violet-400/20 p-6">
                <p className="text-violet-300 font-bold mb-4">Choose Tableau if…</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Your analysts need maximum flexibility</li>
                  <li>• You're working with complex, multi-source data</li>
                  <li>• Dashboard quality matters to stakeholders</li>
                  <li>• You have a dedicated analytics team</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-400/20 p-8">
              <p className="text-white font-bold text-xl mb-2">Need help choosing or implementing?</p>
              <p className="text-slate-300 mb-6">I've implemented both platforms across dozens of organizations. I can help you evaluate your specific situation and get the right tool deployed and running fast.</p>
              <Link href="/#contact" className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-semibold transition-colors">
                Get in Touch
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-slate-800/60 border border-white/10 p-6">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-4">Written by</p>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500/40 flex-shrink-0">
                  <img src="/photos/sevillapic hs.jpg" alt="Justin Leu" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold">Justin Leu</p>
                  <p className="text-blue-400 text-sm">BI & Data Consultant</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                17+ years working with Google, Pinterest, Salesforce, and 20+ Fortune 500 companies on data infrastructure and business intelligence.
              </p>
              <Link href="/#contact" className="inline-block mt-4 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors">
                Work with Justin →
              </Link>
            </div>

            <div className="rounded-2xl bg-slate-800/60 border border-white/10 p-6">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-4">Related Articles</p>
              <div className="space-y-4">
                {relatedArticles.map((article) => (
                  <Link key={article.slug} href={`/blog/${article.slug}`} className="block group">
                    <p className="text-xs text-blue-400 font-semibold uppercase tracking-wide mb-1">{article.category}</p>
                    <p className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors leading-snug">{article.title}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-700/30 to-blue-900/30 border border-blue-400/20 p-6 text-center">
              <p className="text-white font-bold mb-2">Need a BI tool implemented?</p>
              <p className="text-slate-400 text-sm mb-4">Get expert guidance on the right platform for your team.</p>
              <Link href="/#contact" className="inline-block w-full px-4 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-semibold transition-colors text-sm text-center">
                Schedule a Call
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Author footer */}
      <footer className="border-t border-white/10 bg-slate-900/50 py-12 px-6">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6">
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
