import './globals.css'
import { Inter } from 'next/font/google'
import GlobalState from '@/context'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
// import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Covid-19(2023)',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    {/* <Head>
        <link rel="icon" href="/images/aloklogo.png" />
      </Head> */}
      <body className={inter.className}>
        <GlobalState>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </GlobalState>
        {/* <p>{Footerss()}</p> */}
      </body>
    </html>
  )
}
