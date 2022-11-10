import React from 'react'
import Layout from 'components/layouts/Layout'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

export default function Disclaimer() {
  const { t } = useTranslation('disclaimer')

  return (
    <div className="mx-6 max-w-5xl pt-4 xl:mx-auto">
      <div>
        <div className="my-16 text-center text-5xl font-bold">
          OCG Website Disclaimer
        </div>
      </div>
      <div className="border-t">
        <h1>{t('DT1')} </h1>
        <div className="space-y-4">
          <p className="PageText">{t('d1c1')} </p>
          <p className="PageText">{t('d1c2')} </p>
          <p className="PageText">{t('d1c3')} </p>
        </div>
        <h1>{t('DT2')} </h1>
        <p className="PageText">{t('d2c1')} </p>
      </div>
      <div className="border-t"></div>
    </div>
  )
}

Disclaimer.getLayout = function getLayout(page) {
  return (
    <Layout
      headContent={
        <Head>
          <title>OCG - Disclaimer</title>
          <meta
            name="description"
            content="Osmium Consulting Group Disclaimer"
          />
        </Head>
      }
    >
      {page}
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'disclaimer'])),
  },
})
