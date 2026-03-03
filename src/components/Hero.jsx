import PricingForm from './PricingForm'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bubble-pattern">
      {/* Decorative bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#22bed9]/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#22bed9]/5 blur-3xl" />
        <div className="absolute top-2/3 right-1/3 w-32 h-32 rounded-full border-2 border-[#22bed9]/20" />
        <div className="absolute top-1/3 left-1/3 w-4 h-4 rounded-full bg-[#22bed9]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#22bed9] font-semibold tracking-widest uppercase text-sm mb-4">
              Minnesota&apos;s Trusted Cleaning Partner
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#0a0a0a] leading-tight mb-6">
              Spaces that{' '}
              <span className="text-[#22bed9]">sparkle</span>
              , peace of mind that lasts
            </h1>
            <p className="text-xl text-[#4a5763] leading-relaxed mb-6 max-w-xl">
              Book a trusted cleaner instantly. Get your price and schedule in minutes.
            </p>
            <a href="tel:9522066429" className="inline-flex items-center gap-2 text-[#22bed9] font-semibold hover:underline">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (952) 206-6429
            </a>
          </div>
          <div className="max-w-md mx-auto lg:mx-0">
            <PricingForm compact />
          </div>
        </div>
      </div>
    </section>
  )
}
