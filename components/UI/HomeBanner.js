import React from 'react'
import Image from 'next/image'

function HomeBanner() {
  return (
    <div>
      <img
        className="md:hidden"
        src="img/pages/index/HomeBanner-600x500.webp"
        alt="HomeBanner"
        layout="responsive"
      />
      <img
        className="hidden md:inline-flex lg:hidden"
        src="img/pages/index/HomeBanner-800x500.webp"
        alt="HomeBanner"
        layout="responsive"
      />
      <img
        className="hidden lg:inline-flex xl:hidden"
        src="img/pages/index/HomeBanner-1400x500.webp"
        alt="HomeBanner"
        layout="responsive"
      />
      <img
        className="hidden xl:inline-flex"
        src="img/pages/index/HomeBanner-2000x500.webp"
        alt="HomeBanner"
        layout="responsive"
      />
    </div>
  )
}

export default HomeBanner
