// Import React and hooks used for state and lifecycle behavior
import React, { useState } from 'react'

// Import the component responsible for creating new tasks
import Create from './Create'

// Import axios to make HTTP requests to the backend API
import axios from 'axios'

// Import useEffect to run code when the component loads
import { useEffect } from 'react'

// Import icons used for task status and deletion
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";

function Home() {

  // State that stores the list of todos retrieved from the database
  const [todos, setTodos] = useState([])

  // useEffect runs once when the component first loads
  // It fetches all tasks from the backend server
  useEffect(() => {

    axios.get('http://localhost:3001/get')

    // Save the returned tasks in the todos state
    .then(result => setTodos(result.data))

    // Log any error to the console
    .catch(err => console.log(err))

  }, []) // empty dependency array = run only once


  // Function to delete a task
  const handleDelete = (id) => {

    // Send DELETE request to the backend with the task id
    axios.delete('http://localhost:3001/delete/'+id)

    // Reload the page to update the task list
    .then(() => location.reload())

    // Handle possible errors
    .catch(err => console.log(err))
  }


  // Function to toggle a task's completed state
  const toggleTask = (id, completed) => {

    // Send PUT request to update the task
    // completed is inverted (!completed) so it toggles
    axios.put("http://localhost:3001/update/" + id, { completed: !completed })

    // Reload the page so the UI reflects the update
    .then(() => location.reload())

    // Handle possible errors
    .catch(err => console.log(err))
  }


  return (

    // Main container for the Todo app
    <div className='home'>

      {/* Application title */}
      <h1>Welcome to the Todo List App</h1>

      {/* Component used to create new tasks */}
      <Create />

      {
        // If there are no tasks in the list
        todos.length === 0
        ?

        // Show an empty state message
        <div className="empty">
            <p>No tasks yet</p>
            <span>Add your first task above 👆</span>
        </div>

        :

        // Otherwise render each task
        todos.map(todo => (

            // Task container
            <div className='task' key={todo._id}>

                {/* Checkbox section (icon + task text) */}
                <div 
                  className='checkbox'

                  // Toggle completion when clicked
                  onClick={() => toggleTask(todo._id, todo.completed)}
                >

                  {
                    // Show different icon depending on completion status
                    todo.completed
                    ?
                    <BsFillCheckCircleFill className='icon'/>
                    :
                    <BsCircleFill className='icon'/>
                  }

                  {/* Task text (with line-through if completed) */}
                  <p className={todo.completed ? "line_through" : ""}>
                    {todo.task}
                  </p>

                </div>

                {/* Delete button section */}
                <div>
                    <span>

                      {/* Trash icon that deletes the task */}
                      <BsFillTrashFill 
                        className='icon'

                        // Delete the task when clicked
                        onClick={() => handleDelete(todo._id)}
                      />

                    </span>
                </div>

            </div>
        ))
      }

    </div>
  )
}

// Export the component so it can be used in App.jsx
export default Home
