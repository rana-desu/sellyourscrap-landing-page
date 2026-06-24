import { Scale, Smartphone, TrendingUp, UsersRound } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { TrustCard } from '../ui/TrustCard'

export function BuiltForTrust() {
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
