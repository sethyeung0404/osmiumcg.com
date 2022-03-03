import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import BlueDivider from '@/UI/BlueDivider'
import SubPageHeading1 from '@/UI/SubPageHeading1'
import SubPageHeading2 from '@/UI/SubPageHeading2'
import SectorBlock from '@/UI/SectorBlock'

export default function overview() {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title="Overview" />
        <div>
          <SubPageHeading2 Title="Osmium Consulting Group Limited" />
          <SubPageHeading2 Title="Our Goal" />
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
