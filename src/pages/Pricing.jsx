import PricingForm from '../components/PricingForm'

export default function Pricing() {
  return (
    <div>
      <section className="py-24 bubble-pattern min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#22bed9] font-semibold tracking-widest uppercase text-sm mb-4">
                Transparent Pricing
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-6">
                Get your home cleaning price
              </h1>
              <p className="text-[#4a5763] text-lg leading-relaxed mb-8">
                Book a cleaning instantly. Enter your details and home size below—we&apos;ll send you a customized quote. 
                No hidden fees, no surprises.
              </p>
              <div className="flex items-center gap-4 text-[#4a5763]">
                <a href="tel:9522066429" className="flex items-center gap-2 text-[#22bed9] font-semibold hover:underline">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (952) 206-6429
                </a>
              </div>
            </div>
            <div className="max-w-md">
              <PricingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
