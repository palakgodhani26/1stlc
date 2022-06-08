import React, { Component } from 'react';
import Demo from './Components/Demo';
import City from './Containers/City';
import Country from './Containers/Country';
import CityFun from './Containers/CityFun';
import CountryFun from './Containers/CountryFun';
import Time from './Containers/Time/Time';
import TimeFun from './Containers/Time/TimeFun';
import CounterFun from './Containers/Time/CounterFun';



// import React, { useState } from 'react';

// function CounterFun(props) {
//     const [counter , setCounter] = useState(0);

//     const inc = () => {
//         if(counter < 10) {
//             setCounter(counter + 1)
//         }
//     }
//     const dec = () => {
//         if (counter > 0) {
//             setCounter(counter - 1)
//         }
//     }
//     return (
//         <div>
//             <button onClick={() => inc()}>+</button>
//             <span>{counter}</span>
//             <button onClick={() => dec()}>-</button>            
//         </div>
//     );
// }

// export default CounterFun;

class App extends Component {
  render() {
    return (
      <div>
        {/* <City /> */}
        {/* <CityFun /> */}
        {/* <Country /> */}
        {/* <CountryFun /> */}
        {/* <Time /> */}
        {/* <TimeFun /> */}
        {/* <App /> */}
        <CounterFun />
      </div>
    );
  }
}

export default App;