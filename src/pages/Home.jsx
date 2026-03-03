import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
  )
}
