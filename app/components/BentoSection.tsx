import Image from 'next/image'
import styles from './BentoSection.module.css'

export default function BentoSection() {
  return (
    <section className={styles.section} id="metodologia">
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Metodologia Assistente da MSEP</h2>
          <p className={styles.subtitle}>
            Unindo décadas de experiência industrial com as ferramentas
            tecnológicas mais avançadas do mercado educacional.
          </p>
        </div>

        {/* Bento grid */}
        <div className={styles.grid}>

          {/* Card 1 — wide — Arquitetura de Conhecimento */}
          <div className={`${styles.card} ${styles.cardWide}`}>
            <div className={styles.cardIcon}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>psychology</span>
            </div>
            <h3 className={styles.cardTitle}>Arquitetura de Conhecimento</h3>
            <p className={styles.cardText}>
              Nossa IA foi treinada especificamente nos currículos do SENAI,
              garantindo que cada plano de aula respeite as normas técnicas e os
              objetivos de aprendizagem por competência.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Técnico</span>
              <span className={styles.tag}>Competências</span>
              <span className={styles.tag}>Indústria 4.0</span>
            </div>
          </div>

          {/* Card 2 — dark — Foco Industrial */}
          <div className={`${styles.card} ${styles.cardDark}`}>
            <div className={styles.cardDarkDecor} aria-hidden>
              <span className="material-symbols-outlined filled" style={{ fontSize: '12rem' }}>precision_manufacturing</span>
            </div>
            <div className={styles.cardDarkContent}>
              <h3 className={styles.cardTitleDark}>Foco Industrial</h3>
              <p className={styles.cardTextDark}>
                Aproximação real com os desafios do chão de fábrica e laboratórios
                técnicos.
              </p>
            </div>
          </div>

          {/* Card 3 — Agilidade Real */}
          <div className={`${styles.card} ${styles.cardCenter}`}>
            <div className={styles.cardIconCircle}>
              <span className="material-symbols-outlined" style={{ fontSize: '2.5rem' }}>speed</span>
            </div>
            <h3 className={styles.cardTitle}>Agilidade Real</h3>
            <p className={styles.cardText}>
              Reduza em 70% o tempo de planejamento burocrático.
            </p>
          </div>

          {/* Card 4 — wide — Suporte ao Docente */}
          <div className={`${styles.card} ${styles.cardWide}`}>
            <div className={styles.cardSupportRow}>
              <div className={styles.cardSupportText}>
                <h3 className={styles.cardTitle}>Suporte ao Docente</h3>
                <p className={styles.cardText}>
                  Nossa plataforma não substitui o professor; ela o empodera com
                  dados e sugestões interativas em tempo real.
                </p>
                <div className={styles.availableTag}>
                  <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>forum</span>
                  Assistente Disponível 24/7
                </div>
              </div>
              <div className={styles.cardSupportImageWrapper}>
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOBVAYRrKZYCROsr-YHqsZDidfogCBcsAghFrLxkiP8caUFttXYeydF2KdW4mCwoZ2yM9RRU-rWCIVhYgGjnz9b8BrHiTDB22RYiR9I8vd9mmK-mSAOCB8OVSvBTnPsxJvSCJOR-t3T5bdMaObXLgLDzeYWI_R7zNJrQHH-8Qev8gz3jNefQKoEvLBsH-3s-jhdl96yM_SKVOJSAU1fPqYwuwQh7_MJh-rEG2kYN2x59IDb62T4aB0qf5GLQLMtQQWC0xEfFlMIpOC"
                  alt="Dashboard minimalista com gráficos limpos e perfil de professor"
                  width={400}
                  height={192}
                  className={styles.cardSupportImage}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
