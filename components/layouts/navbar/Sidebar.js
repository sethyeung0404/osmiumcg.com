import { Fragment, React } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Disclosure, Dialog, Transition } from '@headlessui/react'
import { faEarthAsia, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { navigation, language } from '../../../data/Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Sidebar({ router, open, setOpen, t, i18n }) {
  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          open={open}
          onClose={() => setOpen(false)}
          className="fixed inset-0 z-40 flex lg:hidden"
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
            <div className="relative z-20 flex w-full flex-col overflow-y-auto bg-white pb-12 text-left font-medium shadow-xl">
              <div className="mx-auto w-10/12">
                {/* Links with submenu */}
                <div className="translate-y- mt-16 pt-6 pb-2">
                  {navigation.categories.map((category) => (
                    <Disclosure key={category.name}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={`${
                              open ? 'text-ocg-lightblue' : 'text-gray-900'
                            } flex w-full justify-between space-y-4 px-4 py-2 hover:text-ocg-lightblue hover:duration-200`}
                          >
                            <span>{t(category.name)}</span>
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
                            <Disclosure.Panel className="pb-3">
                              <ul
                                role="list"
                                aria-labelledby={`${category.id}-heading-mobile`}
                                className="flex flex-col"
                              >
                                {category.items.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <Link
                                      href={item.href}
                                      locale={i18n.language}
                                    >
                                      <a
                                        onClick={() => setOpen(false)}
                                        className="my-0.5 ml-4 block rounded-xl p-2 pl-4 text-gray-500 hover:bg-stone-50 hover:text-ocg-lightblue hover:duration-200"
                                      >
                                        {t(item.name)}
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
                  ))}
                </div>

                {/* Links without submenu */}
                <div className="space-y-4 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => {
                    if (page.name == 'News' || page.name == 'Careers') {
                      return (
                        <div key={page.name} className="flow-root">
                          <a
                            href={page.href}
                            rel="noreferrer"
                            target="_blank"
                            onClick={() => setOpen(false)}
                            className="-m-2 block px-2 py-3 font-medium text-gray-900 hover:text-ocg-lightblue hover:duration-200"
                          >
                            {t(page.name)}
                          </a>
                        </div>
                      )
                    } else {
                      return (
                        <div key={page.name} className="flow-root">
                          <Link href={page.href} locale={i18n.language}>
                            <a
                              onClick={() => setOpen(false)}
                              className="-m-2 block px-2 py-3 font-medium text-gray-900 hover:text-ocg-lightblue hover:duration-200"
                            >
                              {t(page.name)}
                            </a>
                          </Link>
                        </div>
                      )
                    }
                  })}
                </div>

                {/* Icons */}
                <div className="space-y-4 border-t border-gray-200 py-6 px-4 text-base font-medium ">
                  {/* Facebook Icon*/}
                  <div className="group text-left font-medium">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/Osmium-Consulting-Group-106189320975122/"
                      rel="noreferrer"
                    >
                      <div className="flex w-full space-x-2">
                        <div>
                          <FontAwesomeIcon
                            className="h-5 w-5 text-facebook-blue group-hover:text-ocg-lightblue group-hover:duration-200"
                            icon={faFacebookF}
                            aria-hidden="true"
                          />
                        </div>
                        <div className="text-gray-900 group-hover:text-ocg-lightblue">
                          Facebook
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* LinkedIn Icon*/}
                  <div className="group ">
                    <a
                      href="https://www.linkedin.com/company/osmium-consulting-group"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex w-full space-x-2 text-left font-medium">
                        <div>
                          <FontAwesomeIcon
                            className="h-5 w-5 text-linkedin-blue group-hover:text-ocg-lightblue group-hover:duration-200"
                            icon={faLinkedin}
                            aria-hidden="true"
                          />
                        </div>
                        <div className="text-gray-900 group-hover:text-ocg-lightblue">
                          LinkedIn
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Notion Icon*/}
                  <div className="text-gray-900 hover:text-ocg-lightblue">
                    <a
                      rel="noreferrer"
                      href="https://osmiumcg.notion.site/OCG-Public-Wiki-f0538b6b26d449039b937c6a0f52ef02"
                      target="_blank"
                    >
                      <div className="flex w-full space-x-2 text-left font-medium">
                        <div className="my-auto h-5 w-5 p-0.5">
                          <Image
                            alt="Notion Logo"
                            height={100}
                            width={100}
                            src="/img/nav/notion-logo.png"
                            layout="responsive"
                          />
                        </div>
                        <div className="">Our Notion</div>
                      </div>
                    </a>
                  </div>

                  {/* Translations */}
                  <div className="flow-root">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            key="Translations"
                            className="w-full space-y-4 text-left"
                          >
                            <div className="flex justify-between text-gray-900 hover:text-ocg-lightblue">
                              <div className="flex space-x-2">
                                <div>
                                  <FontAwesomeIcon
                                    icon={faEarthAsia}
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="">{t('Language')}</div>
                              </div>
                              <div>
                                <FontAwesomeIcon
                                  icon={faChevronUp}
                                  className={`${
                                    open ? '' : 'rotate-180'
                                  } h-5 w-5 text-purple-500`}
                                />
                              </div>
                            </div>
                          </Disclosure.Button>
                          <Transition
                            enter="transition ease-out duration-500"
                            enterFrom="-translate-y-1/3 opacity-0"
                            enterTo="translate-y-0 opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Disclosure.Panel className="pl-10 pt-3">
                              <ul
                                role="list"
                                aria-labelledby="language-heading-mobile"
                                className="flex flex-col space-y-4"
                              >
                                {language.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <Link
                                      href={router.asPath}
                                      locale={item.locale}
                                    >
                                      <a
                                        onClick={() => setOpen(false)}
                                        className="text-gray-800 hover:text-zinc-400"
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

                  <div className="">
                    <Link href="/contact-us">
                      <a className="self-center">
                        <button className="focus:shadow-outline h-8 w-full rounded-lg bg-red-400 font-semibold text-white transition-colors duration-150 hover:bg-indigo-800">
                          {t('Contact')}
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </div>
  )
}

export default Sidebar
