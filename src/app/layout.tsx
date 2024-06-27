/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { PT_Sans } from 'next/font/google'
import Header from '@/components/Header'
import GlobalStyle from '@/styles/globalStyled'

const pt = PT_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'E-commerce de madeiras, compensados e acessórios',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={pt.className}>
        <GlobalStyle />
        <Header />
        {children}
      </body>
    </html>
  )
}
