// Import React and the useState hook for managing component state
import React, { useState } from 'react'

// Import axios to make HTTP requests to the backend API
import axios from 'axios';

function Create() {

  // State that stores the text the user types in the input field
  const [task, setTask] = useState("");

  // Function called when the user clicks the "Add" button
  const handleAdd = () => {

    // Send a POST request to the backend server to create a new task
    axios.post('http://localhost:3001/add', {task: task})

    // If the request succeeds
    .then(result => {

      // Reload the page so the new task appears in the list
      location.reload();
    })

    // If an error occurs, print it in the browser console
    .catch(err => console.log(err))
  };

  return (

    // Container for the input and button
    <div className='create_form'>

      {/* Title for the task creation section */}
      <h1>Add a new item to the list:</h1>

      {/* Input field where the user types the task */}
      <input
        type="text"
        placeholder='Enter Task'

        // Update the task state every time the user types
        onChange={(e) => setTask(e.target.value)}
      />

      {/* Button that triggers the handleAdd function */}
      <button type="button" onClick={handleAdd}>
        Add
      </button>

    </div>
  )
}

// Export the component so it can be used in Home.jsx
export default Create
