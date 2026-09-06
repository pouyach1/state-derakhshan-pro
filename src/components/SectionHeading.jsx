import './SectionHeading.css'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  tone = 'dark',
  align = 'start',
}) {
  return (
    <div className={['section-heading', `section-heading--${tone}`, `is-${align}`].join(' ')}>
      <div className="section-heading__copy">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {title ? <h2 className="section-heading__title">{title}</h2> : null}
        {description ? <p className="section-heading__desc">{description}</p> : null}
      </div>
      {action ? <div className="section-heading__action">{action}</div> : null}
    </div>
  )
}
