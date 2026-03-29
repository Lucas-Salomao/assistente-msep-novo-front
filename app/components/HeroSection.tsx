import Image from 'next/image'
import Link from 'next/link'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.container}>
        {/* Left column — text */}
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>bolt</span>
            Educação 4.0
          </div>

          {/* Heading */}
          <h1 className={styles.heading}>
            Potencialize seu{' '}
            <span className={styles.headingAccent}>Ensino</span>{' '}
            com Inteligência.
          </h1>

          {/* Sub-heading */}
          <p className={styles.description}>
            A plataforma Assistente da MSEP transforma a elaboração de planos de
            aula em uma experiência fluida, técnica e personalizada através de IA
            especializada na metodologia SENAI.
          </p>

          {/* CTA Buttons */}
          <div className={styles.actions}>
            <a href="#demo" className={styles.btnSecondary}>
              <span className="material-symbols-outlined filled">play_circle</span>
              Ver Demo
            </a>
            <Link href="/home" className={styles.btnPrimary}>
              Acessar o Assistente
            </Link>
          </div>
        </div>

        {/* Right column — image */}
        <div className={styles.imageWrapper}>
          {/* Glow effect */}
          <div className={styles.glow} />
          <div className={styles.imageCard}>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSuahSamNZktcIkOdFrdi7B4N9D7eWBCD6UVO4rGpiSK8fuz-RhncaVCqvJirkvvP6XlYPcRrfBA4eH5d-SpeycMjpq0tlhnSEqNgpVNfpkv19zquR71o-nr8HKahZZ9SYda_SMA75bAjzTRAHytTnFFmIbL6GtXznaIc1IdIjxPrdEl4r691aCD4Y5S62bVYbFyY0g1d0-attigHwgDBQvkFU2iO2hoyz_R2d4PL9G_Ta99oKFU4X6995MeeNMZq_-QxAPHbBU0zL"
              alt="Professor brasileiro trabalhando em laptop com a plataforma SENAI aberta em ambiente educacional moderno."
              width={800}
              height={500}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative background gradients */}
      <div className={styles.bgGradient1} aria-hidden />
      <div className={styles.bgGradient2} aria-hidden />
    </section>
  )
}
