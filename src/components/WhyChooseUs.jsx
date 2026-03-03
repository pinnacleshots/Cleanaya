const reasons = [
  {
    number: '01',
    title: 'Trained Professionals',
    description: 'Our team undergoes rigorous training to deliver consistent, high-quality results every visit.',
  },
  {
    number: '02',
    title: 'Eco-Conscious',
    description: 'We use sustainable products and practices that are safe for your family, pets, and the planet.',
  },
  {
    number: '03',
    title: 'Flexible Scheduling',
    description: 'Book recurring cleans or one-time deep cleans—we work around your schedule.',
  },
  {
    number: '04',
    title: 'Satisfaction Guaranteed',
    description: 'Not happy? We’ll make it right. Your peace of mind is our priority.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bubble-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#22bed9] font-semibold tracking-widest uppercase text-sm mb-4">
              Why Cleanaya
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-6">
              We don’t just clean—we care
            </h2>
            <p className="text-[#4a5763] text-lg leading-relaxed mb-10">
              Minnesota deserves cleaning services that go the extra mile. We’re local, reliable, 
              and committed to making every space we touch feel like home.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#22bed9] to-[#1a9bb5] border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-[#4a5763] font-medium">
                Trusted by hundreds across Minnesota
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map(({ number, title, description }) => (
              <div
                key={number}
                className="p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:border-[#22bed9]/20 transition-all duration-300"
              >
                <span className="text-[#22bed9]/40 font-display text-4xl font-bold">{number}</span>
                <h3 className="font-display text-xl font-semibold text-[#0a0a0a] mt-2 mb-3">
                  {title}
                </h3>
                <p className="text-[#4a5763] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
