import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { formatArea, formatCount } from '../data/properties'
import './PropertyCard.css'

export default function PropertyCard({
  property,
  priority = false,
  variant = 'editorial',
}) {
  const { isFavorite, toggleFavorite, isCompared, toggleCompare } = useFavorites()
  const favorite = isFavorite(property.id)
  const compared = isCompared(property.id)

  const specs = [
    formatArea(property.area),
    `${formatCount(property.bedrooms)} خواب`,
    `${formatCount(property.bathrooms)} سرویس`,
  ]

  return (
    <article className={['property-card', `property-card--${variant}`].join(' ')}>
      <div className="property-card__media">
        <Link
          to={`/properties/${property.slug}`}
          className="property-card__media-link"
          aria-label={`مشاهده ${property.title}`}
        >
          <img
            src={property.images[0]}
            alt=""
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
          {property.images[1] ? (
            <img
              className="property-card__alt"
              src={property.images[1]}
              alt=""
              loading="lazy"
              decoding="async"
            />
          ) : null}
          <div className="property-card__veil" />
        </Link>

        <div className="property-card__tools">
          <button
            type="button"
            className={favorite ? 'is-active' : ''}
            aria-pressed={favorite}
            aria-label={favorite ? 'حذف از علاقه‌مندی' : 'افزودن به علاقه‌مندی'}
            onClick={() => toggleFavorite(property.id)}
          >
            ♥
          </button>
          <button
            type="button"
            className={compared ? 'is-active' : ''}
            aria-pressed={compared}
            aria-label={compared ? 'حذف از مقایسه' : 'افزودن به مقایسه'}
            onClick={() => toggleCompare(property.id)}
          >
            ⇄
          </button>
        </div>

        <div className="property-card__overlay">
          <div className="property-card__badges">
            <span>{property.transaction === 'rent' ? 'اجاره' : 'فروش'}</span>
            <span>{property.typeLabel}</span>
            <span>{property.location}</span>
          </div>
          <h3>
            <Link to={`/properties/${property.slug}`}>{property.title}</Link>
          </h3>
          <p className="property-card__price">
            {property.priceLabel}
            {property.priceSuffix ? <span> / {property.priceSuffix}</span> : null}
          </p>
          <ul className="property-card__specs" aria-label="مشخصات کلیدی">
            {specs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
