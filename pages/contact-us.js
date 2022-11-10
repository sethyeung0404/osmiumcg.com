import React, { Fragment } from 'react'
import Layout from '@/layouts/Layout'
import LayoutPage from '@/layouts/LayoutPage'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import MapWrapper from '@/components/map/MapWrapper'
import MapDescription from '@/components/map/MapDescription'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import ContactUsForm from '@/components/form/signupForm/ContactUsForm'

export default function ContactUs() {
  const { t } = useTranslation('common')

  return (
    <>
      <section className="mt-3">
        <h1>{t('Contact')} </h1>

        <div className="grid grid-cols-12">
          {/* Left Zone : Time & Map*/}
          <div className="col-span-12 md:col-span-7">
            <Tab.Group>
              {/* Buttons */}
              <Tab.List className="grid grid-cols-3 gap-x-1.5 rounded-2xl bg-slate-200 p-1">
                {/* Button Controls Content 1 : (HK) */}
                <Tab as={Fragment}>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button
                      className={clsx(
                        selected
                          ? 'bg-white font-semibold text-ocg-lightblue opacity-100'
                          : 'bg-transparent text-gray-900 opacity-80 hover:bg-slate-100 hover:opacity-100 ',
                        'col-span-1 rounded-xl py-2 outline-none ring-blue-200 focus:ring-4'
                      )}
                    >
                      {t('HK')}
                    </button>
                  )}
                </Tab>
                {/* Button Controls Content 2 : (SG) */}
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={clsx(
                        selected
                          ? 'bg-white font-semibold text-ocg-lightblue opacity-100'
                          : 'bg-transparent text-gray-900 opacity-80 hover:bg-slate-100 hover:opacity-100 ',
                        'col-span-1 rounded-xl py-2 outline-none ring-blue-200 focus:ring-4'
                      )}
                    >
                      {t('SG')}
                    </button>
                  )}
                </Tab>
                {/* Button Controls Content 3 : (JP) */}
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={clsx(
                        selected
                          ? 'bg-white font-semibold text-ocg-lightblue opacity-100'
                          : 'bg-transparent text-gray-900 opacity-80 hover:bg-slate-100 hover:opacity-100 ',
                        'col-span-1 rounded-xl py-2 outline-none ring-blue-200 focus:ring-4'
                      )}
                    >
                      {t('JP')}
                    </button>
                  )}
                </Tab>
              </Tab.List>

              {/* Panels */}
              <Tab.Panels>
                {/* Content 1 : HK */}
                <Tab.Panel>
                  {/* HK */}
                  <div className="my-6 bg-slate-50">
                    <MapDescription
                      Country={t('HK')}
                      District={t('HKAddress2')}
                      Phone
                      EmailAddress="info@osmiumcg.com"
                      FullAddress={t('HKAddress')}
                    />
                    <MapWrapper Location="HK" />
                  </div>
                </Tab.Panel>
                {/* Content 2 : SG */}
                <Tab.Panel>
                  {/* SG */}
                  <div className="my-6 bg-slate-50">
                    <MapDescription
                      Country={t('SG')}
                      District={t('SGAddress2')}
                      EmailAddress="info+sg@osmiumcg.com"
                      FullAddress={t('SGAddress')}
                    />
                    <MapWrapper Location="SG" />
                  </div>
                </Tab.Panel>
                {/* Content 3 : JP */}
                <Tab.Panel>
                  {/* JP */}
                  <div className="my-6 bg-slate-50">
                    <MapDescription
                      Country={t('JP')}
                      District={t('JPAddress2')}
                      EmailAddress="info+jp@osmiumcg.com"
                      FullAddress={t('JPAddress')}
                    />
                    <MapWrapper Location="JP" />{' '}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Right Form */}
          <div className="col-span-12 md:col-span-5">
            <div className="mt-10 px-4 sm:mt-0">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

ContactUs.getLayout = function getLayout(page) {
  const { t } = useTranslation('common')

  return (
    <Layout
      headContent={
        <Head>
          <title>OCG - Contact Us</title>
          <meta
            name="description"
            content="Contact Us at Osmium Consulting Group"
          />
        </Head>
      }
    >
      <LayoutPage title={t('Contact')} subtitle={t('Contact')}>
        {page}
      </LayoutPage>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
