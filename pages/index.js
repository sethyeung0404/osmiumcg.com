import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import HomePageSectionTitle from '../components/UI/HomePageSectionTitle'
import BlueDivider from '../components/UI/BlueDivider'
import HomeBanner from '../components/UI/HomeBanner'
import HomePageContactUsButton from '../components/Buttons/HomePageContactUsButton'
import JobSlot from '../components/UI/JobSlot'
import RoundButton from '../components/Buttons/RoundButton'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="text-center">
      <HomeBanner />

      {/* Main Page Text */}
      <section
        id="main_page_text"
        className="mx-auto max-w-5xl items-center p-5"
      >
        <div>
          <h1>Osmium Consulting Group is a Leading Recruitment Firm</h1>
          <p>
            Osmium Consulting Group has quickly established a market reputation
            as a dedicated and value-adding recruitment firm. We offer our
            clients access to the very best candidates and our candidates the
            opportunity to develop a global career. We possess a number of
            unparalleled and unique features that define and set us apart from
            other service providers in the recruitment industry.
          </p>
        </div>
      </section>

      {/* Section: Intro */}
      <section id="intro_black" className="bg-black text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between p-5 text-left">
          <div>
            <p>Would you like to speak to one of our Recruitment Consultant?</p>
            <br />
            <p>
              Please feel free to&nbsp;
              <a href="https://www.linkedin.com/company/osmium-consulting-group">
                <u>Connect Us</u>
              </a>
              &nbsp;through Our LinkedIn
            </p>
          </div>
          <div>
            <HomePageContactUsButton />
          </div>
        </div>
      </section>

      {/* Section: Sector Coverage */}
      <section id="sector_coverage" className="py-5">
        <div className="bg-white">
          <div className="row pt-4 ">
            <HomePageSectionTitle Title="The Practice Sectors We Cover" />
            <BlueDivider />
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-16 text-left">
            <div className="max-w-sm overflow-hidden rounded bg-purple-blue p-16 text-white shadow-lg">
              <Link href="/specialization/banking-financial-services">
                <a>
                  <h3>BFSD</h3>
                </a>
              </Link>
            </div>
            <div className="max-w-sm overflow-hidden rounded p-16 shadow-md">
              <Link href="/specialization/tmt">
                <a>
                  <h3>TMTD</h3>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Jobs Openings */}
      <section id="home_job" className="items-center bg-gray-100 py-5">
        <div className="mx-auto max-w-5xl">
          <div className="">
            <HomePageSectionTitle Title="Latest Job Openings" />
            <BlueDivider />
          </div>
          <div className="grid grid-cols-3 gap-5">
            <JobSlot />
            <JobSlot />
            <JobSlot />
          </div>
          <RoundButton />
        </div>
      </section>

      {/* Articles */}
      <section id="home_article" className="py-5">
        <div className="row">
          <HomePageSectionTitle Title="Articles" />
          <BlueDivider />
        </div>
        <div>Articles *9</div>
      </section>

      {/* Awards */}
      <section id="Awards" className="">
        <div>
          <HomePageSectionTitle Title="Awards" />
          <BlueDivider />
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
