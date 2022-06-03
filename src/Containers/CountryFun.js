import React, { useState } from 'react';
import CityFun from './CityFun';

function CountryFun(props) {
    const[countryName , setCountryName] = useState('India');

    const changeCountry=() => {
        setCountryName('US');
    }
    
    return (
        <div>
            <p>{countryName}</p>
            <button onClick={() => changeCountry()}>changeCountry</button>
            <CityFun id="101" Country_Name={countryName} />

        </div>
    );
}

export default CountryFun;