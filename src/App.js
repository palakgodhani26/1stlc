import React, { Component } from 'react';
import Demo from './Components/Demo';
import City from './Containers/City';
import Country from './Containers/Country';
import CityFun from './Containers/CityFun';
import CountryFun from './Containers/CountryFun';


class App extends Component {
  render() {
    return (
      <div>
        <City />
        <CityFun />
        <Country />
        <CountryFun />
      </div>
    );
  }
}

export default App;