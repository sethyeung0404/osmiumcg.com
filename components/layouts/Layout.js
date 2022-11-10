import SideNav from './navbar/SideNav'
import Footer from './navbar/Footer'

export default function Layout({ children, headContent }) {
  return (
    <>
      {headContent}
      <main>
        <SideNav />
        <div className="pt-16 md:mx-6">
          {children}
          </div>
        <Footer />
      </main>
    </>
  )
}
