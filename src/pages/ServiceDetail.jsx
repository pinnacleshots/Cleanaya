import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services'

const serviceContent = {
  'house-cleaning': {
    description: 'Keep your home spotless with our comprehensive house cleaning service. From regular upkeep to deep cleans, we customize every visit to your needs.',
    features: ['Dusting & vacuuming', 'Kitchen & bathroom sanitizing', 'Floor care', 'Custom checklists'],
  },
  'maid-service': {
    description: 'Ongoing maid service to maintain your home week after week. Consistent schedules, trusted staff, and spotless results.',
    features: ['Recurring schedules', 'Same team when possible', 'Thorough top-to-bottom cleans', 'Flexible frequency'],
  },
  'housekeeping': {
    description: 'Professional housekeeping for homes of all sizes. We handle daily, weekly, or bi-weekly maintenance so you can focus on what matters.',
    features: ['Bed making & linen changes', 'Surface cleaning', 'Trash removal', 'Tidy & organized spaces'],
  },
  'one-time-cleaning': {
    description: 'Need a single deep clean? We offer one-time cleaning for special occasions, before events, or whenever you need a fresh start.',
    features: ['No commitment', 'Full home clean', 'Flexible scheduling', 'Ideal for events or moves'],
  },
  'deep-cleaning': {
    description: 'Our deep cleaning service goes beyond the surface—baseboards, inside appliances, detailed bathroom scrubbing, and more.',
    features: ['Inside oven & fridge', 'Baseboards & window sills', 'Detailed bathroom sanitizing', 'Behind & under furniture'],
  },
  'regular-cleaning': {
    description: 'Set up a recurring cleaning schedule that works for you. Weekly, bi-weekly, or monthly—we keep your home consistently clean.',
    features: ['Flexible frequency', 'Consistent quality', 'Custom checklist', 'Easy rescheduling'],
  },
  'apartment-condo-cleaning': {
    description: 'Specialized cleaning for apartments and condos. We work efficiently in smaller spaces and around building policies.',
    features: ['Compact-space expertise', 'Key/access coordination', 'No elevator delays', 'Building-friendly'],
  },
  'move-in-out-cleaning': {
    description: 'Move-in or move-out cleaning to leave your space immaculate. Perfect for landlords, tenants, and new homeowners.',
    features: ['Empty-unit deep clean', 'Carpet-ready prep', 'Appliance cleaning', 'Inspection-ready'],
  },
  'organization-services': {
    description: 'We help declutter and organize your space—closets, pantries, garages, and more. Clean and orderly, the way you want it.',
    features: ['Closet organization', 'Pantry & storage', 'Decluttering support', 'Custom solutions'],
  },
  'green-eco-friendly-cleaning': {
    description: 'Eco-friendly cleaning using sustainable, non-toxic products. Safe for children, pets, and allergy sufferers.',
    features: ['Non-toxic products', 'Safe for pets & kids', 'Reduced allergens', 'Eco-conscious methods'],
  },
  'airbnb-turnaround-cleaning': {
    description: 'Turnkey cleaning between Airbnb guests. We handle check-out cleans, linen changes, and restocking so your rental is always guest-ready.',
    features: ['Between-guest turnover', 'Linen & supply restock', 'Quick turnaround', 'Flexible scheduling'],
  },
  'vacation-rental': {
    description: 'Professional vacation rental cleaning for VRBO, Airbnb, and direct bookings. Consistent, reliable turnover for every check-in.',
    features: ['Vacation rental expertise', 'Same-day turnover', 'Inventory & restocking', 'Key handoff support'],
  },
  'post-renovation-cleaning': {
    description: 'Post-construction and renovation cleaning to remove dust, debris, and residues. Get your space move-in ready.',
    features: ['Dust & debris removal', 'Paint splatter cleanup', 'Fixture polishing', 'Final walkthrough prep'],
  },
  'commercial-office-cleaning': {
    description: 'Professional cleaning for offices, retail spaces, and businesses. We work around your hours to minimize disruption.',
    features: ['Daily or weekly options', 'Break rooms & restrooms', 'Common areas', 'After-hours available'],
  },
  'special-event-cleaning': {
    description: 'Pre- and post-event cleaning for parties, gatherings, and special occasions. We make your space shine before and after.',
    features: ['Pre-event prep', 'Post-event cleanup', 'One-time or recurring', 'Flexible scheduling'],
  },
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  const content = slug ? serviceContent[slug] : null

  const title = service?.label || 'Service'
  const description = content?.description || 'Professional cleaning tailored to your needs. Contact us for details.'
  const features = content?.features || ['Custom cleaning plan', 'Trained professionals', 'Satisfaction guaranteed']

  return (
    <div>
      <section className="py-24 bubble-pattern">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#4a5763] hover:text-[#22bed9] mb-8 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-6">
            {title}
          </h1>
          <p className="text-[#4a5763] text-lg leading-relaxed mb-10">
            {description}
          </p>
          <ul className="space-y-3 mb-12">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-[#4a5763]">
                <span className="w-2 h-2 rounded-full bg-[#22bed9]" />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-[#22bed9] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a9bb5] transition-colors glow-aqua"
          >
            Book This Service
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
