import React from 'react'
import { useTranslation } from 'next-i18next'

export default function ContactUsButton() {
  const { t } = useTranslation('common')

  return (
    <div className="text-right">
      <button className="cursor-pointer rounded-full bg-purple-blue py-2 px-5 font-bold text-white hover:animate-pulse hover:bg-slate-600">
        {t('Contact')}
      </button>
    </div>
  )
}
