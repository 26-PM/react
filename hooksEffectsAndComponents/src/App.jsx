import { useState,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Use ref
  const a = useRef(0)
  



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
    a.current=a.current+1;
    alert(`I run on every render`);
    // Use Ref
    console.log(`Value of a is ${a.current}`);
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
