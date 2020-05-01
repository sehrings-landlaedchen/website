import React from 'react'
import { Map, TileLayer, Popup, Marker } from 'react-leaflet'

const LeafletMap = props => {
  const position = [props.location.lat, props.location.lng];
  return (
      <Map center={position} zoom={props.zoom} style={{ height: '50vh', width: '100%', zIndex: 10 }} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>Sehrings Landlädchen</Popup>
        </Marker>
      </Map>
  )
}
LeafletMap.defaultProps = {
  zoom: 15
}

export default LeafletMap
