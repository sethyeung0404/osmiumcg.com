import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export default function LayoutPage({ children, title, subtitle }) {
  const { t } = useTranslation('common')

  return (
    <>
      {/* Banner */}
      <div className="mx-auto max-w-max">
        <div className="md:hidden">
          <Image
            src="/img/layout/layout-600x300.webp"
            height={300}
            width={600}
            alt="Layout Banner Small"
          />
        </div>
        <div className="hidden md:inline-flex lg:hidden">
          <Image
            src="/img/layout/layout-900x200.webp"
            height={200}
            width={900}
            alt="Layout Banner Medium"
          />
        </div>
        <div className="hidden lg:inline-flex xl:hidden">
          <Image
            src="/img/layout/layout-1400x250.webp"
            height={250}
            width={1400}
            alt="Layout Banner Large"
          />
        </div>
        <div className="hidden xl:inline-flex">
          <Image
            height={250}
            width={2000}
            src="/img/layout/layout-2000x250.webp"
            alt="Layout Banner Extralarge"
          />
        </div>
      </div>

      <div className="mx-auto max-w-4xl p-5 lg:max-w-7xl">
        {/* Sitemap */}
        <div className="flex">
          <Link href="/">
            <a>
              <div className="text-blue-700">{t('Home')}</div>
            </a>
          </Link>
          <div className="">
            &nbsp;{'>'} {title} {'>'} {subtitle}
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
