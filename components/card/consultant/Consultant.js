import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export default function Consultant({ name, title1, title2, src }) {
  const { t } = useTranslation('specialization')

  return (
    <>
      <div className="w-full">
        <div>
          <div
            className="relative mt-2 h-3/4 w-3/4 animate-fadeIn
        after:absolute after:left-6 after:top-6 after:-z-10 after:h-full after:w-full
        after:border-[11px] after:border-solid after:border-[#034579]
        "
          >
            <Image
              className="animate-slideIn"
              src={src}
              alt={name}
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        </div>
        <div className="mt-12 animate-fadeIn pl-6">
          <p className="animate-slideIn pb-2 text-2xl text-slate-900">
            {t('Experts')}
          </p>
          <p className="animate-slideIn2 text-xl text-slate-700">{name}</p>
          <div className="animate-slideIn3 text-slate-600">
            <p>{title1}</p>
            <p>{title2}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['specialization'])),
  },
})
