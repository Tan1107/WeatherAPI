import React, { Component } from "react";
import "./styles.css";

export default class WeatherApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: {},
    };
  }

  componentDidMount() {
    this.getWheatherData();
  }

  getWheatherData = async () => {
    const url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=-21.02851&lon=105.804817&&units=metric&lang=vi&appid=4451f0cc1d6e5960079c7eb4634f7df8";
    const response = await fetch(url);
    const responseJson = await response.json();
    this.setState({
      weatherData: responseJson,
    });
    console.log(responseJson);
  };

  renderCurrentWeather = () => {
    if (this.state.weatherData.current) {
      const { current } = this.state.weatherData;
      const imageUrl = `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
      var moment = require('moment')

      return (
        <div className="currentWheather">
          <img className="imgCurrent" src={imageUrl} />
          <div className="infoCurrent">
            <p>Hôm nay là: moment({current.dt}).format('dddd') </p>
            <h1>{current.temp} °C</h1>
            <h2>{current.weather[0].description}</h2>
            <p>Cảm Giác: {current.feels_like} °C</p>
            <p>Độ Ẩm: {current.humidity} %</p>
            <p>Áp Suất: {current.pressure}</p>
            <p>Tốc Độ Gió: {current.wind_speed}</p>
            <p>Mặt Trời Mọc: {Date(current.sunrise)}</p>
            <p>Mặt Trời Lặn: {Date(current.sunset)}</p>
          </div>
        </div>
      );
    }
  };

  renderWheatherHourData = () => {
    if (this.state.weatherData.daily) {
      const { daily } = this.state.weatherData;
      return daily.map((el, index) => {
        const imageUrl = `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`;
        return (
          <div className="dailyWeatherDayOne">
            <div>
              <p>Nhiệt Độ: {el.temp.day} °C</p>
              <p>Độ Ẩm: {el.humidity} %</p>
            </div>
            <img src={imageUrl} style={{ width: 50 }} />
            <h4>{el.weather[0].description}</h4>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div className="wheather">
        <div className="bar">HelloWeatherApp</div>
        <div>{this.renderCurrentWeather()}</div>
        <div className="dailyWeatherDayAll">
          {this.renderWheatherHourData()}
        </div>
      </div>
    );
  }
}
