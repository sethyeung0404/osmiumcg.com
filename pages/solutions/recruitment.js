import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import BlueDivider from '@/UI/BlueDivider'
import SectorBlock from '@/UI/SectorBlock'
import SubPageHeading1 from '@/Text/SubPageHeading1'
import SubPageHeading2 from '@/Text/SubPageHeading2'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

export default function recruitment() {
  const { t } = useTranslation('solutions')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title={t('common:Recruitment')} />
        <div class="col-md-12 mb-4">{/* Content */}</div>
      </section>
    </div>
  )
}

recruitment.getLayout = function getLayout(page) {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <LayoutPage
        headContent={
          <Head>
            <title>OCG - Recruitment</title>
            <meta name="description" content="🥱🥱🥱" />
          </Head>
        }
        title={t('About')}
        subtitle={t('Recruitment')}
      >
        {page}
      </LayoutPage>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'solutions'])),
  },
})
