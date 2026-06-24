import { Link } from 'react-router-dom'
import { PLAY_STORE_URL } from '../../constants/app'
import { BrandLogo } from '../ui/BrandLogo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="footer-brand-logo" to="/" aria-label="SellYourScrap home">
            <BrandLogo light />
          </Link>
          <p>Built for simple, transparent scrap pickup from your phone.</p>
          <span>Currently focused on Android.</span>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/#how-it-works">How It Works</Link>
          <Link to="/#features">Features</Link>
          <Link to="/#categories">Categories</Link>
          <Link to="/#screenshots">App Preview</Link>
        </div>
        <div>
          <h3>Support</h3>
          <a href="mailto:support@sellyourscrap.in">support@sellyourscrap.in</a>
          <a href={PLAY_STORE_URL}>Download App</a>
        </div>
        <div>
          <h3>Legal</h3>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/delete-account">Delete Account</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Â© {new Date().getFullYear()} SellYourScrap</span>
        <span>Service availability may vary by location.</span>
      </div>
    </footer>
  )
}
