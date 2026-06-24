type BrandLogoProps = {
  className?: string
  light?: boolean
}

export function BrandLogo({ className = '', light = false }: BrandLogoProps) {
  return (
    <span className={`brand-logo ${light ? 'is-light' : ''} ${className}`.trim()}>
      <img
        className="brand-logo-image brand-logo-default"
        src="/assets/brand-logo.svg"
        alt="SellYourScrap"
      />
      <img
        className="brand-logo-image brand-logo-light"
        src="/assets/brand-logo-light.svg"
        alt=""
        aria-hidden="true"
      />
    </span>
  )
}
