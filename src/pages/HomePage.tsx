import { AccountAccess } from '../components/sections/AccountAccess'
import { AppJourneySection } from '../components/sections/AppJourneySection'
import { BuiltForTrust } from '../components/sections/BuiltForTrust'
import { FinalCTA } from '../components/sections/FinalCTA'
import { Hero } from '../components/sections/Hero'
import { HowItWorks } from '../components/sections/HowItWorks'
import { ScrapCategories } from '../components/sections/ScrapCategories'
import { WhyDownload } from '../components/sections/WhyDownload'
import { useRevealAnimations } from '../hooks/useRevealAnimations'

export function HomePage() {
  useRevealAnimations()

  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyDownload />
      <ScrapCategories />
      <BuiltForTrust />
      <AppJourneySection />
      <AccountAccess />
      <FinalCTA />
    </>
  )
}
