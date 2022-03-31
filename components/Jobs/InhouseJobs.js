import Jobs from './Jobs'
import JobFilter from './JobFilter'

export default function InhouseJobs() {
  return (
    <>
      <div className="grid grid-cols-7">
        <div className="col-span-7 md:col-span-2">
          <JobFilter />
        </div>
        <div className="col-span-7 md:col-span-5 md:border-l md:pl-4">
          <div className="grid grid-cols-1 space-y-2">
            <Jobs jobs="Recruitment Consultant ( TBCG )" />
            <Jobs jobs="Recruitment Consultant ( FDFS )" />
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'careers'])),
  },
})
