import React from 'react'
import Image from 'next/image'

function Card({ t }) {
  return (
    <div className="grid grid-cols-2 items-center  gap-x-32">
      <div className="order-2 col-span-2 p-2 text-left lg:order-1 lg:col-span-1">
        <h5 className="my-3 text-5xl font-extrabold">OCG Recruitment</h5>
        <h5 className="my-2 text-3xl font-bold">
          Your trusted recruitment partner
        </h5>
        <p className="text-base text-gray-400">
          Best Web3, IT, Banking & Financial Services Recruiter in Hong Kong
        </p>
        <button className="my-4 rounded-lg bg-red-400 py-2 px-6 font-semibold text-white">
          Contact Us
        </button>
        <p className="text-sm text-gray-500">Trusted by teams at</p>
        <div className="my-2 flex h-16 items-center">
          <div className="h-16 w-16">
            <Image
              src="/img/pages/index/partners/dell.png"
              alt="Dell EMC"
              height={1}
              width={1}
              layout="responsive"
            />
          </div>
          <div className="h-16 w-16 p-1">
            <Image
              src="/img/pages/index/partners/tesla.png"
              alt="Tesla"
              height={1}
              width={1}
              layout="responsive"
            />
          </div>
        </div>
      </div>

      <div className="order-1 col-span-2 p-6 lg:order-2 lg:col-span-1">
        <Image
          src="/img/pages/index/hiring.jpg"
          alt="We are hiring!"
          height={432}
          width={640}
          layout="responsive"
        />
      </div>
    </div>
  )
}

export default Card
