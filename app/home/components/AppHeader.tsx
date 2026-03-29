import styles from './AppHeader.module.css'

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <span className={styles.title}>Assistente MSEP</span>
      <div className={styles.actions}>
        <button className={styles.iconBtn} title="Notificações" aria-label="Notificações">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className={styles.iconBtn} title="Ajuda" aria-label="Ajuda">
          <span className="material-symbols-outlined">help</span>
        </button>
        <button className={styles.avatar} title="Perfil" aria-label="Perfil do usuário">
          LS
        </button>
        <span className={styles.userName}>Lucas Silva</span>
      </div>
    </header>
  )
}
