import { useReveal } from '../hooks/useReveal'
import './Reveal.css'

export default function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  ...props
}) {
  const { ref, visible } = useReveal()

  return (
    <Tag
      ref={ref}
      className={['reveal', visible ? 'is-visible' : '', className].filter(Boolean).join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
