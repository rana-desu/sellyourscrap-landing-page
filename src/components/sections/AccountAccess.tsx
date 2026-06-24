import { ShieldCheck } from 'lucide-react'

export function AccountAccess() {
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
