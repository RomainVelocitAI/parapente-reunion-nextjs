import type { Metadata } from "next"
import { Inter, Pacifico } from "next/font/google"
import "./globals.css"
import AnnouncementBar from "@/components/layout/AnnouncementBar"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { CookieBanner } from "@/components/CookieBanner"
import { organizationSchema } from "@/lib/schemas/organization"

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-inter",
})

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "optional",
  variable: "--font-pacifico",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://parapente-reunion.fr'),
  title: "Parapente Réunion | Vol Tandem Saint-Leu | Baptême de l'Air 974",
  description: "Vivez l'expérience unique du parapente à Saint-Leu, La Réunion. Vol tandem au-dessus du lagon avec moniteurs diplômés d'État. 300 jours de vol par an depuis 1990.",
  keywords: ['parapente réunion', 'baptême parapente', 'vol tandem saint-leu', 'parapente 974', 'vol parapente la réunion'],
  authors: [{ name: 'Parapente Réunion' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: 'Parapente Réunion - Sensations Inoubliables à Saint-Leu',
    description: 'Vol tandem parapente au-dessus du lagon turquoise. Moniteurs diplômés, 300 jours de vol par an.',
    url: 'https://parapente-reunion.fr',
    siteName: 'Parapente Réunion',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Parapente Réunion - Logo',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parapente Réunion - Vol Tandem Saint-Leu',
    description: 'Vivez l\'expérience unique du parapente à La Réunion. Vol tandem avec moniteurs diplômés.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${pacifico.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased font-sans overflow-x-hidden">
        <AnnouncementBar />
        <Header />
        <main className="pt-32">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
