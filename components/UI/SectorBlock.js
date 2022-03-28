import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export default function SectorBlock() {
  const { t } = useTranslation('common')

  return (
    <div className="mx-auto grid grid-cols-1 gap-8 text-left md:grid-cols-2">
      <Link href="/specialization/financial-services">
        <a className="border border-gray-100 text-3xl font-bold uppercase text-white hover:shadow-2xl">
          <div className="h-48 w-full overflow-hidden bg-purple-blue p-3 shadow-xl">
            <h3> {t('FDFS')} </h3>
          </div>
        </a>
      </Link>

      <Link href="/specialization/technology">
        <a className="border border-gray-100 text-3xl font-bold uppercase text-slate-700 hover:shadow-2xl">
          <div className=" h-48 w-full overflow-hidden p-3 shadow-xl">
            <h3>{t('TBCG')}</h3>
          </div>
        </a>
      </Link>
    </div>
  )
}
