import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {

    const name = cityData.city.name;
    const temp = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp - 273.15));
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    //const lon = cityData.city.coord.lon;
    //const lat = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temp} color="purple" units="C" /></td>
        <td><Chart data={pressure} color="blue" units="hPa" /></td>
        <td><Chart data={humidity} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th width={180}>City</th>
            <th width={180}>Temperature (C)</th>
            <th width={180}>Pressure (hPa)</th>
            <th width={180}>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

}

// function mapStateToProps(state) {
//   return  { weather: state.weather };
// }

function mapStateToProps({weather}) {
  return  { weather }; // { weather: weather };
}

export default connect(mapStateToProps)(WeatherList);
