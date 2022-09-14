import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Consultant from './Consultant'
import { ChevronRightIcon } from '@heroicons/react/outline'

function ConsultantCarousel({ Division }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: '4800' }),
  ])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  if (Division === 'FDFS') {
    return (
      <div className="flex">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <Consultant
              name="Charlton LAM"
              title1="Associate Director"
              title2="Head of BD & Operations"
              src="/img/pages/specialization/FDFS/Charlton.webp"
            />
            <Consultant
              name="William TANG"
              title1="Partner | Head"
              src="/img/pages/specialization/FDFS/William.webp"
            />
            <Consultant
              name="Abby LEUNG"
              title1="Manager"
              src="/img/pages/specialization/FDFS/Abby.webp"
            />
            <Consultant
              name="Alec MA"
              title1="Manager"
              src="/img/pages/specialization/FDFS/Alec.webp"
            />
            <Consultant
              name="Roberta LEE"
              title1="Sales Support Manager"
              src="/img/pages/specialization/FDFS/Roberta.webp"
            />
            <Consultant
              name="Teri HAU"
              title1="Consultant"
              src="/img/pages/specialization/FDFS/Teri.webp"
            />
            <Consultant
              name="Athena PANG"
              title1="Consultant"
              src="/img/pages/specialization/FDFS/Athena.webp"
            />
            <Consultant
              name="Cary SIU"
              title1="Consultant"
              src="/img/pages/specialization/FDFS/Cary.webp"
            />
          </div>
        </div>
        <div className="self-center md:pr-6">
          <button className="embla__next" onClick={scrollNext}>
            <ChevronRightIcon
              className="h-12 w-12 md:h-10 md:w-10"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    )
  } else if (Division === 'TBCG') {
    return (
      <div className="flex">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <Consultant
              name="Carol LAU"
              title1="Director"
              title2="Head of Recruitment"
              src="/img/pages/specialization/TBCG/Carol.webp"
            />
            <Consultant
              name="Celine POON"
              title1="Manager"
              src="/img/pages/specialization/TBCG/Celine.webp"
            />
            <Consultant
              name="Larry CHAN"
              title1="Senior Consultant"
              src="/img/pages/specialization/TBCG/Larry.webp"
            />
            <Consultant
              name="Aaron TSE"
              title1="Senior Consultant"
              src="/img/pages/specialization/TBCG/Aaron.webp"
            />
            <Consultant
              name="Alan LAW"
              title1="Assistant Manager"
              src="/img/pages/specialization/TBCG/Alan.webp"
            />
            <Consultant
              name="Denise LAW"
              title1="Consultant"
              src="/img/pages/specialization/TBCG/Denise.webp"
            />
            <Consultant
              name="Candice HA"
              title1="Consultant"
              src="/img/pages/specialization/TBCG/Candice.webp"
            />
            <Consultant
              name="Janna KWONG"
              title1="Consultant"
              src="/img/pages/specialization/TBCG/Janna.webp"
            />
            <Consultant
              name="Morgan FONG"
              title1="Consultant"
              src="/img/pages/specialization/TBCG/Morgan.webp"
            />

            {/* //
            <Consultant
              name="Candice HA"
              title1="Consultant"
              src="/img/pages/specialization/TBCG/Candice.webp"
            />
            <Consultant
              name="Denise LAW"
              title1="Consultant"
              src="/img/pages/specialization/TBCG/Denise.webp"
    />*/}
          </div>
        </div>
        <div className="self-center md:pr-6">
          <button className="embla__next" onClick={scrollNext}>
            <ChevronRightIcon
              className="h-12 w-12 md:h-10 md:w-10"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

export default ConsultantCarousel
