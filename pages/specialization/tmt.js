import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import ConsultantCarousel from '@/UI/ConsultantCarousel'

export default function tmt() {
  return (
    <div className="mx-auto max-w-7xl">
      {/*--Grid row*/}
      <div className="row">
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
            <p className="webcontent text-justify">content</p>
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
      <hr className="mb-5" />
    </div>
  )
}

tmt.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LayoutPage />
      {page}
    </Layout>
  )
}
