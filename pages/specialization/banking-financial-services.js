import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import ConsultantCarousel from '@/UI/ConsultantCarousel'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'
import SubPageHeading1 from '@/components/UI/SubPageHeading1'
import SubPageHeading2 from '@/components/UI/SubPageHeading2'

export default function bfs() {
  let { t } = useTranslation()
  const Component = (props) => <p {...props} />

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
              <p className="webcontent text-justify">
                <Trans
                  i18nKey="specialization:BankingList1"
                  components={[<Component />]}
                />
              </p>
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
