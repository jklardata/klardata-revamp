export default function Testimonials() {
  const testimonials = [
    {
      quote: "Justin is knowledgeable, very professional and gets things done in a timely manner. He has excellent communication skills and goes the extra mile in making complex metrics easy to understand. I would highly recommend him.",
      author: "Senior Manager",
      company: "Google",
      role: "Product Analytics"
    },
    {
      quote: "Working with Justin was a pleasure. His technical expertise in data warehousing and business intelligence helped us build a robust analytics infrastructure that scaled with our growth. He delivered ahead of schedule and exceeded expectations.",
      author: "VP of Engineering",
      company: "Webcor Builders",
      role: "Construction Technology"
    },
    {
      quote: "Justin's ability to understand our business needs and translate them into actionable data solutions was impressive. The dashboards he built became essential tools for our executive team. His attention to detail and commitment to quality stood out.",
      author: "Director of Operations",
      company: "NEXT Trucking",
      role: "Logistics"
    },
    {
      quote: "We brought Justin in to modernize our legacy reporting systems. Not only did he deliver a modern BI platform, but he also trained our team to maintain and extend it. His knowledge transfer was invaluable.",
      author: "CTO",
      company: "Education Startup",
      role: "EdTech"
    },
    {
      quote: "Justin's expertise in Tableau and AWS helped us launch our analytics platform in record time. His proof of concept convinced our stakeholders, and the final product transformed how we make decisions. Highly recommended.",
      author: "Head of Data",
      company: "SaaS Company",
      role: "Enterprise Software"
    },
    {
      quote: "The ETL pipelines Justin built for us are rock-solid and have been running flawlessly for over two years. His code is clean, well-documented, and maintainable. A true professional who delivers production-quality work.",
      author: "Engineering Lead",
      company: "Financial Services",
      role: "FinTech"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              {/* Quote Icon */}
              <svg
                className="w-10 h-10 text-primary-200 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className="text-slate-700 leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-slate-100 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm font-medium text-primary-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-slate-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-slate-600">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">17+</div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">4</div>
            <div className="text-slate-600">Fortune 500 Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
