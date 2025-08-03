import React, { useState } from 'react';

const NewTask = ({ onAdd }) => {
  const getToday = () => new Date().toISOString().split("T")[0];
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(getToday());

  const formatLocalDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const formattedDate = formatLocalDate(date);

    const task = {
      title,
      date: formattedDate,
      completed: false,
    };

    onAdd(task);
    setTitle('');
    setDate(getToday());
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

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Add Task</button>
    </form>
  );
};

export default NewTask;