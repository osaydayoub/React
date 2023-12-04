import { useState } from 'react'
import './App.css'
import Spinner from './component/Spinner'
import { useEffect } from 'react';

function App({ setTimer }) {
  const [time, setTime] = useState(setTimer);
  useEffect(() => {
    console.log(`time=${time}`);
    setTimeout(() => {
      if (time === 0) {
        return;
      }
      setTime(time - 1);
    }, 1000)
  }, [time])
  return (
    <div className='App'>
      {time != 0 && <Spinner></Spinner>}
      {time != 0 && <h1>{time}</h1>}
    </div>
  )
}

export default App
