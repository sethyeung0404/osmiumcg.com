import React from 'react'
import Layout from '../../components/Layout/Layout'
import LayoutPage from '../../components/Layout/LayoutPage'
import BlueDivider from '../../components/UI/BlueDivider'
import SubPageHeading1 from '../../components/UI/SubPageHeading1'
import SubPageHeading2 from '../../components/UI/SubPageHeading2'

export default function ourPhilosophy() {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title=" Sustainability" />
        <div>
          Sustainable Development is defined as "development that meets the
          needs of the present without compromising the ability of future
          generations to meet their own needs"
        </div>
        <div>
          <SubPageHeading2 Title="Our Responsibilities" />
          <SubPageHeading2 Title="Our Aim" />
          <SubPageHeading2 Title="Our Four Pillars on Substainability :" />
          <BlueDivider />
          <div>4 Blocks</div>
        </div>
      </section>
    </div>
  )
}

ourPhilosophy.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LayoutPage />
      {page}
    </Layout>
  )
}
