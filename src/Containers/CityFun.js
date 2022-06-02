import React, { useState } from 'react';

function CityFun(props) {
    const[cityName , setCityName] = useState('Surat');

    const changeCity=() => {
        setCityName('Baroda');
    }
    return (
        <div>
            <p>{cityName}</p>
            <button onClick={() => changeCity()}>changeCity</button>

        </div>
    );
}

export default CityFun;