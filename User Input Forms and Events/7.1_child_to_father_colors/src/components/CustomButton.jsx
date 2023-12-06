import React from 'react'
import './CustomButton.css'
function CustomButton(props) {
    return (
        <div>
            <button className='CustomButton' style={{ backgroundColor: props.color }} onClick={props.onClick}>{props.children}</button>
        </div>
    )
}

export default CustomButton