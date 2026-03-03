import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    formRef.current?.reset()
  }

  return (
    <div>
      <section className="py-24 bubble-pattern">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#22bed9] font-semibold tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#0a0a0a] mb-4">
            Let’s talk about your space
          </h1>
          <p className="text-[#4a5763] text-lg mb-12">
            Have questions? Need a custom quote? Reach out and we’ll get back to you quickly.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium text-[#0a0a0a] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#22bed9] focus:ring-2 focus:ring-[#22bed9]/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-[#0a0a0a] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#22bed9] focus:ring-2 focus:ring-[#22bed9]/20 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium text-[#0a0a0a] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#22bed9] focus:ring-2 focus:ring-[#22bed9]/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your cleaning needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#22bed9] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#1a9bb5] transition-colors glow-aqua"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-[#22bed9] font-medium text-center">
                  Thanks! We’ll be in touch soon.
                </p>
              )}
            </form>

            <div>
              <div className="p-8 rounded-2xl bg-white border border-slate-100">
                <h3 className="font-display text-xl font-semibold text-[#0a0a0a] mb-4">
                  Contact Info
                </h3>
                <p className="text-[#4a5763] mb-2">
                  <span className="font-medium text-[#0a0a0a]">Phone:</span>{' '}
                  <a href="tel:9522066429" className="text-[#22bed9] hover:underline">(952) 206-6429</a>
                </p>
                <p className="text-[#4a5763] mb-2">
                  <span className="font-medium text-[#0a0a0a]">Email:</span>{' '}
                  <a href="mailto:support@cleanaya.com" className="text-[#22bed9] hover:underline">support@cleanaya.com</a>
                </p>
                <p className="text-[#4a5763] mb-2">
                  <span className="font-medium text-[#0a0a0a]">Location:</span> Minnesota, USA
                </p>
                <p className="text-[#4a5763] mb-2">
                  <span className="font-medium text-[#0a0a0a]">Service Area:</span> Twin Cities & Greater MN
                </p>
                <p className="text-[#4a5763] mt-6">
                  Prefer to book online? Use our booking page for the fastest way to schedule.
                </p>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 mt-4 text-[#22bed9] font-semibold hover:gap-3 transition-all"
                >
                  Book a cleaning →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
