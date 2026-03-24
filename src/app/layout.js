import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.intellosoft.io'),
  title: 'Intellosoft Infotech - Intelligent Solutions. Infinite Possibilities.',
  description: 'Leading software consulting firm providing cutting-edge IT services consulting, software solutions, and technology consulting to help businesses accelerate growth and digital transformation.',
  keywords: 'software consulting, IT services, technology consulting, software solutions, digital transformation, cloud solutions, mobile app development, web development',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/Intellosoft%20infotech%20svg.svg',
    shortcut: '/Intellosoft%20infotech%20svg.svg',
    apple: '/Intellosoft%20infotech%20svg.svg'
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
