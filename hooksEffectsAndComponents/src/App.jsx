import { useState,useEffect,useRef } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import User from './components/User';
function App() {

  const router=createBrowserRouter([
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

  const [count, setCount] = useState(0)

  // Use ref
  const a = useRef(0)

  // Second Case - to prevent dom manipulation
  const btnRef = useRef()
  



  // Runs on first render
  useEffect(() => {
    alert("I run on first render.")
    btnRef.current.style.backgroundColor="orangered"
  }, [])

  // Runs when count state is changed
  useEffect(() => {
    alert("I run when count is changed.")
  }, [count])

  // Runs on every render
  useEffect(() => {
    a.current=a.current+1;
    alert(`I run on every render`);
    // Use Ref
    console.log(`Value of a is ${a.current}`);
  })



  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    <div className="counter">
      Value of counter = {count}
    </div>
    <button ref={btnRef} onClick={()=>{
      setCount(count+1);
    }}>Update Count</button>
    </>
  )
}

export default App
