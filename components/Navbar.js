import { React, ReactDom } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAsia, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Popover } from '@headlessui/react'

export default function Navbar() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      {/*Mobile View*/}
      <div className="flex md:hidden">
        <button className=" ml-auto inline-flex rounded p-3 outline-none hover:bg-gray-300 lg:hidden">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div className="hidden items-center space-x-5 sm:flex">
        {/*Logo*/}
        <Link href="/">
          <a className="mr-4 inline-flex items-center p-2 ">
            <Image
              src="/img/nav/logo.png"
              alt="OCG Logo"
              width={128}
              height={48}
            />
          </a>
        </Link>

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
              <Link href="/specialization/banking-financial-services">
                <a>Banking and Financial Services</a>
              </Link>
              <Link href="/specialization/tmt">
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
      </div>

      <div className="hidden items-center space-x-5 sm:flex">
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
    </header>
  )
}
