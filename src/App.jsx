import { Outlet, RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import Register from './Components/Register'
import Login from './Components/Login'
import ResetPassword from './Components/ResetPassword'

const App = () => {
 
  return (
  <div>
      
      <Outlet/>
  </div>
  )
}

export default App