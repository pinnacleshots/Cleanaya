const testimonials = [
  {
    quote: "Cleanaya has been cleaning our home every two weeks for six months. Spotless every time, and they're always on schedule. Couldn't ask for more.",
    author: "Sarah M.",
    location: "Minneapolis, MN",
    rating: 5,
  },
  {
    quote: "We hired them for our office deep clean before a big client visit. They came in, did an amazing job, and left everything immaculate. Highly recommend.",
    author: "James T.",
    location: "St. Paul, MN",
    rating: 5,
  },
  {
    quote: "Finally, a cleaning service that actually listens. They use eco-friendly products because of my allergies, and the results are fantastic.",
    author: "Emily R.",
    location: "Edina, MN",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#22bed9] font-semibold tracking-widest uppercase text-sm mb-4">
            What Our Clients Say
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Trusted by Minnesotans
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Real feedback from real people. See why families and businesses choose Cleanaya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, author, location, rating }) => (
            <div
              key={author}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#22bed9]/30 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#22bed9]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">"{quote}"</p>
              <div>
                <p className="font-semibold text-white">{author}</p>
                <p className="text-slate-500 text-sm">{location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
