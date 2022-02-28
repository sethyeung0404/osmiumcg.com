import React from 'react'
import Layout from '../../components/layout'
import LayoutPage from '../../components/layoutPage'

export default function overview() {
  return (
    <div className="container">
      <section className="mt-3">
        <div className="row wow fadeIn justify-">
          <div className="col-md-12 mb-4">
            <div className="row">
              <div className="col-12">
                <p className="webcontent"></p>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <h4 className="headline"></h4>
                <p className="webcontent"></p>
                <p className="webcontent"></p>

                <h4 className="headline"></h4>
                <p className="webcontent"></p>
                <p className="webcontent"></p>
              </div>
            </div>

            <div className="row pt-2">
              <div className="col-12">
                <h5 className="animated fadeInLeft"></h5>
              </div>

              <div className="container">
                <div className="col-12 mt-2 mb-2">
                  <div className="rectangle animated fadeInLeft"></div>
                </div>
              </div>
            </div>

            <div className="row mb-2">
              {' '}
              {/*no-gutters */}
              <div className="col-12 col-md-6">
                <a
                  href="/specialization/banking_and_financial_services"
                  className="linkcolor"
                >
                  <div
                    className="card  index-card2 mt-2 mb-2"
                    style={{ height: '12rem', borderRadius: '0' }}
                  >
                    <div className="card-body">
                      <h3
                        className="card-title"
                        style={{ letterSpacing: '0.05em' }}
                      ></h3>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 text-white">
                <a
                  href="/specialization/technology_media_telecommunications"
                  className="linkcolorblack"
                >
                  <div
                    className="card index-card mt-2  mb-2"
                    style={{ height: '12rem', borderRadius: '0' }}
                  >
                    <div className="card-body">
                      <h3
                        className="card-title"
                        style={{ letterSpacing: '0.05em' }}
                      ></h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </section>
      {/*Section: Post*/}
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
