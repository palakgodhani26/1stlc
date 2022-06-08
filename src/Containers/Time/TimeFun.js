import React, { useEffect, useState } from 'react';

function TimeFun(props) {
    const [time , setTime] = useState(new Date());

    const tick = () => {
       setTime(new Date());
    }

    useEffect(() =>{
        //componentDidMount componentDidupdate
        const timeI=setInterval(() =>tick(), 1000);

        //componentwillUnmount
        return() => {
            clearInterval(timeI);
        }
    }, [time]);


    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>      
        </div>
    );
}

export default TimeFun;