import { Link } from 'react-router-dom'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'House Cleaning',
    description: 'Regular house cleaning, deep cleans, and move-in/out services for homeowners.',
    slug: 'house-cleaning',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Commercial Office Cleaning',
    description: 'Office spaces, retail, and professional environments—kept pristine daily.',
    slug: 'commercial-office-cleaning',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    title: 'Airbnb Turnaround Cleaning',
    description: 'Turnkey cleaning between guests—linen changes, restocking, and quick turnaround for your rental.',
    slug: 'airbnb-turnaround-cleaning',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Green Eco Friendly Cleaning',
    description: 'Green cleaning products and methods for health-conscious clients.',
    slug: 'green-eco-friendly-cleaning',
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
            Services built for your space
          </h2>
          <p className="text-[#4a5763] text-lg">
            From weekly upkeep to one-time deep cleans, we tailor our services to fit your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl border border-slate-100 hover:border-[#22bed9]/30 hover:shadow-xl hover:shadow-[#22bed9]/5 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#22bed9]/10 text-[#22bed9] flex items-center justify-center mb-6 group-hover:bg-[#22bed9]/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-[#0a0a0a] mb-3">
                {service.title}
              </h3>
              <p className="text-[#4a5763] leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                to={service.slug ? `/services/${service.slug}` : '/services'}
                className="text-[#22bed9] font-semibold flex items-center gap-2 group/link"
              >
                Learn more
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#22bed9] font-semibold hover:gap-3 transition-all"
          >
            View all services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
