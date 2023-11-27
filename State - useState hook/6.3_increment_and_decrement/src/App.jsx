import { useState } from 'react'
import './App.css'

// Instructions
// We want to create two buttons and one label.
// The first button will increment the counter.
// The second button will decrement the counter
// A label that displays the current value.
// The counter range can only be from -10 to 10.
// If the counter is negative the label will be a red color.
// If the counter is positive the label will be a green color.
// If the counter is 0 the label will be black in color

function App() {
  const [count, setCount] = useState(0);
  const [boxClassName, setDisplay] = useState('count-box');

  function addOne() {
    if (count === 10) {

    } else {
      setCount(count + 1)
    }
    if (count+1 > 0) {
      setDisplay('count-green');
    } else if (count+1 === 0) {
      setDisplay('count-box');
    }


  }
  function SubtractOne() {
    if (count === -10) {
    } else {
      setCount(count - 1)
    }
    if (count-1 < 0) {
      setDisplay('count-red');
    } else if (count-1 === 0) {
      setDisplay('count-box');
    }
  }

  return (
    <><div className="container">
      <button onClick={addOne}>+</button>
      <div className={boxClassName}>{count}</div>
      <button onClick={SubtractOne}>-</button></div>
    </>
  )
}

export default App
