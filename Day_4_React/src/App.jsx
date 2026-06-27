import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'


const App = () => {

  let [ count, setCount ] = useState(0)
  let [ flag, setFlag ] = useState(true)
  console.log(flag)

  return (
    <>
      <h1>Count is - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setFlag(false)}>Flag - {flag}</button>
    </>
  )
}

export default App