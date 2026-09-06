import { useCallback, useEffect, useId, useRef, useState } from 'react'
import './PropertyGallery.css'

export default function PropertyGallery({ images, title }) {
  const [active, setActive] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const dialogRef = useRef(null)
  const closeBtnRef = useRef(null)
  const labelId = useId()
  const safeActive = images.length ? Math.min(active, images.length - 1) : 0

  const go = useCallback(
    (dir) => {
      if (!images.length) return
      setActive((current) => {
        const next = current + dir
        if (next < 0) return images.length - 1
        if (next >= images.length) return 0
        return next
      })
    },
    [images.length],
  )

  const openLightbox = () => setLightboxOpen(true)
  const closeLightbox = () => setLightboxOpen(false)

  useEffect(() => {
    if (!lightboxOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        go(1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        go(-1)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [lightboxOpen, go])

  useEffect(() => {
    if (lightboxOpen) return undefined

    const onKey = (e) => {
      const tag = e.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target?.isContentEditable) {
        return
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        go(1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        go(-1)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen, go])

  const touchStartX = useRef(null)

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current == null || images.length < 2) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < 40) return
    // RTL: swipe toward start (positive delta in LTR coords from right finger move) shows previous visually; keep simple.
    if (delta > 0) go(1)
    else go(-1)
  }

  if (!images?.length) return null

  return (
    <div className="property-gallery">
      <div
        className="property-gallery__stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          type="button"
          className="property-gallery__hero"
          onClick={openLightbox}
          aria-label={`بزرگ‌نمایی تصویر ${(safeActive + 1).toLocaleString('fa-IR')} از ${title}`}
        >
          <img
            src={images[safeActive]}
            alt={`${title} — تصویر ${(safeActive + 1).toLocaleString('fa-IR')}`}
            decoding="async"
          />
        </button>

        {images.length > 1 ? (
          <>
            <button
              type="button"
              className="property-gallery__nav property-gallery__nav--prev"
              onClick={() => go(-1)}
              aria-label="تصویر قبلی"
            >
              ›
            </button>
            <button
              type="button"
              className="property-gallery__nav property-gallery__nav--next"
              onClick={() => go(1)}
              aria-label="تصویر بعدی"
            >
              ‹
            </button>
            <p className="property-gallery__counter" aria-live="polite">
              {(safeActive + 1).toLocaleString('fa-IR')} /{' '}
              {images.length.toLocaleString('fa-IR')}
            </p>
            <button
              type="button"
              className="property-gallery__expand"
              onClick={openLightbox}
              aria-label="نمایش تمام‌صفحه"
            >
              تمام‌صفحه
            </button>
          </>
        ) : (
          <button
            type="button"
            className="property-gallery__expand"
            onClick={openLightbox}
            aria-label="نمایش تمام‌صفحه"
          >
            تمام‌صفحه
          </button>
        )}
      </div>

      {images.length > 1 ? (
        <ul className="property-gallery__thumbs" aria-label="گالری تصاویر">
          {images.map((src, index) => (
            <li key={src}>
              <button
                type="button"
                className={index === safeActive ? 'is-active' : undefined}
                onClick={() => setActive(index)}
                aria-label={`نمایش تصویر ${(index + 1).toLocaleString('fa-IR')}`}
                aria-current={index === safeActive ? 'true' : undefined}
              >
                <img
                  src={src.replace(/([?&]w=)\d+/, '$1400')}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {lightboxOpen ? (
        <div
          className="property-gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          ref={dialogRef}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="property-gallery__lightbox-bar">
            <p id={labelId} className="meta">
              {title} — {(safeActive + 1).toLocaleString('fa-IR')} از{' '}
              {images.length.toLocaleString('fa-IR')}
            </p>
            <button
              type="button"
              className="property-gallery__lightbox-close"
              onClick={closeLightbox}
              ref={closeBtnRef}
            >
              بستن
            </button>
          </div>

          <div className="property-gallery__lightbox-stage">
            <img
              src={images[safeActive]}
              alt={`${title} — تصویر ${(safeActive + 1).toLocaleString('fa-IR')}`}
            />
            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  className="property-gallery__nav property-gallery__nav--prev"
                  onClick={() => go(-1)}
                  aria-label="تصویر قبلی"
                >
                  ›
                </button>
                <button
                  type="button"
                  className="property-gallery__nav property-gallery__nav--next"
                  onClick={() => go(1)}
                  aria-label="تصویر بعدی"
                >
                  ‹
                </button>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}
