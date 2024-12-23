import React from 'react'
import ReactDOM from 'react-dom/client'    // Import du nouveau createRoot
import './index.css'
import App from './App'

// Import main SASS
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
