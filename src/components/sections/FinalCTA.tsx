import { Smartphone } from 'lucide-react'
import { PLAY_STORE_URL } from '../../constants/app'

export function FinalCTA() {
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
