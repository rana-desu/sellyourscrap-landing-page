import { LegalPageLayout } from '../components/legal/LegalPageLayout'
import { LegalSection } from '../components/legal/LegalSection'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function PrivacyPolicyPage() {
  usePageMetadata(
    'Privacy Policy | SellYourScrap',
    'Learn how SellYourScrap collects, uses, and protects information in the Android app.',
  )

  return (
    <LegalPageLayout title="Privacy Policy">
      <LegalSection title="Introduction">
        <p>
          SellYourScrap (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard your personal information
          when you use our mobile application.
        </p>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <p>We collect the following types of information:</p>
        <ul>
          <li>Phone number for OTP login and account verification</li>
          <li>Name and country for your profile</li>
          <li>Address details for coordinating doorstep pickup</li>
          <li>
            Pickup details including scrap category, estimated weight, preferred date and time,
            and special notes
          </li>
          <li>Order status and pickup history</li>
          <li>Optional profile photo if you choose to upload one</li>
          <li>Basic device and app diagnostics for security and crash fixing purposes</li>
        </ul>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <p>We collect and use your information for the following purposes:</p>
        <ul>
          <li>Account verification and authentication</li>
          <li>Scheduling and completing scrap pickups</li>
          <li>Displaying your order history and tracking pickup status</li>
          <li>Providing customer support</li>
          <li>Improving app reliability and user experience</li>
        </ul>
      </LegalSection>

      <LegalSection title="Data Sharing">
        <p>We share your information only in the following circumstances:</p>
        <ul>
          <li>With pickup partners only when necessary to complete your scheduled pickup</li>
          <li>With Firebase/Google services for phone authentication</li>
          <li>With legal authorities only when required by law</li>
        </ul>
        <p>We do not sell your personal data to third parties.</p>
      </LegalSection>

      <LegalSection title="Data Security">
        <p>
          We use secure transmission protocols where possible and limit access to your personal
          information to operational purposes only. While we strive to protect your data, no method
          of transmission over the internet is 100% secure.
        </p>
      </LegalSection>

      <LegalSection title="Data Retention">
        <p>
          We keep your account and pickup data while your account is active or as legally required.
          You may request account or data deletion at any time.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights">
        <p>
          You have the right to request account deletion, data correction, or access to your personal
          information at any time. Contact us at{' '}
          <a href="mailto:support@sellyourscrap.in">support@sellyourscrap.in</a> for such requests.
        </p>
      </LegalSection>

      <LegalSection title="Children's Privacy">
        <p>
          Our app is not intended for children under the age of 13. We do not knowingly collect
          personal information from children under 13.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          If you have any questions about this Privacy Policy, please contact us at:{' '}
          <a href="mailto:support@sellyourscrap.in">support@sellyourscrap.in</a>
        </p>
      </LegalSection>

      <p className="legal-updated">Last updated: June 1, 2026</p>
    </LegalPageLayout>
  )
}
