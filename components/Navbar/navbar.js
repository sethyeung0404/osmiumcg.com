import { React, ReactDom } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAsia, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Popover } from '@headlessui/react'

function Navbar() {
  return (
    <header>
      <nav className="fixed z-10 w-full shadow-sm">
        <div className="w-full">
          <div className="flex h-20 w-full items-center">
            <div className="mx-20 flex  w-full  items-center justify-between">
              {/*Logo*/}
              <Link href="/">
                <a className="mr-4 inline-flex items-center p-2 ">
                  <Image
                    src="/img/nav/logo.png"
                    alt="OCG Logo"
                    width={128}
                    height={48}
                    layout="fixed"
                  />
                </a>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/*About_us*/}
                  <Popover className="relative">
                    <Popover.Button>About Us</Popover.Button>

                    <Popover.Panel className="absolute z-10">
                      <div className="grid">
                        <Link href="/about_us/overview">
                          <a>Overview</a>
                        </Link>
                        <Link href="/about_us/our_methodology">
                          <a>Our Philosophy</a>
                        </Link>
                        <Link href="/about_us/sustainability">
                          <a>Sustainability</a>
                        </Link>
                      </div>
                    </Popover.Panel>
                  </Popover>

                  {/*Solutions*/}
                  <Popover className="relative">
                    <Popover.Button>Solutions</Popover.Button>

                    <Popover.Panel className="absolute z-10">
                      <div className="grid">
                        <Link href="/solutions/recruitment">
                          <a>Recruitment</a>
                        </Link>
                        <Link href="/solutions/hr_solutions">
                          <a>HR Solutions</a>
                        </Link>
                        <Link href="/solutions/performance_management">
                          <a>Performance Management</a>
                        </Link>
                      </div>
                    </Popover.Panel>
                  </Popover>

                  {/*Specialization*/}
                  <Popover className="relative">
                    <Popover.Button>Specialization</Popover.Button>

                    <Popover.Panel className="absolute z-10">
                      <div className="grid">
                        <Link href="/specialization/banking_and_financial_services">
                          <a>Banking and Financial Services</a>
                        </Link>
                        <Link href="/specialization/technology_media_telecommunications">
                          <a>TMT</a>
                        </Link>
                      </div>
                    </Popover.Panel>
                  </Popover>

                  {/*Careers*/}
                  <Link href="/careers">
                    <a>Careers</a>
                  </Link>

                  {/*Contact*/}
                  <Link href="/contact_us">
                    <a>Contact Us</a>
                  </Link>

                  {/*Contact Method*/}
                  <a
                    style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#5885AF',
                    }}
                  >
                    TEL : (852) 3898 5500
                    <br /> MONDAY - FRIDAY
                  </a>

                  {/* Facebook Icon*/}
                  <Link href="https://www.facebook.com/Osmium-Consulting-Group-106189320975122/">
                    <a style={{ color: '#3b5998' }} target="_blank">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </Link>

                  {/* LinkedIn Icon*/}
                  <Link href="https://www.linkedin.com/company/osmium-consulting-group">
                    <a style={{ color: '#0e76a8' }} target="_blank">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </Link>

                  {/* Translation */}
                  <Popover className="relative">
                    <Popover.Button>
                      <FontAwesomeIcon icon={faEarthAsia} />
                    </Popover.Button>

                    <Popover.Panel className="absolute z-10">
                      <div className="grid">
                        <a href="/locale/en">English</a>
                        <a href="/locale/zh_HK">繁體中文</a>
                        <a href="/locale/zh_CN">简体中文</a>
                        <a href="/locale/ja_JP">日本語</a>
                      </div>
                    </Popover.Panel>
                  </Popover>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              {/*Mobile Toggle Button*/}
              <button className=" ml-auto inline-flex rounded p-3 outline-none hover:bg-green-600 lg:hidden">
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
