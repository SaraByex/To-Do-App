const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// enable cors for frontend//
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Initial todos array//
let todos = [
  { 
    id: 1, 
    text: 'Make my to do list', 
    completed: false,
    dueDate: new Date().toISOString().slice(0, 16), // default due date
  }
];

// GET all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// POST a new todo
app.post('/api/todos', (req, res) => {
  // Generate next id using 'item'
  const nextId = todos.length > 0 ? Math.max(...todos.map(item => item.id)) + 1 : 1;

  const newTodo = {
    id: nextId,                          // Id of the new todo
    text: req.body.text,                 
    completed: false,                     // new todo is not completed
    dueDate: req.body.dueDate || new Date().toISOString().slice(0, 16), // due date
  };

  todos.push(newTodo);                    // Add new todo to array
  res.status(201).json(newTodo);          // Send back created todo
});

// PUT update a todo
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(item => item.id === id);
  
  if (todo) {
    if (req.body.text !== undefined) todo.text = req.body.text;
    if (req.body.dueDate !== undefined) todo.dueDate = req.body.dueDate;
    if (req.body.completed !== undefined) {
      todo.completed = req.body.completed;
      todo.completedAt = req.body.completed ? new Date().toISOString().slice(0, 16) : null;
    }
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// deLETE a todo item and renumber remaining items///
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(item => item.id !== id);

  // Renumber remaining todos starting from 1
  todos = todos.map((item, index) => ({ ...item, id: index + 1 }));

  res.status(204).end();
});

// POST endpoint to reset todos to default
app.post('/api/reset-todos', (req, res) => {
  todos = [
    { 
      id: 1, 
      text: 'Make my to do list', 
      completed: false,
      dueDate: new Date().toISOString().slice(0, 16), // default due date

    }
  ];
  res.status(200).json({ message: 'Todos reset to default' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

