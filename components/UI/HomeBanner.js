import React from 'react'
import Image from 'next/image'

function HomeBanner() {
  return (
    <div>
      {/* sm:639px src="img/pages/index/HomeBanner-600x500.webp" */}
      <img
        className="md:hidden"
        src="https://dummyimage.com/767x400/000/fff"
        alt="HomeBanner"
        height="400px"
        width="auto"
      />
      {/* md:767px src="img/pages/index/HomeBanner-800x500.webp"*/}
      <img
        className="hidden md:flex lg:hidden"
        src="https://dummyimage.com/1023x400/000/fff"
        alt="HomeBanner"
        height="400px"
        width="auto"
      />
      {/* lg:1023px src="img/pages/index/HomeBanner-1400x500.webp"*/}
      <img
        className="hidden lg:flex xl:hidden"
        src="https://dummyimage.com/1279x400/000/fff"
        alt="HomeBanner"
        height="400px"
        width="auto"
      />
      {/* xl:1279px 500-68 src="img/pages/index/HomeBanner-2000x500.webp" */}
      <img
        className="hidden xl:flex"
        src="https://dummyimage.com/2000x400/000/fff"
        alt="HomeBanner"
        height="400px"
        width="auto"
      />
    </div>
  )
}

export default HomeBanner
