import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './index.scss'
import {AuthProvider} from '@/context/AuthContext'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'TV MUSIC',
  description: 'TV MUSIC - Next App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='relative h-screen max-h-screen min-h-screen w-full bg-main bg-cover bg-no-repeat text-sm text-white'>
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  )
}
