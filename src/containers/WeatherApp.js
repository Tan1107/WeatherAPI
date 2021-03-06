import React, { Component } from "react";
import "./styles.css";
import "moment-timezone";
import CurrentWeather from "../components/CurrentWeather";
import CircularProgress from "@material-ui/core/CircularProgress";
import DailyWeatherList from "../components/DailyWeatherList";
import SearchAppBar from "../components/SearchAppBar";

export default class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
      cityName: "hanoi",
    };
  }


  componentDidMount() {
    this.getWeatherData(this.state.cityName);
  }

  getWeatherData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=4451f0cc1d6e5960079c7eb4634f7df8`;
    const response = await fetch(url);
    const responseJson = await response.json();
    this.setState({
      weatherData: responseJson,
    });
    console.log(responseJson);
  };

  renderContent = () => {
    if (this.state.weatherData.main) {
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
        <SearchAppBar
          getWeatherDataCity={this.getWeatherData}
        />
        {this.renderContent()}
      </div>
    );
  }
}
