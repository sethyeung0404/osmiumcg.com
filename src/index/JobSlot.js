import React from 'react'
import { Jobs } from '../../data/JobList'

function JobSlot() {
  return (
    <>
      {Jobs.map((item) => (
        <div
          key={item.title}
          style={{ fontFamily: 'Roboto' }}
          className="col-span-3 overflow-hidden rounded-md border bg-white px-6 py-8 text-left hover:shadow-xl md:col-span-1 lg:max-w-sm "
        >
          <a href={item.href}>
            <p className="text-xl font-medium text-indigo-500 hover:underline">
              {item.title}
            </p>
            <p className="">Osmium Consulting Group Limited</p>
            <p className="my-4 font-bold">{item.area}</p>
            <div className="my-4">
              <ul className="list-inside list-disc">
                {item.tags.map((tags) => (
                  <li key={tags.text}>{tags.text}</li>
                ))}
              </ul>
            </div>
            <p className="text-slate-500">1 day ago</p>
          </a>
        </div>
      ))}
    </>
  )
}

export default JobSlot
