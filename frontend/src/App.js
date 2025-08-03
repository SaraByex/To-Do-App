import './App.css';
import React, { useState } from 'react';
import Heading from './Components/Heading';
import NewTask from './Components/NewTask';
import TaskList from './Components/TaskList';
import DeleteTask from './Components/DeleteTask';
import EditTask from './Components/EditTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [showDeleted, setShowDeleted] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const toDelete = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));
    setDeletedTasks([...deletedTasks, toDelete]);
  };

  const restoreTask = (index) => {
    const taskToRestore = deletedTasks[index];
    setDeletedTasks(deletedTasks.filter((_, i) => i !== index));
    setTasks([...tasks, taskToRestore]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[updatedTask.index] = {
      title: updatedTask.title,
      date: updatedTask.date,
      completed: updatedTask.completed,
    };
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  const completedTasks = tasks.filter(task => task.completed);
  const incompleteTasks = tasks.filter(task => !task.completed);

  const toggleBtnStyle = {
    background: '#5c6bc0',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '10px',
  };

  return (
    <div
      className="app"
      style={{
    padding: '20px',
    maxWidth: '700px',
    margin: 'auto',
    fontFamily: 'sans-serif',
    backgroundColor: '#fff9c4', // light yellow
    minHeight: '100vh',
      }}
    >
      <Heading />

      {!editingTask ? (
        <>
          <NewTask onAdd={addTask} />

          <h3 style={{ marginTop: '20px' }}>Pending Tasks</h3>
          <TaskList
            tasks={incompleteTasks}
            onDelete={deleteTask}
            onEdit={(task, index) => setEditingTask({ ...task, index })}
            onToggle={toggleComplete}
          />
        </>
      ) : (
        <EditTask
          task={editingTask}
          onUpdate={updateTask}
          onCancel={() => setEditingTask(null)}
        />
      )}

      <div style={{ marginTop: '30px' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h3 style={{ margin: 0 }}>Completed Tasks</h3>
    <button onClick={() => setShowCompleted(!showCompleted)} style={toggleBtnStyle}>
      {showCompleted ? 'Hide' : 'Show'} ✅
    </button>
  </div>

  {showCompleted && (
    <TaskList
      tasks={completedTasks}
      onDelete={deleteTask}
      onEdit={(task, index) => setEditingTask({ ...task, index })}
      onToggle={toggleComplete}
    />
  )}
</div>

      <div style={{ marginTop: '30px' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h3 style={{ margin: 0 }}>Deleted Tasks</h3>
    <button onClick={() => setShowDeleted(!showDeleted)} style={toggleBtnStyle}>
      {showDeleted ? 'Hide' : 'Show'} 🗑️
    </button>
  </div>

  {showDeleted && (
    <DeleteTask
      deletedTasks={deletedTasks}
      onRestore={restoreTask}
    />
  )}
</div>
    </div>
  );
};

export default App;
//////////////////////////////////////////////////////////////////////