import React from 'react'
import Layout from '../../components/Layout'
import LayoutPage from '../../components/LayoutPage'
import BlueDivider from '../../components/UI/BlueDivider'
import SectorBlock from '../../components/UI/SectorBlock'
import SubPageHeading1 from '../../components/UI/SubPageHeading1'

export default function overview() {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <div>
          <SubPageHeading1 Title="Osmium Consulting Group Limited" />
          <SubPageHeading1 Title="Our Goal" />
        </div>

        <div className="row pt-2">
          <h5 className="">The Practice Sectors We Cover</h5>
          <BlueDivider />
        </div>

        <SectorBlock />
      </section>
    </div>
  )
}

overview.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LayoutPage />
      {page}
    </Layout>
  )
}
