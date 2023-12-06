import { useState } from 'react'
import './App.css'
import CustomButton from './components/CustomButton';

function App() {
  const colors = ["blue", "red", "yellow"];
  const [color, setColor] = useState("");
  const handleClick = (color) => {
    setColor(color);
  }

  return (
    <div className='bottons-container'>
      {
        colors.map((color, index) => {
          return <CustomButton
            key={index} color={color} onClick={() => handleClick(color)}>{color}</CustomButton>
        })
      }
      <h1>The color selected is: {color}</h1>
    </div>
  )
}

export default App
