import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Roots/Root';
import Error from './Error-Pages/Error';
import FoodSection from './Pages-Component/Food-Sections/FoodSection';
import FoodAddItem from './Pages-Component/Food-Add-Item/FoodAddItem';
import CardDetails from './Pages-Component/Card-Details/CardDetails';
import Login from './Login/Login';
import Register from './Register/Register';
import AuthProvider from './Auth-Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <FoodSection></FoodSection>,
        loader: () => fetch('http://localhost:5000/food')
      },
      {
        path: '/cardDetails/:id',
        element: <CardDetails></CardDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
      },
      {
        path: '/foodAddItem',
        element: <FoodAddItem></FoodAddItem>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
   <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
