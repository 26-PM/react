import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  // Runs on first render
  useEffect(() => {
    alert("I run on first render.")
  }, [])

  // Runs when count state is changed
  useEffect(() => {
    alert("I run when count is changed.")
  }, [count])

  // Runs on every render
  useEffect(() => {
    alert("I run on every render.")
  })

  return (
    <>
    <div className="counter">
      Value of counter = {count}
    </div>
    <button onClick={()=>{
      setCount(count+1);
    }}>Update Count</button>
    </>
  )
}

export default App
