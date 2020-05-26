import React, { Component } from "react";
import DailyWeatherListItem from "./DailyWeatherListItem";

export default class DailyWeatherList extends Component {
  render() {
    const daily = this.props.dailyWeatherList;

    return daily.map((el, index) => {
      const imageUrl = `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`;
      return <DailyWeatherListItem listItem={el} imageUrlItem={imageUrl} />;
    });
  }
}
