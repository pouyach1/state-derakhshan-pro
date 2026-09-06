import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import ImageBlock from '../components/ImageBlock'
import PropertyFilters from '../components/PropertyFilters'
import PropertyGrid from '../components/PropertyGrid'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { agency } from '../data/agency'
import {
  filterProperties,
  getFeaturedProperties,
  properties,
} from '../data/properties'
import { useDocumentMeta } from '../hooks/useReveal'
import './Home.css'

const defaultFilters = {
  q: '',
  location: 'all',
  type: 'all',
  transaction: 'all',
  bedrooms: 'all',
}

export default function Home() {
  useDocumentMeta({
    title: 'املاک درخشان | تجربه دیجیتال املاک ممتاز کرج',
    description:
      'املاک درخشان؛ جستجو، فیلتر، مقایسه و انتخاب خانه‌های ممتاز در مهرشهر، عظیمیه، مصباح، فردیس و دهقان‌ویلا.',
  })

  const navigate = useNavigate()
  const featured = getFeaturedProperties(4)
  const heroProperty = featured[0]
  const [filters, setFilters] = useState(defaultFilters)

  const discovered = useMemo(
    () => filterProperties(properties, filters).slice(0, 6),
    [filters],
  )

  const openDiscovery = () => {
    const params = new URLSearchParams()
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== 'all') params.set(key, value)
    })
    navigate(`/properties?${params.toString()}`)
  }

  return (
    <div className="home">
      {/* 01 — INTRODUCTION */}
      <section className="home-hero">
        <div className="home-hero__media" aria-hidden="true">
          <img
            src={heroProperty.images[0]}
            alt=""
            fetchPriority="high"
            decoding="async"
          />
          <div className="home-hero__veil" />
        </div>

        <div className="container--wide home-hero__content">
          <p className="home-hero__brand-en en-display">Derakhshan Real Estate</p>
          <p className="home-hero__brand-fa">{agency.name}</p>
          <h1 className="home-hero__title">
            {agency.tagline}
          </h1>
          <p className="home-hero__lead">
            تجربه دیجیتال املاک ممتاز کرج؛ از کشف و فیلتر تا مقایسه و گفتگو با مشاور —
            مسیری روشن برای تصمیم‌گیری.
          </p>
          <div className="home-hero__actions">
            <Button to="/properties" size="lg">
              ورود به فهرست املاک
            </Button>
            <Button href="#discovery" variant="secondary" size="lg">
              شروع کشف
            </Button>
          </div>
        </div>
      </section>

      {/* 02 — DISCOVERY */}
      <section id="discovery" className="section home-discovery">
        <div className="container--wide">
          <Reveal>
            <SectionHeading
              eyebrow="Discovery"
              title="کشف ملک، نه فقط تماشا"
              description="جستجو، محله، نوع معامله و تعداد خواب را تنظیم کنید؛ نتایج فوراً به‌روز می‌شوند."
              action={
                <Button variant="text" onClick={openDiscovery}>
                  مشاهده همه نتایج
                </Button>
              }
            />
          </Reveal>

          <Reveal>
            <PropertyFilters
              value={filters}
              onChange={setFilters}
              resultCount={filterProperties(properties, filters).length}
            />
          </Reveal>

          <Reveal>
            <PropertyGrid properties={discovered} columns={3} priorityCount={3} />
          </Reveal>
        </div>
      </section>

      {/* 03 — FEATURED / PROPERTY EXPERIENCE */}
      <section className="section section--cream home-featured">
        <div className="container--wide">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Featured"
              title="ملک‌های منتخب این فصل"
              description="واحدهایی که از نظر موقعیت، نور، کیفیت ساخت و حس سکونت بررسی شده‌اند."
              action={
                <Button to="/properties" variant="text-dark">
                  همه املاک
                </Button>
              }
            />
          </Reveal>
          <Reveal>
            <PropertyGrid
              properties={featured}
              columns={2}
              variant="landscape"
              priorityCount={2}
            />
          </Reveal>
        </div>
      </section>

      <section className="section home-experience">
        <div className="container--wide home-experience__layout">
          <Reveal>
            <ImageBlock
              src={featured[1]?.images[0]}
              alt="نمای معماری معاصر"
              caption="عکاسی معماری بخشی از معرفی حرفه‌ای هر ملک است"
              ratio="4 / 5"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="home-experience__copy">
              <SectionHeading
                eyebrow="Property Experience"
                title="بررسی دقیق، تصمیم آگاهانه"
                description="هر ملک روایت، مشخصات شفاف و مسیر مستقیم تا مشاور دارد. علاقه‌مندی و مقایسه را هم در همین تجربه نگه دارید."
              />
              <ul className="home-experience__list">
                <li>
                  <strong>اسکن سریع مشخصات</strong>
                  <span>موقعیت، نوع، قیمت، متراژ و خواب در یک نگاه.</span>
                </li>
                <li>
                  <strong>علاقه‌مندی محلی</strong>
                  <span>بدون حساب کاربری؛ ذخیره‌سازی روی دستگاه شما.</span>
                </li>
                <li>
                  <strong>مقایسه تا سه ملک</strong>
                  <span>کنار هم دیدن گزینه‌ها برای انتخاب نهایی.</span>
                </li>
              </ul>
              <div className="home-experience__actions">
                <Button to="/favorites" variant="secondary">
                  علاقه‌مندی‌ها
                </Button>
                <Button to="/compare" variant="secondary">
                  مقایسه
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — LOCAL EXPERTISE */}
      <section className="section section--light home-locations">
        <div className="container--wide">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Local Expertise"
              title="محله‌هایی که می‌شناسیم"
              description="تمرکز املاک درخشان روی چند منطقه کلیدی کرج است؛ جایی که جزئیات محله به‌اندازه خود ملک اهمیت دارد."
            />
          </Reveal>

          <div className="home-locations__stage">
            <Reveal>
              <ul className="home-locations__rail">
                {agency.locations.map((item, index) => (
                  <li key={item.name}>
                    <Link to={`/properties?location=${encodeURIComponent(item.name)}`}>
                      <span className="home-locations__index">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="home-locations__name">{item.name}</span>
                      <span className="home-locations__count">
                        {item.count.toLocaleString('fa-IR')} ملک فعال
                      </span>
                      <span className="home-locations__arrow" aria-hidden="true">
                        ←
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <ImageBlock
                src={featured[2]?.images[0]}
                alt="فضای داخلی روشن"
                caption="مهرشهر · عظیمیه · مصباح · فردیس · دهقان‌ویلا"
                ratio="5 / 6"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 05 — SERVICES */}
      <section className="section home-services">
        <div className="container--wide">
          <Reveal>
            <SectionHeading
              eyebrow="Expertise"
              title="آنچه برای موکلان انجام می‌دهیم"
              description="خدماتی متمرکز برای خرید، فروش و اجاره املاک ممتاز."
            />
          </Reveal>
          <div className="home-services__list">
            {agency.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 70} as="article" className="service-row">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — TRUST */}
      <section className="section section--cream home-trust">
        <div className="container--wide home-trust__layout">
          <Reveal>
            <div>
              <SectionHeading
                tone="light"
                eyebrow="Trust"
                title="کم‌حرف، دقیق، معتبر"
                description="ما به‌جای فهرست بلند، روی کیفیت معرفی تمرکز می‌کنیم. هر ملک روایت، تصویر و مشخصات شفاف دارد."
              />
              <Button to="/about" variant="solid-dark">
                بیشتر درباره درخشان
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="home-trust__stats" aria-label="آمار آژانس">
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

      {/* 07 — CONVERSION */}
      <CTASection
        title="قدم بعدی را روشن کنید"
        description="اگر به‌دنبال خانه‌ای خاص در کرج هستید، فهرست املاک را ببینید یا مستقیم با مشاور درخشان گفتگو کنید."
        primary={{ to: '/properties', label: 'مشاهده املاک' }}
        secondary={{ href: agency.whatsapp, label: 'گفتگو با مشاور' }}
      />
    </div>
  )
}
