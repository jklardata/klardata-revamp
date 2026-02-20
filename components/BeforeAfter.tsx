export default function BeforeAfter() {
  const beforeItems = [
    {
      icon: "❌",
      title: "Scattered Data",
      description: "Information trapped in spreadsheets, multiple systems, and siloed departments"
    },
    {
      icon: "⏱️",
      title: "Manual Reporting",
      description: "Hours spent copying data into reports that are outdated by the time they're finished"
    },
    {
      icon: "🤔",
      title: "Gut Decisions",
      description: "Critical business choices made on instinct rather than hard evidence"
    },
    {
      icon: "📊",
      title: "Static Dashboards",
      description: "Reports that show what happened last month but don't help predict tomorrow"
    }
  ];

  const afterItems = [
    {
      icon: "✅",
      title: "Unified Data Platform",
      description: "All your business data centralized and accessible in one intelligent system"
    },
    {
      icon: "⚡",
      title: "Automated Insights",
      description: "Real-time dashboards that update automatically, saving 20+ hours per week"
    },
    {
      icon: "🎯",
      title: "Data-Driven Decisions",
      description: "Every strategic choice backed by accurate data and predictive analytics"
    },
    {
      icon: "🚀",
      title: "Proactive Intelligence",
      description: "Forward-looking metrics that spot trends before they become problems"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-100 rounded-full border border-slate-200 mb-4">
            <span className="text-slate-700 text-sm font-semibold">THE TRANSFORMATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Your Business: Before vs. After
            <br />
            <span className="text-primary-600">Data Intelligence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how businesses transform when they stop guessing and start knowing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Before */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-red-100 rounded-2xl -z-10" />
            <div className="bg-white border-2 border-red-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">😰</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Before</h3>
                  <p className="text-slate-600 text-sm">The Data Struggle</p>
                </div>
              </div>

              <div className="space-y-6">
                {beforeItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-red-50 rounded-lg p-5 border border-red-100"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-red-100 rounded-lg border border-red-200">
                <p className="text-sm text-red-800 font-medium text-center">
                  Result: Missed opportunities, wasted time, uncertain future
                </p>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-green-100 rounded-2xl -z-10" />
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎉</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">After</h3>
                  <p className="text-slate-600 text-sm">Data Excellence</p>
                </div>
              </div>

              <div className="space-y-6">
                {afterItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-green-50 rounded-lg p-5 border border-green-100"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-100 rounded-lg border border-green-200">
                <p className="text-sm text-green-800 font-medium text-center">
                  Result: Clear visibility, confident decisions, accelerated growth
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-4xl font-bold text-primary-600 mb-2">80%</div>
            <div className="text-slate-700 font-medium">Reduction in Report Time</div>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-4xl font-bold text-primary-600 mb-2">3x</div>
            <div className="text-slate-700 font-medium">Faster Decision Making</div>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-4xl font-bold text-primary-600 mb-2">$250K+</div>
            <div className="text-slate-700 font-medium">Avg. Annual Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
}
