import React from 'react'
import Link from 'next/link'

export default function LayoutPage() {
  return (
    <div>
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

      {/* Sitemap */}
      <div className="mx-auto flex max-w-7xl pt-3">
        <Link href="/">
          <div>Home</div>
        </Link>
        <div>&nbsp;> About Us > Overview</div>
      </div>
    </div>
  )
}
