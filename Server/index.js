// Import required libraries
const express = require('express');      // Framework for creating the server and API routes
const mongoose = require('mongoose');    // Library used to connect and interact with MongoDB
const cors = require('cors');            // Allows requests from different origins (frontend ↔ backend)
const TodoModel = require('./Models/Todo'); // Import the Todo model we created with mongoose

// Create an Express application
const app = express();

// Middleware
app.use(express.json()); // Allows the server to read JSON data sent in requests
app.use(cors());         // Enables Cross-Origin Resource Sharing (frontend can call backend)

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/test')


// =============================
// GET ROUTE - Get all tasks
// =============================
app.get('/get', (req, res) => {

    // Find all documents in the Todo collection
    TodoModel.find({})

    // If successful, return the tasks as JSON
    .then(result => res.json(result))

    // If there is an error, return the error
    .catch(err => res.json(err))
});


// =============================
// PUT ROUTE - Update task status
// =============================
app.put('/update/:id', (req, res) => {

    // Get the task id from the URL parameter
    const id = req.params.id;

    // Get the new completed status from the request body
    const completed = req.body.completed;

    // Update the task's completed field in the database
    TodoModel.findByIdAndUpdate(id, { completed: completed })

    // Return the updated result
    .then(result => res.json(result))

    // Handle errors
    .catch(err => res.json(err));
});


// =============================
// DELETE ROUTE - Delete a task
// =============================
app.delete('/delete/:id', (req, res) => {

    // Extract the id from the request parameters
    const {id} = req.params;

    // Delete the task from the database
    TodoModel.findByIdAndDelete({_id: id})

    // Return the result
    .then(result => res.json(result))

    // Handle errors
    .catch(err => res.json(err))
});


// =============================
// POST ROUTE - Create a new task
// =============================
app.post('/add', (req, res) => {

    // Get the task text from the request body
    const task = req.body.task;

    // Create a new task document in MongoDB
    TodoModel.create({
        task: task
    })

    // Return the created task
    .then(result => res.json(result))

    // Handle errors
    .catch(err => res.json(err))
});


// =============================
// START SERVER
// =============================

// Start the backend server on port 3001
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});