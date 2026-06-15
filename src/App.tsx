import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  CircleUserRound,
  Clock3,
  Cpu,
  Languages,
  MapPin,
  Menu,
  Newspaper,
  PackageOpen,
  Recycle,
  Scale,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  UsersRound,
  WalletCards,
  X,
  type LucideIcon,
} from 'lucide-react'
import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=sellyourscrap.in'

type IconType = LucideIcon

const steps: Array<{ icon: IconType; title: string; body: string }> = [
  {
    icon: Boxes,
    title: 'Choose Scrap',
    body: 'Select the types of scrap you want to sell and check the rates shown in the app.',
  },
  {
    icon: CalendarCheck,
    title: 'Book Pickup',
    body: 'Choose a convenient time and request doorstep pickup directly through the Android app.',
  },
  {
    icon: WalletCards,
    title: 'Get Paid',
    body: 'Get paid after your scrap is picked up and weighed with a digital scale.',
  },
]

const features: Array<{ icon: IconType; title: string; body: string }> = [
  {
    icon: MapPin,
    title: 'Doorstep Pickup',
    body: 'Request a pickup from your location through the app.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Rates',
    body: 'Review scrap rates before you schedule a pickup.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure OTP Login',
    body: 'Access your account with a simple OTP-based sign-in.',
  },
  {
    icon: Clock3,
    title: 'Order Tracking',
    body: 'Follow your pickup status from one clear screen.',
  },
  {
    icon: Languages,
    title: 'Multilingual Support',
    body: 'Use the app in English, Hindi, or Gujarati.',
  },
  {
    icon: CircleUserRound,
    title: 'Profile Management',
    body: 'Manage your addresses and personal details in the app.',
  },
]

const categories: Array<{ icon: IconType; label: string }> = [
  { icon: Newspaper, label: 'Paper' },
  { icon: PackageOpen, label: 'Cardboard' },
  { icon: Sparkles, label: 'Metal' },
  { icon: Recycle, label: 'Plastic' },
  { icon: Cpu, label: 'E-waste' },
  { icon: Boxes, label: 'Mixed Scrap' },
]

const screens = [
  { src: '/assets/imgs/home.jpg', alt: 'SellYourScrap app home screen', label: 'Homepage' },
  {
    src: '/assets/imgs/schedule_pickup.jpg',
    alt: 'SellYourScrap schedule pickup screen',
    label: 'Schedule Pickup',
  },
  {
    src: '/assets/imgs/live_scraprates.jpg',
    alt: 'SellYourScrap scrap rates screen',
    label: 'Scrap Rates',
  },
  {
    src: '/assets/imgs/profile_and_orders.jpg',
    alt: 'SellYourScrap profile and orders screen',
    label: 'Profile & Orders',
  },
]

function App() {
  useRevealAnimations()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyDownload />
        <ScrapCategories />
        <BuiltForTrust />
        <AppScreens />
        <Privacy />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="SellYourScrap home" onClick={closeMenu}>
          <img src="/assets/brand-logo.svg" alt="SellYourScrap" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#categories">Categories</a>
          <a href="#screenshots">App</a>
        </nav>
        <a className="button button-dark header-cta" href={PLAY_STORE_URL}>
          Download App
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <nav className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
        <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
        <a href="#features" onClick={closeMenu}>Features</a>
        <a href="#categories" onClick={closeMenu}>Categories</a>
        <a href="#screenshots" onClick={closeMenu}>App Preview</a>
        <a className="button button-green" href={PLAY_STORE_URL} onClick={closeMenu}>Download App</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <div className="eyebrow"><Smartphone size={16} /> Currently focused on Android</div>
          <h1>Sell scrap from your <span>doorstep.</span></h1>
          <p className="hero-lede">
            Check scrap rates, schedule doorstep pickup, and track your order with
            SellYourScrap, all from your phone.
          </p>
          <div className="hero-actions">
            <a className="button button-green button-large" href={PLAY_STORE_URL}>
              <Smartphone size={19} /> Download App
            </a>
            <a className="button button-outline button-large" href="#screenshots">
              Explore the App <ChevronRight size={18} />
            </a>
          </div>
          <div className="trust-pills" aria-label="App features">
            {['Doorstep pickup', 'Transparent rates', 'Digital weighing', 'Order tracking'].map(
              (item) => (
                <span key={item}><CheckCircle2 size={16} /> {item}</span>
              ),
            )}
          </div>
          <p className="availability-note">Service availability may vary by location.</p>
        </div>
        <div className="hero-visual reveal delay-2">
          <div className="phone-glow" />
          <PhoneMockup src="/assets/imgs/home.jpg" alt="SellYourScrap Android app home screen" hero />
          <div className="floating-card floating-card-top">
            <span className="floating-icon"><TrendingUp size={18} /></span>
            <span><strong>Check rates</strong><small>Before you schedule</small></span>
          </div>
          <div className="floating-card floating-card-bottom">
            <span className="floating-icon"><MapPin size={18} /></span>
            <span><strong>Pickup through the app</strong><small>At a time that suits you</small></span>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
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

function WhyDownload() {
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
              <span className="card-arrow" aria-hidden="true"><ArrowRight size={17} /></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ScrapCategories() {
  return (
    <section className="section white-section" id="categories">
      <div className="container">
        <SectionHeading
          kicker="Common categories"
          title="What you can list"
          body="Browse supported scrap categories and their rates inside the app."
          centered
        />
        <div className="categories-grid">
          {categories.map((category, index) => (
            <article className={`category-card reveal delay-${(index % 3) + 1}`} key={category.label}>
              <category.icon size={29} />
              <span>{category.label}</span>
            </article>
          ))}
        </div>
        <p className="category-note reveal">Available categories may vary by location.</p>
      </div>
    </section>
  )
}

function BuiltForTrust() {
  return (
    <section className="section trust-section">
      <div className="container">
        <SectionHeading
          kicker="A clearer pickup experience"
          title="Designed around transparency"
          body="Simple details in the app help you understand the rate, pickup status, and weighing process."
          light
        />
        <div className="trust-grid">
          <TrustCard
            className="trust-card-wide reveal"
            icon={Scale}
            title="Digital weighing"
            body="Scrap is weighed with a digital scale during pickup."
          />
          <TrustCard
            className="reveal delay-1"
            icon={TrendingUp}
            title="Visible rates"
            body="Check the rates listed in the app before making a request."
          />
          <TrustCard
            className="reveal delay-2"
            icon={UsersRound}
            title="Local pickup network"
            body="The app helps connect households and local pickup partners."
          />
          <TrustCard
            className="trust-card-accent reveal delay-3"
            icon={Smartphone}
            title="Keep it all together"
            body="Your pickup details and status stay easy to find in the app."
          />
        </div>
      </div>
    </section>
  )
}

function AppScreens() {
  const [active, setActive] = useState(0)
  const startX = useRef<number | null>(null)

  const previous = () => setActive((current) => Math.max(0, current - 1))
  const next = () => setActive((current) => Math.min(screens.length - 1, current + 1))

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return
    const distance = event.clientX - startX.current
    if (distance > 45) previous()
    if (distance < -45) next()
    startX.current = null
  }

  return (
    <section className="section screens-section" id="screenshots">
      <div className="container">
        <SectionHeading
          kicker="Inside SellYourScrap"
          title="See the app before you download"
          body="Swipe through the core screens for rates, pickups, and order tracking."
          centered
        />
        <div className="coverflow reveal delay-1">
          <button
            className="carousel-button previous"
            type="button"
            aria-label="Previous app screen"
            disabled={active === 0}
            onClick={previous}
          >
            <ArrowLeft />
          </button>
          <div
            className="coverflow-stage"
            onPointerDown={(event) => {
              startX.current = event.clientX
            }}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              startX.current = null
            }}
          >
            {screens.map((screen, index) => {
              const difference = index - active
              return (
                <button
                  className={`screen-item ${difference === 0 ? 'is-active' : ''}`}
                  style={{ '--difference': difference } as CSSProperties}
                  key={screen.label}
                  type="button"
                  aria-label={`Show ${screen.label} screen`}
                  aria-current={difference === 0}
                  onClick={() => setActive(index)}
                >
                  <PhoneMockup src={screen.src} alt={screen.alt} />
                  <span>{screen.label}</span>
                </button>
              )
            })}
          </div>
          <button
            className="carousel-button next"
            type="button"
            aria-label="Next app screen"
            disabled={active === screens.length - 1}
            onClick={next}
          >
            <ArrowRight />
          </button>
          <div className="carousel-dots" aria-label="Choose app screen">
            {screens.map((screen, index) => (
              <button
                type="button"
                className={active === index ? 'is-active' : ''}
                aria-label={`Show ${screen.label}`}
                aria-current={active === index}
                onClick={() => setActive(index)}
                key={screen.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Privacy() {
  return (
    <section className="privacy-section">
      <div className="container privacy-inner reveal">
        <span className="privacy-icon"><ShieldCheck size={31} /></span>
        <div>
          <p className="kicker">Account access</p>
          <h2>Simple sign-in, clear order history</h2>
          <p>Use OTP login to access your profile, saved addresses, and pickup status in the app.</p>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner reveal">
        <div>
          <p className="kicker kicker-light">Ready when your scrap is</p>
          <h2>Start from your phone.</h2>
          <p>Download the SellYourScrap Android app to check rates and request doorstep pickup.</p>
        </div>
        <a className="button button-light button-large" href={PLAY_STORE_URL}>
          <Smartphone size={20} /> Download Android App
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#top" aria-label="SellYourScrap home"><img src="/assets/brand-logo.svg" alt="SellYourScrap" /></a>
          <p>Built for simple, transparent scrap pickup from your phone.</p>
          <span>Currently focused on Android.</span>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#categories">Categories</a>
          <a href="#screenshots">App Preview</a>
        </div>
        <div>
          <h3>Support</h3>
          <a href="mailto:support@sellyourscrap.in">support@sellyourscrap.in</a>
          <a href={PLAY_STORE_URL}>Download App</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} SellYourScrap</span>
        <span>Service availability may vary by location.</span>
      </div>
    </footer>
  )
}

function SectionHeading({
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

function TiltCard({ children, className }: { children: ReactNode; className: string }) {
  const card = useRef<HTMLDivElement>(null)

  const onMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch' || !card.current) return
    const rect = card.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / rect.height) * -8
    const rotateY = ((x - rect.width / 2) / rect.width) * 8
    card.current.style.setProperty('--rotate-x', `${rotateX}deg`)
    card.current.style.setProperty('--rotate-y', `${rotateY}deg`)
    card.current.style.setProperty('--shine-x', `${x}px`)
    card.current.style.setProperty('--shine-y', `${y}px`)
  }

  const reset = () => {
    card.current?.style.setProperty('--rotate-x', '0deg')
    card.current?.style.setProperty('--rotate-y', '0deg')
  }

  return (
    <div ref={card} className={`tilt-card ${className}`} onPointerMove={onMove} onPointerLeave={reset}>
      <span className="tilt-shine" />
      <div className="tilt-content">{children}</div>
    </div>
  )
}

function TrustCard({
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

function PhoneMockup({
  src,
  alt,
  hero = false,
}: {
  src: string
  alt: string
  hero?: boolean
}) {
  return (
    <div className={`phone ${hero ? 'phone-hero' : ''}`}>
      <div className="phone-speaker" />
      <img src={src} alt={alt} />
    </div>
  )
}

function useRevealAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

export default App
