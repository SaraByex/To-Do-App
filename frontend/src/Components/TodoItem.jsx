import React from 'react';

function TodoItem({ todo, index, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id, !todo.completed)}
      />

      {/* Task text with numbering */}
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {index + 1}. {todo.text} {todo.completed && <span className="completed-label">(Completed)</span>}
      </span>

      {/* Due date */}
      <small style={{ marginLeft: '10px', color: '#555' }}>
        {new Date(todo.dueDate).toLocaleString()}
      </small>

      {/* Delete button */}
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;

