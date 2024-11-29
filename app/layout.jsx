import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Durbar Rajshahi',
  description: 'Official website of Durbar Rajshahi cricket team',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-dr-purple to-dr-orange/10">
          {children}
        </main>
      </body>
    </html>
  )
}
