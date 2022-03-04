import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import BlueDivider from '@/UI/BlueDivider'
import SubPageHeading1 from '@/UI/SubPageHeading1'
import SubPageHeading2 from '@/UI/SubPageHeading2'
import SubPageParagraph1 from '@/UI/SubPageParagraph1'
import SectorBlock from '@/UI/SectorBlock'
import useTranslation from 'next-translate/useTranslation'

export default function overview() {
  let { t } = useTranslation()

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title={t('common:Overview')} />
        <div>
          <SubPageHeading2 Title={t('common:OCGL')} />
          <SubPageParagraph1 Text={t('overview:CompanyDescription1')} />
          <SubPageParagraph1 Text={t('overview:CompanyDescription2')} />
          <SubPageHeading2 Title={t('overview:OurGoal')} />
          <SubPageParagraph1 Text={t('overview:OurGoal1')} />
          <SubPageParagraph1 Text={t('overview:OurGoal2')} />
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
