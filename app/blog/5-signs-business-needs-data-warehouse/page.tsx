import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Signs Your Business Needs a Data Warehouse | Klardata",
  description: "Spreadsheets worked when you started, but now they're holding you back. Here's how to know when it's time to upgrade your data infrastructure.",
};

const relatedArticles = [
  { title: "Tableau vs. Power BI: Which BI Tool is Right for You?", slug: "tableau-vs-power-bi", category: "BI Tools" },
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
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10">
          <svg className="w-64 h-64 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
              Data Infrastructure
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">5 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">Feb 5, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
            5 Signs Your Business Needs a Data Warehouse
          </h1>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-screen-2xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Main article */}
          <article className="lg:col-span-2 space-y-0">
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Spreadsheets worked when you started. They're familiar, flexible, and free. But at some point, the tool that got you here starts holding you back. Here's how to know when that moment has arrived.
            </p>

            {/* Sign 1 */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cyan-400 font-bold text-sm">01</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">Your reports take too long to produce</h2>
                  <p className="text-slate-300 leading-relaxed">
                    If your team spends hours—or days—pulling together monthly reports that executives need in real time, you have a data infrastructure problem. A data warehouse centralizes all your source systems so reports generate in seconds, not shifts.
                  </p>
                </div>
              </div>
            </div>

            {/* Sign 2 */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cyan-400 font-bold text-sm">02</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">You have multiple &ldquo;sources of truth&rdquo;</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Finance has one revenue number. Sales has another. Operations has a third. When teams argue about whose spreadsheet is right instead of making decisions, you're wasting time and eroding trust. A data warehouse creates a single, agreed-upon source of truth for every metric.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual break */}
            <div className="relative rounded-2xl overflow-hidden my-8 bg-gradient-to-r from-slate-800 to-blue-900/50 border border-white/10 p-8 flex items-center gap-6">
              <svg className="w-16 h-16 text-blue-400/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <p className="text-blue-300 font-semibold text-lg mb-1">Key Insight</p>
                <p className="text-slate-300">Companies that centralize their data reporting see an average 40% reduction in time spent on manual data tasks—freeing analysts to focus on interpretation, not extraction.</p>
              </div>
            </div>

            {/* Sign 3 */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cyan-400 font-bold text-sm">03</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">Your data lives in silos</h2>
                  <p className="text-slate-300 leading-relaxed">
                    CRM data in Salesforce. Financial data in QuickBooks. Marketing data in HubSpot. Operational data in spreadsheets. When you can't connect these systems, you can't answer cross-functional questions—like which marketing channel drives the highest-LTV customers. A data warehouse integrates all your sources into one queryable layer.
                  </p>
                </div>
              </div>
            </div>

            {/* Sign 4 */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cyan-400 font-bold text-sm">04</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">Your analysis is always historical, never predictive</h2>
                  <p className="text-slate-300 leading-relaxed">
                    If you're always looking backward—last month's performance, last quarter's trends—it's because building forward-looking models requires clean, consistent, historical data. A warehouse gives you the foundation to move from reporting to forecasting.
                  </p>
                </div>
              </div>
            </div>

            {/* Sign 5 */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cyan-400 font-bold text-sm">05</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">Your team can't answer basic questions quickly</h2>
                  <p className="text-slate-300 leading-relaxed">
                    "How many customers did we acquire last month?" should take 30 seconds, not a three-day data pull. When simple questions require significant effort, you're paying an invisible tax on every business decision. A properly designed warehouse makes the routine questions trivial so your team can focus on the complex ones.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-400/20 p-8">
              <p className="text-white font-bold text-xl mb-2">Ready to get started?</p>
              <p className="text-slate-300 mb-6">If two or more of these signs sound familiar, it's time to talk. I help businesses architect and implement data warehouses that scale with your growth.</p>
              <Link href="/#contact" className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-semibold transition-colors">
                Get in Touch
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
            {/* Author card */}
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

            {/* Related articles */}
            <div className="rounded-2xl bg-slate-800/60 border border-white/10 p-6">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-4">Related Articles</p>
              <div className="space-y-4">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="block group"
                  >
                    <p className="text-xs text-blue-400 font-semibold uppercase tracking-wide mb-1">{article.category}</p>
                    <p className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors leading-snug">{article.title}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-700/30 to-blue-900/30 border border-blue-400/20 p-6 text-center">
              <p className="text-white font-bold mb-2">Need a data warehouse?</p>
              <p className="text-slate-400 text-sm mb-4">Let's talk about your data infrastructure.</p>
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
