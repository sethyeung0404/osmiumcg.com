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

        <div className="border-rounded my-6 grid grid-cols-12 bg-slate-50">
          <div className="col-span-12 h-80 w-full text-center md:col-span-7 md:h-full">
            <MapWrapper Location="HK" />
          </div>
          <div className="col-span-12 p-8 md:col-span-5">
            <MapDescription
              Country={t('HK')}
              District={t('HKAddress2')}
              Phone
              EmailAddress="info@osmiumcg.com"
              FullAddress={t('HKAddress')}
            />
          </div>
        </div>

        <div className="border-rounded my-6 grid grid-cols-12 bg-slate-50">
          <div className="col-span-12 h-80 w-full text-center md:col-span-7 md:h-full">
            <MapWrapper Location="SG" />
          </div>
          <div className="col-span-12 p-8 md:col-span-5">
            <MapDescription
              Country={t('SG')}
              District={t('SGAddress2')}
              EmailAddress="info+sg@osmiumcg.com"
              FullAddress={t('SGAddress')}
            />
          </div>
        </div>

        <div className="border-rounded my-6 grid grid-cols-12 bg-slate-50">
          <div className="col-span-12 h-80 w-full text-center md:col-span-7 md:h-full">
            <MapWrapper Location="JP" />
          </div>
          <div className="col-span-12 p-8 md:col-span-5">
            <MapDescription
              Country={t('JP')}
              District={t('JPAddress2')}
              EmailAddress="info+jp@osmiumcg.com"
              FullAddress={t('JPAddress')}
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
