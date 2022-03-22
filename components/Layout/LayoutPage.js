import React from 'react'
import Link from 'next/link'

export default function LayoutPage({ children, title, subtitle }) {
  return (
    <>
      {/* Banner */}
      <div className="">
        <img
          className="md:hidden"
          src="/img/layout/layout-600x300.webp"
          alt="LayoutBanner"
          layout="responsive"
        />
        <img
          className="hidden md:inline-flex lg:hidden"
          src="/img/layout/layout-900x200.webp"
          alt="HomeBanner"
          layout="responsive"
        />
        <img
          className="hidden lg:inline-flex xl:hidden"
          src="/img/layout/layout-1400x250.webp"
          alt="HomeBanner"
          layout="responsive"
        />
        <img
          className="hidden xl:inline-flex"
          src="/img/layout/layout-2000x250.webp"
          alt="HomeBanner"
          layout="responsive"
        />
      </div>

      <div className="mx-auto max-w-4xl p-5 text-sm lg:max-w-7xl">
        {/* Sitemap */}
        <div className="flex">
          <Link href="/">
            <a>
              <div className="text-blue-700">Home</div>
            </a>
          </Link>
          <div className="">
            &nbsp;{'>'} {title} {'>'} {subtitle}
          </div>
        </div>
        {children}
      </div>
    </>
  )
}
