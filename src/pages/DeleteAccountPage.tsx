import { AlertTriangle } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { LegalPageLayout } from '../components/legal/LegalPageLayout'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function DeleteAccountPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    reason: '',
    confirmed: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [notice, setNotice] = useState('')

  usePageMetadata(
    'Delete Account | SellYourScrap',
    'Request deletion of your SellYourScrap account and associated personal data.',
  )

  const updateField = (field: 'fullName' | 'email' | 'mobile' | 'reason', value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const validate = () => {
    const nextErrors: Record<string, string> = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const mobileDigits = form.mobile.replace(/\D/g, '')

    if (!form.fullName.trim()) nextErrors.fullName = 'Please enter your full name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email address.'
    else if (!emailPattern.test(form.email.trim())) nextErrors.email = 'Please enter a valid email address.'

    if (!form.mobile.trim()) nextErrors.mobile = 'Please enter your registered mobile number.'
    else if (mobileDigits.length !== 10) nextErrors.mobile = 'Please enter a valid 10-digit mobile number.'

    if (!form.confirmed) {
      nextErrors.confirmed = 'Please confirm that you understand this deletion is permanent.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNotice('')

    if (!validate()) return

    const reason = form.reason || 'Not provided'
    const mailtoBody = [
      'Hello SellYourScrap Support,',
      '',
      'I would like to request permanent deletion of my SellYourScrap account and associated personal data.',
      '',
      `Full Name: ${form.fullName.trim()}`,
      `Email Address: ${form.email.trim()}`,
      `Registered Mobile Number: +91 ${form.mobile.replace(/\D/g, '')}`,
      `Reason for Deletion: ${reason}`,
      '',
      'I understand that deleting my account is permanent and irreversible.',
    ].join('\n')

    const mailto = `mailto:support@sellyourscrap.in?subject=${encodeURIComponent('SellYourScrap Account Deletion Request')}&body=${encodeURIComponent(mailtoBody)}`
    window.location.href = mailto
    setNotice(
      'Your email client should open with the deletion request details. If it does not open, please email support@sellyourscrap.in with the same details.',
    )
  }

  return (
    <LegalPageLayout
      title="Account & Data Deletion Request"
      intro="You can request permanent deletion of your SellYourScrap account and all associated personal data. This action is irreversible."
      accent="destructive"
      icon={<AlertTriangle size={26} />}
    >
      <section className="delete-warning-card">
        <div className="delete-warning-heading">
          <AlertTriangle size={18} />
          <h2>What will be deleted</h2>
        </div>
        <ul>
          <li>Your account profile and login credentials</li>
          <li>Pickup order history and transaction records</li>
          <li>Saved addresses and personal details</li>
          <li>Any communications with our support team</li>
        </ul>
        <p>
          Processing takes up to 30 days. Some data may be retained as required by Indian law
          (e.g. GST records).
        </p>
      </section>

      <form className="delete-form-card" onSubmit={handleSubmit} noValidate>
        <div className="delete-form-grid">
          <label className="form-field">
            <span>Full Name *</span>
            <input
              type="text"
              placeholder="As registered in the app"
              value={form.fullName}
              onChange={(event) => updateField('fullName', event.target.value)}
              aria-invalid={Boolean(errors.fullName)}
            />
            {errors.fullName ? <small>{errors.fullName}</small> : null}
          </label>

          <label className="form-field">
            <span>Email Address *</span>
            <input
              type="email"
              placeholder="email@example.com"
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? <small>{errors.email}</small> : null}
          </label>

          <label className="form-field">
            <span>Registered Mobile Number *</span>
            <div className="phone-input">
              <span>+91</span>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="xxxxx xxxxx"
                value={form.mobile}
                onChange={(event) => updateField('mobile', event.target.value)}
                aria-invalid={Boolean(errors.mobile)}
              />
            </div>
            {errors.mobile ? <small>{errors.mobile}</small> : null}
          </label>

          <label className="form-field">
            <span>Reason for Deletion (optional)</span>
            <select
              value={form.reason}
              onChange={(event) => updateField('reason', event.target.value)}
            >
              <option value="">Select a reason...</option>
              <option value="I no longer use the app">I no longer use the app</option>
              <option value="I created another account">I created another account</option>
              <option value="Privacy concerns">Privacy concerns</option>
              <option value="Service not available in my area">Service not available in my area</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>

        <label className="checkbox-field">
          <input
            type="checkbox"
            checked={form.confirmed}
            onChange={(event) => setForm((current) => ({ ...current, confirmed: event.target.checked }))}
          />
          <span>
            I understand that deleting my account is permanent and irreversible. All my data,
            order history, and personal information will be permanently erased.
          </span>
        </label>
        {errors.confirmed ? <p className="checkbox-error">{errors.confirmed}</p> : null}

        <button className="button button-danger button-large delete-submit" type="submit">
          Submit Deletion Request
        </button>

        <p className="delete-support-note">
          Need help? Email us at <a href="mailto:support@sellyourscrap.in">support@sellyourscrap.in</a>
        </p>
        {notice ? <p className="delete-mailto-note">{notice}</p> : null}
      </form>
    </LegalPageLayout>
  )
}
