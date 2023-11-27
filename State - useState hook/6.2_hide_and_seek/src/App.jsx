import { useState } from 'react'
import './App.css'

function App() {
  const [boxClassName, setDisplay] = useState('box');
  function changeClassName() {
    if (boxClassName === 'box') {
      setDisplay('box-2');
    } else {
      setDisplay('box');
    }
  }
  return (
    <>
      <div className="box-container">
        <button onClick={changeClassName}>show/hide</button>
        <div className={boxClassName}></div>
      </div>
    </>
  )
}

export default App
