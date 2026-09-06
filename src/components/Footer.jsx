import { Link } from 'react-router-dom'
import { agency } from '../data/agency'
import './Footer.css'

const links = [
  { to: '/', label: 'خانه' },
  { to: '/properties', label: 'املاک' },
  { to: '/favorites', label: 'علاقه‌مندی' },
  { to: '/compare', label: 'مقایسه' },
  { to: '/about', label: 'درباره' },
  { to: '/contact', label: 'تماس' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="holder">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <p className="en-display">{agency.nameEn}</p>
            <strong>{agency.name}</strong>
          </div>
          <ul className="site-footer__nav">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__text">
          <p>
            {agency.name} آژانسی بوتیک برای معرفی املاک ممتاز در کرج است. تمرکز ما روی کیفیت
            سکونت، موقعیت و ارائه شفاف است — نه انباشت آگهی.
          </p>
          <p>
            {agency.address} · {agency.hours} ·{' '}
            <a href={agency.phoneHref} dir="ltr">
              {agency.phone}
            </a>
          </p>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {new Date().getFullYear()} {agency.nameEn}
          </p>
          <p>Pro Experience</p>
        </div>
      </div>
    </footer>
  )
}
