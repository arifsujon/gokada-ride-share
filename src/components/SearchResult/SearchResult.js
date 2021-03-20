import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData.json';





const SearchResult = () => {
    const {id} = useParams();
    const [result, setResult] = useState();
    console.log(result);
    const {vehicleType} = fakeData;
    useEffect(() => {
      console.log(fakeData);
    }, []);
    return (
        <div>
            <h1>Search result</h1>
       
      </div>
    );
};

export default SearchResult;
