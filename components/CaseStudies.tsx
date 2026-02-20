"use client";

import { useState } from "react";

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      title: "Higher Education Startup",
      industry: "Education Technology",
      challenge: "A growing EdTech startup needed to centralize student engagement data and provide real-time insights to administrators and educators.",
      solution: "Implemented Tableau Server on AWS infrastructure with automated ETL pipelines pulling data from multiple sources. Created interactive dashboards tracking student performance, engagement metrics, and enrollment trends.",
      results: [
        "Reduced report generation time from days to minutes",
        "90% adoption rate among administrators",
        "Enabled data-driven program improvements",
        "Scalable infrastructure supporting 10x growth"
      ],
      tech: ["Tableau Server", "AWS", "Python ETL", "PostgreSQL"]
    },
    {
      title: "Real Estate Market Analysis",
      industry: "Real Estate",
      challenge: "Commercial real estate firm needed to analyze market trends and competitive positioning across multiple markets using unstructured data.",
      solution: "Built custom NLP pipeline to extract insights from property listings and market reports. Developed Python-based visualization dashboards with heat mapping capabilities to identify market opportunities.",
      results: [
        "Identified $12M in undervalued properties",
        "50% reduction in market research time",
        "Automated competitive intelligence gathering",
        "Predictive models for market trends"
      ],
      tech: ["Python", "NLP", "Pandas", "Plotly", "AWS"]
    },
    {
      title: "Fire Department Analytics Portal",
      industry: "Public Safety",
      challenge: "City fire department required modernization of legacy reporting systems and real-time operational dashboards for emergency response optimization.",
      solution: "Deployed Tableau Server on AWS with secure data integration from CAD systems and incident management platforms. Created executive dashboards and operational views for real-time decision making.",
      results: [
        "15% improvement in response times",
        "Comprehensive incident analytics",
        "Resource allocation optimization",
        "Reduced manual reporting by 80%"
      ],
      tech: ["Tableau Server", "AWS", "SQL Server", "REST APIs"]
    },
    {
      title: "Competitor Analysis System",
      industry: "E-Commerce",
      challenge: "Fast-growing e-commerce company needed automated competitor price monitoring and market positioning analysis.",
      solution: "Developed Python-based web scraping and data wrangling system with automated heat map visualizations. Integrated with business intelligence platform for daily competitive intelligence reports.",
      results: [
        "Real-time competitive pricing insights",
        "Identified 20+ market gaps",
        "Dynamic pricing strategy support",
        "Automated daily reports to stakeholders"
      ],
      tech: ["Python", "BeautifulSoup", "Pandas", "Tableau", "AWS Lambda"]
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-world success stories from businesses I've helped transform through data
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCase === index
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {study.industry}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                {caseStudies[activeCase].industry}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                {caseStudies[activeCase].title}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">
                    Challenge
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    {caseStudies[activeCase].challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">
                    Solution
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    {caseStudies[activeCase].solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[activeCase].tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Results */}
            <div>
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-6">
                Results & Impact
              </h4>
              <div className="space-y-4">
                {caseStudies[activeCase].results.map((result, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-4 bg-white rounded-lg p-5 shadow-md"
                  >
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-slate-700 font-medium">{result}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-primary-600 rounded-lg text-white">
                <p className="text-lg font-semibold mb-2">
                  Want similar results for your business?
                </p>
                <p className="text-blue-100 mb-4 text-sm">
                  Let's discuss how I can help transform your data challenges into opportunities.
                </p>
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
