import React from 'react'

function SignupForm() {
  return (
    <>
      <div className="mt-6">
        <h1 className="text-gray-500 dark:text-gray-300">
          Select type of account
        </h1>

        <div className="mt-3 md:-mx-2 md:flex md:items-center">
          <button className="flex w-full justify-center rounded-md bg-blue-500 px-6 py-3 text-white focus:outline-none md:mx-2 md:w-auto">
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

            <span className="mx-2">client</span>
          </button>

          <button className="mt-4 flex w-full justify-center rounded-md border border-blue-500 px-6 py-3 text-blue-500 focus:outline-none dark:border-blue-400 dark:text-blue-400 md:mx-2 md:mt-0 md:w-auto">
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

            <span className="mx-2">worker</span>
          </button>
        </div>
      </div>

      <form className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
            First Name
          </label>
          <input
            type="text"
            placeholder="John"
            className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
            Last name
          </label>
          <input
            type="text"
            placeholder="Snow"
            className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
            Phone number
          </label>
          <input
            type="text"
            placeholder="XXX-XX-XXXX-XXX"
            className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
            Email address
          </label>
          <input
            type="email"
            placeholder="johnsnow@example.com"
            className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
          />
        </div>

        <button className="flex transform items-center justify-between rounded-md bg-blue-500 px-6 py-3 text-sm capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          <span>Sign Up </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 rtl:-scale-x-100"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </>
  )
}

export default SignupForm
