import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Table-Level Permissions Aren't Enough for AI Agents",
  description: "Granting agents table-level access is like giving someone your house key when they only need to read your mail. Here's what fine-grained access control looks like for agentic semantic layer access.",
  keywords: ["semantic layer access control", "column-level security", "row-level security", "PII tagging", "AI agent permissions", "data governance access", "Cube access control", "LookML access filters", "agentic data security"],
  alternates: { canonical: "https://klardata.com/blog/semantic-layer-access-control" },
  openGraph: {
    title: "Why Table-Level Permissions Aren't Enough for AI Agents | Klardata",
    description: "Granting agents table-level access is like giving someone your house key when they only need to read your mail. Here's what fine-grained access control actually looks like.",
    url: "https://klardata.com/blog/semantic-layer-access-control",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Justin Leu"],
    images: [{ url: "/api/og?title=Access+Control+for+AI+Agents&category=Semantic+Layer", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Why Table-Level Permissions Aren't Enough for AI Agents | Klardata",
    description: "Table-level access is too broad for AI agents. Here's what fine-grained semantic layer access control requires.",
  },
};

const relatedArticles = [
  { title: "What Does It Mean to Formally Define a Metric?", slug: "semantic-layer-metric-definitions", category: "Semantic Layer" },
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
            "headline": "Why Table-Level Permissions Aren't Enough for AI Agents",
            "description": "Granting agents table-level access is like giving someone your house key when they only need to read your mail. Here's what fine-grained access control looks like for agentic semantic layer access.",
            "datePublished": "2026-03-24T00:00:00Z",
            "dateModified": "2026-03-24T00:00:00Z",
            "author": { "@type": "Person", "name": "Justin Leu", "url": "https://klardata.com" },
            "publisher": { "@type": "Organization", "name": "Klardata", "url": "https://klardata.com" },
            "url": "https://klardata.com/blog/semantic-layer-access-control",
            "mainEntityOfPage": "https://klardata.com/blog/semantic-layer-access-control",
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
      <div className="relative bg-gradient-to-br from-red-900 via-rose-900 to-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10">
          <svg className="w-64 h-64 text-rose-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-red-400/20 text-red-300 border border-red-400/30">
              Semantic Layer
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">8 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">Mar 24, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            Why Table-Level Permissions Aren't Enough for AI Agents
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Granting agents table-level access is like giving someone your house key when they only need to read your mail. Here's what fine-grained access control actually requires.
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
                When most data teams think about access control for AI agents, they think about it the same way they think about access control for human analysts: grant access to the tables the agent needs, restrict the tables it doesn't. It's a familiar model, it's easy to implement, and it's almost entirely inadequate for agents.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The problem isn't that table-level access is wrong — it's that it's far too coarse. A human analyst who has access to a customer table understands, implicitly, that certain columns contain PII that shouldn't be included in public-facing reports. They've been through compliance training. They know the rules. An AI agent has no such context. Given table-level access to a customers table, it will happily include email addresses, phone numbers, and health status fields in query results unless something explicitly prevents it from doing so.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Building appropriate access control for agentic systems requires thinking at four levels: table, schema, column, and row. Most organizations are operating at level one. This article explains what each level requires, what the risk profile looks like when you're missing a level, and how to build toward the fine-grained model that agentic workloads need.
              </p>
            </div>

            {/* 4 levels */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">The 4 Levels of Access Control</h2>
              <div className="space-y-5">
                {[
                  {
                    level: "Level 1",
                    title: "Table-Level Access",
                    risk: "High",
                    riskColor: "text-red-400 bg-red-400/10 border-red-400/30",
                    desc: "Table-level access grants or denies access to an entire table. This is the default model in most data warehouses and the model most teams use for both humans and agents. The risk for agents is significant: a single table often contains a mix of safe and sensitive columns. Granting table access to an agent effectively grants access to all columns in that table, including PII, financial data, and any other sensitive fields that weren't explicitly excluded. Agents will use what's available."
                  },
                  {
                    level: "Level 2",
                    title: "Schema-Level Access",
                    risk: "High",
                    riskColor: "text-red-400 bg-red-400/10 border-red-400/30",
                    desc: "Schema-level access controls which schemas (groups of tables) an agent can query. This is slightly more granular than table-level access if your schemas are organized by sensitivity (e.g., a raw schema vs. a curated schema vs. a PII schema). But in practice, most schemas are organized by domain or source rather than sensitivity level, which means schema-level access provides little additional protection over table-level access."
                  },
                  {
                    level: "Level 3",
                    title: "Column-Level Access",
                    risk: "Medium",
                    riskColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
                    desc: "Column-level access specifies which columns within a table an agent can read. This is the level at which PII protection becomes meaningful: you can grant access to a customers table but restrict the email, phone, ssn, and health_status columns. Snowflake, BigQuery, and Databricks all support column-level security natively. The operational challenge is maintaining the column access list as schemas evolve — a new column added to a table doesn't automatically inherit the right access policy."
                  },
                  {
                    level: "Level 4",
                    title: "Row + Column Access",
                    risk: "Low",
                    riskColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
                    desc: "Row-level access combines column-level restrictions with row-level filters, ensuring an agent can only see rows that match specific criteria. This is the appropriate model for multi-tenant data, regional data residency requirements, or cases where agents should only access data for specific customer segments. Row-level security in Snowflake is implemented via row access policies; in BigQuery via row-level security filters. Combined with column-level access, this provides the most robust protection for agentic workloads."
                  },
                ].map((item) => (
                  <div key={item.level} className="flex gap-4">
                    <div className="w-20 flex-shrink-0 pt-0.5">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.level}</div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${item.riskColor}`}>{item.risk}</span>
                    </div>
                    <div className="flex-1 border-l border-white/10 pl-4">
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PII tagging */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">PII Tagging: What It Is and How to Implement It</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                PII tagging is the practice of labeling columns that contain personally identifiable information so that access policies, masking rules, and audit trails can be applied automatically. Without PII tags, enforcing column-level access requires manually identifying and listing every sensitive column — a process that doesn't scale and breaks the moment new columns are added.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                In dbt, PII tagging is implemented using column-level tags in your schema.yml files. A column tagged as <code className="text-rose-300 bg-rose-400/10 px-1.5 py-0.5 rounded text-sm">pii</code> or <code className="text-rose-300 bg-rose-400/10 px-1.5 py-0.5 rounded text-sm">sensitive</code> can be referenced by downstream access policies and documentation generators. In Atlan and DataHub, PII classification can be applied automatically using pattern matching and ML classifiers that scan column names and sample data to identify likely sensitive fields. This automated approach is important at scale — manually reviewing thousands of columns is not feasible.
              </p>
              <p className="text-slate-300 leading-relaxed">
                For agents specifically, PII tags serve a dual purpose: they inform access control decisions (the agent doesn't get access to PII-tagged columns) and they inform the agent's own behavior (if an agent can read PII tags through the semantic layer, it can make better decisions about what to include in query results and how to handle sensitive data in responses). A fully mature implementation has both: PII-tagged columns are inaccessible to agents that don't have explicit PII access, and agents that do have access know to treat those columns accordingly.
              </p>
            </div>

            {/* Metric-level permissions */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Metric-Level Permissions: Access Without Table Exposure</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                One of the most powerful features of semantic layer tools like Cube and Looker is their ability to grant access to a metric without exposing the underlying table. An agent can query the <code className="text-rose-300 bg-rose-400/10 px-1.5 py-0.5 rounded text-sm">monthly_revenue</code> measure and receive the correct aggregated value without ever seeing the <code className="text-rose-300 bg-rose-400/10 px-1.5 py-0.5 rounded text-sm">orders</code> table, the <code className="text-rose-300 bg-rose-400/10 px-1.5 py-0.5 rounded text-sm">amount_usd</code> column, or any of the raw transaction data.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                In LookML, this is implemented through access grants: you define which user attributes are required to access a specific explore, view, or measure. An agent service account can have access to specific measures without having access to the underlying views those measures are derived from. In Cube, access control is implemented at the cube definition level, with role-based access that can be scoped to specific measures and dimensions.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Metric-level access is the gold standard for agentic access because it enforces the principle of least privilege at exactly the right level of abstraction. The agent gets the answer it needs (the aggregated metric value) without the ability to do things it shouldn't (explore raw customer data, join tables in unexpected ways, or access sensitive columns that happen to be in the same table as the data it needs).
              </p>
            </div>

            {/* Human vs agent differentiation */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Human vs. Agent Access: Service Accounts, Scoped Tokens, and Separate Audit Trails</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Agents should never share credentials with humans. This sounds obvious but is frequently violated in practice — teams connect agents using a developer's personal access token, or grant agents the same warehouse role as the analytics team, because it's faster. The operational cost of this convenience is the loss of auditability: you can no longer distinguish agent queries from human queries in your logs, you can't apply different access policies to agents, and you can't revoke agent access without affecting human access.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The correct approach is to provision dedicated service accounts for each agent (or class of agent), with scoped credentials that have only the access the agent needs. In Snowflake, this means a dedicated role and a dedicated service user. In BigQuery, a dedicated service account. Scoped API tokens should be short-lived (hours or days, not months) and rotated automatically using a secrets manager like AWS Secrets Manager, HashiCorp Vault, or the equivalent in your cloud provider.
              </p>
              <p className="text-slate-300 leading-relaxed">
                With separate service accounts, audit trails become meaningful. You can query your warehouse's query history filtered to the agent's service account and see exactly what queries the agent ran, at what times, and against what data. This is the foundation for the audit capability that compliance and security teams will eventually require, and it's much easier to build from the start than to retrofit after agents have been running on shared credentials for months.
              </p>
            </div>

            {/* Audit trails */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">What "Full Automated Audit Log" Actually Looks Like</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                An audit log for agent queries needs to capture more than just "the agent ran this SQL." A complete audit record includes: the natural language question the agent was asked, the SQL it generated, the semantic layer objects it accessed (metrics, dimensions, filters applied), the result set returned (or a hash of it), the user who initiated the query, the timestamp, and the latency. This creates a full chain from intent to result that can be reviewed after the fact.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                In practice, most warehouse-level audit logs only capture the SQL and metadata. Capturing the full chain requires application-level logging in your agent framework. LangChain, LlamaIndex, and similar frameworks have callback hooks that can be used to log the full lifecycle of an agent query to a structured store (a database table, a log aggregation system like Datadog, or a dedicated observability tool like Arize).
              </p>
              <p className="text-slate-300 leading-relaxed">
                The audit log should be queryable independently of the agent. If an incident occurs — a data breach, an incorrect report sent to a regulator, a privacy complaint — you need to be able to reconstruct what the agent did and why without relying on the agent itself to explain its behavior. A separate, immutable log is the only way to guarantee this.
              </p>
            </div>

            {/* PII join problem */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">The PII Join Problem: How Agents Inadvertently Expose Personal Data</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Column-level security prevents direct access to PII columns. But it doesn't prevent a class of more subtle exposure: the inference attack via join. An agent that can query both an <code className="text-rose-300 bg-rose-400/10 px-1.5 py-0.5 rounded text-sm">orders</code> table (containing customer_id and purchase amounts) and a <code className="text-rose-300 bg-rose-400/10 px-1.5 py-0.5 rounded text-sm">customers</code> table (containing customer_id and address) can join these tables together even if it's not supposed to be doing customer-level analysis. The resulting query exposes addresses alongside purchase behavior — a PII join that circumvents the protection on either individual table.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Preventing PII joins requires either restricting the agent to a semantic layer that doesn't expose the join paths between sensitive tables, or implementing join governance rules that block specific join combinations. Cube allows you to define which joins are exposed in a given cube definition — if you don't define the relationship between orders and customers at the cube level, the agent can't join them even if it has access to both tables at the warehouse level.
              </p>
              <p className="text-slate-300 leading-relaxed">
                This is another argument for semantic-layer-first agent access. When agents must go through the semantic layer rather than directly querying warehouse tables, the semantic layer becomes the enforcement point for join governance, not just column access. The joins available to an agent are exactly the joins the semantic layer exposes — nothing more.
              </p>
            </div>

            {/* Migration path */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Building Toward Column-Level Access: A Migration Path</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Moving from table-level to column-level access is a multi-step project, not a configuration change. The work happens in four phases: inventory, classification, policy implementation, and agent migration.
              </p>
              <ul className="space-y-3 text-slate-400 text-sm mb-4">
                {[
                  "Phase 1: Catalog every table and column an agent currently accesses. This is your attack surface. Understanding it is prerequisite to reducing it.",
                  "Phase 2: Tag every column in the inventory as safe, sensitive, or PII. Use automated classifiers where possible to reduce manual effort. Treat any column with a name pattern matching email, phone, ssn, address, health, or similar as PII until proven otherwise.",
                  "Phase 3: Implement column-level policies in your data warehouse for all columns classified as sensitive or PII. Test that agents can no longer access these columns directly. Document exceptions and the business justification for each.",
                  "Phase 4: Redirect agents to query through the semantic layer for all metric access. This removes direct warehouse access and enforces the semantic layer as the single enforcement point for all column and join access policies.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-300 leading-relaxed">
                This migration doesn't need to happen all at once. Start with the tables that contain the highest concentration of PII or financial data, apply column-level policies to those tables first, and expand from there. A partial implementation that protects your most sensitive data is significantly better than a perfect plan that never gets executed.
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
                A sales analysis agent is given table-level access to the <code className="text-rose-300 bg-rose-400/10 px-1.5 py-0.5 rounded text-sm">accounts</code> table to answer questions about pipeline and revenue. The table also contains a <code className="text-rose-300 bg-rose-400/10 px-1.5 py-0.5 rounded text-sm">health_plan_type</code> column populated from a healthcare integration. An employee asks the agent: "Show me our largest enterprise accounts and their key details." The agent returns a table that includes health plan type for each account contact — information that was never intended to be accessible to sales and almost certainly violates HIPAA.
              </p>
              <p className="text-slate-300 leading-relaxed">
                No human analyst would have made this error — they would have known not to include that column. The agent had no such context. Column-level security on <code className="text-rose-300 bg-rose-400/10 px-1.5 py-0.5 rounded text-sm">health_plan_type</code> would have prevented the agent from accessing it regardless of how the query was phrased.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-red-600/20 to-rose-600/10 border border-red-400/20 p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">How does your access control score?</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                The Semantic Layer Readiness Scorecard assesses your access control granularity alongside four other dimensions of agentic readiness. Takes 5 minutes.
              </p>
              <a
                href="https://tableautodbt.com/scorecard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-red-500 hover:bg-red-400 text-white rounded-xl font-semibold transition-colors"
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
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg border-2 border-red-500/40">
                  JL
                </div>
                <div>
                  <div className="text-white font-semibold">Justin Leu</div>
                  <div className="text-slate-400 text-sm">BI Consultant, 17+ years</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                I work with data and analytics teams on semantic layer strategy, BI implementation, and agentic data readiness. I've seen the access control gaps that agents expose firsthand, and I know how to fix them.
              </p>
              <Link href="/#contact" className="text-red-400 text-sm hover:text-red-300 transition-colors">
                Work with Justin →
              </Link>
            </div>

            {/* Access level guide */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Access Level Guide</h3>
              <div className="space-y-3 text-sm">
                {[
                  { level: "Table", risk: "High risk", color: "text-red-400" },
                  { level: "Schema", risk: "High risk", color: "text-red-400" },
                  { level: "Column", risk: "Medium risk", color: "text-amber-400" },
                  { level: "Row + Column", risk: "Low risk", color: "text-emerald-400" },
                ].map((item) => (
                  <div key={item.level} className="flex items-center justify-between">
                    <span className="text-slate-300 font-medium">{item.level}</span>
                    <span className={`text-xs font-semibold ${item.color}`}>{item.risk}</span>
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
                  { label: "Access Control Granularity", active: true },
                  { label: "Lineage & Traceability", active: false },
                  { label: "Agent Query Tolerance", active: false },
                  { label: "Governance Maturity", active: false },
                ].map((item) => (
                  <div key={item.label} className={`flex items-center gap-2 ${item.active ? 'text-red-300' : 'text-slate-400'}`}>
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.active ? 'bg-red-400' : 'bg-slate-600'}`} />
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
                    <div className="text-red-500/70 text-xs uppercase tracking-widest mb-1">{article.category}</div>
                    <div className="text-slate-300 text-sm leading-snug group-hover:text-white transition-colors">{article.title}</div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
