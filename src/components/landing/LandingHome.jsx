import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import HomeQuoteForm from './HomeQuoteForm'
import HeroSlideshow from './HeroSlideshow'
import PreviousWork from './PreviousWork'
import WhyVisualSlideshow from './WhyVisualSlideshow'

const serviceCards = [
  {
    badge: 'Most Popular',
    icon: '🏠',
    title: 'Residential Cleaning',
    desc: 'Regular home cleaning that keeps every room looking and feeling fresh. Weekly, bi-weekly, or monthly.',
    features: ['Full kitchen & bathrooms', 'Vacuuming & mopping', 'Dusting & surface wipe-down', 'Bedroom & living areas'],
  },
  {
    icon: '🏢',
    title: 'Commercial Cleaning',
    desc: 'Keep your office, clinic, or retail space professional and welcoming — on your schedule.',
    features: ['Office common areas', 'Restroom sanitizing', 'Conference rooms & lobbies', 'After-hours availability'],
  },
  {
    icon: '✨',
    title: 'Deep Cleaning',
    desc: 'A thorough top-to-bottom clean for homes that need extra attention. Perfect for first-time cleans.',
    features: ['Inside appliances & cabinets', 'Baseboards & window sills', 'Grout scrubbing', 'Light fixtures & vents'],
  },
  {
    icon: '📦',
    title: 'Move In / Move Out',
    desc: 'Leave your old place spotless or start fresh in your new home. We handle the whole unit.',
    features: ['Full unit top-to-bottom', 'Inside all appliances', 'Inside cabinets & drawers', 'Move-out surcharge may apply'],
  },
  {
    icon: '🛖',
    title: 'Airbnb / Short-Term Rental',
    desc: 'Fast turnovers that impress every guest. We sync with your booking schedule.',
    features: ['Linen changes & restocking', 'Guest-ready presentation', 'Quick-turnaround availability', 'Photo-ready results'],
  },
  {
    icon: '🎉',
    title: 'Post-Event Cleaning',
    desc: "Party's over — we'll have your space back to normal in no time. Available same-day.",
    features: ['Trash & recycling removal', 'Floor cleaning & mopping', 'Kitchen & bathroom reset', 'Same-day booking available'],
  },
]

const whyPoints = [
  { icon: '🔐', title: 'Insured & Bonded', text: "You're fully protected. Every team member is background-checked and our work is fully insured." },
  { icon: '🌿', title: 'Eco-Friendly Products', text: 'We use safe, non-toxic cleaning solutions — better for your family, pets, and the environment.' },
  { icon: '📱', title: 'Easy Online Booking', text: 'Schedule, reschedule, or pay online in seconds. No phone tag, no hassle.' },
  { icon: '🔄', title: 'Consistent Teams', text: 'We assign the same cleaner to your home so they learn your preferences over time.' },
]

const processSteps = [
  { n: '1', title: 'Get a Quote', text: "Fill out our quick form or call us. We'll give you a transparent, flat-rate price — no surprises." },
  { n: '2', title: 'Schedule', text: 'Pick a date and time that works for you. We offer morning, afternoon, and evening slots.' },
  { n: '3', title: 'We Clean', text: 'Our team arrives on time, fully equipped. You can be home or give us access — your choice.' },
  { n: '4', title: 'Enjoy', text: "Come home to a spotless space. Rate our work and we'll keep the same team for your next visit." },
]

const reviews = [
  {
    text: '"Cleanaya is the best cleaning service I\'ve ever used. My house looks immaculate every single time. The team is punctual, thorough, and so friendly."',
    initials: 'SJ',
    name: 'Sarah J.',
    role: 'Homeowner · Brooklyn Park',
  },
  {
    text: '"We hired Cleanaya for our office after our previous service kept sending different people. They\'ve assigned the same team to us for months and the quality is consistently excellent."',
    initials: 'MT',
    name: 'Marcus T.',
    role: 'Office Manager · Minneapolis',
  },
  {
    text: '"Used them for a move-out clean on my apartment and my landlord was shocked at how clean it was. Got my full deposit back. Worth every penny!"',
    initials: 'AL',
    name: 'Aisha L.',
    role: 'Renter · Maple Grove',
  },
]

/* Twin Cities 7-county metro + common surrounding communities (MN) */
const areas = [
  'Andover',
  'Anoka',
  'Apple Valley',
  'Arden Hills',
  'Blaine',
  'Bloomington',
  'Brooklyn Center',
  'Brooklyn Park',
  'Burnsville',
  'Carver',
  'Chanhassen',
  'Chaska',
  'Champlin',
  'Circle Pines',
  'Columbia Heights',
  'Columbus',
  'Coon Rapids',
  'Cottage Grove',
  'Crystal',
  'Dayton',
  'Eagan',
  'East Bethel',
  'Eden Prairie',
  'Edina',
  'Elk River',
  'Excelsior',
  'Falcon Heights',
  'Farmington',
  'Forest Lake',
  'Fridley',
  'Golden Valley',
  'Ham Lake',
  'Hastings',
  'Hopkins',
  'Hugo',
  'Inver Grove Heights',
  'Jordan',
  'Lake Elmo',
  'Lakeville',
  'Lino Lakes',
  'Little Canada',
  'Mahtomedi',
  'Maple Grove',
  'Maplewood',
  'Medina',
  'Mendota Heights',
  'Minneapolis',
  'Minnetonka',
  'Minnetrista',
  'Mound',
  'Mounds View',
  'New Brighton',
  'New Hope',
  'North Oaks',
  'North St. Paul',
  'Oakdale',
  'Orono',
  'Osseo',
  'Plymouth',
  'Prior Lake',
  'Ramsey',
  'Richfield',
  'Robbinsdale',
  'Rogers',
  'Rosemount',
  'Roseville',
  'Savage',
  'Shakopee',
  'Shoreview',
  'South St. Paul',
  'Spring Lake Park',
  'St. Anthony',
  'St. Francis',
  'St. Louis Park',
  'St. Michael',
  'St. Paul',
  'Stillwater',
  'Sunfish Lake',
  'Vadnais Heights',
  'Victoria',
  'Waconia',
  'Wayzata',
  'West St. Paul',
  'White Bear Lake',
  'Woodbury',
].sort((a, b) => a.localeCompare(b))

export default function LandingHome() {
  const revealRef = useScrollReveal()

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={revealRef}>
      <section className="cy-hero" id="home">
        <HeroSlideshow />
        <div className="cy-hero-scrim" aria-hidden />
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className={`cy-bubble cy-b${i}`} />
        ))}
        <div className="cy-hero-content">
          <div className="cy-hero-eyebrow">
            <span />
            Twin Cities, MN
          </div>
          <h1>
            Your Space,
            <br />
            <em>Spotlessly</em>
            <br />
            Transformed
          </h1>
          <p>
            Professional residential and commercial cleaning tailored to your schedule. Trusted by Twin Cities families and
            businesses.
          </p>
          <div className="cy-hero-buttons">
            <a href="#booking" onClick={scrollTo('booking')} className="cy-btn-primary">
              ✦ Book a Clean
            </a>
            <a href="#services" onClick={scrollTo('services')} className="cy-btn-outline">
              See Services →
            </a>
          </div>
        </div>
        <div className="cy-hero-stats">
          <div className="cy-stat-card">
            <div className="cy-stat-num">
              500<span>+</span>
            </div>
            <div className="cy-stat-label">Happy Clients</div>
          </div>
          <div className="cy-stat-card">
            <div className="cy-stat-num">
              <span>5★</span>
            </div>
            <div className="cy-stat-label">Average Rating</div>
          </div>
          <div className="cy-stat-card">
            <div className="cy-stat-num">
              5<span>yr</span>
            </div>
            <div className="cy-stat-label">In Business</div>
          </div>
        </div>
      </section>

      <div className="cy-trust-bar">
        <div className="cy-trust-item">
          <div className="cy-trust-icon">🛡️</div> Fully Insured & Bonded
        </div>
        <div className="cy-trust-item">
          <div className="cy-trust-icon">✅</div> Background Checked Staff
        </div>
        <div className="cy-trust-item">
          <div className="cy-trust-icon">🌿</div> Eco-Friendly Products
        </div>
        <div className="cy-trust-item">
          <div className="cy-trust-icon">⭐</div> Satisfaction Guaranteed
        </div>
        <div className="cy-trust-item">
          <div className="cy-trust-icon">📅</div> Flexible Scheduling
        </div>
      </div>

      <section className="cy-section cy-services" id="services">
        <div className="cy-reveal">
          <div className="cy-section-label">What We Offer</div>
          <div className="cy-section-title">
            Cleaning Services
            <br />
            <em>Built for Your Life</em>
          </div>
          <div className="cy-section-sub">
            From weekly home cleans to deep commercial sanitizing — we handle it all with care and attention to detail.
          </div>
        </div>
        <div className="cy-services-grid">
          {serviceCards.map((s) => (
            <div key={s.title} className="cy-service-card cy-reveal">
              {s.badge && <div className="cy-service-badge">{s.badge}</div>}
              <div className="cy-service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="cy-service-features">
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 cy-reveal">
          <Link to="/services" className="cy-btn-primary inline-flex">
            View all services
          </Link>
        </div>
      </section>

      <section className="cy-section" id="why">
        <div className="cy-why">
          <div className="cy-why-visual cy-reveal">
            <div className="cy-why-image-wrap">
              <WhyVisualSlideshow />
              <div className="cy-why-image-scrim" aria-hidden />
              <div className="cy-why-image-inner">
                <div className="cy-why-image-eyebrow">5★ rated · Real homes</div>
                <h3>
                  Trusted in the
                  <br />
                  Twin Cities
                </h3>
                <p>
                  Twin Cities
                  <br />& surrounding areas
                </p>
              </div>
            </div>
            <div className="cy-why-badge">
              <div className="cy-why-badge-num">100%</div>
              <div className="cy-why-badge-text">
                Satisfaction
                <br />
                Guaranteed
              </div>
            </div>
          </div>
          <div className="cy-reveal">
            <div className="cy-section-label">Why Cleanaya</div>
            <div className="cy-section-title">
              We Clean Like
              <br />
              <em>It&apos;s Our Own Home</em>
            </div>
            <div className="cy-section-sub">
              We&apos;re not a faceless franchise. We&apos;re a local team that takes pride in every job, big or small.
            </div>
            <div className="cy-why-points">
              {whyPoints.map((w) => (
                <div key={w.title} className="cy-why-point">
                  <div className="cy-why-point-icon">{w.icon}</div>
                  <div className="cy-why-point-text">
                    <h4>{w.title}</h4>
                    <p>{w.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cy-section cy-process" id="process">
        <div style={{ textAlign: 'center' }} className="cy-reveal">
          <div className="cy-section-label">How It Works</div>
          <div className="cy-section-title">
            Clean in <em>4 Simple Steps</em>
          </div>
        </div>
        <div className="cy-process-steps">
          {processSteps.map((step) => (
            <div key={step.n} className="cy-process-step cy-reveal">
              <div className="cy-step-num-wrap">{step.n}</div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <PreviousWork />

      <section className="cy-section cy-reviews" id="reviews">
        <div style={{ textAlign: 'center' }} className="cy-reveal">
          <div className="cy-section-label">Customer Love</div>
          <div className="cy-section-title">
            What Our Clients <em>Say</em>
          </div>
        </div>
        <div className="cy-reviews-grid">
          {reviews.map((r) => (
            <div key={r.name} className="cy-review-card cy-reveal">
              <div className="cy-review-stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="cy-review-text">{r.text}</p>
              <div className="cy-review-author">
                <div className="cy-review-avatar">{r.initials}</div>
                <div>
                  <div className="cy-review-name">{r.name}</div>
                  <div className="cy-review-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cy-section" id="pricing">
        <div style={{ textAlign: 'center' }} className="cy-reveal">
          <div className="cy-section-label">Simple Pricing</div>
          <div className="cy-section-title">
            Transparent <em>Flat-Rate</em> Plans
          </div>
          <div className="cy-section-sub" style={{ margin: '0 auto' }}>
            No hidden fees, no hourly uncertainty. Know exactly what you&apos;re paying before we arrive.
          </div>
        </div>
        <div className="cy-pricing-grid">
          <div className="cy-pricing-card cy-reveal">
            <div className="cy-pricing-plan">Basic</div>
            <div className="cy-pricing-price">
              <sup>$</sup>120<sub>/visit</sub>
            </div>
            <div className="cy-pricing-desc">Up to 2 bed / 1 bath</div>
            <ul className="cy-pricing-features">
              <li>Kitchen & bathrooms</li>
              <li>Vacuuming & mopping</li>
              <li>Dusting all surfaces</li>
              <li>Trash removal</li>
              <li>Flexible scheduling</li>
            </ul>
            <a href="#booking" onClick={scrollTo('booking')} className="cy-pricing-btn">
              Book Basic
            </a>
          </div>
          <div className="cy-pricing-card cy-featured cy-reveal">
            <div className="cy-pricing-tag">Best Value</div>
            <div className="cy-pricing-plan">Standard</div>
            <div className="cy-pricing-price">
              <sup>$</sup>185<sub>/visit</sub>
            </div>
            <div className="cy-pricing-desc">Up to 3 bed / 2 bath</div>
            <ul className="cy-pricing-features">
              <li>Everything in Basic</li>
              <li>Inside microwave & oven</li>
              <li>Baseboards & blinds</li>
              <li>Window sills</li>
              <li>Same cleaner guaranteed</li>
              <li>10% off recurring bookings</li>
            </ul>
            <a href="#booking" onClick={scrollTo('booking')} className="cy-pricing-btn">
              Book Standard
            </a>
          </div>
          <div className="cy-pricing-card cy-reveal">
            <div className="cy-pricing-plan">Custom</div>
            <div className="cy-pricing-price" style={{ fontSize: 36, paddingTop: 6 }}>
              Let&apos;s Talk
            </div>
            <div className="cy-pricing-desc">Commercial or large homes</div>
            <ul className="cy-pricing-features">
              <li>In-person walkthrough</li>
              <li>Tailored scope & schedule</li>
              <li>Contract pricing available</li>
              <li>After-hours options</li>
              <li>Dedicated account manager</li>
            </ul>
            <a href="#booking" onClick={scrollTo('booking')} className="cy-pricing-btn">
              Request Quote
            </a>
          </div>
        </div>
        <p className="text-center mt-8 cy-reveal">
          <Link to="/pricing" className="text-[var(--cy-sky)] font-semibold hover:underline">
            Full pricing & instant quote →
          </Link>
        </p>
      </section>

      <section className="cy-section cy-booking" id="booking">
        <div className="cy-booking-inner">
          <div className="cy-reveal">
            <div className="cy-section-label">Get Started</div>
            <div className="cy-section-title">
              Book Your
              <br />
              <em>First Clean</em> Today
            </div>
            <div className="cy-section-sub">
              Fill out the form and we&apos;ll get back to you within a few hours with a confirmed quote and time slot.
            </div>
            <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="cy-trust-item" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <div className="cy-trust-icon">📞</div>
                <a href="tel:9522066429" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  (952) 206-6429
                </a>
              </div>
              <div className="cy-trust-item" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <div className="cy-trust-icon">✉️</div>
                <a href="mailto:support@cleanaya.com" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  support@cleanaya.com
                </a>
              </div>
              <div className="cy-trust-item" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <div className="cy-trust-icon">📍</div>
                <span>Twin Cities, MN</span>
              </div>
            </div>
          </div>
          <HomeQuoteForm />
        </div>
      </section>

      <section className="cy-section cy-areas" id="areas">
        <div className="cy-reveal">
          <div className="cy-section-label">Where We Serve</div>
          <div className="cy-section-title">
            Proudly Serving the
            <br />
            <em>Twin Cities Metro</em>
          </div>
        </div>
        <div className="cy-areas-grid cy-reveal">
          {areas.map((a) => (
            <div key={a} className="cy-area-chip">
              {a}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
