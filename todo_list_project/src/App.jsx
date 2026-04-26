// Import React hooks used for state and side effects
import { useState, useEffect } from "react"

// Import the CSS file for styling the application
import './App.css'

// Import the Home component (main Todo interface)
import Home from './Home'

// Import icons used for the theme toggle button
import { BsMoonFill, BsSunFill } from "react-icons/bs"

function App() {

  // State to track whether dark mode is enabled
  // The function inside useState runs only once when the component loads
  // It checks localStorage to see if the user previously selected the dark theme
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  // useEffect runs every time darkMode changes
  // It saves the current theme in localStorage so the preference persists after page refresh
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (

    // Apply either the "dark" or "light" CSS class depending on the state
    <div className={darkMode ? "dark" : "light"}>

      {/* Theme toggle button */}
      <button
        className="theme_toggle"

        // When clicked, switch between dark and light mode
        onClick={() => setDarkMode(!darkMode)}
      >

        {/* Display the sun icon if dark mode is active, otherwise show the moon icon */}
        {darkMode ? <BsSunFill/> : <BsMoonFill/>}

      </button>

      {/* Render the main Todo interface */}
      <Home />

    </div>
  )
}

// Export the App component so it can be used by main.jsx
export default App