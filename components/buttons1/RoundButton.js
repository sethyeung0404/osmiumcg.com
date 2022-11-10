import React from 'react'
import { useTranslation } from 'next-i18next'

export default function RoundButton({ href }) {
  const { t } = useTranslation('common')

  return (
    <div>
      <button className="cursor-pointer rounded-xl bg-purple-blue py-3 px-5 font-bold text-white hover:bg-blue-800">
        <a href={href}>{t('ViewMore')}</a>
      </button>
    </div>
  )
}
