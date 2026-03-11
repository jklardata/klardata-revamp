import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Semantic Layer: The Missing Link for AI-Ready Analytics",
  description: "How the semantic layer is evolving with AI, why legacy OLAP systems fall short, and which modern tools are redefining how organizations make sense of their data.",
  alternates: { canonical: "https://klardata.com/blog/ai-semantic-layer" },
  openGraph: {
    title: "The Semantic Layer: The Missing Link for AI-Ready Analytics | Klardata",
    description: "How the semantic layer is evolving with AI, why legacy OLAP systems fall short, and which modern tools are redefining analytics.",
    url: "https://klardata.com/blog/ai-semantic-layer",
    type: "article",
    publishedTime: "2026-03-04T00:00:00Z",
    authors: ["Justin Leu"],
    images: [{ url: "/api/og?title=The+Semantic+Layer%3A+The+Missing+Link+for+AI-Ready+Analytics&category=Data+Infrastructure", width: 1200, height: 630 }],
  },
  twitter: {
    title: "The Semantic Layer: The Missing Link for AI-Ready Analytics | Klardata",
    description: "How the semantic layer is evolving with AI and why it's now foundational infrastructure for any org deploying AI analytics.",
  },
};

const relatedArticles = [
  { title: "5 Signs Your Business Needs a Data Warehouse", slug: "5-signs-business-needs-data-warehouse", category: "Data Infrastructure" },
  { title: "5 Signs Your Business Is Ready for a BI Implementation", slug: "bi-implementation-ready", category: "Strategy" },
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
            "headline": "AI and the Semantic Layer: The Missing Link in Modern Data Infrastructure",
            "description": "How the semantic layer is evolving with AI, why legacy OLAP systems fall short, and which modern tools are redefining how organizations make sense of their data.",
            "datePublished": "2026-03-04T00:00:00Z",
            "dateModified": "2026-03-04T00:00:00Z",
            "author": { "@type": "Person", "name": "Justin Leu", "url": "https://klardata.com" },
            "publisher": { "@type": "Organization", "name": "Klardata", "url": "https://klardata.com" },
            "url": "https://klardata.com/blog/ai-semantic-layer",
            "mainEntityOfPage": "https://klardata.com/blog/ai-semantic-layer",
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
      <div className="relative bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10">
          <svg className="w-64 h-64 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        </div>
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
              Data Infrastructure
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">9 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm">Mar 4, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
            AI and the Semantic Layer: The Missing Link in Modern Data Infrastructure
          </h1>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-screen-2xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Main article */}
          <article className="lg:col-span-2 space-y-0">
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              There is a persistent gap in most data stacks that sits quietly between the raw data and the dashboards people use to make decisions. It is the layer responsible for translating technical database logic into business concepts that everyone can understand: what exactly is "revenue," which customers count as "active," and how does "conversion rate" differ across product lines. This translation layer is called the semantic layer, and it is becoming one of the most important battlegrounds in modern data infrastructure, especially as AI enters the picture.
            </p>

            {/* Section 1 */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">What the Semantic Layer Actually Does</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                At its core, a semantic layer sits between your data warehouse and your BI tools. It defines business metrics, dimensions, and relationships in a consistent, reusable way so that every team pulling data gets the same answer to the same question, regardless of which tool they use or who wrote the query.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Without a semantic layer, each analyst writes their own version of "monthly recurring revenue." Each dashboard defines "churn" slightly differently. Finance and Sales end up in the same meeting with different numbers and no one knows who is right. This is not a data quality problem. It is a semantic problem.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The semantic layer enforces a single definition for every metric, governed centrally and accessible everywhere. When someone asks "what was Q3 revenue?", the answer comes from one place, computed one way, every time.
              </p>
            </div>

            {/* Section 2 */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Legacy Systems and the OLAP Era</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The concept of a semantic layer is not new. OLAP (Online Analytical Processing) cubes were the original implementation. Platforms like <strong className="text-white">IBM Cognos</strong>, <strong className="text-white">SAP BusinessObjects</strong>, <strong className="text-white">Microsoft SSAS</strong>, and <strong className="text-white">MicroStrategy</strong> built their entire architectures around pre-aggregated cubes that encoded business logic and made it accessible to non-technical report consumers.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                For their era, these systems worked. They gave enterprise companies a way to enforce consistent metric definitions and enable self-service reporting without requiring every analyst to understand complex SQL joins across dozens of tables.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                But they came with serious limitations. OLAP cubes required lengthy build and refresh cycles. Changing a metric definition meant rebuilding entire cube structures, which could take hours or even days. The business logic was locked inside proprietary formats that were difficult to version, test, or share across tools. When your stack changed, your cube logic often had to be rebuilt from scratch.
              </p>
              <div className="bg-slate-700/50 border border-white/10 rounded-xl p-6 mt-4">
                <p className="text-slate-400 text-sm leading-relaxed">
                  <strong className="text-cyan-400">The core problem with legacy semantic layers:</strong> Business logic was embedded inside the BI tool itself, making it tool-specific, hard to maintain, and impossible to share across the organization consistently.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">The Modern Semantic Layer: Headless, Flexible, and Code-First</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The modern approach decouples the semantic layer from any specific BI tool. Metrics and dimensions are defined in code, versioned in Git, tested like software, and exposed through APIs that any downstream tool can consume. This is what people mean when they talk about a "headless" semantic layer.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The shift matters because it means you define your business logic once and deploy it everywhere simultaneously: to Tableau, to Power BI, to Looker, to a Python notebook, and increasingly, to an AI assistant.
              </p>

              <div className="space-y-4 mt-6">
                <div className="border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-bold text-lg mb-2">dbt Semantic Layer</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    dbt (data build tool) has become the standard for transforming raw data into clean, modeled tables in the warehouse. Its semantic layer extension, built around MetricFlow, allows teams to define metrics directly in YAML alongside their dbt models. Those metric definitions are then exposed through a unified query API that BI tools can call. Because the logic lives in your dbt project, it gets version controlled, peer reviewed, and tested just like application code.
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-bold text-lg mb-2">Cube</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Cube (formerly Cube.js) is purpose-built as a semantic layer and caching engine. It sits between your data warehouse and any frontend: a BI tool, a custom application, or an AI agent. Cube handles query optimization, pre-aggregation, and multi-tenant access control at the semantic layer level. It is particularly strong for organizations building data-powered products where consistent, fast metric access is critical.
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-bold text-lg mb-2">LookML and Looker</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Looker pioneered the idea of a code-defined semantic layer with LookML, a modeling language that lets analysts define dimensions, measures, and relationships in a declarative way. Looker then generates the SQL at query time rather than pre-building cubes. The model lives in Git and is shared across every report and dashboard in the platform. Google has extended Looker's reach through Looker Studio Pro and integrations with BigQuery ML, beginning to close the loop between semantic definitions and AI-powered analysis.
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-bold text-lg mb-2">AtScale</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    AtScale positions itself as a universal semantic layer that connects major cloud warehouses (Snowflake, Databricks, BigQuery, Redshift) to any BI or AI consumer. It is particularly strong in enterprises that need to serve multiple BI tools simultaneously from a single metric definition. AtScale has been early in exposing semantic layer definitions to LLMs, allowing natural language queries to be grounded in governed business logic rather than ad hoc SQL generation.
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-bold text-lg mb-2">Metaphor Data and the Metadata Layer</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Metaphor takes a different angle, focusing on the knowledge graph layer that sits above raw table definitions. By cataloging business context, data lineage, and metric ownership, Metaphor makes the semantic layer discoverable and navigable, particularly useful for AI agents that need to understand not just what a metric is, but where it comes from and who owns it.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: the AI angle */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Where AI Changes Everything</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                For most of its history, the semantic layer was primarily a consistency and governance tool. AI turns it into something much more powerful: the grounding mechanism that makes AI-powered data interaction reliable.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The promise of natural language querying (asking your data a question in plain English and getting a trustworthy answer) has existed for years. The problem was always accuracy. LLMs generating SQL from natural language are impressive, but they hallucinate table names, misinterpret joins, and produce subtly wrong answers with confident-sounding explanations. Without a structured definition of what "revenue" means in your specific context, the model is guessing.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                A well-built semantic layer solves this. When an AI model is constrained to query through a semantic API rather than writing raw SQL, it can only request metrics and dimensions that have been explicitly defined and governed. The business logic stays in the semantic layer. The AI's job becomes translation: turning a natural language question into a structured API call rather than reconstructing business logic from scratch.
              </p>

              <div className="bg-cyan-900/30 border border-cyan-400/20 rounded-xl p-6 my-6">
                <h3 className="text-cyan-300 font-bold mb-3">The Shift in AI Data Interaction</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest mb-3">Without Semantic Layer</p>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span>AI writes raw SQL against raw tables</li>
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span>Business logic duplicated or misunderstood</li>
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span>Metric definitions vary by query</li>
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span>High hallucination risk on complex joins</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest mb-3">With Semantic Layer</p>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">✓</span>AI queries governed metric definitions</li>
                      <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">✓</span>Business logic defined once, used everywhere</li>
                      <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">✓</span>Consistent answers regardless of who asks</li>
                      <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">✓</span>AI handles translation, not reconstruction</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed">
                This is why tools like Cube, AtScale, and dbt are investing heavily in LLM integrations. They are not just BI infrastructure. They are becoming the trust layer for AI-powered analytics. The semantic layer ensures that when someone asks "what is our net revenue retention for enterprise customers this quarter?", the AI does not guess at the SQL. It requests the <code className="bg-slate-700 px-1.5 py-0.5 rounded text-cyan-300 text-sm">nrr</code> metric for the <code className="bg-slate-700 px-1.5 py-0.5 rounded text-cyan-300 text-sm">enterprise</code> segment from a definition that has been reviewed, tested, and approved by the data team.
              </p>
            </div>

            {/* Section 5 */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Emerging Patterns: AI Native Semantic Approaches</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Beyond connecting LLMs to existing semantic layers, a new class of tools is being designed with AI as a first-class citizen from the start.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                <a href="https://medium.com/airbnb-engineering/how-airbnb-achieved-metric-consistency-at-scale-f23cc53dea70" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-cyan-300 transition-colors underline underline-offset-2 decoration-white/30">Airbnb's Minerva</a> (internal but widely discussed) was one of the first large-scale demonstrations that a company could define all of its metrics in a central platform, expose them through a consistent API, and use that layer to power everything from executive dashboards to machine learning feature stores. Minerva's influence has shaped much of how the open-source community thinks about metric governance at scale.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                <a href="https://www.microsoft.com/en-us/microsoft-fabric" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-cyan-300 transition-colors underline underline-offset-2 decoration-white/30">Microsoft Fabric</a> is taking a different approach by embedding AI directly into the data platform itself. Its semantic model layer, built on Analysis Services technology, is being extended with Copilot capabilities that allow natural language Q&amp;A grounded in the defined model, not in raw warehouse tables. The bet is that tight integration between the semantic layer and the AI interface produces more reliable results than loosely coupled third-party integrations.
              </p>
              <p className="text-slate-300 leading-relaxed">
                <a href="https://www.databricks.com/product/unity-catalog" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-cyan-300 transition-colors underline underline-offset-2 decoration-white/30">Databricks Unity Catalog</a> has also moved in this direction, using its catalog and governance layer as the semantic foundation for Databricks' AI assistant features. When AI queries in Databricks are grounded in Unity Catalog's defined tables, metrics, and lineage information, the results are more consistent and the access controls remain intact.
              </p>
            </div>

            {/* Section 5.5 - OSI */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Industry Convergence: The Open Semantic Interchange Initiative</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Perhaps the clearest signal that semantic layers have become foundational infrastructure arrived in September 2025, when longtime competitors publicly acknowledged they had a shared problem to solve.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Snowflake, Salesforce, dbt Labs, and BlackRock—normally organizations that compete aggressively across the data stack—announced the{" "}
                <a href="https://www.snowflake.com/en/news/press-releases/snowflake-salesforce-dbt-labs-and-more-revolutionize-data-readiness-for-ai-with-open-semantic-interchange-initiative/" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-cyan-300 transition-colors underline underline-offset-2 decoration-white/30">Open Semantic Interchange (OSI) initiative</a>, an open source effort to standardize how business logic and metric definitions travel between platforms. The idea is straightforward: if every vendor encodes semantic definitions in a proprietary format, AI agents that cross tool boundaries will inevitably encounter conflicting definitions of the same metric. Revenue calculated in Salesforce&apos;s CRM won&apos;t match revenue as defined in dbt&apos;s Semantic Layer, and neither may align with what Snowflake&apos;s Cortex Analyst expects.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                OSI addresses this by specifying a <strong className="text-white">vendor-neutral, YAML-based standard</strong> for expressing metrics, hierarchies, and relationships—building deliberately on existing conventions developers already know. The specification is designed for immediate compatibility with tools like dbt&apos;s Semantic Layer, lowering the adoption barrier for teams already invested in modern data stacks.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The initiative&apos;s rapid expansion reflects how the industry feels this gap. By early 2026, the OSI working group had grown to include Databricks, AtScale, Coalesce, Lightdash, and Qlik, among others. An unusual coalition of competitors operating under the recognition that fragmented semantics is a collective tax on every organization trying to deploy reliable AI analytics.
              </p>
              <p className="text-slate-300 leading-relaxed">
                For data teams, OSI signals a practical shift: metric definitions written today in conformant YAML will increasingly become portable assets, readable by AI agents, BI tools, and data pipelines from any vendor in the ecosystem. The governance investment compounds rather than depreciates as tooling evolves.
              </p>
            </div>

            {/* Section 6 */}
            <div className="rounded-2xl bg-slate-800/50 border border-white/10 p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Why This Matters for Your Data Stack</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                If you are building or rebuilding a data stack today, the semantic layer decision deserves the same level of architectural attention as your warehouse choice or your orchestration tool. Here is why.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                First, the proliferation of BI tools in most organizations has made metric consistency harder, not easier. When teams use Tableau, Power BI, and ad hoc SQL notebooks simultaneously, each tool calculates metrics independently. A semantic layer is the only architectural solution that enforces consistency across all of them at once.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Second, the AI tools coming to market assume that your data is well-governed. Tools that offer natural language querying, automated insight generation, or AI-driven anomaly detection all perform significantly better when they have access to a semantic layer rather than raw schemas. The semantic layer is the prerequisite for making these AI features trustworthy rather than impressive but unreliable.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Third, legacy semantic implementations, particularly those built inside proprietary BI platforms like older versions of Cognos or BusinessObjects, create technical debt that blocks AI adoption. The business logic trapped inside those platforms cannot be exposed to modern AI systems without rebuilding it in a format those systems understand. Organizations investing in AI analytics today are also, necessarily, investing in modernizing their semantic layer.
              </p>

              <div className="bg-indigo-900/30 border border-indigo-400/20 rounded-xl p-6 mt-6">
                <h3 className="text-indigo-300 font-bold mb-2">The bottom line</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The semantic layer was once a nice-to-have for large enterprises with complex reporting needs. It is now foundational infrastructure for any organization that wants to use AI to interact with their data reliably. The companies that define their metrics clearly, govern them centrally, and expose them through a consistent API will be in a dramatically stronger position as AI analytics tools continue to mature.
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
                <li><a href="#" className="hover:text-white transition-colors">What the Semantic Layer Does</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legacy Systems and OLAP</a></li>
                <li><a href="#" className="hover:text-white transition-colors">The Modern Semantic Layer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Where AI Changes Everything</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Native Approaches</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Open Semantic Interchange</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Why It Matters for Your Stack</a></li>
              </ul>
            </div>

            {/* Technologies mentioned */}
            <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Technologies Covered</h3>
              <div className="space-y-3">
                {[
                  { name: "dbt Semantic Layer", tag: "Modern" },
                  { name: "Cube", tag: "Modern" },
                  { name: "LookML / Looker", tag: "Modern" },
                  { name: "AtScale", tag: "Modern" },
                  { name: "Microsoft Fabric", tag: "Modern" },
                  { name: "Databricks Unity Catalog", tag: "Modern" },
                  { name: "IBM Cognos", tag: "Legacy" },
                  { name: "SAP BusinessObjects", tag: "Legacy" },
                  { name: "Microsoft SSAS", tag: "Legacy" },
                  { name: "MicroStrategy", tag: "Legacy" },
                ].map((t) => (
                  <div key={t.name} className="flex items-center justify-between">
                    <span className="text-slate-300 text-sm">{t.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      t.tag === "Modern"
                        ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                        : "bg-slate-600/50 text-slate-400 border border-white/10"
                    }`}>{t.tag}</span>
                  </div>
                ))}
              </div>
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
            <div className="bg-gradient-to-br from-cyan-900/50 to-indigo-900/50 border border-cyan-400/20 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-2">Thinking about your semantic layer?</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Get a free data audit to understand where your business logic lives today and what it would take to modernize it.
              </p>
              <Link href="/#contact" className="block w-full text-center bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
                Book Free Audit
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
