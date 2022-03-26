import React from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

export default function LearnMoreButton({ href }) {
  const { t } = useTranslation('common')

  return (
    <div className="m-2 min-w-max">
      <button className="cursor-pointer rounded-lg bg-slate-400 py-2 px-4 font-bold text-white hover:bg-purple-blue">
        <a target="_blank" href={href} rel="noreferrer">
          Learn More
        </a>
      </button>
    </div>
  )
}
