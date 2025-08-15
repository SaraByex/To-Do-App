import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch tasks from backend on page load
  useEffect(() => {
    fetch('http://localhost:5000/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // Reset tasks by calling backend reset endpoint///
  useEffect(() => {
    fetch('http://localhost:5000/api/reset-todos', { method: 'POST' })
      .then(() => {
        // Fetch again after reset///
        fetch('http://localhost:5000/api/todos')
          .then(res => res.json())
          .then(data => setTodos(data));
      });
  }, []); // runs once on refresh

  const handleAdd = (newTodo) => {
    fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
    .then(res => res.json())
    .then(added => setTodos(prev => [...prev, added]));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/todos/${id}`, { method: 'DELETE' })
      .then(() => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
      });
  };

  const handleToggle = (id, completed) => {
    fetch(`http://localhost:5000/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed })
    })
    .then(res => res.json())
    .then(updated => {
      setTodos(prev => prev.map(todo => todo.id === id ? updated : todo));
    });
  };

  return (
    <div className="app">
      <h1>My Todo List</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default App;