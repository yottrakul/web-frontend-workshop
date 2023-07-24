import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Manrope, Inter } from "next/font/google"

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto'
})
const manrope = Manrope({
  subsets: ["latin"],
  weight: "600",
  variable: '--font-manrope'
})

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Workshop | Sian',
  description: 'this workshop practice by sian',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${manrope.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
