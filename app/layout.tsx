import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Assistente da MSEP — Sistema de Ensino Assistido por IA',
  description:
    'A plataforma que transforma a elaboração de planos de aula em uma experiência fluida, técnica e personalizada, com IA especializada na metodologia SENAI.',
  metadataBase: new URL('https://assistentemsep.senai.br'),
  openGraph: {
    title: 'Assistente da MSEP — Sistema de Ensino Assistido por IA',
    description:
      'IA especializada na metodologia SENAI para professores e instrutores técnicos.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Fonts — Manrope + Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap"
        />
        {/* Material Symbols Outlined */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
