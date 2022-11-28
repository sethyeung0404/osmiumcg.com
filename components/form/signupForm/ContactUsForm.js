import { useForm } from 'react-hook-form'

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(JSON.stringify(data))

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-5">
              {/* first name */}
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  {...register('firstName')}
                  placeholder="First Name"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              {/* last name */}
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register('lastName')}
                  placeholder="Last Name"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              {/* job title */}
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Job Title
                </label>
                <input
                  type="text"
                  {...register('jobTitle')}
                  placeholder="Job Title"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              {/* mobile number */}
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="text"
                  {...register('mobileNumber')}
                  placeholder="85238985500"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              {/* email */}
              <div className="col-span-6 sm:col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="abc@osmiumcg.com"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              {/* country */}
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  {...register('country')}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-1.5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="China">China</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Japan">Japan</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Taiwan">Taiwan</option>
                </select>
              </div>

              <div className="col-span-6">
                <fieldset>
                  <legend className="contents text-base font-medium text-gray-900">
                    Enquiry
                  </legend>
                  <p className="text-sm text-gray-500">
                    I want to know about...
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="new-job-opportunities"
                        name="enquiry"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="new-job-opportunities"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        New Job Opportunities
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="recruitment-services"
                        name="enquiry"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="recruitment-services"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Recruitment Services
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="hr-and-payroll-solutions"
                        name="enquiry"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="hr-and-payroll-solutions"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        HR & Payroll Solutions
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="others"
                        name="enquiry"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="others"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Others
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            WhatsApp Us
          </button>
        </div>
      </form>
    </div>
  )
}
