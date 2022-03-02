import React from 'react'
import Layout from '../../components/Layout/Layout'
import LayoutPage from '../../components/Layout/LayoutPage'
import BlueDivider from '../../components/UI/BlueDivider'
import SectorBlock from '../../components/UI/SectorBlock'
import SubPageHeading1 from '../../components/UI/SubPageHeading1'
import SubPageHeading2 from '../../components/UI/SubPageHeading2'

export default function hrSolutions() {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title="HR Solutions" />
        <div class="col-md-12 mb-4">{/* Content */}</div>
      </section>
    </div>
  )
}

hrSolutions.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LayoutPage />
      {page}
    </Layout>
  )
}
