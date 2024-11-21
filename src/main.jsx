import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ApiProvider } from './contex/index.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componets/Home.jsx';
import AuthDashboard from './componets/Auth/AuthDashboard.jsx';
import About from './componets/About.jsx';
import Ticket from './componets/Ticket.jsx';
import UserProfile from './componets/profile/UserProfile.jsx';
import AdminPanel from './componets/AdminDashboard/AdminPanel.jsx';
import GoogleAuth_redirect from './componets/Auth/GoogleAuth_redirect.jsx';
import NewUserLogin from './componets/Auth/NewUserLogin.jsx';
const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const superUser = localStorage.getItem('superUser');
    const staff = localStorage.getItem('staff');

const router = createBrowserRouter([
  { element: <NewUserLogin />, path: '/newuserlogin' },
  {
    element: <App />,
    path: '/',
    children: [
      { element: <Home />, path: '/' },
      { element: <AuthDashboard />, path: '/auth' },
      { element: <About />, path: '/about' },
      { element: <Ticket />, path: '/tickets' },
      { element: <UserProfile />, path: '/profile' },
      // Conditionally render AdminPanel if the user is staff or super user
      ...(staff === 'true' || superUser === 'true' ? [
        { element: <AdminPanel />, path: '/admin-dashboard' }
      ] : []),
      { element: <GoogleAuth_redirect />, path: '/google-auth-redirect' },
    ],
  },
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
