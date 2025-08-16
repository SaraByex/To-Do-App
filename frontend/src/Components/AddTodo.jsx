import React, { useState } from 'react';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState(
    new Date(Date.now() + 1 * 60 * 60 * 1000).toISOString().slice(0, 16)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd({ text, dueDate });
    setText('');
    setDueDate(new Date(Date.now() + 1 * 60 * 60 * 1000).toISOString().slice(0, 16));
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task..."
        required
      />
      <input
        type="datetime-local"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;

