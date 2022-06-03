import React, { Component } from 'react';
import City from './City';


class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryName: 'India'
        }
    }
    changeCountry = () => {
        this.setState({
            countryName: 'US'
        });
    }
    render() {
        return (
            <div>
                <p>{this.state.countryName}</p>
                <button onClick={() => this.changeCountry()}>changeCountry</button>
                <City id="101" country_Name={this.state.countryName}/>
            </div>
        );
    }
}

export default Country;