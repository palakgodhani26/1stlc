import React, { Component } from 'react';

class City extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityName : 'Surat'
        }
    }
    changeCity = () => {
        this.setState({
            cityName :'Baroda'
        });
    }
    render() {
        return (
            <div>
                <p>{this.state.cityName}</p>
                <button onClick={() => this.changeCity()}>changeCity</button>
                <p>{this.props.id} {this.props.Country_Name}</p>
            </div>
        );
    }
}

export default City;