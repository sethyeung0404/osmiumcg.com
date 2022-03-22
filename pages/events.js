import React from 'react'
import Layout from '@/Layout/Layout'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'

export default function Events() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-12">
        <Image
          src="/img/pages/events/casecomp2022.jpg"
          height={2481}
          width={1755}
          layout="responsive"
        />
        <Image
          src="/img/pages/events/casecomp2022details.jpg"
          height={2481}
          width={1755}
          layout="responsive"
        />
      </div>
    </div>
  )
}

Events.getLayout = function getLayout(page) {
  return (
    <Layout
      headContent={
        <Head>
          <title>OCG - Events</title>
          <meta name="description" content="🥱🥱🥱" />
        </Head>
      }
    >
      {page}
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
