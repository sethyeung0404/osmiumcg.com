import Image from 'next/image'
import React from 'react'

function CareersBanner() {
  return (
    <section className="relative" >
      <Image
        className="-z-20"
        layout="fill"
        src="/img/pages/careers/rectangle-blue-1.png"
        alt="Blue Background"
        objectFit="cover"
        quality={100}
      />
      <div className="z-50 py-24 px-10 font-semibold text-white md:py-28 xl:py-32">
        <p className="text-6xl">ALL ABOARD!</p>
        <br />
        <p className="text-4xl">Join us at OCG</p>
      </div>
    </section>
  )
}

export default CareersBanner
