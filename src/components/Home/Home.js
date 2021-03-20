import React, { useEffect, useState } from 'react';
import bgImage from '../../images/home-bg.png';
import Vehicle from '../Vehicle/Vehicle';
import fakeData from '../../fakeData/fakeData.json';
import './Home.css';

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(fakeData);
    }, [])
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="home-bg">
            <div className="container">
                <div className="row vehicles">
                    {
                        vehicles.map(vehicle => <Vehicle key={vehicle.vehicleType} vehicle={vehicle}></Vehicle>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;