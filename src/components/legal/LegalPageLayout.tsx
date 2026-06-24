import { type ReactNode } from 'react'

export function LegalPageLayout({
  title,
  children,
  intro,
  accent = 'default',
  icon,
}: {
  title: string
  children: ReactNode
  intro?: string
  accent?: 'default' | 'destructive'
  icon?: ReactNode
}) {
  return (
    <section className={`legal-page ${accent === 'destructive' ? 'legal-page-destructive' : ''}`}>
      <div className="container legal-container">
        <div className="legal-hero reveal is-visible">
          <p className="kicker">SellYourScrap Legal</p>
          <div className="legal-title-row">
            {icon ? <span className="legal-title-icon">{icon}</span> : null}
            <h1>{title}</h1>
          </div>
          {intro ? <p className="legal-intro">{intro}</p> : null}
        </div>
        <article className="legal-card">{children}</article>
      </div>
    </section>
  )
}
