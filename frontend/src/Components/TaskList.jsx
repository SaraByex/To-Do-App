import React, { useState } from 'react';

const TaskList = ({ tasks, onDelete, onEdit, onToggle, onRestore, isDeletedList = false }) => {
  const [sortAsc, setSortAsc] = useState(true);

  // Sort tasks by date (assumes date format DD-MMM-YYYY, convert to Date for sorting)
  const parseDate = (dateStr) => {
    // Convert "25-Apr-2025" => Date object
    const [day, monthStr, year] = dateStr.split("-");
    const month = new Date(`${monthStr} 1, 2000`).getMonth(); // month index 0-11
    return new Date(year, month, day);
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return sortAsc ? dateA - dateB : dateB - dateA;
  });

  return (
    <div>
      <button onClick={() => setSortAsc(!sortAsc)} style={sortBtnStyle}>
        Sort by Date {sortAsc ? '⬆️' : '⬇️'}
      </button>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th style={thStyle}>#</th>
            <th style={thStyle}>Task</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedTasks.map((task, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
              <td style={tdStyle}>{index + 1}</td>

              <td style={tdStyle}>
                {!isDeletedList && (
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle && onToggle(tasks.indexOf(task))}
                    style={{ marginRight: '8px' }}
                  />
                )}
                {task.title}
              </td>
              <td style={tdStyle}>{task.date}</td>
              <td style={tdStyle}>
                {!isDeletedList ? (
                  <>
                    <button onClick={() => onEdit(task, tasks.indexOf(task))} style={btnStyle}>Edit✏️</button>
                    <button onClick={() => onDelete(tasks.indexOf(task))} style={btnStyle}>Delete🗑️</button>
                  </>
                ) : (
                  <button onClick={() => onRestore(tasks.indexOf(task))} style={btnStyle}>♻️ Restore</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styles
const thStyle = { textAlign: 'left', padding: '8px', background: '#f0f0f0' };
const tdStyle = { padding: '8px' };
const btnStyle = { marginRight: '5px', cursor: 'pointer' };
const sortBtnStyle = {
  background: '#90caf9',
  color: '#333',
  padding: '5px 10px',
  marginBottom: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default TaskList;

