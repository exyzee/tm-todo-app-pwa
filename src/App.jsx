import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Do the laundry', text: 'Wash clothes', time: '2025-03-26T12:00', completed: false },
    { id: 2, title: 'Buy groceries', text: 'Milk, bread, eggs', time: '2025-03-28T10:00', completed: false },
    { id: 3, title: 'Study for exams', text: 'Math and Science', time: '2025-03-27T09:00', completed: false },
  ]);

  const [taskInput, setTaskInput] = useState({ title: '', text: '', time: '' });
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (taskInput.title && taskInput.text && taskInput.time) {
      const newTask = {
        id: tasks.length + 1,
        title: taskInput.title,
        text: taskInput.text,
        time: taskInput.time,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput({ title: '', text: '', time: '' });
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <div className="task-container">
        <h1 className="todo-header">Todo</h1>

        <div className="input-container">
          <input
            type="text"
            value={taskInput.title}
            onChange={(e) => setTaskInput({ ...taskInput, title: e.target.value })}
            placeholder="Task Title"
            className="task-input"
          />
          <textarea
            value={taskInput.text}
            onChange={(e) => setTaskInput({ ...taskInput, text: e.target.value })}
            placeholder="Task Description"
            className="task-textarea"
          />
          <input
            type="datetime-local"
            value={taskInput.time}
            onChange={(e) => setTaskInput({ ...taskInput, time: e.target.value })}
            className="task-time"
          />
          <button onClick={addTask} className="add-task-button">Add Task</button>
        </div>

        <div className="filter-container">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option value="all">All Tasks</option>
            <option value="done">Done</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div className="task-list">
          {filteredTasks.map((task) => (
            <div key={task.id} className="task-tile">
              <div
                className={`task-text ${task.completed ? 'completed' : ''}`}
                onClick={() => toggleTaskCompletion(task.id)}
              >
                <strong>{task.title}</strong><br />
                {task.text}<br />
                Due: {new Date(task.time).toLocaleString()}
              </div>
              <button
                className="delete-button"
                onClick={() => deleteTask(task.id)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
