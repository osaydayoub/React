import { useState } from 'react'
import './App.css'
import ImportantNotButtons from './components/ImportantNotButtons'

function App() {
  

  return (
    <div className='App'>
    <ImportantNotButtons important={true}>Important</ImportantNotButtons>
    <ImportantNotButtons important={false}>Not Important</ImportantNotButtons>
    </div>
  )
}

export default App
