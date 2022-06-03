import React, { useState } from 'react';

function CityFun({id, Country_Name}) {
    const[cityName , setCityName] = useState('Surat');

    const changeCity=() => {
        setCityName('Baroda');
    }
    
    return (
        <div>
            <p>{cityName}</p>
            <button onClick={() => changeCity()}>changeCity</button>
            <p>{id} {Country_Name}</p>

        </div>
    );
}

export default CityFun;