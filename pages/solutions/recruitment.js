import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import SubPageList1 from '@/components/Text/SubPageList1'
import SubPageHeading1 from '@/Text/SubPageHeading1'
import SubPageHeading3 from '@/Text/SubPageHeading3'
import SubPageImage1 from '@/components/UI/SubPageImage1'
import SubPageParagraph2 from '@/components/Text/SubPageParagraph2'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

export default function recruitment() {
  const { t } = useTranslation('solutions')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title={t('common:Recruitment')} />

        <div className="align-center my-6 flex flex-col items-center sm:flex-row">
          <SubPageImage1 href="/img/pages/solutions/r1.webp" name="r1" />
          <div className=" basis-full  md:basis-1/2">
            <SubPageHeading3 Title={t('RTitle1')} />
            <SubPageParagraph2 Text={t('R1Content1')} />
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row-reverse">
          <SubPageImage1 href="/img/pages/solutions/r2.webp" name="r2" />
          <div className="basis-full sm:basis-1/2">
            <SubPageHeading3 Title={t('RTitle2')} />
            <SubPageParagraph2 Text={t('R2Content1')} />
            <SubPageParagraph2 Text={t('R2Content2')} />
          </div>
        </div>

        <div className="align-center my-6 flex flex-col items-center sm:flex-row">
          <SubPageImage1 href="/img/pages/solutions/r3.webp" name="r3" />
          <div className="basis-full md:basis-1/2">
            <SubPageHeading3 Title={t('RTitle3')} />
            <SubPageParagraph2 Text={t('R3Content1')} />
            <SubPageParagraph2 Text={t('R3Content2')} />
            <SubPageParagraph2 Text={t('R3Content3')} />
            <ul className="list-disc pt-0">
              <SubPageList1 Text={t('R3List1')} />
              <SubPageList1 Text={t('R3List2')} />
              <SubPageList1 Text={t('R3List3')} />
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
          <meta name="description" content="🥱🥱🥱" />
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
