import React from 'react'
import Layout from '@/Layout/Layout'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import InhouseJobs from '@/components/UI/InhouseJobs'
import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export default function Careers() {
  const onSearch = (value) => console.log(value)

  return (
    <div>
      {/* Main */}
      <div className="mx-2 max-w-7xl md:mx-2 xl:mx-auto">
        <section className="relative ">
          <Image
            className="-z-10"
            layout="fill"
            src="/img/pages/careers/rectangle-orange-1.svg"
            alt="Orange Background"
            objectFit="cover"
            quality={100}
          />
          <div className="z-50 py-28 px-10 font-semibold md:py-32 lg:py-36">
            <p className="text-5xl">All aboard!</p>
            <br />
            <p className="text-4xl">Join us at OCG.</p>
          </div>
        </section>
        {/* Heading */}
        <div className="pt-8 text-center">
          <p className="text-3xl font-extrabold">搜尋最適合你的職位</p>

          <div className="my-6 mx-6 flex max-w-4xl items-center rounded-lg border-2 border-gray-300 bg-gray-100 p-4 md:mx-8 md:p-5 lg:mx-auto">
            <SearchIcon className="h-7 text-gray-600 md:h-9 lg:h-10" />
            <input
              className="ml-3 flex flex-shrink items-center bg-transparent text-lg placeholder-gray-400 outline-none md:ml-6 md:text-xl lg:text-2xl"
              type="text"
              placeholder="以職位或關鍵字搜尋"
            />
          </div>
        </div>
        <div className="mx-4 max-w-7xl pt-20 xl:mx-auto">
          <InhouseJobs />
        </div>
        {/* Search with Pagination */}
        {/* Disclaimer */}
      </div>
    </div>
  )
}

Careers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
