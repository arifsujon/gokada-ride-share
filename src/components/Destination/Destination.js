import React from 'react';
import { useHistory, useParams } from 'react-router';
import mapImage from '../../images/mapImage.png';
import './Destination.css';
import MapSection from '../Map/Map'

import GoogleMapReact from 'google-map-react'
// import './map.css'

const Destination = () => {

    const {vehicleType} = useParams();
    const history = useHistory();
    
    const handleSubmit = () => {
        history.push(`/destination/${vehicleType}/searchResult`);
    }

    const location = {
        address: 'comilla',
        lat: 23.460657,
        lng: 91.180908,
      }

    
    return (
        <div>
            <div className="container mt-5 destination">
                <div className="row">
                    <div className="col-md-4">
                        <form onSubmit={handleSubmit}>
                            <p>Pick From</p>
                            <input type="text" placeholder="Mirpur 1"/>
                            <p>Pick To</p>
                            <input type="text" placeholder="Dhanmondi"/>
                            <br/>
                            <input type="submit" value="Search"/>
                        </form>
                    </div>
                    <div className="col-md-8">
                        <MapSection location={location} zoomLevel={17} />
                        {/* <img className="img-fluid" src={mapImage} alt=""/> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;