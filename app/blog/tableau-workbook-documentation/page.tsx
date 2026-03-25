import Link from "next/link";
import { Metadata } from "next";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How to Document a Tableau Workbook (Without Doing It Manually)",
  description: "Tableau has no built-in documentation. Here's what a properly documented workbook looks like, how to generate it automatically from a .twb file, and why it matters before any migration.",
  keywords: ["tableau workbook documentation generator", "auto document tableau workbook", "document tableau calculated fields", "tableau data source documentation", "read twb file without tableau", "open twb file online", "tableau workbook metadata", "tableau documentation tool"],
  alternates: { canonical: "https://klardata.com/blog/tableau-workbook-documentation" },
  openGraph: {
    title: "How to Document a Tableau Workbook (Without Doing It Manually) | Klardata",
    description: "Tableau has no built-in documentation. Here's what a properly documented workbook looks like and how to generate it automatically from a .twb file.",
    url: "https://klardata.com/blog/tableau-workbook-documentation",
    type: "article",
    publishedTime: "2026-03-19T00:00:00Z",
    authors: ["Justin Leu"],
    images: [{ url: "/api/og?title=How+to+Document+a+Tableau+Workbook&category=Data+Infrastructure", width: 1200, height: 630 }],
  },
  twitter: {
    title: "How to Document a Tableau Workbook (Without Doing It Manually) | Klardata",
    description: "Tableau has no built-in documentation. Generate it automatically from any .twb file.",
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
            "headline": "How to Document a Tableau Workbook (Without Doing It Manually)",
            "description": "Tableau has no built-in documentation. Here's what a properly documented workbook looks like and how to generate it automatically.",
            "datePublished": "2026-03-19T00:00:00Z",
            "dateModified": "2026-03-19T00:00:00Z",
            "author": { "@type": "Person", "name": "Justin Leu", "url": "https://klardata.com" },
            "publisher": { "@type": "Organization", "name": "Klardata", "url": "https://klardata.com" },
            "url": "https://klardata.com/blog/tableau-workbook-documentation",
            "mainEntityOfPage": "https://klardata.com/blog/tableau-workbook-documentation",
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
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10">
          <svg className="w-64 h-64 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-400/20 text-blue-300 border border-blue-400/30">
              Data Infrastructure
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">7 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">Mar 19, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            How to Document a Tableau Workbook (Without Doing It Manually)
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Tableau ships with zero documentation tooling. Here's what a properly documented workbook looks like, what's actually inside a .twb file, and how to generate it automatically.
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
                Someone on your team left. They built the company's main Tableau workbook over three years. There are 90 calculated fields. Field names include things like "Rev Adj Final v2," "Customer Count (NEW)," and "Calculation_9182736450192837." Nobody knows what any of them do.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                This is the standard Tableau documentation problem. It's not a people problem: it's a tooling problem. Tableau Desktop has no built-in documentation generator. There's no "export field descriptions" button. There's no dependency viewer. There's no way to know which dashboards use which fields without clicking through every single one.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The field knowledge lives in the analyst's head, not in the workbook. When they leave, it's gone.
              </p>
            </div>

            {/* What's actually in a twb */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">What's Actually Inside a .twb File</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                A .twb file is XML. Everything you'd need for documentation is in there: formulas, data source connections, field roles, dependencies, sheet usage, parameters, filters. The information exists. The problem is it's buried in thousands of lines of XML that Tableau's own UI doesn't expose cleanly.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Open any .twb in a text editor and you'll see structures like:
              </p>
              <div className="bg-[#040d14] border border-blue-900/40 rounded-xl p-5 font-mono text-sm text-blue-300/80 mb-6 overflow-x-auto">
                <div className="text-slate-500 mb-2">{"<!-- Inside a .twb file -->"}</div>
                <div className="text-slate-400">{"<column datatype=\"integer\" name=\"[Calculation_163480671]\" role=\"measure\">"}</div>
                <div className="text-slate-400 pl-4">{"<calculation class=\"tableau\" formula=\"SUM([Revenue]) / NULLIF(SUM([Target]), 0)\" />"}</div>
                <div className="text-slate-400">{"</column>"}</div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                The formula is there. The datatype is there. The role (dimension vs measure) is there. What's missing is a human-readable view of all of it at once, with dependency chains resolved, formulas syntax-highlighted, and data sources mapped to their connections. That's what documentation tooling provides.
              </p>
            </div>

            {/* What to document */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">What a Tableau Workbook Documentation Should Cover</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Good workbook documentation isn't just a list of field names. It should answer the questions the next person will actually ask:
              </p>
              <div className="space-y-5">
                {[
                  {
                    num: "01",
                    title: "Calculated fields with full formulas",
                    body: "Every field, its formula, its datatype, and its role. Syntax-highlighted so you can actually read nested IIF() chains and FIXED LOD expressions without going cross-eyed. Internal Calculation_XXXX references should be resolved to the human-readable field names they map to."
                  },
                  {
                    num: "02",
                    title: "Field lineage: what depends on what",
                    body: "If Field A is used in Field B, which is used in Field C, that chain should be visible. When something breaks upstream, you need to know what's affected downstream. An interactive dependency graph lets you trace this in seconds rather than clicking through formulas manually."
                  },
                  {
                    num: "03",
                    title: "Data sources and connections",
                    body: "What databases does this workbook connect to? What server? What schema? What tables or custom SQL is it querying? This is critical for anyone who needs to replicate the setup or understand data freshness."
                  },
                  {
                    num: "04",
                    title: "Sheet and dashboard inventory",
                    body: "Which fields does each sheet use? Which data source does it pull from? Which filters apply? This is how you figure out what will break if you rename or remove a field."
                  },
                  {
                    num: "05",
                    title: "Parameters",
                    body: "Current values, allowed ranges, data types, and which fields reference each parameter. Parameters are often undocumented business rules in disguise."
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 font-bold text-sm flex-shrink-0 mt-0.5">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reading a twb without Tableau */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">How to Read a .twb File Without Tableau Desktop</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                One question that comes up constantly: <em className="text-blue-300">how do I open a .twb file without Tableau?</em> The answer is that a .twb is just XML and you can open it in any text editor. But that gives you raw XML, not documentation.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The practical options for reading a .twb file without Tableau Desktop are:
              </p>
              <ul className="space-y-3 text-slate-400 text-sm mb-6">
                {[
                  "Open in a text editor: readable but raw, no resolved IDs, no dependency graph",
                  "Tableau Public: free but requires a login and doesn't expose calculated field formulas in a searchable way",
                  "Write a Python script against the XML: works but requires time to build and maintain",
                  "Use a browser-based workbook tool: parses the XML, resolves IDs, and generates structured documentation without any install",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-300 leading-relaxed">
                The browser-based approach is what I built into <a href="https://tableautodbt.com/docs" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">tableautodbt.com/docs</a>. You drop a .twb file. Nothing leaves your browser, and the tool parses the XML, resolves all Calculation_XXXX internal IDs to readable names, and presents the full documentation in a browsable UI.
              </p>
            </div>

            {/* The tool */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Automatic Tableau Workbook Documentation</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                The <a href="https://tableautodbt.com/docs" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">/docs tool</a> generates documentation across six tabs once you drop a workbook in:
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { label: "Calculated Fields", body: "Every formula with syntax highlighting, datatype, role, and a dependency list showing which fields reference it and which fields it references." },
                  { label: "Field Lineage", body: "An interactive dependency graph. Click any node to expand upstream and downstream connections. This is where you find out a field being used in 12 other calculations before you rename it." },
                  { label: "Data Sources", body: "Connection type, server URL, database, schema, and a full inventory of every field in each datasource, including native fields, not just calculated ones." },
                  { label: "Sheets & Dashboards", body: "Which datasource each sheet uses, which calculated fields appear on it, and which filters are applied." },
                  { label: "Parameters", body: "Current value, allowed domain (list, range, or all), datatype, and which calculated fields reference each parameter." },
                  { label: "Filters", body: "Every filter across every sheet: field name, filter type, and included/excluded values." },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-blue-500/30 pl-4">
                    <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Export options */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Export Formats</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Documentation is only useful if it lives where people will actually look at it. The tool exports in several formats:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "JSON", body: "Full structured output for programmatic use: pipe it into your own tooling, data catalog, or CI check." },
                  { label: "Markdown", body: "Clean .md file you can drop into a GitHub repo alongside your dbt project." },
                  { label: "Confluence", body: "Pre-formatted for Confluence's storage format. Paste directly into a Confluence page." },
                  { label: "Notion", body: "Formatted for Notion's block structure. Works with the paste-as-Markdown import." },
                  { label: "Copy for AI", body: "Packages the workbook name, all formulas, data sources, and parameters into a single prompt-ready block for Claude or ChatGPT." },
                  { label: "CSV", body: "Available on the Data Sources tab: exports the full field inventory for any datasource." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-blue-500/10 border border-blue-400/20 p-4">
                    <div className="text-blue-300 font-semibold text-sm mb-1">{item.label}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* When it matters most */}
            <div className="rounded-2xl bg-blue-900/20 border border-blue-400/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">When Documentation Matters Most</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The three moments when workbook documentation goes from "nice to have" to "actually critical":
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Before a migration",
                    body: "If you're moving from Tableau to dbt, Power BI, or Looker, you need to know exactly what logic you're migrating. Running documentation first gives you an inventory: what fields exist, what they calculate, what depends on what. Without this, migrations get derailed by mystery fields discovered mid-sprint."
                  },
                  {
                    title: "When someone leaves the team",
                    body: "The first thing to do when a Tableau developer leaves is generate documentation before their laptop is wiped. Once you have the formula inventory and lineage graph, the institutional knowledge is recoverable."
                  },
                  {
                    title: "Before an audit or review",
                    body: "If you're trying to clean up a workbook, removing unused fields, simplifying nested formulas, and fixing LOD expressions, documentation is the prerequisite. You can't clean what you can't see."
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-blue-400/30 pl-4">
                    <div className="text-white font-semibold mb-1">{item.title}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-400/20 p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Generate documentation from your workbook</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Drop a .twb and get full docs: calculated fields, lineage graph, data sources, and parameters, in under a minute. Nothing leaves your browser.
              </p>
              <a
                href="https://tableautodbt.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-semibold transition-colors"
              >
                tableautodbt.com/docs →
              </a>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Author */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg border-2 border-blue-500/40">
                  JL
                </div>
                <div>
                  <div className="text-white font-semibold">Justin Leu</div>
                  <div className="text-slate-400 text-sm">BI Consultant, 17+ years</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                I work with small data teams on data strategy, BI implementation, and migrations. I built tableautodbt.com after doing too many workbook reviews with zero documentation to start from.
              </p>
              <Link href="/#contact" className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                Work with Justin →
              </Link>
            </div>

            {/* Stat */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6 text-center">
              <p className="text-blue-300 text-5xl font-bold mb-2">0</p>
              <p className="text-slate-400 text-sm leading-relaxed">built-in documentation tools in Tableau Desktop. Every team documents workbooks differently, or not at all</p>
            </div>

            {/* Quick checklist */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">What to capture</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                {[
                  "All calculated field formulas",
                  "Dependency chains (what uses what)",
                  "Data source connections and schemas",
                  "Parameter values and domains",
                  "Sheet-to-field mapping",
                  "Filters across all sheets",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Related */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Related Articles</h3>
              <div className="space-y-3">
                {relatedArticles.map((article) => (
                  <Link key={article.slug} href={`/blog/${article.slug}`} className="block group">
                    <div className="text-slate-400 text-xs uppercase tracking-widest mb-1 text-blue-500/70">{article.category}</div>
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