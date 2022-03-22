import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import BlueDivider from '@/UI/BlueDivider'
import SubPageHeading1 from '@/Text/SubPageHeading1'
import SubPageHeading2 from '@/Text/SubPageHeading2'
import SubPageParagraph1 from '@/Text/SubPageParagraph1'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

export default function substainability() {
  const { t } = useTranslation('about-us')

  return (
    <div className="">
      <section className="mt-3">
        <SubPageHeading1 Title=" Sustainability" />
        <div>
          {/* Sustainable Development is defined as "development that meets the
          needs of the present without compromising the ability of future
          generations to meet their own needs" */}
        </div>
        <div>
          <SubPageHeading2 Title="Our Responsibilities" />
          <SubPageParagraph1 Text={t('S2Content1')} />

          <SubPageHeading2 Title="Our Aim" />
          <SubPageParagraph1 Text={t('S2Content1')} />

          <SubPageHeading2 Title="Our Four Pillars on Substainability :" />
          <SubPageParagraph1 Text={t('S2Content1')} />
          <BlueDivider />
          <div>4 Blocks</div>
        </div>
      </section>
    </div>
  )
}

substainability.getLayout = function getLayout(page) {
  const { t } = useTranslation('common')

  return (
    <Layout
      headContent={
        <Head>
          <title>OCG - Substainability</title>
          <meta name="description" content="🥱🥱🥱" />
        </Head>
      }
    >
      <LayoutPage title={t('About')} subtitle={t('Substainability')}>
        {page}
      </LayoutPage>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about-us'])),
  },
})
