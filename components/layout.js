import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <>
      <title>Osmium Consulting Group</title>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  )
}
