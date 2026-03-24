import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.intellosoft.io'),
  title: 'Intellosoft Infotech - Intelligent Solutions. Infinite Possibilities.',
  description: 'Leading software consulting firm providing cutting-edge IT services consulting, software solutions, and technology consulting to help businesses accelerate growth and digital transformation.',
  keywords: 'software consulting, IT services, technology consulting, software solutions, digital transformation, cloud solutions, mobile app development, web development',
  alternates: {
    canonical: 'https://www.intellosoft.io',
  },
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
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MRFWK44H');`}
        </Script>

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KJLMCNBTBR"
          strategy="beforeInteractive"
        />
        <Script id="ga-script" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KJLMCNBTBR');`}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRFWK44H"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
