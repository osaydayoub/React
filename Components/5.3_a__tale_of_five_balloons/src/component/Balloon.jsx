import React from 'react'
import './style.css'
function Balloon(props) {
    return (
        <div className='balloon' style={{ backgroundColor: props.color }}></div>
    )
}

export default Balloon