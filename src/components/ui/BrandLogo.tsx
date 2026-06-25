import { BrandLogoSvg } from './BrandLogoSvg'

type BrandLogoProps = {
  className?: string
  variant?: 'navbar' | 'footer'
}

export function BrandLogo({ className = '', variant = 'navbar' }: BrandLogoProps) {
  return (
    <span className={`brand-logo brand-logo-${variant} ${className}`.trim()}>
      <BrandLogoSvg className="brand-logo-svg" aria-label="SellYourScrap" />
    </span>
  )
}
