import React from 'react'
import './Card.css'

function Card({name,img}) {
  return (
    <div className='card-container'>
        <h3>{name}</h3>
        <img src={img} alt="an image" />
    </div>
  )
}

export default Card