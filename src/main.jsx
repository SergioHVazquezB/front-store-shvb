import React from 'react'
import ReactDOM from 'react-dom/client'
import StoreApp from './StoreApp'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreApp />
    </BrowserRouter>
  </React.StrictMode>,
)
