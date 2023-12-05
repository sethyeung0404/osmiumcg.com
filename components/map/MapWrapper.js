import React, { useRef, useEffect } from 'react'
import { Wrapper } from '@googlemaps/react-wrapper'

function Map({ center, zoom }) {
  const ref = useRef()

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    })
  })

  return <div ref={ref} id="map" />
}

export default function MapWrapper({ Location }) {
  const center = {
    HK: { lat: 22.337068, lng: 114.199918 },
    SG: { lat: 1.28527, lng: 103.85217 },
    JP: { lat: 35.672296, lng: 139.764341 },
  }

  return (
    <div className="h-80 w-full">
      <Wrapper apiKey={process.env.NEXT_PUBLIC_GMAP_API}>
        <Map center={center[Location]} zoom={17}></Map>
      </Wrapper>
    </div>
  )
}
