import { useCallback, useEffect, useState } from 'react'
import { portfolioGallery } from '../../data/portfolioGallery'

export default function PreviousWork() {
  const [lightbox, setLightbox] = useState(null)

  const close = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (lightbox === null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft')
        setLightbox((i) => (i === null ? i : (i + portfolioGallery.length - 1) % portfolioGallery.length))
      if (e.key === 'ArrowRight') setLightbox((i) => (i === null ? i : (i + 1) % portfolioGallery.length))
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [lightbox, close])

  const goPrev = (e) => {
    e.stopPropagation()
    setLightbox((i) => (i === null ? i : (i + portfolioGallery.length - 1) % portfolioGallery.length))
  }

  const goNext = (e) => {
    e.stopPropagation()
    setLightbox((i) => (i === null ? i : (i + 1) % portfolioGallery.length))
  }

  const current = lightbox !== null ? portfolioGallery[lightbox] : null

  return (
    <section className="cy-section cy-portfolio" id="work">
      <div style={{ textAlign: 'center' }} className="cy-reveal">
        <div className="cy-section-label">Portfolio</div>
        <div className="cy-section-title">
          Our <em>Previous Work</em>
        </div>
        <div className="cy-section-sub" style={{ margin: '0 auto' }}>
          Real results from homes we&apos;ve cleaned across the Twin Cities — living spaces, kitchens, bedrooms, and
          more. Tap a photo to view larger.
        </div>
      </div>
      <div className="cy-portfolio-grid cy-reveal">
        {portfolioGallery.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className="cy-portfolio-tile"
            onClick={() => setLightbox(index)}
            aria-label={`View gallery image ${index + 1} of ${portfolioGallery.length}`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      {current && (
        <div
          className="cy-portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo"
          onClick={close}
        >
          <button type="button" className="cy-portfolio-lightbox-close" onClick={close} aria-label="Close">
            ✕
          </button>
          <button type="button" className="cy-portfolio-lightbox-nav cy-portfolio-lightbox-prev" onClick={goPrev} aria-label="Previous photo">
            ‹
          </button>
          <button type="button" className="cy-portfolio-lightbox-nav cy-portfolio-lightbox-next" onClick={goNext} aria-label="Next photo">
            ›
          </button>
          <div className="cy-portfolio-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} />
            <p className="cy-portfolio-lightbox-caption">
              {lightbox + 1} / {portfolioGallery.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
