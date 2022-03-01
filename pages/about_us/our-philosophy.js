import React from 'react'
import Layout from '../../components/Layout'
import LayoutPage from '../../components/LayoutPage'
import SubPageHeading1 from '../../components/UI/SubPageHeading1'
import SubPageHeading2 from '../../components/UI/SubPageHeading2'

export default function ourPhilosophy() {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-3">
        <SubPageHeading1 Title=" Our Philosophy" />
        <div>Animation EUR - tbc</div>
        <SubPageHeading1 Title=" Our Methodlogy" />
        <div>
          <SubPageHeading2 Title="STEP 1 :" />
          <SubPageHeading2 Title="STEP 2 :" />
          <SubPageHeading2 Title="STEP 3 :" />
          <SubPageHeading2 Title="STEP 4 :" />
          <SubPageHeading2 Title="STEP 5 :" />
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
