import React, { Component } from 'react'
import Moment from "react-moment";
import "moment-timezone";
import "./styles.css";
export default class DailyWeatherListItem extends Component {
    render() {
        const el = this.props.listItem
        const imageUrl = this.props.imageUrlItem
              return (
                <div className="dailyWeatherDayOne">
                  <div>
                    <Moment className="moment" format="DD/MM" unix>
                      {el.dt}
                    </Moment>
                    <h3>
                      {el.temp.min}-{el.temp.max}°C
                    </h3>
                    <p>Độ Ẩm: {el.humidity}%</p>
                  </div>
                  <img src={imageUrl} style={{ width: 50 }} />
                  <h4>{el.weather[0].description}</h4>
                </div>
              );
              }
}


