import Link from "next/link";

export default function AuthorBio() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 pb-16">
      <div className="border-t border-white/10 pt-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-2xl">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/40 flex-shrink-0">
            <img src="/photos/sevillapic hs.jpg" alt="Justin Leu" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-white font-bold text-lg mb-1">Justin Leu</p>
            <p className="text-blue-400 text-sm font-medium mb-3">Data &amp; BI Consultant · San Francisco</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              17+ years helping companies like Google, Pinterest, Salesforce, and United Healthgroup turn raw data into actionable business intelligence. I write about BI strategy, data infrastructure, and the practical side of analytics.
            </p>
            <Link href="/#contact" className="inline-block mt-4 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors">
              Work with me →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
