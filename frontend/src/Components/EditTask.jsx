import React, { useState, useEffect } from 'react';

function EditTask({ task, onUpdate, onCancel }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title || '');
      setDate(task.date || new Date().toISOString().substr(0, 10));
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onUpdate({
      ...task,
      title,
      date,
      completed: task.completed || false,
      index: task.index,
    });
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    marginRight: '10px',
    fontFamily: 'sans-serif',
    backgroundColor: '#fffce0', // light yellow
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#5c6bc0',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ccc',
    color: '#000',
    marginLeft: '10px',
  };

  return (
    <div>
      <h3>Edit Task</h3>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          required
          style={inputStyle}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Update</button>
        <button type="button" onClick={onCancel} style={cancelButtonStyle}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditTask;