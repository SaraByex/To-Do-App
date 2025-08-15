To-Do App is a simple full-stack To-Do list application built with React (frontend) and Express.js (backend).  The app allows users to add and delete, and mark tasks as completed with optional due dates.

Features: Add new tasks with a due date and time.
Mark tasks as completed (with checkbox).
Delete tasks.

Backend API built with Express.js.
cors installed for communication between frontend and backend.

Tech Stack
Frontend: React 
Backend: Node.js, Express.js, Nodemon, cors, Fetch API

Installation & Setup
Clone the Repository: git clone "https://github.com/SaraByex/To-Do-App.git"
cd To-Do-App

Backend Setup
cd backend
npm install
node server.js
Backend will run on: "http://localhost:5000"

Frontend Setup
cd ../frontend
npm install
npm start
Frontend will run on: "http://localhost:3000"

API Endpoints
- GET	/api/todos	(get all todos)
- POST	/api/todos	(add a new todo)
- PUT	/api/todos/:id	(update a todo)
- DELETE	/api/todos/:id	(delete a todo)

Usage
Start backend first:
nodemon index.js
Start frontend:
npm start
Open "http://localhost:3000" in the browser.
