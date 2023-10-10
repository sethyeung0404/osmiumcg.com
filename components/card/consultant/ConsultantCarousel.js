import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Consultant from './Consultant'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

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
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            <Consultant
              name="Charlton LAM"
              title1="Associate Director"
              title2="Head of BD & Operations"
              src="/img/pages/specialization/FDFS/Charlton.webp"
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
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
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
              name="Alan LAW"
              title1="Assistant Manager"
              src="/img/pages/specialization/TBCG/Alan.webp"
            />
            <Consultant
              name="Denise LAW"
              title1="Consultant"
              src="/img/pages/specialization/TBCG/Denise.webp"
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
  } else {
    return <></>
  }
}

export default ConsultantCarousel
