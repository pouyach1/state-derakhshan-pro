import PropertyCard from './PropertyCard'
import './PropertyGrid.css'

export default function PropertyGrid({
  properties,
  columns = 3,
  variant = 'editorial',
  priorityCount = 2,
}) {
  if (!properties?.length) {
    return (
      <div className="property-grid__empty">
        <p>ملکی با این فیلترها یافت نشد.</p>
      </div>
    )
  }

  return (
    <div className={['property-grid', `property-grid--${columns}`].join(' ')}>
      {properties.map((property, index) => (
        <PropertyCard
          key={property.id}
          property={property}
          variant={variant}
          priority={index < priorityCount}
        />
      ))}
    </div>
  )
}
