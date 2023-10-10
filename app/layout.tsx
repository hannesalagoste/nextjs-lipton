import "../styles/globals.css";
import "styles/scss/main.scss"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "../components/Header"
import Footer from "../components/Footer"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lipton',
  description: 'Generated by Micro-platform',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body >
      <Header />
        <main className='main'>
        <div className="main__inner">
          {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
