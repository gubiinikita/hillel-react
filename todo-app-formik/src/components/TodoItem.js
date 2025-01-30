import React from "react";
import "../App.css";

const TodoItem = ({ index, todo, removeTodo }) => {
  return (
    <li className="todo-item">
      {todo}
      <button onClick={() => removeTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;