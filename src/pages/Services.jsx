import { Link } from 'react-router-dom'
import { services as serviceLinks } from '../data/services'

export default function Services() {
  return (
    <div>
      <section className="py-24 bubble-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#22bed9] font-semibold tracking-widest uppercase text-sm mb-4">
              What We Offer
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-[#0a0a0a] mb-4">
              All Services
            </h1>
            <p className="text-[#4a5763] text-lg">
              From homes to offices, we deliver consistent quality and care across Minnesota. Select a service to learn more.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceLinks.filter((s) => s.slug).map(({ slug, label }) => (
              <Link
                key={slug}
                to={`/services/${slug}`}
                className="block p-6 rounded-xl border border-slate-100 hover:border-[#22bed9]/30 hover:shadow-lg hover:shadow-[#22bed9]/5 bg-white transition-all duration-300 group"
              >
                <span className="text-[#4a5763] group-hover:text-[#22bed9] font-medium transition-colors">
                  {label}
                </span>
                <span className="inline-block mt-2 text-[#22bed9] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#4a5763] mb-6">Ready to get started?</p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-[#22bed9] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#1a9bb5] transition-colors glow-aqua"
          >
            Book a Cleaning
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
