import Link from "next/link";
import { Metadata } from "next";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Data Lineage for AI Agents: Why Provenance Is Now a Governance Requirement",
  description: "When a human analyst gets a number wrong, you can ask them how they calculated it. When an agent gets a number wrong, you need lineage. Here's what end-to-end traceability requires.",
  keywords: ["data lineage AI agents", "column-level lineage", "dbt lineage", "data catalog lineage", "data observability", "Monte Carlo data", "impact analysis dbt", "agentic data governance", "data provenance"],
  alternates: { canonical: "https://klardata.com/blog/semantic-layer-lineage-traceability" },
  openGraph: {
    title: "Data Lineage for AI Agents: Why Provenance Is Now a Governance Requirement | Klardata",
    description: "When a human analyst gets a number wrong, you can ask them. When an agent gets a number wrong, you need lineage. Here's what end-to-end traceability requires.",
    url: "https://klardata.com/blog/semantic-layer-lineage-traceability",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Justin Leu"],
    images: [{ url: "/api/og?title=Data+Lineage+for+AI+Agents&category=Semantic+Layer", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Data Lineage for AI Agents: Why Provenance Is Now a Governance Requirement | Klardata",
    description: "When an agent gets a number wrong, you need lineage. Here's what end-to-end traceability for agentic semantic layers requires.",
  },
};

const relatedArticles = [
  { title: "What Does It Mean to Formally Define a Metric?", slug: "semantic-layer-metric-definitions", category: "Semantic Layer" },
  { title: "Why Table-Level Permissions Aren't Enough for AI Agents", slug: "semantic-layer-access-control", category: "Semantic Layer" },
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
            "headline": "Data Lineage for AI Agents: Why Provenance Is Now a Governance Requirement",
            "description": "When a human analyst gets a number wrong, you can ask them how they calculated it. When an agent gets a number wrong, you need lineage. Here's what end-to-end traceability requires.",
            "datePublished": "2026-03-24T00:00:00Z",
            "dateModified": "2026-03-24T00:00:00Z",
            "author": { "@type": "Person", "name": "Justin Leu", "url": "https://klardata.com" },
            "publisher": { "@type": "Organization", "name": "Klardata", "url": "https://klardata.com" },
            "url": "https://klardata.com/blog/semantic-layer-lineage-traceability",
            "mainEntityOfPage": "https://klardata.com/blog/semantic-layer-lineage-traceability",
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
      <div className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10">
          <svg className="w-64 h-64 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
              Semantic Layer
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">9 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">Mar 24, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            Data Lineage for AI Agents: Why Provenance Is Now a Governance Requirement
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            When a human analyst gets a number wrong, you can ask them how they calculated it. When an agent gets a number wrong, you need lineage.
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
                Lineage has always been important in data engineering. But for most organizations, it's been a nice-to-have: something you care about when onboarding new engineers, when debugging data quality issues, or when someone questions a number in a board deck. For human-driven analytics, the absence of lineage is an inconvenience. For agentic analytics, it's a governance failure.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The reason is accountability. When a human analyst produces an incorrect KPI, there's a clear chain of responsibility: the analyst made a mistake, you can ask them to explain their methodology, and you can trace the error through their logic. When an agent produces an incorrect KPI, that chain doesn't exist unless you've built it. The agent's reasoning is not available for inspection the way a human's is. Lineage is the mechanism that creates accountability for agent-generated numbers: the ability to trace any metric back to its source data, through every transformation, so that an error can be diagnosed, a correction can be made, and a regulator can be satisfied.
              </p>
              <p className="text-slate-300 leading-relaxed">
                This article walks through what end-to-end lineage requires for agentic systems: the difference between column-level and table-level lineage, how dbt and catalog tools contribute different pieces, how automated impact analysis prevents downstream breakage, and what it means to make lineage accessible programmatically to agents themselves.
              </p>
            </div>

            {/* Nice-to-have vs non-negotiable */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Why Lineage Was Nice-to-Have for Humans But Non-Negotiable for Agents</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                A human analyst working on a quarterly revenue report carries a mental model of the data pipeline. They know which source system feeds which table, which transformations are applied in dbt, and which filters are applied in the BI layer. This mental model is imperfect and informal, but it exists. When something goes wrong, the analyst can use this knowledge to navigate backwards through the pipeline and find the problem.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                An AI agent has no such mental model. It can read documentation if it's written and accessible, but it can't draw on years of experience with the pipeline. More importantly, an agent can be running dozens of queries simultaneously across different parts of the data warehouse, without any awareness of how those queries relate to each other or what the dependencies between the underlying tables are. When an agent query produces a wrong answer, you can't ask the agent to trace its reasoning through the pipeline. You need the lineage to exist as structured data that can be queried independently.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Regulatory requirements are accelerating this shift. GDPR, CCPA, and emerging AI governance regulations increasingly require organizations to demonstrate that AI-generated outputs can be traced back to source data. This isn't a theoretical future requirement. It's a present one for organizations in regulated industries. Lineage is the infrastructure that makes that demonstration possible.
              </p>
            </div>

            {/* Column vs table lineage */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Column-Level vs. Table-Level Lineage: Why the Difference Matters</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Table-level lineage tells you which tables depend on which other tables. Model B depends on table A. Dashboard C depends on model B. This is useful for understanding the broad shape of the pipeline and for knowing that if table A changes, something downstream might break. But it doesn't tell you which columns in model B use which columns from table A, which makes it inadequate for PII tracking, impact analysis, and compliance.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Column-level lineage traces individual columns from source to destination. It tells you that the <code className="text-emerald-300 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">customer_email</code> column in <code className="text-emerald-300 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">mart_customers</code> comes from <code className="text-emerald-300 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">raw_crm.contacts.email</code>, was hashed in the staging model, and is exposed (still hashed) in the final mart. That full column-level path is what GDPR's right-to-erasure requirement asks you to produce: when a user requests deletion of their data, you need to know every column in every table that contains a derivation of their data.
              </p>
              <p className="text-slate-300 leading-relaxed">
                For agents, column-level lineage also enables better error diagnosis. When an agent returns an incorrect metric, knowing that the metric's component columns trace back to specific source columns, and knowing which of those source columns recently changed or started failing quality checks, lets you pinpoint the root cause at the column level rather than having to investigate the entire upstream pipeline.
              </p>
            </div>

            {/* dbt lineage */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">dbt's Built-In Lineage: What It Gives You and Its Limits</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                dbt generates table-level lineage automatically from the <code className="text-emerald-300 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">ref()</code> and <code className="text-emerald-300 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">source()</code> functions in your model definitions. Every time a model uses <code className="text-emerald-300 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">ref('other_model')</code>, dbt records a dependency edge. The resulting lineage graph is visible in dbt docs and accessible via dbt's metadata API. For organizations that have their full transformation layer in dbt, this provides automatic, always-current table-level lineage at no additional operational cost.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                dbt's lineage has important limitations for agentic use cases. It covers only what's in your dbt project: models, sources, seeds, exposures. It doesn't know about transformations that happen outside of dbt (in Fivetran, in Python notebooks, in stored procedures, or in other tools). And it's table-level, not column-level: dbt can tell you that model B depends on model A, but not that column X in model B comes from column Y in model A. Column-level lineage in dbt requires either parsing the SQL in each model (which dbt does not do natively) or using a catalog tool that adds this capability.
              </p>
              <p className="text-slate-300 leading-relaxed">
                dbt Cloud's Discovery API exposes lineage data programmatically, which is significant for agentic use cases. An agent that can query the dbt metadata API can retrieve the lineage for any model before constructing a query, allowing it to understand the provenance of the data it's working with and surface that provenance in its responses. This is the foundation for agents that can explain "here's how this number was calculated and where the data came from."
              </p>
            </div>

            {/* Catalog tools */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Data Catalog Tools: What They Add and When You Need Them</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Data catalog tools (Atlan, DataHub, Alation, and OpenMetadata are the major options) extend lineage beyond what dbt provides by collecting lineage from all the tools in your data stack and providing a unified view. A catalog connected to your data warehouse, dbt, Fivetran, Looker, and Tableau can trace a metric from a dashboard cell back through the BI layer, through the dbt transformation, through the Fivetran sync, to the source system, all in a single lineage graph.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The most important capability for agentic use cases is programmatic lineage access via API. A catalog's UI is useful for humans who want to browse lineage interactively. Agents need the same information available as structured data they can query. Atlan, DataHub, and OpenMetadata all provide GraphQL or REST APIs for lineage queries. An agent that can query these APIs can retrieve the full upstream lineage for any metric before generating a response, enabling it to include provenance information in its answers and to flag metrics whose upstream models have recent quality issues.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Column-level lineage is the differentiating capability among catalog tools, and it varies significantly in depth and accuracy. Column-level lineage requires parsing the SQL of every transformation in the pipeline and inferring column-level dependencies from the parse tree. Some tools do this for dbt SQL, some for warehouse SQL, and some require separate instrumentation. Evaluating catalog tools for column-level lineage coverage is the most important evaluation criterion for teams with agentic use cases: specifically, which sources and transformation tools each tool can parse.
              </p>
            </div>

            {/* Impact analysis */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Impact Analysis: Knowing What Breaks Before It Breaks</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Automated impact analysis uses lineage data to answer the question: if I change this table or column, what else will break? This has always been valuable for data engineers making schema changes. For agentic systems, it becomes critical: an agent that queries a metric whose upstream model has just been modified in a breaking way will return incorrect results, and those results may propagate into reports, decisions, or automated actions before anyone notices.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                In dbt, the <code className="text-emerald-300 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">dbt ls</code> command with the <code className="text-emerald-300 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">--select</code> flag can identify all models downstream of a given model, enabling a manual impact assessment before a change is deployed. Catalog tools automate this into a pre-change impact report: before you merge a PR that drops a column, the catalog shows you every downstream model, report, and metric that references that column. Some catalog tools can also trigger automated tests on downstream models when an upstream change is detected.
              </p>
              <p className="text-slate-300 leading-relaxed">
                For organizations with agents running in production, impact analysis should be part of the deployment pipeline. A schema change to an upstream table should trigger an automated check of all downstream agent queries and metrics, with a notification to the relevant owners if a breaking change is detected. This prevents the scenario where an agent runs successfully for days after a schema change, producing subtly wrong numbers that nobody catches until the error compounds into a significant business problem.
              </p>
            </div>

            {/* Documentation and tests */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Documentation and Tests in dbt: Why Undocumented Models Are Ungoverned Models</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Lineage without documentation is incomplete. A lineage graph tells you that metric A depends on model B which depends on table C. But it doesn't tell you what model B is supposed to do, what invariants it's supposed to maintain, or what a "correct" row in model B looks like. Documentation fills this gap: it makes the intent of each model explicit, so that when lineage traces a metric back to a model, there's also a description of what that model is doing.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                dbt's documentation system ties documentation directly to lineage. When you write a description for a model or column in schema.yml, that description appears in the lineage graph in dbt docs and is accessible via the metadata API. Agents that can query the dbt metadata API can retrieve not just the lineage structure but also the documentation for each node in the graph, understanding not just where the data came from but what each transformation is supposed to do.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Tests in dbt are the enforcement counterpart to documentation. A test asserts that a specific constraint holds: that a column has no nulls, that values are unique, that foreign keys are valid, that revenue is always positive. When tests fail, they signal that something has gone wrong in the data. For agentic systems, test coverage is a proxy for data reliability: a model with comprehensive tests and a known test pass rate is much safer for agents to query than an undocumented, untested model. Treating test coverage as a governance metric rather than just a quality metric changes how organizations prioritize it.
              </p>
            </div>

            {/* Observability */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Root Cause Time: Observability Tools and Near-Instant Diagnosis</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Data observability tools (Monte Carlo, Elementary, re_data, and Datafold) monitor your data pipeline continuously and alert on anomalies before they affect downstream consumers. They detect schema changes, null rate increases, value distribution shifts, and row count anomalies by comparing current metrics against historical baselines. For human-driven analytics, these tools reduce the time between a data quality incident and its detection from days to minutes. For agentic analytics, they're a prerequisite for safe operation.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The reason is that agents operate continuously. A human analyst runs a report once a week; if the data was wrong this week, the error is contained to one report. An agent may query the same metric hundreds of times per day and distribute the results across many downstream consumers. If the underlying data develops a quality issue and the agent isn't stopped, it will propagate that error at scale before anyone notices. Observability tools that alert immediately on quality degradation allow you to pause agent queries to affected metrics while the issue is investigated.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Elementary and re_data are open-source tools that run as dbt packages, generating quality metric tables and dashboards from within your existing dbt project. Monte Carlo is the most feature-complete commercial option, with ML-based anomaly detection and deep lineage integration. For teams just starting with observability, Elementary is an excellent starting point: it requires no additional infrastructure and produces immediately useful quality dashboards from your existing dbt tests and models.
              </p>
            </div>

            {/* Programmatic lineage */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Programmatic Lineage Access: Why Agents Need to Query Lineage via API</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                A lineage graph that's only visible in a UI is useful for human exploration but inaccessible to agents. For lineage to provide value in agentic systems, it needs to be queryable programmatically: an agent should be able to ask "what is the full upstream lineage of the <code className="text-emerald-300 bg-emerald-400/10 px-1.5 py-0.5 rounded text-sm">monthly_revenue</code> metric?" and receive a structured response that lists every upstream model and source table, with documentation and freshness status for each.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                This capability enables a class of agent behaviors that aren't possible without it. An agent can check lineage before answering a question, flagging metrics whose upstream models have recent quality issues. An agent can include provenance information in its answers, explaining not just what the number is but where it came from. An agent can refuse to answer queries about metrics that are flagged as unreliable, rather than silently returning a stale or incorrect value.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Building programmatic lineage access typically involves connecting your agent framework to the API of your catalog tool (DataHub's GraphQL API, Atlan's REST API) or dbt Cloud's Discovery API. This is an integration project, not a configuration change, but it's one of the highest-leverage investments you can make in agentic reliability. Agents that know about data quality are much safer than agents that don't.
              </p>
            </div>

            {/* Audit scenario callout */}
            <div className="rounded-2xl bg-emerald-900/20 border border-emerald-400/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-emerald-300 font-bold text-lg">The Audit Scenario</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                A regulator asks you to trace an AI-generated KPI ("gross margin by product category for Q4 2025") back to its source data. The KPI was generated by your analytics agent and appeared in a board report. Without lineage, this is a multi-day investigation: you need to reverse-engineer the query the agent ran, trace each column through the transformation pipeline manually, and document every intermediate step.
              </p>
              <p className="text-slate-300 leading-relaxed">
                With full lineage infrastructure in place, the answer is available in minutes. Your agent's audit log contains the exact SQL it ran. Your catalog tool can trace every column in that SQL back to its source table, through every dbt model in between, showing exactly which source systems contributed to the number and what transformations were applied. The full provenance chain is a structured API response, not a manual reconstruction.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600/20 to-teal-600/10 border border-emerald-400/20 p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">How does your lineage score?</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                The Semantic Layer Readiness Scorecard assesses lineage and traceability alongside four other dimensions of agentic readiness. Takes 5 minutes.
              </p>
              <a
                href="https://tableautodbt.com/scorecard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-semibold transition-colors"
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
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg border-2 border-emerald-500/40">
                  JL
                </div>
                <div>
                  <div className="text-white font-semibold">Justin Leu</div>
                  <div className="text-slate-400 text-sm">BI Consultant, 17+ years</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                I work with data and analytics teams on semantic layer strategy, data lineage, and agentic readiness. The lineage gap is one of the most underestimated risks in AI data deployment.
              </p>
              <Link href="/#contact" className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors">
                Work with Justin →
              </Link>
            </div>

            {/* Lineage maturity */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Lineage Maturity Levels</h3>
              <div className="space-y-3 text-sm">
                {[
                  { level: "No lineage", color: "text-red-400" },
                  { level: "Table-level (dbt)", color: "text-amber-400" },
                  { level: "Column-level (catalog)", color: "text-blue-400" },
                  { level: "Full API access + observability", color: "text-emerald-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.color.replace('text-', 'bg-')}`} />
                    <span className={item.color}>{item.level}</span>
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
                  { label: "Lineage & Traceability", active: true },
                  { label: "Agent Query Tolerance", active: false },
                  { label: "Governance Maturity", active: false },
                ].map((item) => (
                  <div key={item.label} className={`flex items-center gap-2 ${item.active ? 'text-emerald-300' : 'text-slate-400'}`}>
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.active ? 'bg-emerald-400' : 'bg-slate-600'}`} />
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
                    <div className="text-emerald-500/70 text-xs uppercase tracking-widest mb-1">{article.category}</div>
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