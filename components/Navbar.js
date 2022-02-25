import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function Navbar() {
  return (
    <div>
      <header>
        {/*Navbar Final*/}

        <div className="nav-container">
          <nav
            className="stroke sina-nav mobile-sidebar navbar-fixed"
            data-top="40"
            data-md-top="40"
            data-xl-top="40"
          >
            <div className="container-fluid">
              {/* right nav (social icons)*/}

              <div className="extension-nav collapse navbar-collapse">
                <ul>
                  {/*Contact Method*/}
                  <li>
                    <a
                      className="navfont"
                      style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        color: '#5885AF',
                        padding: '10px 15px',
                      }}
                    >
                      TEL : (852) 3898 5500
                      <br /> MONDAY - FRIDAY
                    </a>
                  </li>
                  {/*Contact Method*/}

                  <li>
                    <a
                      style={{
                        color: '#3b5998',
                      }}
                      href="https://www.facebook.com/Osmium-Consulting-Group-106189320975122/"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={regular('coffee')} />
                      <FontAwesomeIcon icon={brands('twitter')} />
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: '#0e76a8' }}
                      href="https://www.linkedin.com/company/osmium-consulting-group"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin fa-fw mr-2"></i>
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      id="language"
                    >
                      <i className="fas fa-globe-americas fa-fw mr-2"></i>
                    </a>
                    <ul className="dropdown-menu short-menu" id="language-menu">
                      <li>
                        <a href="/locale/en" className="dropdown">
                          &nbsp;&nbsp;English
                        </a>
                      </li>
                      <li>
                        <a href="/locale/zh_HK" className="dropdown">
                          &nbsp;&nbsp;繁體中文
                        </a>
                      </li>
                      <li>
                        <a href="/locale/zh_CN" className="dropdown">
                          &nbsp;&nbsp;简体中文
                        </a>
                      </li>
                      <li>
                        <a href="/locale/ja_JP" className="dropdown">
                          &nbsp;&nbsp;日本語
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* right nav (social icons)*/}

              {/* Toggle Button & Logo */}

              <div className="sina-nav-header social-on">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                >
                  <i className="fas fa-bars"></i>
                </button>
                <a className="sina-brand" href="/">
                  <img
                    className="logo_h"
                    src="/img/nav/logo.png"
                    alt=""
                    className="logo-primary"
                  />
                </a>
              </div>
              {/* /.Toggle Button & Logo */}

              {/* Collect the nav links, forms, and other content for toggling */}

              <div className="collapse navbar-collapse" id="navbar-menu">
                <ul
                  className="sina-menu"
                  data-in="fadeInLeft"
                  data-out="fadeInOut"
                >
                  {/*Home (mobile-only)*/}

                  <li className="mobilenav">
                    <a className="navfont" href="/"></a>
                  </li>
                  {/*Home (mobile-only)*/}

                  {/*About_us*/}

                  <li className="dropdown">
                    <a
                      href="#"
                      className="navfont dropdown-toggle"
                      data-toggle="dropdown"
                      id="aaa"
                    ></a>
                    <ul className="dropdown-menu" id="aaa-menu">
                      <li>
                        <a href="/about_us/overview">&nbsp;&nbsp;</a>
                      </li>
                      <li>
                        <a href="/about_us/our_methodology">&nbsp;&nbsp;</a>
                      </li>
                      <li>
                        <a href="/about_us/sustainability">&nbsp;&nbsp;</a>
                      </li>
                    </ul>
                  </li>
                  {/*About_us*/}

                  {/*Solutions*/}

                  <li className="dropdown">
                    <a
                      href="#"
                      className="navfont dropdown-toggle"
                      data-toggle="dropdown"
                      id="bbb"
                    ></a>
                    <ul className="mid-menu dropdown-menu" id="bbb-menu">
                      <li>
                        <a href="/solutions/recruitment">&nbsp;&nbsp;</a>
                      </li>
                      <li>
                        <a href="/solutions/hr_solutions">&nbsp;&nbsp;</a>
                      </li>
                      <li>
                        <a href="/solutions/performance_management">
                          &nbsp;&nbsp;
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*Solutions */}

                  {/*Specialization*/}

                  <li className="dropdown">
                    <a
                      href="#"
                      className="navfont dropdown-toggle"
                      data-toggle="dropdown"
                      id="ccc"
                    ></a>
                    <ul className="mid-menu dropdown-menu" id="ccc-menu">
                      <li>
                        <a href="/specialization/banking_and_financial_services">
                          &nbsp;&nbsp;
                        </a>
                      </li>
                      <li>
                        <a href="/specialization/technology_media_telecommunications">
                          &nbsp;&nbsp;
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*Specialization*/}

                  {/*Careers*/}

                  <li className="dropdown">
                    <a className="navfont" href="/careers/careers"></a>
                  </li>
                  {/*Careers*/}

                  {/*Contact*/}

                  <li>
                    <a className="navfont contactani" href="/contact_us"></a>
                  </li>
                  {/*Contact*/}

                  <li className="mobilenav dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      id="language2"
                    >
                      <i className="fas fa-globe-americas fa-fw mr-2"></i>
                    </a>
                    <ul className="dropdown-menu" id="language2-menu">
                      <li>
                        <a href="/locale/en" className="dropdown">
                          &nbsp;&nbsp;English
                        </a>
                      </li>
                      <li>
                        <a href="/locale/zh_HK" className="dropdown">
                          &nbsp;&nbsp;繁體中文
                        </a>
                      </li>
                      <li>
                        <a href="/locale/zh_CN" className="dropdown">
                          &nbsp;&nbsp;简体中文
                        </a>
                      </li>
                      <li>
                        <a href="/locale/ja_JP" className="dropdown">
                          &nbsp;&nbsp;日本語
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*Social Icons*/}

                  <li className="mobilenav">
                    <ul>
                      <li>
                        <a
                          style={{ color: '#3b5998' }}
                          href="https://www.facebook.com/Osmium-Consulting-Group-106189320975122/"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f fa-fw mr-2"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ color: '#0e76a8' }}
                          href="https://www.linkedin.com/company/osmium-consulting-group"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin fa-fw mr-2"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*Social Icons*/}
                </ul>
              </div>
              {/* /.navbar-collapse */}
            </div>
            {/* .container */}
          </nav>
        </div>
        {/*Navbar Final*/}
      </header>
    </div>
  )
}

export default Navbar
