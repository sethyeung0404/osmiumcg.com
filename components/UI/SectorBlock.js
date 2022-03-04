import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export default function SectorBlock() {
  let { t } = useTranslation()

  return (
    <div className="mx-auto grid grid-cols-1 gap-8 text-left md:grid-cols-2">
      <Link href="/specialization/banking-financial-services">
        <a className="text-3xl font-extrabold uppercase text-white hover:shadow-2xl">
          <div className="h-48 w-full overflow-hidden bg-purple-blue p-3 shadow-xl">
            <h3> {t('common:BFS')} </h3>
          </div>
        </a>
      </Link>

      <Link href="/specialization/tmt">
        <a className="text-3xl font-extrabold uppercase text-slate-700 hover:shadow-2xl">
          <div className=" h-48 w-full overflow-hidden p-3 shadow-xl">
            <h3>{t('common:TMT')}</h3>
          </div>
        </a>
      </Link>
    </div>
  )
}
