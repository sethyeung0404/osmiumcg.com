import React from 'react'
import Layout from '@/Layout/Layout'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import SubPageHeading2 from '@/components/Text/SubPageHeading2'
import SubPageParagraph2 from '@/components/Text/SubPageParagraph2'

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
        <SubPageHeading2 Title={t('DT1')} />
        <div className="space-y-4">
          <SubPageParagraph2 Text={t('d1c1')} />
          <SubPageParagraph2 Text={t('d1c2')} />
          <SubPageParagraph2 Text={t('d1c3')} />
        </div>
        <SubPageHeading2 Title={t('DT2')} />
        <SubPageParagraph2 Text={t('d2c1')} />
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
          <meta name="description" content="Osmium Consulting Group Disclaimer" />
        </Head>
      }
    >
      {page}
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common','disclaimer'])),
  },
})
