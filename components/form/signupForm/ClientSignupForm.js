import React, { Fragment, useState, useRef } from 'react'

export const scriptUrl = process.env.NEXT_PUBLIC_scriptUrl

function ClientSignupForm({ candidate, setCandidate, scriptUrl }) {
  const [industry, setIndustry] = useState('Industry')
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log('SUCCESSFULLY SUBMITTED')
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      {/* Employer interface */}
      {!candidate && <div>testing</div>}
    </>
  )
}

export default ClientSignupForm
