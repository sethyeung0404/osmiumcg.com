import React from 'react'
import { useTranslation } from 'next-i18next'

export default function MapDescription({
  Country,
  Time,
  District,
  Phone,
  EmailAddress,
  FullAddress,
}) {
  const { t } = useTranslation('common')

  return (
    <div className="px-3 pt-6">
      <p className="pl-2 text-3xl">{Country}</p>
      <p className="mb-2 pl-2 text-base">{District}</p>
      <hr className="my-4" />
      <div className="pl-3">
        <div className="text-base leading-7">
          {/* Office Hours */}
          <div className="mb-3">
            <p className="font-extrabold text-blue-600">
              {t('Time')}
              {Time}
            </p>
            <p>{t('OfficeHours.1')}</p>
            <p>{t('OfficeHours.2')}</p>
          </div>

          {/* Phone */}
          {!!Phone && (
            <div className="mb-3">
              <p className="font-extrabold text-blue-600">{t('Office')}</p>
              <p> +852 3898 5500 </p>
            </div>
          )}
          {/* Email */}
          <div className="mb-3">
            <p className="font-extrabold text-blue-600">{t('Email')}</p>
            <p className="cursor-pointer underline hover:text-blue-500">
              <a href={'mailto:' + EmailAddress}>{EmailAddress} </a>
            </p>
          </div>
          {/* Address */}
          <div className="mb-3">
            <p className="font-extrabold text-blue-600">{t('Address')}</p>
            <p> {FullAddress} </p>
          </div>
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
