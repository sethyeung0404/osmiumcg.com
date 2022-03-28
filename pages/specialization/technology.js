import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import ConsultantCarousel from '@/UI/ConsultantCarousel'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SubPageHeading1 from '@/Text/SubPageHeading1'
import Head from 'next/head'
import SubPageParagraph2 from '@/components/Text/SubPageParagraph2'
export default function tmt() {
  const { t } = useTranslation('specialization')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title={t('common:TBCG')} />

        <div className="mx-12 grid grid-cols-3">
          <div className="col-span-1 mb-4">
            <ConsultantCarousel />
          </div>

          <div className="col-span-2 mb-4">
            <SubPageParagraph2 Text={t('TBCGContent1')} />
            <SubPageParagraph2 Text={t('TBCGContent2')} />
          </div>
        </div>
      </section>
    </div>
  )
}

tmt.getLayout = function getLayout(page) {
  const { t } = useTranslation('common')

  return (
    <Layout
      headContent={
        <Head>
          <title>OCG - Recruitment</title>
          <meta name="description" content="🥱🥱🥱" />
        </Head>
      }
    >
      <LayoutPage title={t('Specialization')} subtitle={t('TBCG')}>
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
