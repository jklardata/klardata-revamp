"use client";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-800 via-primary-900 to-slate-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Data Into
              <br />
              <span className="text-primary-300">Actionable Insights</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
              Expert business intelligence and analytics consulting for growing businesses
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </button>
              <a
                href="#about"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">17+</div>
                <div className="text-blue-300 text-xs md:text-sm">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-blue-300 text-xs md:text-sm">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-blue-300 text-xs md:text-sm">Client Satisfaction</div>
              </div>
            </div>

            {/* Mobile Visualization */}
            <div className="lg:hidden mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl max-w-md mx-auto">
                <div className="text-white/80 text-sm font-semibold mb-4 text-center">Real-Time Analytics</div>

                {/* Quick Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-center">
                    <div className="text-primary-300 text-3xl font-bold mb-1">↗ 145%</div>
                    <div className="text-white/60 text-xs">Growth Rate</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-center">
                    <div className="text-green-400 text-3xl font-bold mb-1">$2.4M</div>
                    <div className="text-white/60 text-xs">Revenue</div>
                  </div>
                </div>

                {/* Mini Bar Chart */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-end justify-between h-20 gap-2">
                    <div className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t animate-pulse" style={{ height: '50%' }}></div>
                    <div className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t" style={{ height: '70%' }}></div>
                    <div className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t animate-pulse" style={{ height: '85%' }}></div>
                    <div className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t" style={{ height: '100%' }}></div>
                    <div className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t animate-pulse" style={{ height: '75%' }}></div>
                  </div>
                  <div className="text-white/60 text-xs text-center mt-3">Monthly Performance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Desktop Analytics Visualization */}
          <div className="hidden lg:block relative">
            <div className="relative space-y-4">
              {/* Main Dashboard */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-white/60 text-xs font-mono">Analytics Dashboard</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Left Column */}
                  <div className="space-y-4">
                    {/* Bar Chart */}
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="text-white/80 text-sm font-semibold mb-3">Revenue Trends</div>
                      <div className="flex items-end justify-between h-28 gap-1.5">
                        <div className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t animate-pulse" style={{ height: '55%', animationDuration: '2s' }}></div>
                        <div className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t" style={{ height: '70%' }}></div>
                        <div className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t animate-pulse" style={{ height: '82%', animationDuration: '2.5s' }}></div>
                        <div className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t" style={{ height: '100%' }}></div>
                        <div className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t animate-pulse" style={{ height: '90%', animationDuration: '2.2s' }}></div>
                        <div className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t" style={{ height: '95%' }}></div>
                      </div>
                    </div>

                    {/* Donut Chart */}
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="text-white/80 text-sm font-semibold mb-3">Data Sources</div>
                      <div className="flex items-center justify-center">
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="#0ea5e9"
                            strokeWidth="15"
                            strokeDasharray="75 251"
                            transform="rotate(-90 50 50)"
                            className="animate-pulse"
                            style={{ animationDuration: '3s' }}
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="15"
                            strokeDasharray="63 251"
                            strokeDashoffset="-75"
                            transform="rotate(-90 50 50)"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="#7dd3fc"
                            strokeWidth="15"
                            strokeDasharray="50 251"
                            strokeDashoffset="-138"
                            transform="rotate(-90 50 50)"
                            className="animate-pulse"
                            style={{ animationDuration: '2.5s' }}
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="#bae6fd"
                            strokeWidth="15"
                            strokeDasharray="63 251"
                            strokeDashoffset="-188"
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#0ea5e9]"></div>
                          <span className="text-white/60">CRM</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#38bdf8]"></div>
                          <span className="text-white/60">Sales</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#7dd3fc]"></div>
                          <span className="text-white/60">Web</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#bae6fd]"></div>
                          <span className="text-white/60">Social</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    {/* Metrics Grid */}
                    <div className="space-y-3">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="text-white/60 text-xs mb-1">Total Revenue</div>
                        <div className="text-white text-xl font-bold">$2.4M</div>
                        <div className="text-green-400 text-xs flex items-center mt-1">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                          +23.5%
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="text-white/60 text-xs mb-1">Active Users</div>
                        <div className="text-white text-xl font-bold">12.8K</div>
                        <div className="text-green-400 text-xs flex items-center mt-1">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                          +18.2%
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="text-white/60 text-xs mb-1">Conversion Rate</div>
                        <div className="text-white text-xl font-bold">34.2%</div>
                        <div className="text-green-400 text-xs flex items-center mt-1">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                          +5.3%
                        </div>
                      </div>
                    </div>

                    {/* Heatmap */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-white/80 text-sm font-semibold mb-2">Activity</div>
                      <div className="grid grid-cols-7 gap-1">
                        {[...Array(28)].map((_, i) => {
                          const intensity = Math.random();
                          const opacity = 0.2 + intensity * 0.8;
                          return (
                            <div
                              key={i}
                              className="aspect-square rounded-sm"
                              style={{
                                backgroundColor: `rgba(14, 165, 233, ${opacity})`,
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Line Chart */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10 mt-4">
                  <div className="text-white/80 text-sm font-semibold mb-3">Performance Metrics</div>
                  <svg className="w-full h-24" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
                      </linearGradient>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="50%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#7dd3fc" />
                      </linearGradient>
                    </defs>

                    {/* Area fill */}
                    <path
                      d="M0,80 Q50,65 100,60 T200,45 T300,35 T400,25 L400,100 L0,100 Z"
                      fill="url(#areaGradient)"
                    >
                      <animate
                        attributeName="d"
                        dur="4s"
                        repeatCount="indefinite"
                        values="
                          M0,80 Q50,65 100,60 T200,45 T300,35 T400,25 L400,100 L0,100 Z;
                          M0,75 Q50,58 100,55 T200,40 T300,32 T400,22 L400,100 L0,100 Z;
                          M0,80 Q50,65 100,60 T200,45 T300,35 T400,25 L400,100 L0,100 Z
                        "
                      />
                    </path>

                    {/* Line */}
                    <path
                      d="M0,80 Q50,65 100,60 T200,45 T300,35 T400,25"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="d"
                        dur="4s"
                        repeatCount="indefinite"
                        values="
                          M0,80 Q50,65 100,60 T200,45 T300,35 T400,25;
                          M0,75 Q50,58 100,55 T200,40 T300,32 T400,22;
                          M0,80 Q50,65 100,60 T200,45 T300,35 T400,25
                        "
                      />
                    </path>

                    {/* Animated dots */}
                    <circle r="4" fill="#0ea5e9">
                      <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path="M0,80 Q50,65 100,60 T200,45 T300,35 T400,25"
                      />
                    </circle>
                  </svg>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-lg animate-pulse">
                ↗ Live Data
              </div>
              <div className="absolute top-1/3 -left-6 bg-primary-500 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-lg">
                Real-time Analytics
              </div>
              <div className="absolute -bottom-4 right-1/4 bg-purple-500 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-lg animate-pulse" style={{ animationDuration: '3s' }}>
                AI-Powered
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
