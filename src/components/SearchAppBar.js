import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import "./styles.css";

export default class SearchAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({
      city: e.target.value,
    });
  };
  onSearch = (e) => {
    const { city } = this.state;
    if (e.key === "Enter") {
      this.props.getWeatherDataCity(city);
    }
  };
  render() {
    return (
      <div className="navBar">
        <AppBar position="static">
          <Toolbar>
            <Typography className="titelName" variant="h6" noWrap>
              Weather
            </Typography>
            <div className="buttonSearch">
              <div className="searchIcon">
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={this.onChange}
                onKeyDown={this.onSearch}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
