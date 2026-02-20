import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      title: "5 Signs Your Business Needs a Data Warehouse",
      excerpt: "Spreadsheets worked when you started, but now they're holding you back. Here's how to know when it's time to upgrade your data infrastructure.",
      date: "Feb 5, 2026",
      category: "Data Infrastructure",
      readTime: "5 min read",
      slug: "5-signs-business-needs-data-warehouse"
    },
    {
      title: "Tableau vs. Power BI: Which BI Tool is Right for You?",
      excerpt: "An honest comparison of the two leading business intelligence platforms, including costs, capabilities, and ideal use cases.",
      date: "Jan 28, 2026",
      category: "BI Tools",
      readTime: "8 min read",
      slug: "tableau-vs-power-bi"
    },
    {
      title: "How to Calculate ROI on Business Intelligence Investment",
      excerpt: "BI projects often struggle to show value. This framework helps you quantify the impact and justify the investment to stakeholders.",
      date: "Jan 15, 2026",
      category: "Strategy",
      readTime: "6 min read",
      slug: "roi-business-intelligence"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-100 rounded-full border border-slate-200 mb-4">
            <span className="text-slate-700 text-sm font-semibold">INSIGHTS & RESOURCES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Latest from the Blog
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Practical guides and insights on data analytics, business intelligence, and making better decisions with data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary-300 group block"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary-600/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Date & Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{post.date}</span>
                  <span className="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
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

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-4 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200 transition-colors border-2 border-slate-200"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
