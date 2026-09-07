import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { formatArea, formatCount } from '../data/properties'
import './PropertyCard.css'

/**
 * Property listing card reconstructed from Rio Property done-deals cards.
 * Visual/interaction language: https://www.rioproperty.co.za/
 * Palette remains Derakhshan (TREF tokens). Direction is native RTL.
 */
export default function PropertyCard({
  property,
  priority = false,
  variant = 'editorial',
}) {
  const { isFavorite, toggleFavorite, isCompared, toggleCompare } = useFavorites()
  const favorite = isFavorite(property.id)
  const compared = isCompared(property.id)
  const statusLabel = property.transaction === 'rent' ? 'اجاره' : 'فروش'
  const detailHref = `/properties/${property.slug}`

  return (
    <article
      className={['property-card', `property-card--${variant}`].join(' ')}
    >
      <div className="property-card__inner">
        <Link
          to={detailHref}
          className="property-card__hit"
          aria-label={`مشاهده ${property.title}`}
        />

        <div className="property-card__image-wrap" aria-hidden="true">
          <img
            className="property-card__image"
            src={property.images[0]}
            alt=""
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onError={(e) => {
              e.currentTarget.style.opacity = '0.35'
            }}
          />
        </div>

        <div className="property-card__icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 69 68"
            fill="currentColor"
            className="property-card__icon-svg"
          >
            <path
              d="M51 48.8245H48.8983V21.5618L20.4752 49.573L19 48.0761L47.3858 20.1017H19.7376V18H51V48.8245Z"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="property-card__tools">
          <button
            type="button"
            className={favorite ? 'is-active' : ''}
            aria-pressed={favorite}
            aria-label={favorite ? 'حذف از علاقه‌مندی' : 'افزودن به علاقه‌مندی'}
            onClick={() => toggleFavorite(property.id)}
          >
            <span aria-hidden="true">{favorite ? '◆' : '◇'}</span>
          </button>
          <button
            type="button"
            className={compared ? 'is-active' : ''}
            aria-pressed={compared}
            aria-label={compared ? 'حذف از مقایسه' : 'افزودن به مقایسه'}
            onClick={() => toggleCompare(property.id)}
          >
            <span aria-hidden="true">∥</span>
          </button>
        </div>

        <div className="property-card__overlay">
          <div className="property-card__overlay-bg" aria-hidden="true" />
          <div className="property-card__overlay-text">
            <div className="property-card__meta">
              <div className="property-card__meta-col">
                <p>{property.location}</p>
              </div>
              <div className="property-card__meta-col property-card__meta-col--stats">
                <p>{formatArea(property.area)}</p>
                <p>{formatCount(property.bedrooms)} خواب</p>
              </div>
            </div>
            <h3 className="property-card__title">{property.title}</h3>
            <p className="property-card__price">
              {property.priceLabel}
              {property.priceSuffix ? (
                <span> / {property.priceSuffix}</span>
              ) : null}
            </p>
          </div>
        </div>
      </div>

      <div className="property-card__bottom">
        <div className="property-card__bottom-bg" aria-hidden="true" />
        <p>{property.typeLabel}</p>
        <p>{statusLabel}</p>
      </div>
    </article>
  )
}
