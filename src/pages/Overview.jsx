import React, { useState } from "react";
import TodoItem from "../components/TodoItem";

function Overview() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Buy groceries", description: "Milk, Eggs, Bread" },
    { id: 2, title: "Finish project", description: "Complete UI design" },
  ]);

  return (
    <div>
      <h2>Overview</h2>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default Overview;
