import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { properties } from '../data/properties'
import Button from './Button'
import './CompareTray.css'

export default function CompareTray() {
  const { compare, clearCompare, toggleCompare } = useFavorites()
  if (!compare.length) return null

  const items = compare
    .map((id) => properties.find((p) => p.id === id))
    .filter(Boolean)

  return (
    <aside className="compare-tray" aria-label="سینی مقایسه">
      <div className="compare-tray__inner container--wide">
        <div className="compare-tray__list">
          {items.map((item) => (
            <div key={item.id} className="compare-tray__item">
              <img src={item.images[0]} alt="" />
              <div>
                <strong>{item.title}</strong>
                <span>{item.location}</span>
              </div>
              <button type="button" aria-label="حذف" onClick={() => toggleCompare(item.id)}>
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="compare-tray__actions">
          <button type="button" className="compare-tray__clear" onClick={clearCompare}>
            پاک کردن
          </button>
          <Button to="/compare" size="sm">
            مقایسه ({items.length.toLocaleString('fa-IR')})
          </Button>
        </div>
      </div>
    </aside>
  )
}
