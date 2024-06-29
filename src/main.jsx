import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider } from '@mui/material'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'
import { settingTheme } from './MuiFunctions.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={settingTheme} >
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
