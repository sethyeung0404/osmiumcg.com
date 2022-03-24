import React from 'react'
import Image from 'next/image'

function HomeBanner() {
  return (
    <div className="mx-auto max-w-max">
      {/* sm:639px */}
      <div className="md:hidden">
        <Image
          src="/img/pages/index/HomeBanner-600x500.webp"
          alt="HomeBanner small"
          height={500}
          width={600}
        />
      </div>
      {/* md:767px */}
      <div className="hidden md:flex lg:hidden">
        <Image
          src="/img/pages/index/HomeBanner-800x500.webp"
          alt="HomeBanner medium"
          height={500}
          width={800}
        />
      </div>
      {/* lg:1023px */}
      <div className="hidden lg:flex xl:hidden">
        <Image
          src="/img/pages/index/HomeBanner-1400x500.webp"
          alt="HomeBanner large"
          height={500}
          width={1400}
        />
      </div>
      {/* xl:1279px */}
      <div className="hidden justify-self-auto xl:flex">
        <Image
          src="/img/pages/index/HomeBanner-2000x500.webp"
          alt="HomeBanner extralarge"
          height={500}
          width={2000}
        />
      </div>
    </div>
  )
}

export default HomeBanner
