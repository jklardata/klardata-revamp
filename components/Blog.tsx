import Link from "next/link";

const blogPosts = [
  {
    title: "5 Signs Your Business Needs a Data Warehouse",
    excerpt: "Spreadsheets worked when you started, but now they're holding you back. Here's how to know when it's time to upgrade your data infrastructure.",
    date: "Feb 5, 2026",
    category: "Data Infrastructure",
    readTime: "5 min read",
    slug: "5-signs-business-needs-data-warehouse",
    gradient: "from-blue-900 via-blue-800 to-cyan-900",
    accentColor: "text-cyan-400",
    icon: (
      <svg className="w-20 h-20 opacity-20 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    title: "Tableau vs. Power BI: Which BI Tool is Right for You?",
    excerpt: "An honest comparison of the two leading business intelligence platforms, including costs, capabilities, and ideal use cases.",
    date: "Jan 28, 2026",
    category: "BI Tools",
    readTime: "8 min read",
    slug: "tableau-vs-power-bi",
    gradient: "from-indigo-900 via-blue-900 to-violet-900",
    accentColor: "text-indigo-300",
    icon: (
      <svg className="w-20 h-20 opacity-20 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "How to Calculate ROI on Business Intelligence Investment",
    excerpt: "BI projects often struggle to show value. This framework helps you quantify the impact and justify the investment to stakeholders.",
    date: "Jan 15, 2026",
    category: "Strategy",
    readTime: "6 min read",
    slug: "roi-business-intelligence",
    gradient: "from-slate-900 via-blue-950 to-emerald-950",
    accentColor: "text-emerald-400",
    icon: (
      <svg className="w-20 h-20 opacity-20 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full border border-blue-400/20 mb-4">
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Insights & Resources</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest from the Blog
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Practical guides on data analytics, business intelligence, and making better decisions with data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/30"
            >
              {/* Thumbnail */}
              <div className={`relative h-52 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  {post.icon}
                </div>
                {/* Subtle grid overlay */}
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm ${post.accentColor}`}>
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-xs text-white/50">{post.readTime}</div>
              </div>

              {/* Content */}
              <div className="p-6 bg-slate-800/80">
                <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{post.date}</span>
                  <span className="text-blue-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-4 bg-white/5 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors border border-white/15 hover:border-white/30"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
