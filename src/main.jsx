import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider'
import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={Routes}> </RouterProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
