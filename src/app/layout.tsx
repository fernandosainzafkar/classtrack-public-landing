import type { ReactNode } from 'react'

import { Inter, Lora, Roboto_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import Script from 'next/script'

import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'

import { cn } from '@/lib/utils'

import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.classtrack.academy'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin']
})

const lora = Lora({
  variable: '--font-serif',
  subsets: ['latin']
})

const robotoMono = Roboto_Mono({
  variable: '--font-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: '%s - ClassTrack | Gestión integral de academias',
    default: 'ClassTrack - Gestión integral de academias'
  },
  description:
    'Software de gestión para academias en España: crea tu web, automatiza matrículas y centraliza alumnos, pagos y comunicación en una sola plataforma.',
  robots: 'index,follow',
  applicationName: 'ClassTrack',
  keywords: [
    'software para academias',
    'software de gestión para academias',
    'programa para academias',
    'gestión de academias',
    'matrículas online para academias',
    'software para centros de formación',
    'gestión de alumnos y pagos',
    'software academias España'
  ],
  icons: {
    icon: [
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        url: '/favicon/android-chrome-192x192.png',
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        rel: 'icon',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: {
      template: 'ClassTrack - Gestión integral de academias',
      default: 'ClassTrack - Gestión integral de academias'
    },
    description:
      'Impulsa tu academia con una plataforma todo en uno para web, matrículas, gestión de alumnos, pagos y comunicación.',
    type: 'website',
    siteName: 'ClassTrack',
    url: siteUrl,
    locale: 'es_ES',
    images: [
      {
        url: '/images/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'ClassTrack - Gestión integral de academias'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: 'ClassTrack - Gestión integral de academias',
      default: 'ClassTrack - Gestión integral de academias'
    },
    description:
      'Software para academias con web, matrículas, alumnos, pagos y comunicación centralizados en una sola plataforma.'
  }
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='es'
      className={cn(inter.variable, lora.variable, robotoMono.variable, 'flex min-h-full w-full scroll-smooth')}
      suppressHydrationWarning
    >
      <body className='flex min-h-full w-full flex-auto flex-col'>
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-JNWWC7G94Y' strategy='afterInteractive' />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JNWWC7G94Y');
          `}
        </Script>
        <ThemeProvider attribute='class' enableSystem={false} disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
