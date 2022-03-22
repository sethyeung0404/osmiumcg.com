import React from 'react'
import Image from 'next/image'

function SubPageImage1({ name, href }) {
  return (
    <div className="m-12">
      <Image src={href} width={15} height={10} layout="responsive" alt={name} />
    </div>
  )
}

export default SubPageImage1
