import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Intellosoft Infotech - Intelligent Solutions. Infinite Possibilities.',
  description: 'Leading software consulting firm providing cutting-edge IT services consulting, software solutions, and technology consulting to help businesses accelerate growth and digital transformation.',
  keywords: 'software consulting, IT services, technology consulting, software solutions, digital transformation, cloud solutions, mobile app development, web development',
  icons: {
    icon: [
      { url: '/intellosoft-logosa.png', sizes: '16x16', type: 'image/png' },
      { url: '/intellosoft-logosa.png', sizes: '32x32', type: 'image/png' },
      { url: '/intellosoft-logosa.png', sizes: '64x64', type: 'image/png' },
      { url: '/intellosoft-logosa.png', sizes: '192x192', type: 'image/png' },
      { url: '/intellosoft-logosa.png', sizes: '512x512', type: 'image/png' }
    ],
    shortcut: '/intellosoft-logosa.png',
    apple: '/intellosoft-logosa.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
