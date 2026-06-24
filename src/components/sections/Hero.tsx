import { CheckCircle2, ChevronRight, MapPin, Smartphone, TrendingUp } from 'lucide-react'
import { PLAY_STORE_URL } from '../../constants/app'
import { AndroidPhoneFrame } from '../ui/AndroidPhoneFrame'

export function Hero() {
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
          <AndroidPhoneFrame src="/assets/imgs/home.jpg" alt="SellYourScrap Android app home screen" hero />
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
