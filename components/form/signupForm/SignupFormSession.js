import React, { useState } from 'react'
import CandidateSignupForm from './CandidateSignupForm'
import clsx from 'clsx'

function SignupFormSession() {
  const [candidate, setCandidate] = useState(true)

  return (
    <section className="bg-white text-left dark:bg-gray-900">
      <div className="flex justify-center">
        <div className="mx-auto flex w-full items-center p-8 ">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <h1 className="text-4xl font-semibold capitalize text-gray-800 dark:text-white">
                Find IT jobs in Hong Kong
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Whether you’re a Business Analyst looking for your next career
                move, or you’re an IT Manager searching for available IT jobs in
                Hong Kong, OCG has the experience and industry contacts to help
                you find the right IT jobs on a permanent basis across a range
                of IT and technology disciplines. Our recruitment experts'
                mission is to help you find tech jobs that are both fulfilling
                and beneficial to your career ambitions. We are committed to
                ensure a smooth transition into your IT dream career.
              </p>
            </div>

            <div className="col-span-6 w-full ">
              <div className="my-6">
                <div className="mt-3 md:-mx-2 md:flex md:items-center">
                  {/* Candidate Button */}
                  <button
                    className={clsx(
                      candidate
                        ? 'bg-blue-500 text-white'
                        : 'border-blue-500 text-blue-500',
                      'mt-4 flex w-full justify-center rounded-md border px-6 py-3 focus:outline-none dark:border-blue-400 dark:text-blue-400 md:mx-2 md:mt-0 md:w-auto'
                    )}
                    onClick={() => setCandidate(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="mx-2">Candidate</span>
                  </button>

                  {/* Employer Button */}
                  <button
                    className={clsx(
                      candidate
                        ? 'border-blue-500 text-blue-500'
                        : 'bg-blue-500 text-white',
                      'mt-4 flex w-full justify-center rounded-md border px-6 py-3 focus:outline-none dark:border-blue-400 dark:text-blue-400 md:mx-2 md:mt-0 md:w-auto'
                    )}
                    onClick={() => setCandidate(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span className="mx-2">Employer</span>
                  </button>
                </div>
              </div>

              <CandidateSignupForm
                candidate={candidate}
                setCandidate={setCandidate}
                scriptUrl={scriptUrl}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignupFormSession
