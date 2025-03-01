import React from 'react'
import Image from 'next/image'
import Link from 'next/link.js'

function BannerCard({ t }) {
  return (
    <div className="grid grid-cols-2 items-center gap-x-32">
      <div className="order-2 col-span-2 p-2 text-left lg:order-1 lg:col-span-1">
        <h5 className="my-3 text-4.5xl font-extrabold">{t('OCG')}</h5>
        <h5 className="my-2 text-3xl font-bold">{t('trustedPartner')}</h5>
        <p className="text-base text-gray-400">{t('description')}</p>
        <button className="my-4 rounded-lg bg-red-400 py-2 px-6 font-semibold text-white hover:bg-red-500 hover:duration-200">
          <Link href="/contact-us">
            <a>{t('Contact')}</a>
          </Link>
        </button>
        
      </div>

      <div className="order-1 col-span-2 lg:order-2 lg:col-span-1">
        <div className="mx-auto max-w-lg px-6">
          <Image
            src="/img/pages/index/hiring.jpg"
            alt="We are hiring!"
            height={432}
            width={640}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}

export default BannerCard
