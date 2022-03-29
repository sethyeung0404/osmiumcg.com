import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { navigation, language } from './Navigation'
import { useTranslation } from 'next-i18next'

export default function footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="mt-5 bg-gray-100 text-xs text-slate-500">
      <div className="mx-auto max-w-4xl px-5 leading-5 lg:max-w-7xl">
        <div className="flex items-center justify-center gap-2 p-3 text-center">
          {/* Facebook Icons*/}
          <Link href="https://www.facebook.com/Osmium-Consulting-Group-106189320975122/">
            <a
              className="h-9 w-9 rounded-full border-2 border-white text-base text-facebook-blue transition  duration-150 ease-in-out
               hover:bg-black hover:bg-opacity-5 hover:text-gray-500 focus:outline-none focus:ring-0"
              target="_blank"
            >
              <FontAwesomeIcon
                className="translate-y-[0.3rem]"
                icon={faFacebookF}
                aria-hidden="true"
              />
            </a>
          </Link>
          {/* LinkedIn Icons*/}
          <Link href="https://www.linkedin.com/company/osmium-consulting-group">
            <a
              className="h-9 w-9 rounded-full border-2 border-white text-base text-linkedin-blue transition  duration-150 ease-in-out
               hover:bg-black hover:bg-opacity-5 hover:text-gray-500 focus:outline-none focus:ring-0"
              target="_blank"
            >
              <FontAwesomeIcon
                className=" translate-y-[0.35rem] "
                icon={faLinkedinIn}
                aria-hidden="true"
              />
            </a>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 lg:space-x-6">
          {navigation.categories.map((category) => (
            <div key={category.name} className="mb-6">
              <h5 className="my-2 font-bold text-slate-700">
                {t(category.name)}
              </h5>
              <ul className="list-none">
                {category.items.map((item) => (
                  <li key={item.name} className="my-2">
                    <a href={item.href} className="">
                      {t(item.name)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {navigation.pages.map((page) => (
            <div key={page.name} className="mb-6">
              <a href={page.href}>
                <h5 className="my-2 font-bold text-slate-700">
                  {t(page.name)}
                </h5>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 px-5 pb-4 leading-5 text-slate-500 lg:max-w-7xl">
        {/*Copyright*/}
        <div className="border-b-2 border-slate-300 pb-1">
          Looking for Recruiters? Find a Consultant by Calling (852) 3898 5500
          or send an email to{' '}
          <a href="mailto:info@osmiumcg.com">info@osmiumcg.com</a>
        </div>
        <div className="flex justify-between pt-1">
          <div>
            Osmium Consulting Group Limited ( EA Licence No. 66295 ) | D-U-N-S
            Number : 68-638-4815
          </div>
          <div className="">
            <Link href="disclaimer">
              <a className="cursor-pointer border-r-2 px-3">Disclaimer</a>
            </Link>
            <Link href="terms">
              <a className="px-3">Terms of Use</a>
            </Link>
          </div>
          <div>Hong Kong</div>
        </div>
      </div>
    </footer>
  )
}
