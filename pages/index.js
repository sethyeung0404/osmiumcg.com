import Layout from '@/Layout/Layout'
import Image from 'next/image'
import HomePageSectionTitle from '@/Text/HomePageSectionTitle'
import Divider from '@/components/UI/Divider'
import HomeBanner from '@/UI/HomeBanner'
import JobSlot from '@/components/Jobs/JobSlot'
import SectorBlock from '@/UI/SectorBlock'
import HomePageContactUsButton from '@/Buttons/HomePageContactUsButton'
import RoundButton from '@/Buttons/RoundButton'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import Head from 'next/head'

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
        <div className="m-4 mx-auto max-w-4xl xl:max-w-7xl">
          <p className="pb-4 text-[40px] font-bold leading-tight">
            {t('mainTextTitle')}
          </p>
          <p className="text-justify text-lg">{t('mainTextContent')}</p>
        </div>
      </section>

      {/* Section: Intro */}
      {/* Do it like a pop up later -> tbc */}
      <section id="intro_black" className="my-2 bg-black px-8 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-5 text-left lg:px-5">
          <div>
            <p className="pb-4 text-xl">{t('s2a')}</p>
            <p className="text-base">
              {t('s2b')}
              <Link href="https://www.linkedin.com/company/osmium-consulting-group">
                <a className="underline">{t('s2button1')}</a>
              </Link>
              &nbsp;{t('s2c')}
            </p>
          </div>
          <HomePageContactUsButton text={t('s2button2')} />
        </div>
      </section>

      {/* Section: Sector Coverage */}
      <section id="sector_coverage" className="my-2 p-5">
        <div className="mx-auto max-w-7xl bg-white">
          <HomePageSectionTitle Title={t('common:Sector')} />
          <Divider center colour="blue" />
          <SectorBlock />
        </div>
      </section>

      {/* Section: Jobs Openings */}
      <section id="home_job" className="my-2 items-center bg-gray-100 p-5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1">
            <HomePageSectionTitle Title={t('common:JobOpenings')} />
            <Divider center colour="blue" />
          </div>
          <div className="grid grid-cols-3 gap-5">
            <JobSlot />
          </div>
          <div className="mt-5">
            <RoundButton href="https://hk.jobsdb.com/hk/search-jobs/osmium-consulting-group/"/>
          </div>
        </div>
      </section>

      {/* tbc.. no time */}
      {/* Articles 
      <section id="home_article" className="my-2 p-5">
        <div className="grid grid-cols-1">
          <HomePageSectionTitle Title={t('Articles')} />
          <Divider center colour="blue" />
        </div>
        <div>Articles *9</div>
      </section>
      */}

      {/* Awards */}
      <section id="Awards" className="mx-auto my-2 max-w-7xl p-5">
        <div className="grid grid-cols-1">
          <HomePageSectionTitle Title={t('Awards')} />
          <Divider center colour="blue" />
        </div>
        <div className="mx-auto grid grid-cols-12 items-center justify-center">
          <div className="col-span-6 md:col-span-3">
            <Image
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              src="/img/pages/index/awards/gec2020.webp"
              alt="GEC Award"
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <Image
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              src="/img/pages/index/awards/EOELogo-F.webp"
              alt="EOE Award"
            />
          </div>
          <div className="col-span-6 md:col-span-3 md:px-8">
            <Image
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              src="/img/pages/index/awards/JobsdbHrAward.webp"
              alt="JobsDB HR Award"
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <Image
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              src="/img/pages/index/awards/ffge2020.webp"
              alt="FFGE Award"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout
      headContent={
        <Head>
          <title>Osmium Consulting Group | Recruitment Professionals</title>
          <meta property="og:url" content="http://www.osmiumcg.com/" />
          <meta
            property="og:title"
            content="Osmium Consulting Group | Recruitment Professionals"
          />
          <meta
            property="og:description"
            content="“Osmium Consulting Group” was founded with one single aim in mind - to provide professional recruitment and HR advisory services to our clients and candidates."
          />
        </Head>
      }
    >
      {page}
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'index'])),
  },
})
