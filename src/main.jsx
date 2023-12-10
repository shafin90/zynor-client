import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home/Home';
import Services from './pages/Services/Services';
import OurWork from './pages/OurWork/OurWork/OurWork';
import OurBlog from './pages/OurBlog/OurBlog';
import ContactUs from './pages/ContactUs/ContactUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/ourWork",
        element: <OurWork></OurWork>
      },
      {
        path: "/ourBlog",
        element: <OurBlog></OurBlog>
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);