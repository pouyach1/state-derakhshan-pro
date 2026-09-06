import { useEffect, useRef, useState } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [visible, setVisible] = useState(reduce)

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: options.threshold ?? 0.18,
        rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin, visible])

  return { ref, visible }
}

export function useDocumentMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', description)
    }
  }, [title, description])
}

export function useParallax(strength = 12) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect()
        const view = window.innerHeight || 1
        const progress = (view - rect.top) / (view + rect.height)
        const y = (progress - 0.5) * strength
        const img = node.querySelector('img')
        if (img) img.style.transform = `translate3d(0, ${y}%, 0) scale(1.12)`
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [strength])

  return ref
}
