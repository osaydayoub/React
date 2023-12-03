import React from 'react'
import Balloon from './Balloon'

function Child(props) {
  return (
    <div className='child-container'>
        <h3>{props.childName}</h3>
        <Balloon color={props.color}></Balloon>
    </div>
  )
}

export default Child