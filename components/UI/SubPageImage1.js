import React from 'react'
import Image from 'next/image'

function SubPageImage1({ name, href }) {
  return (
    <div className="basis-full sm:basis-1/2 sm:p-12">
      <Image
        src={href}
        width={3000}
        height={2000}
        layout="intrinsic"
        alt={name}
      />
    </div>
  )
}

export default SubPageImage1
