import React from 'react'
import Link from 'next/link'

function SectorBlock() {
  return (
    <div className="mx-auto grid grid-cols-1 gap-10 text-left lg:grid-cols-2">
      <Link href="/specialization/banking-financial-services">
        <a className="text-3xl font-extrabold uppercase text-white hover:shadow-2xl">
          <div className="h-48 w-full overflow-hidden bg-purple-blue p-3 shadow-xl">
            <h3>Banking and Financial Services</h3>
          </div>
        </a>
      </Link>

      <Link href="/specialization/tmt">
        <a className="text-3xl font-extrabold uppercase text-slate-700 hover:shadow-2xl">
          <div className=" h-48 w-full overflow-hidden p-3 shadow-xl">
            <h3>TMT</h3>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default SectorBlock
