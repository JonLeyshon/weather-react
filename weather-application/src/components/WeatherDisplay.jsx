import React, { Component } from "react";
class WeatherDisplay extends Component {
  state = {};
  render() {
    const { name, main, weather, wind } = this.props.weather;
    const { description, icon } = weather[0];

    return (
      <>
        <h2>{name}</h2>
        <p> {Math.floor(main.temp)} C </p>
        <p>{description}</p>
      </>
    );
  }
}

export default WeatherDisplay;
