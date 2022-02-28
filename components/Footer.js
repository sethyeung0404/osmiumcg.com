import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function footer() {
  return (
    <footer className="page-footer footer-font">
      <div className="container-fluid d-none d-sm-block">
        <div className="row justify-content-between ">
          {/*Copyright*/}
          <div className="col-6 p-3 text-left">
            Osmium Consulting Group Limited ( EA Licence No. 66295 )
            <br />
            D-U-N-S Number : 68-638-4815
          </div>
          <div className="col-6 p-3 text-right">
            Copyright &copy;
            <a href="#">All rights reserved by Osmium Consulting Group</a>
          </div>
        </div>
      </div>

      <div className="d-sm-none d-block container">
        <div className="row justify-content-between">
          <div className="col-12 " align="center">
            <ul className="horizontal-list pt-3" style={{ color: '#FFFFFF' }}>
              <li>
                <a
                  href="https://www.facebook.com/Osmium-Consulting-Group-106189320975122/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/osmium-consulting-group"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 pb-3" align="center">
            &copy;
            <a href="#"></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
