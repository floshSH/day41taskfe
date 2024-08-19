import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ResetPasswordPage1 from './Components/ResetPasswordPage1.jsx'
import Home from './Components/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import ResetPassword from './Components/ResetPassword.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

const router=createBrowserRouter([{
    
    element:<App />,
    children:[
        {
           path:"/" ,
           element:<Login/>
        },
      {
        path:"/register",
        element:<Register />
      },{
        path:"/resetpassword",
        element:<ResetPasswordPage1 />
      },
      {
        path:"/resetpassword/:email",
        element:<ResetPassword />
      },
      {
        path:"/Home",
        element:<Home />
      }
    ]
  }])
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
