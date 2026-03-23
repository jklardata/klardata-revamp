export default function Solutions() {
  const solutions = [
    {
      name: "TableautoDbt",
      tagline: "Bridge Tableau and dbt, automatically.",
      description:
        "Stop rewriting SQL by hand. TableautoDbt extracts custom SQL and calculated fields from your Tableau workbooks and converts them into clean, version-controlled dbt models, so your team can build a proper semantic layer without starting from scratch.",
      tags: ["Tableau", "dbt", "Data Modeling", "Automation"],
      url: "https://tableautodbt.com",
      status: "live" as const,
    },
    {
      name: "Tableau Workbook Diff",
      tagline: "See exactly what changed between two workbooks.",
      description:
        "Upload two .twb files and get a structured diff of every calculated field, data source, sheet, parameter, and filter. Side-by-side formula highlighting makes it easy to pinpoint exactly what changed.",
      tags: ["Tableau", "Diff", "Version Control", "Audit"],
      url: "https://tableautodbt.com/diff",
      status: "live" as const,
    },
    {
      name: "Tableau Docs Generator",
      tagline: "Auto-generate documentation from any workbook.",
      description:
        "Upload a Tableau workbook and get a fully structured documentation package: calculated fields with dependency graphs, data sources, sheets, parameters, and filters. Export as JSON or Markdown, ready to paste into Notion or Confluence.",
      tags: ["Tableau", "Documentation", "Data Dictionary"],
      url: "https://tableautodbt.com/docs",
      status: "live" as const,
    },
    {
      name: "Tableau Calculated Field Auditor",
      tagline: "Find broken, unused, and complex fields before they break your workbook.",
      description:
        "Upload any Tableau workbook and get a full audit report: unused fields, circular dependencies, performance anti-patterns, deep nesting, and a complexity score for every calculated field. Filter by severity, search by name, and export to JSON.",
      tags: ["Tableau", "Audit", "Data Quality", "Performance"],
      url: "https://tableautodbt.com/audit",
      status: "live" as const,
    },
    {
      name: "Looker Chrome Extension",
      tagline: "Supercharge your Looker experience.",
      description:
        "A Chrome extension that enhances the Looker interface with productivity tools and shortcuts built for data analysts and BI teams. More details coming soon.",
      tags: ["Looker", "Chrome Extension", "BI"],
      url: null,
      status: "coming-soon" as const,
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Purpose-built tools for data and analytics teams, designed to solve real problems faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-8 shadow-md border border-slate-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 flex flex-col"
            >
              {solution.status === "coming-soon" && (
                <span className="absolute top-5 right-5 text-xs font-semibold bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              )}

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {solution.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {solution.tagline}
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {solution.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-primary-50 text-primary-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {solution.url ? (
                <a
                  href={solution.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors w-fit"
                >
                  Visit Site
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-400 rounded-lg font-semibold cursor-not-allowed w-fit">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
