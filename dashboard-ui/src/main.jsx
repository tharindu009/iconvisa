import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AdminContextProvider>
  </StrictMode>,
)
