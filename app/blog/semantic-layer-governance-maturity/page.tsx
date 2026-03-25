import Link from "next/link";
import { Metadata } from "next";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "The Organizational Side of Semantic Layer Governance: Policies, Owners, and Audit Trails",
  description: "Technical infrastructure isn't enough. Agentic semantic layer governance requires policies, designated owners, approval workflows, and audit trails. Here's what governance maturity actually looks like.",
  keywords: ["semantic layer governance", "AI data governance policy", "data governance maturity", "metric approval workflow", "data contracts agents", "agentic governance", "AI governance policy", "semantic layer ownership", "data governance audit trail"],
  alternates: { canonical: "https://www.klardata.com/blog/semantic-layer-governance-maturity" },
  openGraph: {
    title: "The Organizational Side of Semantic Layer Governance | Klardata",
    description: "Technical infrastructure isn't enough. Agentic semantic layer governance requires policies, owners, approval workflows, and audit trails.",
    url: "https://www.klardata.com/blog/semantic-layer-governance-maturity",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Justin Leu"],
    images: [{ url: "/api/og?title=Semantic+Layer+Governance+Maturity&category=Semantic+Layer", width: 1200, height: 630 }],
  },
  twitter: {
    title: "The Organizational Side of Semantic Layer Governance | Klardata",
    description: "Technical infrastructure isn't enough. Agentic governance requires policies, owners, workflows, and audit trails.",
  },
};

const relatedArticles = [
  { title: "What Does It Mean to Formally Define a Metric?", slug: "semantic-layer-metric-definitions", category: "Semantic Layer" },
  { title: "Why Table-Level Permissions Aren't Enough for AI Agents", slug: "semantic-layer-access-control", category: "Semantic Layer" },
  { title: "Data Lineage for AI Agents: Why Provenance Is Now a Governance Requirement", slug: "semantic-layer-lineage-traceability", category: "Semantic Layer" },
  { title: "Is Your Data Stack Built for 500 Queries in 10 Minutes?", slug: "semantic-layer-agent-query-tolerance", category: "Semantic Layer" },
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
            "headline": "The Organizational Side of Semantic Layer Governance: Policies, Owners, and Audit Trails",
            "description": "Technical infrastructure isn't enough. Agentic semantic layer governance requires policies, designated owners, approval workflows, and audit trails. Here's what governance maturity actually looks like.",
            "datePublished": "2026-03-24T00:00:00Z",
            "dateModified": "2026-03-24T00:00:00Z",
            "author": { "@type": "Person", "name": "Justin Leu", "url": "https://www.klardata.com" },
            "publisher": { "@type": "Organization", "name": "Klardata", "url": "https://www.klardata.com" },
            "url": "https://www.klardata.com/blog/semantic-layer-governance-maturity",
            "mainEntityOfPage": "https://www.klardata.com/blog/semantic-layer-governance-maturity",
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Semantic Layer
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">10 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">Mar 24, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            The Organizational Side of Semantic Layer Governance: Policies, Owners, and Audit Trails
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Technical infrastructure isn't enough. Agentic governance requires policies, designated owners, approval workflows, and audit trails.
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
                Every data governance discussion eventually converges on tools. Should we use dbt or Cube? Atlan or DataHub? Snowflake row-level security or a semantic layer access control? These are important questions, but they're the second question, not the first. The first question is organizational: who is responsible for what, what decisions require approval, and what policies govern agent behavior? Technical tooling can enforce governance policies, but it can't substitute for the policies themselves.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Most governance failures are not tooling failures. Teams that have invested in all the right tools — a mature semantic layer, column-level security, comprehensive lineage — still produce incorrect agent outputs, still experience compliance incidents, and still struggle to answer auditor questions. The reason is almost always the same: the organizational layer is missing. There are no policies specifying how agents should access data. There is no owner responsible for ensuring the policies are followed. There is no approval process for introducing new agent queries or new metric definitions. There is no audit trail that allows after-the-fact review of what agents did.
              </p>
              <p className="text-slate-300 leading-relaxed">
                This article covers the organizational requirements for mature semantic layer governance in the age of AI agents: what policies need to exist, how ownership should be structured, what approval workflows look like, and what a fully auditable AI metric chain requires.
              </p>
            </div>

            {/* Why governance fails */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Why Governance Fails: Ownership and Process, Not Tooling</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Data governance has a 20-year track record of initiatives that start with enthusiasm and end with abandoned tools and undocumented data. The pattern is consistent: an organization invests in a data catalog, mandates that all datasets be documented, and within six months the catalog has 30% coverage and is visibly decaying. The same pattern is beginning to repeat for semantic layer governance, with the added risk that AI agents are operating on the ungoverned infrastructure in the meantime.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The root cause is that governance without ownership is decoration. A policy that says "all metrics must have an owner" means nothing if the owner role carries no accountability, no operational responsibilities, and no consequence for non-compliance. A data catalog entry that says "this metric measures revenue" means nothing if nobody is responsible for keeping it accurate as the underlying calculation changes. Governance succeeds when it's tied to accountability, not just documentation.
              </p>
              <p className="text-slate-300 leading-relaxed">
                For agentic systems, the stakes are higher than for traditional BI governance. An ungoverned dashboard is seen by humans who can apply judgment to questionable numbers. An ungoverned agent produces outputs that may be trusted uncritically by downstream consumers: other automated systems, non-technical executives, or external reports. The velocity and scale of agent outputs amplify governance failures in ways that human-driven analytics does not.
              </p>
            </div>

            {/* What a policy needs to cover */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">What an AI/Agent Data Governance Policy Needs to Cover</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                A governance policy for AI agent data access needs to answer a set of questions that traditional data governance policies don't address. Here is an outline of the core sections such a policy should include:
              </p>
              <div className="space-y-4">
                {[
                  {
                    section: "1. Scope and definitions",
                    desc: "What counts as an AI agent for purposes of this policy? This should include automated systems that query data programmatically without direct human review of each query, regardless of whether they use an LLM. The policy should distinguish between supervised agents (where a human reviews outputs before they're acted on) and autonomous agents (where outputs trigger actions automatically), as the governance requirements differ."
                  },
                  {
                    section: "2. Approved data access patterns",
                    desc: "Which data sources are approved for agent access, under what conditions? This should specify that agents must access data through the semantic layer (not raw tables), that direct warehouse access by agents requires explicit approval and documentation, and that agents may not access data classified above a defined sensitivity level without explicit authorization."
                  },
                  {
                    section: "3. Metric and definition requirements",
                    desc: "Which metrics are approved for agent use? All metrics queried by agents must be formally defined in the semantic layer with all five components (grain, filters, aggregation, owner, version) documented. Agents may not construct ad-hoc metric definitions from raw data without a review and approval process."
                  },
                  {
                    section: "4. Access control requirements",
                    desc: "Agent service accounts must be provisioned separately from human accounts. Agents must not have access to columns or tables classified as PII unless explicitly authorized for a specific use case. All agent access must use short-lived credentials rotated on a defined schedule."
                  },
                  {
                    section: "5. Audit and review requirements",
                    desc: "All agent queries must be logged with sufficient detail to reconstruct the full query lifecycle. Audit logs must be retained for a defined period (typically 12–24 months for compliance purposes). A designated owner must review agent query logs on a defined schedule and investigate anomalies."
                  },
                  {
                    section: "6. Incident response",
                    desc: "What happens when an agent produces an incorrect output, accesses unauthorized data, or causes a cost incident? The policy should define escalation paths, remediation timelines, and the process for suspending an agent pending investigation."
                  },
                ].map((item) => (
                  <div key={item.section} className="bg-slate-900/50 border border-white/5 rounded-xl p-4">
                    <div className="text-amber-300 font-semibold text-sm mb-2">{item.section}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Semantic layer ownership */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Semantic Layer Ownership: What a Governance Owner Does Day-to-Day</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Semantic layer governance requires at least one designated owner: a person or team responsible for the health and accuracy of the semantic layer as it relates to agent access. In smaller organizations, this is often a staff data engineer or analytics engineer who also has other responsibilities. In larger organizations, it may be a dedicated data governance function. In either case, the responsibilities are specific and operational, not ceremonial.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Day-to-day, a semantic layer governance owner does the following: reviews and approves requests to add or change metric definitions, monitors the metric catalog for definitions that are missing required components (owner, version, documentation), reviews agent query logs for anomalous behavior, communicates definition changes to downstream agent owners, and maintains the governance policy itself as the organization's use of agents evolves.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The governance owner also serves as the escalation point for governance disputes. When two teams disagree about the correct definition of a metric, or when an agent owner wants direct warehouse access that the policy doesn't permit, the governance owner makes the decision and documents it. This decision-making authority is what distinguishes a genuine governance function from a documentation exercise. Without it, policies are suggestions, not constraints.
              </p>
            </div>

            {/* Metric approval workflows */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Metric Approval Workflows: From "I Want to Add a Metric" to "Agents Can Query It"</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                A metric approval workflow is the process by which a new metric definition goes from a request to an approved, agent-queryable definition in the semantic layer. Without this process, metric definitions are added informally: someone adds a measure to a dbt model, it gets deployed without review, and agents start querying it before anyone has validated that the definition is correct, that it has an owner, or that the access policy is appropriate.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                A well-designed metric approval workflow has five steps: proposal (the requester documents the metric's name, business purpose, and initial specification), technical review (a data engineer validates that the proposed grain, filters, and aggregation logic are implementable and don't duplicate an existing metric), business review (the proposed owner and relevant stakeholders confirm the definition is correct and matches business intent), policy review (the governance owner confirms the access classification, PII implications, and versioning plan), and deployment (the metric is added to the semantic layer, documented, and made available for agent queries).
              </p>
              <p className="text-slate-300 leading-relaxed">
                In practice, this process is often managed through a GitHub PR workflow for teams using dbt or similar code-based semantic layers. The PR includes the metric definition, the documentation, and the owner assignment. Review requirements are enforced by the PR approval rules. This approach has the advantage of being version-controlled: the full history of every metric definition change, including who reviewed it and when, is preserved in git history.
              </p>
            </div>

            {/* Data contracts */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Data Contracts for Agents: Different from Human-Focused SLAs</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                A data contract is a formal agreement between a data producer (the team that maintains a dataset or metric) and a data consumer (the team or system that uses it) specifying what the producer commits to provide. Traditional data contracts cover freshness, schema stability, and availability. Contracts for agent consumers need additional commitments that aren't relevant for human BI tools.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Agent-specific contract terms include: semantic layer API stability commitments (the API will not introduce breaking changes without N days notice), definition version freeze periods (the metric definition at version N will remain valid and queryable for at least N months), schema change notification (downstream agent owners will be notified at least N days before a schema change that breaks current queries), and data quality guarantees (the underlying data passes defined quality tests at a specified rate, and the consumer is notified immediately when tests fail).
              </p>
              <p className="text-slate-300 leading-relaxed">
                The enforcement mechanism for data contracts is the governance owner and the approval workflow. When a producer wants to make a change that violates the contract terms (for example, deprecating an API version before the committed end-of-life date), the change must go through the governance review process, which includes notifying all contract holders and giving them time to update their agent configurations. Without a contract framework, producers make changes at will and agent owners discover breakage after the fact.
              </p>
            </div>

            {/* The confidence question */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">The Confidence Question: What "Very Confident" Requires You to Have Built</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The highest maturity level on the governance dimension of the Semantic Layer Readiness Scorecard is described as "very confident an agent would return correct answers." What does that confidence actually require? It's a useful question because it makes the requirements concrete rather than abstract.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Being very confident in agent answers requires: formal metric definitions with all five components for every metric the agent queries; access controls that prevent the agent from accessing data it shouldn't; lineage that lets you trace any answer back to its source; quality monitoring that alerts before incorrect data reaches the agent; a stable, versioned semantic layer API; an approval workflow that ensures every metric has been validated; a governance owner who is actively monitoring agent behavior; and an audit log that records every query for after-the-fact review.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Very few organizations have all of these in place today, and that's not a failure. It's the current state of a technology and practice that is maturing rapidly. The goal of a governance maturity assessment is not to identify failure but to identify the highest-leverage next steps. An organization that has formal metric definitions and lineage but lacks a governance policy and approval workflow should prioritize those organizational gaps. An organization that has governance processes but lacks lineage infrastructure should prioritize the technical gap.
              </p>
            </div>

            {/* Regulatory audit readiness */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Regulatory Audit Readiness: What Auditors Actually Ask</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Organizations in regulated industries (finance under SOX, healthcare under HIPAA, and organizations subject to GDPR or CCPA) are beginning to face questions from auditors about AI-generated analytics. These questions are not hypothetical. The audit questions tend to cluster around three themes: provenance (where did this number come from?), authorization (who authorized this system to access this data?), and accuracy (how do you know the number is correct?).
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Provenance questions require lineage infrastructure: the ability to trace any AI-generated output back to its source data through every transformation step. Authorization questions require access control documentation: for every piece of data an agent accessed, what policy authorized that access, who approved the policy, and when. Accuracy questions require quality monitoring and testing records: what tests run against the data the agent queries, what's the current pass rate, and what's the process for investigating failures.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The organizations that are best positioned for these audits are those that treat AI data governance as a first-class responsibility, not an afterthought. They have designated owners who can speak to governance decisions. They have documented policies that specify how agents operate. They have audit logs that can answer specific questions about specific agent queries. They have tested, monitored data pipelines that feed the semantic layer. These requirements are substantial, but they're knowable and buildable. The challenge is starting before the auditor arrives.
              </p>
            </div>

            {/* Governance maturity roadmap */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">A Governance Maturity Roadmap: From No Policy to Agent-Inclusive Governance in 4 Stages</h2>
              <div className="space-y-5">
                {[
                  {
                    stage: "Stage 1",
                    title: "Acknowledge and inventory",
                    color: "text-red-400 bg-red-400/10 border-red-400/30",
                    desc: "Most organizations start here: agents are operating with no formal governance. Stage 1 is about making the current state explicit. Inventory every agent that queries data, document what data it accesses and with what credentials, and identify the governance gaps (missing policies, shared credentials, no audit logs). The output is not a solution but a clear picture of the risk."
                  },
                  {
                    stage: "Stage 2",
                    title: "Designate owners and write the policy",
                    color: "text-amber-400 bg-amber-400/10 border-amber-400/30",
                    desc: "Designate a governance owner with explicit responsibilities. Write a data governance policy for AI agent access using the template outline from earlier in this article. Provision separate service accounts for all existing agents. Enable audit logging at the warehouse and semantic layer level. These organizational steps don't require new tooling. They require decisions and commitments."
                  },
                  {
                    stage: "Stage 3",
                    title: "Implement approval workflows and data contracts",
                    color: "text-blue-400 bg-blue-400/10 border-blue-400/30",
                    desc: "Implement the metric approval workflow as a PR-based process in your code repository. Create data contracts for the metrics and datasets most heavily used by agents. Establish a regular cadence for governance owner review of agent query logs. Implement quality monitoring on the top 20 metrics used by agents. At this stage, governance is active and operational rather than documentary."
                  },
                  {
                    stage: "Stage 4",
                    title: "Full agent-inclusive governance",
                    color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
                    desc: "All metrics used by agents are formally defined with owners, versions, and complete documentation. Access control is at the column and row level. Lineage is programmatically accessible. Quality monitoring covers all agent-queried metrics with real-time alerting. Audit logs are comprehensive and reviewed regularly. Data contracts are in place for all agent-consumed datasets. The governance owner is actively managing the semantic layer as a product, not maintaining it as a side project."
                  },
                ].map((item) => (
                  <div key={item.stage} className="flex gap-4">
                    <div className={`text-xs font-bold px-2 py-1 rounded-lg border flex-shrink-0 h-fit mt-0.5 ${item.color}`}>{item.stage}</div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance callout */}
            <div className="rounded-2xl bg-amber-900/20 border border-amber-400/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-amber-300 font-bold text-lg">The Compliance Scenario</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                A GDPR auditor asks about an AI-generated report that was sent to a regulatory body containing customer segment revenue data. They want to know: which customer records contributed to the numbers in the report, whether any EU residents' data was included in the computation, and what controls prevented the agent from accessing PII fields.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Without governance infrastructure: the audit takes weeks. The agent's query log doesn't exist. The lineage is partial. Nobody knows whether EU resident data was included because column-level security wasn't in place. The investigation involves manually reviewing dbt models, warehouse query logs, and the agent's prompt history.
              </p>
              <p className="text-slate-300 leading-relaxed">
                With full governance infrastructure: the audit takes hours. The agent's query log shows the exact SQL. Column-level security confirms EU resident PII columns were inaccessible. Lineage traces the revenue numbers back to source tables. The metric definition shows the filter that excluded PII. The governance owner can certify the process. The auditor has everything they need.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-600/20 to-orange-600/10 border border-amber-400/20 p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Where does your governance maturity stand?</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                The Semantic Layer Readiness Scorecard assesses governance maturity alongside four other dimensions of agentic readiness. Takes 5 minutes.
              </p>
              <a
                href="https://tableautodbt.com/scorecard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-400 text-white rounded-xl font-semibold transition-colors"
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
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg border-2 border-amber-500/40">
                  JL
                </div>
                <div>
                  <div className="text-white font-semibold">Justin Leu</div>
                  <div className="text-slate-400 text-sm">BI Consultant, 17+ years</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                I work with data and analytics teams on semantic layer strategy, governance design, and agentic readiness. Governance maturity is the dimension most organizations underestimate, and the one that matters most when something goes wrong.
              </p>
              <Link href="/#contact" className="text-amber-400 text-sm hover:text-amber-300 transition-colors">
                Work with Justin →
              </Link>
            </div>

            {/* Governance stages */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Governance Stages</h3>
              <div className="space-y-3 text-sm">
                {[
                  { stage: "Stage 1", label: "Inventory gaps", color: "text-red-400" },
                  { stage: "Stage 2", label: "Owners + policy", color: "text-amber-400" },
                  { stage: "Stage 3", label: "Workflows + contracts", color: "text-blue-400" },
                  { stage: "Stage 4", label: "Full governance", color: "text-emerald-400" },
                ].map((item) => (
                  <div key={item.stage} className="flex items-center gap-3">
                    <span className={`text-xs font-bold w-16 flex-shrink-0 ${item.color}`}>{item.stage}</span>
                    <span className="text-slate-400">{item.label}</span>
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
                  { label: "Agent Query Tolerance", active: false },
                  { label: "Governance Maturity", active: true },
                ].map((item) => (
                  <div key={item.label} className={`flex items-center gap-2 ${item.active ? 'text-amber-300' : 'text-slate-400'}`}>
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.active ? 'bg-amber-400' : 'bg-slate-600'}`} />
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
                    <div className="text-amber-500/70 text-xs uppercase tracking-widest mb-1">{article.category}</div>
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