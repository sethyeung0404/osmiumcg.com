import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import SubPageHeading1 from '@/Text/SubPageHeading1'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import SubPageImage1 from '@/components/UI/SubPageImage1'
import SubPageHeading3 from '@/components/Text/SubPageHeading3'
import SubPageParagraph2 from '@/components/Text/SubPageParagraph2'
import SubPageList1 from '@/components/Text/SubPageList1'
export default function performanceManagement() {
  const { t } = useTranslation('solutions')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title={t('common:Recruitment')} />

        <div className="align-center my-6 flex flex-col items-center sm:flex-row">
          <SubPageImage1 href="/img/pages/solutions/p1.webp" name="p1" />
          <div className=" basis-full  md:basis-1/2">
            <SubPageHeading3 Title={t('PTitle1')} />
            <SubPageParagraph2 Text={t('P1Content1')} />
            <SubPageParagraph2 Text={t('P1Content2')} />
            <ul className="list-disc pt-0">
              <SubPageList1 Text={t('P1List1')} />
              <SubPageList1 Text={t('P1List2')} />
            </ul>
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row-reverse">
          <SubPageImage1 href="/img/pages/solutions/p2.webp" name="p2" />
          <div className="basis-full sm:basis-1/2">
            <SubPageHeading3 Title={t('PTitle2')} />
            <SubPageParagraph2 Text={t('P2Content1')} />
            <ul className="list-disc pt-0">
              <SubPageList1 Text={t('P2List1')} />
              <SubPageList1 Text={t('P2List2')} />
              <SubPageList1 Text={t('P2List3')} />
              <SubPageList1 Text={t('P2List4')} />
            </ul>
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row">
          <SubPageImage1 href="/img/pages/solutions/p3.webp" name="p3" />
          <div className="basis-full md:basis-1/2">
            <SubPageHeading3 Title={t('PTitle3')} />
            <SubPageParagraph2 Text={t('P3Content1')} />
            <SubPageParagraph2 Text={t('P3Content2')} />
            <ul className="list-disc pt-0">
              <SubPageList1 Text={t('P3List1')} />
              <SubPageList1 Text={t('P3List2')} />
              <SubPageList1 Text={t('P3List3')} />
              <SubPageList1 Text={t('P3List4')} />
              <SubPageList1 Text={t('P3List5')} />
            </ul>
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row-reverse">
          <SubPageImage1 href="/img/pages/solutions/p4.webp" name="p4" />
          <div className="basis-full sm:basis-1/2">
            <SubPageHeading3 Title={t('PTitle4')} />
            <SubPageParagraph2 Text={t('P4Content1')} />
            <ul className="list-disc pt-0">
              <SubPageList1 Text={t('P4List1')} />
              <SubPageList1 Text={t('P4List2')} />
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
          <meta name="description" content="🥱🥱🥱" />
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
