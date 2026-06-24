import { type PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from 'react'
import { appJourneySteps } from '../../data/appJourneyData'
import { AndroidPhoneFrame } from '../ui/AndroidPhoneFrame'
import { SectionHeading } from '../ui/SectionHeading'

export function AppJourneySection() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<Array<HTMLElement | null>>([])
  const startX = useRef<number | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          const index = Number((visibleEntry.target as HTMLElement).dataset.stepIndex)
          setActive(index)
        }
      },
      {
        rootMargin: '-38% 0px -38% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  const previous = () => setActive((current) => Math.max(0, current - 1))
  const next = () => setActive((current) => Math.min(appJourneySteps.length - 1, current + 1))

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return
    const distance = event.clientX - startX.current
    if (distance > 45) previous()
    if (distance < -45) next()
    startX.current = null
  }

  return (
    <section className="section app-journey-section" id="screenshots">
      <div className="container">
        <SectionHeading
          kicker="Inside SellYourScrap"
          title="See the app before you download"
          body="Explore the core screens for rates, pickups, tracking, and order history."
          centered
        />
        <div className="app-journey-desktop reveal delay-1">
          <div className="journey-steps" aria-label="SellYourScrap app journey steps">
            {appJourneySteps.map((step, index) => (
              <article
                className={`journey-step ${active === index ? 'is-active' : ''}`}
                data-step-index={index}
                ref={(element) => {
                  stepRefs.current[index] = element
                }}
                key={step.label}
              >
                <span className="journey-progress">{index + 1}/4</span>
                <p>{step.label}</p>
                <h3>{step.title}</h3>
                <span>{step.body}</span>
              </article>
            ))}
          </div>
          <div className="journey-phone-sticky" aria-live="polite">
            <div className="journey-phone-shell">
              <AndroidPhoneFrame steps={appJourneySteps} activeIndex={active} />
              <div className="journey-progress-card">
                <span>{active + 1}/4</span>
                <strong>{appJourneySteps[active].label}</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="app-journey-mobile reveal delay-1">
          <div className="mobile-journey-card">
            <div
              className="mobile-phone-swipe"
              onPointerDown={(event) => {
                startX.current = event.clientX
              }}
              onPointerUp={onPointerUp}
              onPointerCancel={() => {
                startX.current = null
              }}
            >
              <AndroidPhoneFrame steps={appJourneySteps} activeIndex={active} compact />
            </div>
            <div className="mobile-step-copy">
              <span>{active + 1}/4</span>
              <p>{appJourneySteps[active].label}</p>
              <h3>{appJourneySteps[active].title}</h3>
              <p>{appJourneySteps[active].body}</p>
            </div>
            <div className="mobile-step-controls">
              <button type="button" onClick={previous} disabled={active === 0}>
                Previous
              </button>
              <div className="mobile-journey-dots" aria-label="Choose app journey screen">
                {appJourneySteps.map((step, index) => (
                  <button
                    type="button"
                    className={active === index ? 'is-active' : ''}
                    aria-label={`Show ${step.label}`}
                    aria-current={active === index}
                    onClick={() => setActive(index)}
                    key={step.label}
                  />
                ))}
              </div>
              <button type="button" onClick={next} disabled={active === appJourneySteps.length - 1}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
