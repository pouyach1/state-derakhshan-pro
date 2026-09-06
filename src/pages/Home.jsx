import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import HeroBanner from '../components/home/HeroBanner'
import SloganBand from '../components/home/SloganBand'
import { agency } from '../data/agency'
import { getFeaturedProperties, properties } from '../data/properties'
import { useDocumentMeta, useParallax } from '../hooks/useReveal'
import './Home.css'

function ParallaxFrame({ src, alt = '', ratio = '4 / 5', className = '' }) {
  const ref = useParallax(14)
  return (
    <div className={['home-media', className].filter(Boolean).join(' ')} style={{ '--ratio': ratio }} ref={ref}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  )
}

export default function Home() {
  useDocumentMeta({
    title: 'املاک درخشان | Derakhshan Real Estate',
    description:
      'املاک درخشان؛ خانه‌هایی که با دقت انتخاب شده‌اند. کشف، بررسی و ارتباط با مشاور در کرج.',
  })

  const featured = getFeaturedProperties(4)
  const heroSlides = featured.slice(0, 3).map((item) => ({
    id: item.id,
    image: item.images[0],
    slug: item.slug,
    label: item.title,
  }))

  return (
    <div className="home">
      <HeroBanner
        slides={heroSlides}
        title={agency.name}
        subtitle={agency.tagline}
        cta={{ to: '/properties', label: 'مشاهده املاک' }}
      />

      {/* About — centered editorial */}
      <section className="home-about">
        <div className="holder">
          <Reveal>
            <ParallaxFrame
              className="home-about__top"
              src={featured[0]?.images[1] || featured[0]?.images[0]}
              alt=""
              ratio="980 / 356"
            />
          </Reveal>

          <Reveal className="home-about__copy" delay={80}>
            <p className="home-kicker en-display">About</p>
            <h2>
              درباره
              <span>املاک درخشان</span>
            </h2>
            <p className="home-about__lead">
              معرفی گزینشی املاک ممتاز در کرج، با تمرکز بر کیفیت سکونت و شفافیت ارائه.
            </p>
            <p>
              {agency.name} به‌جای فهرست بلند آگهی، روی انتخاب دقیق، روایت فضا و مسیر مستقیم تا مشاور
              تمرکز می‌کند — در مهرشهر، عظیمیه، مصباح، فردیس و دهقان‌ویلا.
            </p>
            <Button to="/about">بیشتر بدانید</Button>
          </Reveal>
        </div>
      </section>

      {/* Split story */}
      <section className="home-split">
        <div className="holder home-split__grid">
          <Reveal>
            <div className="home-split__copy">
              <p className="home-kicker en-display">Approach</p>
              <h2>
                کم‌حرف،
                <span>دقیق، معتبر</span>
              </h2>
              <p>
                هر ملک پیش از معرفی از فیلتر موقعیت، نور، کیفیت ساخت و حس سکونت عبور می‌کند. هدف ما
                تصمیم‌گیری روشن‌تر برای موکل است.
              </p>
              <ul>
                {agency.services.slice(0, 3).map((service) => (
                  <li key={service.title}>
                    <strong>{service.title}</strong>
                    <span>{service.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ParallaxFrame src={featured[1]?.images[0]} alt="" ratio="4 / 5" />
          </Reveal>
        </div>
      </section>

      <SloganBand
        lines={['خانه‌هایی که', 'با دقت', 'انتخاب شده‌اند']}
      />

      {/* Featured properties — editorial large cards */}
      <section className="home-featured">
        <div className="holder">
          <Reveal className="home-featured__head">
            <p className="home-kicker en-display">Selected Homes</p>
            <h2>ملک‌های منتخب</h2>
            <p>مجموعه‌ای محدود از واحدها و ویلاهایی که برای این فصل انتخاب شده‌اند.</p>
          </Reveal>

          <div className="home-featured__list">
            {featured.map((property, index) => (
              <Reveal key={property.id} delay={index * 60} className="home-feature-card">
                <Link to={`/properties/${property.slug}`} className="home-feature-card__media">
                  <img src={property.images[0]} alt="" loading="lazy" decoding="async" />
                  <div className="home-feature-card__veil" />
                  <div className="home-feature-card__body">
                    <div className="home-feature-card__tags">
                      <span>{property.transaction === 'rent' ? 'اجاره' : 'فروش'}</span>
                      <span>{property.typeLabel}</span>
                      <span>{property.location}</span>
                    </div>
                    <h3>{property.title}</h3>
                    <p>
                      {property.priceLabel}
                      {property.priceSuffix ? ` / ${property.priceSuffix}` : ''}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="home-featured__action">
            <Button to="/properties">ورود به فهرست کامل</Button>
          </Reveal>
        </div>
      </section>

      {/* Locations */}
      <section className="home-locations">
        <div className="holder home-locations__grid">
          <Reveal>
            <div>
              <p className="home-kicker en-display">Locations</p>
              <h2>
                محله‌هایی
                <span>که می‌شناسیم</span>
              </h2>
              <p>
                جزئیات محله به‌اندازه خود ملک اهمیت دارد. تمرکز ما روی چند منطقه کلیدی کرج است.
              </p>
              <ul className="home-locations__rail">
                {agency.locations.map((item, index) => (
                  <li key={item.name}>
                    <Link to={`/properties?location=${encodeURIComponent(item.name)}`}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <strong>{item.name}</strong>
                      <em>{item.count.toLocaleString('fa-IR')} ملک</em>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ParallaxFrame src={featured[2]?.images[0]} alt="" ratio="5 / 6" />
          </Reveal>
        </div>
      </section>

      {/* Trust */}
      <section className="home-trust">
        <div className="holder home-trust__grid">
          <Reveal>
            <div>
              <p className="home-kicker en-display">Trust</p>
              <h2>اعتبار از دقت می‌آید</h2>
              <p>
                آمار زیر از داده‌های رسمی آژانس است — بدون ادعای تازه. برای آشنایی بیشتر با رویکرد
                درخشان، صفحه درباره را ببینید.
              </p>
              <Button to="/about" variant="ghost">
                درباره درخشان
              </Button>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="home-trust__stats">
              {agency.stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Catalog strip */}
      <section className="home-strip">
        <div className="holder home-strip__grid">
          <Reveal>
            <ParallaxFrame src={featured[3]?.images[0] || featured[0]?.images[0]} alt="" ratio="16 / 11" />
          </Reveal>
          <Reveal delay={90}>
            <div>
              <p className="home-kicker en-display">Catalog</p>
              <h2>
                {properties.length.toLocaleString('fa-IR')} ملک
                <span>آماده بازدید</span>
              </h2>
              <p>
                از پنت‌هاوس‌های تراس‌دار تا ویلاهای باغی؛ فهرست کوتاه اما باکیفیت. علاقه‌مندی و مقایسه
                را هم در همین تجربه نگه دارید.
              </p>
              <div className="home-strip__actions">
                <Button to="/properties">مشاهده املاک</Button>
                <Button to="/favorites" variant="ghost">
                  علاقه‌مندی‌ها
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Join / CTA — TREF join pattern */}
      <section className="home-join">
        <div className="holder">
          <Reveal className="home-join__inner">
            <span className="home-join__key" aria-hidden="true" />
            <p className="home-kicker en-display">Next Step</p>
            <h2>قدم بعدی را روشن کنید</h2>
            <p>
              اگر به‌دنبال خانه‌ای خاص در کرج هستید، فهرست املاک را ببینید یا مستقیم با مشاور درخشان
              گفتگو کنید.
            </p>
            <div className="home-join__actions">
              <Button to="/properties">مشاهده املاک</Button>
              <Button href={agency.whatsapp} target="_blank" rel="noreferrer" variant="ghost">
                گفتگو با مشاور
              </Button>
              <Button href={agency.phoneHref} variant="ghost">
                {agency.phone}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
