import { Disclosure, Transition } from '@headlessui/react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LearnMoreButton from '@/Buttons/LearnMoreButton'

export default function InhouseJobs() {
  const [open, setOpen] = useState(false)
  const [isHK, setIsHK] = useState(false)
  const [isSG, setIsSG] = useState(false)
  const [isFDFS, setIsFDFS] = useState(false)
  const [isTBCG, setIsTBCG] = useState(false)

  return (
    <>
      <div className="grid grid-cols-7">
        <div className="col-span-7 md:col-span-2">
          <Disclosure>
            <Disclosure.Button className="flex w-full justify-between py-4 pr-2 text-left text-2xl">
              按以下條件篩選
              <div className="md:hidden">
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className={`${
                    open ? '' : 'rotate-180'
                  } h-5 w-5 text-slate-400`}
                />
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <div className="mx-2 my-4">
                  <div className="border-b-[1px] border-t-[1px]">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between py-4 text-left">
                            工作地點
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
                                  <Switch.Label className="pl-2">
                                    Hong Kong
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
                                  <Switch.Label className="pl-2">
                                    Singapore
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
                            關鍵字
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
                                placeholder="Search Keywords"
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
                            團隊
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
                                        isFDFS
                                          ? 'translate-x-4'
                                          : 'translate-x-0'
                                      }
                        inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                    />
                                  </Switch>
                                  <Switch.Label className="pl-2">
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
                                        isTBCG
                                          ? 'translate-x-4'
                                          : 'translate-x-0'
                                      }
                        inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                    />
                                  </Switch>
                                  <Switch.Label className="pl-2">
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
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        </div>
        <div className="col-span-7 md:col-span-5 md:border-l-[1px] md:pl-4">
          <div className="grid grid-cols-1 space-y-6">
            <div className="m-2 border-b-2 py-2">
              <div>
                <p className="text-2xl">Recruitment Consultant</p>
                <p className="text-lg">Hong Kong</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base">Hello</p>
                <LearnMoreButton href="" />
              </div>
            </div>
            <div className="m-2 border-b-2 py-2">
              <div>
                <p className="text-2xl">Recruitment Consultant</p>
                <p className="text-lg">Hong Kong</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base">Hello</p>
                <LearnMoreButton href="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
