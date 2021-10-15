import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import todos from "./todos";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: todos,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (id) => {
    this.setState((prevState) => {
      const updatedState = prevState.todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todoList: updatedState,
      };
    });
  };

  render() {
    const myTodos = this.state.todoList.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return (
      <>
        <Header user="Derek" />
        <div className="container todo-list">{myTodos}</div>
      </>
    );
  }
}

export default App;
