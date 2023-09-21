import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <App />
   <Toaster />
  </BrowserRouter>  
)
