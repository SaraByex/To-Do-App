import React from 'react';

const CompletedTasks = ({ completedTasks, onUncomplete }) => {
  if (completedTasks.length === 0) {
    return <p style={{ fontStyle: 'italic' }}>No completed tasks yet.</p>;
  }

  return (
    <div>
      {completedTasks.map((task, index) => (
        <div
          key={index}
          style={{
            background: '#18a5e6ff',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textDecoration: 'line-through',
            color: '#888',
          }}
        >
          <div>
            <strong>{index + 1}.</strong> {task.title} — {task.date}
          </div>
          <button
            onClick={() => onUncomplete(index)}
            style={{
              backgroundColor: '#ff9800',
              color: 'white',
              width: 70,
              border: 'none',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            🔁 Unmark
          </button>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;




