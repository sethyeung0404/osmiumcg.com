import { Fragment, React, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEarthAsia,
  faMagnifyingGlass,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Disclosure, Dialog, Popover, Transition } from '@headlessui/react'
import { MenuAlt4Icon, XIcon } from '@heroicons/react/outline'
import { navigation, language } from './Navigation'
import ClassNames from '../../utils/ClassNames'

export default function SideNav() {
  const [open, setOpen] = useState(false)
  let { t } = useTranslation()
  let router = useRouter()

  return (
    <div className="bg-white">
      {/* Sidebar */}
      <Transition.Root
        style={{ fontFamily: 'Lato, Noto Sans TC, Noto Sans SC' }}
        show={open}
        as={Fragment}
      >
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex lg:hidden"
          onClose={setOpen}
        >
          {/* Mask Filter for background content */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          {/* Dropdown & Dropdown Animation */}
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-1000"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in-out duration-700"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            {/* Dropdown Sidebar */}
            <div className="relative z-20 flex w-full flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="mx-auto w-10/12">
                {/* Links with submenu */}
                <div className="translate-y- mt-16 pt-6 pb-2">
                  {navigation.categories.map((category) => (
                    <Disclosure key={category.name}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className="flex w-full justify-between space-y-4 px-4 py-2 text-left font-medium 
                            text-gray-900 hover:text-zinc-500 hover:duration-500"
                          >
                            <span>{t('common:' + category.name)}</span>
                            <FontAwesomeIcon
                              icon={faChevronUp}
                              className={`${
                                open ? '' : 'rotate-180'
                              } h-5 w-5 text-purple-500`}
                            />
                          </Disclosure.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-500"
                            enterFrom="-translate-y-8 opacity-0"
                            enterTo="translate-y-0 opacity-500"
                            leave="transition-opacity duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Disclosure.Panel className="pl-10 pb-3">
                              <ul
                                role="list"
                                aria-labelledby={`${category.id}-heading-mobile`}
                                className="flex flex-col space-y-6"
                              >
                                {category.items.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-2 block p-2 text-gray-500 hover:text-zinc-400 hover:duration-500"
                                    >
                                      {t('common:' + item.name)}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>

                {/* Links without submenu */}
                <div className="space-y-4 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block px-2 py-3 font-medium text-gray-900"
                      >
                        {t('common:' + page.name)}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Icons */}
                <div className="space-y-4 border-t border-gray-200 py-6 px-4 text-base font-medium">
                  {/* Sign In */}
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>

                  {/* Search */}
                  <div className="flex w-full space-x-2 text-left font-medium text-gray-900 hover:text-zinc-500">
                    <div>
                      <Link href="#" alt="">
                        <a className="text-gray-400 hover:text-gray-500">
                          <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </a>
                      </Link>
                    </div>
                    <div>Search</div>
                  </div>

                  {/* Facebook Icon*/}
                  <div className="flex w-full space-x-2 text-left font-medium text-gray-900 hover:text-zinc-500">
                    <div>
                      <Link href="https://www.facebook.com/Osmium-Consulting-Group-106189320975122/">
                        <a
                          className="text-facebook-blue hover:text-gray-500"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={faFacebookF}
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </a>
                      </Link>
                    </div>
                    <div>Facebook</div>
                  </div>

                  {/* LinkedIn Icon*/}
                  <div className="flex w-full space-x-2 text-left font-medium text-gray-900 hover:text-zinc-500">
                    <div>
                      <Link href="https://www.linkedin.com/company/osmium-consulting-group">
                        <a
                          className="text-linkedin-blue hover:text-gray-500"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </a>
                      </Link>
                    </div>
                    <div>LinkedIn</div>
                  </div>

                  {/* Translations */}
                  <div className="flow-root">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            key="Translations"
                            className="flex w-full justify-between space-y-4 text-left 
                            text-gray-900 hover:text-zinc-500 hover:duration-500"
                          >
                            <div className="flex space-x-2 ">
                              <div>
                                <FontAwesomeIcon
                                  icon={faEarthAsia}
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </div>
                              <div>{t('common:Language')}</div>
                            </div>
                            <FontAwesomeIcon
                              icon={faChevronUp}
                              className={`${
                                open ? '' : 'rotate-180'
                              } h-5 w-5 text-purple-500`}
                            />
                          </Disclosure.Button>
                          <Transition
                            enter="transition ease-out duration-500"
                            enterFrom="-translate-y-1/3 opacity-0"
                            enterTo="translate-y-0 opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Disclosure.Panel className="pl-10 pt-1">
                              <ul
                                role="list"
                                aria-labelledby="language-heading-mobile"
                                className="flex flex-col space-y-5"
                              >
                                {language.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <Link
                                      href={router.asPath}
                                      locale={item.locale}
                                    >
                                      <a
                                        onClick={() => setOpen(false)}
                                        className="-m-2 block p-2 text-gray-500 hover:text-zinc-400 hover:duration-500"
                                      >
                                        {item.name}
                                      </a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Navbar*/}
      <header className="sticky-top fixed z-50 w-full bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/*Bar Icons */}
              <button
                type="button"
                className={`${
                  open
                    ? 'hidden'
                    : 'rounded-md bg-white p-2 text-gray-400 transition duration-1000 ease-in-out lg:hidden'
                }`}
                onClick={() => setOpen(true)}
              >
                <MenuAlt4Icon className="h-6 w-6" aria-hidden="true" />
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
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div
                className="absolute left-1/2 flex -translate-x-1/2 
              lg:static lg:left-0 lg:translate-x-0"
              >
                <Link href="/">
                  <a className="inline-flex">
                    <Image
                      src="/img/nav/logo.png"
                      alt="OCG Logo"
                      width={128}
                      height={48}
                      layout="fixed"
                    />
                  </a>
                </Link>
              </div>

              {/* Navbar menus ( left ) */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={ClassNames(
                                open
                                  ? 'border-ocg-blue text-blue-600'
                                  : 'border-transparent text-gray-700 hover:text-blue-600',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {t('common:' + category.name)}
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
                            <Popover.Panel className="relative z-10 -ml-4 px-2 text-sm">
                              <div className="overflow-hidden">
                                <div className=" absolute left-0 mt-[65px] -translate-x-32 gap-6 bg-white p-3">
                                  <ul role="list" className="w-80 space-y-3 ">
                                    {category.items.map((item) => (
                                      <li key={item.name} className="">
                                        <a
                                          href={item.href}
                                          className="-m-3 flex items-start py-4 px-6 hover:bg-slate-50 hover:text-blue-600"
                                        >
                                          {t('common:' + item.name)}
                                        </a>
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
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                    >
                      {t('common:' + page.name)}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              {/* Navbar menus ( right ) */}
              <div className="ml-auto hidden h-full items-center space-x-6 lg:flex lg:justify-end">
                {/* Sign In */}
                <div className="ml-4 inline-flex">
                  <a
                    href="https://learning.osmiumcg.com/"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {t('common:SignIn')}
                  </a>
                </div>

                {/* Search */}
                <div className="ml-4">
                  <Link href="#" alt="">
                    <a className="text-gray-400 hover:text-gray-500">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        aria-hidden="true"
                      />
                    </a>
                  </Link>
                </div>

                {/* Facebook Icon*/}
                <div className="ml-2">
                  <Link href="https://www.facebook.com/Osmium-Consulting-Group-106189320975122/">
                    <a
                      className="text-facebook-blue hover:text-gray-500"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
                    </a>
                  </Link>
                </div>

                {/* LinkedIn Icon*/}
                <div className="ml-2">
                  <Link href="https://www.linkedin.com/company/osmium-consulting-group">
                    <a
                      className="text-linkedin-blue hover:text-gray-500"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
                    </a>
                  </Link>
                </div>

                {/* Translation */}
                <Popover className="ml-2 ">
                  {({ Open }) => (
                    <>
                      <div className="relative flex">
                        <Popover.Button
                          className={ClassNames(
                            open
                              ? 'border-2 border-ocg-blue text-blue-600'
                              : 'border-transparent text-gray-700 hover:text-blue-600',
                            'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
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
                        <Popover.Panel className="relative z-10 -ml-4 px-2 text-sm">
                          <div className="overflow-hidden">
                            <div className=" absolute right-0 mt-6 gap-6 bg-white p-3">
                              <ul role="list" className="w-40 space-y-3 ">
                                {language.map((item) => (
                                  <li key={item.name} className="">
                                    <Link
                                      href={router.asPath}
                                      locale={item.locale}
                                    >
                                      <a className="-m-3 flex items-start py-4 px-6 hover:bg-slate-50 hover:text-blue-600">
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
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}