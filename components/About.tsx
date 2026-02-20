export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What I Do
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                I help medium-sized businesses and startups make better decisions through
                data-driven insights and robust business intelligence solutions.
              </p>
              <p>
                With over <strong className="text-slate-900">17 years of experience</strong> working
                with industry leaders like <strong className="text-primary-600">Google</strong>,
                <strong className="text-primary-600"> Pinterest</strong>,
                <strong className="text-primary-600"> Salesforce</strong>,
                <strong className="text-primary-600"> United Healthgroup</strong>,
                <strong className="text-primary-600"> Herman Miller</strong>,
                <strong className="text-primary-600"> Eventbrite</strong>,
                <strong className="text-primary-600"> DirecTV</strong>, and
                <strong className="text-primary-600"> Toyota Motors</strong>, I bring enterprise-level
                expertise to growing organizations.
              </p>
              <p>
                My approach focuses on understanding your unique business challenges and
                delivering practical, scalable solutions that drive measurable results.
              </p>
            </div>

            {/* Key Expertise */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Business Intelligence",
                "Data Warehousing",
                "Tableau & Visualization",
                "ETL & Data Pipeline",
                "AWS Infrastructure",
                "Database Development",
                "Analytics Strategy",
                "Data Integration"
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center space-x-2 text-sm text-slate-700"
                >
                  <svg
                    className="w-5 h-5 text-primary-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element with Photo */}
          <div className="relative">
            {/* Profile Photo */}
            <div className="relative mb-8">
              <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/photos/sevillapic hs.jpg"
                  alt="Justin Leu"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">JL</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-200 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-2xl -z-10" />
            </div>

            <div className="relative bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                {/* Experience Block */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">17+ Years</div>
                      <div className="text-sm text-slate-600">Industry Experience</div>
                    </div>
                  </div>
                </div>

                {/* Location Block */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900">San Francisco</div>
                      <div className="text-sm text-slate-600">Global Availability</div>
                    </div>
                  </div>
                </div>

                {/* Clients Block */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-sm text-slate-600 mb-3">Trusted by</div>
                  <div className="grid grid-cols-2 gap-3 text-sm font-medium text-slate-700">
                    <div>• Google</div>
                    <div>• Pinterest</div>
                    <div>• Salesforce</div>
                    <div>• United Healthgroup</div>
                    <div>• Herman Miller</div>
                    <div>• Eventbrite</div>
                    <div>• DirecTV</div>
                    <div>• Toyota Motors</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-primary-100 rounded-2xl -z-10 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
