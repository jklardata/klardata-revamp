import Link from "next/link";
import { Metadata } from "next";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Migrating Tableau Calculated Fields to dbt: What Nobody Tells You",
  description: "The real pain of inheriting a Tableau workbook with 100+ calculated fields and migrating that logic to dbt — and a tool I built to make the hard parts faster.",
  keywords: ["tableau to dbt migration", "tableau calculated fields to sql", "migrate tableau to dbt", "tableau dbt conversion", "tableau analytics engineering", "twb to dbt", "tableau calculated fields dbt models"],
  alternates: { canonical: "https://klardata.com/blog/tableau-to-dbt-migration" },
  openGraph: {
    title: "Migrating Tableau Calculated Fields to dbt: What Nobody Tells You | Klardata",
    description: "The real pain of inheriting a Tableau workbook with 100+ calculated fields and migrating that logic to dbt.",
    url: "https://klardata.com/blog/tableau-to-dbt-migration",
    type: "article",
    publishedTime: "2026-03-12T00:00:00Z",
    authors: ["Justin Leu"],
    images: [{ url: "/api/og?title=Migrating+Tableau+Calculated+Fields+to+dbt&category=Data+Infrastructure", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Migrating Tableau Calculated Fields to dbt: What Nobody Tells You | Klardata",
    description: "The real pain of Tableau → dbt migrations and a tool I built to make the hard parts faster.",
  },
};

const relatedArticles = [
  { title: "AI and the Semantic Layer: The Missing Link in Modern Data Infrastructure", slug: "ai-semantic-layer", category: "Data Infrastructure" },
  { title: "5 Signs Your Business Needs a Data Warehouse", slug: "5-signs-business-needs-data-warehouse", category: "Data Infrastructure" },
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
            "headline": "Migrating Tableau Calculated Fields to dbt: What Nobody Tells You",
            "description": "The real pain of inheriting a Tableau workbook with 100+ calculated fields and migrating that logic to dbt.",
            "datePublished": "2026-03-12T00:00:00Z",
            "dateModified": "2026-03-12T00:00:00Z",
            "author": { "@type": "Person", "name": "Justin Leu", "url": "https://klardata.com" },
            "publisher": { "@type": "Organization", "name": "Klardata", "url": "https://klardata.com" },
            "url": "https://klardata.com/blog/tableau-to-dbt-migration",
            "mainEntityOfPage": "https://klardata.com/blog/tableau-to-dbt-migration",
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
      <div className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10">
          <svg className="w-64 h-64 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
              Data Infrastructure
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">8 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">Mar 12, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            Migrating Tableau Calculated Fields to dbt: What Nobody Tells You
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            The real pain of inheriting a Tableau workbook with 100+ calculated fields — and what I built to make the migration actually manageable.
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
                You've been handed a Tableau workbook. It powers the company's weekly revenue report, the sales team's pipeline view, and three dashboards the CFO looks at every Monday. There are 140 calculated fields. No documentation. The person who built it left six months ago.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Your job: migrate this to dbt. Make it version-controlled, testable, documented, and reusable. Don't break anything.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                This is not a hypothetical. It's a pattern I see constantly working with small data teams trying to modernize their stack. And the migration always hits the same wall: the calculated fields.
              </p>
            </div>

            {/* The problem */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">The Wall Everyone Hits</h2>

              <p className="text-slate-300 leading-relaxed mb-6">
                Moving tables and data sources to dbt is straightforward. You write staging models, define your sources, run <code className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">dbt test</code>. That part is well-documented and there are good patterns to follow.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                The calculated fields are where it falls apart. Tableau has its own formula language — <code className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">IIF()</code> instead of <code className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">IFF()</code>, date literals wrapped in <code className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">#</code> signs, <code className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">DATETRUNC</code> with different argument orders depending on your warehouse, and fields referenced by internal IDs like <code className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">Calculation_1634806716618883078</code> that mean nothing without the ID map.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Then there are LOD expressions. <code className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">&#123;FIXED [Customer ID] : SUM([Revenue])&#125;</code> is Tableau's way of saying "aggregate at a different grain than the view." In SQL, that's a CTE — but which CTE, at what grain, joined on what key, that all has to be worked out manually for each one.
              </p>
              <p className="text-slate-300 leading-relaxed">
                With 140 fields, that's not a morning's work. It's weeks. And most of that time isn't thinking — it's translating syntax, looking up ID mappings, and reconstructing intent from formula names like "% Attainment YTD v2 FINAL."
              </p>
            </div>

            {/* What makes it worse */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">What Makes It Harder Than It Should Be</h2>

              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Aggregates and row-level fields are mixed together",
                    body: "Tableau doesn't force you to separate SUM(Revenue) from a row-level string concatenation. They live in the same list. In dbt, they can't — aggregates need a GROUP BY in a fct_ model, row-level expressions go in a dim_ model. Sorting them manually across 100+ fields is tedious and error-prone."
                  },
                  {
                    num: "02",
                    title: "Internal field IDs are everywhere",
                    body: "Tableau auto-generates IDs like Calculation_1634806716618883078 for fields referenced by other fields. The formula you're reading says [Calculation_1634806716618883078] / [Calculation_9182736450192837465]. You have no idea what those are without building the ID map yourself from the XML."
                  },
                  {
                    num: "03",
                    title: "Table calculations simply don't translate",
                    body: "RUNNING_SUM, RANK, INDEX, WINDOW_AVG — these are Tableau table calculations. They don't have a direct SQL equivalent. The right answer is a window function, but which PARTITION BY and ORDER BY columns requires understanding what the original visualization was doing. That context is usually gone."
                  },
                  {
                    num: "04",
                    title: "You're migrating logic you didn't write",
                    body: "The hardest part isn't the SQL. It's not knowing what the field was supposed to mean. Was that IIF() a business rule or a data quality patch? Is that date filter intentional or a quirk of the original dataset? There's no one to ask."
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-bold text-sm flex-shrink-0 mt-0.5">
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

            {/* The tool */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">What I Built</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                I've been working on a tool called <a href="https://tableautodbt.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">tableautodbt.com</a> to automate the parts of this migration that are mechanical — so you can spend your time on the parts that actually require judgment.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                You upload a <code className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">.twb</code> file. The tool parses every calculated field, resolves the internal ID map, classifies each field by complexity, runs a rule-based translation pass (Snowflake or BigQuery dialect), then sends the complex ones through an AI pass. What comes out is a structured dbt package:
              </p>
              <div className="bg-[#040d08] border border-emerald-900/40 rounded-xl p-5 font-mono text-sm text-emerald-300/80 mb-6">
                <div className="text-slate-500 mb-2"># What's in the zip</div>
                <div>models/staging/stg_&#123;datasource&#125;.sql</div>
                <div>models/marts/fct_&#123;datasource&#125;.sql</div>
                <div>models/marts/dim_&#123;datasource&#125;.sql</div>
                <div>metrics.yml  <span className="text-slate-600"># MetricFlow semantic layer</span></div>
                <div>schema.yml   <span className="text-slate-600"># not_null tests, descriptions</span></div>
                <div>sources.yml</div>
                <div>translation_report.md</div>
                <div>SETUP.md</div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                The key design decision: aggregates and row-level expressions are automatically split into separate models. LOD expressions generate CTE templates that are injected directly into the <code className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">WITH</code> clause of your fct_ model. Table calculations get window function hints in the translation report. You're not starting from scratch — you're starting from 80% done, with a clear list of what still needs your judgment.
              </p>
            </div>

            {/* Who it's for */}
            <div className="rounded-2xl bg-emerald-900/20 border border-emerald-400/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Who This Is For</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                This tool is most useful for small data teams — one to three analytics engineers — who are setting up dbt for the first time and need to migrate existing Tableau workbooks as part of that effort. If you're starting fresh and don't have a semantic layer yet, this gets you most of the way there without months of manual work.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">It's less useful if:</p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-2"><span className="text-slate-600 mt-0.5">—</span>You already have a mature dbt project and just need to add a few fields (faster to write them manually)</li>
                <li className="flex items-start gap-2"><span className="text-slate-600 mt-0.5">—</span>Your workbooks are mostly table calculations (those still require manual window function rewrites)</li>
                <li className="flex items-start gap-2"><span className="text-slate-600 mt-0.5">—</span>You need Redshift or DuckDB (Snowflake and BigQuery only right now)</li>
              </ul>
            </div>

            {/* Honest limitations */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Honest Limitations</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                I want to be straightforward about what this tool doesn't do well yet, because I think the "AI writes all your code" framing does a disservice to AEs doing real migrations.
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: "Table calculations",
                    body: "RUNNING_SUM, RANK, INDEX and similar Tableau table calcs are classified as untranslatable. The tool generates window function hints and SQL templates in the report, but the PARTITION BY and ORDER BY columns have to be filled in manually. There's no way around this — the context for those choices lives in the visualization, not the formula."
                  },
                  {
                    label: "LOD inner expressions",
                    body: "FIXED LOD CTEs are generated rule-based and injected into your model, but the source table reference and join key are placeholders. You'll need to wire those up to your actual staging model and primary key. The CTE structure is correct; the plumbing is a TODO."
                  },
                  {
                    label: "Parameters",
                    body: "Tableau parameters are annotated with a comment in the SQL but not resolved. Whether they should become dbt variables, seeds, or hardcoded values is a judgment call that depends on how the parameter was used in the workbook."
                  },
                  {
                    label: "MetricFlow entity setup",
                    body: "The metrics.yml generates correct semantic model structure, but TODO_primary_entity and TODO_ID_COLUMN are placeholders. Primary key auto-detection from workbook XML join relationships isn't built yet — it's on the roadmap."
                  },
                  {
                    label: "Multi-datasource workbooks",
                    body: "Fields that reference columns from a different datasource than their own may produce incorrect source() references. Multi-datasource workbooks need a manual review pass on the staging models."
                  },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-emerald-500/30 pl-4">
                    <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently building */}
            <div className="rounded-2xl bg-blue-900/20 border border-blue-400/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Currently Building</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">This Is a Work in Progress</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                I'm actively building this and there's a lot still to improve. The rule-based translation handles common Tableau patterns well, but real workbooks are messy — unusual formulas, nested LODs, heavy parameter dependencies. The AI pass catches a lot of it but not everything.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                What's next on the roadmap: Redshift dialect, primary key auto-detection from workbook join relationships, better LOD INCLUDE handling, and eventually a Tableau Server API mode so you can pull workbooks directly without uploading a file.
              </p>
              <p className="text-slate-300 leading-relaxed">
                If you try it on a real workbook and find something that doesn't translate correctly, I genuinely want to know. The tool gets better with real migration feedback. You can reach me at <a href="mailto:justin@klardata.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">justin@klardata.com</a>.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600/20 to-teal-600/10 border border-emerald-400/20 p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Try it on your workbook</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Free to use right now while I'm collecting feedback. Upload a .twb and see what comes out.
              </p>
              <a
                href="https://tableautodbt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-semibold transition-colors"
              >
                tableautodbt.com →
              </a>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Author */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg border-2 border-emerald-500/40">
                  JL
                </div>
                <div>
                  <div className="text-white font-semibold">Justin Leu</div>
                  <div className="text-slate-400 text-sm">BI Consultant, 17+ years</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                I work with small data teams on data strategy, BI implementation, and migrations. I built tableautodbt.com after doing too many of these migrations by hand.
              </p>
              <Link href="/#contact" className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors">
                Work with Justin →
              </Link>
            </div>

            {/* Key stat */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6 text-center">
              <p className="text-emerald-300 text-5xl font-bold mb-2">80%</p>
              <p className="text-slate-400 text-sm leading-relaxed">of the mechanical translation work can be automated — the remaining 20% is where AE judgment actually matters</p>
            </div>

            {/* What still needs judgment */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">What still needs your judgment</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                {[
                  "Table calc PARTITION BY / ORDER BY columns",
                  "LOD join keys and source table references",
                  "Parameter → dbt var or hardcoded value",
                  "MetricFlow primary entity setup",
                  "Grain columns for fct_ GROUP BY",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">→</span>
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
                    <div className="text-slate-400 text-xs uppercase tracking-widest mb-1 text-emerald-500/70">{article.category}</div>
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