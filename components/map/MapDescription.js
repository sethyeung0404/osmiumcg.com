import React from 'react'
import { useTranslation } from 'next-i18next'
import ContactUsButton from 'src/contact-us/ContactUsButton'

export default function MapDescription({
  Country,
  District,
  Phone,
  EmailAddress,
  FullAddress,
}) {
  const { t } = useTranslation('common')

  return (
    <div className="">
      <p className="pl-2 text-3xl">{Country}</p>
      <p className="mb-2 pl-2 text-base">{District}</p>
      <hr className="my-4" />
      <div className="pl-3">
        <div className="text-base leading-7">
          {Phone && (
            <div className="mb-3">
              <p className="font-extrabold text-blue-600">{t('Office')}</p>
              <p> +852 3898 5500 </p>
            </div>
          )}

          <div className="mb-3">
            <p className="font-extrabold text-blue-600">{t('Email')}</p>
            <p className="cursor-pointer">
              <a href={'mailto:' + EmailAddress}>{EmailAddress} </a>
            </p>
          </div>

          <div className="mb-3">
            <p className="font-extrabold text-blue-600">{t('Address')}</p>
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
