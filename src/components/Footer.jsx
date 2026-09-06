import { Link } from 'react-router-dom'
import { agency } from '../data/agency'
import './Footer.css'

const navLinks = [
  { to: '/', label: 'خانه' },
  { to: '/properties', label: 'املاک' },
  { to: '/favorites', label: 'علاقه‌مندی‌ها' },
  { to: '/compare', label: 'مقایسه' },
  { to: '/about', label: 'درباره ما' },
  { to: '/contact', label: 'تماس' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container--wide site-footer__main">
        <div className="site-footer__brand">
          <p className="site-footer__en en-display">Derakhshan Real Estate</p>
          <h2>{agency.name}</h2>
          <p className="site-footer__tagline">{agency.tagline}</p>
        </div>

        <div className="site-footer__groups">
          <div className="site-footer__group">
            <h3>کاوش</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__group">
            <h3>تماس</h3>
            <ul>
              <li>
                <a href={agency.phoneHref} dir="ltr">
                  {agency.phone}
                </a>
              </li>
              <li>
                <a href={agency.emailHref}>{agency.email}</a>
              </li>
              <li className="site-footer__address">{agency.address}</li>
              <li className="meta">{agency.hours}</li>
            </ul>
          </div>

          <div className="site-footer__group">
            <h3>ارتباط</h3>
            <ul>
              <li>
                <a href={agency.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={agency.telegram} target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </li>
              <li>
                <a href={agency.social.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container--wide site-footer__bottom">
        <p>
          © {new Date().getFullYear()} {agency.nameEn}
        </p>
        <p className="site-footer__credit">Pro Experience</p>
      </div>
    </footer>
  )
}
