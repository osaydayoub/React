import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
      function addOne(){
      setCount(count + 1)
    }

  return (
    <>
    <button onClick={addOne}>increment</button> 
    {count}
    </>
  )
}

export default App
