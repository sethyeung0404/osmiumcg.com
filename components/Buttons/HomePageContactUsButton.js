import React from 'react'

export default function HomePageContactUsButton({ text }) {
  return (
    <div>
      <button className="animate-bounce cursor-pointer rounded-full border border-white bg-black py-3 px-6 text-white hover:bg-slate-900">
        <a href="tel:852-38985500">{text}</a>
      </button>
    </div>
  )
}
