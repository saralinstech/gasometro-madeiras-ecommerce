/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { PT_Sans } from 'next/font/google'
import Header from '@/components/Header'
import GlobalStyle from '@/styles/globalStyled'
import Footer from '@/components/Footer'

const pt = PT_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Gasômetro Madeiras',
  description:
    'Loja especializada em máquinas para marcenaria, acessórios e ferragens para móveis. Equipamentos e ferramentas para marcenaria com ótimos preços e condições.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={pt.className}>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
