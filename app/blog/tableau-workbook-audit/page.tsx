import Link from "next/link";
import { Metadata } from "next";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Tableau Workbook Health Check: What to Audit Before You Migrate",
  description: "Before you migrate a Tableau workbook to dbt or Power BI, audit it. Unused fields, circular dependencies, nested LODs, and deep nesting will cost you double the time if you find them mid-migration.",
  keywords: ["tableau workbook audit tool", "tableau workbook health check", "tableau unused fields checker", "tableau workbook complexity analyzer", "tableau calculated field dependencies", "tableau workbook optimization", "tableau performance audit", "tableau governance"],
  alternates: { canonical: "https://www.klardata.com/blog/tableau-workbook-audit" },
  openGraph: {
    title: "Tableau Workbook Health Check: What to Audit Before You Migrate | Klardata",
    description: "Unused fields, circular dependencies, and nested LODs will cost you double the time if found mid-migration. Audit your Tableau workbook first.",
    url: "https://www.klardata.com/blog/tableau-workbook-audit",
    type: "article",
    publishedTime: "2026-03-19T00:00:00Z",
    authors: ["Justin Leu"],
    images: [{ url: "/api/og?title=Tableau+Workbook+Health+Check&category=Data+Quality", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Tableau Workbook Health Check: What to Audit Before You Migrate | Klardata",
    description: "Unused fields, circular dependencies, and nested LODs found mid-migration cost double. Audit first.",
  },
};

const relatedArticles = [
  { title: "Migrating Tableau Calculated Fields to dbt: What Nobody Tells You", slug: "tableau-to-dbt-migration", category: "Data Infrastructure" },
  { title: "How to Document a Tableau Workbook (Without Doing It Manually)", slug: "tableau-workbook-documentation", category: "Data Infrastructure" },
];

export default function Article() {
  return (
    <div className="min-h-screen bg-[#0d1b2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Tableau Workbook Health Check: What to Audit Before You Migrate",
            "description": "Before migrating a Tableau workbook, audit it for unused fields, circular dependencies, nested LODs, and complexity issues that will derail your migration.",
            "datePublished": "2026-03-19T00:00:00Z",
            "dateModified": "2026-03-19T00:00:00Z",
            "author": { "@type": "Person", "name": "Justin Leu", "url": "https://www.klardata.com" },
            "publisher": { "@type": "Organization", "name": "Klardata", "url": "https://www.klardata.com" },
            "url": "https://www.klardata.com/blog/tableau-workbook-audit",
            "mainEntityOfPage": "https://www.klardata.com/blog/tableau-workbook-audit",
          }),
        }}
      />

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
      <div className="relative bg-gradient-to-br from-orange-900 via-amber-900 to-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10">
          <svg className="w-64 h-64 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Data Quality
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">8 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">Mar 19, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            Tableau Workbook Health Check: What to Audit Before You Migrate
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Unused calculated fields, circular dependencies, and nested LOD expressions discovered mid-migration will cost you double the time. Audit first.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-screen-2xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Main article */}
          <article className="lg:col-span-2 space-y-6">

            {/* Opening */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <p className="text-slate-300 leading-relaxed text-lg mb-4">
                You know the workbook has problems. The dashboards load slowly, some fields haven't been used in two years, and there's a calculated field that references another calculated field that references three more. But when you look at the field list, everything looks fine. Nothing is obviously broken.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Tableau won't tell you any of this. There's no built-in linter, no health score, no way to identify unused fields or trace circular dependencies from the UI. You have to discover these things the hard way, usually in the middle of a migration, when fixing them becomes doubly disruptive.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Auditing a Tableau workbook before you migrate, or before a major refactor, is the single highest-leverage thing you can do to reduce migration risk. Here's what a proper audit should check and why each issue matters.
              </p>
            </div>

            {/* Why workbooks get messy */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Why Tableau Workbooks Get Messy</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Tableau's calculated field model is optimized for flexibility, not maintainability. There's no enforced naming convention, no deprecation mechanism, no warning when you create a field that nothing uses, and no constraint on nesting depth. You can build a field that references a field that references a field ten levels deep and Tableau will render it without complaint.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Over time, workbooks accumulate:
              </p>
              <ul className="space-y-2 text-slate-400 text-sm mb-4">
                {[
                  "Fields created for one-off analyses that were never removed",
                  "Fields renamed but still referenced by their old internal IDs in other fields",
                  "LOD expressions nested inside other LOD expressions",
                  "Long IF/ELSEIF chains that could be simplified to a CASE",
                  "Division expressions missing NULLIF() or ZN() protection",
                  "DATETRUNC() or DATEDIFF() calls with hardcoded date parts that should be parameters",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-300 leading-relaxed">
                None of these are obvious from the field list. They require systematically parsing every formula and checking it against a set of rules.
              </p>
            </div>

            {/* The 8 checks */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">The 8 Checks That Matter</h2>
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    severity: "Error",
                    severityColor: "text-red-400 bg-red-400/10 border-red-400/30",
                    title: "Circular dependencies",
                    body: "Field A uses Field B, Field B uses Field C, Field C uses Field A. Tableau handles these gracefully in the UI, but they're a silent trap: if you migrate them to dbt as written, you'll get a circular dependency error on the first dbt run. These need to be resolved before migration, not during."
                  },
                  {
                    num: "02",
                    severity: "Warning",
                    severityColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
                    title: "Unused calculated fields",
                    body: "Fields that aren't referenced by any sheet, dashboard, or other calculated field. These are migration dead weight: you'd be translating SQL for logic that doesn't power anything. On average, complex legacy workbooks have 20–30% unused fields. Finding and removing them first reduces migration scope significantly."
                  },
                  {
                    num: "03",
                    severity: "Warning",
                    severityColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
                    title: "Division without null protection",
                    body: "Any expression of the form [A] / [B] where B could be zero or null. In SQL this throws a divide-by-zero error. Tableau silently returns null, so this is often invisible until you try to run the migrated SQL. Every division expression should be ZN() or NULLIF()-protected before migration."
                  },
                  {
                    num: "04",
                    severity: "Warning",
                    severityColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
                    title: "Deep nesting (4+ levels)",
                    body: "A field that references a field that references a field that references another field. At four levels or more, formulas become very difficult to trace and debug. In dbt, deep nesting usually indicates a missing intermediate model; each level of nesting should ideally be a separate, named model."
                  },
                  {
                    num: "05",
                    severity: "Warning",
                    severityColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
                    title: "Nested LOD expressions",
                    body: "A FIXED LOD inside another FIXED LOD. These are the hardest Tableau expressions to migrate: each LOD needs a separate CTE, and nested LODs mean the outer CTE references the inner CTE, which requires careful grain management in the resulting SQL. Flag these early."
                  },
                  {
                    num: "06",
                    severity: "Info",
                    severityColor: "text-blue-400 bg-blue-400/10 border-blue-400/30",
                    title: "Non-additive window functions",
                    body: "RUNNING_SUM, RANK, INDEX, WINDOW_AVG and similar table calculations. These don't have a direct SQL equivalent and require a window function with the right PARTITION BY / ORDER BY. That context lives in the visualization, not the formula. Flag these so the migration plan accounts for the manual rewrite time."
                  },
                  {
                    num: "07",
                    severity: "Info",
                    severityColor: "text-blue-400 bg-blue-400/10 border-blue-400/30",
                    title: "Long IF chains (5+ branches)",
                    body: "IF / ELSEIF chains with five or more conditions are a maintenance and readability problem. In SQL they should be CASE WHEN. They're often also a signal that a lookup table would be more appropriate. A 20-branch IF chain mapping region codes to region names belongs in a dim table, not a calc field."
                  },
                  {
                    num: "08",
                    severity: "Info",
                    severityColor: "text-blue-400 bg-blue-400/10 border-blue-400/30",
                    title: "Hardcoded DATETRUNC values",
                    body: "DATETRUNC('month', [Date]) hardcoded to a specific date part is often a business rule that should be a parameter. If the granularity ever needs to change, it requires touching every field that contains that hardcode. Flag these so they can be parameterized during the migration."
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold text-sm flex-shrink-0 mt-0.5">
                      {item.num}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-white font-semibold">{item.title}</h3>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${item.severityColor}`}>{item.severity}</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health score */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">The Health Score Formula</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Once you've run all eight checks, you need a way to communicate the overall state of the workbook to stakeholders who aren't going to read a list of 47 flagged fields. A health score does this.
              </p>
              <div className="bg-[#040d14] border border-amber-900/40 rounded-xl p-5 font-mono text-sm text-amber-300/80 mb-6">
                <div className="text-slate-500 mb-2"># Health score formula</div>
                <div>score = 100</div>
                <div>score -= (errors × 10)</div>
                <div>score -= (warnings × 3)</div>
                <div>score -= (info × 1)</div>
                <div>score = max(0, min(100, score))</div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Errors (circular dependencies) are weighted highest: they will break a migration outright. Warnings are medium weight and will likely produce incorrect SQL or require significant manual cleanup. Info items are improvement opportunities that won't break anything but should be addressed before a migration adds new complexity on top of them.
              </p>
              <p className="text-slate-300 leading-relaxed">
                A score above 80 is workbook that's ready to migrate with manageable cleanup. 60–80 means there's meaningful cleanup work that will pay off in migration time. Below 60, consider doing a workbook rationalization pass before migration: translating a mess into a different kind of mess doesn't help.
              </p>
            </div>

            {/* Complexity scoring */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Per-Field Complexity Scoring</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Beyond the workbook-level health score, each calculated field gets an individual complexity score from 0 to 100. This is useful for migration planning: it helps you identify which fields will take minutes versus hours to migrate correctly.
              </p>
              <div className="grid sm:grid-cols-4 gap-3 mb-4">
                {[
                  { range: "0–25", label: "Simple", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10", desc: "Basic arithmetic, string operations, simple IF" },
                  { range: "26–50", label: "Moderate", color: "text-blue-400 border-blue-400/30 bg-blue-400/10", desc: "Date functions, multi-level nesting, parameters" },
                  { range: "51–75", label: "Complex", color: "text-amber-400 border-amber-400/30 bg-amber-400/10", desc: "LOD expressions, nested conditionals, table calcs" },
                  { range: "76–100", label: "Critical", color: "text-red-400 border-red-400/30 bg-red-400/10", desc: "Nested LODs, circular refs, deep nesting chains" },
                ].map((tier) => (
                  <div key={tier.label} className={`rounded-xl border p-4 ${tier.color}`}>
                    <div className="font-bold text-lg mb-1">{tier.range}</div>
                    <div className="font-semibold text-sm mb-2">{tier.label}</div>
                    <p className="text-slate-400 text-xs leading-relaxed">{tier.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed">
                Sort your field list by complexity score descending before starting a migration. The critical and complex fields are where you need senior AE time. The simple and moderate ones can often be translated automatically or by a junior engineer following the pattern.
              </p>
            </div>

            {/* The tool */}
            <div className="rounded-2xl bg-amber-900/20 border border-amber-400/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Running an Instant Audit</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                I built <a href="https://tableautodbt.com/audit" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">tableautodbt.com/audit</a> to run all eight checks automatically against any .twb file. Nothing leaves your browser. Drop the file, get back a full audit report with:
              </p>
              <ul className="space-y-2 text-slate-400 text-sm mb-6">
                {[
                  "Overall health score (0–100)",
                  "Issue count by severity: errors, warnings, info",
                  "Per-field complexity ratings with the specific issues detected",
                  "Every issue explained with what it means for migration and how to fix it",
                  "Export to Markdown, JSON, or Confluence",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-300 leading-relaxed">
                The typical workflow: run the audit, export the report, fix the errors and high-severity warnings, run the audit again. Once the score is above 80, the workbook is in reasonable shape to start the migration with the dbt converter.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-600/20 to-orange-600/10 border border-amber-400/20 p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Audit your workbook before you migrate</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Drop a .twb and get a full health report in seconds: unused fields, circular deps, LOD issues, complexity scores. Free, browser-based.
              </p>
              <a
                href="https://tableautodbt.com/audit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-400 text-white rounded-xl font-semibold transition-colors"
              >
                tableautodbt.com/audit →
              </a>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Author */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg border-2 border-amber-500/40">
                  JL
                </div>
                <div>
                  <div className="text-white font-semibold">Justin Leu</div>
                  <div className="text-slate-400 text-sm">BI Consultant, 17+ years</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                I work with small data teams on data strategy, BI implementation, and migrations. I built the audit tool after repeatedly discovering workbook problems halfway through migrations.
              </p>
              <Link href="/#contact" className="text-amber-400 text-sm hover:text-amber-300 transition-colors">
                Work with Justin →
              </Link>
            </div>

            {/* Severity key */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Severity Key</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-red-400 bg-red-400/10 border border-red-400/30">Error</span>
                  <span className="text-slate-400">Will break migration: fix before starting</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-amber-400 bg-amber-400/10 border border-amber-400/30">Warning</span>
                  <span className="text-slate-400">Will produce incorrect SQL: fix soon</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-blue-400 bg-blue-400/10 border border-blue-400/30">Info</span>
                  <span className="text-slate-400">Improvement opportunity: fix before migrate</span>
                </div>
              </div>
            </div>

            {/* Health score guide */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Health Score Guide</h3>
              <div className="space-y-3 text-sm">
                {[
                  { range: "80–100", label: "Ready to migrate", color: "text-emerald-400" },
                  { range: "60–79", label: "Cleanup first", color: "text-blue-400" },
                  { range: "40–59", label: "Significant refactor", color: "text-amber-400" },
                  { range: "0–39", label: "Rationalize before migrating", color: "text-red-400" },
                ].map((item) => (
                  <div key={item.range} className="flex items-center justify-between">
                    <span className={`font-bold ${item.color}`}>{item.range}</span>
                    <span className="text-slate-400">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Related Articles</h3>
              <div className="space-y-3">
                {relatedArticles.map((article) => (
                  <Link key={article.slug} href={`/blog/${article.slug}`} className="block group">
                    <div className="text-slate-400 text-xs uppercase tracking-widest mb-1 text-amber-500/70">{article.category}</div>
                    <div className="text-slate-300 text-sm leading-snug group-hover:text-white transition-colors">{article.title}</div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
      <AuthorBio />
    </div>
  );
}