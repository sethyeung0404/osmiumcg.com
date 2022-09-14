import React from 'react'
import Layout from '@/components/layout/Layout'
import LayoutPage from '@/components/layout/LayoutPage'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import SubPageImage1 from '@/components/ui/SubPageImage1'

export default function performanceManagement() {
  const { t } = useTranslation('solutions')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <h1>{t('common:Recruitment')} </h1>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row">
          <SubPageImage1 href="/img/pages/solutions/p1.webp" name="p1" />
          <div className=" basis-full  md:basis-1/2">
            <h2>{t('PTitle1')}</h2>
            <p className="PageText">{t('P1Content1')} </p>
            <p className="PageText">{t('P1Content2')} </p>
            <ul className="PageList list-disc pt-0">
              <li>{t('P1List1')} </li>
              <li>{t('P1List2')} </li>
            </ul>
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row-reverse">
          <SubPageImage1 href="/img/pages/solutions/p2.webp" name="p2" />
          <div className="basis-full sm:basis-1/2">
            <h2>{t('PTitle2')}</h2>
            <p className="PageText">{t('P2Content1')} </p>
            <ul className="PageList list-disc pt-0">
              <li>{t('P2List1')} </li>
              <li>{t('P2List2')} </li>
              <li>{t('P2List3')} </li>
              <li>{t('P2List4')} </li>
            </ul>
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row">
          <SubPageImage1 href="/img/pages/solutions/p3.webp" name="p3" />
          <div className="basis-full md:basis-1/2">
            <h2>{t('PTitle3')}</h2>
            <p className="PageText">{t('P3Content1')} </p>
            <p className="PageText">{t('P3Content2')} </p>
            <ul className="PageList list-disc pt-0">
              <li>{t('P3List1')} </li>
              <li>{t('P3List2')} </li>
              <li>{t('P3List3')} </li>
              <li>{t('P3List4')} </li>
              <li>{t('P3List5')} </li>
            </ul>
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row-reverse">
          <SubPageImage1 href="/img/pages/solutions/p4.webp" name="p4" />
          <div className="basis-full sm:basis-1/2">
            <h2>{t('PTitle4')}</h2>
            <p className="PageText">{t('P4Content1')} </p>
            <ul className="PageList list-disc pt-0">
              <li>{t('P4List1')} </li>
              <li>{t('P4List2')} </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

performanceManagement.getLayout = function getLayout(page) {
  const { t } = useTranslation('common')

  return (
    <Layout
      headContent={
        <Head>
          <title>OCG - Performance Management</title>
        </Head>
      }
    >
      <LayoutPage title={t('About')} subtitle={t('Performance')}>
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
