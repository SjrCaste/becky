import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sedería Becky | Alta Costura, Novias y Ceremonias de Lujo',
  description: 'Más de 84 años de trayectoria familiar creando momentos inolvidables. Boutique premium de alta costura, vestidos de novia, 15 años, fiesta y Bat Mitzvá en Buenos Aires.',
  generator: 'v0.app',
  keywords: [
    'vestidos de novia Buenos Aires',
    'vestidos de 15',
    'alta costura',
    'vestidos Bat Mitzvá',
    'vestidos madrinas',
    'sedería premium',
    'vestidos ceremonia',
    'Sedería Becky',
    'Once'
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
