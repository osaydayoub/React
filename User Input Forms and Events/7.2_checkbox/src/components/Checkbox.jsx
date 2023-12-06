import React from 'react'

function Checkbox(props) {
  return (
    <div>
        <input type="checkbox" id={props.id} checked={props.checked} onChange={props.onChange} />
        <label htmlFor={props.id}>{props.label}</label> 
    </div>
  )
}

export default Checkbox