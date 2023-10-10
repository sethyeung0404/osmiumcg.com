import { React } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function SideNav({ open, closeSidebar, openSidebar }) {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()

  return (
    <div className="bg-white">
      {/* Sidebar */}
      <Sidebar
        router={router}
        open={open}
        closeSidebar={closeSidebar}
        t={t}
        i18n={i18n}
      />
      {/* Navbar*/}
      <Navbar
        router={router}
        open={open}
        closeSidebar={closeSidebar}
        openSidebar={openSidebar}
        t={t}
        i18n={i18n}
      />
    </div>
  )
}
