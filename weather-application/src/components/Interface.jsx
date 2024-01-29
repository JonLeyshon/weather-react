import React, { Component } from "react";
import UserSearch from "./UserSearch";
import WeatherDisplay from "./WeatherDisplay";

class Interface extends Component {
  render() {
    const { name, dt, main, weather, wind } = this.props.weather;
    const { description, icon } = weather[0];

    return (
      <>
        <UserSearch
          location={this.props.location}
          handleLocationSearch={this.props.handleLocationSearch}
        />
        <WeatherDisplay weather={this.props.weather} />
      </>
    );
  }
}

export default Interface;
