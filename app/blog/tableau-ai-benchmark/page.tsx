import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "I Tested 4 AI Models on Tableau Calculated Fields. Here's What I Found.",
  description: "A structured benchmark of GPT-4o, Gemini 1.5 Pro, Claude Sonnet 4, and Claude Haiku 4.5 across 20 Tableau calculated field tasks covering LOD expressions, date logic, table calculations, and conditional logic.",
  keywords: ["tableau ai benchmark", "ai tableau calculated fields", "gpt4o tableau", "gemini tableau", "claude tableau", "tableau lod expressions ai", "ai analytics tools", "tableau ai comparison"],
  alternates: { canonical: "https://klardata.com/blog/tableau-ai-benchmark" },
  openGraph: {
    title: "I Tested 4 AI Models on Tableau Calculated Fields. Here's What I Found. | Klardata",
    description: "A structured benchmark of GPT-4o, Gemini 1.5 Pro, Claude Sonnet 4, and Claude Haiku 4.5 across 20 Tableau calculated field tasks.",
    url: "https://klardata.com/blog/tableau-ai-benchmark",
    type: "article",
    publishedTime: "2026-04-01T00:00:00Z",
    authors: ["Justin Leu"],
    images: [{ url: "/api/og?title=I+Tested+4+AI+Models+on+Tableau+Calculated+Fields&category=AI+%26+Analytics", width: 1200, height: 630 }],
  },
  twitter: {
    title: "I Tested 4 AI Models on Tableau Calculated Fields. Here's What I Found. | Klardata",
    description: "GPT-4o, Gemini 1.5 Pro, Claude Sonnet 4, and Claude Haiku 4.5, benchmarked on 20 real Tableau tasks. The gaps are revealing.",
  },
};

const relatedArticles = [
  { title: "AI and the Semantic Layer: The Missing Link in Modern Data Infrastructure", slug: "ai-semantic-layer", category: "Data Infrastructure" },
  { title: "What Does It Mean to Formally Define a Metric? (And Why It Matters for AI Agents)", slug: "semantic-layer-metric-definitions", category: "Semantic Layer" },
  { title: "Migrating Tableau Calculated Fields to dbt: What Nobody Tells You", slug: "tableau-to-dbt-migration", category: "Data Infrastructure" },
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
            "headline": "I Tested 4 AI Models on Tableau Calculated Fields. Here's What I Found.",
            "description": "A structured benchmark of GPT-4o, Gemini 1.5 Pro, Claude Sonnet 4, and Claude Haiku 4.5 across 20 Tableau calculated field tasks.",
            "datePublished": "2026-04-01T00:00:00Z",
            "dateModified": "2026-04-01T00:00:00Z",
            "author": { "@type": "Person", "name": "Justin Leu", "url": "https://klardata.com" },
            "publisher": { "@type": "Organization", "name": "Klardata", "url": "https://klardata.com" },
            "url": "https://klardata.com/blog/tableau-ai-benchmark",
            "mainEntityOfPage": "https://klardata.com/blog/tableau-ai-benchmark",
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
      <div className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10">
          <svg className="w-64 h-64 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
              AI &amp; Analytics
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">10 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">Apr 1, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
            I Tested 4 AI Models on Tableau Calculated Fields. Here&apos;s What I Found.
          </h1>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-screen-2xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Main article */}
          <article className="lg:col-span-2 space-y-0">
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              There is a growing assumption in the data world that modern AI models can handle <a href="https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_create.htm" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200 transition-colors underline underline-offset-2">Tableau calculated fields</a> well enough to be trusted in production workflows. Teams are considering whether AI can replace or augment their Tableau developers. I wanted to test that assumption directly, not with hand-picked examples, but with a structured rubric across a set of tasks that cover the full range of what Tableau developers actually do.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              So I built a benchmark. 20 test cases, four models, scored against rubrics with partial credit. The models I tested:{" "}
              <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200 transition-colors underline underline-offset-2">ChatGPT-4o</a>,{" "}
              <a href="https://deepmind.google/models/gemini/" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200 transition-colors underline underline-offset-2">Google Gemini 1.5 Pro</a>,{" "}
              <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200 transition-colors underline underline-offset-2">Claude Sonnet 4</a>, and{" "}
              <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200 transition-colors underline underline-offset-2">Claude Haiku 4.5</a>. Here is what I found.
            </p>

            {/* Section: The Benchmark */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6 mt-10">
              <h2 className="text-2xl font-bold text-white mb-4">How the Benchmark Works</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Each test case presents a specific business metric and asks the model to write the Tableau calculated field that computes it. For example, the &quot;Customer % of Region Sales&quot; task provides a schema with <code className="bg-slate-700 px-1.5 py-0.5 rounded text-amber-300 text-sm">[Customer Name]</code>, <code className="bg-slate-700 px-1.5 py-0.5 rounded text-amber-300 text-sm">[Region]</code>, and <code className="bg-slate-700 px-1.5 py-0.5 rounded text-amber-300 text-sm">[Sales]</code>, then asks: write a calculated field that returns each customer&apos;s sales as a percentage of their region&apos;s total sales. The model responds with a formula. I then score that formula against a rubric with tiered partial credit: the correct <code className="bg-slate-700 px-1.5 py-0.5 rounded text-amber-300 text-sm">FIXED [Region]</code> approach scores 3/3, using the wrong dimension scores 2/3, and a table calculation fallback scores 0/3.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Every formula was scored manually and reviewed by a human to determine whether it is correct. Understanding <em>why</em> a formula is wrong requires Tableau expertise, not just pattern matching, which is why human review is a core part of the process. The 20 test cases span four categories:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-white/10 rounded-xl p-4">
                  <h3 className="text-amber-300 font-bold text-sm uppercase tracking-widest mb-3">LOD Expressions</h3>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    {[
                      { id: "lod-01", name: "Customer % of Region Sales", diff: "Medium" },
                      { id: "lod-02", name: "First Purchase Date Flag", diff: "Medium" },
                      { id: "lod-03", name: "Orders Per Customer", diff: "Easy" },
                      { id: "lod-04", name: "Top Customer Flag per Region", diff: "Hard" },
                      { id: "lod-05", name: "Category Total Ignoring Sub-Category", diff: "Easy" },
                    ].map((t) => (
                      <li key={t.id} className="flex items-start justify-between gap-2">
                        <span>{t.name}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${t.diff === "Hard" ? "bg-red-900/40 text-red-400" : t.diff === "Medium" ? "bg-amber-900/40 text-amber-400" : "bg-green-900/40 text-green-400"}`}>{t.diff}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-white/10 rounded-xl p-4">
                  <h3 className="text-amber-300 font-bold text-sm uppercase tracking-widest mb-3">Date / Fiscal Logic</h3>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    {[
                      { id: "date-01", name: "Fiscal Year (Feb Start)", diff: "Medium" },
                      { id: "date-02", name: "Fiscal Quarter (Feb Start)", diff: "Hard" },
                      { id: "date-03", name: "Days Since Last Order", diff: "Easy" },
                      { id: "date-04", name: "Same Period Last Fiscal Year", diff: "Hard" },
                      { id: "date-05", name: "Rolling 12-Month Sales", diff: "Medium" },
                    ].map((t) => (
                      <li key={t.id} className="flex items-start justify-between gap-2">
                        <span>{t.name}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${t.diff === "Hard" ? "bg-red-900/40 text-red-400" : t.diff === "Medium" ? "bg-amber-900/40 text-amber-400" : "bg-green-900/40 text-green-400"}`}>{t.diff}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-white/10 rounded-xl p-4">
                  <h3 className="text-amber-300 font-bold text-sm uppercase tracking-widest mb-3">Table Calculations</h3>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    {[
                      { id: "tc-01", name: "Running Total", diff: "Easy" },
                      { id: "tc-02", name: "Period-over-Period % Change", diff: "Medium" },
                      { id: "tc-03", name: "Rank Within Category", diff: "Medium" },
                      { id: "tc-04", name: "3-Month Moving Average", diff: "Medium" },
                      { id: "tc-05", name: "% of Total", diff: "Easy" },
                    ].map((t) => (
                      <li key={t.id} className="flex items-start justify-between gap-2">
                        <span>{t.name}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${t.diff === "Hard" ? "bg-red-900/40 text-red-400" : t.diff === "Medium" ? "bg-amber-900/40 text-amber-400" : "bg-green-900/40 text-green-400"}`}>{t.diff}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-white/10 rounded-xl p-4">
                  <h3 className="text-amber-300 font-bold text-sm uppercase tracking-widest mb-3">Conditional Logic</h3>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    {[
                      { id: "cond-01", name: "Null-Safe Division", diff: "Medium" },
                      { id: "cond-02", name: "Sales Tier Classification", diff: "Easy" },
                      { id: "cond-03", name: "Dynamic Metric Selector", diff: "Medium" },
                      { id: "cond-04", name: "Exclude Specific Category", diff: "Easy" },
                      { id: "cond-05", name: "Cohort Condition with Null Handling", diff: "Hard" },
                    ].map((t) => (
                      <li key={t.id} className="flex items-start justify-between gap-2">
                        <span>{t.name}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${t.diff === "Hard" ? "bg-red-900/40 text-red-400" : t.diff === "Medium" ? "bg-amber-900/40 text-amber-400" : "bg-green-900/40 text-green-400"}`}>{t.diff}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mt-6">
                Models were evaluated on formula correctness, not explanation quality. A formula that works in Tableau and handles edge cases correctly scores full marks. Plausible-sounding but broken formulas score partial or zero.
              </p>
            </div>

            {/* Section: Results */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">The Results</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                All four models scored within a narrow band, between 78% and 83%, which is both encouraging and telling. Encouraging because these models clearly understand Tableau&apos;s logic reasonably well. Telling because none of them scored perfectly, and the failures cluster around the same categories: LOD expression nuance, aggregation correctness, and null handling.
              </p>

              {/* Score summary */}
              <div className="mb-8">
                <Image
                  src="/photos/model_results.png"
                  alt="Model benchmark results: Claude Sonnet 4 83%, GPT-4o 81%, Gemini 1.5 Pro 80%, Claude Haiku 4.5 78%"
                  width={900}
                  height={400}
                  className="rounded-xl border border-white/10 w-full"
                />
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                No model is perfect out of the box. Even the top scorer (Claude Sonnet 4 at 83%) missed points on specific formula nuances. This is a reminder that AI-generated Tableau formulas should always be reviewed, especially for anything involving LOD expressions or multi-step fiscal logic.
              </p>

              <p className="text-slate-400 text-sm mb-4 uppercase tracking-widest font-bold">Dashboard snapshots</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Image
                    src="/photos/dashboard_results_claude_sonnet_4.png"
                    alt="Claude Sonnet 4 eval results dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl border border-white/10 w-full"
                  />
                  <p className="text-slate-500 text-xs mt-2 text-center">Claude Sonnet 4: 83%</p>
                </div>
                <div>
                  <Image
                    src="/photos/dashboard_results_chat_gpt4o.png"
                    alt="GPT-4o eval results dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl border border-white/10 w-full"
                  />
                  <p className="text-slate-500 text-xs mt-2 text-center">GPT-4o: 81%</p>
                </div>
                <div>
                  <Image
                    src="/photos/dashboard_results_gemini_flash_25.png"
                    alt="Gemini 2.5 Flash eval results dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl border border-white/10 w-full"
                  />
                  <p className="text-slate-500 text-xs mt-2 text-center">Gemini 1.5 Pro: 80%</p>
                </div>
                <div>
                  <Image
                    src="/photos/dashboard_results_claude_haiku45.png"
                    alt="Claude Haiku 4.5 eval results dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl border border-white/10 w-full"
                  />
                  <p className="text-slate-500 text-xs mt-2 text-center">Claude Haiku 4.5: 78%</p>
                </div>
              </div>
            </div>

            {/* Section: Where They Diverge */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Where They Diverge: LOD Expression Nuance</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The most interesting failures were not on simple tasks. All four models handled conditional logic and basic table calculations reasonably well. The gaps opened up on LOD expressions, where small differences in formula structure produce very different analytical behavior.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                The &quot;Customer % of Region Sales&quot; task is a good example. The task is conceptually simple: divide each customer&apos;s sales by the total sales for their region. But the correct Tableau formula requires a <code className="bg-slate-700 px-1.5 py-0.5 rounded text-amber-300 text-sm">FIXED</code> LOD expression with <code className="bg-slate-700 px-1.5 py-0.5 rounded text-amber-300 text-sm">[Region]</code> as the dimension. Any deviation from that specific pattern produces the wrong result, and each model made a different mistake.
              </p>

              {/* Model comparison: Claude Sonnet 4 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-purple-400/15 text-purple-300 border border-purple-400/25">Claude Sonnet 4</span>
                  <span className="text-green-400 font-bold">3/3 ✅</span>
                </div>
                <div className="bg-slate-900/70 border border-white/10 rounded-xl p-4 mb-3 font-mono text-sm text-cyan-300">
                  [Sales] / &#123;FIXED [Region] : SUM([Sales])&#125;
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Correct. The <code className="bg-slate-700 px-1.5 py-0.5 rounded text-amber-300 text-sm">FIXED [Region]</code> LOD computes the total sales for the current row&apos;s region, and dividing each row&apos;s sales by that denominator gives the correct percentage. This is exactly what the rubric calls for.
                </p>
                <Image
                  src="/photos/customer_pct_region_sales_claude_sonnet_4.png"
                  alt="Claude Sonnet 4 response for Customer % of Region Sales"
                  width={800}
                  height={500}
                  className="rounded-xl border border-white/10 w-full"
                />
              </div>

              {/* Model comparison: Gemini 2.5 Flash */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-400/15 text-blue-300 border border-blue-400/25">Gemini 2.5 Flash</span>
                  <span className="text-yellow-400 font-bold">2/3 ⚠️</span>
                </div>
                <div className="bg-slate-900/70 border border-white/10 rounded-xl p-4 mb-3 font-mono text-sm text-cyan-300">
                  SUM([Sales]) / MAX(&#123;FIXED [Region]: SUM([Sales])&#125;)
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Close, but subtly wrong. The <code className="bg-slate-700 px-1.5 py-0.5 rounded text-amber-300 text-sm">MAX()</code> wrapper around the FIXED LOD changes what gets returned: instead of each row computing the total for <em>its own region</em>, the outer <code className="bg-slate-700 px-1.5 py-0.5 rounded text-amber-300 text-sm">MAX()</code> returns the highest regional total across all regions. Every customer ends up divided by the same (largest) regional total, which is not what was asked. The FIXED expression itself is correct; the unnecessary aggregation wrapper breaks the semantics.
                </p>
                <Image
                  src="/photos/customer_pct_region_sales_gemini_45.png"
                  alt="Gemini 2.5 Flash response for Customer % of Region Sales"
                  width={800}
                  height={500}
                  className="rounded-xl border border-white/10 w-full"
                />
              </div>

              {/* Model comparison: Claude Haiku 4.5 */}
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/25">Claude Haiku 4.5</span>
                  <span className="text-red-400 font-bold">0/3 ❌</span>
                </div>
                <div className="bg-slate-900/70 border border-white/10 rounded-xl p-4 mb-3 font-mono text-sm text-cyan-300">
                  SUM([Sales]) / SUM(SUM([Sales])) OVER (PARTITION BY [Region])
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Invalid Tableau syntax. This formula uses <code className="bg-slate-700 px-1.5 py-0.5 rounded text-amber-300 text-sm">OVER (PARTITION BY)</code>, which is SQL window function syntax, not Tableau. Tableau calculated fields do not support window function clauses written this way. The formula will not parse, let alone execute. This is the most instructive failure in the benchmark: a model that knows SQL well, but conflates SQL window functions with Tableau&apos;s LOD expressions.
                </p>
                <Image
                  src="/photos/customer_pct_region_sales_claude_haiku45.png"
                  alt="Claude Haiku 4.5 response for Customer % of Region Sales"
                  width={800}
                  height={500}
                  className="rounded-xl border border-white/10 w-full"
                />
              </div>

              {/* Scoring image */}
              <div className="mt-8 mb-6">
                <p className="text-slate-400 text-sm mb-3 uppercase tracking-widest font-bold">Scoring in practice</p>
                <Image
                  src="/photos/customer_pct_region_sales_scoring_gemini_45.png"
                  alt="Manual scoring rubric for Gemini 1.5 Pro on Customer % of Region Sales"
                  width={800}
                  height={500}
                  className="rounded-xl border border-white/10 w-full"
                />
                <p className="text-slate-500 text-xs mt-2">Gemini 1.5 Pro scoring panel for Customer % of Region Sales. Each formula was manually reviewed by a human against the rubric criteria.</p>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                This scoring step is worth calling out explicitly. There is no automated test runner checking whether a formula is correct. Each response required a Tableau practitioner to read the formula, understand what it actually computes, and map it to the rubric tier. That process revealed something important: a formula can look reasonable at first glance and still be analytically wrong. The Gemini response above is a clear example. The syntax is valid Tableau. It would not throw an error. But the result would be incorrect, and a non-expert reviewer might not catch it.
              </p>

              <div className="bg-amber-900/30 border border-amber-400/20 rounded-xl p-6">
                <h3 className="text-amber-300 font-bold mb-2">Why interpretation is critical for agentic semantic layers</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Three models, three different interpretations of the same question, and only one was correct. This is exactly why an agentic semantic layer matters. When AI models generate formulas with only a field name to go on, they are guessing at grain, aggregation behavior, and the correct LOD scope. A proper semantic definition that specifies how a field should be aggregated, at what grain, and within which dimensional context dramatically narrows the space of incorrect interpretations. Without that context, even a capable model will produce plausible-looking formulas that fail silently in production.
                </p>
              </div>
            </div>

            {/* Section: What the Scores Actually Mean */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">What 80% Actually Means in Practice</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                An 80% score across 20 tasks sounds decent. But it means the models are not 100% accurate, and the failures are not evenly distributed. They concentrate in exactly the places where incorrect formulas are hardest to catch: LOD expressions that return plausible-looking but wrong values, fiscal date logic that is off by one month for a specific edge case, and null handling that silently converts nulls to zero.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                A Tableau developer reviewing AI-generated formulas needs to know which categories to scrutinize most carefully. Based on this benchmark, that list is:
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  { item: "Nested LOD expressions", detail: "All models struggled with the top customer flag per region task, which requires a nested FIXED approach. Single FIXED is the most common incorrect answer." },
                  { item: "Aggregation wrappers on FIXED LODs", detail: "Wrapping a FIXED LOD in MAX(), SUM(), or similar functions changes what gets returned in ways that are not obvious from the formula text." },
                  { item: "Fiscal year edge cases", detail: "January behavior in February-start fiscal calendars tripped up multiple models. Off-by-one errors here are silent: the formula runs, it just returns the wrong quarter for January dates." },
                  { item: "Null semantics vs. zero handling", detail: "ZN() and ISNULL() are not interchangeable. Models that defaulted to ZN() lost points because ZN() converts nulls to zero, which has different analytical meaning than a proper null check." },
                ].map((t) => (
                  <li key={t.item} className="flex items-start gap-3">
                    <span className="text-amber-400 mt-0.5 flex-shrink-0">→</span>
                    <div>
                      <span className="text-white font-semibold">{t.item}:</span>{" "}
                      <span className="text-slate-400 text-sm">{t.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section: Methodology */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Why I Built This Benchmark</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Most AI capability comparisons in the analytics space rely on subjective evaluation or on tasks easy enough for any model to solve correctly. Tableau calculated fields are a better test bed: they have clear right and wrong answers, they require knowledge specific to Tableau&apos;s execution model rather than general SQL, and the failure modes are meaningful. A wrong formula does not throw an error. It produces a wrong chart.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                I built this to identify the practical issues data practitioners will face when trying to build dashboards with AI. If the metrics are not validated and the model is not given the correct interpretation context, it will produce a confidently wrong result. That distinction matters more as BI tools move toward the agentic era.
              </p>
              <p className="text-slate-300 leading-relaxed">
                This is part of the broader work at Klardata on what it takes to deploy AI reliably in a Tableau environment. The benchmark is designed to evolve: more tasks, more models, and eventually tests that include the context a semantic layer would provide. The goal is not to rank models for marketing purposes. It is to understand where AI assistance is reliable enough to trust, where it needs human review, and what additional context needs to be defined to make AI-generated formulas consistently correct.
              </p>

              <p className="text-slate-300 leading-relaxed mt-6">
                If you want help evaluating whether your data catalog is ready for AI, I&apos;d love to talk.{" "}
                <a href="mailto:justin@klardata.com" className="text-amber-300 hover:text-amber-200 transition-colors underline underline-offset-2">Reach out to justin@klardata.com</a>{" "}
                and we can walk through your environment together.
              </p>

              <div className="bg-indigo-900/30 border border-indigo-400/20 rounded-xl p-6 mt-6">
                <h3 className="text-indigo-300 font-bold mb-2">The bigger picture</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  All four models scored within the same narrow band. That tells you something: they are drawing on similar underlying training about Tableau and SQL, and they hit the same ceiling on tasks that require deep Tableau-specific reasoning. Closing that ceiling requires better context, specifically field definitions, grain documentation, and aggregation rules. Not just a better base model. As teams think about evolving or migrating their BI tools to leverage AI, the developers closest to the data will need to think carefully about how each metric should be interpreted by the model, and make those definitions explicit before trusting AI-generated output in production.
                </p>
              </div>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            {/* Table of contents */}
            <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">In This Article</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">How the Benchmark Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">The Results</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Where They Diverge</a></li>
                <li><a href="#" className="hover:text-white transition-colors">What 80% Means in Practice</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Why I Built This</a></li>
              </ul>
            </div>

            {/* Score card */}
            <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Benchmark Scores</h3>
              <div className="space-y-3">
                {[
                  { model: "Claude Sonnet 4", score: "83%", pts: "49/59", color: "text-purple-300", bar: "bg-purple-500" },
                  { model: "GPT-4o", score: "81%", pts: "48/59", color: "text-green-300", bar: "bg-green-500" },
                  { model: "Gemini 1.5 Pro", score: "80%", pts: "47/59", color: "text-blue-300", bar: "bg-blue-500" },
                  { model: "Claude Haiku 4.5", score: "78%", pts: "46/59", color: "text-amber-300", bar: "bg-amber-500" },
                ].map((m) => (
                  <div key={m.model}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-semibold ${m.color}`}>{m.model}</span>
                      <span className="text-white text-xs font-bold">{m.score}</span>
                    </div>
                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full ${m.bar} rounded-full`} style={{ width: m.score }} />
                    </div>
                    <div className="text-slate-500 text-xs mt-0.5">{m.pts} pts</div>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-4">20 tasks · 59 total points · Apr 2026</p>
            </div>

            {/* Related articles */}
            <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedArticles.map((article) => (
                  <Link key={article.slug} href={`/blog/${article.slug}`} className="block group">
                    <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">{article.category}</div>
                    <div className="text-slate-300 text-sm leading-snug group-hover:text-white transition-colors">{article.title}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/50 border border-amber-400/20 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-2">Using AI in your Tableau workflow?</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Get a free audit of your Tableau environment to identify where AI assistance is safe to trust and where it needs review.
              </p>
              <Link href="/#contact" className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
                Book Free Audit
              </Link>
            </div>
          </aside>

        </div>
      </div>
      <AuthorBio />
    </div>
  );
}