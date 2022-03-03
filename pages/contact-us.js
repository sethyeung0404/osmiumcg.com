import React from 'react'
import Layout from '@/Layout/Layout'
import LayoutPage from '@/Layout/LayoutPage'
import ContactUsButton from '@/Buttons/ContactUsButton'

export default function ContactUs() {
  return (
    <div className="container">
      {/*Contact Us */}
      <section className="wow fadeIn mt-2">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column Map*/}
          <div className="col-sm-7 text-md-left text-center">
            {/*Google map*/}
            <div id="map1" className="map-container"></div>
            {/*Google Maps*/}
          </div>
          {/*Grid column Map*/}
          {/*Grid column Contact Us*/}
          <div className="col-sm-5 map-text bg-white pt-3">
            {/* Heading */}
            <div className="contact-meto-info">
              <h4>Hong Kong Office</h4>
              <hr />
              <div className="pl-3">
                <h5>Wan Chai</h5>
                <small className="text-black-50">Office</small>
                <p className="indigo-text">+852 3898 5500</p>
                <small className="text-black-50">Email</small>
                <p className="indigo-text">info@osmiumcg.com</p>
                <small className="text-black-50">Address</small>
                <p>
                  1802, 18/F, Fortis Tower, 77 Gloucester Road, Wan Chai, Hong
                  Kong
                </p>
              </div>
              <ContactUsButton />
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="row">
          {/*Grid column Map*/}
          <div className="col-sm-7 text-md-left text-center">
            {/*Google map*/}
            <div id="map2" className="map-container"></div>
            {/*Google Maps*/}
          </div>
          {/*Grid column Map*/}
          {/*Grid column Contact Us*/}
          <div className="col-sm-5 map-text bg-white pt-3">
            {/* Heading */}
            <div className="contact-meto-info">
              <h4>Singapore Office</h4>
              <hr />
              <div className="pl-3">
                <h5>Central Business District</h5>
                <small className="text-black-50">Email</small>
                <p className="indigo-text">info+sg@osmiumcg.com</p>
                <small className="text-black-50">Address</small>
                <p>Level 42, Six Battery Road, 049909 Singapore</p>
              </div>
              <ContactUsButton />
            </div>
          </div>
        </div>
        <hr className="mt-5 mb-5" />
      </section>
    </div>
  )
}

ContactUs.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LayoutPage />
      {page}
    </Layout>
  )
}
