import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useFavorites } from '../context/FavoritesContext'
import { formatArea, formatCount, properties } from '../data/properties'
import { useDocumentMeta } from '../hooks/useReveal'
import './Favorites.css'

export default function Compare() {
  useDocumentMeta({
    title: 'مقایسه املاک | املاک درخشان',
    description: 'چند ملک را کنار هم بررسی کنید.',
  })

  const { compare, clearCompare, toggleCompare } = useFavorites()
  const items = compare.map((id) => properties.find((p) => p.id === id)).filter(Boolean)

  const rows = [
    { label: 'قیمت', render: (p) => `${p.priceLabel}${p.priceSuffix ? ` / ${p.priceSuffix}` : ''}` },
    { label: 'محله', render: (p) => p.location },
    { label: 'نوع', render: (p) => p.typeLabel },
    { label: 'معامله', render: (p) => (p.transaction === 'rent' ? 'اجاره' : 'فروش') },
    { label: 'متراژ', render: (p) => formatArea(p.area) },
    { label: 'خواب', render: (p) => formatCount(p.bedrooms) },
    { label: 'سرویس', render: (p) => formatCount(p.bathrooms) },
    { label: 'پارکینگ', render: (p) => formatCount(p.parking) },
    { label: 'سال', render: (p) => formatCount(p.year) },
  ]

  return (
    <div className="compare-page">
      <section className="section--sm compare-page__hero">
        <div className="container--wide">
          <Reveal>
            <SectionHeading
              eyebrow="Compare"
              title="مقایسه املاک"
              description="تا سه ملک را کنار هم ببینید و تفاوت‌ها را سریع اسکن کنید."
              action={
                items.length ? (
                  <Button variant="text" onClick={clearCompare}>
                    پاک کردن مقایسه
                  </Button>
                ) : null
              }
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          {items.length < 2 ? (
            <div className="compare-page__empty">
              <p>برای مقایسه، حداقل دو ملک انتخاب کنید.</p>
              <Button to="/properties">بازگشت به فهرست</Button>
            </div>
          ) : (
            <div className="compare-table">
              <table>
                <thead>
                  <tr>
                    <th>ویژگی</th>
                    {items.map((item) => (
                      <th key={item.id}>
                        <img className="compare-table__media" src={item.images[0]} alt="" />
                        <Link className="compare-table__title" to={`/properties/${item.slug}`}>
                          {item.title}
                        </Link>
                        <button type="button" onClick={() => toggleCompare(item.id)}>
                          حذف
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.label}>
                      <th>{row.label}</th>
                      {items.map((item) => (
                        <td key={`${item.id}-${row.label}`}>{row.render(item)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
