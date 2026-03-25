import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Herve Portfolio',
  description: 'My personal portfolio website',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0a] text-white min-h-screen font-sans">
        {children}
      </body>
    </html>
  )
}
