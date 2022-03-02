import Head from 'next/head'
import SideNav from './SideNav'
import Footer from './Footer'
import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <>
      <title>Osmium Consulting Group</title>
      <main>
        <SideNav />
        {children}
        <Footer />
      </main>
    </>
  )
}
