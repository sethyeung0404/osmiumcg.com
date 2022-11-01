import React from 'react'
import Layout from '@/components/layout/Layout'
import LayoutPage from '@/components/layout/LayoutPage'
import Divider from '@/components/ui/Divider'
import SectorBlock from '@/components/card/division/SectorSection'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import NotionButton from 'src/our-team/NotionButton'

export default function ourTeam() {
  const { t } = useTranslation('about-us')

  return (
    <div>
      <section className="mt-3">
        <h1>{t('common:About')} </h1>
        <div>
          <h3>{t('common:OCGL')}</h3>
          <h6>{t('CompanyDescription1')} </h6>
          <h6>{t('CompanyDescription2')} </h6>

          <h3>{t('OurGoal')}</h3>
          <h6>{t('OurGoal1')} </h6>
          <h6>{t('OurGoal2')} </h6>
          <div className="text-lg">
            Check out our
            <NotionButton /> to know more about us!
          </div>
        </div>

        {/* <div className="row pt-2">
          <h5 className="mt-8 text-2xl text-ocg-blue">{t('common:Sector')}</h5>
          <div className="ml-0">
            <Divider colour="blue" />
          </div>
          <SectorBlock />
        </div> */}
      </section>
    </div>
  )
}

ourTeam.getLayout = function getLayout(page) {
  const { t } = useTranslation('common')

  return (
    <Layout
      headContent={
        <Head>
          <title>OCG - Our Team</title>
        </Head>
      }
    >
      <LayoutPage title={t('About')} subtitle={t('OurTeam')}>
        {page}
      </LayoutPage>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about-us'])),
  },
})
