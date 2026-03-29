import styles from './FeaturesSection.module.css'

const features = [
  {
    icon: 'smart_toy',
    title: 'IA Especializada',
    description:
      'Algoritmos treinados especificamente para compreender o catálogo de cursos e diretrizes do SENAI Nacional.',
  },
  {
    icon: 'architecture',
    title: 'Planos Personalizados',
    description:
      'Adapte o conteúdo instantaneamente ao nível da turma, equipamentos disponíveis e carga horária específica.',
  },
  {
    icon: 'hub',
    title: 'Assistente Interativo',
    description:
      'Um chatbot avançado que auxilia na curadoria de materiais didáticos e atividades práticas inovadoras.',
  },
]

export default function FeaturesSection() {
  return (
    <section className={styles.section} id="recursos">
      <div className={styles.container}>
        {/* Header row */}
        <div className={styles.headerRow}>
          <div>
            <span className={styles.eyebrow}>Funcionalidades</span>
            <h2 className={styles.title}>Projetado para a Excelência</h2>
          </div>
          <p className={styles.subtitle}>
            Recursos exclusivos desenvolvidos por especialistas em educação
            tecnológica.
          </p>
        </div>

        {/* Feature grid */}
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.feature}>
              <div className={styles.iconBox}>
                <span className="material-symbols-outlined filled">{feature.icon}</span>
              </div>
              <h4 className={styles.featureTitle}>{feature.title}</h4>
              <p className={styles.featureText}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
