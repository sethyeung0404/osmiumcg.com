import React from 'react'
import Layout from '@/components/layout/Layout'
import LayoutPage from '@/components/layout/LayoutPage'
import SubPageImage1 from '@/components/images/SubPageImage1'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

export default function recruitment() {
  const { t } = useTranslation('solutions')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <h1> {t('common:Recruitment')} </h1>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row">
          <SubPageImage1 href="/img/pages/solutions/r1.webp" name="r1" />
          <div className=" basis-full  md:basis-1/2">
            <h2>{t('RTitle1')}</h2>
            <p className="PageText">{t('R1Content1')}</p>
            <p className="PageText">Browse all our specialization :</p>
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row-reverse">
          <SubPageImage1 href="/img/pages/solutions/r2.webp" name="r2" />
          <div className="basis-full sm:basis-1/2">
            <h2>{t('RTitle2')}</h2>
            <p className="PageText">{t('R2Content1')}</p>
            <p className="PageText">{t('R2Content2')}</p>
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row">
          <SubPageImage1 href="/img/pages/solutions/r3.webp" name="r3" />
          <div className="basis-full md:basis-1/2">
            <h2>{t('RTitle3')}</h2>
            <p className="PageText">{t('R3Content1')}</p>
            <p className="PageText">{t('R3Content2')}</p>
            <p className="PageText">{t('R3Content3')}</p>
            <ul className="PageList list-disc pt-0">
              <li>{t('R3List1')} </li>
              <li>{t('R3List2')} </li>
              <li>{t('R3List3')} </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

recruitment.getLayout = function getLayout(page) {
  const { t } = useTranslation('common')

  return (
    <Layout
      headContent={
        <Head>
          <title>OCG - Recruitment</title>
        </Head>
      }
    >
      <LayoutPage title={t('Solutions')} subtitle={t('Recruitment')}>
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
