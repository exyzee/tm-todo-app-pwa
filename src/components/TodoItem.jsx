import React from "react";
import { Link } from "react-router-dom";

function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <Link to={`/detail/${todo.id}`}>View Details</Link>
    </div>
  );
}

export default TodoItem;
