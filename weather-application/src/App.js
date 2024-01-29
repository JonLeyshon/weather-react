import React, { Component } from "react";
import Spinner from "./components/Spinner";
import "./App.css";
import axios from "axios";
import Interface from "./components/Interface";

class App extends Component {
  state = {};

  async componentDidMount() {
    console.log(this.state.location);
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=373105f8347d3ec002619e8fe288fb6a
      `
    );
    this.setState({ weather: data });
  }

  handleLocationSearch = async (currentLocation) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&units=metric&appid=373105f8347d3ec002619e8fe288fb6a
      `
    );
    this.setState({ weather: data });
  };

  render() {
    console.log(this.state);
    return this.state.weather ? (
      <Interface
        weather={this.state.weather}
        location={this.state.location}
        handleLocationSearch={this.handleLocationSearch}
      />
    ) : (
      <Spinner />
    );
  }
}

export default App;
