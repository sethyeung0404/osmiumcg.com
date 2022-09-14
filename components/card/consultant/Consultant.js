import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export default function Consultant({ name, title1, title2, src }) {
  const { t } = useTranslation('specialization')

  return (
    <div className="embla__slide">
      <div className="">
        <div className="imgonbottom mb-5 mt-5"></div>
        <div className="imgontop imgsquare mt-5">
          <Image src={src} alt={name} height={400} width={400} />
        </div>
        <div className="mt-12 pl-6">
          <p className="pb-2 text-2xl text-slate-900">{t('Experts')}</p>
          <p className="text-xl text-slate-700">{name}</p>
          <p className="text-slate-600">{title1}</p>
          <p className="text-slate-600">{title2}</p>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['specialization'])),
  },
})
