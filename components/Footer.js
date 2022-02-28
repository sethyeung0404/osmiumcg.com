import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function footer() {
  return (
    <footer className="bg-deep-blue p-3 text-sm text-white">
      <div className="mx-auto flex max-w-7xl justify-between">
        {/*Copyright*/}
        <div>
          Osmium Consulting Group Limited ( EA Licence No. 66295 )
          <br />
          D-U-N-S Number : 68-638-4815
        </div>
        <div>
          Copyright &copy; All rights reserved by Osmium Consulting Group
        </div>
      </div>
    </footer>
  )
}
