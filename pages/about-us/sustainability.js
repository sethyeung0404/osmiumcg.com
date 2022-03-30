import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import Divider from '@/components/UI/Divider'
import SubPageHeading1 from '@/Text/SubPageHeading1'
import SubPageHeading2 from '@/Text/SubPageHeading2'
import SubPageParagraph1 from '@/Text/SubPageParagraph1'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import PillarsCard from '@/components/UI/PillarsCard'
import Quote from '@/components/Text/Quote'

export default function substainability() {
  const { t } = useTranslation('about-us')

  return (
    <div className="">
      <section className="mt-3">
        <SubPageHeading1 Title={t('common:Sustainabilty')} />

        <div>
          <Quote
            Text={
              <Trans
                ns="about-us"
                i18nKey="Quote" // optional -> fallbacks to defaults if not provided
                defaults="<b>Sustainable Development</b> is defined as development that meets the needs of the present without compromising the ability of future generations to meet their own needs" // optional defaultValue
                components={{ b: <b /> }}
              />
            }
          />
        </div>
        <div>
          <SubPageHeading2 Title={t('OR')} />
          <SubPageParagraph1 Text={t('ORContent1')} />

          <SubPageHeading2 Title={t('OA')} />
          <SubPageParagraph1 Text={t('OAContent1')} />

          <SubPageHeading2 Title={t('Our4Pillars')} />
          <Divider colour="blue" />
          <div className="m-2 grid grid-cols-1 p-2 sm:grid-cols-2">
            <PillarsCard
              title={t('OurCommunity')}
              colour="yellow"
              list1={t('CommunityList1')}
              list2={t('CommunityList2')}
            />
            <PillarsCard
              title={t('OurPeople')}
              colour="pink"
              list1={t('OPList1')}
              list2={t('OPList2')}
              list3={t('OPList3')}
            />
            <PillarsCard
              title={t('OurCustomers')}
              colour="purple"
              list1={t('OCList1')}
              list2={t('OCList2')}
            />
            <PillarsCard
              title={t('CorporateGovernance')}
              colour="red"
              list1={t('CGList1')}
              list2={t('CGList2')}
              list3={t('CGList3')}
            />
          </div>
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
        </Head>
      }
    >
      <LayoutPage title={t('About')} subtitle={t('Sustainability')}>
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
