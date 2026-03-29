'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.css'

const navItems = [
  { icon: 'add_comment', label: 'Nova Conversa', href: '/home' },
  { icon: 'history', label: 'Histórico', href: '/home/historico' },
  { icon: 'description', label: 'Gerador de Planos', href: '/home/gerador' },
  { icon: 'folder_special', label: 'Planos Salvos', href: '/home/planos' },
]

const systemItems = [
  { icon: 'admin_panel_settings', label: 'Administração', href: '/home/admin' },
  { icon: 'settings', label: 'Configurações', href: '/home/configuracoes' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logoArea}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://lh3.googleusercontent.com/aida/ADBb0ui2OIk4W3Vayk3rapSY_MH4DX5vvGWeu5V9DF31UYLGxoXDUwcTgeq9weLZ0rnVaQ9f9lxU7fmu9lkpc_gciucCIyj-zn5Ik1W4QXVkah3t64xk8jmGCV-_shoZELujmtbiZsNud1eoHEY5ioyit5zuMnjcBCLP-06zhIimZkRC0lbZkLk3BfY-wXu2IjTlxnspkfVT7Ka9P8pXpFO0sZP0BIck80628X3zoLIyVV9B1YDTAu19gWkeUTvy_H8lINIxcxbP7zLnhgE"
          alt="SENAI"
          className={styles.logoImg}
          height={32}
        />
      </div>

      {/* Nav principal */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                >
                  <span className={`material-symbols-outlined ${styles.navIcon}`}>
                    {item.icon}
                  </span>
                  <span className={styles.navLabel}>{item.label}</span>
                  {isActive && <span className={styles.activeBar} />}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Seção Sistema */}
        <div className={styles.sectionLabel}>SISTEMA</div>
        <ul className={styles.navList}>
          {systemItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.navItem}>
                <span className={`material-symbols-outlined ${styles.navIcon}`}>
                  {item.icon}
                </span>
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botão Novo Plano */}
      <div className={styles.newPlanArea}>
        <button className={styles.newPlanBtn}>
          <span className="material-symbols-outlined">add</span>
          Novo Plano
        </button>
      </div>
    </aside>
  )
}
