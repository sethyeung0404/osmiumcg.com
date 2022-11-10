import React from 'react'
import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Marker = ({ lat, lng }) => (
  <FontAwesomeIcon
    lat={lat}
    lng={lng}
    icon={faLocationDot}
    className="text-red-500"
  />
)

export default function MapWrapper({ Location }) {
  const center = {
    HK: { lat: 22.337068, lng: 114.199918 },
    SG: { lat: 1.28527, lng: 103.85217 },
    JP: { lat: 35.672296, lng: 139.764341 },
  }
  const zoom = 17

  return (
    <div className="h-80 w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD79idHoy-q4euSg7fF3p84YL5a_4c7m70' }}
        defaultCenter={center[Location]}
        defaultZoom={zoom}
        options={{ mapId: '2b645f95dbe5807e' }}
      >
        <Marker lat={center[Location].lat} lng={center[Location].lng} />
      </GoogleMapReact>
    </div>
  )
}
