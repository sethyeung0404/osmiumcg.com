import Layout from '@/Layout/Layout'
import Image from 'next/image'
import HomePageSectionTitle from '@/Text/HomePageSectionTitle'
import BlueDivider from '@/UI/BlueDivider'
import HomeBanner from '@/UI/HomeBanner'
import JobSlot from '@/UI/JobSlot'
import SectorBlock from '@/UI/SectorBlock'
import HomePageContactUsButton from '@/Buttons/HomePageContactUsButton'
import RoundButton from '@/Buttons/RoundButton'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  const { t } = useTranslation('index')

  return (
    <main className="text-center">
      <HomeBanner />

      {/* Main Page Text */}
      <section
        id="main_page_text"
        className="mx-auto my-2 items-center p-5 md:max-w-3xl lg:max-w-7xl"
      >
        <div className="">
          <h1 className="text-[40px] font-bold">{t('mainTextTitle')}</h1>
          <p className="text-justify text-base">{t('mainTextContent')}</p>
        </div>
      </section>

      {/* Section: Intro */}
      <section id="intro_black" className="my-2 bg-black p-5 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-5 text-left">
          <div>
            <p>{t('s2a')}</p>
            <br />
            <p>
              {t('s2b')}
              <a href="https://www.linkedin.com/company/osmium-consulting-group">
                <u>{t('s2button1')}</u>
              </a>
              &nbsp;{t('s2c')}
            </p>
          </div>
          <div>
            <HomePageContactUsButton text={t('s2button2')} />
          </div>
        </div>
      </section>

      {/* Section: Sector Coverage */}
      <section id="sector_coverage" className="my-2 p-5">
        <div className="mx-auto max-w-7xl bg-white">
          <HomePageSectionTitle Title={t('common:Sector')} />
          <BlueDivider center="true" />
          <SectorBlock />
        </div>
      </section>

      {/* Section: Jobs Openings */}
      <section id="home_job" className="my-2 items-center bg-gray-100 p-5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1">
            <HomePageSectionTitle Title={t('common:JobOpenings')} />
            <BlueDivider center="true" />
          </div>
          <div className="grid grid-cols-3 gap-5">
            <JobSlot />
            <JobSlot />
            <JobSlot />
          </div>
          <div className="mt-2">
            <RoundButton />
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="home_article" className="my-2 p-5">
        <div className="grid grid-cols-1">
          <HomePageSectionTitle Title={t('Articles')} />
          <BlueDivider center="true" />
        </div>
        <div>Articles *9</div>
      </section>

      {/* Awards */}
      <section id="Awards" className="mx-auto my-2 max-w-7xl p-5">
        <div className="grid grid-cols-1">
          <HomePageSectionTitle Title={t('Awards')} />
          <BlueDivider center="true" />
        </div>
        <div className="flex items-center justify-center px-5">
          <Image width={200} height={200} src="/img/awards/gec2020.webp" />
          <Image width={200} height={200} src="/img/awards/ffge2020.webp" />
          <div className="fill-current">
            <Image width={380} height={150} src="/img/awards/EOELogo-F.webp" />
          </div>
        </div>
      </section>
    </main>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'index'])),
  },
})
