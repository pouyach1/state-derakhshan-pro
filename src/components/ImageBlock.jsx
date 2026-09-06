import './ImageBlock.css'

export default function ImageBlock({
  src,
  alt = '',
  caption,
  ratio = '4 / 5',
  priority = false,
}) {
  return (
    <figure className="image-block" style={{ '--image-ratio': ratio }}>
      <div className="image-block__frame">
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
