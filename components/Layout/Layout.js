import Head from 'next/head'
import SideNav from './SideNav'
import Footer from './Footer'
import Script from 'next/script'

export default function Layout({ children, headContent }) {
  return (
    <>
      {headContent}
      <main>
        <SideNav />
        <div className="pt-16">{children}</div>
        <Footer />
      </main>
    </>
  )
}
