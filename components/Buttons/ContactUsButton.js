import React from 'react'
import { useTranslation } from 'next-i18next'

export default function ContactUsButton() {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1 className="cursor-pointer rounded-full bg-purple-blue py-3 px-5 font-bold text-white hover:bg-blue-800">
        {t('Contact')}
      </h1>
    </div>
  )
}
