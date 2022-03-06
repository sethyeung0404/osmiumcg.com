import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import SubPageHeading1 from '@/UI/SubPageHeading1'
import SubPageHeading2 from '@/UI/SubPageHeading2'
import SubPageParagraph1 from '@/UI/SubPageParagraph1'
import useTranslation from 'next-translate/useTranslation'

export default function ourPhilosophy() {
  let { t } = useTranslation()

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title=" Our Philosophy" />
        <div>Animation EUR - tbc</div>
        <SubPageHeading1 Title=" Our Methodlogy" />
        <div>
          <SubPageHeading2 Title={t('our-philosophy:Step1')} />
          <SubPageParagraph1 Text={t('our-philosophy:S1Content1')} />
          <SubPageParagraph1 Text={t('our-philosophy:S1Content2')} />

          <SubPageHeading2 Title={t('our-philosophy:Step2')} />
          <SubPageParagraph1 Text={t('our-philosophy:S2Content1')} />
          <SubPageParagraph1 Text={t('our-philosophy:S2List1')} />

          <SubPageHeading2 Title={t('our-philosophy:Step3')} />
          <SubPageHeading2 Title={t('our-philosophy:Step4')} />
          <SubPageHeading2 Title={t('our-philosophy:Step5')} />
        </div>
      </section>
    </div>
  )
}

ourPhilosophy.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LayoutPage>{page}</LayoutPage>
    </Layout>
  )
}
