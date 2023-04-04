import React from 'react'
import Layout from 'components/layouts/Layout'
import LayoutPage from 'components/layouts/LayoutPage'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import SubPageImage1 from 'components/images/SubPageImage1'

export default function OHC() {
  const { t } = useTranslation('solutions')

  return <div>OHC</div>
}

OHC.getLayout = function getLayout(page) {
    const { t } = useTranslation('common')
  
    return (
      <Layout
        headContent={
          <Head>
            <title>OHC</title>
            <meta name="description" content="" />
          </Head>
        }
      >
        <LayoutPage title={t('OHC')} subtitle={t('OHC')}>
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