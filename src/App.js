import React, { Component } from "react";
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
  render() {
    const myTodos = this.state.todoList.map((item) => (
      <TodoItem key={item.id} item={item} />
    ));
    return (
      <>
        <Header user="Derek" />
        {myTodos}
      </>
    );
  }
}

export default App;
