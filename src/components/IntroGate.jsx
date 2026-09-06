import { useEffect, useState } from 'react'
import { agency } from '../data/agency'
import './IntroGate.css'

const SESSION_KEY = 'derakhshan-pro-intro-seen'

export default function IntroGate() {
  const [phase, setPhase] = useState(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) ? 'done' : 'enter'
    } catch {
      return 'enter'
    }
  })

  useEffect(() => {
    if (phase === 'done') return undefined

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      try {
        sessionStorage.setItem(SESSION_KEY, '1')
      } catch {
        /* ignore */
      }
      setPhase('done')
      return undefined
    }

    document.body.style.overflow = 'hidden'

    const t1 = window.setTimeout(() => setPhase('reveal'), 520)
    const t2 = window.setTimeout(() => setPhase('exit'), 1680)
    const t3 = window.setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, '1')
      } catch {
        /* ignore */
      }
      setPhase('done')
      document.body.style.overflow = ''
    }, 2400)

    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
      document.body.style.overflow = ''
    }
  }, [phase])

  if (phase === 'done') return null

  return (
    <div className={['intro-gate', `is-${phase}`].join(' ')} aria-hidden="true">
      <div className="intro-gate__panel intro-gate__panel--a" />
      <div className="intro-gate__panel intro-gate__panel--b" />
      <div className="intro-gate__content">
        <p className="intro-gate__en en-display">Derakhshan Real Estate</p>
        <p className="intro-gate__fa">{agency.name}</p>
        <span className="intro-gate__line" />
      </div>
    </div>
  )
}
