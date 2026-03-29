'use client'

import { useState } from 'react'
import styles from './MainContent.module.css'

const suggestions = [
  '"O que é Situação de Aprendizagem?"',
  '"Me ajude com critérios de avaliação"',
  '"Passo a passo da Prática Profissional"',
  '"Precisa de ajuda com a plataforma?"',
]

const actionCards = [
  {
    id: 'nova-conversa',
    icon: 'add_comment',
    iconBg: '#c8102e',
    iconColor: '#fff',
    title: 'Iniciar Nova Conversa',
    description: 'Tire dúvidas rápidas e explore a metodologia em tempo real.',
  },
  {
    id: 'gerar-planos',
    icon: 'description',
    iconBg: '#222',
    iconColor: '#fff',
    title: 'Gerar Planos de Ensino',
    description: 'Crie roteiros pedagógicos estruturados seguindo o padrão MSEP.',
  },
]

export default function MainContent() {
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    // TODO: conectar com o backend de chat
    setInput('')
  }

  const handleSuggestion = (text: string) => {
    setInput(text.replace(/"/g, ''))
  }

  return (
    <div className={styles.container}>
      {/* Badge IA */}
      <div className={styles.badge}>
        <span className="material-symbols-outlined">smart_toy</span>
        INTELIGÊNCIA ARTIFICIAL SENAI
      </div>

      {/* Saudação */}
      <h1 className={styles.greeting}>
        Olá, <span className={styles.accentName}>Lucas</span>
      </h1>
      <p className={styles.subtext}>
        Como posso apoiar sua jornada docente hoje? Estou pronto para tirar dúvidas sobre a{' '}
        <strong>metodologia SENAI MSEP</strong> ou ajudar você a construir{' '}
        <strong>planos de ensino</strong> de alta performance.
      </p>

      {/* Cards de ação */}
      <div className={styles.cards}>
        {actionCards.map((card) => (
          <button key={card.id} className={styles.card}>
            <span
              className={styles.cardIcon}
              style={{ background: card.iconBg, color: card.iconColor }}
            >
              <span className="material-symbols-outlined">{card.icon}</span>
            </span>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.description}</p>
          </button>
        ))}
      </div>

      {/* Sugestões rápidas */}
      <div className={styles.suggestionsArea}>
        <span className={styles.suggestionsLabel}>SUGESTÕES INICIAIS</span>
        <div className={styles.chips}>
          {suggestions.map((s) => (
            <button
              key={s}
              className={styles.chip}
              onClick={() => handleSuggestion(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Input de chat */}
      <div className={styles.inputArea}>
        <input
          type="text"
          className={styles.chatInput}
          placeholder="Pergunte algo sobre a metodologia MSEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          aria-label="Mensagem para o assistente"
        />
        <button
          className={styles.sendBtn}
          onClick={handleSend}
          disabled={!input.trim()}
          aria-label="Enviar mensagem"
        >
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  )
}
