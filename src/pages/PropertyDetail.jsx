import { Link, Navigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import PropertyGallery from '../components/PropertyGallery'
import PropertyGrid from '../components/PropertyGrid'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useFavorites } from '../context/FavoritesContext'
import { agency } from '../data/agency'
import {
  formatArea,
  formatCount,
  getPropertyBySlug,
  properties,
} from '../data/properties'
import { useDocumentMeta } from '../hooks/useReveal'
import './PropertyDetail.css'

export default function PropertyDetail() {
  const { slug } = useParams()
  const property = getPropertyBySlug(slug)
  const { isFavorite, toggleFavorite, isCompared, toggleCompare } = useFavorites()

  useDocumentMeta({
    title: property ? `${property.title} | املاک درخشان` : 'ملک یافت نشد | املاک درخشان',
    description: property ? property.description : 'ملک مورد نظر یافت نشد.',
  })

  if (!property) return <Navigate to="/properties" replace />

  const related = properties
    .filter((item) => item.id !== property.id && item.location === property.location)
    .slice(0, 2)
  const fallbackRelated =
    related.length >= 2
      ? related
      : properties.filter((item) => item.id !== property.id).slice(0, 2)

  const specs = [
    { label: 'متراژ', value: formatArea(property.area) },
    { label: 'خواب', value: formatCount(property.bedrooms) },
    { label: 'سرویس', value: formatCount(property.bathrooms) },
    { label: 'پارکینگ', value: formatCount(property.parking) },
    { label: 'سال', value: formatCount(property.year) },
    { label: 'معامله', value: property.transaction === 'rent' ? 'اجاره' : 'فروش' },
  ]

  const visitHref = `${agency.whatsapp}?text=${encodeURIComponent(
    `سلام، درباره ملک «${property.title}» در ${property.location} راهنمایی می‌خواهم.`,
  )}`

  return (
    <div className="property-detail">
      <section className="property-detail__intro section--sm">
        <div className="container--wide">
          <nav className="property-detail__crumb meta" aria-label="مسیر صفحه">
            <Link to="/properties">املاک</Link>
            <span>/</span>
            <Link to={`/properties?location=${encodeURIComponent(property.location)}`}>
              {property.location}
            </Link>
            <span>/</span>
            <span>{property.title}</span>
          </nav>
        </div>
      </section>

      <section className="section property-detail__gallery">
        <div className="container--wide">
          <Reveal>
            <PropertyGallery images={property.images} title={property.title} />
          </Reveal>
        </div>
      </section>

      <section className="section--sm property-detail__identity">
        <div className="container--wide property-detail__heading">
          <div>
            <p className="eyebrow">
              {property.location} · {property.typeLabel} ·{' '}
              {property.transaction === 'rent' ? 'اجاره' : 'فروش'}
            </p>
            <h1>{property.title}</h1>
            <p className="property-detail__price">
              {property.priceLabel}
              {property.priceSuffix ? <span> / {property.priceSuffix}</span> : null}
            </p>
          </div>
          <div className="property-detail__tools">
            <Button
              variant="secondary"
              onClick={() => toggleFavorite(property.id)}
            >
              {isFavorite(property.id) ? 'حذف از علاقه‌مندی' : 'افزودن به علاقه‌مندی'}
            </Button>
            <Button
              variant="secondary"
              onClick={() => toggleCompare(property.id)}
            >
              {isCompared(property.id) ? 'حذف از مقایسه' : 'افزودن به مقایسه'}
            </Button>
            <Button href={visitHref} target="_blank" rel="noreferrer">
              گفتگو درباره این ملک
            </Button>
          </div>
        </div>
      </section>

      <section className="section property-detail__body">
        <div className="container--wide property-detail__grid">
          <Reveal>
            <div className="property-detail__copy">
              <h2>درباره این خانه</h2>
              <p>{property.description}</p>
              <p>{property.story}</p>
              <h3>امکانات</h3>
              <ul className="property-detail__amenities">
                {property.amenities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <aside className="property-detail__aside">
              <h2>مشخصات</h2>
              <dl>
                {specs.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="property-detail__map">
                <p className="meta">موقعیت تقریبی</p>
                <iframe
                  title={`نقشه ${property.title}`}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${property.coordinates.lng - 0.02}%2C${property.coordinates.lat - 0.015}%2C${property.coordinates.lng + 0.02}%2C${property.coordinates.lat + 0.015}&layer=mapnik&marker=${property.coordinates.lat}%2C${property.coordinates.lng}`}
                  loading="lazy"
                />
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container--wide">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Related"
              title="ملک‌های مرتبط"
              description={`گزینه‌های بیشتر در ${property.location} و اطراف.`}
            />
          </Reveal>
          <PropertyGrid properties={fallbackRelated} columns={2} variant="landscape" />
        </div>
      </section>

      <CTASection
        title="آماده‌اید بازدید هماهنگ کنید؟"
        description="با مشاور درخشان گفتگو کنید تا جزئیات، زمان بازدید و شرایط معامله روشن شود."
        primary={{ href: visitHref, label: 'پیام در واتساپ' }}
        secondary={{ to: '/contact', label: 'صفحه تماس' }}
      />
    </div>
  )
}
