import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";

export default class CurrentWeather extends Component {
  render() {
    const current = this.props.currentWeather;
    console.log(current);
    // const imageUrl = `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
    return (
      <div className="currentWheather">
        {/* <img className="imgCurrent" src={imageUrl} /> */}
        <div className="infoCurrent">
          <Moment format="HH:mm DD.MM.YYYY" unix>
            {current.dt}
          </Moment>
          <h1>{current.name}</h1>
          <h1>{current.main.temp}</h1>

          {/* <h2>{current.main[0].description}</h2>
          <p>Cảm Giác: {current.feels_like} °C</p>
          <p>Độ Ẩm: {current.humidity} %</p>
          <p>Áp Suất: {current.pressure}</p>
          <p>Tốc Độ Gió: {current.wind_speed}</p>
          <Moment className="sunrise" format="[Măt Trời Mọc: ] HH:mm" unix>
            {current.sunrise}
          </Moment>
          <Moment format="[Mặt Trời Lặn:] HH:mm" unix>
            {current.sunset}
          </Moment> */}
        </div>
      </div>
    );
  }
}
