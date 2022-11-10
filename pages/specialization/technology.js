import React from 'react'
import Layout from '@/layouts/Layout'
import LayoutPage from '@/layouts/LayoutPage'
import ConsultantCarousel from '@/components/card/consultant/ConsultantCarousel'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Chip from '@/components/chips/Chip'
import { sectorFocus } from 'data/SectorFocus'

export default function tmt() {
  const { t } = useTranslation('specialization')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <h1>{t('common:IT')}</h1>

        <div className="grid grid-cols-3 pt-4 md:mx-6 lg:mx-12">
          <div className="col-span-3 mb-12 sm:col-span-1 md:mb-4">
            <ConsultantCarousel Division="TBCG" />
          </div>

          <div className="col-span-3 mb-4 sm:col-span-2">
            <p className="PageText">{t('it.content.1')} </p>
            <p className="PageText">{t('it.content.2')} </p>
            <div className="mt-1 flex flex-wrap">
              {sectorFocus.its.map((it) => (
                <Chip key={it.id} text={it.id} />
              ))}
            </div>
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
          <title>OCG - IT Recruitment Specialist</title>
          <meta
            name="description"
            content="OCG - IT Recruitment Specialist"
          />
        </Head>
      }
    >
      <LayoutPage title={t('Specialization')} subtitle={t('IT')}>
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
