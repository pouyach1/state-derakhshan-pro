import Button from '../components/Button'
import CTASection from '../components/CTASection'
import ImageBlock from '../components/ImageBlock'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { agency } from '../data/agency'
import { getFeaturedProperties } from '../data/properties'
import { useDocumentMeta } from '../hooks/useReveal'
import './About.css'

export default function About() {
  useDocumentMeta({
    title: 'درباره ما | املاک درخشان',
    description:
      'آشنایی با فلسفه، تجربه و رویکرد املاک درخشان در معرفی خانه‌های ممتاز کرج.',
  })

  const images = getFeaturedProperties(3)

  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container--wide about-hero__layout">
          <Reveal>
            <div className="about-hero__copy">
              <p className="eyebrow">About</p>
              <p className="en-display about-hero__en">Derakhshan Real Estate</p>
              <h1>{agency.name}</h1>
              <p className="about-hero__lead">
                آژانسی بوتیک برای معرفی املاک ممتاز کرج. ما به‌جای انباشت آگهی، روی کیفیت
                سکونت، موقعیت و ارائه شفاف تمرکز می‌کنیم.
              </p>
              <p className="about-hero__tag">{agency.tagline}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ImageBlock src={images[0].images[0]} alt="فضای معماری آرام" ratio="5 / 6" priority />
          </Reveal>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container about-philosophy">
          <Reveal>
            <SectionHeading
              tone="light"
              align="center"
              eyebrow="Philosophy"
              title="خانه باید احساس درستی بدهد"
              description="نور، سکوت، کیفیت ساخت، دسترسی و تناسب با سبک زندگی موکل، معیارهای اصلی انتخاب ما هستند."
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container--wide about-story">
          <Reveal>
            <ImageBlock src={images[1].images[0]} alt="جزئیات معماری" ratio="4 / 5" />
          </Reveal>
          <Reveal delay={80}>
            <div className="about-story__copy">
              <SectionHeading
                eyebrow="Experience"
                title="شناخت محلی، نگاه حرفه‌ای"
                description="فعالیت متمرکز در کرج به ما آموخته که ارزش واقعی یک خانه در جزئیات محله و کیفیت اجرا پنهان است."
              />
              <div className="about-stats">
                {agency.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <Button to="/contact">گفتگو با تیم درخشان</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container--wide">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Services"
              title="خدمات متمرکز"
              description="همان خدماتی که در داده‌های آژانس ثبت شده‌اند؛ بدون ادعای اضافه."
            />
          </Reveal>
          <div className="about-services">
            {agency.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 60} as="article">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="از مشاهده تا تصمیم"
        description="فهرست املاک را ببینید یا مستقیم با مشاور ارتباط بگیرید."
        primary={{ to: '/properties', label: 'مشاهده املاک' }}
        secondary={{ to: '/contact', label: 'تماس' }}
      />
    </div>
  )
}
