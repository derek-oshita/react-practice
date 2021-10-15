import React from "react";

// const TodoItem = (props) => {
//   const { handleChange } = props;
//   const { id, text, completed } = props.item;
//   return (
//     <div className="todo-item">
//       <input
//         type="checkbox"
//         checked={completed}
//         onChange={() => handleChange(id)}
//       />
//       <p>{text}</p>
//     </div>
//   );
// };

// export default TodoItem;

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
