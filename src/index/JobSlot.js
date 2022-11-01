import React from 'react'
import { Jobs } from '../../data/JobList'

function JobSlot() {
  return (
    <>
      {Jobs.map((item) => (
        <div
          key={item.title}
          className="col-span-3 overflow-hidden rounded-2xl border bg-white px-6 py-8 text-left hover:shadow-md md:col-span-1 lg:max-w-sm "
        >
          <a href={item.href}>
            <p className="text-lg font-medium text-indigo-500 hover:underline">
              {item.title}
            </p>
            <p className="text-base">Osmium Consulting Group Limited</p>
            <p className="my-4 font-bold">{item.area}</p>
            <div className="my-4 text-sm">
              <ul className="ml-4 list-disc">
                {item.tags.map((tags) => (
                  <li key={tags.text}>{tags.text}</li>
                ))}
              </ul>
            </div>
            <p className="text-slate-500 text-base">1 day ago</p>
          </a>
        </div>
      ))}
    </>
  )
}

export default JobSlot
