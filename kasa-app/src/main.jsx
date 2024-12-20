import React from 'react'
import ReactDOM from 'react-dom/client'    // Import du nouveau createRoot
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import AppRouter from './router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
)
