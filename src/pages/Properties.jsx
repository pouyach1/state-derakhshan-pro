import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import PropertyFilters from '../components/PropertyFilters'
import PropertyGrid from '../components/PropertyGrid'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { filterProperties, properties } from '../data/properties'
import { useDocumentMeta } from '../hooks/useReveal'
import './Properties.css'

function readFilters(searchParams) {
  return {
    q: searchParams.get('q') || '',
    location: searchParams.get('location') || 'all',
    type: searchParams.get('type') || 'all',
    transaction: searchParams.get('transaction') || 'all',
    bedrooms: searchParams.get('bedrooms') || 'all',
  }
}

function writeFilters(next) {
  const params = new URLSearchParams()
  Object.entries(next).forEach(([key, value]) => {
    if (value && value !== 'all') params.set(key, value)
  })
  return params
}

export default function Properties() {
  useDocumentMeta({
    title: 'املاک | املاک درخشان',
    description:
      'فهرست گزینشی آپارتمان، پنت‌هاوس و ویلا در محله‌های ممتاز کرج؛ مهرشهر، عظیمیه، مصباح، فردیس و دهقان‌ویلا.',
  })

  const [searchParams, setSearchParams] = useSearchParams()
  const filters = readFilters(searchParams)
  const filtered = useMemo(() => filterProperties(properties, filters), [filters])

  return (
    <div className="properties-page">
      <section className="properties-page__hero section--sm">
        <div className="container--wide">
          <Reveal>
            <SectionHeading
              eyebrow="Catalog"
              title="کشف ملک‌های منتخب"
              description="جستجو و فیلتر برای یافتن سریع‌تر؛ با تمرکز روی کیفیت هر واحد."
            />
          </Reveal>
        </div>
      </section>

      <section className="section properties-page__list">
        <div className="container--wide">
          <PropertyFilters
            value={filters}
            onChange={(next) => setSearchParams(writeFilters(next), { replace: true })}
            resultCount={filtered.length}
          />
          <PropertyGrid properties={filtered} columns={3} />
        </div>
      </section>
    </div>
  )
}
