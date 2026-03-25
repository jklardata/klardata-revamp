import Link from "next/link";
import { Metadata } from "next";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How to Compare Two Tableau Workbooks (And Actually See What Changed)",
  description: "Tableau has no native version comparison. Here's how to diff two .twb files: calculated fields, parameters, data sources, and sheets, with line-level formula changes. Free, browser-based.",
  keywords: ["tableau workbook diff tool", "compare tableau workbooks", "tableau workbook version comparison", "compare twb files", "tableau formula diff", "tableau twb diff", "tableau workbook compare tool", "tableau calculated field changes"],
  alternates: { canonical: "https://klardata.com/blog/tableau-workbook-diff" },
  openGraph: {
    title: "How to Compare Two Tableau Workbooks (And Actually See What Changed) | Klardata",
    description: "Tableau has no native version comparison. Here's how to diff two .twb files with line-level formula changes. Free, browser-based.",
    url: "https://klardata.com/blog/tableau-workbook-diff",
    type: "article",
    publishedTime: "2026-03-19T00:00:00Z",
    authors: ["Justin Leu"],
    images: [{ url: "/api/og?title=How+to+Compare+Two+Tableau+Workbooks&category=Data+Infrastructure", width: 1200, height: 630 }],
  },
  twitter: {
    title: "How to Compare Two Tableau Workbooks (And Actually See What Changed) | Klardata",
    description: "Tableau has no native version comparison. Diff two .twb files and see every added, removed, and modified field.",
  },
};

const relatedArticles = [
  { title: "Migrating Tableau Calculated Fields to dbt: What Nobody Tells You", slug: "tableau-to-dbt-migration", category: "Data Infrastructure" },
  { title: "Tableau Workbook Health Check: What to Audit Before You Migrate", slug: "tableau-workbook-audit", category: "Data Quality" },
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
            "headline": "How to Compare Two Tableau Workbooks (And Actually See What Changed)",
            "description": "Tableau has no native version comparison. Here's how to diff two .twb files with line-level formula changes.",
            "datePublished": "2026-03-19T00:00:00Z",
            "dateModified": "2026-03-19T00:00:00Z",
            "author": { "@type": "Person", "name": "Justin Leu", "url": "https://klardata.com" },
            "publisher": { "@type": "Organization", "name": "Klardata", "url": "https://klardata.com" },
            "url": "https://klardata.com/blog/tableau-workbook-diff",
            "mainEntityOfPage": "https://klardata.com/blog/tableau-workbook-diff",
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
      <div className="relative bg-gradient-to-br from-violet-900 via-purple-900 to-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10">
          <svg className="w-64 h-64 text-violet-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-violet-400/20 text-violet-300 border border-violet-400/30">
              Data Infrastructure
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">6 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">Mar 19, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            How to Compare Two Tableau Workbooks (And Actually See What Changed)
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Tableau ships with no version comparison tooling. Here's how to diff two .twb files and see every formula change, field addition, and parameter modification side by side.
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
                The revenue number changed between last month's report and this month's. Same workbook, different result. Something changed: a formula was updated, a filter was modified, or a data source connection was swapped. Nobody left a comment. Nobody sent an email. The workbook was just published over the previous version.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                This is a scenario that every team using Tableau for anything business-critical will encounter. And Tableau has no native way to answer the question "what changed between version A and version B?"
              </p>
              <p className="text-slate-300 leading-relaxed">
                To compare two Tableau workbooks, you have a few options, ranging from "technically possible but extremely tedious" to "purpose-built for this." Here's what each approach looks like and when to use it.
              </p>
            </div>

            {/* The version control problem */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Why Tableau Doesn't Have Version Control</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                .twb files are XML, which means they can technically be stored in git. Some teams do this: commit the .twb every time it's published, and use git diff to see XML changes. The problem is that Tableau's XML is not designed for human readability. A minor formula change produces a diff that includes dozens of lines of changed attribute ordering, internal ID regeneration, and thumbnail image data.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Tableau Server has a version history feature, but it's limited to restoring previous versions: it doesn't show you what changed between them. Tableau Cloud is similar. TabCompare, Tableau's official CLI comparison tool, compares visual output across Server environments, not formula content. None of these answer "what calculation was modified?"
              </p>
            </div>

            {/* What a diff should show */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">What a Useful Tableau Diff Should Show</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                A useful workbook diff needs to operate at the semantic level, comparing the fields, formulas, and structure, not at the XML byte level. Specifically, it should answer:
              </p>
              <div className="space-y-4">
                {[
                  {
                    category: "Calculated Fields",
                    icon: "📐",
                    items: [
                      "Which fields were added in the new version",
                      "Which fields were removed",
                      "Which fields were modified, with a line-level formula diff showing exactly which lines changed",
                    ]
                  },
                  {
                    category: "Parameters",
                    icon: "🎛️",
                    items: [
                      "Added or removed parameters",
                      "Changed default values, allowed ranges, or domain types",
                    ]
                  },
                  {
                    category: "Data Sources",
                    icon: "🗄️",
                    items: [
                      "New or removed connections",
                      "Changed server URLs or database/schema references",
                      "Added or removed native fields",
                    ]
                  },
                  {
                    category: "Sheets & Filters",
                    icon: "📊",
                    items: [
                      "New, removed, or renamed sheets and dashboards",
                      "Changed filters: field, type, or included values",
                    ]
                  },
                ].map((section) => (
                  <div key={section.category} className="border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">{section.icon}</span>
                      <h3 className="text-white font-semibold">{section.category}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                          <span className="text-violet-500 mt-0.5 flex-shrink-0">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Line-level diff */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why Line-Level Formula Diffs Matter</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                For modified fields, knowing "Profit Ratio was changed" isn't enough. You need to know which part of the formula changed. Consider a field like:
              </p>
              <div className="bg-[#040d14] border border-violet-900/40 rounded-xl p-5 font-mono text-sm mb-4">
                <div className="text-slate-500 mb-2 text-xs"># Before</div>
                <div className="text-slate-300">ZN(SUM([Profit])) / NULLIF(SUM([Revenue]), 0)</div>
                <div className="mt-4 text-slate-500 mb-2 text-xs"># After</div>
                <div><span className="bg-red-500/20 text-red-300 px-0.5">ZN(SUM([Profit]))</span> / NULLIF(<span className="bg-red-500/20 text-red-300 px-0.5">SUM([Revenue])</span>, 0)</div>
                <div><span className="bg-emerald-500/20 text-emerald-300 px-0.5">SUM([Profit])</span> / NULLIF(<span className="bg-emerald-500/20 text-emerald-300 px-0.5">SUM([Revenue]) - SUM([Returns])</span>, 0)</div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                At the workbook level, "Profit Ratio was modified" tells you something changed. The line diff tells you the ZN() null protection was removed and the denominator now subtracts returns. That's a meaningful business logic change, and the difference between a harmless tweak and a number that's now 5% off every Monday morning.
              </p>
            </div>

            {/* Use cases */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">When to Use a Workbook Diff</h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Post-publish QA",
                    body: "Before publishing a new version of a workbook that powers a critical report, diff it against the current published version. Any unexpected changes, like fields that were accidentally modified or filters that changed, show up immediately."
                  },
                  {
                    title: "Investigating metric changes",
                    body: "Revenue is down 3% this week but upstream data looks clean. Compare this week's workbook against last week's. If the Profit Ratio formula changed on Monday, you've found your answer in two minutes instead of two hours."
                  },
                  {
                    title: "Handoff documentation",
                    body: "When handing off a workbook to another team or to a client, run a diff against the version they received originally. The diff becomes the changelog: a precise record of what you changed and why."
                  },
                  {
                    title: "Migration validation",
                    body: "After migrating logic from Tableau to dbt, compare the pre-migration workbook against a post-migration stub to confirm all calculated fields were accounted for. Any field that's in the original but missing from the migrated version shows up as a removal."
                  },
                  {
                    title: "Auditing third-party changes",
                    body: "If a Tableau contractor or external consultant made changes to your workbook, run a diff against the version you gave them. You get a precise list of every formula they touched. Nothing slips through."
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-violet-400 flex-shrink-0 mt-2" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The tool */}
            <div className="rounded-2xl bg-violet-900/20 border border-violet-400/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">How to Compare Two Tableau Workbooks</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                I built <a href="https://tableautodbt.com/diff" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">tableautodbt.com/diff</a> specifically for this. Upload two .twb files. Nothing is sent to a server; everything stays in your browser, and the tool produces a structured diff across all five categories.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                The output includes:
              </p>
              <ul className="space-y-2 text-slate-400 text-sm mb-6">
                {[
                  "A change summary strip showing totals by category (e.g. 3 added, 1 removed, 7 modified)",
                  "Full list of added and removed fields with formulas",
                  "Modified fields with side-by-side line-level formula diffs",
                  "Parameter changes with old vs new values",
                  "Data source changes including server and schema",
                  "Sheet and filter additions, removals, and modifications",
                  "Filter by change type: show only added, removed, or modified",
                  "Copy individual formula changes for tickets or Slack messages",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-violet-500 mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-300 leading-relaxed">
                No Tableau Desktop, no Tableau Server, no login required. Upload two files, read the diff.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-violet-600/20 to-purple-600/10 border border-violet-400/20 p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Compare two workbook versions now</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Upload two .twb files and see every added, removed, and modified field with line-level formula diffs. Free, browser-based, no login.
              </p>
              <a
                href="https://tableautodbt.com/diff"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-violet-500 hover:bg-violet-400 text-white rounded-xl font-semibold transition-colors"
              >
                tableautodbt.com/diff →
              </a>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Author */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg border-2 border-violet-500/40">
                  JL
                </div>
                <div>
                  <div className="text-white font-semibold">Justin Leu</div>
                  <div className="text-slate-400 text-sm">BI Consultant, 17+ years</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                I work with small data teams on data strategy, BI implementation, and migrations. I built the diff tool after spending too many hours manually hunting for what changed in a workbook.
              </p>
              <Link href="/#contact" className="text-violet-400 text-sm hover:text-violet-300 transition-colors">
                Work with Justin →
              </Link>
            </div>

            {/* What gets diffed */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">What Gets Diffed</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                {[
                  "Calculated fields (with line diffs)",
                  "Parameters",
                  "Data sources & connections",
                  "Sheets & dashboards",
                  "Filters",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-violet-500 mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Change types */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Change Types</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-slate-400">Added: new in version B</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-400 flex-shrink-0" />
                  <span className="text-slate-400">Removed: present in A, gone in B</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-slate-400">Modified: formula or value changed</span>
                </div>
              </div>
            </div>

            {/* Related */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Related Articles</h3>
              <div className="space-y-3">
                {relatedArticles.map((article) => (
                  <Link key={article.slug} href={`/blog/${article.slug}`} className="block group">
                    <div className="text-slate-400 text-xs uppercase tracking-widest mb-1 text-violet-500/70">{article.category}</div>
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