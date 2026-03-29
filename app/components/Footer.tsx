import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="suporte">
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <span className={styles.brandName}>Assistente da MSEP</span>
          <p className={styles.copyright}>
            © 2026 Serviço Nacional de Aprendizagem Industrial. Todos os
            direitos reservados.
          </p>
        </div>

        {/* Links */}
        <nav className={styles.links} aria-label="Links do rodapé">
          <a href="#" className={styles.link}>Termos de Uso</a>
          <a href="#" className={styles.link}>Privacidade</a>
          <a href="#" className={styles.link}>Ajuda</a>
          <a href="#" className={styles.link}>Contato</a>
        </nav>

        {/* Social share */}
        <div className={styles.social}>
          <a
            href="#"
            className={styles.socialBtn}
            aria-label="Compartilhar"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>share</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
