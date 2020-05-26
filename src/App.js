import React from "react";
import "./App.css";
import List from "./components/List";
import { Input } from "reactstrap";
import "./components/styles.css";
import AddForm from "./components/AddForm";
import SearchAppBar from "./components/SearchAppBar";

const toDoList = [
  { id: 0, name: "Đi học", isDone: false },
  { id: 1, name: "Đi làm", isDone: false },
  { id: 2, name: "Ăn cơm", isDone: false },
  { id: 3, name: "Rửa bát", isDone: false },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: toDoList,
    };
  }

  componentDidMount() {
    console.log("didmount");
  }
  static getDerivedStateFromProps(props, state) {}
  // removeItem = (index) => {
  removeItem = (id) => {
    const list = [...this.state.toDoList];
    // list.splice(index,1);
    // list[index].isDone=true;

    // if(list[index].isDone===true){
    // 	list[index].isDone=false
    // }
    // else{
    // 	list[index].isDone=true
    // }
    // list[index].isDone ? list[index].isDone=false : list[index].isDone=true

    // list[index].isDone = !list[index].isDone
    // this.setState({
    // 	toDoList:list,
    // })

    const index = list.findIndex((el) => el.id === id);
    if (index !== -1) {
      list[index].isDone = !list[index].isDone;
      this.setState({
        toDoList: list,
        newToDo: "",
      });
    }
  };

  addToDO = (toDo) => {
    const newToDo = {
      name: toDo,
      id: this.state.toDoList.length + 1,
      isDone: false,
    };
    const newList = [...this.state.toDoList];
    this.setState({
      toDoList: newList,
    });
  };
  render() {
    return (
      <div className="list-container">
        <SearchAppBar addToDODO={this.addToDO} />
        {/* <SearchAppBar addToDODO={this.addToDO} /> */}
        <div className="containerItem">
        <div>
          <h3>ToDo</h3>
          <List
            list={this.state.toDoList.filter((el) => el.isDone === false)}
            removeItem={this.removeItem}
          />
        </div>
        <div>
          <h3>DONE</h3>
          <List
            list={this.state.toDoList.filter((el) => el.isDone === true)}
            removeItem={this.removeItem}
          />
        </div>
        </div>
        <p>
          {" "}
          DONE {this.state.toDoList.filter((el) => el.isDone === true).length} /
          {this.state.toDoList.length}
        </p>
      </div>
    );
  }
}
