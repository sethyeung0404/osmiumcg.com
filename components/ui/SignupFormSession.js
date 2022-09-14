import React from 'react'
import SignupForm from './SignupForm'

function SignupFormSession() {
  return (
    <section className="bg-white text-left dark:bg-gray-900">
      <div className="flex justify-center">
        <div className="mx-auto flex w-full items-center p-8 ">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <h1 className="text-2xl font-semibold capitalize tracking-wider text-gray-800 dark:text-white">
                Find IT jobs in Hong Kong that are right for your career
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
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignupFormSession
