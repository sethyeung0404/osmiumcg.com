import React from 'react'

function Chip({ text }) {
  return (
    <div>
      <div className="m-1 flex flex-wrap justify-center space-x-2">
        <p className="align-center ease flex w-max cursor-pointer rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-500 transition duration-300 active:bg-gray-300">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Chip
