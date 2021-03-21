import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './Destination.css';
import MapSection from '../Map/Map';
import fakeData from '../../fakeData/fakeData.json';
import { Link } from 'react-router-dom';

const Destination = () => {

    const {vehicleType} = useParams();
    console.log(vehicleType);

    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
        console.log(fakeData[0].vehicleType);
        setVehicle(fakeData);
    }, [])
    
    const history = useHistory();
    const handleSubmit = () => {
        history.push(`/destination/${vehicleType}/searchResult`);
    }

    const location = {
        address: 'Comilla',
        lat: 23.460657,
        lng: 91.180908,
    }

    
    return (
        <div>
            <div className="container mt-5 destination">
                <div className="row">
                    <div className="col-md-4 left">
                        <form>
                            <p>Pick From</p>
                            <input type="text" placeholder="Mirpur"/>
                            <p>Pick To</p>
                            <input type="text" placeholder="Dhanmondi"/>
                            <br/>
                            <Link to={`/destination/${vehicleType}/searchResult`} onClick={handleSubmit} className="search-btn">Search</Link>
                        </form>
                    </div>
                    <div className="col-md-8">
                        <MapSection location={location} zoomLevel={17} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;