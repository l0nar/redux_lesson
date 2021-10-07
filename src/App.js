import React, { Component } from "react";
import InputComp from "./ToDo/InputComp";
import ButtonCreateToDoItem from "./ToDo/ButtonCreateToDoItem";

class App extends Component {
  render() {
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col">
            <h1>ToDo List</h1>
          </div>
          <div className="col">
            <InputComp />
            <ButtonCreateToDoItem />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
