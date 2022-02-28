import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import HomePageSectionTitle from '../components/UI/HomePageSectionTitle'
import BlueDivider from '../components/UI/BlueDivider'
import HomeBanner from '../components/UI/HomeBanner'
import HomePageContactUsButton from '../components/Buttons/HomePageContactUsButton'
import JobSlot from '../components/UI/JobSlot'
import RoundButton from '../components/Buttons/RoundButton'

export default function Home() {
  return (
    <main className="text-center">
      <HomeBanner />

      {/* Main Page Text */}
      <section id="main_page_text" className="items-center py-5">
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
      <section id="intro_black" className="bg-black p-3 py-5 text-white">
        <div>
          <p>Would you like to speak to one of our Recruitment Consultant?</p>
          <p>
            Please feel free to&nbsp;
            <a href="https://www.linkedin.com/company/osmium-consulting-group">
              <u>Connect Us</u>
            </a>
            &nbsp;through Our LinkedIn
          </p>
          <div>
            <HomePageContactUsButton />
          </div>
        </div>
      </section>

      {/* Section: Sector Coverage */}
      <section id="sector_coverage" className="py-5">
        <div className="bg-white">
          <div className="row pt-4 ">
            <HomePageSectionTitle />
            <BlueDivider />
          </div>
          <div>
            <div>
              <a
                href="/specialization/banking-financial-services"
                className="linkcolor"
              >
                <div class="shadow-2xl">
                  <h3 style={{ letterSpacing: '0.05em;' }}>BFSD</h3>
                </div>
              </a>
            </div>
            <div>
              <a href="/specialization/tmt">
                <div class="shadow-2xl">
                  <h3 style={{ letterSpacing: '0.05em;' }}>TMTD</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Jobs Openings */}
      <section id="home_job" className="items-center bg-gray-100 py-5">
        <div className="container">
          <div className="row pt-4">
            <HomePageSectionTitle />
            <BlueDivider />
          </div>

          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <JobSlot />
            </div>

            <div className="col-12 col-md-4 mb-3">
              <JobSlot />
            </div>

            <div className="col-12 col-md-4 mb-3">
              <JobSlot />
            </div>
          </div>

          <RoundButton />
        </div>
      </section>

      {/* Articles */}
      <section id="home_article" className="py-5">
        <div className="row">
          <HomePageSectionTitle />
          <BlueDivider />
        </div>
        <div>Articles *9</div>
      </section>

      {/* Awards */}
      <section id="Awards" className="">
        <div>
          <HomePageSectionTitle />
          <BlueDivider />
        </div>
        <div className="flex justify-center px-5">
          <Image width={200} height={200} src="/img/awards/gec2020.webp" />
          <Image width={200} height={200} src="/img/awards/ffge2020.webp" />
          <Image width={480} height={200} src="/img/awards/EOELogo-F.webp" />
        </div>
      </section>
    </main>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
