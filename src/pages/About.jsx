export default function About() {
  return (
    <div>
      <section className="py-24 bubble-pattern">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#22bed9] font-semibold tracking-widest uppercase text-sm mb-4">
            Our Story
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#0a0a0a] mb-8">
            Built in Minnesota, for Minnesota
          </h1>
          <div className="prose prose-lg text-[#4a5763] space-y-6">
            <p className="leading-relaxed">
              Cleanaya was founded with a simple mission: to provide cleaning services that don’t cut corners. 
              We believe every home and business in Minnesota deserves to feel fresh, healthy, and cared for.
            </p>
            <p className="leading-relaxed">
              Our team is local, trained, and passionate about what we do. We use quality products, 
              eco-friendly options when requested, and a customer-first approach that keeps clients coming back.
            </p>
            <p className="leading-relaxed">
              Whether you need a one-time deep clean or recurring maintenance, we’re here to make your space 
              shine—and your life a little easier.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-[#22bed9] mb-1">500+</p>
              <p className="text-[#4a5763]">Homes Cleaned</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-[#22bed9] mb-1">98%</p>
              <p className="text-[#4a5763]">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-[#22bed9] mb-1">MN</p>
              <p className="text-[#4a5763]">Proudly Local</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
