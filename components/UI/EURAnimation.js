import React from 'react'
import { Trans, useTranslation } from 'next-i18next'

export default function EURAnimation() {
  const { t } = useTranslation('about-us')

  return (
    <div className="pb-3 text-base">
      <p className="py-2 text-lg ">
        <Trans
          ns="about-us"
          i18nKey="EUR1" // optional -> fallbacks to defaults if not provided
          defaults="The Three Main Pillars of our Recruitment philosophy are <b>Experience, Understanding & Relationship</b>" // optional defaultValue
          components={{ b: <b /> }}
        />
      </p>
      <p className="py-2">{t('EUR2')}</p>
      <p className="py-2">{t('EUR3')}</p>
      <p className="py-2">{t('EUR4')}</p>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about-us'])),
  },
})
