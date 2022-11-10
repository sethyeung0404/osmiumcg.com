import React from 'react'
import clsx from 'clsx'

export default function Divider({ center, colour }) {
  return (
    <>
      <div
        className={clsx(
          center ? 'mx-auto' : '',
          colour === 'blue' ? 'bg-purple-blue' : '',
          colour === 'pink' ? 'bg-pink-500' : '',
          colour === 'purple' ? 'bg-purple-500' : '',
          colour === 'red' ? 'bg-red-500' : '',
          colour === 'yellow' ? 'bg-yellow-500' : '',
          'm-3 h-1 w-20	'
        )}
      ></div>
    </>
  )
}
