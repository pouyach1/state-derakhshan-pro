import { useState } from 'react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { agency } from '../data/agency'
import { useDocumentMeta } from '../hooks/useReveal'
import './Contact.css'

const initialForm = { name: '', phone: '', message: '' }

export default function Contact() {
  useDocumentMeta({
    title: 'تماس | املاک درخشان',
    description: 'راه‌های ارتباط مستقیم با املاک درخشان.',
  })

  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero section--sm">
        <div className="container--wide">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="گفتگو را ساده شروع کنید"
              description="تماس بگیرید، پیام بفرستید یا از فرم کوتاه زیر استفاده کنید."
            />
          </Reveal>
        </div>
      </section>

      <section className="section contact-body">
        <div className="container--wide contact-body__layout">
          <Reveal>
            <div className="contact-channels">
              <article>
                <h2>تلفن دفتر</h2>
                <a href={agency.phoneHref} dir="ltr">
                  {agency.phone}
                </a>
              </article>
              <article>
                <h2>موبایل مشاور</h2>
                <a href={agency.mobileHref} dir="ltr">
                  {agency.mobile}
                </a>
              </article>
              <article>
                <h2>پیام‌رسان</h2>
                <div className="contact-channels__links">
                  <a href={agency.whatsapp} target="_blank" rel="noreferrer">
                    واتساپ
                  </a>
                  <a href={agency.telegram} target="_blank" rel="noreferrer">
                    تلگرام
                  </a>
                </div>
              </article>
              <article>
                <h2>ایمیل</h2>
                <a href={agency.emailHref}>{agency.email}</a>
              </article>
              <article className="contact-channels__wide">
                <h2>آدرس دفتر</h2>
                <p>{agency.address}</p>
                <p className="meta">{agency.hours}</p>
                <Button href={agency.mapLink} target="_blank" rel="noreferrer" variant="secondary">
                  مسیر روی نقشه
                </Button>
              </article>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <form className="contact-form" onSubmit={onSubmit}>
              <h2>پیام کوتاه</h2>
              <p className="meta">برای هماهنگی اولیه؛ مستقیم با شما تماس می‌گیریم.</p>

              {submitted ? (
                <p className="contact-form__success">پیام شما ثبت شد. به‌زودی تماس می‌گیریم.</p>
              ) : null}

              <label>
                <span>نام</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </label>
              <label>
                <span>شماره تماس</span>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                />
              </label>
              <label>
                <span>پیام</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
              </label>
              <Button type="submit">ارسال پیام</Button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section--sm contact-map">
        <div className="container--wide">
          <iframe title="نقشه دفتر املاک درخشان" src={agency.mapEmbed} loading="lazy" />
        </div>
      </section>
    </div>
  )
}
