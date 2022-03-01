import React from 'react'
import Link from 'next/link'

function SectorBlock() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-16 text-left">
      <div className="max-w-sm overflow-hidden rounded bg-purple-blue p-16 text-white shadow-lg">
        <Link href="/specialization/banking-financial-services">
          <a>
            <h3>BANKING AND FINANCIAL SERVICES</h3>
          </a>
        </Link>
      </div>
      <div className="max-w-sm overflow-hidden rounded p-16 shadow-md">
        <Link href="/specialization/tmt">
          <a>
            <h3>TMTD</h3>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SectorBlock
