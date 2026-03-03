import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'How do I get a quote?',
    a: 'Use our pricing form on the home page or Pricing page—enter your name, email, phone, and home size (bedrooms/bathrooms). We’ll send you a custom quote quickly. You can also call (952) 206-6429.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the Twin Cities metro and greater Minnesota, including Minneapolis, St. Paul, Edina, Bloomington, Eden Prairie, and surrounding areas.',
  },
  {
    q: 'Do you bring your own supplies?',
    a: 'Yes. We bring all cleaning products and equipment. If you prefer eco-friendly or specific products, let us know and we’ll accommodate.',
  },
  {
    q: 'How far in advance do I need to book?',
    a: 'We recommend booking at least 24–48 hours ahead. For same-day or urgent cleans, call (952) 206-6429 and we’ll do our best to fit you in.',
  },
  {
    q: 'What if I’m not satisfied?',
    a: 'We offer a 100% satisfaction guarantee. If you’re not happy with any aspect of the clean, contact us within 24 hours and we’ll make it right.',
  },
  {
    q: 'Do you do recurring cleaning?',
    a: 'Yes. We offer weekly, bi-weekly, and monthly recurring cleaning. Many of our clients prefer a regular schedule for consistent results.',
  },
  {
    q: 'Are you insured?',
    a: 'Yes. We are insured and bonded for your peace of mind.',
  },
  {
    q: 'Do you clean Airbnb/vacation rentals?',
    a: 'Yes. We specialize in turnaround cleaning for Airbnb and vacation rentals. We handle between-guest cleans, linen changes, and quick turnaround.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div>
      <section className="py-24 bubble-pattern">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#22bed9] font-semibold tracking-widest uppercase text-sm mb-4">
            FAQs
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[#4a5763] text-lg mb-12">
            Everything you need to know about our cleaning services.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-medium text-[#0a0a0a] hover:bg-slate-50/50 transition-colors"
                >
                  {faq.q}
                  <svg
                    className={`w-5 h-5 text-[#22bed9] flex-shrink-0 ml-2 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4">
                    <p className="text-[#4a5763] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-12 text-[#4a5763] text-center">
            Still have questions?{' '}
            <a href="tel:9522066429" className="text-[#22bed9] font-semibold hover:underline">
              Call (952) 206-6429
            </a>
            {' '}or{' '}
            <Link to="/contact" className="text-[#22bed9] font-semibold hover:underline">
              contact us
            </Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
