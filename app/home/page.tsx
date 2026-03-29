import Sidebar from './components/Sidebar'
import AppHeader from './components/AppHeader'
import MainContent from './components/MainContent'
import styles from './home.module.css'

export default function HomePage() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.body}>
        <AppHeader />
        <main className={styles.main}>
          <MainContent />
        </main>
      </div>
    </div>
  )
}
