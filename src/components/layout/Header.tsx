import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PLAY_STORE_URL } from '../../constants/app'
import { BrandLogo } from '../ui/BrandLogo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="SellYourScrap home" onClick={closeMenu}>
          <BrandLogo variant="navbar" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link to="/#how-it-works">How It Works</Link>
          <Link to="/#features">Features</Link>
          <Link to="/#categories">Categories</Link>
          <Link to="/#screenshots">App</Link>
        </nav>
        <a className="button button-dark header-cta" href={PLAY_STORE_URL}>
          Download App
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <nav className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
        <Link to="/#how-it-works" onClick={closeMenu}>How It Works</Link>
        <Link to="/#features" onClick={closeMenu}>Features</Link>
        <Link to="/#categories" onClick={closeMenu}>Categories</Link>
        <Link to="/#screenshots" onClick={closeMenu}>App Preview</Link>
        <a className="button button-green" href={PLAY_STORE_URL} onClick={closeMenu}>Download App</a>
      </nav>
    </header>
  )
}
