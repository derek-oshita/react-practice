import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import todos from "./todos";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: todos,
    };
  }

  handleClick() {
    console.log("biiiiiiitch");
  }

  render() {
    const myTodos = this.state.todoList.map((item) => (
      <TodoItem key={item.id} item={item} />
    ));
    return (
      <>
        <Header user="Derek" />
        {myTodos}
        <div className="container"></div>
        <button className="mt-5" onClick={this.handleClick}>
          Click Me!
        </button>
        <div className="container">
          <img
            onMouseOver={() => console.log("Whaaaat mouseover")}
            alt="Bill Murray"
            src="https://www.fillmurray.com/200/100"
          ></img>
        </div>
      </>
    );
  }
}

export default App;
