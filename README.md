To-Do-App

This To-Do application is build using React for the front-end and Node.js with Express for the back-end. 

This project will help you demonstrate your understanding of key concepts in
React and Node.js development.
Requirements:
Front-End (React)
1. Create a React application that allows users to:
a. Add new to-do items.
b. Mark to-do items as completed.
c. Delete to-do items.
d. View a list of all to-do items.
2. Components:
a. App: Main component that holds the state and renders child components.
b. TodoList: Displays the list of to-do items.
c. TodoItem: Represents a single to-do item.
d. AddTodo: Form to add a new to-do item.
3. State Management:
a. Use useState to manage the state within the App component.
b. Use useEffect for side effects, such as fetching data from the server.
4. Styling:
a. Apply basic styling to make the application visually appealing. You can use CSS
or a CSS-in-JS library like styled-components.

5. API Calls:
a. Use Axios or fetch to make API calls to your back-end server to create, read,
update, and delete to-do items.

Back-End (Node.js with Express)
1. Create a Node.js server using Express that:
a. Serves the React application.
b. Provides a RESTful API for managing to-do items.
2. API Endpoints:
a. GET /api/todos: Retrieve all to-do items.
b. POST /api/todos: Add a new to-do item.
c. PUT /api/todos/:id: Update an existing to-do item (e.g., mark as completed).
d. DELETE /api/todos/:id: Delete a to-do item.
3. Data Storage:
a. Use an in-memory data store (e.g., an array) to store to-do items. For
simplicity, you don’t need a database for this project.

4. Middleware:
a. Use Express middleware for parsing JSON request bodies.

b. Implement CORS middleware to allow your React app to communicate with
the server.

Deliverables:
1. Source code for the React application.
2. Source code for the Node.js server.
3. A README file with instructions on how to run the application locally.
Submission:
Submit your project by uploading it to a GitHub repository and sharing the link with your
instructor.
Evaluation Criteria:
1. Functionality: Does the application meet all the requirements?
2. Code Quality: Is the code well-organized and easy to understand?
3. UI/UX: Is the user interface clean and easy to use?
4. Documentation: Is the README file clear and comprehensive?
Tips:
• Break down the project into smaller tasks and tackle them one by one. •
Use the official documentation for React and Express as references. •
Don’t hesitate to ask for help if you get stuck.

Grading Rubric: Simple To-Do Application
Total Points: 100
1. Functionality (40 Points)
• Adding To-Do Items (10 Points):
o Fully functional form to add new to-do items.
o Items appear immediately in the list after being added.
• Viewing To-Do Items (10 Points):
o All to-do items are displayed correctly.
o Proper handling of empty state (e.g., a message indicating no to-dos are
available).

• Marking To-Do Items as Completed (10 Points):
o Users can mark items as completed.
o Visual indication of completed items.
• Deleting To-Do Items (10 Points):
o Users can delete to-do items.
o Items are removed from the list immediately after deletion.

2. Code Quality (30 Points)
• Code Organization (10 Points):
o Code is well-structured and follows best practices.
o Appropriate use of components and modular design.
• Readability (10 Points):
o Code is easy to read and understand.
o Proper use of comments, meaningful variable names, and consistent
formatting.

• State Management (10 Points):
o Proper use of React’s state management (useState, useEffect).
o State updates are handled efficiently and correctly.

3. UI/UX (20 Points)
• User Interface (10 Points):
o The application is visually appealing and user-friendly.
o Consistent styling and layout throughout the application.
• User Experience (10 Points):
o The application is intuitive and easy to use.
o Clear feedback to the user (e.g., confirmation messages, visual indicators).

4. API Integration (10 Points)
• API Calls (5 Points):
o Properly implemented API calls using axios or fetch.
o Error handling for API requests.
• Data Handling (5 Points):
o Correctly manages data fetching, updating, and deletion.
o Ensures the front-end stays in sync with the back-end.

5. Documentation (10 Points)
• README File (5 Points):
o Clear and comprehensive instructions on how to set up and run the
application.
o Includes an overview of the project, installation steps, and usage instructions.
• Code Comments (5 Points):
o Code is adequately commented where necessary.
o Comments help explain complex or non-obvious parts of the code.

Bonus (Up to 5 Points)
• Extra Features (Up to 3 Points):
o Implementation of additional features beyond the basic requirements (e.g.,
editing to-do items, adding due dates).

• Deployment (Up to 2 Points):
o Successfully deployed the application on a hosting platform (e.g., Heroku,
Vercel, Netlify) with a working live demo link.