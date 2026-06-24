import { steps } from '../../data/homeData'
import { SectionHeading } from '../ui/SectionHeading'
import { TiltCard } from '../ui/TiltCard'

export function HowItWorks() {
  return (
    <section className="section white-section" id="how-it-works">
      <div className="container">
        <SectionHeading
          kicker="Three simple steps"
          title="From clutter to cleared"
          body="Built for simple, transparent scrap pickup from your phone."
          centered
        />
        <div className="steps-grid">
          <div className="step-line" />
          {steps.map((step, index) => (
            <TiltCard key={step.title} className={`step-card reveal delay-${index + 1}`}>
              <span className="watermark">{index + 1}</span>
              <div className="step-number">0{index + 1}</div>
              <div className="icon-disc"><step.icon size={27} /></div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
