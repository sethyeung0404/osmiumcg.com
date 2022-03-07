import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import SubPageHeading1 from '@/UI/SubPageHeading1'
import SubPageHeading2 from '@/UI/SubPageHeading2'
import SubPageParagraph1 from '@/UI/SubPageParagraph1'
import SubPageList1 from '@/UI/SubPageList1'
import { useTranslation } from 'next-i18next'
import Divider from '@/UI/Divider'

export default function ourPhilosophy() {
  let { t } = useTranslation()

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title=" Our Philosophy" />
        <div>Animation EUR - tbc</div>
        <SubPageHeading1 Title=" Our Methodlogy" />
        <div>
          <SubPageHeading2 Title={t('about-us:Step1')} />
          <SubPageParagraph1 Text={t('about-us:S1Content1')} />
          <SubPageParagraph1 Text={t('about-us:S1Content2')} />

          <Divider />
          <SubPageHeading2 Title={t('about-us:Step2')} />
          <SubPageParagraph1 Text={t('about-us:S2Content1')} />
          <ul className="list-disc pt-0">
            <SubPageList1 Text={t('about-us:S2List1')} />
            <SubPageList1 Text={t('about-us:S2List2')} />
            <SubPageList1 Text={t('about-us:S2List3')} />
            <SubPageList1 Text={t('about-us:S2List4')} />
          </ul>

          <Divider />
          <SubPageHeading2 Title={t('about-us:Step3')} />
          <SubPageParagraph1 Text={t('about-us:S3Content1')} />
          <ul className="list-disc pt-0">
            <SubPageList1 Text={t('about-us:S3List1')} />
            <SubPageList1 Text={t('about-us:S3List2')} />
          </ul>

          <Divider />
          <SubPageHeading2 Title={t('about-us:Step4')} />
          <SubPageParagraph1 Text={t('about-us:S4Content1')} />
          <ul className="list-disc pt-0">
            <SubPageList1 Text={t('about-us:S4List1')} />
            <SubPageList1 Text={t('about-us:S4List2')} />
            <SubPageList1 Text={t('about-us:S4List3')} />
            <SubPageList1 Text={t('about-us:S4List4')} />
          </ul>

          <Divider />
          <SubPageHeading2 Title={t('about-us:Step5')} />
          <SubPageParagraph1 Text={t('about-us:S5Content1')} />
          <ul className="list-disc pt-0">
            <SubPageList1 Text={t('about-us:S5List1')} />
            <SubPageList1 Text={t('about-us:S5List2')} />
          </ul>
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
