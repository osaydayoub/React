import { useState } from 'react'
import './App.css'
import Grandfather from './components/Grandfather'
import GiftsProvider from './components/GiftsContext'

function App() {


  return (
    <GiftsProvider>
      <Grandfather />
    </GiftsProvider>


  )
}

export default App
