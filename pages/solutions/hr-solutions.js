import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import SubPageHeading1 from '@/Text/SubPageHeading1'
import SubPageHeading3 from '@/Text/SubPageHeading3'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import SubPageImage1 from '@/components/UI/SubPageImage1'
import SubPageParagraph2 from '@/components/Text/SubPageParagraph2'
import SubPageList1 from '@/components/Text/SubPageList1'

export default function hrSolutions() {
  const { t } = useTranslation('solutions')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title={t('common:HR')} />

        <div className="align-center my-6 flex flex-col items-center sm:flex-row">
          <SubPageImage1 href="/img/pages/solutions/hr1.webp" name="hr1" />
          <div className=" basis-full  md:basis-1/2">
            <SubPageHeading3 Title={t('HRTitle1')} />
            <SubPageParagraph2 Text={t('HR1Content1')} />
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row-reverse">
          <SubPageImage1 href="/img/pages/solutions/hr2.webp" name="hr2" />
          <div className="basis-full sm:basis-1/2">
            <SubPageHeading3 Title={t('HRTitle2')} />
            <SubPageParagraph2 Text={t('HR2Content1')} />
            <SubPageParagraph2 Text={t('HR2Content2')} />
            <ul className="list-disc pt-0">
              <SubPageList1 Text={t('HR2List1')} />
              <SubPageList1 Text={t('HR2List2')} />
              <SubPageList1 Text={t('HR2List3')} />
              <SubPageList1 Text={t('HR2List4')} />
            </ul>
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row">
          <SubPageImage1 href="/img/pages/solutions/hr3.webp" name="hr3" />
          <div className="basis-full md:basis-1/2">
            <SubPageHeading3 Title={t('HRTitle3')} />
            <SubPageParagraph2 Text={t('HR3Content1')} />
            <SubPageParagraph2 Text={t('HR3Content2')} />
            <SubPageParagraph2 Text={t('HR3Content3')} />
            <SubPageParagraph2 Text={t('HR3Content4')} />
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row-reverse">
          <SubPageImage1 href="/img/pages/solutions/hr4.webp" name="hr4" />
          <div className="basis-full sm:basis-1/2">
            <SubPageHeading3 Title={t('HRTitle4')} />
            <SubPageParagraph2 Text={t('HR4Content1')} />
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
