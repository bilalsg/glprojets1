import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Authprovider from '@/components/providers/Authprovider'
import Navbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<body className={`${inter.className}  bg-black`}>
       <Authprovider>
       <Navbar className='z-20 ' />
       
         {children}

       </Authprovider>

      </body>
    </html>
  )
}
