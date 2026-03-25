import Link from "next/link";
import { Metadata } from "next";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "What Does It Mean to Formally Define a Metric? (And Why It Matters for AI Agents)",
  description: "Most teams think they have defined metrics. They don't. Here's what formal metric definition actually requires: grain, filters, aggregation logic, ownership, and versioning. And why agents will expose every gap.",
  keywords: ["semantic layer metric definition", "formal metric definition", "dbt metrics", "LookML metrics", "Cube metrics", "agentic semantic layer", "metric governance", "data mesh metrics", "business metric catalog"],
  alternates: { canonical: "https://klardata.com/blog/semantic-layer-metric-definitions" },
  openGraph: {
    title: "What Does It Mean to Formally Define a Metric? (And Why It Matters for AI Agents) | Klardata",
    description: "Most teams think they have defined metrics. They don't. Here's what formal metric definition actually requires and why AI agents will expose every gap.",
    url: "https://klardata.com/blog/semantic-layer-metric-definitions",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Justin Leu"],
    images: [{ url: "/api/og?title=Formal+Metric+Definitions&category=Semantic+Layer", width: 1200, height: 630 }],
  },
  twitter: {
    title: "What Does It Mean to Formally Define a Metric? | Klardata",
    description: "Most teams think they have defined metrics. They don't. Here's what formal metric definition actually requires for AI agents.",
  },
};

const relatedArticles = [
  { title: "Why Table-Level Permissions Aren't Enough for AI Agents", slug: "semantic-layer-access-control", category: "Semantic Layer" },
  { title: "Data Lineage for AI Agents: Why Provenance Is Now a Governance Requirement", slug: "semantic-layer-lineage-traceability", category: "Semantic Layer" },
  { title: "Is Your Data Stack Built for 500 Queries in 10 Minutes?", slug: "semantic-layer-agent-query-tolerance", category: "Semantic Layer" },
  { title: "The Organizational Side of Semantic Layer Governance", slug: "semantic-layer-governance-maturity", category: "Semantic Layer" },
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
            "headline": "What Does It Mean to Formally Define a Metric? (And Why It Matters for AI Agents)",
            "description": "Most teams think they have defined metrics. They don't. Here's what formal metric definition actually requires: grain, filters, aggregation logic, ownership, and versioning. And why agents will expose every gap.",
            "datePublished": "2026-03-24T00:00:00Z",
            "dateModified": "2026-03-24T00:00:00Z",
            "author": { "@type": "Person", "name": "Justin Leu", "url": "https://klardata.com" },
            "publisher": { "@type": "Organization", "name": "Klardata", "url": "https://klardata.com" },
            "url": "https://klardata.com/blog/semantic-layer-metric-definitions",
            "mainEntityOfPage": "https://klardata.com/blog/semantic-layer-metric-definitions",
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-400/20 text-blue-300 border border-blue-400/30">
              Semantic Layer
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">9 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">Mar 24, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            What Does It Mean to Formally Define a Metric? (And Why It Matters for AI Agents)
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Most teams think they have defined metrics. They don't. Here's what formal metric definition actually requires and why AI agents will expose every gap.
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
                Ask almost any data team whether they have defined metrics and you'll get a confident yes. Ask them to show you the grain, the filter logic, and the assigned owner for their top five metrics, and the confidence disappears. What most teams have isn't a metric definition — it's a shared understanding. And shared understandings fall apart the moment a new analyst joins, a dashboard is rebuilt, or an AI agent starts querying your data without the benefit of institutional knowledge.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The difference matters enormously right now. When humans work with metrics, they can ask clarifying questions, read surrounding context, and apply judgment. When an AI agent queries a metric, it can only work with what's explicitly codified. There is no ability to infer that "revenue" means recognized revenue for North America, excluding refunds, at a monthly grain. If that isn't written down somewhere a machine can read, the agent will compute something that looks like revenue but isn't.
              </p>
              <p className="text-slate-300 leading-relaxed">
                This article walks through what formal metric definition actually requires. The five components that separate a true definition from a shared assumption are covered in detail, along with how governed semantic layer systems encode that definition in a form that both humans and agents can reliably use.
              </p>
            </div>

            {/* Shared understanding vs formal definition */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">The Gap Between "Everyone Knows" and a Formal Definition</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Shared understanding is surprisingly durable inside a stable team. When the same five analysts have been working on the same product for three years, "monthly active users" doesn't need to be written down. Everyone has absorbed the same edge cases through osmosis — that trial users don't count, that the 30-day window starts on the first of the month, that mobile and web sessions are unified. The definition lives in the heads of the people who built it.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The fragility of this arrangement only becomes visible under stress. When someone new joins and produces different numbers. When two dashboards in different tools show different monthly active user counts and nobody can figure out why. When an executive asks a natural language question to an AI assistant and gets a number that contradicts the dashboard they reviewed yesterday. Each of these is the same problem: the definition existed only in people's heads, not in the system.
              </p>
              <p className="text-slate-300 leading-relaxed">
                A formal definition is one that can be read and executed by a system without human interpretation. That means every assumption that currently lives in someone's head needs to be made explicit: the grain of the underlying table, the filter conditions, the aggregation method, the owner responsible for maintaining accuracy, and the version history that lets you understand how the definition has changed over time.
              </p>
            </div>

            {/* The 5 components */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">The 5 Components of a Complete Metric Definition</h2>
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Grain",
                    body: "Grain specifies the level of detail at which the underlying data is stored and at which the metric is computed. Is this a metric computed from an event-level table (one row per event), a session-level table (one row per session), or an account-level table (one row per account)? The grain determines what filters are valid, what joins are possible, and whether aggregation will produce double-counting. A revenue metric computed from an order-line table needs to aggregate to order before summing to avoid inflating revenue when the same order appears across multiple line items."
                  },
                  {
                    num: "02",
                    title: "Filters",
                    body: "Filters define which rows are included and excluded. This is where most informal definitions fail. 'Revenue' sounds like a self-evident concept until you specify: does it include internal test transactions? Refunded orders? Orders in non-live markets? Subscription renewals or just new contracts? Every one of these is a filter condition that needs to be explicitly stated. In a formal definition, filters are written as SQL WHERE clause logic or an equivalent semantic layer expression — not as English prose, which is ambiguous and not machine-executable."
                  },
                  {
                    num: "03",
                    title: "Aggregation Method",
                    body: "The aggregation method specifies how individual row values are combined: SUM, COUNT, COUNT DISTINCT, AVG, MEDIAN, or a more complex expression. This matters more than it seems. Revenue is a SUM, not an AVG. Monthly active users is a COUNT DISTINCT over user IDs, not a COUNT of events. A session-weighted average engagement score requires a different aggregation than a simple average. Specifying the wrong aggregation produces plausible-looking numbers that are systematically wrong — exactly the kind of error that's hardest to catch."
                  },
                  {
                    num: "04",
                    title: "Owner",
                    body: "Every metric definition needs a designated owner: a person or team responsible for ensuring the definition is accurate, keeping it updated when the underlying data changes, and resolving disputes when two dashboards produce different numbers. Without an owner, metric definitions decay silently. The underlying tables change, the definition isn't updated, and the metric continues to run without error — producing wrong numbers that nobody notices because nobody is watching. Owner assignment is an organizational act, not a technical one, but it needs to be encoded in the system."
                  },
                  {
                    num: "05",
                    title: "Version",
                    body: "Metric definitions change over time, and those changes need to be tracked. When a business decides to exclude a new category of internal transactions from revenue, that changes the number retroactively if the filter applies to historical data, or prospectively if it applies from the change date. Version history allows you to understand what a metric meant at a given point in time, reproduce historical analyses correctly, and communicate to stakeholders when a number changed because the definition changed — not because the business changed."
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 font-bold text-sm flex-shrink-0 mt-0.5">
                      {item.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why informal works for humans */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Why Informal Definitions Work for Humans But Break Agents</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Human analysts are extraordinarily good at filling in gaps. When a dashboard shows "Q3 Revenue" with no further specification, a senior analyst can draw on years of context to know which revenue definition that dashboard uses, what its known quirks are, and when it tends to lag or lead against other revenue reports. This tacit knowledge is valuable and hard-won, but it is entirely non-transferable to a machine.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                AI agents have no context inheritance. An agent querying your data warehouse has no idea that the <code className="text-blue-300 bg-blue-400/10 px-1.5 py-0.5 rounded text-sm">orders</code> table includes a test_account flag that should always be filtered out. It has no idea that <code className="text-blue-300 bg-blue-400/10 px-1.5 py-0.5 rounded text-sm">amount_usd</code> is nullable for orders placed before 2022 and that <code className="text-blue-300 bg-blue-400/10 px-1.5 py-0.5 rounded text-sm">amount_local</code> should be used for those records. It will write the most plausible SQL for the question it was asked, and if your data has undocumented edge cases, the SQL will be wrong in ways that are hard to detect.
              </p>
              <p className="text-slate-300 leading-relaxed">
                This is the fundamental reason that semantic layers matter for agentic systems. A semantic layer is the mechanism for encoding all of that tacit knowledge — all those filters, grain specifications, and aggregation rules — into a form the agent can read before it generates a query. Without it, agents are effectively doing exploratory data analysis on every query, guessing at the right definition rather than executing a known one.
              </p>
            </div>

            {/* Governed systems */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Governed Semantic Layer Systems: dbt Metrics, LookML, Cube, AtScale</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Several tools now provide the infrastructure to encode formal metric definitions. Each takes a different approach to the problem and is better suited to different organizational contexts.
              </p>
              <div className="space-y-4 mb-4">
                {[
                  { tool: "dbt Semantic Layer", desc: "Defines metrics in YAML alongside your transformation models. Metrics are version-controlled with your dbt project, tested with dbt's testing framework, and documented inline. The main advantage is that metric definitions live alongside the transformations that produce the underlying data, making inconsistency harder to introduce. The limitation is that dbt metrics are relatively new and the tooling ecosystem for querying them is still maturing." },
                  { tool: "LookML (Looker)", desc: "LookML's measure and dimension system is one of the most mature metric definition frameworks available. Every metric in LookML has an explicit type, an explicit SQL expression, an optional filter, and inherits the grain from its view definition. Looker's semantic layer has been queryable by agents via its API for years, making it one of the most agent-ready options available today." },
                  { tool: "Cube", desc: "Cube provides a semantic layer as standalone infrastructure, separate from both the transformation layer and the BI layer. Its measures and dimensions can be queried via a REST API, GraphQL, or SQL, making it particularly flexible for multi-tool environments where you want a single definition accessible by many different consumers. Cube also supports pre-aggregation, which is important for agent query tolerance." },
                  { tool: "AtScale", desc: "AtScale sits between your data warehouse and your BI tools, providing a universal semantic layer that multiple tools can query simultaneously. Its strength is in enterprises with heterogeneous BI environments where multiple tools need to share the same metric definitions without duplicating them." },
                ].map((item) => (
                  <div key={item.tool} className="bg-slate-900/50 border border-white/5 rounded-xl p-4">
                    <div className="text-blue-300 font-semibold text-sm mb-2">{item.tool}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed">
                The right choice depends on your stack and your starting point. If you're already using dbt, the dbt Semantic Layer is the natural place to start. If you're on Looker, LookML is already handling this. If you need a standalone semantic layer that works across multiple BI tools, Cube is worth evaluating.
              </p>
            </div>

            {/* Metric ownership */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Metric Ownership: Why It Matters and How to Assign It</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Metric ownership is the organizational mechanism that keeps definitions accurate over time. Without ownership, even a perfectly specified metric definition will decay as the underlying tables change and nobody updates the specification. The owner is the person who gets paged when the metric starts producing unexpected values, who reviews proposed changes to the definition, and who signs off on new versions.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Assigning ownership is harder than it sounds because many metrics are genuinely cross-functional. Revenue is defined by finance but computed from data managed by engineering and surfaced in dashboards maintained by the analytics team. In practice, the best ownership model is to designate a primary owner (the person with decision-making authority over the definition) and a list of stakeholders (people who need to be consulted on changes). The primary owner doesn't need to be the person who maintains the code — they need to be the person who can authoritatively answer "is this the right number?"
              </p>
              <p className="text-slate-300 leading-relaxed">
                In dbt, ownership is encoded using the <code className="text-blue-300 bg-blue-400/10 px-1.5 py-0.5 rounded text-sm">owner</code> meta field on metric definitions. In Looker, it's a label or description field. In Cube, it's a metadata field on the measure. The specific mechanism matters less than the practice: every metric definition should have a named human who is responsible for its accuracy.
              </p>
            </div>

            {/* Single source of truth */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">The Single Source of Truth Problem: What Creates Duplicates and How to Eliminate Them</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Metric duplication is endemic in analytics organizations. It happens gradually and always for good reasons: an analyst needs a slightly different version of revenue for a new analysis, so they create a new calculated field rather than modifying the shared one. A second team doesn't know the first team's metric exists and builds their own. A Tableau workbook defines a metric slightly differently from the Looker dashboard that's supposed to show the same number. Over time, five different systems each have their own definition of the same concept, and they all produce different numbers.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The root cause is almost always the absence of a discovery mechanism. If an analyst can't quickly find an existing metric definition that meets their needs, they'll build a new one. The solution isn't enforcement — it's discoverability. A metric catalog (whether that's dbt docs, Looker's field browser, or a standalone tool like Atlan or DataHub) makes existing definitions findable before someone creates a duplicate.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Eliminating existing duplicates requires a deliberate rationalization pass: enumerate all metric definitions across all tools, identify semantic overlaps, decide which definition is authoritative, and deprecate the others. This is organizational work, not technical work. The technical piece (pointing everything at the authoritative definition) is usually much simpler than the process of deciding which definition is authoritative and getting all stakeholders to agree.
              </p>
            </div>

            {/* Auditing current state */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">How to Audit Your Current State: A Step-by-Step Approach</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Before you can improve metric definition coverage, you need to know where you stand. A metric definition audit has four steps: inventory, classification, gap analysis, and prioritization.
              </p>
              <ul className="space-y-3 text-slate-400 text-sm mb-4">
                {[
                  "Inventory: List every metric used in production dashboards and reports. Include the tool it's defined in, the underlying data source, and the last time someone verified the definition.",
                  "Classification: For each metric, assess which of the five components (grain, filters, aggregation, owner, version) are explicitly documented. A metric that has all five is formally defined. A metric missing any of them is informally defined, regardless of how widely it's used.",
                  "Gap analysis: Identify the most critical gaps. Revenue metrics with missing filter documentation are higher risk than internal operational metrics with missing owner assignment. Rank gaps by the impact of a definition error.",
                  "Prioritization: Start with the metrics that are most frequently queried, most often the subject of disputes, or most likely to be accessed by AI agents in the near term. You don't need to formally define every metric before deploying agents — you need to formally define the ones agents will actually query.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-300 leading-relaxed">
                The output of this audit is a coverage score: what percentage of your production metrics have all five components formally defined. This is the core metric for Dimension 1 of the Semantic Layer Readiness Scorecard.
              </p>
            </div>

            {/* Agentic risk callout */}
            <div className="rounded-2xl bg-red-900/20 border border-red-400/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-400/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.072 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-red-300 font-bold text-lg">The Agentic Risk</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                An executive asks your AI analytics agent: "What was our revenue last quarter?" The agent queries the <code className="text-blue-300 bg-blue-400/10 px-1.5 py-0.5 rounded text-sm">orders</code> table, sums the <code className="text-blue-300 bg-blue-400/10 px-1.5 py-0.5 rounded text-sm">amount_usd</code> column, and returns $14.2M. The finance team's dashboard shows $12.8M. The difference: the agent didn't know to exclude test accounts, internal orders, and refunds — three filter conditions that exist as tribal knowledge but aren't encoded anywhere in the data.
              </p>
              <p className="text-slate-300 leading-relaxed">
                This is not a failure of the AI system. The AI did exactly what it was asked with the information it had. It's a failure of metric definition. When your metrics are formally defined in a semantic layer the agent can read, the agent queries the semantic layer's revenue metric — with all filters applied — instead of constructing its own definition from scratch. The number matches the dashboard because both are reading the same definition.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-400/20 p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">See how your metric definitions score</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                The Semantic Layer Readiness Scorecard assesses all five dimensions of agentic readiness, including metric definition coverage. Takes 5 minutes.
              </p>
              <a
                href="https://tableautodbt.com/scorecard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-semibold transition-colors"
              >
                Take the Scorecard →
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
                I work with data and analytics teams on semantic layer strategy, BI implementation, and agentic data readiness. I built the Semantic Layer Readiness Scorecard after seeing the same metric definition gaps cause agent failures across multiple organizations.
              </p>
              <Link href="/#contact" className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                Work with Justin →
              </Link>
            </div>

            {/* The 5 dimensions */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">5 Dimensions of Readiness</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Metric Definition Coverage", active: true },
                  { label: "Access Control Granularity", active: false },
                  { label: "Lineage & Traceability", active: false },
                  { label: "Agent Query Tolerance", active: false },
                  { label: "Governance Maturity", active: false },
                ].map((item) => (
                  <div key={item.label} className={`flex items-center gap-2 ${item.active ? 'text-blue-300' : 'text-slate-400'}`}>
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.active ? 'bg-blue-400' : 'bg-slate-600'}`} />
                    {item.label}
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
                    <div className="text-blue-500/70 text-xs uppercase tracking-widest mb-1">{article.category}</div>
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