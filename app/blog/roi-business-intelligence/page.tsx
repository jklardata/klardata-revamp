import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate ROI on Business Intelligence Investment | Klardata",
  description: "BI projects often struggle to show value. This framework helps you quantify the impact and justify the investment to stakeholders.",
};

const relatedArticles = [
  { title: "5 Signs Your Business Needs a Data Warehouse", slug: "5-signs-business-needs-data-warehouse", category: "Data Infrastructure" },
  { title: "Tableau vs. Power BI: Which BI Tool is Right for You?", slug: "tableau-vs-power-bi", category: "BI Tools" },
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
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-emerald-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10">
          <svg className="w-64 h-64 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
              Strategy
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">6 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">Jan 15, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
            How to Calculate ROI on Business Intelligence Investment
          </h1>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-screen-2xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Main article */}
          <article className="lg:col-span-2 space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              BI projects are notoriously hard to justify with a simple ROI calculation. The benefits are real but often intangible—faster decisions, fewer errors, better alignment. Here's a framework that makes the value concrete enough to satisfy your finance team and your executive stakeholders.
            </p>

            {/* Formula callout */}
            <div className="rounded-2xl bg-emerald-900/20 border border-emerald-400/20 p-8 text-center">
              <p className="text-emerald-300 font-bold text-sm uppercase tracking-widest mb-4">The Formula</p>
              <p className="text-white text-2xl font-mono font-bold">
                ROI = (Benefits – Costs) / Costs × 100
              </p>
              <p className="text-slate-400 text-sm mt-4">The math is simple. The hard part is quantifying the benefits honestly.</p>
            </div>

            {/* Benefit 1 */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold text-sm">01</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">Time savings</h2>
                  <p className="text-slate-300 leading-relaxed">
                    This is the easiest benefit to quantify. Count the hours your team currently spends on manual reporting, data reconciliation, and ad-hoc analysis requests. Multiply by average hourly cost (including benefits and overhead). A mid-size company with 5 analysts spending 30% of their time on manual reporting might reclaim $200,000+ annually once a proper BI platform is in place.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold text-sm">02</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">Decision quality improvements</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Better data leads to better decisions. Pick one or two key decisions your business makes regularly—pricing, inventory, hiring, marketing spend—and estimate the cost of a bad decision versus a good one. Even a 5% improvement in decision quality on a $10M marketing budget is $500,000 in recovered value.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual break */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-800 to-emerald-900/30 border border-white/10 p-8 flex items-center gap-6">
              <svg className="w-16 h-16 text-emerald-400/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <div>
                <p className="text-emerald-300 font-semibold text-lg mb-1">Revenue Opportunities Identified</p>
                <p className="text-slate-300">BI often surfaces opportunities that were invisible before: customer segments with high churn risk, products with untapped demand, pricing gaps, or cross-sell patterns. Assign a conservative dollar value to one or two opportunities your BI project helped identify or capture.</p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold text-sm">04</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">Risk and error reduction</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Spreadsheet errors are costly. A study by Panko found that 88% of spreadsheets contain errors. Quantify the cost of a data error in your business—a pricing mistake, a compliance gap, an incorrect forecast—and factor in the reduction in error rate that centralized, validated data provides.
                  </p>
                </div>
              </div>
            </div>

            {/* ROI example table */}
            <div className="rounded-2xl bg-slate-800/60 border border-white/10 overflow-hidden">
              <div className="bg-slate-700/50 px-8 py-4 border-b border-white/10">
                <p className="text-white font-bold">Example: 50-person company, $150K BI investment</p>
              </div>
              <div className="p-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-slate-300">Time savings (3 analysts × 25% time reclaimed)</span>
                    <span className="text-emerald-400 font-bold">$90K/yr</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-slate-300">Improved marketing ROI (3% better allocation on $2M budget)</span>
                    <span className="text-emerald-400 font-bold">$60K/yr</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-slate-300">Error reduction and compliance</span>
                    <span className="text-emerald-400 font-bold">$30K/yr</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-emerald-900/20 rounded-xl px-4 -mx-4">
                    <span className="text-white font-bold">Total annual benefit</span>
                    <span className="text-emerald-300 font-bold text-xl">$180K/yr</span>
                  </div>
                </div>
                <p className="mt-6 text-slate-400 text-sm">ROI in Year 1: 20%. By Year 2 (with costs amortized): 140%+.</p>
              </div>
            </div>

            {/* Final tip */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-3">The most important step</h2>
              <p className="text-slate-300 leading-relaxed">
                Be conservative. Stakeholders trust ROI projections more when they're understated. Build your case on the benefits you're confident you can deliver, not the stretch goals. Then exceed expectations.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-emerald-600/10 border border-blue-400/20 p-8">
              <p className="text-white font-bold text-xl mb-2">Want help building your BI business case?</p>
              <p className="text-slate-300 mb-6">I've helped dozens of companies make the case for BI investment and then deliver the ROI they promised. Let's talk about your situation.</p>
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
              <p className="text-white font-bold mb-2">Need a BI business case?</p>
              <p className="text-slate-400 text-sm mb-4">Let's quantify the value for your stakeholders.</p>
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
