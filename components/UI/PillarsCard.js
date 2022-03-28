import React from 'react'
import Divider from './Divider'

function PillarsCard({ title, colour, list1, list2, list3, list4 }) {
  return (
    <div className="m-1 overflow-hidden rounded border-2 border-gray-100 p-3 shadow-lg">
      <div className="px-2 py-4">
        <p className="text-2xl font-bold">{title}</p>
        <Divider colour={colour} />
        <div className="px-3 text-sm">
          <ul className="list-inside list-disc space-y-3">
            {list1 && <li>{list1}</li>}
            {list2 && <li>{list2}</li>}
            {list3 && <li>{list3}</li>}
            {list4 && <li>{list4}</li>}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PillarsCard
