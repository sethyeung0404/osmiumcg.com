import React from 'react'

function OldSectorBlock() {
  return (
    <div>
      <Link href="/specialization/financial-services">
        <a className="border border-gray-100 text-3xl font-bold uppercase leading-10 text-white hover:shadow-2xl">
          <div className="h-48 w-full overflow-hidden bg-purple-blue py-3 px-9 shadow-xl">
            <h3> {t('FDFS')} </h3>
          </div>
        </a>
      </Link>
      <Link href="/specialization/technology">
        <a className="border border-gray-100 text-3xl font-bold uppercase leading-10 text-slate-700 hover:shadow-2xl">
          <div className=" h-48 w-full overflow-hidden py-3 px-9 shadow-xl">
            <h3>{t('TBCG')}</h3>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default OldSectorBlock
