import './App.css'
import Box from './components/box'
const boxes = [{ color: 'greenyellow', size: '100px' }, { color: 'red', size: '80px' }, { color: 'blue', size: '60px' }]

function App() {


  return (
    <div className='boxes-container'>

      {boxes.map((box, index) => {
        return <Box key={index} color={box.color} size={box.size}></Box>
      })}


    </div>
  )
}

export default App
