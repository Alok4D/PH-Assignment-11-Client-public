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
        loader: ({params}) => fetch(`http://localhost:5000/food${params.id}`)
      },
      {
        path: '/foodAddItem',
        element: <FoodAddItem></FoodAddItem>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
