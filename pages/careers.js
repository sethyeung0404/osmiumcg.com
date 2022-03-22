import React from 'react'
import Layout from '@/Layout/Layout'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
export default function Careers() {
  return (
    <div>
      <header className="sticky-top fixed z-20 w-full bg-slate-700 p-4">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
          <p className="text-2xl text-white">Careers at OCG</p>
        </div>
      </header>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12">
          <div
            className="col-span-12 self-center md:col-span-6 xl:col-span-7"
            align="center"
          >
            <p className="my-4 text-center text-7xl font-bold">CAREERS</p>
          </div>
          <div className="hidden md:col-span-5 md:grid">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {/*--Copy this if there are more photos in future-->*/}
                <div className="carousel-item active">
                  <Image
                    src="/img/joinus/Careers.jpg"
                    alt="Office View"
                    height={650}
                    width={100}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
