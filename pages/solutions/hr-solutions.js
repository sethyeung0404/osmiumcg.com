import React from 'react'
import Layout from 'components/layouts/Layout'
import LayoutPage from 'components/layouts/LayoutPage'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import SubPageImage1 from 'components/images/SubPageImage1'

export default function hrSolutions() {
  const { t } = useTranslation('solutions')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <h1>{t('common:HR')} </h1>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row">
          <SubPageImage1 href="/img/pages/solutions/hr1.webp" name="hr1" />
          <div className="basis-full md:basis-1/2">
            <h2>{t('HRTitle1')}</h2>
            <p className="PageText">{t('HR1Content1')} </p>
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row-reverse">
          <SubPageImage1 href="/img/pages/solutions/hr2.webp" name="hr2" />
          <div className="basis-full sm:basis-1/2">
            <h2>{t('HRTitle2')}</h2>
            <p className="PageText">{t('HR2Content1')} </p>
            <p className="PageText">{t('HR2Content2')} </p>
            <ul className="PageList list-disc pt-0">
              <li>{t('HR2List1')} </li>
              <li>{t('HR2List2')} </li>
              <li>{t('HR2List3')} </li>
              <li>{t('HR2List4')} </li>
            </ul>
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row">
          <SubPageImage1 href="/img/pages/solutions/hr3.webp" name="hr3" />
          <div className="basis-full md:basis-1/2">
            <h2>{t('HRTitle3')}</h2>
            <p className="PageText">{t('HR3Content1')} </p>
            <p className="PageText">{t('HR3Content2')} </p>
            <p className="PageText">{t('HR3Content3')} </p>
            <p className="PageText">{t('HR3Content4')} </p>
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row-reverse">
          <SubPageImage1 href="/img/pages/solutions/hr4.webp" name="hr4" />
          <div className="basis-full sm:basis-1/2">
            <h2>{t('HRTitle4')}</h2>
            <p className="PageText">{t('HR4Content1')} </p>
          </div>
        </div>
      </section>
    </div>
  )
}

hrSolutions.getLayout = function getLayout(page) {
  const { t } = useTranslation('common')

  return (
    <Layout
      headContent={
        <Head>
          <title>OCG - HR Solutions</title>
          <meta name="description" content="" />
        </Head>
      }
    >
      <LayoutPage title={t('About')} subtitle={t('HR')}>
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
