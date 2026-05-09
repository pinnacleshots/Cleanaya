import { useEffect, useRef, useState } from 'react'
import { portfolioGallery } from '../../data/portfolioGallery'

const SLIDE_INTERVAL_MS = 500

export default function HeroSlideshow() {
  const slides = portfolioGallery.map((p) => p.src)
  const n = slides.length
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const topRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (n < 2 || reduceMotion) return
    const id = window.setInterval(() => setFading(true), SLIDE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [n, reduceMotion])

  const onTopTransitionEnd = (e) => {
    if (e.propertyName !== 'opacity' || !fading) return
    const el = topRef.current
    if (el) {
      el.style.transition = 'none'
      el.style.opacity = '0'
      void el.offsetHeight
      el.style.transition = ''
    }
    setIndex((i) => (i + 1) % n)
    setFading(false)
  }

  if (n === 0) return null

  return (
    <div className="cy-hero-slideshow" aria-hidden>
      <div
        key={`base-${index}`}
        className={`cy-hero-slide cy-hero-slide-base ${reduceMotion ? 'cy-hero-slide-static' : ''}`}
        style={{ backgroundImage: `url(${slides[index]})` }}
      />
      {n > 1 && !reduceMotion && (
        <div
          ref={topRef}
          className={`cy-hero-slide cy-hero-slide-top ${fading ? 'cy-hero-slide-top-in' : ''}`}
          style={{ backgroundImage: `url(${slides[(index + 1) % n]})` }}
          onTransitionEnd={onTopTransitionEnd}
        />
      )}
    </div>
  )
}
