import React from 'react'
import Layout from '@/components/layout/Layout'
import LayoutPage from '@/components/layout/LayoutPage'
import LongDivider from '@/components/ui/LongDivider'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
export default function ourPhilosophy() {
  const { t } = useTranslation('about-us')

  return (
    <div className="">
      <section className="mt-3">
        <h1>{t('common:Philosophy')} </h1>

        {/* Our Philosophy */}
        <div className="pb-3">
          <p className="py-2 text-lg ">
            <Trans
              ns="about-us"
              i18nKey="EUR1" // optional -> fallbacks to defaults if not provided
              defaults="The Three Main Pillars of our Recruitment philosophy are <b>Experience, Understanding & Relationship</b>" // optional defaultValue
              components={{ b: <b /> }}
            />
          </p>
          <p className="py-2 text-base">{t('EUR2')}</p>
          <p className="py-2 text-base">{t('EUR3')}</p>
          <p className="py-2 text-base">{t('EUR4')}</p>
        </div>

        {/* Our Methodology */}
        <h1>{t('Methodology')} </h1>
        <div>
          
          <h3>{t('Step1')} </h3>
          <h6>{t('S1Content1')}</h6>
          <h6>{t('S1Content2')}</h6>

          <LongDivider />
          <h3> {t('Step2')} </h3>
          <h6>{t('S2Content1')} </h6>
          <ul className="PageList list-disc pt-0">
            <li>{t('S2List1')} </li>
            <li>{t('S2List2')} </li>
            <li>{t('S2List3')} </li>
            <li>{t('S2List4')} </li>
          </ul>

          <LongDivider />
          <h3> {t('Step3')} </h3>
          <h6>{t('S3Content1')} </h6>
          <ul className="PageList list-disc pt-0">
            <li>{t('S3List1')} </li>
            <li>{t('S3List2')} </li>
          </ul>

          <LongDivider />
          <h3> {t('Step4')} </h3>
          <h6>{t('S4Content1')} </h6>
          <ul className="PageList list-disc pt-0">
            <li>{t('S4List1')} </li>
            <li>{t('S4List2')} </li>
            <li>{t('S4List3')} </li>
            <li>{t('S4List4')} </li>
          </ul>

          <LongDivider />
          <h3> {t('Step5')} </h3>
          <h6>{t('S5Content1')} </h6>
          <ul className="PageList list-disc pt-0">
            <li>{t('S5List1')} </li>
            <li>{t('S5List2')} </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

ourPhilosophy.getLayout = function getLayout(page) {
  const { t } = useTranslation('common')

  return (
    <Layout
      headContent={
        <Head>
          <title>OCG - Our Philosophy</title>
        </Head>
      }
    >
      <LayoutPage title={t('About')} subtitle={t('Philosophy')}>
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
