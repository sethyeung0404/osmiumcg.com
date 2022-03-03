import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { navigation, language } from './Navigation'

export default function footer() {
  return (
    <footer className="bg-gray-100 text-xs mt-5 text-slate-500">
      <div className="mx-auto max-w-6xl px-2 leading-5">
        <div className="mb-6 flex justify-center">
          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal  transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            *6
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6">
          {navigation.categories.map((category) => (
            <div className="mb-6">
              <h5 className="my-2 font-bold text-slate-700">{category.name}</h5>
              <ul className="list-none">
                {category.items.map((item) => (
                  <li className="my-2">
                    <a href={item.href} className="">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {navigation.pages.map((page) => (
            <div className="mb-6">
              <a href={page.href}>
                <h5 className="my-2 font-bold text-slate-700">{page.name}</h5>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 px-2 pb-6 leading-5 text-slate-500">
        {/*Copyright*/}
        <div className="border-b-2 border-slate-300">
          Looking for Recruiters? Find a Consultant by Calling (852) 3898 5500
          or send an email to{' '}
          <a href="mailto:info@osmiumcg.com">info@osmiumcg.com</a>
        </div>
        <div></div>
        <div className="flex justify-between">
          <div>
            Osmium Consulting Group Limited ( EA Licence No. 66295 ) | D-U-N-S
            Number : 68-638-4815
          </div>
          <div>Hong Kong</div>
        </div>
      </div>
    </footer>
  )
}
