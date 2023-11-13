import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Donation from './Component/Donation/Donation';
import Statistics from './Component/Statistics/Statistics';
import Errorpage from './Component/Errorpage/Errorpage';
import CategoryDetails from './Component/Categories/CategoryDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Errorpage></Errorpage> ,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/category.json')
      },
      {
        path: "/Donation",
        element: <Donation></Donation>,
       
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/categories/:id",
        element: <CategoryDetails></CategoryDetails>,
        loader: () =>fetch('/category.json')
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
