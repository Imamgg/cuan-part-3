import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Profile from './Profile.jsx'
import Pesona from './Pesona.jsx'
import Cerita from './Cerita.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/pesona',
    element: <Pesona />,
  },
  {
    path: '/cerita',
    element: <Cerita />,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
