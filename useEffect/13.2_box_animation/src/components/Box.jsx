import './Box.css'
import { useState,useEffect } from 'react'
function Box(props) {
    const [display,setDisplay]=useState("block");
    useEffect(()=>{
        setTimeout(() => {
            setDisplay('none');
        }, 4000);

    },[])

    return (
            <div className='box' style={{
                backgroundColor: props.color,
                height: props.size,
                width: props.size,
                display: display
            }}></div>
    )
}

export default Box