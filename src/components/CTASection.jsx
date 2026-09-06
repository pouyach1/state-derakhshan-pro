import Button from './Button'
import './CTASection.css'

export default function CTASection({
  title,
  description,
  primary,
  secondary,
}) {
  return (
    <section className="cta-section">
      <div className="container--wide cta-section__inner">
        <div className="cta-section__copy">
          <p className="eyebrow">قدم بعدی</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-section__actions">
          {primary ? (
            <Button
              to={primary.to}
              href={primary.href}
              target={primary.href ? '_blank' : undefined}
              rel={primary.href ? 'noreferrer' : undefined}
              size="lg"
            >
              {primary.label}
            </Button>
          ) : null}
          {secondary ? (
            <Button
              to={secondary.to}
              href={secondary.href}
              target={secondary.href ? '_blank' : undefined}
              rel={secondary.href ? 'noreferrer' : undefined}
              variant="secondary"
              size="lg"
            >
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
