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
import AllCard from './Pages-Component/All-Food-Card/AllCard';
import Gallery from './Gallery/Gallery';
import PurchaseProduct from './Pages-Component/Purchase-Pages/PurchaseProduct';
import MyCardList from './Pages-Component/MyCardList/MyCardList';
import Update from './Pages-Component/Update/Update';
// import App from './App';
import ProtectedRoute from './Protected-Routes/ProtectedRoute';

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

      // {
      //   path:'/myListFoods',
      //   element: <App></App>,
      //   loader: () => fetch('http://localhost:5000/food')
      // },
      {
        path: '/myListFoods',
        element: <MyCardList></MyCardList>,
        loader: () => fetch('http://localhost:5000/food')
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
      },

      {
        path: '/purchasePage',
        element: <ProtectedRoute>
          <PurchaseProduct></PurchaseProduct>
        </ProtectedRoute>,
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
      {
        path: '/allFoods',
        element: <AllCard></AllCard>,
        loader: () => fetch('http://localhost:5000/food')
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      }
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
