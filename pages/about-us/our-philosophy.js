import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import SubPageHeading1 from '@/UI/SubPageHeading1'
import SubPageHeading2 from '@/UI/SubPageHeading2'
import SubPageParagraph1 from '@/UI/SubPageParagraph1'
import SubPageList1 from '@/UI/SubPageList1'
import Divider from '@/UI/Divider'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function ourPhilosophy() {
  const { t } = useTranslation('about-us')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title=" Our Philosophy" />
        <div>Animation EUR - tbc</div>
        <SubPageHeading1 Title=" Our Methodlogy" />
        <div>
          <SubPageHeading2 Title={t('Step1')} />
          <SubPageParagraph1 Text={t('S1Content1')} />
          <SubPageParagraph1 Text={t('S1Content2')} />

          <Divider />
          <SubPageHeading2 Title={t('Step2')} />
          <SubPageParagraph1 Text={t('S2Content1')} />
          <ul className="list-disc pt-0">
            <SubPageList1 Text={t('S2List1')} />
            <SubPageList1 Text={t('S2List2')} />
            <SubPageList1 Text={t('S2List3')} />
            <SubPageList1 Text={t('S2List4')} />
          </ul>

          <Divider />
          <SubPageHeading2 Title={t('Step3')} />
          <SubPageParagraph1 Text={t('S3Content1')} />
          <ul className="list-disc pt-0">
            <SubPageList1 Text={t('S3List1')} />
            <SubPageList1 Text={t('S3List2')} />
          </ul>

          <Divider />
          <SubPageHeading2 Title={t('Step4')} />
          <SubPageParagraph1 Text={t('S4Content1')} />
          <ul className="list-disc pt-0">
            <SubPageList1 Text={t('S4List1')} />
            <SubPageList1 Text={t('S4List2')} />
            <SubPageList1 Text={t('S4List3')} />
            <SubPageList1 Text={t('S4List4')} />
          </ul>

          <Divider />
          <SubPageHeading2 Title={t('Step5')} />
          <SubPageParagraph1 Text={t('S5Content1')} />
          <ul className="list-disc pt-0">
            <SubPageList1 Text={t('S5List1')} />
            <SubPageList1 Text={t('S5List2')} />
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about-us'])),
  },
})
