import React from 'react'
import useTranslation from 'next-translate/useTranslation'

export default function RoundButton() {
  let { t } = useTranslation()

  return (
    <div>
      <button className="rounded-full bg-purple-blue
      py-3 px-5 font-bold text-white hover:bg-blue-800">
        {t('common:ViewMore')}
      </button>
    </div>
  )
}
