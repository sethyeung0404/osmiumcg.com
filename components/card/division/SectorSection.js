import React from 'react'
import { useTranslation } from 'next-i18next'
import { navigation } from 'data/Navigation'
import SectorBlock from './SectorBlock'

export default function SectorSection() {
  const { t } = useTranslation('common')

  return (
    <div className="mx-auto grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
      {navigation.categories.map((category) => {
        if (category.id == 'specialization') {
          {
            return category.items.map((item) => (
              <SectorBlock
                key={item.name}
                t={t}
                name={item.name}
                href={item.href}
              />
            ))
          }
        } else {
          return null
        }
      })}
    </div>
  )
}
