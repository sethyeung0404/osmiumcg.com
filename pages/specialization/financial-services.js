import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import ConsultantCarousel from '@/UI/ConsultantCarousel'
import SubPageHeading1 from '@/Text/SubPageHeading1'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import SubPageParagraph2 from '@/components/Text/SubPageParagraph2'
export default function bfs() {
  const { t } = useTranslation('specialization')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title={t('common:FDFS')} />

        <div className="mx-12 grid grid-cols-3">
          <div className="col-span-1 mb-4">
            <ConsultantCarousel />
          </div>

          <div className="col-span-2 mb-4">
            <SubPageParagraph2 Text={t('FDFSContent1')} />
            <SubPageParagraph2 Text={t('FDFSContent2')} />
          </div>
        </div>
      </section>
    </div>
  )
}

bfs.getLayout = function getLayout(page) {
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
      <LayoutPage title={t('Specialization')} subtitle={t('FDFS')}>
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
