import React from 'react'
import Layout from 'components/layouts/Layout'
import LayoutPage from 'components/layouts/LayoutPage'
import ConsultantOnly from 'components/card/consultant/ConsultantOnly'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { sectorFocus } from 'data/SectorFocus'
import Chip from 'components/chips/Chip'

export default function insurance() {
  const { t } = useTranslation('specialization')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <h1>{t('common:Insurance')}</h1>

        <div className="grid grid-cols-3 pt-4 md:mx-6 lg:mx-12">
          <div className="col-span-3 mb-12 sm:col-span-1 md:mb-4">
            <ConsultantOnly Theme="insurance" />
          </div>

          <div className="col-span-3 mb-4 sm:col-span-2">
            <p className="PageText">{t('insurance.content.1')} </p>
            <p className="PageText">
              {t('insurance.content.2')}
              <a
                target="_blank"
                className=" text-lg text-ocg-lightblue underline"
                href="https://www.linkedin.com/in/andy-lam-7115886/details/experience/"
                rel="noreferrer"
              >
                Andy LAM
              </a>
              {t('insurance.content.2.1')}
            </p>
            <p className="PageText">{t('insurance.content.4')} </p>
            <div className="mt-1 flex flex-wrap">
              {sectorFocus.insurance.map((hashtag) => (
                <Chip key={hashtag.id} text={hashtag.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

insurance.getLayout = function getLayout(page) {
  const { t } = useTranslation('common')

  return (
    <Layout
      headContent={
        <Head>
          <title>OCG - Insurance</title>
          <meta name="description" content="OCG - Insurance" />
        </Head>
      }
    >
      <LayoutPage title={t('Specialization')} subtitle={t('Insurance')}>
        {page}
      </LayoutPage>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'specialization'])),
  },
})
