# react
Heya!

# Hooks Effects and Components

# React Routers

# npm i -D react-router-dom

import { BrowserRouter, Routes, Route } from "react-router-dom";

# const router=createBrowserRouter([
    {
    path:"/",
    element:<><Navbar/><Home/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:"/user/:username",
      element:<><Navbar/><User/></>
    },
])

<RouterProvider router={router}></RouterProvider>




# When state is changed in react whole app component is re-rendered.