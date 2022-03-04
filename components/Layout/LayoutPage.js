import React from 'react'
import Link from 'next/link'

export default function LayoutPage({ children }) {
  return (
    <>
      {/* Banner */}
      <div className="">
        <img
          className="md:hidden"
          src="/img/banner/banner13-600x300.webp"
          alt="HomeBanner"
          layout="responsive"
        />
        <img
          className="hidden md:inline-flex lg:hidden"
          src="/img/banner/banner13-900x200.webp"
          alt="HomeBanner"
          layout="responsive"
        />
        <img
          className="hidden lg:inline-flex xl:hidden"
          src="/img/banner/banner13-1400x250.webp"
          alt="HomeBanner"
          layout="responsive"
        />
        <img
          className="hidden xl:inline-flex"
          src="/img/banner/banner13-2000x250.webp"
          alt="HomeBanner"
          layout="responsive"
        />
      </div>

      <div className="mx-auto max-w-3xl p-5 text-sm lg:max-w-7xl">
        {/* Sitemap */}
        <div className="flex">
          <Link href="/">
            <a>
              <div className="text-blue-700">Home</div>
            </a>
          </Link>
          <div className="">
            &nbsp;{'>'} About Us {'>'} Overview
          </div>
        </div>
        {children}
      </div>
    </>
  )
}
