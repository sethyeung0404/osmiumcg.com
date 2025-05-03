import Layout from 'components/layouts/Layout'
import JobSlot from 'src/index/JobSlot'
import SectorSection from 'components/card/division/SectorSection'
import RoundButton from 'components/buttons/RoundButton'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import BannerCard from 'src/index/BannerCard'
import Award from 'src/index/Awards'

export default function Home() {
  const { t } = useTranslation('index')

  return (
    <main className="text-center">
      {/* <HomeBanner Card /> */}
      <section className="mx-auto mt-2 items-center p-5 md:mt-10 md:max-w-3xl lg:max-w-7xl">
        <BannerCard t={t} />
      </section>

      {/* Our Vision */}
      <section
        id="our_vision"
        className="mx-auto my-2 items-center bg-gray-50 p-5"
      >
        <div className="m-4 mx-auto max-w-4xl xl:max-w-5xl">
          <p className="pb-4 text-4xl font-bold leading-tight">
            {t('ourVisionTitle')}
          </p>
          <p className="text-justify text-lg">{t('ourVisionContent')}</p>
        </div>
      </section>

      {/* Our Mission */}
      <section id="our_vision" className="mx-auto my-2 items-center p-5">
        <div className="m-4 mx-auto max-w-4xl xl:max-w-5xl">
          <p className="pb-4 text-4xl font-bold leading-tight">
            {t('ourMissionTitle')}
          </p>
          <p className="text-justify text-lg">{t('ourMissionContent')}</p>
        </div>
      </section>

      {/* Section: Sector Coverage */}
      <section id="sector_coverage" className="my-2 bg-gray-50 p-5">
        <div className="mx-auto max-w-7xl">
          <h1 className="SectionTitle text-left"> {t('common:Sector')} </h1>
          <SectorSection />
        </div>
      </section>

      {/* Section: Jobs Openings */}
      {/* <section id="home_job" className="my-2 items-center bg-white p-5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1">
            <h1 className="SectionTitle">{t('common:JobOpenings')} </h1>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <JobSlot />
          </div>
          <div className="mt-5">
            <RoundButton href="https://hk.jobsdb.com/hk/search-jobs/osmium-consulting-group/" />
          </div>
        </div>
      </section> */}

      {/* Awards */}
      <section id="Awards" className="mx-auto my-2 max-w-7xl p-5">
        <Award t={t} />
      </section>
    </main>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout
      headContent={
        <Head>
          <title>
            OCG Recruitment : Web3, IT, Banking & Financial Services Recruitment
            Specialist
          </title>
          <meta property="og:url" content="http://www.osmiumcg.com/" />
          <meta
            property="og:title"
            content="OCG Recruitment : Web3, IT, Banking & Financial Services Recruitment Specialist"
          />
          <meta
            property="og:description"
            content="OCG Recruitment is a leading Web3, IT, Banking & Financial Services Recruitment firm in Hong Kong"
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
