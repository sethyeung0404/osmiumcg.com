import { Disclosure, Transition } from '@headlessui/react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LearnMoreButton from '@/Buttons/LearnMoreButton'
import { useTranslation } from 'next-i18next'

export default function InhouseJobs() {
  const [open, setOpen] = useState(true)
  const [isHK, setIsHK] = useState(false)
  const [isSG, setIsSG] = useState(false)
  const [isFDFS, setIsFDFS] = useState(false)
  const [isTBCG, setIsTBCG] = useState(false)

  const { t } = useTranslation('careers')

  return (
    <>
      <div className="grid grid-cols-7">
        <div className="col-span-7 md:col-span-2">
          <p className="flex w-full justify-between py-4 pr-2 text-left text-2xl">
            {t('Filter')}
          </p>
          <div className="mx-2 my-4">
            <div className="border-b-[1px] border-t-[1px]">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between py-4 text-left">
                      {t('Location')}
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className={`${
                          open ? '' : 'rotate-180'
                        } h-5 w-5 text-slate-500`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="space-y-3 pb-4 text-gray-500">
                        <div>
                          <Switch.Group>
                            <Switch
                              checked={isHK}
                              onChange={setIsHK}
                              className={`${
                                isHK ? 'bg-gray-600' : 'bg-gray-300'
                              }
                         inline-flex h-4 w-8 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
                            >
                              <span
                                aria-hidden="true"
                                className={`${
                                  isHK ? 'translate-x-4' : 'translate-x-0'
                                }
                        inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                              />
                            </Switch>
                            <Switch.Label
                              className={`${isHK ? 'text-gray-600' : ''} pl-2`}
                            >
                              {t('careers:HK')}
                            </Switch.Label>
                          </Switch.Group>
                        </div>
                        <div>
                          <Switch.Group>
                            <Switch
                              checked={isSG}
                              onChange={setIsSG}
                              className={`${
                                isSG ? 'bg-gray-600' : 'bg-gray-300'
                              }
                         inline-flex h-4 w-8 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
                            >
                              <span
                                aria-hidden="true"
                                className={`${
                                  isSG ? 'translate-x-4' : 'translate-x-0'
                                }
                        inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                              />
                            </Switch>
                            <Switch.Label
                              className={`${isSG ? 'text-gray-600' : ''} pl-2`}
                            >
                              {t('careers:SG')}
                            </Switch.Label>
                          </Switch.Group>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="border-b-[1px]">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between py-4 text-left">
                      {t('Keyword')}
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className={`${
                          open ? '' : 'rotate-180'
                        } h-5 w-5 text-slate-500`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="pb-4 text-gray-500">
                        <input
                          className="w-full items-center border p-2 placeholder-gray-400"
                          type="text"
                          placeholder={t('SearchKeyword')}
                        />
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="border-b-[1px]">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between py-4 text-left">
                      {t('Teams')}
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className={`${
                          open ? '' : 'rotate-180'
                        } h-5 w-5 text-slate-500`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="space-y-3 pb-4 text-gray-500">
                        <div>
                          <Switch.Group>
                            <Switch
                              checked={isFDFS}
                              onChange={setIsFDFS}
                              className={`${
                                isFDFS ? 'bg-gray-600' : 'bg-gray-300'
                              }
                         inline-flex h-4 w-8 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
                            >
                              <span
                                aria-hidden="true"
                                className={`${
                                  isFDFS ? 'translate-x-4' : 'translate-x-0'
                                }
                        inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                              />
                            </Switch>
                            <Switch.Label
                              className={`${
                                isFDFS ? 'text-gray-600' : ''
                              } pl-2`}
                            >
                              FDFS
                            </Switch.Label>
                          </Switch.Group>
                        </div>
                        <div>
                          <Switch.Group>
                            <Switch
                              checked={isTBCG}
                              onChange={setIsTBCG}
                              className={`${
                                isTBCG ? 'bg-gray-600' : 'bg-gray-300'
                              }
                         inline-flex h-4 w-8 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
                            >
                              <span
                                aria-hidden="true"
                                className={`${
                                  isTBCG ? 'translate-x-4' : 'translate-x-0'
                                }
                        inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                              />
                            </Switch>
                            <Switch.Label
                              className={`${
                                isTBCG ? 'text-gray-600' : ''
                              } pl-2`}
                            >
                              TBCG
                            </Switch.Label>
                          </Switch.Group>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
        <div className="col-span-7 md:col-span-5 md:border-l-[1px] md:pl-4">
          <div className="grid grid-cols-1 space-y-6">
            <div className="m-2 flex items-end justify-between border-b-2 py-2">
              <div>
                <p className="text-2xl">Recruitment Consultant</p>
                <p className="pb-2 text-lg">Hong Kong</p>
                <p className="text-sm">
                  We’re seeking an experienced recruiter to join our Recruiting
                  team. In this role, you will have the opportunity to join an
                  amazing, robust, and agile team responsible for hiring premier
                  talent.
                </p>
              </div>
              <LearnMoreButton href="https://osmiumcg.notion.site/OCG-Job-Board-99b46a83c23947a5a9a3fbfe8fff5dfc" />
            </div>
            <div className="m-2 flex items-end justify-between border-b-2 py-2">
              <div>
                <p className="text-2xl">Recruitment Consultant</p>
                <p className="pb-2 text-lg">Hong Kong</p>
                <p className="text-sm">
                  We’re seeking an experienced recruiter to join our Recruiting
                  team. In this role, you will have the opportunity to join an
                  amazing, robust, and agile team responsible for hiring premier
                  talent.
                </p>
              </div>
              <LearnMoreButton href="https://osmiumcg.notion.site/OCG-Job-Board-99b46a83c23947a5a9a3fbfe8fff5dfc" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'careers'])),
  },
})
