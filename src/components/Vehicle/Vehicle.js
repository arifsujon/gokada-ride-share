import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Vehicle.css';
// import Destination from '../Destination/Destination';

const Vehicle = (props) => {
    console.log(props);
    const { title, imgUrl, vehicleType } = props.vehicle;
    const history = useHistory();
    const handleBook = (vehicleType) => {
        history.push(`/destination/${vehicleType}`);
    }
    return (
        <div className="col-md-3">
            <Card className="card-item" onClick={() => handleBook(vehicleType)}>
                <Card.Img className="p-5 img-fluid" style={{height:'200px'}} variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Vehicle;

{/* <Card.Img  style={{height:'200px', width: '200px'}} variant="top" src={imgUrl} /> */}
