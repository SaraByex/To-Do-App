const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

let todos = [
  { 
    id: 1, 
    text: 'Work on to do list', 
    completed: false,
    dueDate: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    completedAt: null
  }
];

// GET all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// POST a new todo
app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
    text: req.body.text,
    completed: false,
    dueDate: req.body.dueDate || new Date().toISOString(),
    createdAt: new Date().toISOString(),
    completedAt: null
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT update a todo
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  
  if (todo) {
    if (req.body.text !== undefined) todo.text = req.body.text;
    if (req.body.dueDate !== undefined) todo.dueDate = req.body.dueDate;
    if (req.body.completed !== undefined) {
      todo.completed = req.body.completed;
      todo.completedAt = req.body.completed ? new Date().toISOString() : null;
    }
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// DELETE a todo
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

