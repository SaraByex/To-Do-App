import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
///////////  // format the due date into a readable string///
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    ////// mark each todo item in the list///
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      
      {/* Checkbox section */}
      <div className="todo-checkbox">
        <input
          type="checkbox" checked={todo.completed}                 // checkbox reflects task completion//
          onChange={() => onToggle(todo.id, !todo.completed)} // toggle completion on change////
        />
      </div>

     
      <div className="todo-content">
        {/* strike-through styling */}
        <span
          className="todo-text"
          style={{textDecoration: todo.completed ? 'line-through' : 'none', // Strike-through if completed
            color: todo.completed ? 'gray' : 'black'                  // Gray text if completed
          }}
        >
          {todo.id}. {todo.text}{todo.completed ? ' - Completed' : ''}  {/* Display task ID and text */}
        </span>

        {/* due date display */}
        <span className="todo-date">Due: {formatDate(todo.dueDate)}</span>
      </div>

      {/* Action buttons section */}
      <div className="todo-actions">
        {/* delete button only if task is not completed */}
        {!todo.completed && (
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        )}
      </div>
    </li>
  );
}

export default TodoItem;