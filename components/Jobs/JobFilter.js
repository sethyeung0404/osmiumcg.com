import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'next-i18next'

function JobFilter() {
  const [open, setOpen] = useState(true)
  const [isHK, setIsHK] = useState(false)
  const [isSG, setIsSG] = useState(false)
  const [isJP, setIsJP] = useState(false)
  const [isFDFS, setIsFDFS] = useState(false)
  const [isTBCG, setIsTBCG] = useState(false)

  const { t } = useTranslation('careers')

  return (
    <div>
      <p className="flex w-full justify-between py-4 pr-2 text-left text-2xl">
        {t('Filter')}
      </p>
      <div className="mx-2 my-4">
        <div className="border-b border-t">
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
                          className={`${isHK ? 'bg-gray-600' : 'bg-gray-300'}
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
                          className={`${isSG ? 'bg-gray-600' : 'bg-gray-300'}
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
                    <div>
                      <Switch.Group>
                        <Switch
                          checked={isJP}
                          onChange={setIsJP}
                          className={`${isSG ? 'bg-gray-600' : 'bg-gray-300'}
                 inline-flex h-4 w-8 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
                        >
                          <span
                            aria-hidden="true"
                            className={`${
                              isJP ? 'translate-x-4' : 'translate-x-0'
                            }
                inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                        <Switch.Label
                          className={`${isJP ? 'text-gray-600' : ''} pl-2`}
                        >
                          {t('careers:JP')}
                        </Switch.Label>
                      </Switch.Group>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
        <div className="border-b">
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
        <div className="border-b">
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
                          className={`${isFDFS ? 'bg-gray-600' : 'bg-gray-300'}
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
                          className={`${isFDFS ? 'text-gray-600' : ''} pl-2`}
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
                          className={`${isTBCG ? 'bg-gray-600' : 'bg-gray-300'}
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
                          className={`${isTBCG ? 'text-gray-600' : ''} pl-2`}
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
  )
}

export default JobFilter
