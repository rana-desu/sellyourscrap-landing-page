import { features } from '../../data/homeData'
import { SectionHeading } from '../ui/SectionHeading'

export function WhyDownload() {
  return (
    <section className="section soft-section" id="features">
      <div className="container">
        <SectionHeading
          kicker="Made for everyday recycling"
          title="Everything you need in one clear app"
          body="No web booking flow to learn. Open the Android app whenever you want to check rates or manage a pickup."
        />
        <div className="features-grid">
          {features.map((feature, index) => (
            <article className={`feature-card reveal delay-${(index % 3) + 1}`} key={feature.title}>
              <span className="feature-icon"><feature.icon size={26} /></span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
