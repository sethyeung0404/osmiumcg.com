import React from 'react'
import Layout from '../../components/Layout/Layout'
import LayoutPage from '../../components/Layout/LayoutPage'
import BlueDivider from '../../components/UI/BlueDivider'
import SectorBlock from '../../components/UI/SectorBlock'
import SubPageHeading1 from '../../components/UI/SubPageHeading1'
import SubPageHeading2 from '../../components/UI/SubPageHeading2'

export default function recruitment() {
    return (
      <div className="mx-auto max-w-7xl">
        <section className="mt-3">
          <SubPageHeading1 Title="Recruitment" />
          <div>
            
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
  
  recruitment.getLayout = function getLayout(page) {
    return (
      <Layout>
        <LayoutPage />
        {page}
      </Layout>
    )
  }