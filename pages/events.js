import React from 'react'
import Layout from '@/Layout/Layout'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'

export default function Events() {
  return (
    <div className="mx-auto pt-4 md:max-w-4xl xl:max-w-6xl">
      <div className="grid grid-cols-2 gap-12">
        <div className="col-span-2 mx-16 md:col-span-1 md:m-0">
          <Image
            src="/img/pages/events/casecomp2022.jpg"
            height={2481}
            width={1755}
            layout="responsive"
            alt="Case Comp 2022 Brief Intro"
          />
        </div>
        <div className="col-span-2 mx-16 md:col-span-1 md:m-0">
          <Image
            src="/img/pages/events/casecomp2022details.jpg"
            height={2481}
            width={1755}
            layout="responsive"
            alt="Case Comp 2022 Details"
          />
        </div>
        <div className="col-span-2 text-center">
          <button className="bg-blue-400 px-28 py-4 rounded-xl text-base text-white">
            <a href="https://forms.gle/H2aiimvzkYq7krcB8">Click Me to Apply</a>
          </button>
        </div>
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
