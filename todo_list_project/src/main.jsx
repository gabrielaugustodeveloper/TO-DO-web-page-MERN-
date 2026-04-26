// Import StrictMode from React
// StrictMode helps detect potential problems in the application during development
import { StrictMode } from 'react'

// Import the function used to create the root of the React application
import { createRoot } from 'react-dom/client'

// Import global CSS styles applied to the entire app
import './index.css'

// Import the main App component (root component of the application)
import App from './App.jsx'


// Find the HTML element with id="root" in index.html
// and attach the React application to it
createRoot(document.getElementById('root')).render(

  // StrictMode wraps the application and activates extra checks
  // It only affects development and does not impact production
  <StrictMode>

    {/* Render the main App component */}
    <App />

  </StrictMode>,
)
