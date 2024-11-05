import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ApiProvider } from './contex/index.jsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './componets/Home.jsx';
import AuthDashboard from './componets/Auth/AuthDashboard.jsx';
const router = createHashRouter([
  {
    element: <App />, path: '/', children: [
      { element: <Home />, path: '/' },
      { element: <AuthDashboard />, path: '/auth' },
     
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider>
      <RouterProvider router={router}>
      <App />
      </RouterProvider>
    </ApiProvider>
  </StrictMode>
);
