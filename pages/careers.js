import React from 'react'
import Layout from '../components/Layout/Layout'

export default function careers() {
  return (
    <section style={{ marginLeft: '5%', marginRight: '5%' }}>
      <div className="container-custom container">
        <div className="row">
          <div
            className="col-12 col-md-6 col-xl-7 align-self-center"
            align="center"
          >
            <h1
              className="my-4 text-center"
              style={{ fontSize: '70px', lineHeight: '60px' }}
            >
              Careers
            </h1>
            <h4 style={{ letterSpacing: '0.15em' }}>Careers at OCG</h4>
            <br />
            <br />
          </div>
          <div className="col-xl-5">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {/*--Copy this if there are more photos in future-->*/}
                <div className="carousel-item active">
                  <img
                    src="/img/joinus/Careers.jpg"
                    alt="Office View"
                    width="100%"
                    style={{ maxHeight: '650px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

careers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
