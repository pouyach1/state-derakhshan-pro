import Button from '../components/Button'
import PropertyGrid from '../components/PropertyGrid'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useFavorites } from '../context/FavoritesContext'
import { properties } from '../data/properties'
import { useDocumentMeta } from '../hooks/useReveal'
import './Favorites.css'

export default function Favorites() {
  useDocumentMeta({
    title: 'علاقه‌مندی‌ها | املاک درخشان',
    description: 'ملک‌هایی که برای بررسی بعدی ذخیره کرده‌اید.',
  })

  const { favorites, clearFavorites } = useFavorites()
  const items = properties.filter((p) => favorites.includes(p.id))

  return (
    <div className="favorites-page">
      <section className="section--sm favorites-page__hero">
        <div className="container--wide">
          <Reveal>
            <SectionHeading
              eyebrow="Favorites"
              title="علاقه‌مندی‌های شما"
              description="ذخیره‌سازی محلی روی همین دستگاه؛ بدون نیاز به حساب کاربری."
              action={
                items.length ? (
                  <Button variant="text" onClick={clearFavorites}>
                    پاک کردن همه
                  </Button>
                ) : null
              }
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          {items.length ? (
            <PropertyGrid properties={items} columns={3} />
          ) : (
            <div className="favorites-page__empty">
              <p>هنوز ملکی به علاقه‌مندی‌ها اضافه نشده است.</p>
              <Button to="/properties">مشاهده املاک</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
