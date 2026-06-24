import { LegalPageLayout } from '../components/legal/LegalPageLayout'
import { LegalSection } from '../components/legal/LegalSection'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function TermsOfServicePage() {
  usePageMetadata(
    'Terms of Service | SellYourScrap',
    'Read the terms that apply when using the SellYourScrap Android app and pickup services.',
  )

  return (
    <LegalPageLayout title="Terms of Service">
      <LegalSection title="Acceptance of Terms">
        <p>
          By downloading, installing, or using the SellYourScrap mobile application, you agree to
          be bound by these Terms of Service. If you do not agree to these terms, please do not use
          our service.
        </p>
      </LegalSection>

      <LegalSection title="Description of Service">
        <p>
          SellYourScrap is a mobile application that connects users with scrap pickup services. The
          app allows users to check live scrap rates, schedule doorstep pickups, manage addresses,
          track orders, and receive payment after collection.
        </p>
      </LegalSection>

      <LegalSection title="User Responsibilities">
        <p>As a user of SellYourScrap, you agree to:</p>
        <ul>
          <li>Provide accurate phone number, address, and pickup details</li>
          <li>Ensure scrap materials are ready for pickup at the scheduled time</li>
          <li>Not submit illegal, hazardous, stolen, or restricted materials for pickup</li>
          <li>Comply with all applicable local, state, and national laws</li>
        </ul>
      </LegalSection>

      <LegalSection title="Pickup and Pricing">
        <p>
          Scrap rates displayed in the app may vary by location, category, quality, and current
          market conditions. Final pricing may depend on actual weight and physical inspection of
          materials at the time of pickup. We reserve the right to adjust pricing based on these
          factors.
        </p>
      </LegalSection>

      <LegalSection title="Payments">
        <p>
          Payment for collected scrap will be processed after pickup verification and inspection.
          Payment timelines and methods will be communicated through the app.
        </p>
      </LegalSection>

      <LegalSection title="Cancellation and Rescheduling">
        <p>
          Users may cancel or reschedule pickup appointments subject to availability. Repeated
          cancellations may result in service restrictions.
        </p>
      </LegalSection>

      <LegalSection title="Account Security">
        <p>
          You are responsible for maintaining the security of your account and for all activities
          that occur under your account. Notify us immediately if you suspect any unauthorized use.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          SellYourScrap is provided on an &quot;as-is&quot; basis. We make no warranties regarding
          service availability, accuracy of rates, or pickup completion. We are not liable for any
          indirect, incidental, or consequential damages arising from your use of the service.
        </p>
      </LegalSection>

      <LegalSection title="Changes to Terms">
        <p>
          We reserve the right to modify these Terms of Service at any time. Updated terms will be
          posted in the app, and continued use of the service constitutes acceptance of the modified
          terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact Information">
        <p>
          For questions or concerns about these Terms of Service, please contact us at:{' '}
          <a href="mailto:support@sellyourscrap.in">support@sellyourscrap.in</a>
        </p>
      </LegalSection>

      <p className="legal-updated">Last updated: June 1, 2026</p>
    </LegalPageLayout>
  )
}
