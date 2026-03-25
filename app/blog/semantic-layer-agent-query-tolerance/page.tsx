import Link from "next/link";
import { Metadata } from "next";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Is Your Data Stack Built for 500 Queries in 10 Minutes? Designing for Agentic Query Patterns",
  description: "Human analysts run 5-10 queries per session. Agents run hundreds. Your warehouse cost governance, schema stability, and query observability were not designed for this. Here's what needs to change.",
  keywords: ["agentic query patterns", "semantic layer agent queries", "Snowflake resource monitors", "BigQuery slot limits", "Cube semantic layer", "query observability", "data warehouse cost governance", "AI agent data infrastructure", "semantic layer versioning"],
  alternates: { canonical: "https://klardata.com/blog/semantic-layer-agent-query-tolerance" },
  openGraph: {
    title: "Is Your Data Stack Built for 500 Queries in 10 Minutes? | Klardata",
    description: "Human analysts run 5-10 queries per session. Agents run hundreds. Your data stack wasn't designed for this. Here's what needs to change.",
    url: "https://klardata.com/blog/semantic-layer-agent-query-tolerance",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Justin Leu"],
    images: [{ url: "/api/og?title=Agent+Query+Tolerance&category=Semantic+Layer", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Is Your Data Stack Built for 500 Queries in 10 Minutes? | Klardata",
    description: "Agents run hundreds of queries. Your warehouse cost governance and schema stability were not designed for this.",
  },
};

const relatedArticles = [
  { title: "What Does It Mean to Formally Define a Metric?", slug: "semantic-layer-metric-definitions", category: "Semantic Layer" },
  { title: "Why Table-Level Permissions Aren't Enough for AI Agents", slug: "semantic-layer-access-control", category: "Semantic Layer" },
  { title: "Data Lineage for AI Agents: Why Provenance Is Now a Governance Requirement", slug: "semantic-layer-lineage-traceability", category: "Semantic Layer" },
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
            "headline": "Is Your Data Stack Built for 500 Queries in 10 Minutes? Designing for Agentic Query Patterns",
            "description": "Human analysts run 5-10 queries per session. Agents run hundreds. Your warehouse cost governance, schema stability, and query observability were not designed for this. Here's what needs to change.",
            "datePublished": "2026-03-24T00:00:00Z",
            "dateModified": "2026-03-24T00:00:00Z",
            "author": { "@type": "Person", "name": "Justin Leu", "url": "https://klardata.com" },
            "publisher": { "@type": "Organization", "name": "Klardata", "url": "https://klardata.com" },
            "url": "https://klardata.com/blog/semantic-layer-agent-query-tolerance",
            "mainEntityOfPage": "https://klardata.com/blog/semantic-layer-agent-query-tolerance",
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-violet-400/20 text-violet-300 border border-violet-400/30">
              Semantic Layer
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">8 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">Mar 24, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            Is Your Data Stack Built for 500 Queries in 10 Minutes? Designing for Agentic Query Patterns
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Human analysts run 5–10 queries per session. Agents run hundreds. Your warehouse cost governance and schema stability were not designed for this.
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
                Every data warehouse, semantic layer tool, and BI platform was designed around a human usage model. Human analysts are thoughtful, deliberate, and slow. They run a few queries per session, they read results before running the next query, and they work business hours in a single time zone. Your cost monitoring, concurrency limits, and schema stability assumptions were all calibrated for this.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                AI agents are none of these things. A single agent can run hundreds of queries in minutes, operate continuously around the clock, and generate query patterns that no human would ever produce: broad exploratory queries, repeated queries with small parameter variations, and multi-step chains where each query's result feeds the next. The infrastructure that worked perfectly for your human analysts may be completely inadequate for agents, and the failures won't look like errors. They'll look like unexpected cost spikes, degraded performance for human users, and subtly wrong results that nobody catches.
              </p>
              <p className="text-slate-300 leading-relaxed">
                This article covers the four areas where agentic query patterns create new requirements: schema abstraction, rate limiting and cost governance, semantic layer API stability, and query observability.
              </p>
            </div>

            {/* How agents differ */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">How Agentic Query Patterns Differ from Human BI Usage</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The differences between human and agentic query behavior are significant enough that they require different infrastructure assumptions. Understanding the contrast is the starting point for designing tolerant systems.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {[
                  { label: "Frequency", human: "5–10 queries/session", agent: "100–1,000 queries/session" },
                  { label: "Timing", human: "Business hours, deliberate", agent: "Continuous, 24/7" },
                  { label: "Query scope", human: "Focused, known datasets", agent: "Exploratory, broad" },
                  { label: "Cost per query", human: "Predictable, human-reviewed", agent: "Unpredictable, automated" },
                  { label: "Error handling", human: "Human sees error, stops", agent: "May retry in loop" },
                  { label: "Schema sensitivity", human: "Adapts to changes", agent: "Breaks silently" },
                ].map((item) => (
                  <div key={item.label} className="bg-slate-900/50 border border-white/5 rounded-xl p-3">
                    <div className="text-violet-300 font-semibold text-xs uppercase tracking-widest mb-2">{item.label}</div>
                    <div className="flex flex-col gap-1 text-sm">
                      <div className="flex items-center gap-2"><span className="text-slate-500 w-14 flex-shrink-0">Human:</span><span className="text-slate-300">{item.human}</span></div>
                      <div className="flex items-center gap-2"><span className="text-slate-500 w-14 flex-shrink-0">Agent:</span><span className="text-violet-300 font-medium">{item.agent}</span></div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed">
                The most dangerous difference is error handling. A human who encounters a bad query result stops and investigates. An agent in a poorly designed system may interpret an error response as "no data" and continue to the next step, or may enter a retry loop that hammers the warehouse with identical failing queries. Without rate limiting and circuit breakers, a single malfunctioning agent can degrade performance for everyone.
              </p>
            </div>

            {/* Schema abstraction */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Schema Abstraction: Why Agents Need a Semantic Layer, Not Raw Table Access</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                When an agent queries raw warehouse tables directly, it's exposed to every schema change, every table rename, and every column modification that happens in the underlying data. A dbt migration that renames <code className="text-violet-300 bg-violet-400/10 px-1.5 py-0.5 rounded text-sm">amount</code> to <code className="text-violet-300 bg-violet-400/10 px-1.5 py-0.5 rounded text-sm">amount_usd</code> will break every agent query that references the old column name. The agent has no way to adapt. It will continue using the old column name until a human notices the errors and updates the agent's configuration.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                A semantic layer provides schema abstraction: the agent queries logical metrics and dimensions (stable, business-friendly names like <code className="text-violet-300 bg-violet-400/10 px-1.5 py-0.5 rounded text-sm">revenue</code> or <code className="text-violet-300 bg-violet-400/10 px-1.5 py-0.5 rounded text-sm">customer_segment</code>) rather than physical table columns (fragile, technical names that change frequently). When the underlying physical column changes, only the semantic layer definition needs to be updated. Every agent query continues to work because it's querying the stable logical name.
              </p>
              <p className="text-slate-300 leading-relaxed">
                This abstraction benefit is compounded when multiple agents query the same metrics. If five different agents each query the warehouse directly for revenue, each needs to be updated when the revenue calculation changes. If all five agents query the semantic layer's <code className="text-violet-300 bg-violet-400/10 px-1.5 py-0.5 rounded text-sm">revenue</code> metric, the change is made once in the semantic layer definition and all five agents automatically pick up the updated calculation. The semantic layer is the single point of change management.
              </p>
            </div>

            {/* Semantic layer tools */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Semantic Layer Tools as Abstraction: Cube, LookML, and dbt Metrics</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Each major semantic layer tool provides abstraction in a slightly different way, with different trade-offs for agent accessibility. Understanding the agent-specific capabilities of each tool is important for evaluating fit.
              </p>
              <div className="space-y-4 mb-4">
                {[
                  {
                    tool: "Cube",
                    desc: "Cube is designed as a standalone semantic layer specifically for programmatic access. Its REST API, GraphQL API, and SQL API make it the most agent-friendly option available. Agents can query Cube using familiar SQL syntax while getting all the benefits of semantic abstraction. Cube translates the agent's SQL into optimized warehouse queries, applies pre-aggregations for common patterns, and returns results without the agent ever touching the underlying tables. Cube also supports pre-aggregation (materialized views of common query patterns), which dramatically reduces cost for high-frequency agent queries.",
                  },
                  {
                    tool: "LookML (Looker)",
                    desc: "Looker's semantic layer is queryable by agents via the Looker API, which supports both query creation (generating queries against LookML explores) and data retrieval. The Looker API is mature and well-documented, and many AI/agent frameworks have existing Looker integrations. The limitation for agents is that LookML explores can be complex to navigate programmatically: the agent needs to understand the explore structure to construct valid queries, which requires either careful documentation or a wrapper layer.",
                  },
                  {
                    tool: "dbt Semantic Layer",
                    desc: "dbt's semantic layer is queryable via the dbt Cloud Semantic Layer API, which supports JDBC and REST interfaces. dbt Semantic Layer queries use a custom query language (MetricFlow) rather than SQL, which provides strong semantic guarantees but requires agents to generate MetricFlow queries rather than SQL. The main advantage for agent use cases is the tight integration with dbt's transformation layer: the same project that defines your transformations also defines your metrics, and changes to both are version-controlled together.",
                  },
                ].map((item) => (
                  <div key={item.tool} className="bg-slate-900/50 border border-white/5 rounded-xl p-4">
                    <div className="text-violet-300 font-semibold text-sm mb-2">{item.tool}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rate limiting */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Rate Limiting and Cost Governance: Snowflake, BigQuery, and Databricks</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Without rate limiting, a single agent in a query loop can consume the warehouse compute equivalent of your entire analytics team's monthly usage in a few hours. This is not hypothetical. It has happened to organizations that deployed agents without cost governance. The fix is unglamorous but critical: every agent service account needs explicit resource limits that prevent runaway queries from affecting cost or performance.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                In Snowflake, resource monitors allow you to set credit usage limits on warehouses and suspend them automatically when limits are reached. Dedicate a separate warehouse for agent queries (sized appropriately for the expected load) and set a monthly credit limit that you're comfortable with. When the limit is hit, the warehouse suspends and sends an alert: agent queries stop, and human queries on separate warehouses continue unaffected. In BigQuery, project-level quotas and slot reservations provide similar protection. In Databricks, cluster policies and job cluster limits control compute usage.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Rate limiting should also be applied at the semantic layer level, not just the warehouse level. If your agents query through Cube or the dbt Semantic Layer, configure rate limits there as well. Semantic layer rate limits provide a faster response to runaway queries (they reject requests before they reach the warehouse) and can be more granular: you can limit specific agent service accounts independently rather than applying limits to the entire agent warehouse.
              </p>
            </div>

            {/* Stable APIs */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Stable APIs and Versioning: What "Fully Stable + Versioned" Actually Means</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                A stable semantic layer API is one that agents can rely on not to change unexpectedly. This sounds simple but requires deliberate work: API versioning, a deprecation process, and a commitment to backward compatibility within a version. Without these, a semantic layer upgrade can break every agent that queries it simultaneously. Because agents run continuously, the breakage may happen in the middle of a critical business process.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Versioning for semantic layer APIs means that the URL or endpoint for an API includes a version identifier (e.g., <code className="text-violet-300 bg-violet-400/10 px-1.5 py-0.5 rounded text-sm">/api/v2/metrics</code>), and that breaking changes are only introduced in new versions while old versions remain available for a defined deprecation period. This allows agents to be updated to the new API version on a controlled schedule rather than being forced to update simultaneously with the API change.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Beyond API versioning, metric definition stability matters. A metric that changes its calculation without a version bump will silently change agent outputs. The solution is to treat metric definitions as versioned contracts: every change to a metric definition increments its version, and agents can be configured to use a specific version of a metric definition, insulating them from changes until they've been explicitly updated to use the new version.
              </p>
            </div>

            {/* Query observability */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Query Observability: Logging, Dashboards, and Real-Time Alerting</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                You can't govern what you can't see. Query observability for agentic systems means having a real-time view of what queries agents are running, how much they cost, how long they take, and whether they're succeeding or failing. This is the operational foundation for catching runaway queries before they become cost incidents, identifying inefficient query patterns before they compound, and demonstrating responsible AI data use to stakeholders.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                At the warehouse level, Snowflake's QUERY_HISTORY view, BigQuery's INFORMATION_SCHEMA.JOBS, and Databricks' query history tables provide the raw data for observability. Tools like Snowflake's Query Profile, the open-source dbt Artifacts, or commercial tools like re_data and Monte Carlo build dashboards on top of these raw tables. For agent-specific observability, you'll want dashboards filtered to your agent service accounts showing: queries per hour, average cost per query, P95 latency, and error rate.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Real-time alerting is the critical piece that most teams build last and should build first. A Slack alert or PagerDuty notification when an agent's hourly query count exceeds a threshold, when a single query exceeds a cost threshold, or when an agent's error rate rises above a baseline allows you to respond to incidents while they're still small. Without alerting, you discover problems in your AWS bill at the end of the month, which is exactly the wrong time.
              </p>
            </div>

            {/* The 500-query scenario */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">The 500-Query Scenario Across Maturity Tiers</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                What actually happens when an agent runs 500 queries in 10 minutes depends entirely on your infrastructure maturity. The difference between the scenarios below is not the agent's behavior. It's the infrastructure that surrounds it.
              </p>
              <div className="space-y-4">
                {[
                  {
                    tier: "No infrastructure",
                    color: "border-red-400/30 bg-red-400/5",
                    labelColor: "text-red-400",
                    scenario: "500 queries hit the warehouse directly on a shared role. Performance degrades for all users. Cost spikes are not detected until the monthly bill. Some queries produce wrong results because an upstream schema change happened mid-run. Nobody knows what the agent queried or why.",
                  },
                  {
                    tier: "Basic rate limiting",
                    color: "border-amber-400/30 bg-amber-400/5",
                    labelColor: "text-amber-400",
                    scenario: "500 queries hit the warehouse on a dedicated agent warehouse with a credit limit. When the limit is hit, the agent warehouse suspends and an alert fires. Human users are unaffected. Cost is contained. But there's still no visibility into which queries failed, and schema changes can still break agent queries silently.",
                  },
                  {
                    tier: "Semantic layer + observability",
                    color: "border-emerald-400/30 bg-emerald-400/5",
                    labelColor: "text-emerald-400",
                    scenario: "500 queries go through the semantic layer. Pre-aggregations serve common query patterns without hitting the warehouse. Rate limits at the semantic layer reject queries that exceed per-minute thresholds. Observability dashboards show real-time query volume and cost. Schema changes are absorbed by the semantic layer without breaking agent queries. All 500 queries are logged with the intent, the generated SQL, and the result.",
                  },
                ].map((item) => (
                  <div key={item.tier} className={`border rounded-xl p-4 ${item.color}`}>
                    <div className={`font-semibold text-sm mb-2 ${item.labelColor}`}>{item.tier}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.scenario}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost incident callout */}
            <div className="rounded-2xl bg-violet-900/20 border border-violet-400/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-400/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-violet-300 font-bold text-lg">The Cost Incident</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                A sales operations agent is asked to generate a market analysis report. The agent interprets the request as requiring a broad exploration of the customer database, running 800 queries over 20 minutes against raw warehouse tables with no rate limiting. Each query scans 500GB of data. The total scan: 400TB. The total Snowflake cost: $2,800, for a single request that a human analyst would have completed with 3 targeted queries totaling 5GB.
              </p>
              <p className="text-slate-300 leading-relaxed">
                A semantic layer with pre-aggregations would have served all 800 conceptual queries from cached aggregates, at a total warehouse cost near zero. A rate limiter would have halted the run after 50 queries and sent an alert. Neither was in place. The incident was discovered at month-end billing review.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-violet-600/20 to-purple-600/10 border border-violet-400/20 p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">How query-tolerant is your stack?</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                The Semantic Layer Readiness Scorecard assesses your agent query tolerance alongside four other dimensions of agentic readiness. Takes 5 minutes.
              </p>
              <a
                href="https://tableautodbt.com/scorecard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-violet-500 hover:bg-violet-400 text-white rounded-xl font-semibold transition-colors"
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
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg border-2 border-violet-500/40">
                  JL
                </div>
                <div>
                  <div className="text-white font-semibold">Justin Leu</div>
                  <div className="text-slate-400 text-sm">BI Consultant, 17+ years</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                I work with data teams on semantic layer strategy, warehouse cost governance, and agentic readiness. Query cost incidents from poorly governed agents are entirely preventable.
              </p>
              <Link href="/#contact" className="text-violet-400 text-sm hover:text-violet-300 transition-colors">
                Work with Justin →
              </Link>
            </div>

            {/* Cost governance */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Cost Governance Tools</h3>
              <div className="space-y-2 text-sm text-slate-400">
                {[
                  "Snowflake: Resource monitors",
                  "BigQuery: Slot reservations",
                  "Databricks: Cluster policies",
                  "Cube: Semantic layer rate limits",
                  "Datadog / Monte Carlo: Alerting",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-violet-500 flex-shrink-0">→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 5 dimensions */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">5 Dimensions of Readiness</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Metric Definition Coverage", active: false },
                  { label: "Access Control Granularity", active: false },
                  { label: "Lineage & Traceability", active: false },
                  { label: "Agent Query Tolerance", active: true },
                  { label: "Governance Maturity", active: false },
                ].map((item) => (
                  <div key={item.label} className={`flex items-center gap-2 ${item.active ? 'text-violet-300' : 'text-slate-400'}`}>
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.active ? 'bg-violet-400' : 'bg-slate-600'}`} />
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
                    <div className="text-violet-500/70 text-xs uppercase tracking-widest mb-1">{article.category}</div>
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