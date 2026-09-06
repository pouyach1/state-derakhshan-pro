import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { agency } from '../data/agency'
import { useFavorites } from '../context/FavoritesContext'
import './Header.css'

const links = [
  { to: '/', label: 'خانه', end: true },
  { to: '/properties', label: 'املاک' },
  { to: '/about', label: 'درباره' },
  { to: '/contact', label: 'تماس' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { favorites, compare } = useFavorites()
  const overHero = pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'site-header',
        scrolled ? 'is-scrolled' : '',
        overHero ? 'is-over-hero' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="site-header__inner container--wide">
        <Link to="/" className="brand" aria-label={agency.name}>
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__text">
            <strong className="brand__fa">{agency.name}</strong>
            <small className="brand__en">Derakhshan Real Estate</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="ناوبری اصلی">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                ['site-nav__link', isActive ? 'is-active' : ''].filter(Boolean).join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link to="/favorites" className="site-header__icon-link" aria-label="علاقه‌مندی‌ها">
            علاقه‌مندی
            {favorites.length > 0 ? <span>{favorites.length.toLocaleString('fa-IR')}</span> : null}
          </Link>
          {compare.length > 0 ? (
            <Link to="/compare" className="site-header__icon-link" aria-label="مقایسه">
              مقایسه
              <span>{compare.length.toLocaleString('fa-IR')}</span>
            </Link>
          ) : null}
          <a className="site-header__phone" href={agency.phoneHref} dir="ltr">
            {agency.phone}
          </a>
          <Link to="/properties" className="site-header__cta">
            مشاهده املاک
          </Link>
        </div>
      </div>
    </header>
  )
}
