import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import BlueDivider from '@/UI/BlueDivider'
import SectorBlock from '@/UI/SectorBlock'
import SubPageHeading1 from '@/UI/SubPageHeading1'
import SubPageHeading2 from '@/UI/SubPageHeading2'

export default function recruitment() {
  let title = 'hello'

  return (
    <div className="">
      <section className="mt-3">
        <SubPageHeading1 Title="Recruitment" />
        <div></div>

        <div className="row pt-2">
          <h5 className="">The Practice Sectors We Cover</h5>
          <BlueDivider />
        </div>

        <SectorBlock />
      </section>
    </div>
  )
}

recruitment.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LayoutPage>{page}</LayoutPage>
    </Layout>
  )
}
