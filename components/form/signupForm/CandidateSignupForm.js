import React, { useState } from 'react'
import { industries } from 'data/Industries'
import { countries } from 'data/Countries'
import { useForm } from 'react-hook-form'

function CandidateSignupForm({ candidate, setCandidate, scriptUrl }) {
  const { register, handleSubmit } = useForm()

  const onSubmit = () => {
    const data = new FormData(document.getElementById('google-sheet'))

    fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: data,
    })
      .then((res) => {
        console.log('SUCCESSFULLY SUBMITTED')
        window.alert('SUCCESSFULLY SUBMITTED')
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      {/* Candidate interface */}
      {candidate && (
        <div>
          <form
            id="google-sheet"
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="col-span-2 md:col-span-1">
              <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                First name *
              </label>
              <input
                className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                placeholder="John"
                type="text"
                {...register('firstName', {
                  required: true,
                })}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                Last name *
              </label>
              <input
                className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                placeholder="WONG"
                type="text"
                {...register('lastName', {
                  required: true,
                })}
              />
            </div>

            <div className="col-span-2">
              <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                Company name
              </label>
              <input
                className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                placeholder="OCG Recruitment Ltd."
                type="text"
                {...register('company')}
              />
            </div>

            <div className="col-span-2">
              <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                Your title
              </label>
              <input
                className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                placeholder="Analyst Programmer"
                type="text"
                {...register('title')}
              />
            </div>

            <div className="col-span-2">
              <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                Email address
              </label>
              <input
                className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                placeholder="john.wong@osmiumcg.com"
                type="email"
                {...register('email')}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                Phone number
              </label>
              <input
                className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                placeholder="852-3898-5500"
                type="text"
                {...register('number')}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                Country or region *
              </label>
              <select
                {...register('country')}
                className="inline-flex w-full rounded-md border border-gray-200 bg-white py-3 px-4 text-gray-700  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
              >
                <option value="">Select</option>
                {countries.map((country) => (
                  <option value={country.name} key={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-2">
              <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                Industry
              </label>
              <select
                {...register('industry')}
                className="inline-flex w-full rounded-md border border-gray-200 bg-white py-3 px-4 text-gray-700  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
              >
                <option value="">Select</option>
                {industries.map((industry) => (
                  <option
                    className=""
                    value={industry.name}
                    key={industry.name}
                  >
                    {industry.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex  w-full justify-end	md:col-span-2">
              <button className="flex transform items-center justify-between rounded-md bg-blue-500 px-6 py-3 text-sm tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <input type="submit" />
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
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default CandidateSignupForm
