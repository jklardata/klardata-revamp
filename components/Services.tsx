export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Business Assessment & Data Discovery",
      description: "Comprehensive evaluation of your current data landscape and strategic planning for BI implementation. I analyze your existing systems, identify gaps, and create a roadmap for success.",
      benefits: ["Data audit", "BI strategy", "Technology recommendations", "ROI projections"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Proof of Concept",
      description: "Rapid prototyping and validation of BI solutions before full implementation. Build working demos to prove value and get stakeholder buy-in.",
      benefits: ["Infrastructure setup", "Tool evaluation", "Pilot dashboards", "Quick wins"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Data Infrastructure & ETL",
      description: "Design and implement robust data pipelines to centralize disparate data sources. Build scalable infrastructure that grows with your business.",
      benefits: ["Data warehousing", "ETL pipelines", "AWS/cloud setup", "Data modeling"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Tableau Business Intelligence",
      description: "End-to-end Tableau implementation from server setup to dashboard design. Create intuitive, interactive visualizations that empower data-driven decisions.",
      benefits: ["Tableau Server/Cloud", "Dashboard development", "User training", "Best practices"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Ongoing BI Support",
      description: "Continuous support and optimization for your existing BI systems. Keep your analytics infrastructure running smoothly and evolving with your needs.",
      benefits: ["System maintenance", "Performance tuning", "Feature enhancements", "Troubleshooting"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive business intelligence solutions tailored to your needs, from strategy to implementation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary-200 group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-sm text-slate-700">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600 mb-6">
            Not sure which service you need?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
