import React from 'react'
import Consultant from './Consultant'

function ConsultantOnly({ Theme }) {
  if (Theme == 'wealth') {
    return (
      <div className="flex">
        <Consultant
          name="Derek CHEN"
          title1="Head of Wealth Management"
          src="/img/pages/specialization/DerekCHEN.jpg"
        />
      </div>
    )
  } else if (Theme == 'insurance') {
    return (
      <div className="flex">
        <Consultant
          name="Andy LAM"
          title1="Head of Insurance"
          src="/img/pages/specialization/AndyLAM.jpg"
        />
      </div>
    )
  } else if (Theme == 'realestate') {
    return (
      <div className="flex">
        <Consultant
          name="Cyrus CHAN"
          title1="Head of Real Estate"
          src="/img/pages/specialization/CyrusCHAN.jpg"
        />
      </div>
    )
  } else if (Theme == 'cryptocurrency') {
    return (
      <div className="flex">
        <Consultant
          name="Matthew CHU"
          title1="Head of Cryptocurrency"
          src="/img/pages/specialization/MatthewCHU.jpeg"
        />
      </div>
    )
  } else if (Theme == 'education') {
    return (
      <div className="flex">
        <Consultant
          name="Alisia CHEN"
          title1="Head of Education"
          src="/img/pages/specialization/AlisiaCHEN.png"
        />
      </div>
    )
  } else if (Theme == 'healthcare') {
    return (
      <div className="flex">
        <Consultant
          name="Mavis NG"
          title1="Head of Healthcare"
          src="/img/pages/specialization/MavisNG.jpg"
        />
      </div>
    )
  } else if (Theme == 'accounting') {
    return (
      <div className="flex">
        <Consultant
          name="Albert HUEN"
          title1="Head of Accounting"
          src="/img/pages/specialization/AlbertHUEN.jpg"
        />
      </div>
    )
  } else if (Theme == 'marketing') {
    return (
      <div className="flex">
        <Consultant
          name="Icey TSOI"
          title1="Head of Marketing"
          src="/img/pages/specialization/IceyTSOI.jpeg"
        />
      </div>
    )
  } else if (Theme == 'recruitment') {
    return (
      <div className="flex">
        <Consultant
          name="Carol LAU"
          title1="Director"
          title2="Head of Recruitment"
          src="/img/pages/specialization/TBCG/Carol.jpeg"
        />
      </div>
    )
  } else {
    return
  }
}

export default ConsultantOnly
