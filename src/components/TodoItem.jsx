import React from "react";

const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <p>{props.item.text}</p>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => console.log("changed!")}
      />
    </div>
  );
};

export default TodoItem;
