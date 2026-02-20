export default function Methodology() {
  const phases = [
    {
      day: "Days 1-30",
      title: "Discovery & Foundation",
      description: "We dive deep into your business operations, existing data sources, and key performance indicators. This phase establishes the groundwork for meaningful insights.",
      deliverables: [
        "Complete data landscape audit",
        "KPI identification & prioritization",
        "Data quality assessment",
        "Quick-win opportunities report"
      ],
      color: "from-primary-600 to-primary-700"
    },
    {
      day: "Days 31-60",
      title: "Build & Integration",
      description: "Your data infrastructure takes shape. We implement ETL pipelines, establish dashboards, and connect your disparate data sources into a unified system.",
      deliverables: [
        "Data warehouse setup",
        "Automated ETL pipelines",
        "Initial dashboard deployment",
        "Data governance framework"
      ],
      color: "from-primary-700 to-primary-800"
    },
    {
      day: "Days 61-90",
      title: "Optimize & Scale",
      description: "Your team gains confidence with the new tools. We refine dashboards based on feedback, train your staff, and ensure you're fully autonomous.",
      deliverables: [
        "Advanced analytics features",
        "Team training & documentation",
        "Performance optimization",
        "Ongoing support handoff"
      ],
      color: "from-primary-800 to-primary-900"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-600/20 rounded-full border border-primary-500/30 mb-4">
            <span className="text-primary-300 text-sm font-semibold">OUR METHODOLOGY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your First 90 Days of
            <br />
            <span className="text-primary-400">Data Transformation</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A proven framework to take you from data chaos to actionable insights in just three months
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-primary-700 to-primary-900 transform -translate-x-1/2" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? "lg:pr-1/2" : "lg:pl-1/2 lg:text-right"
                }`}
              >
                <div className="lg:w-1/2 lg:mx-auto">
                  <div className={`bg-gradient-to-br ${phase.color} rounded-2xl p-8 border border-white/10 shadow-2xl hover:scale-105 transition-transform duration-300`}>
                    {/* Timeline Dot */}
                    <div className="hidden lg:block absolute top-8 left-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-slate-900 transform -translate-x-1/2" />

                    <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-primary-300 text-sm font-bold mb-4">
                      {phase.day}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-white/80 mb-3">Key Deliverables:</p>
                      {phase.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <svg
                            className="w-5 h-5 text-primary-300 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-blue-100 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-300 mb-6">
            Ready to transform your data operations?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your 90-Day Journey
          </a>
        </div>
      </div>
    </section>
  );
}
