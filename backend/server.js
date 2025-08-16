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

// Initial todos array
let todos = [
  { 
    id: 1, 
    text: 'Make my to do list', 
    completed: false,
    dueDate: new Date().toISOString().slice(0, 16),
  }
];

// GET all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// POST a new todo
app.post('/api/todos', (req, res) => {
  const nextId = todos.length > 0 ? Math.max(...todos.map(item => item.id)) + 1 : 1;
  const newTodo = {
    id: nextId,
    text: req.body.text,
    completed: false,
    dueDate: req.body.dueDate || new Date().toISOString().slice(0, 16),
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT update a todo
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(item => item.id === id);

  if (todo) {
    if (req.body.text !== undefined) todo.text = req.body.text;
    if (req.body.dueDate !== undefined) todo.dueDate = req.body.dueDate;
    if (req.body.completed !== undefined) todo.completed = req.body.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// DELETE a todo and renumber remaining
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(item => item.id !== id);
  todos = todos.map((item, index) => ({ ...item, id: index + 1 }));
  res.status(204).end();
});

// POST to reset todos
app.post('/api/reset-todos', (req, res) => {
  todos = [
    { 
      id: 1, 
      text: 'Make my to do list', 
      completed: false,
      dueDate: new Date().toISOString().slice(0, 16),
    }
  ];
  res.status(200).json({ message: 'Todos reset to default' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
