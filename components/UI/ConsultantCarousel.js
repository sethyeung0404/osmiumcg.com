import React from 'react'
import EmblaCarousel from 'embla-carousel'

const options = { loop: false }
const embla = EmblaCarousel(emblaNode, options)

function ConsultantCarousel() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <button onClick={() => embla.scrollNext()}>>>>></button>
    </div>
  )
}

export default ConsultantCarousel
