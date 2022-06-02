import React, { Component } from 'react';
import City from './Containers/City';
import Country from './Containers/City';
import CityFun from './Containers/CityFun';
import CountryFun from './Containers/CityFun';

class App extends Component {
  render() {
    return (
      <div>
        {/* <City /> */}
        <CityFun />
      </div>
    );
  }
}

export default App;