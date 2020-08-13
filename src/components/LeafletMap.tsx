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

  const initMarker = (ref: { leafletElement: { openPopup: () => void } }) => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }

  const isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

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
            <Popup closeButton={false} closeOnClick={false} closeOnEscapeKey={false} onClose={() => { }} autoClose={false}>
              <p>
                {location.title}
              </p>
              {isIOS ?
                <a href={`maps://?q=${location.lat},${location.lng}(LABEL)`} target="_blank" rel="noreferrer noopener">Navigation</a> :
                <a className="d-lg-none" href={`geo:0,0?q=${location.lat},${location.lng}(${encodeURI(location.title)})`}>Navigation</a>
              }
              {location.mapLink &&
                <>
                  <a className="d-none d-lg-block" href={location.mapLink} target="_blank" rel="noreferrer noopener">Google Maps</a>
                </>
              }
            </Popup>
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
