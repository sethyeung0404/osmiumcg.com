import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { navigation, language } from './Navigation'

export default function footer() {
  return (
    <footer className="bg-slate-200 text-xs text-slate-700">
      <div className="mx-auto max-w-6xl leading-5">
        <div className="mb-6 flex justify-center">
          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal  transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            *6
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5">
          <div className="mb-6">
            <h5 className="mb-2.5 ">Links</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className="">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Links</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className="">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Links</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className="">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Links</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className="">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Links</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className="">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl justify-between leading-5">
        {/*Copyright*/}
        <div>
          Osmium Consulting Group Limited ( EA Licence No. 66295 )
          <br />
          D-U-N-S Number : 68-638-4815
        </div>
        <div>
          Copyright &copy; All rights reserved by Osmium Consulting Group
        </div>
      </div>
    </footer>
  )
}
