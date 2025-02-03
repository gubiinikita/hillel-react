import React from "react";
import TodoItem from "./TodoItem";
import "../App.css";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;