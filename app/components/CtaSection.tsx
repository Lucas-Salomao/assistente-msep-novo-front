import Link from 'next/link'
import styles from './CtaSection.module.css'

export default function CtaSection() {
  return (
    <section className={styles.section} id="acessar">
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Decorative background gradients */}
          <div className={styles.gradientTopRight} aria-hidden />
          <div className={styles.gradientBottomLeft} aria-hidden />

          {/* Content */}
          <div className={styles.content}>
            <h2 className={styles.title}>
              Pronto para transformar sua sala de aula hoje?
            </h2>
            <p className={styles.description}>
              Junte-se a centenas de instrutores que já estão economizando tempo
              e aumentando a qualidade técnica de seus planos de ensino.
            </p>
            <div className={styles.actions}>
              <Link href="/home" className={styles.btn}>
                Acessar o Assistente
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
