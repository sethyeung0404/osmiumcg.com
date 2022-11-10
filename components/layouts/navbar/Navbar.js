import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  faEarthAsia,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Popover, Transition } from '@headlessui/react'
import { navigation, language } from '../../../data/Navigation'
import { useScrollPosition } from '../../../hooks/useScrollPosition'
import clsx from 'clsx'

function Navbar({ router, open, setOpen, t, i18n }) {
  const scrollPosition = useScrollPosition()

  return (
    <header
      className={clsx(
        scrollPosition ? 'shadow' : 'py-2 shadow-none',
        'sticky-top fixed z-50 w-full bg-white'
      )}
    >
      <nav aria-label="Top" className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div
          className={clsx(
            scrollPosition
              ? 'h-16 transition-height duration-75 ease-linear'
              : 'h-[68px] transition-height duration-75 ease-linear',
            'flex items-center'
          )}
        >
          {/*Bar Icons & Search Icons in mobile view*/}
          <div className="flex w-full items-center justify-between lg:hidden">
            <div>
              <button
                type="button"
                className={`${
                  open
                    ? 'hidden'
                    : 'rounded-md bg-white p-2 text-gray-400 transition duration-1000 ease-in-out lg:hidden'
                }`}
                onClick={() => setOpen(true)}
              >
                <Bars2Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${
                  open
                    ? 'rounded-md bg-white p-2 text-gray-400 lg:hidden'
                    : 'hidden'
                }`}
                onClick={() => setOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mr-2">
              <Link href="#" alt="">
                <a className="text-gray-400 hover:text-gray-500 hover:duration-300">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    aria-hidden="true"
                  />
                </a>
              </Link>
            </div>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 flex h-12 w-32 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0">
            <Link href="/" locale={i18n.language}>
              <a className="inline-flex">
                <Image src="/img/nav/logo.png" alt="OCG Logo" layout="fill" />
              </a>
            </Link>
          </div>

          {/* Navbar menus ( left ) */}
          <Popover.Group className="hidden text-base font-medium lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full space-x-8 ">
              {navigation.categories.map((category) => (
                <Popover key={category.name} className="flex">
                  {({ open }) => (
                    <>
                      <div className="relative flex">
                        <Popover.Button
                          className={clsx(
                            open
                              ? 'border-ocg-blue text-ocg-lightblue'
                              : 'border-transparent text-gray-700 hover:text-ocg-lightblue',
                            '-mb-px flex items-center border-b-2 pt-px transition-colors duration-200 ease-out hover:border-ocg-blue focus:outline-none'
                          )}
                        >
                          {t(category.name)}
                        </Popover.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel>
                          <Popover.Button className="relative z-10 -ml-4 px-2 text-base">
                            <div className="overflow-hidden">
                              <div className="absolute left-0 mt-12 -translate-x-32 gap-6 rounded-2xl border bg-neutral-100 p-3 shadow-lg">
                                <ul role="list" className="w-60 space-y-3">
                                  {category.items.map((item) => (
                                    <li key={item.name} className="">
                                      <Link
                                        href={item.href}
                                        locale={i18n.language}
                                      >
                                        <a
                                          onClick={() => setOpen(false)}
                                          className="flex items-start rounded-2xl py-2 px-4 hover:bg-stone-50 hover:text-ocg-lightblue"
                                        >
                                          {t(item.name)}
                                        </a>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </Popover.Button>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              ))}

              {navigation.pages.map((page) => {
                if (page.name == 'News' || page.name == 'Careers') {
                  return (
                    <a
                      key={page.name}
                      href={page.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center border-b-2 border-transparent text-gray-700 transition-colors duration-200 ease-out hover:border-ocg-blue hover:text-zinc-500"
                    >
                      {t(page.name)}
                    </a>
                  )
                } else {
                  return (
                    <Link
                      key={page.name}
                      href={page.href}
                      locale={i18n.language}
                    >
                      <a className="flex items-center border-b-2 border-transparent text-gray-700 transition-colors duration-200 ease-out hover:border-ocg-blue hover:text-zinc-500">
                        {t(page.name)}
                      </a>
                    </Link>
                  )
                }
              })}
            </div>
          </Popover.Group>

          {/* Navbar menus ( right ) */}
          <div className="ml-auto hidden h-full items-center space-x-6 text-base font-medium text-gray-900 hover:text-zinc-500 hover:duration-500 lg:flex lg:justify-end">
            {/* Search */}
            <div className="ml-4">
              <Link href="#" alt="">
                <a className="text-gray-400 hover:text-gray-500 hover:duration-300">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    aria-hidden="true"
                  />
                </a>
              </Link>
            </div>

            {/* Facebook Icon*/}
            <div className="ml-2">
              <a
                href="https://www.facebook.com/Osmium-Consulting-Group-106189320975122/"
                className="text-facebook-blue hover:text-gray-500"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
              </a>
            </div>

            {/* LinkedIn Icon*/}
            <div className="ml-2">
              <a
                href="https://www.linkedin.com/company/osmium-consulting-group"
                className="text-linkedin-blue hover:text-gray-500"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              </a>
            </div>

            {/* Notion Icons*/}
            <div className="ml-2 w-4 ">
              <a
                rel="noreferrer"
                href="https://osmiumcg.notion.site/OCG-Public-Wiki-f0538b6b26d449039b937c6a0f52ef02"
                className="text-black hover:text-gray-500"
                target="_blank"
              >
                <Image
                  alt="Notion Logo"
                  height={100}
                  width={100}
                  src="/img/nav/notion-logo.png"
                  layout="responsive"
                />
              </a>
            </div>

            {/* Translation */}
            <Popover className="ml-2 ">
              {({ Open }) => (
                <>
                  <div className="relative flex">
                    <Popover.Button
                      className={clsx(
                        open
                          ? 'border-2 border-ocg-blue text-blue-600'
                          : 'border-transparent text-gray-700 hover:text-zinc-500',
                        'relative z-10 -mb-px flex items-center border-b-2 pt-px text-base font-medium transition-colors duration-200 ease-out'
                      )}
                    >
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faEarthAsia} />
                        <div className="pl-1 text-xs">{router.locale}</div>
                      </div>
                    </Popover.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="relative z-10 -ml-4 px-2 text-base">
                      <div className="overflow-hidden">
                        <div className=" absolute right-0 mt-6 gap-6 bg-white p-3">
                          <ul role="list" className="w-40 space-y-3 ">
                            {language.map((item) => (
                              <li key={item.name} className="">
                                <Link href={router.asPath} locale={item.locale}>
                                  <a className="-m-3 flex items-start py-3 px-6 hover:bg-slate-50 hover:text-blue-600">
                                    {item.name}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* contact-us */}
            <div className="ml-4 inline-flex h-full border-b-2 border-transparent hover:border-ocg-blue">
              <Link href="/contact-us">
                <a className="self-center">
                  <button className="my-4 rounded-full bg-red-400 py-2 px-4 font-semibold text-white hover:bg-red-500 hover:duration-200">
                    {t('Contact')}
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
