import { type IconType } from '../../data/homeData'

export function TrustCard({
  icon: Icon,
  title,
  body,
  className,
}: {
  icon: IconType
  title: string
  body: string
  className: string
}) {
  return (
    <article className={`trust-card ${className}`}>
      <span><Icon size={27} /></span>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
}
