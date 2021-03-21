import React from 'react';
import GoogleMapReact from 'google-map-react'
import './Map.css';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

const location = {
    address: 'Comilla',
    lat: 31.231131,
    lng: -84.210426,
  }

  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

const Map = ({ location, zoomLevel }) => {
    return (
    
            <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCT23guEflDaxujh8qF0RCbG2pBRWCrA4E' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
                />
            </GoogleMapReact>
            </div>
    );
};

export default Map;