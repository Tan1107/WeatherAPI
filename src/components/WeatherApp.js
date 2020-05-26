import React, { Component } from "react";
import "./styles.css";
import "moment-timezone";
import CurrentWeather from "./CurrentWeather";
import CircularProgress from "@material-ui/core/CircularProgress";
import DailyWeatherList from "./DailyWeatherList";
import SearchAppBar from "./SearchAppBar";

export default class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
      cityName: "hanoi",
    };
  }

  componentDidMount() {
    this.getWeatherData();
  }

  getWeatherData = async () => {
    const city = this.state.cityName;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=4451f0cc1d6e5960079c7eb4634f7df8`;
    const response = await fetch(url);
    const responseJson = await response.json();
    this.setState({
      weatherData: responseJson,
    });
    console.log(responseJson);
  };

  renderContent = () => {
    if (this.state.weatherData) {
      return (
        <React.Fragment>
          <CurrentWeather currentWeather={this.state.weatherData} />
        </React.Fragment>
      );
    } else {
      return <CircularProgress />;
    }
  };
  render() {
    return (
      <div className="wheather">
        <SearchAppBar search={this.state.cityName} />
        {this.renderContent()}
      </div>
    );
  }
}
