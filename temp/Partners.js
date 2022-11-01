import React from 'react'
import Image from 'next/image'

function Partners({ t }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{t('partner')}</p>
      <div className="my-2 flex items-center gap-x-3">
        <div className="h-16 w-16">
          <Image
            src="/img/pages/index/partners/dell.png"
            alt="Dell EMC"
            height={1}
            width={1}
            layout="responsive"
          />
        </div>

        <div className="h-16 w-24 py-3">
          <Image
            src="/img/pages/index/partners/aia.png"
            alt="AIA"
            height={1}
            width={2.72}
            layout="responsive"
          />
        </div>

        <div className="h-16 w-24 py-2">
          <Image
            src="/img/pages/index/partners/yoov.png"
            alt="YOOV"
            height={1}
            width={2}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}

export default Partners
