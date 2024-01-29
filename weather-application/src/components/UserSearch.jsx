import React, { Component } from "react";
class UserSearch extends Component {
  state = { currentLocation: this.props.location };
  render() {
    console.log(this.props.weather);
    return (
      <>
        <h1>Weather App</h1>
        <input
          type="text"
          value={this.state.currentLocation}
          onChange={(e) => this.setState({ currentLocation: e.target.value })}
        ></input>
        <button
          onClick={(e) =>
            this.props.handleLocationSearch(this.state.currentLocation)
          }
        >
          Search
        </button>
      </>
    );
  }
}

export default UserSearch;
