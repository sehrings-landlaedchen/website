import React, { FC } from 'react'
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';
// import styles from "./map.scss"
import "leaflet-defaulticon-compatibility"
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

interface LeafletMapProps {
    locations: any
    zoom?: number;
}

const Map: FC<LeafletMapProps> = props => {
    const { locations } = props;
    const mapPosition: LatLngExpression = [parseFloat(props.locations[0].lat), parseFloat(props.locations[0].lng)];

    const isServer = typeof window === 'undefined';
    const isIOS = isServer ? false : /iPad|iPhone|iPod/.test(window?.navigator.platform) || (window?.navigator.platform === 'MacIntel' && window?.navigator.maxTouchPoints > 1)

    return (
        <MapContainer
            center={mapPosition}
            zoom={props.zoom}
            style={{ height: '50vh', width: '100%', zIndex: 10 }}
            scrollWheelZoom={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {locations?.map((location: any) => {
                const position: LatLngExpression = [parseFloat(location.lat), parseFloat(location.lng)];
                return (
                    <Marker position={position} key={location.title}>
                        <Popup closeButton={false} closeOnClick={false} closeOnEscapeKey={false} autoClose={false}>
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
        </MapContainer>
    )
}
Map.defaultProps = {
    zoom: 15
}

export default Map
