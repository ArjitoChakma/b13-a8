import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tiles Gallery - Discover Your Perfect Aesthetic',
  description: 'Explore premium tiles and ceramics for your home. Unique designs, quality materials, and affordable prices.',
  keywords: 'tiles, ceramics, gallery, home decor',
  authors: [{ name: 'Tiles Gallery Team' }],
  openGraph: {
    title: 'Tiles Gallery - Discover Your Perfect Aesthetic',
    description: 'Explore premium tiles and ceramics for your home.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
