import React from 'react';

const DeleteTask = ({ deletedTasks, onRestore }) => {
  if (deletedTasks.length === 0) {
    return <p style={{ fontStyle: 'italic' }}>No deleted tasks.</p>;
  }

  return (
    <div>
      {deletedTasks.map((task, index) => (
        <div
          key={index}
          style={{
            background: '#ffe6e6',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <strong>{index + 1}.</strong> {task.title} — {task.date}
          </div>
          <button
            onClick={() => onRestore(index)}
            style={{
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            ♻️ Restore
          </button>
        </div>
      ))}
    </div>
  );
};

export default DeleteTask;