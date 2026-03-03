import { Link } from 'react-router-dom'

export default function Booking() {
  return (
    <div>
      <section className="py-24 bubble-pattern min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#22bed9]/10 text-[#22bed9] mb-8">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-[#22bed9] font-semibold tracking-widest uppercase text-sm mb-4">
            Online Booking
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-6">
            Book your cleaning in minutes
          </h1>
          <p className="text-[#4a5763] text-lg mb-10">
            We’re connecting our booking system with BookingKoala for a seamless scheduling experience. 
            In the meantime, reach out via our contact form and we’ll get you on the schedule.
          </p>

          {/* Placeholder for BookingKoala embed - replace with your BookingKoala widget/iframe when ready */}
          <div className="rounded-2xl border-2 border-dashed border-[#22bed9]/40 bg-[#22bed9]/5 p-12 mb-10">
            <p className="text-[#4a5763] font-medium mb-2">
              BookingKoala integration coming soon
            </p>
            <p className="text-[#4a5763]/80 text-sm">
              Once configured, your booking widget will appear here. 
              Add your BookingKoala embed code or iframe in <code className="bg-white/50 px-1.5 py-0.5 rounded text-xs">src/pages/Booking.jsx</code>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#22bed9] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a9bb5] transition-colors glow-aqua"
            >
              Request a Quote
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#4a5763] text-[#4a5763] px-8 py-4 rounded-full font-semibold hover:border-[#22bed9] hover:text-[#22bed9] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
