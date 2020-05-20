import React, { Component } from "react";
import { Input } from "reactstrap";
export default class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: "",
    };
  }
  onChangeValue = (e) => {
    this.setState({
      newToDo: e.target.value,
    });
  };
  onAddToDODO = (e) => {
    this.props.addToDODO(this.state.newToDo);
  };

  render() {
    return (
      <div>
        <div className="form-add">
          <Input
            className="form-add-task"
            name="todo"
            id="fname"
            type="text"
            onChange={this.onChangeValue}
          />
          <button className="btn-btn-succsess" onClick={this.onAddToDODO}>
            Add Task
          </button>
        </div>
      </div>
    );
  }
}
