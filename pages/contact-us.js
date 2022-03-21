import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import SubPageHeading1 from '@/Text/SubPageHeading1'
import MapWrapper from '@/UI/MapWrapper'
import MapDescription from '@/UI/MapDescription'

export default function ContactUs() {
  const { t } = useTranslation('common')

  return (
    <div className="">
      <section className="mt-3">
        <SubPageHeading1 Title={t('Contact')} />

        <div className="grid grid-cols-12 my-6">
          <div className="col-span-7 text-center">
            <MapWrapper />
          </div>
          <div className="col-span-5">
            <MapDescription
              Country={t('HK')}
              District={t('HKAddress2')}
              EmailAddress="info@osmiumcg.com"
              FullAddress={t('HKAddress')}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 my-6">
          <div className="col-span-7 text-center">
            <MapWrapper />
          </div>
          <div className="col-span-5">
            <MapDescription
              Country={t('SG')}
              District={t('SGAddress2')}
              EmailAddress="info+sg@osmiumcg.com"
              FullAddress={t('SGAddress')}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

ContactUs.getLayout = function getLayout(page) {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <LayoutPage
        headContent={
          <Head>
            <title>OCG - Contact Us</title>
            <meta name="description" content="🥱🥱🥱" />
          </Head>
        }
        title={t('Contact')}
        subtitle={t('Contact')}
      >
        {page}
      </LayoutPage>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
