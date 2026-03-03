import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#22bed9] via-[#1a9bb5] to-[#4a5763]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.08\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'4\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
          Ready for a cleaner space?
        </h2>
        <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
          Book your first cleaning today and experience the Cleanaya difference. 
          Flexible scheduling, transparent pricing, and results you’ll love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0a0a0a] px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition-colors duration-300"
          >
            Book Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
