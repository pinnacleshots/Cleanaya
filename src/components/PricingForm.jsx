import { useState } from 'react'

export default function PricingForm({ compact = false }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [bedrooms, setBedrooms] = useState(1)
  const [bathrooms, setBathrooms] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to BookingKoala - replace with your BookingKoala API/widget.
    // Send: { name, email, mobile, bedrooms, bathrooms }
    setSubmitted(true)
    setName('')
    setEmail('')
    setMobile('')
    setBedrooms(1)
    setBathrooms(1)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
      <h3 className="font-display text-xl font-bold text-[#0a0a0a] mb-6">
        Get your home cleaning price
      </h3>
      <p className="text-[#4a5763] text-sm mb-6">
        Book a cleaning instantly. We&apos;ll get back with a quote.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="pricing-name" className="block text-sm font-medium text-[#4a5763] mb-1">Name</label>
          <input
            id="pricing-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#22bed9] focus:ring-2 focus:ring-[#22bed9]/20 outline-none transition-all"
            placeholder="Your name"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#4a5763] mb-2">Bedrooms</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setBedrooms((b) => Math.max(1, b - 1))}
                className="w-10 h-10 rounded-lg border border-slate-200 text-[#4a5763] hover:bg-slate-50 font-medium"
              >
                −
              </button>
              <span className="w-12 text-center font-semibold text-[#0a0a0a]">{bedrooms}</span>
              <button
                type="button"
                onClick={() => setBedrooms((b) => Math.min(10, b + 1))}
                className="w-10 h-10 rounded-lg border border-slate-200 text-[#4a5763] hover:bg-slate-50 font-medium"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#4a5763] mb-2">Bathrooms</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setBathrooms((b) => Math.max(1, b - 1))}
                className="w-10 h-10 rounded-lg border border-slate-200 text-[#4a5763] hover:bg-slate-50 font-medium"
              >
                −
              </button>
              <span className="w-12 text-center font-semibold text-[#0a0a0a]">{bathrooms}</span>
              <button
                type="button"
                onClick={() => setBathrooms((b) => Math.min(10, b + 1))}
                className="w-10 h-10 rounded-lg border border-slate-200 text-[#4a5763] hover:bg-slate-50 font-medium"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="pricing-email" className="block text-sm font-medium text-[#4a5763] mb-1">Email</label>
          <input
            id="pricing-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#22bed9] focus:ring-2 focus:ring-[#22bed9]/20 outline-none transition-all"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="pricing-mobile" className="block text-sm font-medium text-[#4a5763] mb-1">Mobile</label>
          <input
            id="pricing-mobile"
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#22bed9] focus:ring-2 focus:ring-[#22bed9]/20 outline-none transition-all"
            placeholder="(952) 206-6429"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#22bed9] text-white py-4 rounded-xl font-bold text-lg uppercase tracking-wide hover:bg-[#1a9bb5] transition-colors glow-aqua mt-2"
        >
          Get Price
        </button>
      </div>

      {submitted && (
        <p className="mt-4 text-[#22bed9] font-medium text-center text-sm">
          Thanks! We&apos;ll send your quote shortly. Or call us at <a href="tel:9522066429" className="underline">(952) 206-6429</a>.
        </p>
      )}

      {!compact && (
        <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2 justify-center">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-5 h-5 text-[#22bed9]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[#4a5763] text-sm">Cleanaya is rated 5.0 based on reviews</span>
        </div>
      )}

      {!compact && (
        <div className="mt-4 flex flex-wrap gap-6 justify-center text-sm text-[#4a5763]">
          <span className="flex items-center gap-1.5">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Trusted Cleaners
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            5 Star Rated Service
          </span>
        </div>
      )}
    </form>
  )
}
