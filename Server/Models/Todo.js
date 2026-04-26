// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Create a schema that defines the structure of a Todo document
const todoSchema = new mongoose.Schema({

    // The text of the task
    task: String,

    // Indicates if the task is completed or not
    completed: {
        type: Boolean,   // This field stores true or false
        default: false   // When a new task is created, it starts as not completed
    }

});

// Create a model based on the schema
// "Todo" will be the collection name in MongoDB (mongoose will pluralize it to "todos")
const TodoModel = mongoose.model('Todo', todoSchema);

// Export the model so it can be used in other files (like index.js)
module.exports = TodoModel;
