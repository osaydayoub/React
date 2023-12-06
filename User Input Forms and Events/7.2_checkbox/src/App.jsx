import { useState } from 'react'
import './App.css'
import Checkbox from './components/Checkbox'
const checkBoxesArray = [
  { id: '2', label: 'I read the term of the app' },
  { id: '3', label: 'I accept the term of the app' },
  { id: '4', label: 'I want to get the weekly news letter' },
  { id: '5', label: 'I want to get sales and offers' }
]


function App() {
  const [CheckBox1, setCheckBox1] = useState(false);
  const [CheckBox2, setCheckBox2] = useState(false);
  const [CheckBox3, setCheckBox3] = useState(true);
  const [CheckBox4, setCheckBox4] = useState(true);
  const stateArray = [CheckBox1, CheckBox2, CheckBox3, CheckBox4]
  function handleChange(index) {
    switch (index) {
      case 0:
        setCheckBox1(!CheckBox1);
        break;
      case 1:
        setCheckBox2(!CheckBox2);
        break;
      case 2:
        setCheckBox3(!CheckBox3);
        break;
      case 3:
        setCheckBox4(!CheckBox4);
        break;
    }
  }

  return (
    <>
        {console.log(stateArray)}

      {
        checkBoxesArray.map((checkBox, index) => {
          return (
            <Checkbox
              key={index}
              label={checkBox.label}
              id={checkBox.id}
              checked={stateArray[index]}
              onChange={() => handleChange(index)}
            />)
        })
      }
    </>
  )
}

export default App
