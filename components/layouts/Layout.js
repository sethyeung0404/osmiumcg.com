import { React, useState } from 'react'
import SideNav from './navbar/SideNav'
import Footer from './navbar/Footer'

export default function Layout({ children, headContent }) {
  const [open, setOpen] = useState(false)

  function closeSidebar() {
    setOpen(false)
  }

  function openSidebar() {
    setOpen(true)
  }

  return (
    <>
      {headContent}
      <main>
        <SideNav
          open={open}
          closeSidebar={closeSidebar}
          openSidebar={openSidebar}
        />
        <div className="pt-16 md:mx-6">{children}</div>
        <Footer />
      </main>
    </>
  )
}
