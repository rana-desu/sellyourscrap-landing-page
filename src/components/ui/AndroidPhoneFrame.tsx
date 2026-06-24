import { appJourneySteps } from '../../data/appJourneyData'

export function AndroidPhoneFrame({
  src,
  alt,
  steps,
  activeIndex = 0,
  hero = false,
  compact = false,
}: {
  src?: string
  alt?: string
  steps?: typeof appJourneySteps
  activeIndex?: number
  hero?: boolean
  compact?: boolean
}) {
  const screenshots = steps ?? (src && alt ? [{ src, alt, label: '', title: '', body: '' }] : [])

  return (
    <div className={`android-phone ${hero ? 'phone-hero' : ''} ${compact ? 'phone-compact' : ''}`}>
      <div className="android-status-bar" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="android-screen">
        {screenshots.map((screen, index) => (
          <img
            className={index === activeIndex ? 'is-active' : ''}
            src={screen.src}
            alt={screen.alt}
            key={screen.src}
          />
        ))}
      </div>
    </div>
  )
}
