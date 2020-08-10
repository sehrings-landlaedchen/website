import React, { FC } from 'react'
import { Map, TileLayer, Popup, Marker } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';
import "./LeafletMap.scss"
import { MarkdownRemarkFrontmatterLocations } from '../graphql';

interface LeafletMapProps {
  locations: MarkdownRemarkFrontmatterLocations[];
  zoom?: number;
}

const LeafletMap: FC<LeafletMapProps> = props => {
  const { locations } = props;
  const mapPosition: LatLngExpression = [parseFloat(props.locations[0].lat), parseFloat(props.locations[0].lng)];

  const initMarker = (ref: { leafletElement: { openPopup: () => void }}) => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }

  return (
    <Map
      center={mapPosition}
      zoom={props.zoom}
      style={{ height: '50vh', width: '100%', zIndex: 10 }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {locations?.map(location => {
        const position: LatLngExpression = [parseFloat(location.lat), parseFloat(location.lng)];
        return (
          <Marker position={position} ref={initMarker} >
            <Popup closeButton={false} closeOnClick={false} closeOnEscapeKey={false} onClose={() => {}} autoClose={false}>{location.title}</Popup>
          </Marker>
        )
      })}
    </Map>
  )
}
LeafletMap.defaultProps = {
  zoom: 15
}

export default LeafletMap
