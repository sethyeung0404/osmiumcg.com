import React from 'react'
import Layout from 'components/layouts/Layout'
import LayoutPage from 'components/layouts/LayoutPage'
import SubPageImage1 from 'components/images/SubPageImage1'
import ConsultantOnly from 'components/card/consultant/ConsultantOnly'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { sectorFocus } from 'data/SectorFocus'
import Chip from 'components/chips/Chip'

export default function recruitment() {
  const { t } = useTranslation('specialization', 'solutions')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <h1>{t('common:Recruitment')}</h1>

        <div className="grid grid-cols-3 pt-4 md:mx-6 lg:mx-12">
          <div className="col-span-3 mb-12 sm:col-span-1 md:mb-4">
            <ConsultantOnly Theme="recruitment" />
          </div>

          <div className="col-span-3 mb-4 sm:col-span-2">
            <p className="PageText">{t('recruitment.content.1')}</p>
            <p className="PageText">{t('recruitment.content.2')}</p>
            <div className="mt-1 flex flex-wrap">
              {sectorFocus.recruitment.map((hashtag) => (
                <Chip key={hashtag.id} text={hashtag.id} />
              ))}
            </div>
          </div>
        </div>

        <div className="align-center my-6 mt-3 flex flex-col items-center sm:flex-row">
          <SubPageImage1 href="/img/pages/solutions/r1.webp" name="r1" />
          <div className=" basis-full  md:basis-1/2">
            <h2>{t('RTitle1', { ns: 'solutions' })}</h2>
            <p className="PageText">{t('R1Content1', { ns: 'solutions' })}</p>
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
          <meta name="description" content="OCG - Recruitment" />
        </Head>
      }
    >
      <LayoutPage title={t('HR')} subtitle={t('Recruitment')}>
        {page}
      </LayoutPage>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'specialization',
      'solutions',
    ])),
  },
})
