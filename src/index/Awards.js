import React from 'react'
import Image from 'next/image'
import Divider from '@/components/ui/Divider'

function Award({ t }) {
  return (
    <div>
      <div className="grid grid-cols-1">
        <h1 className="SectionTitle"> {t('Awards')} </h1>
      </div>
      <div className="mx-auto grid grid-cols-5 items-center justify-center lg:gap-x-8 xl:gap-x-16">
        <div className="col-span-2 md:col-span-1">
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            src="/img/pages/index/awards/mythfocus.webp"
            alt="Mythfocus Award"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            src="/img/pages/index/awards/EOELogo-F.webp"
            alt="EOE Award"
          />
        </div>
        <div className="col-span-2 md:col-span-1 md:px-1">
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            src="/img/pages/index/awards/JobsdbHrAward.webp"
            alt="JobsDB HR Award"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Image
            width="80%"
            height="80%"
            layout="responsive"
            objectFit="contain"
            src="/img/pages/index/awards/gec2020.webp"
            alt="GEC Award"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Image
            width="80%"
            height="80%"
            layout="responsive"
            objectFit="contain"
            src="/img/pages/index/awards/ffge2020.webp"
            alt="FFGE Award"
          />
        </div>
      </div>
    </div>
  )
}

export default Award
