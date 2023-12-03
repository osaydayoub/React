import { useState } from 'react'
import Box1 from './components/Box1.jsx'
import Box2 from './components/Box2.jsx'
import Box3 from './components/Box3.jsx'
import Box4 from './components/Box4.jsx'
import './App.css'

function App() {


  return (
    <>
      <Box1>
        <Box2>
          <Box3>
            <Box4/>
            <Box4/>
          </Box3>
        </Box2>
      </Box1>
    </>
  )
}

export default App
