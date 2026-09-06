import { useEffect, useRef } from 'react'
import './SloganBand.css'

export default function SloganBand({ lines }) {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.querySelectorAll('.slogan-band__fill').forEach((el) => {
        el.style.width = '100%'
      })
      return undefined
    }

    let frame = 0
    const covers = [...root.querySelectorAll('.slogan-band__fill')]

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        covers.forEach((cover) => {
          const rect = cover.getBoundingClientRect()
          const start = window.innerHeight * 0.9
          const end = window.innerHeight * 0.4
          const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)))
          cover.style.width = `${progress * 100}%`
        })
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [lines])

  return (
    <section className="slogan-band" ref={rootRef} aria-label="شعار برند">
      <div className="holder">
        <p className="slogan-band__text">
          {lines.map((line) => (
            <span className="slogan-band__line" key={line}>
              {line}
              <span className="slogan-band__fill" aria-hidden="true">
                {line}
              </span>
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
