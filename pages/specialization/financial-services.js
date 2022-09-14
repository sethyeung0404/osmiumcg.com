import React from 'react'
import Layout from '@/components/layout/Layout'
import LayoutPage from '@/components/layout/LayoutPage'
import ConsultantCarousel from '@/components/card/consultant/ConsultantCarousel'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import MeetOurTeamButton from '@/components/buttons/MeetOurTeamButton'
export default function bfs() {
  const { t } = useTranslation('specialization')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <h1>{t('common:FDFS')}</h1>

        <div className="grid grid-cols-3 pt-4 md:mx-6 lg:mx-12">
          <div className="col-span-3 mb-12 sm:col-span-1 md:mb-4">
            <ConsultantCarousel Division="FDFS" />
          </div>

          <div className="col-span-3 mb-4 sm:col-span-2">
            <p className="PageText">{t('FDFSContent1')} </p>
            <p className="PageText">{t('FDFSContent2')} </p>
            <div className="text-right">
              <MeetOurTeamButton />
            </div>
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
          <title>OCG - FDFS Division</title>
          <meta
            name="description"
            content="Osmium Consulting Group FDFS Division"
          />
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
