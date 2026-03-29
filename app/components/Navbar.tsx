'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo + links */}
        <div className={styles.left}>
          {/* Logo placeholder — uses Next <img> with normal img since it's an SVG from Google Storage */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://lh3.googleusercontent.com/aida/ADBb0ui2OIk4W3Vayk3rapSY_MH4DX5vvGWeu5V9DF31UYLGxoXDUwcTgeq9weLZ0rnVaQ9f9lxU7fmu9lkpc_gciucCIyj-zn5Ik1W4QXVkah3t64xk8jmGCV-_shoZELujmtbiZsNud1eoHEY5ioyit5zuMnjcBCLP-06zhIimZkRC0lbZkLk3BfY-wXu2IjTlxnspkfVT7Ka9P8pXpFO0sZP0BIck80628X3zoLIyVV9B1YDTAu19gWkeUTvy_H8lINIxcxbP7zLnhgE"
            alt="Assistente da MSEP"
            className={styles.logo}
            height={32}
          />
          <div className={styles.links}>
            <a href="#" className={`${styles.link} ${styles.linkActive}`}>Início</a>
            <a href="#recursos" className={styles.link}>Recursos</a>
            <a href="#metodologia" className={styles.link}>Metodologia</a>
            <a href="#suporte" className={styles.link}>Suporte</a>
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <Link href="/home" className={styles.cta}>
            Acessar o Assistente
          </Link>
          {/* Hamburger */}
          <button
            className={styles.hamburger}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#" className={`${styles.mobileLink} ${styles.mobileLinkActive}`} onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#recursos" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Recursos</a>
          <a href="#metodologia" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Metodologia</a>
          <a href="#suporte" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Suporte</a>
          <Link href="/home" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>Acessar o Assistente</Link>
        </div>
      )}
    </nav>
  )
}
