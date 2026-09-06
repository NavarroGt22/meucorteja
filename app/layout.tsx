import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Instrument_Serif } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-instrument-serif' })

export const metadata: Metadata = {
  title: 'MeuCorteJá — Seu salão, no ritmo certo',
  description: 'Agendamento, fila e gestão para barbearias e salões de beleza.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon.png' }],
  },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#b6c1ad' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className="bg-[#f4f0e9]"><body className={`${dmSans.variable} ${instrumentSerif.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
