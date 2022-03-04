import React from 'react'
import ClassNames from '../../utils/ClassNames'

export default function BlueDivider({ center }) {
  return (
    <>
      <div
        className={ClassNames(
          center ? 'mx-auto' : '',
          'm-3 h-1 w-20	bg-purple-blue'
        )}
      ></div>
    </>
  )
}
