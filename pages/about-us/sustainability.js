import React from 'react'
import Layout from 'components/layouts/Layout'
import LayoutPage from 'components/layouts/LayoutPage'
import Divider from 'components/ui/Divider'
import Quote from 'components/ui/Quote'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import PillarsCard from 'src/sustainability/PillarsCard'

export default function substainability() {
  const { t } = useTranslation('about-us')

  return (
    <div className="">
      <section className="mt-3">
        <h1>{t('common:Sustainabilty')} </h1>

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
          <h3>{t('OR')}</h3>
          <h6>{t('ORContent1')} </h6>

          <h3>{t('OA')}</h3>
          <h6>{t('OAContent1')} </h6>

          <h3>{t('Our4Pillars')}</h3>
          <Divider colour="blue" />
          <div className="grid grid-cols-1 gap-2 p-2 md:grid-cols-2">
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
