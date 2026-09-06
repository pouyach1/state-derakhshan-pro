import {
  BEDROOM_OPTIONS,
  LOCATIONS,
  PROPERTY_TYPES,
  TRANSACTION_TYPES,
} from '../data/properties'
import './PropertyFilters.css'

export default function PropertyFilters({ value, onChange, resultCount, tone = 'dark' }) {
  const update = (key, nextValue) => {
    onChange({ ...value, [key]: nextValue })
  }

  return (
    <div className={['property-filters', `property-filters--${tone}`].join(' ')}>
      <div className="property-filters__search">
        <label className="sr-only" htmlFor="property-q">
          جستجوی ملک
        </label>
        <input
          id="property-q"
          type="search"
          placeholder="جستجو در عنوان، محله یا توضیح..."
          value={value.q || ''}
          onChange={(e) => update('q', e.target.value)}
        />
      </div>

      <div className="property-filters__row">
        <label>
          <span>محله</span>
          <select
            value={value.location || 'all'}
            onChange={(e) => update('location', e.target.value)}
          >
            {LOCATIONS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>نوع ملک</span>
          <select value={value.type || 'all'} onChange={(e) => update('type', e.target.value)}>
            {PROPERTY_TYPES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>نوع معامله</span>
          <select
            value={value.transaction || 'all'}
            onChange={(e) => update('transaction', e.target.value)}
          >
            {TRANSACTION_TYPES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>خواب</span>
          <select
            value={value.bedrooms || 'all'}
            onChange={(e) => update('bedrooms', e.target.value)}
          >
            {BEDROOM_OPTIONS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="property-filters__meta">
        <p>
          {resultCount.toLocaleString('fa-IR')} ملک
        </p>
        <button
          type="button"
          onClick={() =>
            onChange({
              q: '',
              location: 'all',
              type: 'all',
              transaction: 'all',
              bedrooms: 'all',
            })
          }
        >
          پاک کردن فیلترها
        </button>
      </div>
    </div>
  )
}
