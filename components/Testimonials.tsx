export default function Testimonials() {
  const testimonials = [
    {
      quote: "Justin is an excellent coworker and very knowledgeable in his line of work. My team would often times come to Justin for help in troubleshooting our technical data problems and Justin would respond with a fantastic solution in a professionally sound manner.",
      author: "Barbara Arellano",
      company: "Google",
      role: "Global Process Manager, Indirect Procurement",
      photo: "/photos/testimonials/google-senior-manager.jpg"
    },
    {
      quote: "We were just getting our feet wet with analytics and becoming smarter about our data. Justin was able to provide expertise in Tableau consulting. He provided us with a Tableau proof of concept solution which combined modern data infrastructure and compelling visualizations to show to our HR executives in order to gain visibility in our workforce analytics.",
      author: "Kim Bates",
      company: "Webcor Builders",
      role: "Vice President, CIO",
      photo: "/photos/testimonials/webcor-vp-engineering.jpg"
    },
    {
      quote: "Justin (Klardata) was a huge help in helping get key data in the hands of decision makers in a way that made complex metrics easy to understand.",
      author: "Brian Girer",
      company: "NEXT Trucking",
      role: "Product Manager",
      photo: "/photos/testimonials/next-trucking-director.jpg"
    },
    {
      quote: "Justin is an excellent communicator and produced terrific work on our first project together. It was an overall great experience. I am looking forward to working with him again.",
      author: "Cheryl Harris",
      company: "Research360",
      role: "Applied Researcher",
      photo: "/photos/testimonials/edtech-cto.jpg"
    },
    {
      quote: "Justin is a strong team player and hard worker. He has developed solid technical skills that compliment his analytical approach to problem resolution.",
      author: "Telecommunications VP",
      company: "Hitachi Consulting",
      role: "Telecommunications",
      photo: "/photos/testimonials/saas-head-of-data.jpg"
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
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                    <span className="hidden text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
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
            <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
            <div className="text-slate-600">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">17+</div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
            <div className="text-slate-600">Fortune 500 Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
