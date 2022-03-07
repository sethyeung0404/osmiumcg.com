import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import ConsultantCarousel from '@/UI/ConsultantCarousel'
import SubPageHeading1 from '@/components/UI/SubPageHeading1'
import SubPageHeading2 from '@/components/UI/SubPageHeading2'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function bfs() {
  const { t } = useTranslation('specialization')

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title={t('common:BFS')} />
        <div>
          {/*--Grid 1st column*/}
          <div className="col-lg-4 col-sm-4 mb-4">
            <ConsultantCarousel />
            <ConsultantCarousel />
            <ConsultantCarousel />
            <ConsultantCarousel />
            <ConsultantCarousel />
          </div>
        </div>
        {/*--Grid 2nd column*/}
        <div className="col-lg-8 col-sm-8 mb-4">
          <div className="row">
            <div className="col-12">
              <p className="webcontent text-justify"></p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h3 className="webhead" style={{ color: '#4285f4' }}>
                H3
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

bfs.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LayoutPage />
      {page}
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'specialization'])),
  },
})
