export function SectionHeading({
  kicker,
  title,
  body,
  centered = false,
  light = false,
}: {
  kicker: string
  title: string
  body: string
  centered?: boolean
  light?: boolean
}) {
  return (
    <div className={`section-heading reveal ${centered ? 'centered' : ''} ${light ? 'light' : ''}`}>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}
