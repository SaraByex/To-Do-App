

import React, {useState} from 'react';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  // default due date = 1 hour from now//
  const defaultDueDate = new Date(Date.now() + 1 * 60 * 60 * 1000) // 1 hour in ms
    .toISOString().slice(0, 16); // format for datetime-local input

  const [dueDate, setDueDate] = useState(defaultDueDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAdd({ text, dueDate });

    // Reset input fields
    setText('');
    setDueDate(defaultDueDate);
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        required
      />
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        min={new Date().toISOString().slice(0, 16)} 
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
