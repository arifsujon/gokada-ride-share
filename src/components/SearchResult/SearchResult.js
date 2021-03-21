import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData2/fakeData';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import MapSection from '../Map/Map';
import './SearchResult.css';


const SearchResult = () => {
  const { vehicleType } = useParams();
  const [result, setResult] = useState({});
  const {title, imgUrl, fare} = result;
  useEffect(() => {
    setResult(fakeData[0]);
  }, []);

  const location = {
    address: 'Comilla',
    lat: 23.460657,
    lng: 91.180908,
  }


  return (
    <div className="container search-result">
      <hr/>
      <div className="row mb-5">
        <div className="col-md-4 left">
          <div className="card search-part">
            <ul className="list-group list-group-flush">
              <li className="list-group-item react-timeline m-2">
                <Timeline>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Mirpur</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Dhanmondi</TimelineContent>
                  </TimelineItem>
                </Timeline>
              </li>
              <li className="list-group-item details m-2">
                <span>
                   <img src={imgUrl} alt=""/>
                </span> 
                <span className="ml-3">{title}</span> 
                <span className="vehicle">${fare}</span>
              </li>
              <li className="list-group-item details m-2"><span><img src={imgUrl} alt=""/></span> <span className="ml-3">{title}</span> <span className="vehicle">${fare}</span></li>
              <li className="list-group-item details m-2"><span><img src={imgUrl} alt=""/></span> <span className="ml-3">{title}</span> <span className="vehicle">${fare}</span></li>
            </ul>
          </div>
        </div>
        <div className="col-md-8 map">
          <MapSection location={location} zoomLevel={17} />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
