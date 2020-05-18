import React, { FC } from 'react'
import { Map, TileLayer, Popup, Marker } from 'react-leaflet'
import { LatLngExpression, Icon } from 'leaflet';
import "./LeafletMap.scss"

interface LeafletMapProps {
  location: {
    lat: number;
    lng: number;
  }
  zoom?: number;
}

const LeafletMap: FC<LeafletMapProps> = props => {
  const position: LatLngExpression = [props.location.lat, props.location.lng];

  const initMarker = (ref: { leafletElement: { openPopup: () => void; }; }) => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }

  const icon = new Icon({

  })

  return (
    <Map
      center={position}
      zoom={props.zoom}
      style={{ height: '50vh', width: '100%', zIndex: 10 }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position} ref={initMarker}>
        <Popup closeButton={false} closeOnClick={false} closeOnEscapeKey={false}>Sehrings Landlädchen</Popup>
      </Marker>
    </Map>
  )
}
LeafletMap.defaultProps = {
  zoom: 15
}

export default LeafletMap
