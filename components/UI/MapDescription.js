import React from 'react'
import { useTranslation } from 'next-i18next'
import ContactUsButton from '@/Buttons/ContactUsButton'

export default function MapDescription({
  Country,
  District,
  EmailAddress,
  FullAddress,
}) {
  const { t } = useTranslation('common')

  return (
    <div className="">
      <p className="text-2xl">{Country}</p>
      <hr className="my-4" />
      <div className="pl-3">
        <p className="mb-2 text-xl">{District}</p>

        <div className="text-base  leading-7">
          <div className="mb-3">
            <p className=" text-slate-500">{t('Office')}</p>
            <p> +852 3898 5500 </p>
          </div>

          <div className="mb-3">
            <p className=" text-slate-500">{t('Email')}</p>
            <p className="  "> {EmailAddress} </p>
          </div>

          <div className="mb-3">
            <p className=" text-slate-500">{t('Address')}</p>
            <p> {FullAddress} </p>
          </div>

          <ContactUsButton />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
