import React from 'react'
import Link from 'next/link'
import {
  CircleStackIcon,
  ChatBubbleBottomCenterIcon,
  CommandLineIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'

export default function SectorBlock({ t, name, text }) {
  var icon
  switch (name) {
    case 'Family Office':
      icon = <CircleStackIcon className="h-6 w-6" aria-hidden="true" />
      break
    case 'IT':
      icon = <CommandLineIcon className="h-6 w-6" aria-hidden="true" />
      break
    case 'Immigration':
      icon = <TruckIcon className="h-6 w-6" aria-hidden="true" />
      break
    case 'HR Solutions':
      icon = (
        <ChatBubbleBottomCenterIcon className="h-6 w-6" aria-hidden="true" />
      )
      break
  }

  return (
    // <Link href={href}>
    // <a className="hover:bg-slate-50 hover:text-ocg-lightblue">
    <p className="hover:bg-slate-50 hover:text-ocg-lightblue">
      <div className="flex rounded-2xl bg-white py-6 text-base">
        <div className="mx-5 self-center">{icon}</div>
        <div>
          <p className="font-bold">{t(name)}</p>
          <p>{t(text)}</p>
        </div>
      </div>
    </p>
    // </a>
    // </Link>
  )
}
