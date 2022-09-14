import React from 'react'
import LearnMoreButton from 'temp/LearnMoreButton'

function Jobs({ jobs }) {
  return (
    <div className="flex items-end justify-between border-b-2 pb-2">
      <div className="m-4">
        <p className="text-2xl">{jobs}</p>
        <p className="pb-2 text-lg">Hong Kong</p>
        <p className="text-sm">
          We’re seeking an experienced recruiter to join our Recruiting team. In
          this role, you will have the opportunity to join an amazing, robust,
          and agile team responsible for hiring premier talent.
        </p>
      </div>
      <LearnMoreButton href="https://osmiumcg.notion.site/OCG-Job-Board-99b46a83c23947a5a9a3fbfe8fff5dfc" />
    </div>
  )
}

export default Jobs
