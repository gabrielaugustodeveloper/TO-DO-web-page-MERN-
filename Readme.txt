==================================================
📝 TODO LIST APP (Full Stack MERN Project)
==================================================

📌 OVERVIEW
--------------------------------------------------
This project is a Full Stack Todo List application built using the
MERN stack:

MongoDB • Express • React • Node.js

The application allows users to:
• Create tasks
• Mark tasks as completed or uncompleted
• Delete tasks

All tasks are stored in a MongoDB database.

The interface also includes:
• 🌙 Dark Mode / ☀️ Light Mode
• Smooth UI transitions
• A clean and simple user experience


🚀 FEATURES
--------------------------------------------------
✔ Create new tasks
✔ Mark tasks as completed or uncompleted
✔ Delete tasks
🌙 Toggle between Dark Mode and Light Mode
💾 Theme preference saved in localStorage
🗄 Tasks stored in MongoDB database
⚡ REST API built with Express
🎨 Animated and responsive interface
📭 Empty state message when no tasks exist


🧰 TECHNOLOGIES USED
--------------------------------------------------

Frontend
• React
• Axios
• React Icons
• CSS

Backend
• Node.js
• Express
• MongoDB
• Mongoose


⚙️ INSTALLATION
--------------------------------------------------

1️⃣ Clone the repository

git clone https://github.com/yourusername/todo-fullstack-app.git
cd todo-fullstack-app


2️⃣ Install Backend Dependencies

cd server
npm install

Packages used include:

• express
• mongoose
• cors
• nodemon


3️⃣ Install Frontend Dependencies

cd client
npm install

Packages used include:

• react
• axios
• react-icons


▶️ RUNNING THE APPLICATION
--------------------------------------------------

Start the backend server

cd server
npm start

Server runs on:
http://localhost:3001


Start the frontend

cd client
npm run dev

Frontend runs on:
http://localhost:5173


🔌 API ENDPOINTS
--------------------------------------------------

📥 Get all tasks
GET /get

Returns all tasks stored in the database.


➕ Create a task
POST /add

Example body:

{
  "task": "Study React"
}


✔ Update task completion
PUT /update/:id

Example body:

{
  "completed": true
}


🗑 Delete a task
DELETE /delete/:id


🗄 DATABASE STRUCTURE
--------------------------------------------------

Each task is stored as a document in MongoDB.

Example:

{
  "_id": "6653c2a...",
  "task": "Build Todo App",
  "completed": false
}

Schema used in the backend:

task: String
completed: Boolean (default: false)


🎨 INTERFACE FEATURES
--------------------------------------------------

🌙 Dark / Light Theme
Users can switch between dark mode and light mode.
The selected theme is saved in localStorage so it
remains even after refreshing the page.

✨ Hover Animations
Tasks slightly increase in size when hovered,
creating a more modern and interactive interface.

📭 Empty State
If there are no tasks, the application displays
a message encouraging the user to add the first task.


🔄 APPLICATION FLOW
--------------------------------------------------

User enters a task
        ↓
React sends a POST request
        ↓
Express receives the request
        ↓
MongoDB stores the task
        ↓
Frontend fetches updated tasks
        ↓
Interface updates


👨‍💻 AUTHOR
--------------------------------------------------

Gabriel Augusto

Student developer interested in:
• Full Stack Development
• Software Engineering
• Programming Competitions


📄 LICENSE
--------------------------------------------------

This project is open source and available under
the MIT License.