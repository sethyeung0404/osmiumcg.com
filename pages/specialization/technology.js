import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import ConsultantCarousel from '@/UI/ConsultantCarousel'
import SubPageHeading1 from '@/Text/SubPageHeading1'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import SubPageParagraph2 from '@/components/Text/SubPageParagraph2'
import MeetOurTeamButton from '@/components/Buttons/MeetOurTeamButton'
export default function tmt() {
  const { t } = useTranslation('specialization')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title={t('common:TBCG')} />

        <div className="grid grid-cols-3 md:mx-6 lg:mx-12">
          <div className="col-span-3 mb-12 sm:col-span-1 md:mb-4">
            <ConsultantCarousel Division="TBCG" />
          </div>

          <div className="col-span-3 mb-4 sm:col-span-2">
            <SubPageParagraph2 Text={t('TBCGContent1')} />
            <SubPageParagraph2 Text={t('TBCGContent2')} />
            <div className="text-right">
              <MeetOurTeamButton />
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
          <title>OCG - Recruitment</title>
          <meta name="description" content="🥱🥱🥱" />
        </Head>
      }
    >
      <LayoutPage title={t('Specialization')} subtitle={t('TBCG')}>
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
