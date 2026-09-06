import { Link, NavLink } from 'react-router-dom'
import { agency } from '../data/agency'
import { useFavorites } from '../context/FavoritesContext'
import './Header.css'

const leftLinks = [
  { to: '/', label: 'خانه', end: true },
  { to: '/properties', label: 'املاک' },
]

const rightLinks = [
  { to: '/about', label: 'درباره' },
  { to: '/contact', label: 'تماس' },
]

export default function Header() {
  const { favorites, compare } = useFavorites()

  return (
    <header className="site-header">
      <div className="holder site-header__inner">
        <nav className="site-header__nav site-header__nav--start" aria-label="ناوبری راست">
          {leftLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/" className="site-header__brand" aria-label={agency.name}>
          <strong>{agency.name}</strong>
          <span className="en-display">{agency.nameEn}</span>
        </Link>

        <nav className="site-header__nav site-header__nav--end" aria-label="ناوبری چپ">
          {rightLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/favorites" className="site-header__meta">
            علاقه‌مندی
            {favorites.length ? <em>{favorites.length.toLocaleString('fa-IR')}</em> : null}
          </Link>
          {compare.length ? (
            <Link to="/compare" className="site-header__meta">
              مقایسه
              <em>{compare.length.toLocaleString('fa-IR')}</em>
            </Link>
          ) : null}
          <a className="site-header__phone" href={agency.phoneHref} dir="ltr">
            {agency.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
