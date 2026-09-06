import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import { useParallax } from '../../hooks/useReveal'
import './HeroBanner.css'

export default function HeroBanner({ slides, title, subtitle, cta }) {
  const [index, setIndex] = useState(0)
  const mediaRef = useParallax(8)

  useEffect(() => {
    if (slides.length < 2) return undefined
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 5200)
    return () => window.clearInterval(id)
  }, [slides.length])

  const go = (dir) => {
    setIndex((current) => {
      const next = current + dir
      if (next < 0) return slides.length - 1
      if (next >= slides.length) return 0
      return next
    })
  }

  return (
    <section className="hero-banner">
      <div className="hero-banner__media" ref={mediaRef} aria-hidden="true">
        {slides.map((slide, i) => (
          <figure
            key={slide.id || i}
            className={['hero-banner__slide', i === index ? 'is-active' : ''].join(' ')}
          >
            <img src={slide.image} alt="" />
          </figure>
        ))}
        <div className="hero-banner__veil" />
      </div>

      <div className="holder hero-banner__content">
        <div className="hero-banner__copy is-visible">
          <h1>
            <span className="en-display hero-banner__en">Derakhshan Real Estate</span>
            <span className="hero-banner__fa">{title}</span>
          </h1>
          <p className="hero-banner__sub">{subtitle}</p>
          {cta ? (
            <Button to={cta.to} href={cta.href} className="hero-banner__cta">
              {cta.label}
            </Button>
          ) : null}
        </div>
      </div>

      {slides.length > 1 ? (
        <div className="hero-banner__arrows holder">
          <button type="button" aria-label="قبلی" onClick={() => go(-1)} />
          <button type="button" aria-label="بعدی" onClick={() => go(1)} />
        </div>
      ) : null}

      {slides[index]?.slug ? (
        <Link className="hero-banner__caption" to={`/properties/${slides[index].slug}`}>
          {slides[index].label}
        </Link>
      ) : null}
    </section>
  )
}
