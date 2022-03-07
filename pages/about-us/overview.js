import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import BlueDivider from '@/UI/BlueDivider'
import SubPageHeading1 from '@/UI/SubPageHeading1'
import SubPageHeading2 from '@/UI/SubPageHeading2'
import SubPageParagraph1 from '@/UI/SubPageParagraph1'
import SectorBlock from '@/UI/SectorBlock'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function overview() {
  const { t } = useTranslation('about-us')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title={t('common:About')} />
        <div>
          <SubPageHeading2 Title={t('common:OCGL')} />
          <SubPageParagraph1 Text={t('CompanyDescription1')} />
          <SubPageParagraph1 Text={t('CompanyDescription2')} />
          <SubPageHeading2 Title={t('OurGoal')} />
          <SubPageParagraph1 Text={t('OurGoal1')} />
          <SubPageParagraph1 Text={t('OurGoal2')} />
        </div>

        <div className="row pt-2">
          <h5 className="mt-8 text-2xl text-ocg-blue">{t('common:Sector')}</h5>
          <div className="ml-0">
            <BlueDivider />
          </div>
        </div>
        <SectorBlock />
      </section>
    </div>
  )
}

overview.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LayoutPage>{page}</LayoutPage>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about-us'])),
  },
})
